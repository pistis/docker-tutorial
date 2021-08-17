# Docker Command
## image
- docker build -t {image}:{tag} .
- docker tag {image}:{tag} {account}/{image}:{tag}
- docker search [option] {image}:{tag}
- docker pull [option] {image}:{tag}
- docker images
- docker inspect [option] {image}:{tag}
- docker rmi [option] {image}
    - `docker rmi -f {image} # 컨테이너도 강제 삭제`

## container
- docker create [option] {image}:{tag}
- docker run [option] {image}:{tag} # pull + create + start
    - `docker run -d -p 80:80 --name {container-name} {image}:{tag}`
- docker start [option] {container}
- docker stop [option] {container}
- docker rm [option] {container}
    - `docker rm -f {container-name}`
    - `docker rm 'docker ps -a -q' # 모두 삭제`
- docker ps [option]
    - `docker ps`
    - `docker ps -a`
- docker inspect {container}
- docker exec [option] {container} /bin/bash
    - `docker exec -it {container} /bin/bash`
- docker top [option] {container} # 컨테이너 내부 동작 프로세스
- docker logs [option] {container}

## hub
- docker login
- docker push {account}/{image}:{tag}
- docker pull httpd:latest


