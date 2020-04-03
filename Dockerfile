  FROM nginx

  COPY ./dist/ /usr/share/nginx/html/
  COPY ./vhost.nginx.conf /etc/nginx/conf.d/bilibili-vue.conf

  EXPOSE 80
