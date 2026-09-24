# Redirecciones desde el WordPress actual

Relevado el 23/09/2026 desde los sitemaps de `blindex.com.ar` (`wp-sitemap.xml`
y sus 9 partes): **94 URLs**. Cada una tiene una regla 301 en
[next.config.mjs](../next.config.mjs) (`redirects()`), probada una por una con
un Next 14 de prueba el mismo día: las 93 que no son la home redirigen y caen
en una ruta que existe en el sitio nuevo, salvo `/casa-interactiva/`, que
queda sin regla hasta que se porte.

Además se redirigen los 7 PDFs que el WordPress servía desde
`wp-content/uploads/` a sus copias en `public/docs/`, por si están linkeados
desde catálogos, mails o sitios de distribuidores.

## Criterios

- Lo que tiene equivalente exacto va al equivalente: los 5 productos y las 4
  notas técnicas coinciden por id.
- Lo que tiene equivalente de sección va al listado: obras (no hay página por
  obra), puntos de venta (la página vieja por provincia pasa al buscador
  único), boletines técnicos (las 17 páginas viejas eran sólo título).
- Renovate! es un programa de Ekoglass, así que su landing y sus dos
  formularios de cotización van a `ekoglass.com.ar`.
- Lo que no sigue en el sitio nuevo va a la home: eventos (frenado en 2023),
  las 4 variantes de la home vieja, autor y categoría del blog, y términos y
  condiciones (ver pendientes).
- `wp-admin`, `wp-login`, feeds y demás rutas de WordPress no tienen regla:
  dan 404 y está bien que así sea.

## Pendientes de decisión

- **`/casa-interactiva/`** ("¿Cómo vidriar mi casa?"): segunda herramienta
  estática, del mismo tipo que "Elegí tu vidrio". Nunca se habló con el
  cliente. Se porta con el mismo método; hasta entonces no tiene regla.
- **`/terminos-y-condiciones/`**: el sitio nuevo no tiene esa página. Hoy va a
  la home. Si el cliente quiere conservar el texto, se crea `/terminos` y se
  cambia la regla.

## Tabla completa (URL vieja → destino final)


**/**

- `/`
- `/author/ruggiero-garro/`
- `/category/blindex/`
- `/event/balneario-cr-enero-2019/`
- `/event/balneario-cr-pinamar-enero-2020/`
- `/event/balneario-cr-pinamar-enero-2021/`
- `/event/balneario-cr-pinamar-enero-2022/`
- `/event/balnearios-pinamar-2022/`
- `/event/evento-pinamar-diciembre-2016/`
- `/event/la-hoya-octubre-2019/`
- `/event/pizza-paradiso-diciembre-2020/`
- `/eventos/`
- `/inicio-video-2/`
- `/inicio-video-3-2/`
- `/inicio-video-3/`
- `/inicio-video/`
- `/terminos-y-condiciones/`

**/asesoramiento**

- `/asesoramiento/`
- `/boletines/`
- `/boletines_tecnicos/10-conceptos-para-seleccionar-vidrios/`
- `/boletines_tecnicos/blindex-antirobo/`
- `/boletines_tecnicos/blindex-blindex-solar-y-blindex-antirrobo/`
- `/boletines_tecnicos/blindex-energy/`
- `/boletines_tecnicos/blindex-laminado/`
- `/boletines_tecnicos/blindex-solar-neutro-light/`
- `/boletines_tecnicos/blindex-solar/`
- `/boletines_tecnicos/como-se-fabrica-blindex-laminado/`
- `/boletines_tecnicos/control-del-ruido/`
- `/boletines_tecnicos/folleto-blindex-2023/`
- `/boletines_tecnicos/guia-para-especificar-vidrios/`
- `/boletines_tecnicos/ley-de-vidrios-seguros/`
- `/boletines_tecnicos/manual-de-procesamiento-blindex-energy/`
- `/boletines_tecnicos/manual-de-procesamiento-blindex-solar/`
- `/boletines_tecnicos/neutro-light-blindex-solar-neutro-light/`
- `/boletines_tecnicos/vidriado-de-techos-transparentes/`
- `/boletines_tecnicos/vidrios-de-seguridad/`

