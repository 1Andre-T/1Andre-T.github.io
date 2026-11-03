## Bitácora de decisiones (LAB-02)

### Reto 1: Imagen mínima
Decisión: Usé multi-stage build en el Dockerfile de la API (Node.js).
- Alternativas evaluadas: Usar la imagen de node base completa vs node-alpine con multi-stage.
- Por qué elegí esta: Reduce drásticamente el peso final al no incluir dependencias de desarrollo (`npm install --omit=dev`) en la imagen de producción.
- Cómo lo verifiqué: Revisando el peso reducido con `docker images`.

### Reto 3: Nadie es root
Decisión: Usé un usuario sin privilegios en la API y en la Web.
- Alternativas evaluadas: Dejar el root por defecto vs crear un usuario nuevo vs usar uno existente.
- Por qué elegí esta: En Node usé el usuario `node` que ya viene incluido. Para Nginx, usé la imagen oficial `nginxinc/nginx-unprivileged` que usa el puerto 8080 en lugar del 80 para no requerir root.
- Cómo lo verifiqué: Ejecutando `docker compose exec api whoami`.

### Reto 4: Red segmentada
Decisión: Creé dos redes distintas (`frontend` y `backend`) en `compose.yaml`.
- Por qué elegí esta: Para aplicar el principio de mínimo privilegio. Nginx (web) no necesita, ni debe, tener acceso a la base de datos (db). Solo la API está conectada a ambas redes.

### Reto 6: Cero secretos
Decisión: Usé `.env` excluido en `.gitignore` y creé un `.env.example`.
- Por qué elegí esta: Evita que contraseñas reales suban a GitHub. Compose toma la variable de entorno y la inyecta al levantar, permitiendo que el Codespace arranque usando el `.env` local.