# MERN Stack Project Status

이 파일은 MERN 스택 프로젝트의 상세 진행 상황을 정리합니다.

---

## 1. 진행 현황 (Current Progress)
- **상태**: [진행 중] 로컬 개발 인프라 및 데이터 시딩 완료.
- **주요 구현 내용**:
  - **Backend**: Express + TypeScript 기반 CRUD API 및 Aggregation (Stats) 구현 완료.
  - **Frontend**: Vite + React 기반 대시보드 UI, API 연동 및 통계 시각화 완료.
  - **Infrastructure**: Docker Compose 기반 로컬 MongoDB 구축.
  - **Scripts**: `npm run seed`를 통한 테스트 데이터 자동 생성 로직.

---

## 2. 예정 작업 (Next Steps)
1. **입력 폼(Form) 추가**: 브라우저에서 사용자, 프로젝트, 할 일을 직접 생성할 수 있는 폼 구현.
2. **Aggregation 심화**: "특정 태그별 할 일 개수" 또는 "우선순위별 통계" 등 복잡한 파이프라인 실습.
3. **오류 처리 강화**: API 요청 실패 시 사용자에게 알림(Toast 등) 제공.

---

## 3. 실행 방법
1. `cd mern/server` -> `docker-compose up -d`
2. `cd mern` -> `npm run dev`

**마지막 업데이트**: 2026-02-27
