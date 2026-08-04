// ─────────────────────────────────────────────────────────────────────────
// RED DE PUNTOS DE VENTA — data real
//
// Extraída de blindex.com.ar/distribuidores-certificados/ el 31/07/2026.
// Trae nombre, dirección, teléfono, web, coordenadas y el sello Select
// (en el sitio actual: "forman parte de la red recomendada por Blindex").
//
// ⚠️ PENDIENTE DEL CLIENTE:
//  1. `whatsapp` — el sitio actual sólo publica teléfonos fijos. La UI
//     degrada sola: si no hay whatsapp, la card muestra "Llamar".
//  2. Faltan Santiago del Estero y San Luis: existen en el backend de
//     WordPress pero no se renderizan en la página pública.
//  3. `localidad` se dedujo de la provincia cuando la dirección no la traía.
//  4. Las provincias se derivaron de las coordenadas. Revisar los límites.
// ─────────────────────────────────────────────────────────────────────────
export type PuntoDeVenta = {
  id: string;
  nombre: string;
  direccion: string;
  localidad: string;
  provincia: string;
  lat: number;
  lng: number;
  /** Formato wa.me: sólo dígitos, con país, sin + ni espacios. */
  whatsapp?: string;
  telefono?: string;
  web?: string;
  /** "Punto de venta Select" — la red recomendada por la marca. */
  select?: boolean;
};

