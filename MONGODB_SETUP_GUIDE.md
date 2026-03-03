# MongoDB 설정 가이드 (Docker & Atlas)

이 가이드는 로컬 개발 환경에서 Docker를 사용하여 MongoDB를 구축하고, 추후 클라우드(Atlas)로 전환하는 방법을 설명합니다.

---

## 1단계: Docker로 로컬 MongoDB 구축 (현업 권장)

로컬 PC에 직접 설치하지 않고 컨테이너 기술을 사용하여 깔끔하게 운영하는 방식입니다.

### 1. 사전 준비
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)이 설치되어 있고 실행 중이어야 합니다.

### 2. 실행 방법
터미널에서 `mern/server` 디렉토리로 이동한 후 다음 명령어를 입력하세요.
```bash
cd mern/server
docker-compose up -d
```
* `-d` 옵션은 백그라운드에서 실행함을 의미합니다.

### 3. 접속 정보 및 환경 변수 설정
`mern/server/.env` 파일을 생성하거나 수정하여 아래 내용을 입력하세요.
```env
# 로컬 Docker 접속용 URI (사용자: admin, 암호: <your-password>)
MONGODB_URI=mongodb://admin:<your-password>@localhost:27017/sandbox?authSource=admin
PORT=5000
```

### 4. 관리 도구 추천
- **MongoDB Compass**: GUI 툴로 데이터를 눈으로 보고 싶을 때 설치하세요. 접속 주소에 위 URI를 넣으면 됩니다.

---

## 2단계: MongoDB Atlas (클라우드)로 전환하기

프로젝트를 배포하거나 어디서든 접근하고 싶을 때 사용합니다.

### 1. Atlas 설정 순서
1. [MongoDB Atlas](https://www.mongodb.com/atlas) 가입 및 무료 클러스터 생성.
2. **Database Access**: 사용자 이름과 암호 설정 (예: 사용자 지정 ID / 비밀번호).
3. **Network Access**: `Add Current IP Address` 클릭하여 현재 내 PC 접근 허용.
4. **Connection**: `Connect your application` 선택 후 드라이버(Node.js) 연결 문자열 복사.

### 2. 환경 변수 교체
기존 Docker용 URI를 Atlas에서 복사한 주소로 바꾸기만 하면 코드는 그대로 동작합니다.
```env
# Atlas 접속용 URI 예시 (실제 주소와 비밀번호로 교체 필요)
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/sandbox?retryWrites=true&w=majority
```

---

## 주요 명령어 팁
- **컨테이너 중지**: `docker-compose stop`
- **컨테이너 삭제 (데이터 유지)**: `docker-compose down`
- **로그 확인**: `docker-compose logs -f`
