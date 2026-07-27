# Tutorial de docker 

## 1-¿Qué problema solucinona? 

Docker soluciona el problema de en mi máquina si funciona. 

- Evita fallos de versiones.
- Entornos diferentes con distintas medias.

Empaqueta las carasterísticas en un contenedor para funcionar en cualquier máquina. 

## 2- Archivo Dockerfile 

Archivo que indica como tiene que crear el contenedor.

Primeras sentencias: 

FROM imagen:versión --> la imágen es la plantilla o molde para crear contenedores

WORKDIR /app --> /app es la carpeta de trabajo  

COPY app.js . --> copia el archivo a la raiz 

CMD ["node", "app.js"] --> Ejecuta los comandos 

## 3- Como contruir una imágen con docker 

Desde la carpeta en la que tenemos el Dockerfile ejecutamos: 

docker build -t nombre-primera-imagen . --> el . es porque estamos dentro de la misma carpeta 

docker images --> para ver las imágenes que tenemos creadas 

docker run nombre-primera-imagen --> ejecuta el contenedor 