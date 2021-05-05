build:
	docker-compose up --build

dev:
	docker-compose up; \
	docker-compose down

down:
	docker-compose down