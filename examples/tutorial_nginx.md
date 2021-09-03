# nginx 서버 설치 운영해보기
## 설치
```bash
$ docker search nginx
$ docker pull nginx
$ docker images
```


## 실행
```bash
$ docker ps -a
$ docker images
$ docker create --name webserver nginx:latest # background로 실행
$ docker ps -a
$ docker start webserver
$ docker ps -a
$ docker inspect webserver #--format option 활용을 적극적으로
$ curl container_ip:80
$ docker logs webserver #docker logs -f webserver
$ docker top webserver
$ docker exec -it webserver /bin/bash # 터미널 만들어서 인터렉티브하게 연결
$ cd /usr/share/nginx/html/...html 수정
$ curl container_ip:80
```

## 종료
```bash
$ docker stop webserver
$ docker rm webserver
```
