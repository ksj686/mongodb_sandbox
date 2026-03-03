# MERN Stack Modification History

MERN 프로젝트 폴더 내 파일별 수정 내역을 관리합니다.

---

## mern/README.md
| 날짜 | 수정 내용 |
| :--- | :--- |
| 2026-02-27 | 신규 파일 생성 (실행 절차, 프로젝트 구조 및 핵심 기능 가이드 정리) |

---

## server/src/models/Project.ts & Task.ts
| 날짜 | 수정 내용 |
| :--- | :--- |
| 2026-02-27 | 신규 모델 생성 (1:N 관계 정의) |

---

## server/src/routes/projectRoutes.ts & taskRoutes.ts
| 날짜 | 수정 내용 |
| :--- | :--- |
| 2026-02-27 | 신규 라우트 생성 (CRUD 및 Populate 적용) |
| 2026-02-27 | `GET /stats` 엔드포인트 추가 (MongoDB Aggregation Pipeline 적용) |

---

## server/src/index.ts
| 날짜 | 수정 내용 |
| :--- | :--- |
| 2026-02-27 | 신규 라우터 등록 |

---

## server/src/seed.ts & package.json
| 날짜 | 수정 내용 |
| :--- | :--- |
| 2026-02-27 | 테스트 데이터 생성을 위한 Seed 스크립트 및 `tsx` 실행 환경 구축 |
| 2026-02-27 | `npm audit fix` 실행 및 보안 취약점 해결 |

---

## server/docker-compose.yml
| 날짜 | 수정 내용 |
| :--- | :--- |
| 2026-02-27 | 로컬 MongoDB 컨테이너 설정 추가 및 최신 사양(version 필드 삭제) 반영 |

---

## client/src/App.tsx & App.css
| 날짜 | 수정 내용 |
| :--- | :--- |
| 2026-02-27 | 백엔드 API 연동 대시보드 UI 구현 및 스타일링 |
| 2026-02-27 | `npm audit fix` 실행 및 보안 취약점 해결 |
| 2026-02-27 | 통계 데이터 시각화 (진행률 바, 통계 수치) 및 데이터 새로고침 버튼 추가 |

---

## MONGODB_SETUP_GUIDE.md
| 날짜 | 수정 내용 |
| :--- | :--- |
| 2026-02-27 | 신규 파일 생성 (Docker 및 Atlas 설치/설정 가이드) |
| 2026-02-27 | 보안 경고(GitHub Secret Scanning) 해결을 위해 실제 비밀번호 및 주소를 플레이스홀더로 대체 |

---

## mern/package.json
| 날짜 | 수정 내용 |
| :--- | :--- |
| 2026-03-03 | 루트에 중복 설치된 `mongodb` 패키지 제거 (Mongoose 사용으로 불필요) |
| 2026-03-03 | `concurrently` 패키지를 최신 버전(`^9.2.1`)으로 업데이트 및 의존성 동기화 |
| 2026-03-03 | MongoDB Atlas 전환 작업 착수 및 연결 이슈(DNS/IP Whitelist) 트러블슈팅 진행 중 |
