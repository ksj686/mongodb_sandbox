# MERN Server Code Guide

이 가이드는 `mern/server` 프로젝트의 주요 코드들이 어떤 역할을 하는지 설명합니다.

---

### 1. `.env` (Environment Variables)
- **역할**: 데이터베이스 연결 문자열(URI), 포트 번호 등 민감하거나 환경에 따라 변하는 정보를 저장합니다.
- **주요 설정**: `MONGODB_URI`는 MongoDB 서버의 주소를 담고 있습니다.

### 2. `src/config/db.ts` (Database Connection)
- **역할**: `mongoose` 라이브러리를 사용하여 MongoDB와의 연결을 설정합니다.
- **동작**: `async/await`를 사용하여 비동기로 연결을 시도하며, 성공 시 로그를 남기고 실패 시 프로세스를 종료합니다.

### 3. `src/models/User.ts` (Data Modeling)
- **역할**: MongoDB에 저장될 데이터의 형태(Schema)를 정의합니다.
- **Mongoose 기능**:
    - `Schema`: 필드 타입, 필수 여부, 고유성(unique) 등을 설정합니다.
    - `interface IUser`: TypeScript를 위해 데이터 타입을 정의하여 코드 작성 시 자동 완성을 지원합니다.
    - `timestamps`: `createdAt`과 `updatedAt` 필드를 자동으로 관리합니다.

### 4. `src/routes/userRoutes.ts` (API Endpoints)
- **역할**: 클라이언트의 요청(URL)과 서버 로직을 연결합니다.
- **구현 기능**:
    - `GET /api/users`: 모든 사용자 목록을 DB에서 조회하여 반환합니다.
    - `POST /api/users`: 새로운 사용자 정보를 전달받아 DB에 저장합니다.

### 5. `src/index.ts` (Entry Point)
- **역할**: 서버의 심장부로, 모든 설정과 미들웨어를 통합하여 서버를 구동합니다.
- **주요 흐름**:
    1. 환경 변수 로드 (`dotenv`)
    2. DB 연결 (`connectDB`)
    3. 미들웨어 설정 (`cors`, `express.json`)
    4. 라우터 등록 (`userRoutes`)
    5. 지정된 포트에서 서버 대기 (`app.listen`)

---

### 실행 방법
1. **의존성 설치**: `npm install`
2. **개발 모드 실행**: `npm run dev` (nodemon을 통해 코드 변경 시 자동 재시작)
3. **빌드**: `npm run build` (TypeScript를 JavaScript로 컴파일)
