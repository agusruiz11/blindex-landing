// ─────────────────────────────────────────────────────────────────────────
// RED DE DISTRIBUIDORES EXCLUSIVOS BLINDEX
//
// Lista enviada por Manuel (QUAR) el 10/08/2026. Es el equivalente Blindex
// de la "Red Ekoglass": la franja de logos de la home.
//
// ⚠️ NO confundir con `puntosDeVenta.ts`. Son dos redes distintas y no se
// pisan: cruzamos las dos listas y NINGUNO de estos 32 aparece entre los 116
// puntos de venta certificados. Son el canal mayorista; aquéllos, el minorista
// donde compra el consumidor final.
//
// PENDIENTE DEL CLIENTE — Manuel ya lo pidió a la marca:
//  1. `logo` — falta el archivo de los 32. Hasta que lleguen, la UI degrada
//     sola: sin logo, la ficha muestra el nombre como wordmark. La sección se
//     ve completa igual, y cada logo que llegue entra sin tocar el componente.
//  2. `web` — falta la URL de cada uno. Sin web, la ficha no linkea a ningún
//     lado (queda un <div>, no un <a> muerto).
//
// `razonSocial` guarda el string exacto que mandó el cliente, sin tocar, para
// poder matchear contra su planilla cuando manden logos y webs. `nombre` es el
// nombre comercial para mostrar.
//
// ⚠️ Dos nombres a confirmar antes de publicar:
//  · "VID.A.L.RAFFO Y CIA.S.A." — se leyó como "Vidal Raffo"; podría ser
//    "Vid. A. L. Raffo" (iniciales). El logo lo va a resolver.
//  · "STA Sistemas Tecnológicos Aplicados" — se muestra abreviado "STA"
//    porque el nombre completo no entra en la ficha.
// ─────────────────────────────────────────────────────────────────────────
export type DistribuidorExclusivo = {
  id: string;
  /** Nombre comercial, para mostrar. */
  nombre: string;
  /** Razón social textual como la mandó el cliente. No editar. */
  razonSocial: string;
  /** Ruta en /public/logos/distribuidores. Sin esto, se muestra el nombre. */
  logo?: string;
  web?: string;
};

export const distribuidoresExclusivos: DistribuidorExclusivo[] = [
  { id: "aberturas-sur", nombre: "Aberturas Sur", razonSocial: "ABERTURAS SUR S.R.L" },
  { id: "ar-pugliese", nombre: "A.R. Pugliese y Cía.", razonSocial: "A.R.PUGLIESE Y CIA S.EN C" },
  { id: "brocanelli", nombre: "Acristalamientos Brocanelli", razonSocial: "ACRISTALAMIENTOS BROCANELLI S.A." },
  { id: "alumar", nombre: "Alumar", razonSocial: "ALUMAR S.R.L." },
  { id: "baleno", nombre: "Baleno", razonSocial: "BALENO S.R.L" },
  { id: "bianchi", nombre: "Bianchi", razonSocial: "BIANCHI CIA Y S.C.A." },
  { id: "cadivi", nombre: "Cadivi", razonSocial: "CADIVI S.R.L" },
  { id: "casa-lacar", nombre: "Casa Lacar", razonSocial: "CASA LACAR S.R.L." },
  { id: "coppari", nombre: "Gabriel y Martín Coppari", razonSocial: "COPPARI GABRIEL Y COPPARI MARTIN" },
  { id: "cristales-ferronato", nombre: "Cristales Ferronato", razonSocial: "CRISTALES FERRONATO S.A" },
  { id: "cristales-monetti", nombre: "Cristales Monetti", razonSocial: "CRISTALES MONETTI S.R.L." },
  { id: "fenestra", nombre: "Fenestra", razonSocial: "FENESTRA S.A." },
  { id: "flexiglass", nombre: "Flexiglass", razonSocial: "FLEXIGLASS S.R.L." },
  { id: "infissi", nombre: "Infissi", razonSocial: "INFISSI S.A." },
  { id: "intervidrio", nombre: "Intervidrio", razonSocial: "INTERVIDRIO S.R.L." },
  { id: "jmg", nombre: "JMG", razonSocial: "JMG S.R.L." },
  { id: "jose-trento", nombre: "José Trento Vidrios", razonSocial: "JOSE TRENTO VIDRIOS S.R.L." },
  { id: "luis-castellani", nombre: "Luis Castellani", razonSocial: "LUIS CASTELLANI SA" },
  { id: "marcelo-trento", nombre: "Marcelo Trento", razonSocial: "MARCELO TRENTO S.R.L." },
  { id: "martorelli", nombre: "Martorelli", razonSocial: "MARTORELLI S.A." },
  { id: "mendoglass", nombre: "Mendoglass", razonSocial: "MENDOGLASS S.A." },
  { id: "metales-del-talar", nombre: "Metales del Talar", razonSocial: "METALES DEL TALAR S.A" },
  { id: "raffo-barandalla", nombre: "Raffo y Barandalla", razonSocial: "RAFFO SANTIAGO Y BARANDALLA MATIAS" },
  { id: "rm-obras-civiles", nombre: "RM Obras Civiles", razonSocial: "RM OBRAS CIVILES SRL" },
  { id: "rosario-cristal", nombre: "Rosario Cristal Vidrios", razonSocial: "ROSARIO CRISTAL VIDRIOS S.A.S" },
  { id: "sta", nombre: "STA", razonSocial: "STA Sistemas Tecnológicos Aplicados" },
  { id: "templados-super", nombre: "Templados Super", razonSocial: "TEMPLADOS SUPER S.A." },
  { id: "teste", nombre: "Teste", razonSocial: "TESTE S.A." },
  { id: "vidal-raffo", nombre: "Vidal Raffo y Cía.", razonSocial: "VID.A.L.RAFFO Y CIA.S.A." },
  { id: "vidrios-castelar", nombre: "Vidrios Castelar", razonSocial: "VIDRIOS CASTELAR S.A." },
  { id: "vidglass", nombre: "Vidglass", razonSocial: "VIDGLASS 2022 SRL" },
  { id: "vitrex", nombre: "Vitrex", razonSocial: "VITREX S.A." },
];
