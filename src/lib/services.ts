export type Service = {
  id: string;
  title: string;
  summary: string;
  body: string[];
};

export const servicesEn: Service[] = [
  {
    id: "immigration-court",
    title: "Immigration Court (removal defense)",
    summary:
      "Advocacy in and out of detention, including bond requests and long-term strategies to remain in the United States.",
    body: [
      "If you have been summoned to appear before a United States Immigration Court, we will explain possible ways of remaining in the United States and build an effective strategy to safeguard legal status for the long term.",
      "We advocate for the rights of noncitizens both in and out of detention. For those in detention, we will tell you whether the law allows a bond request — and if it does, we will prepare the most compelling request possible.",
      "These cases can take months or years. However long it takes, we will tell you what we are doing and why, and we will watch the law for changes that could affect you.",
      "Winning in immigration court requires legal acumen and as much corroborating evidence as possible. We will present a legally sound case and guide you through collecting the evidence needed to put your best foot forward.",
    ],
  },
  {
    id: "humanitarian",
    title: "Humanitarian immigration",
    summary:
      "Asylum, withholding of removal, Convention Against Torture protection, and visas for survivors of trafficking or crime.",
    body: [
      "United States immigration laws provide pathways to legal status — or, at a minimum, protection from deportation — for people who have experienced severe harm inside or outside the United States.",
      "If you came seeking protection from harm in your home country, we can counsel you on eligibility for asylum, restriction on/withholding of removal, and protection under the Convention Against Torture. If you qualify, we will help you prove every applicable requirement.",
      "If you were trafficked into the United States or were a victim of or witness to criminal activity, you may be able to obtain a visa that can lead to permanent residence and citizenship. We will evaluate your case and help you through the full application and evidence packet.",
      "Talking and writing about harm is extremely difficult. We are not mental health professionals, but we will be sensitive to your situation and take the time you need to tell your story. Then we will advocate creatively and forcefully for your right to live and work here.",
      "If you already have a humanitarian status that later allows an application for permanent residence, we will help you prepare a well-documented filing.",
    ],
  },
  {
    id: "family",
    title: "Family-based immigration",
    summary:
      "Petitions for close relatives, adjustment of status, consular processing, fiancé visas, and waivers when needed.",
    body: [
      "United States citizens and lawful permanent residents can petition for certain close relatives to live here permanently. In some circumstances, family members already in the United States can apply for green cards without leaving the country. Others may request residency through a U.S. consulate.",
      "We also assist citizens who wish to bring a fiancé to the United States.",
      "This area of law has grown more demanding. Authorities now require more proof of both the family relationship and the noncitizen’s eligibility. Even seemingly minor incidents in a person’s past can technically disqualify them — though it is sometimes possible to request a waiver.",
      "If you have a family member who may help you obtain lawful status, or you want to bring a family member to the United States, we will evaluate your options and make sure the forms and evidence are submitted as cleanly as possible.",
    ],
  },
  {
    id: "daca-tps",
    title: "DACA, TPS, and other programs",
    summary:
      "DACA, Temporary Protected Status, Deferred Enforced Departure, country-specific programs, and military-related options.",
    body: [
      "Deferred Action for Childhood Arrivals (DACA) allows some people who were brought to the United States as children to request work authorization and protection from deportation. Court decisions on the program still change. We track those orders and can advise whether an initial application, a renewal, or advance parole is available.",
      "We also help noncitizens from selected countries apply for or renew Temporary Protected Status (TPS), request a work permit under Deferred Enforced Departure (DED), or use country-specific programs that grant the right to live here permanently.",
      "If you or a noncitizen you know has served in the United States military, additional options may be available.",
      "If new legislation or programs later create a path for eligible noncitizens living here without status, we will be ready to help clients apply.",
    ],
  },
  {
    id: "citizenship",
    title: "Naturalization and citizenship",
    summary:
      "Naturalization applications, interview preparation, English/civics exceptions, and proof of existing citizenship.",
    body: [
      "Are you eligible to apply for United States citizenship? Do you think you may already be a citizen even without the paperwork to prove it? We can help with either situation.",
      "If you can apply for naturalization, we will guide you through the application, supporting documents, and interview. If you do not speak English or cannot take the civics test, we can tell you whether you can still complete the process.",
      "If you need proof that you are already a United States citizen, we will help you gather evidence to submit to the immigration authorities.",
    ],
  },
  {
    id: "appeals",
    title: "Appeals and federal litigation",
    summary:
      "Administrative appeals, motions to reopen, petitions for review, naturalization actions, delay suits, and detention petitions.",
    body: [
      "Even well-presented applications are sometimes denied. Many immigration-judge decisions and some decisions on applications filed outside court can be appealed inside the agencies. Whether or not we handled the original case, we will advise you on appealing or reopening and present thoroughly reasoned arguments.",
      "We also represent noncitizens in federal court: petitions for review of Board of Immigration Appeals decisions, naturalization actions, suits for noncompliance or unreasonable delay, and petitions requesting release from immigration detention.",
      "Going to federal court is not always the right next step. We will discuss the strengths and risks of your case before recommending it. If you proceed, we will stand with you through research-backed advocacy.",
    ],
  },
  {
    id: "crimmigration",
    title: "Colorado criminal defense and crimmigration",
    summary:
      "Case-by-case criminal defense in Colorado, post-conviction relief, and nationwide advice for defense counsel.",
    body: [
      "If you are accused of a crime, it is always best to seek legal representation. For noncitizens the need is even more urgent. Convictions that seem minor — including those that did not involve prison — can lead to arrest and months of immigration detention. Some convictions trigger expedited deportation without seeing an immigration judge. In less severe cases, a conviction can still block lawful status.",
      "Crimmigration is the overlap between criminal and immigration law. We provide direct representation to noncitizens in Colorado criminal proceedings on a case-by-case basis. If someone pleaded guilty because prior counsel did not correctly advise them of immigration consequences, we can seek post-conviction relief in Colorado to withdraw that plea.",
      "Noncitizens we do not represent directly, or whose cases are outside Colorado, can still rely on us to advise their criminal defense attorneys on how to avoid immigration consequences.",
    ],
  },
  {
    id: "sijs",
    title: "Services for noncitizen juveniles",
    summary:
      "Colorado state-court orders and immigration filings for Special Immigrant Juvenile Status (SIJS).",
    body: [
      "Some people under 21 may obtain permanent residence through Special Immigrant Juvenile Status (SIJS). The first step is a state-court order that meets specific legal requirements.",
      "In Colorado, we can guide eligible minors and their families through those state-court proceedings and then through the process before the immigration authorities.",
      "We cannot provide state-court services outside Colorado, but we can advise attorneys in other states about the requirements for those orders under the immigration laws.",
    ],
  },
];

