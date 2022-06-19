# wanted_pre_onboarding

## 1.프로젝트 정보
---
- 본 서비스는 기업의 채용을 위한 웹 서비스 입니다.
- 회사는 채용공고를 생성하고, 이에 사용자는 지원합니다.

## 2.설치 및 실행 방법
---
1.해당 프로젝트를 clone 후, 프로젝트 폴더로 이동해서 패키지를 설치해줍니다.
```bash
git clone https://github.com/juhwano/wanted_pre_onboarding.git
```
```bash
cd wanted_pre_onboarding
```
```bash
npm install
```
2.DB 정보 수정
- config.json 파일의 username(mySQL 사용자이름), password, database(생성할 DB이름)를 수정해줍니다.
![Modify_databaseInformation](https://user-images.githubusercontent.com/77667889/174465075-8f4fca6e-121e-475d-94a1-716aef2a174e.png)

3.DB 생성하기
- config.json파일의 database 이름과 동일한 이름으로 database를 생성합니다.
```bash
sequelize db:create
```

4.서버 실행(서버실행 시 테이블이 자동 생성됩니다.)
```bash
npm start
```

5.필요시, 더미 데이터 삽입(user, company 더미 데이터가 만들어집니다. 명령어 실행 후 서버 재실행)
```bash
sequelize db:seed:all
```

## 3.사용 기술
---
1.Node v16.15.1
2.express v4.18.1
2.MySQL v8.0.29

## 4.DB modeling
---
![database_modeling](https://user-images.githubusercontent.com/77667889/174465203-58278d92-3bec-4ff5-be6e-9c2544328f0f.png)


## 5.구현 기능
---
1. 채용공고 등록<br/>
![addApplication](https://user-images.githubusercontent.com/77667889/174466142-1a6c60fc-74b8-4212-9007-2143e35561f1.png)
2. 채용공고 수정
3. 채용공고 삭제
4. 채용공고 목록 조회<br/>
![getApplicationList](https://user-images.githubusercontent.com/77667889/174465842-344f32bd-a215-4635-a6d1-b53f261b2c7a.png)
5. 채용공고 검색(사용기술 or 채용포지션)<br/>
![searchApplication](https://user-images.githubusercontent.com/77667889/174466115-258f7e8d-e5a5-4d5f-99b1-d3315299efb2.png)
6. 채용공고 상세 페이지
6. 사용자 지원내역 조회<br/>
![getHistoryList](https://user-images.githubusercontent.com/77667889/174466243-4227bd72-9e53-40ba-89cd-3fc9042b78f4.png)
8. 사용자 공고 지원