**/capacitacion-online**

- `/capacitaciones/`

**/casa-interactiva**

- `/casa-interactiva/`

**/contacto**

- `/contactenos/`

**/puntos-de-venta**

- `/distribuidores-certificados/`
- `/distribuidores/capital-federal-y-gba/`
- `/pdv_cert/buenos-aires/`
- `/pdv_cert/capital-federal/`
- `/pdv_cert/cordoba/`
- `/pdv_cert/entre-rios/`
- `/pdv_cert/mendoza/`
- `/pdv_cert/neuquen/`
- `/pdv_cert/rio-negro/`
- `/pdv_cert/salta/`
- `/pdv_cert/san-juan/`
- `/pdv_cert/san-luis/`
- `/pdv_cert/santa-fe/`
- `/pdv_cert/santiago-del-estero/`
- `/pdv_cert/tucuman/`

**https://www.ekoglass.com.ar/**

- `/landing/renovate_form/`
- `/landing_1/renovate_form_1/`
- `/renovate/`

**/asesoramiento/calculo-de-espesor-de-vidrios**

- `/notes/calculo-de-espesor-de-vidrios/`

**/asesoramiento/caracteristicas-de-los-vidrios-segun-su-proceso**

- `/notes/caracteristicas-de-los-vidrios-segun-su-proceso/`

**/asesoramiento/marco-legal-argentino**

- `/notes/marco-legal-argentino/`

**/asesoramiento/seguridad-de-las-personas-y-seguridad-de-los-bienes**

- `/notes/seguridad-de-las-personas-y-seguridad-de-los-bienes/`

**/nuestras-obras**

- `/nuestras-obras/`
- `/works/aeropuerto-ezeiza/`
- `/works/banco-central/`
- `/works/banco-ciudad/`
- `/works/banco-galicia/`
- `/works/banco-supervielle/`
- `/works/bellini/`
- `/works/cancilleria/`
- `/works/centro-empresarial-urbano/`
- `/works/congreso-de-la-nacion/`
- `/works/consultatio-torre-bbva-frances/`
- `/works/dique-4/`
- `/works/edificio-libertador/`
- `/works/edificio-quilmes/`
- `/works/la-segunda/`
- `/works/le-parc-alcorta/`
- `/works/legislatura-de-la-plata/`
- `/works/madero-harobour/`
- `/works/mulieris/`
- `/works/parque-de-la-memoria/`
- `/works/sancor-sunchales/`
- `/works/sheraton-pilar/`
- `/works/terrazas-del-yacht/`
- `/works/torre-santiago-del-estero/`
- `/works/torre-union/`
- `/works/torres-el-faro/`

**/productos/blindex-acustico**

- `/product/blindex-acustico/`

**/productos/blindex-antirrobo**

- `/product/blindex-antirrobo/`

**/productos/blindex-energy**

- `/product/blindex-energy/`

**/productos/blindex-laminado**

- `/product/blindex-laminado/`

**/productos/blindex-solar**

- `/product/blindex-solar/`

**/#productos**

- `/productos/`

**/#red-distribuidores**

- `/red-distribuidores-exclusivos-blindex/`

**PDFs** (no están en el sitemap, se relevaron desde `/asesoramiento/`)

- `/wp-content/uploads/2016/06/conceptosvidrios.pdf` → `/docs/10-conceptos-para-seleccionar-vidrios.pdf`
- `/wp-content/uploads/2016/06/controldelruido.pdf` → `/docs/control-del-ruido.pdf`
- `/wp-content/uploads/2016/06/guiaespecificarvidrios.pdf` → `/docs/guia-para-especificar-vidrios.pdf`
- `/wp-content/uploads/2016/06/leydevidrios.pdf` → `/docs/ley-de-vidrios-seguros.pdf`
- `/wp-content/uploads/2016/06/vidriadostechos.pdf` → `/docs/vidriado-de-techos-transparentes.pdf`
- `/wp-content/uploads/2016/06/vidriosseguridad.pdf` → `/docs/vidrios-de-seguridad.pdf`
- `/wp-content/uploads/2016/07/Blindex.Junio17_altaOUT2con_Energy.pdf` → `/docs/folleto-blindex-2017.pdf`