export const servicesEs: Service[] = [
  {
    id: "immigration-court",
    title: "Tribunales de inmigración (defensa contra la deportación)",
    summary:
      "Defensa dentro y fuera de detención, incluidas solicitudes de fianza y estrategias a largo plazo para permanecer en Estados Unidos.",
    body: [
      "Si ha sido citado a comparecer ante un tribunal de inmigración de Estados Unidos, le explicaremos las posibles vías para permanecer en el país y construiremos una estrategia eficaz para proteger su estatus a largo plazo.",
      "Defendemos los derechos de las personas no ciudadanas tanto en detención como en libertad. Si está detenido, le diremos si la ley permite solicitar fianza y, de ser así, prepararemos la solicitud más sólida posible.",
      "Estos casos pueden tardar meses o años. Sea cual sea el tiempo, le informaremos qué estamos haciendo y por qué, y vigilaremos los cambios legales que puedan afectarle.",
      "Ganar en el tribunal de inmigración exige rigor jurídico y la mayor cantidad posible de evidencia que corrobore su relato. Presentaremos un caso jurídicamente sólido y le guiaremos en la recolección de pruebas.",
    ],
  },
  {
    id: "humanitarian",
    title: "Inmigración por razones humanitarias",
    summary:
      "Asilo, withholding, protección bajo la Convención contra la Tortura y visas para sobrevivientes de trata o delitos.",
    body: [
      "Las leyes de inmigración de Estados Unidos ofrecen vías hacia un estatus legal —o, al menos, protección frente a la deportación— para quienes han sufrido daño grave dentro o fuera del país.",
      "Si vino buscando protección frente al daño en su país de origen, podemos asesorarle sobre asilo, withholding of removal y protección bajo la Convención contra la Tortura. Si califica, le ayudaremos a demostrar cada requisito.",
      "Si fue víctima de trata o víctima o testigo de un delito, podría obtener una visa que conduzca a la residencia permanente y a la ciudadanía. Evaluaremos su caso y le acompañaremos en toda la solicitud y el paquete de evidencia.",
      "Hablar y escribir sobre el daño es extremadamente difícil. No somos profesionales de salud mental, pero seremos sensibles a su situación y tomaremos el tiempo que necesite para contar su historia. Luego abogaremos con fuerza por su derecho a vivir y trabajar aquí.",
      "Si ya tiene un estatus humanitario que más adelante permite solicitar residencia permanente, le ayudaremos a preparar una solicitud bien documentada.",
    ],
  },
  {
    id: "family",
    title: "Inmigración basada en la unidad familiar",
    summary:
      "Peticiones para familiares cercanos, ajuste de estatus, proceso consular, visas de prometido y waivers cuando procedan.",
    body: [
      "Los ciudadanos de Estados Unidos y los residentes permanentes pueden pedir a ciertos familiares cercanos el derecho a vivir aquí de forma permanente. En algunas circunstancias, quienes ya están en el país pueden solicitar la residencia sin salir. Otros pueden tramitarla ante un consulado estadounidense.",
      "También asistimos a ciudadanos que desean traer a un prometido o prometida a Estados Unidos.",
      "Esta área se ha vuelto más exigente. Las autoridades piden más prueba tanto de la relación familiar como de la elegibilidad. Incluso incidentes aparentemente menores pueden descalificar a una persona, aunque a veces es posible solicitar una exención (waiver).",
      "Si un familiar podría ayudarle a obtener estatus, o si desea traer a un familiar a Estados Unidos, evaluaremos sus opciones y nos aseguraremos de presentar los formularios y la evidencia con la menor cantidad posible de contratiempos.",
    ],
  },
  {
    id: "daca-tps",
    title: "DACA, TPS y otros programas",
    summary:
      "DACA, Estatus de Protección Temporal, DED, programas por país y opciones relacionadas con el servicio militar.",
    body: [
      "La Acción Diferida para los Llegados en la Infancia (DACA) permite a algunas personas traídas a Estados Unidos siendo menores solicitar permiso de trabajo y protección frente a la deportación. Las decisiones judiciales sobre el programa siguen cambiando. Damos seguimiento a esas órdenes y podemos indicar si es posible una solicitud inicial, una renovación o advance parole.",
      "También ayudamos a personas de ciertos países a solicitar o renovar el Estatus de Protección Temporal (TPS), a pedir permiso de trabajo bajo Deferred Enforced Departure (DED), o a usar programas específicos de país que conceden el derecho a vivir aquí de forma permanente.",
      "Si usted o un familiar no ciudadano ha servido en las fuerzas armadas de Estados Unidos, pueden existir opciones adicionales.",
      "Si más adelante nuevas leyes o programas abren un camino para personas elegibles que viven aquí sin estatus, estaremos listos para ayudarles a solicitar.",
    ],
  },
  {
    id: "citizenship",
    title: "Naturalización y ciudadanía",
    summary:
      "Solicitudes de naturalización, preparación para la entrevista, excepciones de inglés y civismo, y prueba de ciudadanía existente.",
    body: [
      "¿Es elegible para solicitar la ciudadanía de Estados Unidos? ¿Cree que ya es ciudadano aunque no tenga los documentos que lo demuestren? Podemos ayudarle en cualquiera de las dos situaciones.",
      "Si puede naturalizarse, le guiaremos en la solicitud, los documentos de apoyo y la entrevista. Si no habla inglés o no puede presentar el examen de civismo, le diremos si aún es posible completar el proceso.",
      "Si necesita prueba de que ya es ciudadano de Estados Unidos, le ayudaremos a reunir la evidencia para las autoridades de inmigración.",
    ],
  },
  {
    id: "appeals",
    title: "Apelaciones y litigio federal",
    summary:
      "Apelaciones administrativas, mociones para reabrir, petitions for review, acciones de naturalización, demandas por demora y peticiones de libertad.",
    body: [
      "Incluso las solicitudes bien presentadas a veces se niegan. Muchas decisiones de jueces de inmigración y algunas decisiones fuera de tribunal pueden apelarse dentro de las agencias. Hayamos o no llevado el caso original, le asesoraremos sobre apelar o reabrir y presentaremos argumentos bien fundamentados.",
      "También representamos a no ciudadanos en cortes federales: petitions for review de decisiones de la Board of Immigration Appeals, acciones de naturalización, demandas por incumplimiento o demora irrazonable, y peticiones de libertad de detención migratoria.",
      "Ir a corte federal no siempre es el siguiente paso correcto. Hablaremos de las fortalezas y los riesgos antes de recomendarlo. Si decide proceder, lo acompañaremos con una defensa respaldada por investigación exhaustiva.",
    ],
  },
  {
    id: "crimmigration",
    title: "Defensa penal en Colorado y crimmigration",
    summary:
      "Representación penal caso por caso en Colorado, alivio postcondenatorio y asesoría nacional a abogados defensores.",
    body: [
      "Si resulta acusado de un delito, lo mejor es buscar representación legal. Para quienes no son ciudadanos, la necesidad es aún más urgente. Condenas que parecen menores —incluso sin cárcel— pueden llevar al arresto y a meses de detención migratoria. Algunas condenas activan deportación acelerada sin ver a un juez de inmigración. En casos menos graves, la condena puede impedir obtener estatus legal.",
      "El crimmigration es la intersección entre el derecho penal y el de inmigración. Ofrecemos representación directa, según las circunstancias de cada caso, a no ciudadanos que enfrentan procesos penales en Colorado. Si alguien se declaró culpable porque su abogado original no le advirtió correctamente las consecuencias migratorias, podemos buscar alivio postcondenatorio en Colorado para retirar esa declaración.",
      "Las personas a quienes no representemos directamente, o cuyos casos penales estén fuera de Colorado, pueden contar con que asesoremos a sus defensores sobre cómo evitar consecuencias migratorias.",
    ],
  },
  {
    id: "sijs",
    title: "Servicios para menores no ciudadanos",
    summary:
      "Órdenes en cortes estatales de Colorado y trámites migratorios para Special Immigrant Juvenile Status (SIJS).",
    body: [
      "Algunos menores de 21 años pueden obtener residencia permanente mediante el Estatus de Inmigrante Juvenil Especial (SIJS). El primer paso es una orden de una corte estatal que cumpla requisitos legales específicos.",
      "En Colorado, podemos guiar a menores elegibles y a sus familias en esos procedimientos estatales y luego ante las autoridades de inmigración.",
      "No podemos prestar servicios en cortes estatales fuera de Colorado, pero sí podemos asesorar a abogados en otros estados sobre los requisitos de esas órdenes bajo las leyes de inmigración.",
    ],
  },
];
