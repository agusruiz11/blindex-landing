# Reunión inicial con el cliente — definiciones

Reconstruido de la transcripción del audio. Es la fuente de verdad sobre qué
pidió el cliente; si algo se contradice con este archivo, gana este archivo
(o se actualiza explícitamente).

## Quién es quién

| Persona | Rol |
|---|---|
| **Nell** y **Tefi** (Steffy) | marca — Blindex / Ekoglass. Son las que deciden. |
| **Manuel García Conejero** | QUAR Media — el nexo con la agencia. Interlocutor por mail. |
| **Agustín** y **Santiago** | Posicionarte (nosotros) |
| Seba | "el papá de Ekoglass" — aparece en temas de Ekoglass |
| Rob | tiene los videos de CAVIPLAN |

## Definiciones duras

### 1. Blindex es prioridad; Ekoglass queda en standby

Textual: *"hoy en día tenemos que darle más prioridad a Blindex antes que a
Echo, en cuanto a qué ponerle más push en el desarrollo de la web."*

Se cotizaron dos sitios. Ekoglass ya tiene una página hecha a modo de
introducción y ahora pasa a segundo plano.

### 2. Es un REFRESH VISUAL, no un sitio nuevo

Textual: *"El contenido me parece que está bastante completo, es solamente la
parte más visual."* Y antes: *"diría de desarrollar la parte más visual de
Blindex, que ahí sí me parece que hay que darle un refresh a todo."*

**Esto ya está respondido: no hace falta preguntar si replicamos o rehacemos.**
El contenido del sitio actual se mantiene, lo que cambia es el diseño.

### 3. Material de marca — ya lo prometieron

Textual: *"Sí, sí, sí, me lo anoto para pasárselos esta semana."* Iba a incluir
manual de marca, fotos de obras reales y fotos de stock. Lo que llegó el
30/07 es parte de eso, pero **sin manual de marca y sin tipografías**.

### 4. Puntos de venta — dos niveles

Blindex diferencia sus puntos de venta en dos:

- **Select** — los que la marca recomienda. Tienen un cartel en el local que
  dice "punto de venta Select".
- **Resto/genérico** — también figuran en el sitio.

Ya está contemplado en el código (`select: true` en `puntosDeVenta.ts`).

### 5. Capacitaciones — sección nueva, no estaba en el sitio actual

Lo más definido de la reunión:

**A quién apunta:** vidrieros e instaladores. **Explícitamente NO consumidor
final** — *"no nos interesa que mi mamá vaya, se conecte y lo haga... tampoco
nos interesa tener el dato de esa persona, Doña Rosa."*

**Objetivo:** profesionalizar a los vidrieros que ya tienen en radar y sumar
nuevos. Darles una certificación tipo **"punto de venta certificado en
Blindex"**, que convive con el sello Select.

**Formato:** varios videos (distintos cursos) + **cuestionario al final** de
cada uno. Textual: *"La idea es un video con un cuestionario final."*

**Origen del material:** existe base para reciclar. **CAVIPLAN** (Cámara del
Vidrio Plano) hace una capacitación para conseguir *instaladores homologados*
— el equivalente a los gasistas matriculados, pero del vidrio. Para eso
produjeron videos genéricos, sin marca. Rob confirmó que los videos existen.

⚠️ Dos salvedades del propio cliente: el material de CAVIPLAN *"habla del
laminado genérico, tendríamos que refritarlo"*, y hay que **pedir permiso** —
*"tendríamos que ver si nos los ceden. Yo calculo que sí."* O sea: no está
confirmado que se puedan usar.

### 6. ⚠️ El acceso: el cliente pidió login, nosotros propusimos URL oculta

**Esta es la divergencia más importante y hay que blanquearla.**

El cliente venía pidiendo **acceso restringido**: *"tampoco interesa que esté
libre, que cualquiera pueda llegar a eso" — "No, por eso te decíamos lo del
login."*

Del lado nuestro se definió **URL oculta con `noindex`, sin login**, y
aprobación manual del certificado. Es más simple y más barato, pero **no es lo
que ellos pidieron**. Hay que confirmarlo explícitamente, no darlo por hecho.

Dato a favor nuestro: ellos mismos reconocieron que la lista de vidrieros está
incompleta. Tienen una base del programa de fidelización (que sí tiene login),
pero *"se van incorporando nuevos todo el tiempo, entonces no se tendría que
limitar a eso"*. Un login contra una lista cerrada les dejaría gente afuera —
buen argumento para la URL oculta.

### 7. Profesionales vs. consumidor final

Se debatió separar el sitio en dos audiencias, pero **en el contexto de
Ekoglass** (con Seba), y quedó sin resolver: *"eso me parece que estaría bueno
verlo, yo lo charlo con él y después les aviso."* No aplica a Blindex por ahora.

## Alcance / comercial

Capacitaciones **no estaba pautado en la cotización original**. Va como línea
aparte.

Lo que el módulo **SÍ** incluye: página oculta + videos + formulario que captura
datos + aviso por mail.

Lo que **NO** incluye (dejarlo por escrito en la cotización): login,
autocorrección del cuestionario, generación o envío del certificado en PDF, y
panel de administración. La emisión del certificado la hace la marca a mano.
