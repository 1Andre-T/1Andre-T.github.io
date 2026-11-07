# LAB-05: Terraform en Google Cloud

## Evidencia
| Lab | Puntaje | Captura | Carpeta |
| --- | --- | --- | --- |
| GSP233 | 100/100 | 01-gsp233/evidencia.PNG | 01-gsp233/ |
| GSP497 | 100/100 | 02-gsp497/Evidencia 2.PNG | 02-gsp497/ |
| GSP345 | 100/100 | evidencia/gsp345.png | 03-gsp345/ |

## Bitácora

### GSP233
**IP externa del Service:** 136.90.95.203
*(Nota: El laboratorio finalizó antes de poder capturar el curl a NGINX, pero el balanceador fue aprovisionado con éxito en esta IP).*

**Qué hice:** Desplegué un clúster de GKE y un balanceador de carga para NGINX usando Terraform con los providers de google y kubernetes.
**Qué me costó:** Instalar el binario de Terraform manualmente en Cloud Shell y recordar pasarle las variables de región/zona al comando plan.
**Qué cambiaría:** Prestaría más atención a recolectar toda la evidencia visual (como la prueba de NGINX) antes de hacer clic en End Lab.

### GSP497
**Qué hice:** Desplegué un clúster de GKE configurado con Cloud Operations (Logging y Monitoring) y una política de alerta personalizada para Prometheus (`Prometheus mem alloc`), validando el funcionamiento con `make validate` y realizando la limpieza completa con `make teardown`.
**Qué me costó:** Coordinar la ejecución manual del comando `terraform plan` para extraer y guardar el `plan-inicial.txt` antes de dejar que los scripts automáticos de Google construyeran los recursos.
**Qué cambiaría:** Automatizar la extracción del plan directamente desde el flujo del Makefile para ahorrar pasos intermedios.

### GSP345
**Qué hice:** Configuré una estructura de módulos sin plantillas base, importé instancias preexistentes al estado, configuré un backend remoto en Google Cloud Storage, modifiqué tipos de máquinas, integré un módulo de VPC del Terraform Registry y configuré reglas de firewall.
**Qué me costó:** Enfrenté un problema donde Terraform quería destruir y recrear las instancias importadas porque la imagen original de Debian no coincidía, y luego tuve una cascada de errores de sintaxis por unas comillas faltantes (`Invalid multi-line string`).
**Qué cambiar

## Uso de IA
**Qué le pedí:** Guía para estructurar los módulos del Challenge Lab, ayuda para interpretar el `plan` que marcaba destrucción de instancias y asistencia para resolver errores de sintaxis en HCL.
**Qué me dio:** El diagnóstico del error de sintaxis (comillas faltantes), los bloques de código base para los módulos, y los comandos precisos para generar los archivos `plan-<n>.txt` y `state-list.txt` solicitados en la rúbrica.
**Qué corregí:** Inserté mis propias variables de entorno, corregí la versión exacta de la imagen de Debian basándome en los logs para evitar el "drift" en la importación, y ejecuté manualmente cada validación y plan en Cloud Shell.