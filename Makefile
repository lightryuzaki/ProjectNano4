build:
	docker build -t projectnano .

clean:
	docker rm projectnano_server

deploy:
	docker-compose up -d

run:
	docker run --name projectnano_server -p 8484:8484/tcp -p 7575-7579:7575-7579/tcp projectnano

stop:
	docker stop projectnano_server