export const puntosDeVenta: PuntoDeVenta[] = [
  { id: "aberdesign", nombre: "Aberdesign", direccion: "Av. Lacaze 4662", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.804599, lng: -58.335565, telefono: "4291-0528/0538", web: "https://www.aberdesign.com.ar/", select: true },
  { id: "aberlux", nombre: "Aberlux", direccion: "Panamericana (Colectora Ramal Pilar Este) 1378", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.466842, lng: -58.688989, telefono: "5353 9221" },
  { id: "aberturas-3-de-febrero", nombre: "Aberturas 3 De Febrero", direccion: "Diagonal 101 - 4114", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.566572, lng: -58.562532, telefono: "4768-9987/4512-5830/5831" },
  { id: "aberturas-dim", nombre: "Aberturas DIM", direccion: "Italia 745, B7220 San Miguel del Monte, Buenos Aires", localidad: "Argentina", provincia: "Buenos Aires", lat: -35.44063, lng: -58.80544, telefono: "02271 408899", web: "https://www.facebook.com/aberturasDIM" },
  { id: "aberturas-de-avanzada", nombre: "Aberturas De Avanzada", direccion: "Av. Gaona (colectora) 10302", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.621992, lng: -58.830201, telefono: "0237-4621461" },
  { id: "aberturas-el-talar", nombre: "Aberturas El Talar", direccion: "Av. H. Yrigoyen 1832", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.467723, lng: -58.647657, telefono: "4740 7360" },
  { id: "aberturas-ezeiza", nombre: "Aberturas Ezeiza", direccion: "Reconquista 522", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.846816, lng: -58.511196, telefono: "4295-0992 / 2862" },
  { id: "aberturas-vc", nombre: "Aberturas VC", direccion: "H. Yrigoyen 3134", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.478166, lng: -58.669891, telefono: "4726-9186/3487" },
  { id: "aislar", nombre: "Aislar", direccion: "Av. Hipolito Yrigoyen 12938", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.805395, lng: -58.404279, telefono: "011 4293-7330" },
  { id: "alumbra-srl", nombre: "Alumbra SRL", direccion: "Av. Antartida Argentina 585", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.792051, lng: -58.413652, telefono: "4231-3101" },
  { id: "aluminios-galarza", nombre: "Aluminios Galarza", direccion: "Av. Mitre 615", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.910885, lng: -60.001016, telefono: "(02346) 43-5509" },
  { id: "alumirai", nombre: "Alumirai", direccion: "Av. Gaona (km 40 Acceso Oeste) 10102", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.622758, lng: -58.827859, telefono: "(0237) 463-3910" },
  { id: "arumi", nombre: "Arumi", direccion: "Colectora Panamericana 1625", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.501878, lng: -58.541712, telefono: "(011) 6346-8388" },
  { id: "aukot-sustentable", nombre: "Aukot Sustentable", direccion: "Av. 520 9400, B1903auo Melchor Romero", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.966661, lng: -58.066301, telefono: "0221 491-6669", web: "http://aukot.com.ar/" },
  { id: "blanco-vidrios", nombre: "Blanco Vidrios", direccion: "Garay 3481", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -38.003755, lng: -57.562989, telefono: "0223-4946465" },
  { id: "cadivi", nombre: "Cadivi", direccion: "Calle 47 1773", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.934908, lng: -57.976318, telefono: "0221 479 0000" },
  { id: "centro-cristales", nombre: "Centro Cristales", direccion: "Hipolito Yrigoyen 12771", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.803387, lng: -58.406115, telefono: "42934300" },
  { id: "consca-s-a", nombre: "Consca S.A.", direccion: "Moreno 3776", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -37.995913, lng: -57.560733, telefono: "(0223) 154-009124" },
  { id: "cristales-sanchez", nombre: "Cristales Sanchez", direccion: "3 De febrero 3510", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.615286, lng: -58.564447, telefono: "47598216", select: true },
  { id: "doble-m-aberturas", nombre: "Doble M Aberturas", direccion: "Pte Peron 6937", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.63211, lng: -58.660536, telefono: "4450-2264" },
  { id: "extra-plack-srl", nombre: "Extra Plack SRL", direccion: "Pte. Illia 1955", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.546111, lng: -58.68323, telefono: "4668-1328" },
  { id: "genesis-aberturas", nombre: "Genesis Aberturas", direccion: "Av. Ptte Peron 7938", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.582756, lng: -58.599853, telefono: "4842-6777 / 5648-8488" },
  { id: "glassic", nombre: "Glassic", direccion: "Diego Palma 1031", localidad: "San Isidro", provincia: "Buenos Aires", lat: -34.476988, lng: -58.528975, web: "https://www.e-glassic.com/" },
  { id: "grupo-dimastro", nombre: "Grupo Dimastro", direccion: "Bautista Cisaro 1960 - Junin", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.55498, lng: -60.920822, telefono: "0236-444-5704 / 0236-443-3735", web: "http://www.leodimastro.com.ar" },
  { id: "hm-aberturas", nombre: "HM Aberturas", direccion: "San Benito 841", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.78801, lng: -58.417049, telefono: "4231-3728" },
  { id: "laya-aluminios", nombre: "Laya Aluminios", direccion: "Rivadavia y Gral Paz", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.866585, lng: -61.55, telefono: "2355-431670" },
  { id: "leo-dimastro-aberturas", nombre: "Leo Dimastro Aberturas", direccion: "bautista cisaro 1960", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.558603, lng: -60.92014, telefono: "2364644870" },
  { id: "mps-carpinteria-de-aluminio-y-pvc-sa", nombre: "MPS Carpinteria De Aluminio Y Pvc SA", direccion: "Calle 122 - 1889", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.916485, lng: -57.914892, telefono: "0221 489 2326" },
  { id: "milton-montero", nombre: "Milton Montero", direccion: "rawson 2951", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -38.005728, lng: -57.556918, telefono: "(0223) 4422018" },
  { id: "montero-vidrios-y-accesos", nombre: "Montero Vidrios y accesos", direccion: "Av Colon 3893", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -38.005691, lng: -57.556954, telefono: "(0223) 472-6118" },
  { id: "nevika-cristales", nombre: "Nevika Cristales", direccion: "Nother 98", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.800303, lng: -58.389047, telefono: "42931233" },
  { id: "osvaldo-luis-fumagalli", nombre: "Osvaldo Luis Fumagalli", direccion: "Butteler 330", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.428937, lng: -58.569772, telefono: "1154332493 / 4742 3813/4749-2564" },
  { id: "poletto-aberturas", nombre: "Poletto Aberturas", direccion: "Av. Pres. Perón 6234, B1712 Castelar", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.631923, lng: -58.64939, telefono: "4624-4549" },
  { id: "santa-rita-cristales", nombre: "Santa Rita Cristales", direccion: "Av. Sucre 435", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.496949, lng: -58.559177, telefono: "47377773" },
  { id: "surven", nombre: "Surven", direccion: "Calle 141 141", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.75586, lng: -58.224156, telefono: "4356 4113" },
  { id: "tesatech", nombre: "Tesatech", direccion: "Vicente Lopez 1272", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.725731, lng: -58.263798, telefono: "4224-9603", select: true },
  { id: "vidrieria-gizzi", nombre: "Vidrieria Gizzi", direccion: "Av. Mitre 393", localidad: "Chivilcoy", provincia: "Buenos Aires", lat: -34.907789, lng: -60.005257, select: true },
  { id: "vidrieria-gomien", nombre: "Vidrieria Gomien", direccion: "Mariano Moreno 3601", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.50913, lng: -58.519624, telefono: "011 4717-4403", select: true },
  { id: "vidrieria-san-jorge", nombre: "Vidrieria San Jorge", direccion: "Av. de Mayo 596 - Villa Adelina", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.513754, lng: -58.541512, telefono: "(011) 4763 8891", select: true },
  { id: "vidrios-charco", nombre: "Vidrios Charco", direccion: "Av, Soarez 206", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.893345, lng: -60.015101, telefono: "(02346)420367-15560607" },
  { id: "vidrios-del-oeste", nombre: "Vidrios Del Oeste", direccion: "Bme Mitre 819", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.656381, lng: -58.762916, telefono: "0237-4660540" },
  { id: "winglass", nombre: "Winglass", direccion: "Av. Marquez 2928", localidad: "Buenos Aires", provincia: "Buenos Aires", lat: -34.492097, lng: -58.547191, telefono: "4763-9339/5953" },
  { id: "acri-aberturas", nombre: "Acri Aberturas", direccion: "Av. Del Libertador 7674", localidad: "CABA", provincia: "CABA", lat: -34.543672, lng: -58.46104, telefono: "011 4704-7240" },
  { id: "acri-aberturas-2", nombre: "Acri Aberturas", direccion: "Amancio Alcorta 4134", localidad: "CABA", provincia: "CABA", lat: -34.656642, lng: -58.415681, telefono: "011 4911-4441" },
  { id: "agazzi-vidrios", nombre: "Agazzi Vidrios", direccion: "Araoz 2205", localidad: "CABA", provincia: "CABA", lat: -34.588068, lng: -58.418582, telefono: "48331628" },
  { id: "bw-cristales-palermo", nombre: "Bw Cristales (Palermo)", direccion: "Junin 1119", localidad: "CABA", provincia: "CABA", lat: -34.595221, lng: -58.397206, telefono: "4-823-5888" },
  { id: "bw-cristales-recoleta-1", nombre: "Bw Cristales (Recoleta 1)", direccion: "Ecuador 1201", localidad: "CABA", provincia: "CABA", lat: -34.596064, lng: -58.404585, telefono: "4963-7237" },
  { id: "bw-cristales-recoleta-2", nombre: "Bw Cristales (Recoleta 2)", direccion: "Paraguay 3415", localidad: "CABA", provincia: "CABA", lat: -34.592772, lng: -58.41381, telefono: "4-821-7500" },
  { id: "casa-segat-saic", nombre: "Casa Segat SAIC", direccion: "Chile 2556/64", localidad: "CABA", provincia: "CABA", lat: -34.617706, lng: -58.401783 },
  { id: "central-de-vidrios", nombre: "Central De Vidrios", direccion: "Av Pres. Arturo Illia 2447", localidad: "San Martin", provincia: "CABA", lat: -34.571811, lng: -58.523761, select: true },
  { id: "cristal-diseno", nombre: "Cristal Diseño", direccion: "Paraná 968", localidad: "CABA", provincia: "CABA", lat: -34.597537, lng: -58.388285, telefono: "4813-3221", select: true },
  { id: "cristales-lopez", nombre: "Cristales Lopez", direccion: "Aguero 1129", localidad: "CABA", provincia: "CABA", lat: -34.596547, lng: -58.40997, telefono: "4964-9280/4962-9985", select: true },
  { id: "expo-aberturas", nombre: "Expo Aberturas", direccion: "Av. De Los Constituyentes 3902", localidad: "CABA", provincia: "CABA", lat: -34.586214, lng: -58.487666, telefono: "4571-6349/45732504" },
  { id: "glassman-vidrieria", nombre: "Glassman Vidrieria", direccion: "Moldes 1808", localidad: "CABA", provincia: "CABA", lat: -34.566372, lng: -58.45723, telefono: "47889050" },
  { id: "habital-design-sa", nombre: "Habital Design SA", direccion: "Gregorio De La Ferrere 3751", localidad: "CABA", provincia: "CABA", lat: -34.644108, lng: -58.470843, telefono: "4612-4200", select: true },
  { id: "medrano-cristales", nombre: "Medrano Cristales", direccion: "Medrano 669", localidad: "CABA", provincia: "CABA", lat: -34.602461, lng: -58.420695, telefono: "4861-8286 / 4861-8448" },
  { id: "open-glass", nombre: "Open Glass", direccion: "Scalabrini Ortiz 104", localidad: "CABA", provincia: "CABA", lat: -34.601267, lng: -58.441097, telefono: "48570666", select: true },
  { id: "politec-sa", nombre: "Politec SA", direccion: "Estado De Israel 4444", localidad: "CABA", provincia: "CABA", lat: -34.598727, lng: -58.428432, telefono: "4867-4442" },
  { id: "power-windows", nombre: "Power Windows", direccion: "Av. Cabildo 214", localidad: "CABA", provincia: "CABA", lat: -34.57336, lng: -58.438669, telefono: "4771-3333" },
  { id: "vidrieria-lacroze", nombre: "Vidrieria Lacroze", direccion: "Federico Lacroze 2537", localidad: "CABA", provincia: "CABA", lat: -34.571867, lng: -58.446166, telefono: "4553-0120/4552-5363" },
  { id: "vidrios-especiales", nombre: "Vidrios Especiales", direccion: "Av. Garmendia 4769", localidad: "CABA", provincia: "CABA", lat: -34.593377, lng: -58.464642, telefono: "4514-6444" },
  { id: "vidrios-lescano", nombre: "Vidrios Lescano", direccion: "Cervantes 23", localidad: "CABA", provincia: "CABA", lat: -34.6366, lng: -58.495006, telefono: "(02362)-434939/427799" },
  { id: "vitrag-1", nombre: "Vitrag 1", direccion: "Ohiggins 2134", localidad: "CABA", provincia: "CABA", lat: -34.559551, lng: -58.453352, telefono: "4782-6431/4781-9625" },
  { id: "vitrag-2", nombre: "Vitrag 2", direccion: "Blanco Encalada 2822", localidad: "CABA", provincia: "CABA", lat: -34.561599, lng: -58.462888, telefono: "47876480/47884621" },
  { id: "vitrag-3", nombre: "Vitrag 3", direccion: "La Pampa 3044", localidad: "CABA", provincia: "CABA", lat: -34.568404, lng: -58.460123, telefono: "4706-2501/ 4787-3185" },
  { id: "vitrag-4", nombre: "Vitrag 4", direccion: "Av. Forest 1289", localidad: "CABA", provincia: "CABA", lat: -34.57701, lng: -58.461193, telefono: "4554-3479 / 4553-7713" },
  { id: "vitrag-5", nombre: "Vitrag 5", direccion: "Monroe 3621", localidad: "CABA", provincia: "CABA", lat: -34.565578, lng: -58.471596, telefono: "4543-7989/4543-6925" },
  { id: "w-w-vidrios", nombre: "W & W vidrios", direccion: "Arenales 1864", localidad: "CABA", provincia: "CABA", lat: -34.594736, lng: -58.394091, telefono: "48138307/45014514" },
  { id: "alcons-srl", nombre: "Alcons SRL", direccion: "Maximo Virgolini 1217", localidad: "Córdoba", provincia: "Córdoba", lat: -31.398421, lng: -64.154581, telefono: "351-4511679" },
  { id: "alumer-aluminio", nombre: "Alumer Aluminio", direccion: "Pje .dinamarca 56", localidad: "Córdoba", provincia: "Córdoba", lat: -31.44201, lng: -64.50462, telefono: "03541-429616" },
  { id: "cristales-baez", nombre: "Cristales Baez", direccion: "Coronel Pringles 830", localidad: "Córdoba", provincia: "Córdoba", lat: -32.349915, lng: -65.033333, telefono: "2656475069" },
  { id: "euro-aluminio", nombre: "Euro Aluminio", direccion: "Igualdad 2230", localidad: "Córdoba", provincia: "Córdoba", lat: -31.400048, lng: -64.209719, telefono: "0351-4800673" },
  { id: "hamsa-carpinteria", nombre: "Hamsa Carpinteria", direccion: "Bv. De Los Rusos 3360", localidad: "Córdoba", provincia: "Córdoba", lat: -31.404526, lng: -64.209953, telefono: "351-4864322" },
  { id: "instalglass", nombre: "Instalglass", direccion: "Av. Los Alamos (cuesta Colorada) 453", localidad: "Córdoba", provincia: "Córdoba", lat: -31.349914, lng: -64.310069, telefono: "0351-156337221/03543-460008" },
  { id: "pena-aberturas-s-a", nombre: "Peña Aberturas S.A.", direccion: "Av. Leandro Alem 2726", localidad: "Córdoba", provincia: "Córdoba", lat: -31.377419, lng: -64.152372, telefono: "351-4781616", select: true },
  { id: "raffaelli-aluminios", nombre: "Raffaelli Aluminios", direccion: "Av. del Trabajo 849", localidad: "Córdoba", provincia: "Córdoba", lat: -31.393256, lng: -64.164819, telefono: "(0351) 472 5135", select: true },
  { id: "aluplast-colon", nombre: "Aluplast Colón", direccion: "General Paz 114", localidad: "Entre Ríos", provincia: "Entre Ríos", lat: -32.222506, lng: -58.143961, telefono: "03447-427831", web: "https://www.aluplast.com.ar/", select: true },
  { id: "aluplast-concepcion-del-uruguay", nombre: "Aluplast Concepción Del Uruguay", direccion: "Bvd. Díaz Vélez 36", localidad: "Entre Ríos", provincia: "Entre Ríos", lat: -32.487179, lng: -58.249813, telefono: "03442-448001", web: "https://www.aluplast.com.ar/", select: true },
  { id: "aluplast-concordia", nombre: "Aluplast Concordia", direccion: "Vélez Sarsfield 569", localidad: "Entre Ríos", provincia: "Entre Ríos", lat: -31.392113, lng: -58.02956, telefono: "03445-4274594", web: "https://www.aluplast.com.ar/", select: true },
  { id: "aluplast-gualeguaychu", nombre: "Aluplast Gualeguaychú", direccion: "Primera Junta 355", localidad: "Entre Ríos", provincia: "Entre Ríos", lat: -33.00351, lng: -58.521772, telefono: "03446-424528", web: "https://www.aluplast.com.ar/", select: true },
  { id: "aluplast-s-r-l", nombre: "Aluplast S.R.L.", direccion: "Ruta 20 Acceso Norte", localidad: "Entre Ríos", provincia: "Entre Ríos", lat: -32.674128, lng: -58.88219, telefono: "03446-480213", web: "https://www.aluplast.com.ar/", select: true },
  { id: "aberturas-americanas", nombre: "Aberturas Americanas", direccion: "Aristides Villanueva 122", localidad: "Mendoza", provincia: "Mendoza", lat: -32.893096, lng: -68.851658, telefono: "+54 261 4204936ÿ" },
  { id: "aberturas-americanas-2", nombre: "Aberturas Americanas", direccion: "San Martin Sur 108", localidad: "Mendoza", provincia: "Mendoza", lat: -32.925487, lng: -68.848289, telefono: "+54 261 4224774" },
  { id: "alglass-aluminio-y-vidrios", nombre: "Alglass Aluminio Y Vidrios", direccion: "Cervantes 2535", localidad: "Mendoza", provincia: "Mendoza", lat: -32.955104, lng: -68.849669, telefono: "0261-4399-252" },
  { id: "cercuyo", nombre: "Cercuyo", direccion: "Juan Guillermo Molina 609", localidad: "Guaymallén", provincia: "Mendoza", lat: -32.905167, lng: -68.831436, select: true },
  { id: "de-la-canal-aberturas", nombre: "De La Canal Aberturas", direccion: "ruta 40 km 2221 uf 6", localidad: "Neuquén", provincia: "Neuquén", lat: -40.124415, lng: -71.2464, telefono: "2972412569" },
  { id: "pvc-sur-aberturas", nombre: "Pvc Sur Aberturas", direccion: "Las Fucsias 771", localidad: "Neuquén", provincia: "Neuquén", lat: -40.761379, lng: -71.638572, telefono: "2944352347" },
  { id: "aberturas-de-aluminio", nombre: "Aberturas De Aluminio", direccion: "Marconi 1651", localidad: "Río Negro", provincia: "Río Negro", lat: -38.92244, lng: -67.968491, telefono: "0299-4792216" },
  { id: "alport-bordenave", nombre: "Alport Bordenave", direccion: "Union 70. Bordenave", localidad: "Río Negro", provincia: "Río Negro", lat: -37.807788, lng: -63.042354, telefono: "0291- 4223842 / 6484390" },
  { id: "cristalizando-s-a", nombre: "Cristalizando S.A.", direccion: "Pellegrini 702", localidad: "Salta", provincia: "Salta", lat: -24.798314, lng: -65.416036, telefono: "(0387) 439-9651" },
  { id: "hermetika-sas", nombre: "Hermetika SAS", direccion: "Mendoza 2128 (sur)", localidad: "San Juan", provincia: "San Juan", lat: -31.559897, lng: -68.524456, telefono: "+54 9 264 4031409" },
  { id: "la-casa-del-vidrio", nombre: "La Casa Del Vidrio", direccion: "Av. Rioja Sur 1080 - San Juan", localidad: "San Juan", provincia: "San Juan", lat: -31.547793, lng: -68.520149, telefono: "+54 9 264 4 272533" },
  { id: "abermet", nombre: "Abermet", direccion: "4 De enero 2600", localidad: "Santa Fe", provincia: "Santa Fe", lat: -31.64447, lng: -60.71125, telefono: "0342-4524940" },
  { id: "aberturas-centro", nombre: "Aberturas Centro", direccion: "Cochabamba 5259", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.949325, lng: -60.695069, telefono: "0341-4564884" },
  { id: "aberturas-general-paz", nombre: "Aberturas General Paz", direccion: "1 De Mayo / Gorostiaga 4775 / 3935", localidad: "Santa Fe", provincia: "Santa Fe", lat: -31.623169, lng: -60.703734, telefono: "0342-4557029 / 0342-489-9989" },
  { id: "ad-aberturas-de-aluminio", nombre: "Ad Aberturas De Aluminio", direccion: "Bv. Roca 1019", localidad: "Santa Fe", provincia: "Santa Fe", lat: -31.251079, lng: -61.502613, telefono: "03492-437013" },
  { id: "alumarc", nombre: "Alumarc", direccion: "Calle 7 (parque Industrial) 2107", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.685589, lng: -62.122632, telefono: "03472-444646" },
  { id: "city-glass", nombre: "City Glass", direccion: "Riccieri 711", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.940999, lng: -60.662424, telefono: "0341-438-1014" },
  { id: "cruellas-cristales", nombre: "Cruellas Cristales", direccion: "Jorge Newbery 9434", localidad: "Santa Fe", provincia: "Santa Fe", lat: -33.900221, lng: -60.566923, telefono: "02477-435008" },
  { id: "deyvel-srl", nombre: "Deyvel SRL", direccion: "General Artigas 745", localidad: "Santa Fe", provincia: "Santa Fe", lat: -31.753496, lng: -60.508222, telefono: "0343-424-1246" },
  { id: "don-bosco-cristal-srl", nombre: "Don Bosco Cristal SRL", direccion: "Parana 518", localidad: "Santa Fe", provincia: "Santa Fe", lat: -33.349433, lng: -60.206792, telefono: "(3364) 426553", select: true },
  { id: "el-espejo-mallorquin", nombre: "El Espejo Mallorquin", direccion: "Jose Ingenieros 1487", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.916258, lng: -60.684062, telefono: "0341-4387-843" },
  { id: "emprecons", nombre: "Emprecons", direccion: "San Lorenzo 3533", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.740862, lng: -60.747903, telefono: "0385-15-688-5846" },
  { id: "grimaldi-gh-srl", nombre: "Grimaldi Gh SRL", direccion: "Jorge Newbery 9438", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.909114, lng: -60.773111, telefono: "0341-4516225", select: true },
  { id: "herradep", nombre: "Herradep", direccion: "Bv. Oroño 4570", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.989601, lng: -60.664905, telefono: "0341-4625897", select: true },
  { id: "leffler-dietz-aluminio", nombre: "Leffler Dietz Aluminio", direccion: "Colon 222 - Gral. Ramírez (cp3100) - Entre Ríos", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.171827, lng: -60.201084, telefono: "0343-4901500", select: true },
  { id: "metalurgica-breques", nombre: "Metalurgica Breques", direccion: "Saavedra 2340", localidad: "Santa Fe", provincia: "Santa Fe", lat: -31.445645, lng: -60.935302, telefono: "3496444030" },
  { id: "neo-aberturas", nombre: "Neo Aberturas", direccion: "Ruta Nacional N 11 1518", localidad: "Santa Fe", provincia: "Santa Fe", lat: -30.778835, lng: -60.593867, telefono: "(3498)15415166" },
  { id: "nexo-aberturas", nombre: "Nexo Aberturas", direccion: "Valentin Torra 4754", localidad: "Santa Fe", provincia: "Santa Fe", lat: -31.770049, lng: -60.456343, telefono: "3434261800" },
  { id: "orlandi-aberturas", nombre: "Orlandi Aberturas", direccion: "Hernandarias 2066", localidad: "Santa Fe", provincia: "Santa Fe", lat: -31.608487, lng: -60.689122, telefono: "0342-469-2310" },
  { id: "vidrieria-daverio", nombre: "Vidrieria Daverio", direccion: "Boedo 1001", localidad: "Santa Fe", provincia: "Santa Fe", lat: -33.808457, lng: -59.500413, telefono: "(03329) 15-57-6043" },
  { id: "vidrieria-mirage", nombre: "Vidrieria Mirage", direccion: "9 De julio 1616", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.952511, lng: -60.647282, telefono: "0341 425-8755" },
  { id: "vidrieria-rubiolo-srl", nombre: "Vidrieria Rubiolo SRL", direccion: "Eva Peron 6527", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.933564, lng: -60.710899, telefono: "0341-4560107/4574158" },
  { id: "vidrios-y-aberturas", nombre: "Vidrios Y Aberturas", direccion: "Zavalla 1053", localidad: "Santa Fe", provincia: "Santa Fe", lat: -33.018969, lng: -60.883008, telefono: "0342-4885238" },
  { id: "vigodnier-vidrios", nombre: "Vigodnier Vidrios", direccion: "Baigorria 1429", localidad: "Santa Fe", provincia: "Santa Fe", lat: -32.893359, lng: -60.701341, telefono: "455-4672" },
  { id: "molina-vidrios-s-a", nombre: "Molina Vidrios S.A.", direccion: "Rivadavia 1101", localidad: "Tucumán", provincia: "Tucumán", lat: -26.816307, lng: -65.197956, telefono: "(0381) 422-0111" },
];

/** Provincias con al menos un punto, ordenadas, para el filtro. */
export const provincias = Array.from(
  new Set(puntosDeVenta.map((p) => p.provincia))
).sort((a, b) => a.localeCompare(b, "es"));
