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
  - **Security**: 가이드 문서의 민감 정보(URI) 제거 및 플레이스홀더화 완료.
  - **Documentation**: `mern/README.md` 신규 생성 (실행 절차 및 핵심 개념 정리).

---

## 2. 예정 작업 (Next Steps)
1. **MongoDB Atlas 전환**: [진행 중] 클라우드 DB 연결 이슈(Whitelist Error) 해결.
    - **조치 1**: `.env`의 URI 형식을 `mongodb+srv://`로 다시 복사하여 공백 없이 입력 확인.
    - **조치 2**: 비밀번호 재설정 (특수문자 제외) 후 URI 반영.
    - **조치 3**: 현재 네트워크 환경(공공/회사 WiFi 등)에서 27017 포트 차단 여부 확인 (모바일 핫스팟 등으로 테스트).
2. **클라우드 데이터 시딩**: 연결 성공 후 `npm run seed`를 실행하여 Atlas로 데이터 업로드 및 대시보드 확인.
3. **Aggregation 심화**: 특정 태그별 할 일 개수 또는 우선순위별 통계 파이프라인 실습.

---

## 3. 실행 방법
1. `cd mern/server` -> `docker-compose up -d`
2. `cd mern` -> `npm run dev`

**마지막 업데이트**: 2026-03-03
