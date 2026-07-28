npm install           

docker build -t node-web . 

docker run --rm node-web   

docker ps -a        

docker rm  jolly_lamarr    

Hasta aquí no podriamos entra en el puerto ******

Para ello tendriamos que indicar el en comando el puerto 

docker run --rm -p 5002:3000 node-web 