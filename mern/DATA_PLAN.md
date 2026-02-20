# MongoDB Sandbox Data Plan

이 프로젝트에서 다룰 데이터 모델과 학습 목표를 정리합니다. 단순히 데이터를 저장하는 것을 넘어, MongoDB의 다양한 관계 설계(Relationship Design)를 실험합니다.

---

## 1. 주요 엔티티 (Entities)

### A. User (사용자)
- **목적**: 기본 계정 관리 및 소유권 확인.
- **필드**: `name`, `email`, `role` (admin/user).

### B. Project (프로젝트)
- **목적**: 여러 개의 Task를 묶는 단위.
- **필드**: `title`, `description`, `owner` (User 참조).
- **학습 포인트**: **One-to-Many Reference (1:N 참조)**. 하나의 프로젝트에 여러 할 일이 연결되는 구조.

### C. Task (할 일)
- **목적**: 실제 수행할 작업 데이터.
- **필드**: `content`, `status` (pending/done), `priority`, `tags`.
- **학습 포인트**: 
  - **Embedded Documents**: `tags`를 문자열 배열로 저장하여 조회 속도 최적화.
  - **Aggregation**: 특정 상태(`status`)별 할 일 개수 통계 내기.

---

## 2. MongoDB 실습 시나리오

1.  **Level 1: 기본 CRUD**
    - 사용자를 생성하고, 해당 사용자가 새로운 프로젝트를 만드는 과정 구현.
2.  **Level 2: 참조와 Join (Populate)**
    - 특정 프로젝트를 조회할 때, 그 프로젝트를 소유한 사용자의 정보를 함께 가져오기 (`.populate('owner')`).
3.  **Level 3: 복잡한 쿼리 (Aggregation)**
    - "각 사용자별로 완료되지 않은 할 일이 몇 개인지" 통계 데이터 산출.
4.  **Level 4: 인덱싱 (Indexing)**
    - 이메일(`email`) 필드에 Unique 인덱스를 걸어 중복 가입 방지 및 검색 성능 향상.

---

## 3. API 엔드포인트 설계 (예시)
- `GET /api/projects`: 프로젝트 목록 및 소유자 정보 조회.
- `POST /api/projects/:id/tasks`: 특정 프로젝트에 새로운 할 일 추가.
- `GET /api/stats`: 전체 프로젝트 및 할 일 통계 데이터 반환.
