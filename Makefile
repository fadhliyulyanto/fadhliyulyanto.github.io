build-image:
	docker build -t portofolio .
run-image:
	docker run -p 3002:80 portofolio