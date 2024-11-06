build-image:
	docker build -t portofolio .
run-image:
	docker run -d -p 3002:80 --name portofolio portofolio