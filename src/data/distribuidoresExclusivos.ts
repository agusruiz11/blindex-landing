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
// `web`: cargadas el 07/09/2026 desde "Blindex webs.xlsx" (mail de Manuel del
// 04/09). Cada URL se verificó antes de cargarla:
//  · Las que en la planilla venían con "#!/-home/" o "#!/-inicio/" se cargan
//    sin ese fragmento: la raíz del dominio responde igual y la URL queda
//    limpia.
//  · Alumar y Fenestra van con http:// a propósito: sus certificados SSL no
//    cubren el dominio y por https el navegador muestra un aviso de seguridad.
//  · Los que sólo tienen Instagram (Bianchi, Casa Lacar, Coppari) van con la
//    URL completa del perfil.
//  · Coppari opera como "Vidrios Bravi" (@vidrios_bravi), el mismo que entra
//    en la Red Ekoglass. Se muestra con ese nombre comercial.
//  · Tres dominios de la planilla están caídos (NXDOMAIN, verificado también
//    desde una máquina de la agencia el 07/09): www.cristalesdelsur.com
//    (Aberturas Sur), www.cristalesmonettisrl.com (Cristales Monetti) y
//    www.rb-dvh.com.ar (Raffo y Barandalla). Quedan sin web hasta confirmar
//    con el cliente. Los tres tienen Instagram (@cristales_del_sur_,
//    @cristalesmonetti, @raffoybarandalladvh) por si prefieren linkear ahí.
//  · Faltan en la planilla: Baleno, Infissi, JMG, RM Obras Civiles y STA.
//    Manuel avisó que los manda cuando los tenga.
//
// PENDIENTE DEL CLIENTE (Manuel ya lo pidió a la marca):
//  1. `logo`: falta el archivo de los 32. Hasta que lleguen, la UI degrada
//     sola: sin logo, la ficha muestra el nombre como wordmark. La sección se
//     ve completa igual, y cada logo que llegue entra sin tocar el componente.
//  2. Las 5 webs que faltan y las 3 con dominio caído.
//
// `razonSocial` guarda el string exacto que mandó el cliente, sin tocar, para
// poder matchear contra su planilla cuando manden logos. `nombre` es el nombre
// comercial para mostrar.
//
// ⚠️ Dos nombres a confirmar antes de publicar:
//  · "VID.A.L.RAFFO Y CIA.S.A.": se leyó como "Vidal Raffo"; podría ser
//    "Vid. A. L. Raffo" (iniciales). Su web es "vidriosraffo", así que
//    probablemente el nombre comercial sea "Vidrios Raffo". El logo lo va a
//    resolver.
//  · "STA Sistemas Tecnológicos Aplicados": se muestra abreviado "STA"
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
  /** Sitio web o perfil de Instagram (URL completa). Sin esto, la ficha no linkea. */
  web?: string;
};

