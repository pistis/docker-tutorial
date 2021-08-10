# Docker Command
## image
빌드
```
$ docker build -t {image}:{tag} .
```
목록
```
$ docker images
```
태그 변경
```
$ docker tag {image}:{tag} {account}/{image}:{tag}
```
삭제
```
$ docker rmi {image}
```
컨테이너도 강제 삭제
```
$ docker rmi -f {image}
```

## container
동작중 컨테이너 목록
```
$ docker ps
```
정지된 컨테이너 목록
```
$ docker ps -a
```
실행
```
$ docker run -d -p 80:80 --name {container-name} {image}:{tag} 
```
삭제
```
$ docker rm -f {container-name}
```
모두 삭제
```
$ docker rm `docker ps -a -q`
```
컨테이너 bash shell 접속
```
$ docker exec -it fortune /bin/bash
```

## hub
로그인
```
$ docker login
```
배포
```
$ docker push {account}{image}:{tag}
```
