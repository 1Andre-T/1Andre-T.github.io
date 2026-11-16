# LAB-06: Modernizar un sitio web con IA generativa en Google Cloud

| Punto de Control | Estado | Evidencia |
| :--- | :--- | :--- |
| 1. API de Agent Platform habilitada | Completado (10/10) | `evidencia/puntaje.png` |
| 2. App de Agent Search creada (`my-search-app`) | Completado (30/30) | `evidencia/agent-search-preview.png` |
| 3. Sitio desplegado en Cloud Run (`webmod-svc`) | Completado (25/25) | `evidencia/cloud-run 1.png` y `evidencia/cloud-run 2.png` |
| 4. Contenido editado con IA (Tarea 6) | Bloqueado por error de Google (`23:49`) | `evidencia/Contenido editado con IA ERROR POR GOOGLE.png` y `evidencia/evidencia error google.png` |
| **Puntaje final en Google Skills** | **100 / 100** | `evidencia/puntaje.png` |

## Incidencia en la Tarea 6
Al probar las funciones de generación de imagen, traducción y refinamiento de texto a las **23:49 hrs**, Vertex AI arrojó `400 FAILED_PRECONDITION: Organization Policy constraint constraints/vertexai.allowedModels violated` al rechazar los modelos configurados por el laboratorio (`gemini-3.6-flash` y `gemini-3.1-flash-image`).
