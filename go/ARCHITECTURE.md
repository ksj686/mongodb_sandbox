# Go + MongoDB Sandbox Architecture

Go는 공식 드라이버를 통해 MongoDB와 매우 낮은 지연 시간으로 통신하며 고성능 처리가 가능합니다.

## Tech Stack
- **Language**: Go (1.20+)
- **Database**: MongoDB (Official Go Driver)
- **Framework**: Gin-Gonic (HTTP Routing)
- **Architecture**: Standard Go Project Layout

## Directory Structure
```text
/go/
├── main.go             # 서버 엔트리 포인트
├── db/                 # MongoDB 연결 설정
├── models/             # 데이터 구조 (BSON/JSON 태그 활용)
├── handlers/           # HTTP 요청 처리
├── repository/         # DB CRUD 추상화 (학습 포인트)
└── go.mod
```

## Key Learning Points
1. **BSON Mapping**: Go 구조체(struct)와 MongoDB BSON 포맷의 맵핑.
2. **Context handling**: 비동기 작업 시 `context`를 이용한 타임아웃/취소 처리.
3. **Cursor Iteration**: 대량의 데이터를 `cursor`로 효율적으로 처리하는 방법.
4. **Performance**: Go 드라이버의 동시성(Goroutine) 활용 방법.
