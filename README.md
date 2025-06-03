# Askend filter assignment

Repo for askend home assignment.

## Stack

Frontend:

- React
- Node 22+

Backend:

- Java 21+
- Spring Boot 3
- PostgreSQL

## Instructions

For setting up frontend development:

```bash
cd ./frontend
npm i
npm run dev
```

For setting up backend development:

```bash
cd ./backend
docker compose -f ./src/main/resources/docker/postgres.yml up
./gradlew bootRun
```

Backend test run (requires docker for test containers):

```bash
cd ./backend
./gradlew integrationTests
```
