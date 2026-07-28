npm install           

docker build -t node-web . 

docker run --rm node-web   

docker ps -a        

docker rm  jolly_lamarr    

Hasta aquí no podriamos entra en el puerto ******

Para ello tendriamos que indicar el en comando el puerto 

docker run --rm -p 5002:3000 node-web 
y se abrira en el 5002

docker run --rm -d -p 5002:3000 node-web nose bloquea terminal 




PS C:\Users\amona\Desktop\Docker-Tutorial\Tutorial-docker\node-web> docker ps
CONTAINER ID   IMAGE      COMMAND                  CREATED         STATUS         PORTS                                         NAMES
f6a552e41f8c   node-web   "docker-entrypoint.s…"   2 minutes ago   Up 2 minutes   0.0.0.0:5003->3000/tcp, [::]:5003->3000/tcp   tender_antonelli
PS C:\Users\amona\Desktop\Docker-Tutorial\Tutorial-docker\node-web> docker logs -f f6a552e41f8c
(node:1) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///app/server.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to /app/package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
Server is running on port 3000 


docker ps -a --> listar todos los contenedores aunque non esten encendidos 

docker stop id --> para contenedor 

docker run -d -p 5005:3000 -e SALUDO="Hola Mundo docker"
