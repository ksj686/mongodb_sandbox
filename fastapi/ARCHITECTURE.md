# FastAPI (Python) + MongoDB Sandbox Architecture

FastAPI는 현대적인 비동기(async/await) 기반의 프레임워크로, JSON 기반의 MongoDB와 가장 높은 궁합을 자랑합니다.

## Tech Stack
- **Framework**: FastAPI (Pydantic-based)
- **Database**: MongoDB (Motor Driver - Async)
- **ODM**: Beanie (Pydantic v2 호환 비동기 ODM)
- **Data Validation**: Pydantic (Type Safety)

## Directory Structure
```text
/fastapi/
├── main.py             # FastAPI 앱 엔트리 포인트
├── db/                 # DB 연결 (Motor/Beanie 설정)
├── models/             # Pydantic 모델 정의 (데이터 검증)
├── routes/             # API 엔드포인트 정의
├── services/           # 비즈니스 로직 처리
└── requirements.txt
```

## Key Learning Points
1. **Async Interaction**: Motor와 `async/await`를 사용한 비차단(Non-blocking) DB 호출.
2. **Aggregation Framework**: Python의 강력한 데이터 가공 기능을 결합한 복잡한 쿼리 분석.
3. **Pydantic Validation**: 데이터의 `In-out` 검증(Validation) 및 직렬화/역직렬화.
4. **Data Analysis**: Pandas 등으로 쿼리 결과를 시각화하거나 가공하는 실험.
