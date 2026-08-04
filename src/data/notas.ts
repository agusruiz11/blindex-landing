// ─────────────────────────────────────────────────────────────────────────
// NOTAS TÉCNICAS — texto real volcado de blindex.com.ar/notes/ (31/07/2026)
//
// Ya no dependen del WordPress: el texto está acá. En el sitio actual estas
// notas están publicadas pero son inalcanzables desde el menú.
//
// Es material de autoridad técnica de verdad (normas IRAM, marco legal,
// responsabilidad profesional). Vale como contenido SEO para arquitectos y
// especificadores, que es la audiencia B2B de la marca.
// ─────────────────────────────────────────────────────────────────────────
export type Nota = {
  id: string;
  titulo: string;
  resumen: string;
  parrafos: string[];
};

export const notas: Nota[] = [
  {
    id: "seguridad-de-las-personas-y-seguridad-de-los-bienes",
    titulo: "Seguridad de las personas y seguridad de los bienes",
    resumen:
      "No es lo mismo un vidrio que evita accidentes que uno que frena una intrusión. Safety Glass y Security Glass son dos categorías distintas.",
    parrafos: [
      "Cuando hablamos de vidrios seguros para las personas nos referimos a aquellos vidrios que son muy difíciles de romper o que cuando lo hacen, se rompen en forma segura para las personas, es decir, evitan accidentes con vidrio. Dentro de los vidrios seguros encontramos al vidrio templado y al vidrio laminado. En inglés estos vidrios se engloban dentro del concepto de Safety Glass.",
      "En cambio, cuando se pretende proteger los bienes, como por ejemplo una vidriera anti intrusión o la caja de un banco con vidrio anti bala, se trabaja con vidrios multilaminados, compuestos por distintas capas de vidrio y Polivinil de Butiral, a fin de evitar el paso del objeto corto punzante. Estos vidrios son conocidos como Security Glass en idioma inglés.",
    ],
  },
  {
    id: "caracteristicas-de-los-vidrios-segun-su-proceso",
    titulo: "Características de los vidrios según su proceso",
    resumen:
      "Float, templado, laminado y templado laminado: qué es cada uno, cómo rompe y dónde corresponde usarlo.",
    parrafos: [
      "El vidrio común Float, conocido también como vidrio crudo, es aquél que no ha sido sometido a ningún proceso térmico posterior a su fabricación en un horno float. Como principal característica decimos que rompe en forma no segura para las personas, con pedazos grandes, aristas filosas y bordes puntiagudos, que cortan, lastiman y laceran. Su resistencia mecánica y al choque térmico es limitada y desde ya que no debe usarse en zonas factibles de impacto humano.",
      "El vidrio templado se fabrica a partir de una hoja de vidrio común ya cortada a medida, con sus bordes pulidos y con todas las perforaciones o entrantes necesarios para su colocación, que luego recibe un tratamiento térmico que mejora su resistencia mecánica y térmica entre 4 y 5 veces, siendo mucho más resistente a los golpes y al choque térmico que el vidrio común. Este tipo de vidrio tiene como particularidad que al romperse pierde integridad y se destroza en pequeños fragmentos. Es el tipo de vidrio indicado para aquellas situaciones donde el vidrio está tomado por herrajes o arañas, ya que las tensiones derivadas de las presiones de viento o el movimiento de uso del vidrio, como son los frentes vidriados tomados por Spyders, se concentran en los puntos de fijación, demandando una mayor resistencia mecánica a fin de no romperse, situación en la cual un vidrio común no templado se rompería. Todos los vidrios templados son considerados aptos para usar en zonas susceptibles de impacto humano, pero no deben usarse en techos vidriados simples o en vidriados al vacío, como por ejemplo balcones vidriados. En la industria automotriz se utiliza vidrio templado para los laterales y la luneta de los autos.",
      "El vidrio laminado marca Blindex es hoy considerado el vidrio seguro por excelencia, ya que al romperse, los trozos de vidrio quedan adheridos a una interlámina de PVB (Polivinil de Butiral) de gran resistencia mecánica, muy difícil de atravesar. Al romperse mantiene la integridad del paño y las visuales, lo que hace que su aplicación sea prácticamente infinita, principalmente en aquellas zonas donde el vidrio da al vacío o en techos vidriados. El vidrio laminado se fabrica en autoclave con presión y temperatura controlados, haciendo que las dos hojas de vidrio se adhieran a la interlámina conformando un sándwich prácticamente monolítico. La interlámina de PVB, además, logra una mayor aislación acústica y filtra hasta el 99% de los rayos Ultravioletas (UV), reduciendo la posibilidad de decoloración de los revestimientos, muebles y cortinados. En la industria automotriz se utiliza vidrio laminado para el parabrisas de los autos.",
      "Cuando se requiere una mayor aislación acústica podemos solicitar el vidrio laminado con PVB de 2, 3 o 4 capas, es decir que en lugar de tener 0,38 mm de espesor en el simple PVB, podemos pasar a tener 0,76, 1,14 o 1,52 mm, otorgando una mejora notoria en el control de sonidos de alta frecuencia.",
      "Existen situaciones en las que se requiere un vidrio que no pierda integridad (laminado) pero que posea una gran resistencia mecánica (templado) a causa del sistema de fijación o herrajes que soportan el vidrio. Tal es el caso de los balcones con vidrios tomados por botones o los vidrios empotrados. En este caso se utiliza un vidrio templado laminado, compuesto por dos o más vidrios que primero son cortados y templados para luego ser laminados con un PVB de fuerte espesor.",
    ],
  },
  {
    id: "marco-legal-argentino",
    titulo: "Marco Legal Argentino",
    resumen:
      "Normas IRAM 12595 y 12565, zonas factibles de impacto humano, la resolución de CAVIPLAN para DVH y quién responde ante un accidente.",
    parrafos: [
      "El vidrio forma parte de los códigos de edificación de la mayoría de ciudades de la República Argentina, estableciendo la obligatoriedad de uso de los vidrios seguros para las personas en todas las zonas factibles de impacto humano e instruye a cumplir con las Normas IRAM 12595 “Vidrios seguros: zonas factibles de impacto humano” y la 12565 “Cálculo de espesor de vidrios”. Estas Normas son de cumplimiento obligatorio y determinan cuáles son las zonas de las edificaciones que se consideran de riesgo y deben llevar vidrios seguros, templados o laminados, además de determinar el espesor de vidrio necesario para resistir las cargas de viento a las que estará expuesto.",
      "La principal zona de riesgo son las puertas y las ventanas balcón, dado que al ser el vidrio un material prácticamente invisible en ciertas situaciones de iluminación, es muy factible de ser impactado. También se considera de riesgo todo paño fijo que se encuentre adyacente a una puerta, separado menos de 30 cm de la misma. Finalmente, todo vidrio que se encuentra por debajo de los 80 cm de altura es también zona de riesgo ya que estadísticamente los individuos que mayor cantidad de accidentes tienen con vidrio son los niños de hasta 14 años y las personas mayores de 65. La mayoría de los vidrios que se encuentran por encima de los 80 cm de altura del Nivel de Piso Terminado se encuentran en una zona que no se considera factible de impacto humano, aunque en ciertas ocasiones es recomendable la utilización de vidrios seguros, sobre todo en viviendas o edificios con presencia de niños y en zonas resbaladizas, de juegos o deportes.",
      "El caso de los DVH en techos vidriados merece un tratamiento particular dado que, si bien no es una zona factible de impacto humano, sí se la considera de riesgo por la peligrosidad que conlleva la posible caída de granizo o algún objeto que rompa el vidrio. Por ello se debe utilizar en estas aplicaciones un DVH con vidrio laminado en su cara interior, siendo el recomendado del lado exterior un vidrio templado de control solar a fin de minimizar las ganancias de calor del sol directo sobre plano horizontal. Otro caso particular es el de los vidrios que dan al vacío como son los balcones vidriados y los frentes vidriados. En ambos casos se debe utilizar exclusivamente vidrio laminado para evitar la caída del objeto que golpea el vidrio, siendo el templado no recomendado ya que al romperse pierde integridad, cayendo al vacío y dejando el vano abierto.",
      "Todo lo expuesto aplica para cualquier tipo de vidrio, ya sea simple o doble vidriado. En el caso particular de los DVH existe una Resolución de CAVIPLAN (Cámara del Vidrio Plano y sus manufacturas de la Rep. Arg.) vigente desde el 1° de julio de 2014 que indica que todo DVH cuya superficie sea mayor a 1,50 m² debe llevar vidrios seguros para las personas. Por otro lado se debe indicar al fabricante de DVH si el mismo será utilizado en una zona factible de impacto humano o no, y finalmente pero no menos importante, si el DVH será utilizado en una carpintería contenido en sus cuatro bordes en posición vertical o si su destino será un frente vidriado, donde los bordes del DVH quedarán expuestos a la radiación solar directa. Este último punto está vinculado con el hecho de que el sellado secundario del tipo “Hotmelt” o el “Polisulfuro” es sensible a la radiación solar directa ya que se degradan por efecto de los rayos UV, siendo necesaria la utilización exclusivamente de Silicona Estructural Neutra, la cual resiste los rayos UV y no permite que los vidrios se desprendan y caigan al vacío.",
      "Es importante resaltar que la responsabilidad sobre las consecuencias de daños y accidentes provocados por una mala especificación de las superficies vidriadas y de los sistemas de fijación del mismo son compartidas, es decir, solidariamente responsables entre los profesionales actuantes en la obra, como ser: proyectista, jefe y director de obra; los subcontratistas: carpintero o fabricante de ventanas o frente vidriado y el vidriero; propietario o dueño de la obra en cuestión, además del organismo contralor estatal. Especificar y controlar correctamente la calidad y tipos de vidrio que se instalan en la obra es fundamental para evitar patologías y consecuencias posteriores.",
    ],
  },
  {
    id: "calculo-de-espesor-de-vidrios",
    titulo: "Cálculo de espesor de vidrios",
    resumen:
      "Cómo se determina la presión de viento sobre un paño y cómo verificar si la configuración propuesta la soporta.",
    parrafos: [
      "Además de cumplir con las zonas factibles de impacto humano, las legislaciones y las reglas del buen arte indican que se debe calcular el espesor de vidrio a instalar de acuerdo a las solicitaciones de presión de viento a las cuales estará expuesto. Para ello existe una Norma IRAM que establece un método de cálculo para aquellos vidrios sustentados en sus cuatro lados. Esta norma se encuentra en proceso de revisión por parte del sub-comité de Vidrio Plano del IRAM y tomará como antecedente la norma estadounidense ASTM 1300, que plantea un proceso de cálculo similar a la norma IRAM vigente pero que contempla distintos sistemas de fijación para vidrios contenidos en todo su perímetro como también para vidrios sustentados por 1, 2 o 3 lados, lo que permite mayores posibilidades de diseño para el profesional.",
      "Para determinar la presión de viento por m² que actuará sobre el vidrio se deben considerar la velocidad de ráfaga máxima de la localidad, la altura a la que está ubicado el vidrio y la densidad urbana del entorno.",
      "Por ejemplo, para un vidrio ubicado en la ciudad de Rosario, Santa Fe, en una ventana del 7° piso frente al río, la presión de viento resultante es de 2,40 kPa.",
      "Conociendo la presión por m² se puede verificar si una configuración de vidrio propuesta soporta efectivamente la carga y si la deflexión en el centro del paño está dentro de los límites de seguridad. Se ingresa en la fila que le corresponde a la presión de viento obtenida y se verifica si la superficie del vidrio en cuestión es igual o menor que la máxima para ese tipo y espesor de vidrio. De ser mayor se debe pasar a un espesor mayor o cambiar el tipo de vidrio a uno más resistente (templado o termoendurecido).",
      "Siguiendo el ejemplo del 7° piso en Rosario, con un paño de 2,00 × 2,00 m: la superficie máxima de un DVH 3+3/12/3+3 para una presión de 2,40 kPa es de 2,5 m². Como el paño tiene 4 m², la configuración admisible pasa a ser un DVH 5+5/12/4+4.",
    ],
  },
];

// NOTA: la nota de cálculo de espesor original incluye dos tablas (velocidad
// de ráfaga por capital y superficie máxima por presión). No están volcadas:
// hay que pedirle los datos al cliente para armarlas como tabla accesible.
