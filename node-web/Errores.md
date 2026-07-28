docker build -t node-web .
PS C:\Users\amona\Desktop\Docker-Tutorial\Tutorial-docker\node-web> docker build -t node-web . 
ERROR: failed to connect to the docker API at npipe:////./pipe/dockerDesktopLinuxEngine; check if the path is correct and if the daemon is running: open //./pipe/dockerDesktopLinuxEngine: El sistema no puede encontrar el archivo especificado.


--------------------------------------------------------------------------------------------------------------------------


docker build -t node-web .
PS C:\Users\amona\Desktop\Docker-Tutorial\Tutorial-docker\node-web> docker build -t node-web .
[+] Building 0.9s (8/9)                                                                                                                                                                               docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                                                                                                                                  0.0s
 => => transferring dockerfile: 1.58kB                                                                                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/node:26-alpine                                                                                                                                                     0.5s
 => [internal] load .dockerignore                                                                                                                                                                                     0.0s
 => => transferring context: 2B                                                                                                                                                                                       0.0s
 => [1/5] FROM docker.io/library/node:26-alpine@sha256:e88a35be04478413b7c71c455cd9865de9b9360e1f43456be5951032d7ac1a66                                                                                               0.0s
 => => resolve docker.io/library/node:26-alpine@sha256:e88a35be04478413b7c71c455cd9865de9b9360e1f43456be5951032d7ac1a66                                                                                               0.0s
 => [internal] load build context                                                                                                                                                                                     0.0s
 => => transferring context: 156B                                                                                                                                                                                     0.0s
 => CACHED [2/5] WORKDIR /app                                                                                                                                                                                         0.0s
 => CACHED [3/5] COPY package*.json ./                                                                                                                                                                                0.0s
 => ERROR [4/5] RUN pnpm ci --omit=dev                                                                                                                                                                                0.2s
------
 > [4/5] RUN pnpm ci --omit=dev:
0.198 /bin/sh: pnpm: not found
------
Dockerfile:16
--------------------
  14 |     #reducir el tamaño de la imagen y mejorar la seguridad.
  15 |     
  16 | >>> RUN pnpm ci --omit=dev
  17 |     
  18 |     #Esto sería copiar todos mis archivos de la aplicación al contenedor, pero como ya copiamos el package.json y package-lock.json antes,
--------------------
ERROR: failed to build: failed to solve: process "/bin/sh -c pnpm ci --omit=dev" did not complete successfully: exit code: 127

View build details: docker-desktop://dashboard/build/desktop-linux/desktop-linux/5rflyo1idig3assd1qp3e386p

What's next:
    Debug this build failure with Gordon → docker ai "help me fix this build failure"

Solución 1: Usar npm (la más sencilla)

Si tu proyecto tiene un archivo package-lock.json, deberías usar:

RUN npm ci --omit=dev

en lugar de:

RUN pnpm ci --omit=dev

Solución 2: Si realmente utilizas pnpm

Si tu proyecto tiene un archivo pnpm-lock.yaml, primero debes instalar pnpm.

Con Node 26 puedes hacerlo mediante Corepack, que viene incluido:

FROM node:26-alpine

WORKDIR /app

COPY package*.json ./

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN pnpm install --prod