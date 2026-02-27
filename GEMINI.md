# Gemini CLI Project Context: MongoDB Sandbox

이 프로젝트는 MongoDB를 중심으로 다양한 백엔드 기술 스택(MERN, FastAPI, Go, Next.js)을 실험하고 학습하는 샌드박스 환경입니다.

## 1. 프로젝트 개요 (Project Overview)
- **목적**: MongoDB 데이터 모델링(참조, 임베딩), CRUD, Aggregation 및 인덱싱 실습.
- **주요 기술**:
  - **MERN**: Express (TypeScript) + React (Vite) + Mongoose.
  - **기타 예정**: FastAPI (Python), Go, Next.js (App Router).
- **데이터 모델 (Data Model)**:
  - `User`: 기본 계정 정보.
  - `Project`: 1:N 참조(Reference) 구조 실습.
  - `Task`: 임베딩(Embedded Documents) 및 통계(Aggregation) 실습.

## 2. 프로젝트 구조 (Architecture)
```text
C:\ksj\mongodb\
├── mern\           # [진행 중] MERN 스택 통합 디렉토리
│   ├── server\     # Express + TypeScript + Mongoose 백엔드
│   └── client\     # Vite + React + TypeScript 프런트엔드
├── fastapi\        # [대기] Python FastAPI 구현체
├── go\             # [대기] Go 구현체
└── nextjs\         # [대기] Next.js (App Router) 구현체
```

## 3. 실행 및 개발 가이드 (MERN 기준)

### 환경 설정 (Prerequisites)
- **MongoDB**: 로컬 설치 또는 MongoDB Atlas 연결이 필요합니다.
- **환경 변수**: `mern/server/.env` 파일에 `MONGODB_URI`를 설정해야 합니다.

### 주요 명령어
- **전체 실행 (루트)**: `cd mern && npm run dev` (서버와 클라이언트 동시 실행)
- **서버 단독**: `cd mern/server && npm run dev`
- **클라이언트 단독**: `cd mern/client && npm run dev`
- **의존성 설치**: `cd mern && npm run install-all`

## 4. 개발 컨벤션 (Conventions)
- **언어**: TypeScript를 기본으로 사용하며, 엄격한 타입 정의를 권장합니다.
- **백엔드 (Node.js)**: ESM 모드(`type: module`)를 사용합니다. 파일 임포트 시 `.ts` 대신 `.js` 확장자를 명시해야 할 수 있습니다.
- **데이터베이스**: Mongoose ODM을 사용하여 스키마를 정의하고 관리합니다.

## 5. 문서화 및 이력 관리 지침 (Documentation Policy)
- **분산 관리**: 각 스택별 폴더(`mern`, `go`, `fastapi`, `nextjs`) 내에 `STATUS.md`와 `CHANGELOG_DETAILS.md` 파일을 각각 생성하여 관리합니다.
- **수정 이력 관리**: 해당 스택 내 코드나 설정 파일이 수정될 때마다 **폴더 내 `CHANGELOG_DETAILS.md`** 파일에 파일별 수정 날짜와 상세 내용을 기록해야 합니다.
- **진행 상황 업데이트**: 각 폴더 내 `STATUS.md`의 진행 현황과 마지막 업데이트 날짜를 갱신해야 합니다.
- **루트 대시보드**: 루트의 `STATUS.md`는 전체적인 스택별 진행 상태와 링크만 요약하여 관리합니다.

## 6. 학습 포인트 및 로드맵
- **현재 단계**: MERN 스택의 기초 뼈대(User 모델 및 API) 구축 완료.
- **다음 단계**:
  1. `Project` 및 `Task` 모델 구현 (1:N 관계 설정).
  2. 프런트엔드(`client`)에서 실제 API 호출 및 데이터 렌더링.
  3. 타 스택(Go, FastAPI)으로 동일 기능 구현 및 비교.

---
*이 가이드는 `STATUS.md`, `DATA_PLAN.md`, `CODE_GUIDE.md`를 바탕으로 작성되었습니다.*
