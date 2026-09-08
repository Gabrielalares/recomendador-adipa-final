# Brief Recomendador de Programas

## Problema que resuelve
El equipo comercial pierde tiempo buscando manualmente en el catálogo cuál es el programa adecuado para el perfil y presupuesto de un alumno, disminuyendo las conversiones y la venta cruzada.

## Usuario principal y roles
- **Usuario Principal:** Asesor Comercial de ADIPA.
- **Roles Secundarios:** Sistema Automático (aplica filtros de presupuesto y lógica de negocio).

## Pantallas / piezas
1. **Formulario de Perfil (Menú Lateral):** Campos para profesión, área de interés y selector de presupuesto (Bajo/Medio/Alto).
2. **Grilla de Resultados (Área Central):** 3 tarjetas que muestran las mejores opciones coincidentes.
3. **Acción de Cierre:** Botón "Copiar para WhatsApp" en cada tarjeta con alerta de confirmación.

## Datos por pantalla
- **Entrada:** Nivel educativo, área de interés, presupuesto estimado.
- **Salida:** Título del programa, precio, modalidad y argumento de venta corto.

## Reglas de negocio
- Si el presupuesto es "Bajo", el sistema oculta los "Diplomados" y "Acreditaciones", mostrando únicamente Cursos Cortos.
- Si no hay coincidencias con los filtros, se despliega una alerta: "No hay programas que coincidan, intenta ampliar el presupuesto".
- Al presionar "Copiar para WhatsApp", se formatea un mensaje con viñetas amigables listo para el portapapeles.

## Fuera de alcance
1. Conexión en tiempo real a la base de datos de cursos o API de ADIPA (se usarán datos estáticos simulados).
2. Envío directo de correos o mensajes automáticos desde la web app.
3. Sistema de inicio de sesión o autenticación de usuarios.
