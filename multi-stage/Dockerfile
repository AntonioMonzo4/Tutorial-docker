
#etapa 1: construcción de la aplicación


FROM node:22-alpine AS builder 
#renombramos la imagen base a builder para poder usarla en la segunda etapa de construcción
#esto es útil para reducir el tamaño de la imagen final, 
#ya que no necesitamos todas las herramientas de desarrollo en la imagen final. 

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npm run build

FROM node:22-alpine AS runner 

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./

COPY --from=builder /app/dist ./dist

RUN npm ci --omit=dev

