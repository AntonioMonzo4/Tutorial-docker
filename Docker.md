# Tutorial de docker 

## 1-¿Qué problema solucinona? 

Docker soluciona el problema de en mi máquina si funciona. 

- Evita fallos de versiones.
- Entornos diferentes con distintas medias.

Empaqueta las carasterísticas en un contenedor para funcionar en cualquier máquina. 

## 2-Archivo Dockerfile 

Archivo que indica como tiene que crear el contenedor.

Primeras sentencias: 

FROM imagen:versión --> la imágen es la plantilla o molde para crear contenedores

WORKDIR /app --> /app es la carpeta de trabajo  

COPY app.js . --> copia el archivo a la raiz 

CMD ["node", "app.js"] --> Ejecuta los comandos 

## 3-Como contruir una imágen con docker 

Desde la carpeta en la que tenemos el Dockerfile ejecutamos: 

docker build -t nombre-primera-imagen . --> el . es porque estamos dentro de la misma carpeta 

docker images --> para ver las imágenes que tenemos creadas 

docker run nombre-primera-imagen --> ejecuta el contenedor si ponemos --rm una vez acaba se borra y si ponemos -it lo hacemos iteractivo

docker ps -a --> todos los contenedores que hemos creado 

docker --version 

docker compose version

docker info 

## 4-Como instalar docker 

Web: docker.com 

En el apartado productos se llama docker desktop. 

## 5-Como funciona docker 

No es una máquina virtual lo que hace es que ejecuta en tu máquina en tu propia sandbox. 
Pero si es cierto que docker engine procesa su propio linux para funcionar. Peo no hay aislamiento 
total solo a nivel del proceso afectando significativamente al peso, tiempo de arranque, rendimiento...

Docker lo podemos utilizar para desarrollo, pruebas, simular entornos... 

## 6-Imágenes de prueba 

Web: dockerhub.com 

Si no encuentrauna imágen en local la buscara en dockerhub 

## 7-Volumen y builds 

La creación de volumen sirve para la persistencia de datos para crear máquinas.ç

Las builds es para cuantificar los comandos ya sea para el tiempo en memoria el cache.... 


## 8-Comandos en la creación 

En docker solo importa el útimo comando porque estos se van sobreescribiendo 

FROM python:3.12

CMD ["echo", "Hola"]
CMD ["echo", "Adiós"] 

La salida sería Adiós. 

Lo mismo ocurre con Entrypoint: 
ENTRYPOINT ["python"]
ENTRYPOINT ["uvicorn"] 

Solo se utilizaría el último 
