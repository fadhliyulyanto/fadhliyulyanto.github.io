# Gunakan image Nginx resmi
FROM nginx:latest

# Salin file konfigurasi Nginx
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Salin file HTML ke direktori default Nginx
COPY index.html /usr/share/nginx/html/index.html

# Ekspos port 80 untuk digunakan oleh Docker
EXPOSE 80