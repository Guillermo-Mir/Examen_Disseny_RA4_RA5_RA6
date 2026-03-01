# Resumen Extenso para el Examen: Frontend y Web

## 1. Usabilidad Web (AEA6 - 1. Usabilitat web.pdf)

* **¿Qué es la usabilidad web?**: Se refiere a la medida en que un usuario puede interactuar con un sitio web de manera efectiva, eficiente y satisfactoria para lograr sus objetivos[cite: 85].
    * **Eficacia**: Determina si los usuarios pueden completar las tareas deseadas[cite: 87].
    * **Eficiencia**: Evalúa la cantidad de recursos (tiempo y esfuerzo) necesarios para realizarlas[cite: 87].
    * **Satisfacción**: Mide si la experiencia del usuario ha sido agradable[cite: 87].
* **Diferencia entre UI y UX**:
    * **UI (Interfaz de Usuario)**: Es la parte visible con la que el usuario interactúa, es decir, "cómo se ve"[cite: 93]. Se centra en la apariencia visual, colores, tipografías, botones, iconos y la disposición o layout[cite: 9, 93].
    * **UX (Experiencia de Usuario)**: Es la sensación global y la facilidad de uso del sistema, o sea, "cómo se siente"[cite: 93]. Abarca entender las necesidades y emociones del usuario, el flujo de navegación y la satisfacción emocional[cite: 8, 93].
* **Alineación de Objetivos**: La usabilidad empieza conectando el objetivo del negocio con el objetivo del usuario[cite: 12]. Si le ponemos las cosas fáciles al usuario para conseguir su meta, como consecuencia natural se cumplirá el objetivo del negocio[cite: 13].
* **Tipos de Usuario**: Es un error grave diseñar pensando en desarrolladores, ya que el usuario final suele no entender la tecnología igual que nosotros[cite: 14, 15]. Deben clasificarse según su experiencia (novato, intermedio, experto), su grado de accesibilidad y sus capacidades técnicas[cite: 17, 18].
* **Barreras de Usabilidad** (Razones de abandono):
    * **Velocidad de conexión**: Tiempos de carga de más de 3 segundos disparan la tasa de abandono al 40%[cite: 19].
    * **Carga Cognitiva**: Exceso de información, menús complejos o terminología muy técnica[cite: 20].
    * **Manca de Accesibilidad**: Poco contraste, fuentes ilegibles o incompatibilidad con lectores de pantalla[cite: 21].
    * **Diseño no responsivo**: Mala experiencia al navegar en dispositivos móviles[cite: 22].
* **Heurísticas de Nielsen**: Son 10 reglas prácticas para evaluar y mejorar la usabilidad[cite: 23, 24]. Algunas de las más destacadas son:
    * **Visibilidad del estado del sistema**: El usuario debe recibir feedback tras realizar una acción en un tiempo razonable (ej. animaciones de carga)[cite: 27, 28].
    * **Coincidencia con el mundo real**: Hablar el mismo idioma que el usuario y usar iconos reconocibles (ej. usar una lupa para el buscador)[cite: 29, 30, 31].
    * **Control y libertad**: Permitir deshacer acciones tomadas por error (ej. cancelar el envío de un correo)[cite: 34, 35].
    * **Consistencia y estándares**: No alterar elementos que el usuario ya conoce de otros sitios (ej. el carrito de la compra siempre arriba a la derecha)[cite: 36, 37].
    * **Prevención de errores**: Diseñar para evitar equivocaciones, como usar contraseñas seguras o formularios bien limitados[cite: 41, 42, 43].
    * **Reconocer antes que recordar**: Sugerir opciones o autocompletar campos en lugar de forzar a memorizar[cite: 44, 45].
    * **Ayuda en errores**: Ofrecer guías y diagnósticos claros (ej. un chat o FAQ) en vez de manuales extensos[cite: 49, 50].
* **Herramientas de Verificación**:
    * **Google Lighthouse**: Integrado en Chrome DevTools, simula una visita móvil en 4G lento para auditar el sitio[cite: 51, 52].
    * **PageSpeed Insights**: Analiza una URL usando datos reales de usuarios de Chrome[cite: 53, 54, 55].
    * **Mapes de Calor (Hotjar)**: Usa mapas de clics (dónde clica la gente) y mapas de scroll (hasta dónde bajan en la página) para monitorizar el comportamiento[cite: 56, 58, 60].

---

## 2. Diseño Responsive (AEA6 - 2. Disseny responsive.pdf)

* **Importancia del Diseño Responsive**:
    * **Hábitos de consumo**: Más del 60% del tráfico mundial viene de móviles[cite: 382].
    * **SEO**: Google utiliza el *Mobile-First Indexing* (mira primero la versión móvil); si tu web no es responsiva, te penaliza en los resultados[cite: 384, 385].
    * **Experiencia de Usuario (UX)**: Evita que el usuario deba hacer zoom o desplazarse horizontalmente[cite: 386].
    * **Eficiencia**: Permite mantener un único código para todos los dispositivos, ahorrando tiempo y dinero[cite: 388, 389].
* **Responsive (RWD) vs Adaptative (AWD)**:
    * **Responsive**: Es un diseño fluido que se adapta milímetro a milímetro usando porcentajes y *Media Queries*[cite: 393, 394]. Es el estándar actual[cite: 397].
    * **Adaptative**: Utiliza plantillas fijas y estáticas que dan "saltos" y se cargan solo en medidas concretas de pantalla (ej. 320px, 768px)[cite: 399, 400].
