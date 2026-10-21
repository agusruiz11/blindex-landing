# Cómo montar el sitio (para RH Studio)

Paquete compilado por Posicionarte para correr en cPanel con Passenger y Node.js 20.

## Qué trae el paquete

- `server.js`: archivo de arranque de la aplicación (Next.js 14, modo standalone).
- `.next/`: el sitio compilado.
- `node_modules/`: sólo las dependencias que usa el sitio, ya incluidas. No hace falta correr `npm install`.
- `public/`: imágenes, PDFs y archivos estáticos.

## Configuración en cPanel (Setup Node.js App)

- Node.js version: 20.
- Application mode: Production.
- Application root: la carpeta donde se descomprime el paquete.
- Application startup file: `server.js`.
- No hay paso de build: el paquete ya viene compilado.

El servidor toma el puerto que le asigna Passenger.

## Variables de entorno

Se cargan en la misma pantalla de cPanel:

| Variable | Valor |
|---|---|
| `SMTP_HOST` | servidor SMTP |
| `SMTP_PORT` | `465` (SSL) o `587` (STARTTLS) |
| `SMTP_USER` | usuario de la casilla que envía |
| `SMTP_PASS` | clave de esa casilla |
| `CONTACT_FROM` | remitente, por ejemplo `Blindex Web <web@blindex.com.ar>` |
| `CONTACT_TO` | casilla que recibe las consultas (hoy `estefania.cruz@ar.nsg.com`) |
| `NODE_ENV` | `production` |

Los IDs de Google Analytics y Clarity ya vienen dentro del compilado: no se cargan acá.

## Redirecciones

Las redirecciones permanentes (301) desde las URLs del sitio anterior ya están dentro de la aplicación. No hay que cargarlas en el servidor ni en un `.htaccess`.

## Cómo probar después de montarlo

1. Abrir la home y un par de páginas internas.
2. Enviar el formulario de contacto y confirmar que llega el mail a `CONTACT_TO`.
3. Probar una URL vieja (por ejemplo `/distribuidores-certificados/`) y ver que redirige.
4. En Blindex, abrir `/elegituvidrio/` (herramienta aparte, vive en `public/`).

## Cambios en el sitio

El código fuente lo mantiene Posicionarte. Para cualquier cambio de contenido o funcionalidad, se entrega un paquete nuevo con el mismo formato: se reemplaza la carpeta y se reinicia la aplicación desde cPanel.
