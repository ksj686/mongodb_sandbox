# Next.js Stack Architecture

Next.js (App Router)와 MongoDB를 연동하는 아키텍처를 정의합니다.

## 1. 기술 스택 (Tech Stack)
- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Package Manager**: **pnpm** (권장: 설치 속도 및 의존성 관리 최적화)
- **Database**: MongoDB (Mongoose 또는 MongoDB Native Driver)
- **Styling**: Tailwind CSS 또는 Vanilla CSS

## 2. 주요 목표
- Server Components를 활용한 직접적인 DB 데이터 페칭.
- Server Actions를 통한 데이터 생성 및 수정 로직 구현.
- API Routes (Route Handlers) 실습.

---
*참고: 이 프로젝트는 npm 대신 pnpm을 사용하여 패키지 관리를 수행합니다.*
