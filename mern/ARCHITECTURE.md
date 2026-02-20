# MERN (MongoDB/Express/React/Node.js) Sandbox Architecture

가장 대중적인 스택으로, MongoDB의 핵심인 Mongoose를 이용한 모델 설계와 관계 설정을 실험하기에 최적입니다.

## Tech Stack
- **Database**: MongoDB (Local/Atlas)
- **ODM**: Mongoose (TypeScript 지원)
- **Server**: Express.js + Node.js (TypeScript)
- **Frontend**: React (Vite)

## Directory Structure
```text
/mern/
├── server/
│   ├── src/
│   │   ├── config/     # MongoDB 연결 설정
│   │   ├── models/     # Mongoose Schema/Model (핵심 학습 포인트)
│   │   ├── controllers/# API 로직
│   │   └── routes/      # 라우트 설정
│   └── package.json
├── client/             # React App (Optional)
└── package.json
```

## Key Learning Points
1. **Schema Design**: Mongoose를 이용한 임베딩(Embedding) vs 참조(References) 설계.
2. **Middleware**: Mongoose Pre/Post Hook을 활용한 데이터 가공 자동화.
3. **Populate**: 참조 관계의 데이터를 조인(Join)처럼 가져오는 `populate` 기능.
4. **Validation**: Mongoose Built-in Validator와 Custom Validator 적용.
