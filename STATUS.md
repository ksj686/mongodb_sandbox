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
- **예정 작업 (Next Steps)**:
  1. **MERN 백엔드 구체화**: `Project`와 `Task` 모델을 작성하고 `DATA_PLAN.md`에 정의된 API 연동.
  2. **프런트엔드 연결**: `client/src/App.tsx`에서 서버 API를 호출하여 데이터를 화면에 리스트 형태로 출력.

### ⏳ Go + MongoDB - [대기]
- **상태**: 아키텍처 정의 완료.

### ⏳ FastAPI (Python) + MongoDB - [대기]
- **상태**: 아키텍처 정의 완료.

### ⏳ Next.js (App Router) + MongoDB - [대기]
- **상태**: 아키텍처 정의 완료.

---

## 3. 설정 및 설치 (Configuration & Setup)
- **MongoDB 설치 여부**: [미완료]
  - **선택 필요**: 로컬 설치(Community Server) vs 클라우드(Atlas) 중 결정 후 `.env` 설정 업데이트 예정.

---

## 4. 실행 방법 (MERN 기준)
1. `cd mern`
2. `npm run dev` (서버와 클라이언트 동시 실행)

---

**마지막 업데이트**: 2026-02-20
