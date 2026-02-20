# MongoDB Sandbox Project Status

이 파일은 현재 프로젝트의 진행 상황과 각 스택별 상태를 정리합니다.

---

## 1. 전체 프로젝트 구조 (Project Layout)
- **Root Directory**: `C:\ksj\mongodb`
- **Global Config**: 
  - `.gitignore`: 모든 스택(Node.js, Go, Python, Next.js)을 지원하는 통합 무시 설정 완료.
  - `mern/package.json`: 루트에서 서버와 클라이언트를 동시에 실행하도록 설정 완료.

---

## 2. 프로젝트별 진행 현황

### ✅ MERN (MongoDB, Express, React, Node.js) - [진행 중]
- **상태**: 뼈대 구축 및 통합 실행 환경 완료.
- **진행 내용**:
  - `server`: Express + TypeScript + Mongoose 기반 백엔드 구축.
  - `client`: Vite + React + TypeScript 기반 프런트엔드 구축.
  - **이슈 해결**: Node.js ESM 모드(`type: module`) 설정 및 TypeScript 임포트 확장자(`.js`) 문제 해결.
  - **주요 파일**: 
    - `mern/DATA_PLAN.md`: 데이터 모델링 및 학습 시나리오 정의.
    - `mern/server/CODE_GUIDE.md`: 서버 코드 구조 및 역할 가이드.
- **남은 작업**: 실제 `DATA_PLAN`에 따른 API 구현 및 프런트엔드 연동.

### ⏳ Go + MongoDB - [대기]
- **상태**: 아키텍처 정의 완료.
- **주요 파일**: `go/ARCHITECTURE.md`
- **남은 작업**: `gin`, `mongo-go-driver` 설치 및 기본 CRUD 서버 구축.

### ⏳ FastAPI (Python) + MongoDB - [대기]
- **상태**: 아키텍처 정의 완료.
- **주요 파일**: `fastapi/ARCHITECTURE.md`
- **남은 작업**: `motor`, `beanie`, `pydantic` 환경 구축.

### ⏳ Next.js (App Router) + MongoDB - [대기]
- **상태**: 아키텍처 정의 완료.
- **주요 파일**: `nextjs/ARCHITECTURE.md`
- **남은 작업**: Next.js 프로젝트 초기화 및 MongoDB Client 연결 설정.

---

## 3. 실행 방법 (MERN 기준)
1. `cd mern`
2. `npm run dev` (서버와 클라이언트 동시 실행)

---

**마지막 업데이트**: 2026-02-20
