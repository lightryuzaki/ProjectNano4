build:
	docker build -t projectnano .

deploy:
	docker-compose up -d

stop:
	docker stop projectnano4_server_1