* **Estrategias de Diseño**:
    * **Mobile First**: Se diseña primero para pantallas pequeñas y se añade código para las grandes usando `min-width`[cite: 284, 285]. Es la tendencia recomendada porque prioriza lo esencial y el código es más rápido y ligero[cite: 286].
    * **Desktop First**: Diseñar la web completa para PC e intentar encogerla para móviles con `max-width`[cite: 287, 288]. Resulta en webs lentas con recursos innecesarios en móvil[cite: 289].
* **Tecnologías y Maquetación**:
    * **Media Queries**: Son los "condicionales" de CSS (como un `if` en programación) que aplican estilos en ciertos puntos de ruptura (*breakpoints*) como 576px, 768px o 992px[cite: 291, 294, 295].
    * **Frameworks CSS**: Aceleran el diseño. *Bootstrap* ofrece componentes prefabricados (botones, menús)[cite: 296]. *Tailwind CSS* usa clases de utilidad (`text-center`, `p-4`) para hacer diseños muy personalizados desde el HTML[cite: 298, 299].
    * **Sistemas de Maquetación**: *Flexbox* es ideal para ordenar elementos en una sola dimensión (alinear un menú)[cite: 300, 301]. *CSS Grid* se usa para crear esqueletos o estructuras en dos dimensiones (filas y columnas)[cite: 302, 303].
* **Compatibilidad Cross-Browser**:
    * Los navegadores interpretan el código con diferentes motores, como Blink (Chrome, Edge), WebKit (Safari) y Gecko (Firefox)[cite: 309, 310, 311].
    * **Vendor Prefixes**: Etiquetas como `-webkit-` o `-moz-` que permiten usar propiedades modernas de CSS[cite: 314, 315].
    * **Automatización**: No se deben escribir los prefijos a mano; se utiliza **Autoprefixer**, que lee la base de datos de **Can I Use** (`caniuse.com`) para añadirlos automáticamente[cite: 320, 321, 322, 325].
* **Preprocesadores CSS**: Programas que permiten escribir código más complejo y lo traducen a CSS normal[cite: 328, 329]. El lenguaje **SCSS** (que usa llaves `{}`) es la opción más recomendada hoy en día frente a **Sass** (que usa indentación)[cite: 333, 334].

---

## 3. Introducción al SEO (AEA5 - 2. Introducció al SEO.pdf)

* **¿Qué es el SEO?**: Es el conjunto de acciones realizadas para que una página aparezca de manera natural en los primeros puestos de Google al realizar búsquedas[cite: 561].
* **Conceptos clave**:
    * **SERP (Search Engine Results Page)**: Es la página o lista de resultados que aparece justo después de buscar en Google[cite: 564, 565].
    * **Resultados Orgánicos**: Son las posiciones "naturales" que Google otorga por la calidad de la web, sin tener que pagar[cite: 565, 566].
* **Cómo funciona Google**: Los buscadores envían robots (bots o spiders) que son ciegos y solo leen el código HTML[cite: 562]. Si el código de la web está sucio, mal estructurado o no sigue buenas prácticas, el robot no podrá entenderla ni posicionarla correctamente[cite: 562, 563].

---

## 4. Diseño de Webs Accesibles (AEA5 - 1. Disseny de webs accessibles.pdf)

* **Concepto de Accesibilidad**: Consiste en diseñar y desarrollar herramientas web que puedan ser utilizadas, percibidas y comprendidas por personas con discapacidades (visuales, auditivas, físicas, cognitivas, etc.)[cite: 843, 845, 846].
* **Limitaciones Situacionales**: La accesibilidad también incluye a personas sin discapacidades permanentes: ancianos, usuarios con conexiones lentas, o personas con una "discapacidad temporal" (como tener un brazo roto o usar el móvil bajo mucha luz solar)[cite: 851, 852, 853, 854, 855, 856].
* **Organismos y Estándares**:
    * **W3C (World Wide Web Consortium)**: Comunidad internacional creada por Tim Berners-Lee en 1994 que desarrolla los estándares para la web[cite: 861, 862].
    * **WAI**: Es un grupo dentro del W3C dedicado exclusivamente a desarrollar pautas de accesibilidad[cite: 774, 775].
    * **WCAG (Web Content Accessibility Guidelines)**: Son las pautas y el estándar técnico mundial de accesibilidad web, base para las leyes europeas y españolas[cite: 780, 781, 782].
* **Principios POUR** (Las 4 categorías de accesibilidad):
    * **Perceptible**: La información debe poder mostrarse para que cualquier sentido la capte (ej. texto alternativo en imágenes)[cite: 784, 785].
    * **Operable**: La navegación debe permitir interacción (ej. poder usar la web solo con el teclado)[cite: 786, 787].
    * **Understandable (Comprensible)**: El funcionamiento y el idioma deben ser claros[cite: 787, 788].
    * **Robust (Robusto)**: El código debe ser HTML válido para ser interpretado correctamente por cualquier navegador o lector de pantalla[cite: 788, 789].
* **Niveles de Conformidad**:
    * **Nivel A**: Los requisitos mínimos e imprescindibles[cite: 791, 792].
    * **Nivel AA**: El estándar exigido por las administraciones y leyes. Es el objetivo habitual para todo proyecto profesional[cite: 793, 794].
    * **Nivel AAA**: La excelencia, reservada para sitios muy específicos por su alta dificultad[cite: 795, 796].
* **Versiones WCAG**: La versión más extendida como estándar legal es la **2.1**[cite: 797]. La más actual es la **2.2** (2023)[cite: 799]. Se recomienda crear nuevos proyectos cumpliendo mínimo con la 2.1 AA e intentando llegar a la 2.2[cite: 801].
