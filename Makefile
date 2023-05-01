.PHONY: install build run stop restart kill

install:
	npm install

build:
	docker-compose build

run:
	docker-compose up -d
	docker ps

stop:
	docker-compose down

restart:
	docker-compose restart

kill:
	@if [ ! -z "$$(docker ps -q)" ]; then docker kill $$(docker ps -q); fi
