FROM nginx:latest

COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

ADD src /usr/share/nginx/html/src
COPY index.html /usr/share/nginx/html

EXPOSE 80