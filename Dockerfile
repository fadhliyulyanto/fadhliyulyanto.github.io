# Gunakan image Nginx resmi
FROM nginx:latest

# Salin file konfigurasi Nginx
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Salin file HTML ke direktori default Nginx
COPY src /usr/share/nginx/html/src
COPY index.html /usr/share/nginx/html/

# Ekspos port 80 untuk digunakan oleh Docker
EXPOSE 80
