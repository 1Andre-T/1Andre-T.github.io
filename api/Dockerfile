# Etapa 1: Construcción (builder) para mantener la imagen final pequeña (Reto 1)
FROM node:20-alpine AS builder
WORKDIR /app
# Copiamos primero solo el package.json para aprovechar la caché de Docker
COPY package*.json ./
RUN npm install --omit=dev
# Luego copiamos el código fuente
COPY app.js ./

# Etapa 2: Producción
FROM node:20-alpine

# Actualizar npm para parchear vulnerabilidades (ej. CVE en tar)
RUN npm install -g npm@latest

WORKDIR /app
# Copiamos solo lo necesario desde la etapa de construcción
COPY --from=builder /app ./
# Cambiamos a un usuario sin privilegios por seguridad (Reto 3)
USER node

EXPOSE 3000
CMD ["node", "app.js"]