export const distribuidoresExclusivos: DistribuidorExclusivo[] = [
  { id: "aberturas-sur", nombre: "Aberturas Sur", razonSocial: "ABERTURAS SUR S.R.L" },
  { id: "ar-pugliese", nombre: "A.R. Pugliese y Cía.", razonSocial: "A.R.PUGLIESE Y CIA S.EN C", web: "https://www.rodolfopugliese.com/" },
  { id: "brocanelli", nombre: "Acristalamientos Brocanelli", razonSocial: "ACRISTALAMIENTOS BROCANELLI S.A.", web: "https://www.brocanellisa.com/" },
  { id: "alumar", nombre: "Alumar", razonSocial: "ALUMAR S.R.L.", web: "http://www.alumarsrl.com.ar/" },
  { id: "baleno", nombre: "Baleno", razonSocial: "BALENO S.R.L" },
  { id: "bianchi", nombre: "Bianchi", razonSocial: "BIANCHI CIA Y S.C.A.", web: "https://www.instagram.com/vidriosbianchi/" },
  { id: "cadivi", nombre: "Cadivi", razonSocial: "CADIVI S.R.L", web: "https://www.cadivi.com.ar/" },
  { id: "casa-lacar", nombre: "Casa Lacar", razonSocial: "CASA LACAR S.R.L.", web: "https://www.instagram.com/casalacarvidrios/" },
  { id: "coppari", nombre: "Vidrios Bravi", razonSocial: "COPPARI GABRIEL Y COPPARI MARTIN", web: "https://www.instagram.com/vidrios_bravi/" },
  { id: "cristales-ferronato", nombre: "Cristales Ferronato", razonSocial: "CRISTALES FERRONATO S.A", web: "https://cristalesferronato.com.ar/" },
  { id: "cristales-monetti", nombre: "Cristales Monetti", razonSocial: "CRISTALES MONETTI S.R.L." },
  { id: "fenestra", nombre: "Fenestra", razonSocial: "FENESTRA S.A.", web: "http://www.aberturasfenestra.com.ar/" },
  { id: "flexiglass", nombre: "Flexiglass", razonSocial: "FLEXIGLASS S.R.L.", web: "https://www.flexiglass.com.ar/" },
  { id: "infissi", nombre: "Infissi", razonSocial: "INFISSI S.A." },
  { id: "intervidrio", nombre: "Intervidrio", razonSocial: "INTERVIDRIO S.R.L.", web: "https://www.lacasadeloscristales.com/" },
  { id: "jmg", nombre: "JMG", razonSocial: "JMG S.R.L." },
  { id: "jose-trento", nombre: "José Trento Vidrios", razonSocial: "JOSE TRENTO VIDRIOS S.R.L.", web: "https://www.trentovidrios.com.ar/" },
  { id: "luis-castellani", nombre: "Luis Castellani", razonSocial: "LUIS CASTELLANI SA", web: "https://www.castellanividrios.com.ar/" },
  { id: "marcelo-trento", nombre: "Marcelo Trento", razonSocial: "MARCELO TRENTO S.R.L.", web: "https://www.marcelotrento.com.ar/" },
  { id: "martorelli", nombre: "Martorelli", razonSocial: "MARTORELLI S.A.", web: "https://www.martorelli.com.ar/" },
  { id: "mendoglass", nombre: "Mendoglass", razonSocial: "MENDOGLASS S.A.", web: "https://mendoglass.com/" },
  { id: "metales-del-talar", nombre: "Metales del Talar", razonSocial: "METALES DEL TALAR S.A", web: "https://www.mdtargentina.com/" },
  { id: "raffo-barandalla", nombre: "Raffo y Barandalla", razonSocial: "RAFFO SANTIAGO Y BARANDALLA MATIAS" },
  { id: "rm-obras-civiles", nombre: "RM Obras Civiles", razonSocial: "RM OBRAS CIVILES SRL" },
  { id: "rosario-cristal", nombre: "Rosario Cristal Vidrios", razonSocial: "ROSARIO CRISTAL VIDRIOS S.A.S", web: "https://rosariocristal.com/" },
  { id: "sta", nombre: "STA", razonSocial: "STA Sistemas Tecnológicos Aplicados" },
  { id: "templados-super", nombre: "Templados Super", razonSocial: "TEMPLADOS SUPER S.A.", web: "https://www.templadossuper.com.ar/" },
  { id: "teste", nombre: "Teste", razonSocial: "TESTE S.A.", web: "https://www.teste.com.ar/" },
  { id: "vidal-raffo", nombre: "Vidal Raffo y Cía.", razonSocial: "VID.A.L.RAFFO Y CIA.S.A.", web: "https://vidriosraffo.webnode.page/" },
  { id: "vidrios-castelar", nombre: "Vidrios Castelar", razonSocial: "VIDRIOS CASTELAR S.A.", web: "https://www.vidrioscastelarsa.com.ar/" },
  { id: "vidglass", nombre: "Vidglass", razonSocial: "VIDGLASS 2022 SRL", web: "https://vidglass.ar/" },
  { id: "vitrex", nombre: "Vitrex", razonSocial: "VITREX S.A.", web: "https://vitrexsa.com.ar/" },
];
