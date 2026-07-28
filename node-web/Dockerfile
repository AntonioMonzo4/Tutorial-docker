FROM node:26-alpine

WORKDIR /app

#Esto es clave para la cache de Docker, ya que si no se copia el package.json y 
#package-lock.json antes de copiar el resto del código,
# cada vez que se haga un cambio en el código,
# se volverá a instalar todas las dependencias, lo cual es innecesario y lento.

COPY package*.json ./

#Instalamos las dependencias de la aplicación y ci es una forma de instalar las dependencias 
#de producción, omitiendo las dependencias de desarrollo. Esto es útil para 
#reducir el tamaño de la imagen y mejorar la seguridad.

RUN npm ci --omit=dev

#Esto sería copiar todos mis archivos de la aplicación al contenedor, pero como ya copiamos el package.json y package-lock.json antes,
# podemos copiar el resto de los archivos después de instalar las dependencias, lo cual es más eficiente y permite aprovechar la cache de Docker.
# el primer . es el contexto de construcción, es decir, la carpeta donde se encuentra el Dockerfile y el segundo . es la ruta dentro del contenedor donde se copiarán los archivos. 

COPY . . 

#Es importante exponer el puerto en el que la aplicación escuchará las solicitudes entrantes. 
#En este caso, la aplicación escucha en el puerto 3000, 
#por lo que exponemos ese puerto para que pueda ser accesible desde fuera del contenedor.

EXPOSE 3000

USER node 

#El comando USER node es importante para ejecutar la aplicación con un usuario no privilegiado, 
# lo cual es una buena práctica de seguridad.

CMD ["node", "server.js"]