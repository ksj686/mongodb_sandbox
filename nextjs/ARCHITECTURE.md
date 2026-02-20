# Next.js (App Router) + MongoDB Sandbox Architecture

Next.js는 서버 컴포넌트와 Server Actions를 통해 프런트엔드와 백엔드가 하나의 프로젝트로 통합된 개발 경험을 제공합니다.

## Tech Stack
- **Framework**: Next.js (App Router)
- **Database**: MongoDB (Atlas 또는 Local)
- **ORM/ODM**: Prisma (또는 Native MongoDB Driver)
- **Auth**: NextAuth.js (DB 연동 인증 실험)

## Directory Structure
```text
/nextjs/
├── app/
│   ├── api/            # API Route 핸들러
│   ├── layout.tsx
│   └── page.tsx        # UI & Server Components
├── components/         # React 클라이언트 컴포넌트
├── lib/                # DB 연결 유틸리티 (`mongodb-client.ts`)
├── prisma/             # Prisma Schema 정의 (사용 시)
└── package.json
```

## Key Learning Points
1. **Server-side Fetching**: 클라이언트 API 호출 없이 서버 컴포넌트에서 직접 DB 조회.
2. **Server Actions**: `use server`를 통한 안전하고 직관적인 데이터 변경(Mutation).
3. **Data Caching & Revalidation**: Next.js의 캐싱 메커니즘과 MongoDB 데이터 동기화.
4. **Integration**: UI 개발과 DB 스키마 설계의 빠른 피드백 루프 경험.
