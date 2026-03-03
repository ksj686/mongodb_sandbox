# MERN Stack MongoDB Sandbox

이 프로젝트는 MongoDB를 중심으로 Express, React, Node.js를 연동하여 데이터 모델링, 관계 설계, 그리고 집계(Aggregation) 기능을 학습하기 위한 개발 샌드박스입니다.

## 🚀 시작하기 (Quick Start)

### 1. 사전 준비 (Prerequisites)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/): 로컬 MongoDB 컨테이너 실행을 위해 필요합니다.
- [Node.js](https://nodejs.org/): v18 이상의 버전을 권장합니다.

### 2. 설치 (Installation)
`mern/` 디렉토리에서 아래 명령어를 실행하여 서버와 클라이언트의 의존성을 한꺼번에 설치합니다.
```bash
npm run install-all
```

### 3. 데이터베이스 실행 (Database Setup)
`mern/server` 디렉토리에서 Docker를 사용하여 MongoDB를 백그라운드에서 실행합니다.
```bash
cd server
docker-compose up -d
```

### 4. 테스트 데이터 생성 (Seeding)
서버 디렉토리에서 테스트용 유저, 프로젝트, 할 일 데이터를 자동으로 생성하고 연결합니다.
```bash
npm run seed
```

### 5. 개발 모드 실행 (Development)
`mern/` 디렉토리에서 서버와 클라이언트를 동시에 실행합니다.
```bash
npm run dev
```
- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend API**: [http://localhost:5000](http://localhost:5000)

## 📂 프로젝트 주요 구조
- **`server/`**: Express + TypeScript 백엔드
  - `src/models/`: Mongoose 스키마 (User, Project, Task). 1:N 관계 정의.
  - `src/routes/`: API 엔드포인트. `$lookup`을 이용한 Aggregation 통계 로직 포함.
  - `src/seed.ts`: 초기 데이터 구축용 스크립트.
- **`client/`**: Vite + React + TypeScript 프런트엔드
  - `src/App.tsx`: 대시보드 UI. 진행률 바를 통한 통계 시각화.

## 💡 필수 지식 및 핵심 기능
- **Data Modeling**: 유저가 프로젝트를 소유하고, 프로젝트가 여러 할 일을 가지는 참조(Reference) 구조.
- **Aggregation Pipeline**: MongoDB 서버 측에서 프로젝트별 할 일의 개수와 완료 상태를 계산하여 반환.
- **ESM & tsx**: Node.js의 최신 ESM 모드와 TypeScript를 원활하게 실행하기 위해 `tsx` 도구 사용.
- **Environment Variables**: `.env` 파일을 통해 로컬(Docker) 및 클라우드(Atlas) DB 연결 문자열 관리.

---
*상세 진행 상황은 `STATUS.md`를, 파일별 수정 이력은 `CHANGELOG_DETAILS.md`를 확인하세요.*
