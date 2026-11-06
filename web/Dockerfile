# Imagen oficial sin privilegios de root (Reto 3 y 6 reglas base)
FROM nginxinc/nginx-unprivileged:1.25-alpine

# Cambiar a root temporalmente para actualizar paquetes vulnerables
USER root
RUN apk upgrade --no-cache
# Volver al usuario sin privilegios de Nginx (ID 101)
USER 101

# Copiamos la configuración de nginx
COPY web/nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los archivos del frontend.
# Nota: Las rutas asumen que el build se ejecutará desde la raíz del proyecto.
COPY index.html /usr/share/nginx/html/
COPY estilos.css /usr/share/nginx/html/
COPY libro-de-visitas.js /usr/share/nginx/html/