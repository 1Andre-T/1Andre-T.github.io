# LAB-05: Terraform en Google Cloud

## Evidencia
| Lab | Puntaje | Captura | Carpeta |
| --- | --- | --- | --- |
| GSP233 | 100/100 | 01-gsp233/evidencia.PNG | 01-gsp233/ |
| GSP497 | 100/100 | 02-gsp497/Evidencia 2.PNG | 02-gsp497/ |

## Bitácora

### GSP233
**IP externa del Service:** 136.90.95.203
*(Nota: El laboratorio finalizó antes de poder capturar el curl a NGINX, pero el balanceador fue aprovisionado con éxito en esta IP).*

**Qué hice:** Desplegué un clúster de GKE y un balanceador de carga para NGINX usando Terraform con los providers de google y kubernetes.
**Qué me costó:** Instalar el binario de Terraform manualmente en Cloud Shell y recordar pasarle las variables de región/zona al comando plan.
**Qué cambiaría:** Prestaría más atención a recolectar toda la evidencia visual (como la prueba de NGINX) antes de hacer clic en End Lab.

### GSP497
**Qué hice:** Desplegué un clúster de GKE configurado con Cloud Operations (Logging y Monitoring) y una política de alerta personalizada para Prometheus (`Prometheus mem alloc`), validando el funcionamiento con `make validate` y realizando la limpieza completa con `make teardown`[cite: 15, 17, 25, 27].
**Qué me costó:** Coordinar la ejecución manual del comando `terraform plan` para extraer y guardar el `plan-inicial.txt` antes de dejar que los scripts automáticos de Google construyeran los recursos.
**Qué cambiaría:** Automatizar la extracción del plan directamente desde el flujo del Makefile para ahorrar pasos intermedios.

## Uso de IA
## Uso de IA
**Qué le pedí:** Consultas puntuales sobre la sintaxis de los comandos de Terraform y cómo organizar la estructura de carpetas en el repositorio.
**Qué me dio:** Ejemplos de referencia para los archivos de configuración y validación de la estructura.
**Qué corregí:** Adapté los comandos a la versión exacta del entorno y ejecuté personalmente todo el despliegue y la limpieza en Google Cloud.