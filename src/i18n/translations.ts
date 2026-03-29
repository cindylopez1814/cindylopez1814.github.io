export type Lang = 'es' | 'pt' | 'en'

export const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Navbar
    'logo-tip': 'Cindy Arlette López Oportus',
    'nav-about': 'About',
    'nav-work': 'Work',
    'nav-contact': 'Contacto',
    avail: 'Disponible para nuevos desafíos',
    'li-sub': 'Ver perfil completo →',
    'cv-label': 'Descargar CV',
    // Hero
    'hero-eyebrow': 'Product Designer · Remote 🌿',
    'hero-title-1': 'Transformo problemas',
    'hero-title-2': 'complejos en productos',
    'hero-title-3': 'claros y escalables.',
    'hero-sub':
      'Con raíces en <strong>desarrollo frontend</strong>, diseño de punta a punta entendiendo el código, el usuario y el negocio. Menos fricción, mejores productos.',
    years: 'años',
    // Strip
    'strip-label': 'Skills & herramientas',
    // About
    'about-label': 'Sobre mí',
    'about-t1': 'Product Designer',
    'about-t2': 'con base en código.',
    'about-t3': 'Diseño soluciones que funcionan.',
    'about-p1':
      'Comencé mi carrera en frontend trabajando en productos reales, lo que me dio una <strong>base técnica sólida</strong> y una comprensión de cómo se construyen las interfaces.</strong>',
    'about-p2':
      'Hoy soy Product Designer y trabajo end-to-end, desde entender el problema hasta diseñar soluciones junto a negocio y desarrollo. Me especializo en <strong>simplificar escenarios complejos</strong>, especialmente en productos con múltiples reglas y usuarios no expertos.',
    'about-p3':
      'Diseño con foco en <strong>claridad, consistencia</strong> y soluciones que realmente funcionan.',
    'skills-label': 'Skills',
    // Projects
    'work-label': 'Proyectos seleccionados',
    'p1-title': 'Lirmi Familia',
    'p1-desc':
      'Rediseño de plataforma educativa. Investigación con usuarios, definición de problemas y mejora de flujos clave para aumentar adopción y claridad.',
    'p2-title': 'Cartola de Inversión',
    'p2-desc':
      'Rediseño de cartola financiera compleja. Simplificación de información, jerarquía visual y validación con usuarios para mejorar comprensión.',
    'p3-title': 'Isla Nativa Travel',
    'p3-desc':
      'Diseño de e-commerce desde cero. Definición de estructura, sistema visual y flujos, integrando IA en exploración, contenido y desarrollo.',
    'proj-view': 'Ver caso →',
    'proj-wip': 'En curso',
    // Clients
    'clients-label': 'Con quienes he trabajado',
    // Expertise
    'expertise-label': 'Cómo trabajo',
    'exp-t1': 'No solo diseño pantallas.',
    'exp-t2': 'Diseño sistemas ',
    'exp-t3': 'que funcionan.',
    'exp-sub':
      'Tres disciplinas, un proceso. Cada proyecto integra investigación, diseño y código.',
    'exp-ux-title': 'Primero entiendo, luego diseño',
    'exp-ux-title-em': 'Primero entiendo,',
    'exp-ux-title-rest': 'luego diseño',
    'exp-ux-body':
      'Todo parte por entender qué problema estamos resolviendo. Trabajo con research y análisis para identificar lo importante y evitar diseñar soluciones que no responden a nada real.',
    'exp-ux-s1': 'Definición del problema',
    'exp-ux-s2': 'Research con usuarios',
    'exp-ux-s3': 'Síntesis e insights',
    'exp-ux-s4': 'Validación temprana',
    'exp-ui-title': 'Interfaces que inspiran confianza',
    'exp-ui-title-em': 'Interfaces',
    'exp-ui-title-rest': 'que inspiran confianza',
    'exp-ui-body':
      'Diseño interfaces pensadas para usarse, no solo para verse bien. Cuido estados, jerarquía y detalles que hacen que el producto se entienda rápido y funcione sin fricción.',
    'exp-ui-s1': 'Sistema de componentes',
    'exp-ui-s2': 'Flujos e interacción',
    'exp-ui-s3': 'Estados y microcopy',
    'exp-ui-s4': 'Prototipo validable',
    'exp-dev-title': 'Diseño pensando en cómo se construye',
    'exp-dev-title-em': 'Diseño',
    'exp-dev-title-rest': 'pensando en cómo se construye',
    'exp-dev-body':
      'Mi background en frontend me permite diseñar soluciones viables desde el inicio. Entrego especificaciones claras y trabajo junto a desarrollo para que el diseño se implemente como fue pensado.',
    'exp-dev-s1': 'Handoff claro y sin ambigüedad',
    'exp-dev-s2': 'Uso de Dev Mode',
    'exp-dev-s3': 'Componentes reutilizables',
    'exp-dev-s4': 'Apoyo en implementación',
    // Footer
    'footer-t1': '¿Tienes un proyecto',
    'footer-t2': 'que ',
    'footer-t3': 'merece buen diseño',
    'footer-cta': '¿Tienes un proyecto? Hablemos.',
    'footer-sub': 'Disponible para proyectos remotos. Hablemos.',
    'footer-sig': 'Diseñado con intención. Construido con cuidado.',
    'nav-label': 'Navegación',
    'contact-label': 'Contacto',
    'btn-view-work': 'Ver proyectos →',
    'btn-email': 'Escribir un email',
    'btn-linkedin': 'LinkedIn',
    // Lirmi case study
    'lirmi-back': 'Volver',
    'lirmi-case-num': 'Caso 01',
    'lirmi-subtitle': 'Conectando a las familias con la educación',
    'lirmi-brief':
      'Rediseño de la experiencia de una app móvil de gestión escolar para aumentar la adopción entre apoderados, reducir la brecha digital y habilitar la comunicación bidireccional con el colegio.',
    'lirmi-meta-role': 'Rol',
    'lirmi-meta-year': 'Año',
    'lirmi-meta-platform': 'Plataforma',
    'lirmi-meta-tools': 'Herramientas',
    'lirmi-hero-title': 'El desafío de adopción',
    'lirmi-stat-schools': 'Colegios en Chile',
    'lirmi-stat-users': 'Usuarios registrados',
    'lirmi-stat-rank': 'Plataforma escolar en Chile',
    'lirmi-sec-1': 'Contexto',
    'lirmi-sec-2': 'Problema',
    'lirmi-sec-3': 'Research',
    'lirmi-sec-4': 'Hipótesis',
    'lirmi-sec-5': 'Usuario objetivo',
    'lirmi-sec-6': 'Hallazgos',
    'lirmi-sec-7': 'Artefactos UX',
    'lirmi-sec-8': 'Aprendizajes',
    'lirmi-ctx-t1': 'El producto',
    'lirmi-ctx-p1a':
      '<strong>Lirmi</strong> es una plataforma de gestión escolar para profesores, estudiantes y apoderados. Permite acceder a servicios como biblioteca educativa, planificaciones, evaluaciones, rúbricas, curriculum, convivencia escolar, emisión de certificados y contacto con apoderados.',
    'lirmi-ctx-p1b':
      '<strong>Lirmi Familia</strong> es la aplicación móvil de comunicación instantánea entre el colegio y los apoderados, lanzada al mercado en 2020.',
    'lirmi-ctx-t2': 'El desafío inicial',
    'lirmi-ctx-p2a':
      'A pesar de su exitoso despliegue en establecimientos públicos y privados, la adopción de Lirmi Familia era baja. Los apoderados seguían recurriendo a métodos tradicionales para resolver tareas que la app debería cubrir.',
    'lirmi-ctx-p2b':
      'El equipo necesitaba entender <strong>por qué los usuarios no usaban la app</strong> y qué cambios de diseño aumentarían su adopción real.',
    'lirmi-problem-quote':
      'Los apoderados no utilizan Lirmi Familia con frecuencia y recurren al papel a pesar de tener acceso a herramientas digitales.',
    'lirmi-problem-intro': 'Tres factores críticos se identificaron como causas del problema:',
    'lirmi-factor-1-title': 'Brecha digital',
    'lirmi-factor-1-body':
      'Apoderados mayores no se familiarizan con las funcionalidades. No comprenden el producto ni las posibilidades que ofrece.',
    'lirmi-factor-2-title': 'Comunicación unidireccional',
    'lirmi-factor-2-body':
      'Los usuarios reciben información pero no pueden responder ni contactar directamente a profesores o autoridades. Esto genera frustración activa.',
    'lirmi-factor-3-title': 'Subutilización del producto',
    'lirmi-factor-3-body':
      'La adopción lenta resulta en una herramienta infrautilizada, afectando el retorno de inversión del colegio y la comunicación con las familias.',
    'lirmi-research-t': 'Metodología de',
    'lirmi-research-em': 'investigación',
    'lirmi-research-intro':
      'Combinar métodos cualitativos y cuantitativos permitió entender tanto las motivaciones profundas como el alcance de los problemas identificados.',
    'lirmi-tech-0-title': 'Entrevistas',
    'lirmi-tech-0-desc':
      'Sesiones 1:1 con apoderados para explorar motivaciones, barreras y contexto de uso.',
    'lirmi-tech-1-title': 'Journey Map',
    'lirmi-tech-1-desc':
      'Mapeo del recorrido emocional del usuario desde notificación hasta resolución de tarea.',
    'lirmi-tech-2-title': 'Prueba de usabilidad',
    'lirmi-tech-2-desc':
      'Testing moderado con tareas reales sobre la app actual para identificar fricciones clave.',
    'lirmi-tech-3-title': 'Encuestas',
    'lirmi-tech-3-desc':
      'Cuestionario cuantitativo para validar hipótesis y dimensionar problemas encontrados.',
    'lirmi-hyp-eyebrow1': 'Hipótesis de investigación',
    'lirmi-hyp-quote':
      'Lirmi Familia no satisface todas las necesidades de los apoderados, por lo que dejan de usarla y recurren a métodos tradicionales para llevar a cabo ciertas tareas.',
    'lirmi-hyp-eyebrow2': 'Preguntas de investigación',
    'lirmi-q1':
      '¿Cuáles son las principales necesidades y expectativas que los usuarios tienen de una aplicación de gestión escolar?',
    'lirmi-q2':
      '¿Cómo afecta el nivel de experiencia digital de los apoderados en su adopción y uso de Lirmi Familia?',
    'lirmi-user-t': 'Padres y tutores',
    'lirmi-user-em': 'comprometidos con la educación',
    'lirmi-user-p1':
      'El público objetivo son padres y tutores de entre <strong>18 y 50 años</strong> cuyos hijos asisten a establecimientos educacionales que utilizan Lirmi en Santiago de Chile.',
    'lirmi-user-p2':
      'Personas comprometidas con la educación y el bienestar de sus hijos, que pueden enfrentar desafíos al adoptar y utilizar aplicaciones digitales.',
    'lirmi-attr-1-title': 'Nivel digital variable',
    'lirmi-attr-1-body': 'Desde nativos digitales hasta usuarios con poca experiencia en apps',
    'lirmi-attr-2-title': 'Contexto educacional activo',
    'lirmi-attr-2-body': 'Con hijos en colegios que ya usan la plataforma Lirmi',
    'lirmi-attr-3-title': 'Tiempo limitado',
    'lirmi-attr-3-body': 'Necesitan resolver tareas rápido, sin curvas de aprendizaje',
    'lirmi-attr-4-title': 'Alta motivación',
    'lirmi-attr-4-body': 'Quieren participar activamente en la educación de sus hijos',
    'lirmi-findings-t': 'Lo que el research',
    'lirmi-findings-em': 'reveló',
    'lirmi-ins-0-title': 'Brecha digital como barrera de adopción',
    'lirmi-ins-0-body':
      'Apoderados mayores de 40 años reportaron no entender las funcionalidades del producto. La familiaridad con apps digitales influye directamente en la frecuencia de uso.',
    'lirmi-ins-1-title': 'Comunicación unidireccional frustra al usuario',
    'lirmi-ins-1-body':
      'Los apoderados reciben información pero no pueden responder ni iniciar conversaciones. Esta limitación genera frustración y abandono de la app en favor del papel.',
    'lirmi-ins-2-title': 'El papel sigue siendo el canal de confianza',
    'lirmi-ins-2-body':
      'Tareas como autorizaciones, permisos y consultas se siguen haciendo presencialmente. La herramienta digital no está cubriendo estas necesidades críticas.',
    'lirmi-ins-3-title': 'Bajo conocimiento del producto disponible',
    'lirmi-ins-3-body':
      'Usuarios desconocían funciones clave de la app. La falta de onboarding y descubribilidad contribuye directamente a la subutilización de la plataforma.',
    'lirmi-artifacts-t': 'Herramientas que',
    'lirmi-artifacts-em': 'guiaron el diseño',
    'lirmi-artifacts-intro':
      'Los artefactos de investigación sintetizaron los hallazgos y sirvieron como base para definir los criterios de rediseño.',
    'lirmi-artifact-1-tag': 'User Persona',
    'lirmi-artifact-1-desc':
      'Representación del usuario primario con sus motivaciones, frustraciones y comportamientos digitales.',
    'lirmi-artifact-2-tag': 'Mapa de Empatía',
    'lirmi-artifact-2-desc':
      'Qué piensa, siente, dice y hace el apoderado al interactuar con la aplicación.',
    'lirmi-artifact-3-tag': 'Journey Map',
    'lirmi-artifact-3-desc':
      'Recorrido emocional del usuario desde la notificación recibida hasta completar (o abandonar) una tarea en la app.',
    'lirmi-learnings-t': 'Lo que me llevé',
    'lirmi-learnings-em': 'de este proyecto',
    'lirmi-learn-0-title': 'La adopción es un problema de comportamiento, no solo de UI',
    'lirmi-learn-0-body':
      'Mejorar la interfaz no basta. Las barreras de adopción en usuarios con baja alfabetización digital requieren estrategias de onboarding, educación y acompañamiento.',
    'lirmi-learn-1-title': 'La comunicación bidireccional es innegociable',
    'lirmi-learn-1-body':
      'Para que un producto de gestión escolar sea adoptado, los usuarios necesitan sentir que tienen agencia. La capacidad de responder e iniciar contacto es un diferenciador crítico.',
    'lirmi-learn-2-title': 'El research temprano evita diseñar soluciones incorrectas',
    'lirmi-learn-2-body':
      'Sin entrevistas y pruebas de usabilidad, el equipo habría iterado sobre UI sin atacar el problema real. Validar la hipótesis antes de diseñar ahorró tiempo y recursos significativos.',
    'lirmi-next-label': 'Siguiente proyecto',
    'lirmi-next-title1': 'Cartola de',
    'lirmi-next-title2': 'Inversión',
    'lirmi-next-sub': 'Rediseño de cartola financiera compleja. Fintech · End-to-end',
    'lirmi-next-soon': 'Próximamente',
    'lirmi-btn-view': 'Ver caso →',
    'lirmi-btn-back': '← Volver al portfolio',
    // ── Cartola de Inversión ──────────────────────
    'cartola-back': 'Volver',
    'cartola-case-num': 'Caso 02',
    'cartola-subtitle': 'Rediseño de cartola financiera compleja',
    'cartola-brief':
      'Simplificación de información, jerarquía visual y validación con usuarios para mejorar la comprensión y la confianza en el producto.',
    'cartola-meta-role': 'Rol',
    'cartola-meta-year': 'Año',
    'cartola-meta-platform': 'Soporte',
    'cartola-meta-tools': 'Herramientas',
    'cartola-badge-before': 'Antes',
    'cartola-badge-after': 'Después',
    'cartola-hero-title': 'De la confusión a la claridad financiera',
    'cartola-stat-interviews': 'Entrevistas en profundidad',
    'cartola-stat-surveys': 'Encuestas de preferencia',
    'cartola-stat-users': 'Usuarios en test de tareas',
    'cartola-stat-pref': 'Prefirió la nueva versión',
    'cartola-sec-1': 'Contexto',
    'cartola-ctx-t1': 'El producto',
    'cartola-ctx-p1a':
      'La <strong>Cartola de Inversión</strong> es el documento principal que los clientes de Banchile usan para entender su patrimonio, rentabilidad y composición de inversiones.',
    'cartola-ctx-p1b':
      'Es uno de los puntos de contacto más críticos con el cliente, distribuido mensualmente en versión física y digital.',
    'cartola-ctx-t2': 'El desafío',
    'cartola-ctx-p2a':
      'La cartola acumulaba años de información sin revisión estructural. La versión existente no distinguía entre datos primarios y secundarios.',
    'cartola-ctx-p2b':
      'El equipo comercial reportaba que clientes llamaban frecuentemente con preguntas básicas sobre su cartera, señal de que el documento <strong>no cumplía su función</strong>.',
    'cartola-sec-2': 'Problema',
    'cartola-problem-quote': '"No sé si estoy ganando o perdiendo plata."',
    'cartola-problem-intro':
      'A pesar de contener toda la información necesaria, los usuarios fallaban sistemáticamente en tareas básicas de lectura de cartera.',
    'cartola-factor-1-title': 'Sobrecarga de información',
    'cartola-factor-1-body':
      'Sin jerarquía clara, los usuarios no sabían dónde mirar primero. Todo competía por la misma atención visual.',
    'cartola-factor-2-title': 'Métricas clave enterradas',
    'cartola-factor-2-body':
      'Ganancia/pérdida y patrimonio total, los datos más buscados, no tenían protagonismo visual.',
    'cartola-factor-3-title': 'Inconsistencia física/digital',
    'cartola-factor-3-body':
      'Diferente diseño entre versión impresa y digital generaba confusión y desconfianza en la información.',
    'cartola-sec-3': 'Research',
    'cartola-research-t': 'Investigación',
    'cartola-research-em': 'mixta y centrada en tareas',
    'cartola-research-intro':
      'Combiné entrevistas para entender contexto y emociones, con tests de tareas medibles para detectar exactamente dónde fallaba la lectura.',
    'cartola-tech-0-title': 'Entrevistas',
    'cartola-tech-0-desc':
      'Comprensión del modelo mental del inversionista y sus frustraciones con el documento actual.',
    'cartola-tech-1-title': 'Encuestas',
    'cartola-tech-1-desc':
      'Test de preferencia visual entre versiones del diseño para validar jerarquía y claridad percibida.',
    'cartola-tech-2-title': 'Test de tareas',
    'cartola-tech-2-desc':
      'Medición de tiempo y tasa de éxito en 5 tareas clave a través de 3 versiones del diseño.',
    'cartola-tech-3-title': 'Test A/B',
    'cartola-tech-3-desc':
      'Comparación directa entre cartola actual vs propuesta con usuarios reales de Banchile.',
    'cartola-sec-4': 'Hipótesis',
    'cartola-hyp-eyebrow1': 'Hipótesis de diseño',
    'cartola-hyp-quote':
      'Si priorizamos patrimonio total, ganancia/pérdida y composición como foco principal, los usuarios identificarán su situación financiera más rápido y con mayor confianza.',
    'cartola-hyp-eyebrow2': 'Preguntas guía',
    'cartola-q1': '¿Qué información busca primero un inversionista al abrir su cartola?',
    'cartola-q2':
      '¿Qué nivel de detalle necesita un usuario no experto para tomar decisiones financieras?',
    'cartola-sec-5': 'Hallazgos',
    'cartola-findings-t': 'Lo que el research',
    'cartola-findings-em': 'reveló',
    'cartola-ins-0-title': 'Jerarquía rota',
    'cartola-ins-0-body':
      'Exceso de información sin orden visual claro. Los usuarios escaneaban sin saber por dónde empezar.',
    'cartola-ins-1-title': 'Métricas invisibles',
    'cartola-ins-1-body':
      'Ganancia/pérdida y patrimonio, los datos más buscados, estaban enterrados entre información secundaria.',
    'cartola-ins-2-title': 'Gráficos confusos',
    'cartola-ins-2-body':
      'Representaciones visuales difíciles de interpretar para usuarios sin perfil financiero experto.',
    'cartola-ins-3-title': 'Doble versión, doble confusión',
    'cartola-ins-3-body':
      'La inconsistencia entre cartola física y digital generaba desconfianza y preguntas sobre la información.',
    'cartola-sec-6': 'Proceso de diseño',
    'cartola-process-t': 'De hipótesis',
    'cartola-process-em': 'a solución validada',
    'cartola-process-intro':
      'Iteré 4 versiones del diseño, cada una informada por los hallazgos del test anterior. El objetivo: encontrar el balance entre completitud y claridad.',
    'cartola-v0-label': 'Primera propuesta',
    'cartola-v0-desc': 'Primera iteración de diseño. Reestructuración de bloques semánticos y jerarquía visual inicial.',
    'cartola-v1-label': 'Segunda propuesta',
    'cartola-v1-desc': 'Refinamiento de bloques semánticos. Mejora del 50% en tarea 1.',
    'cartola-v2-label': 'Refinamiento',
    'cartola-v2-desc': 'Énfasis en métricas principales. Reducción de 40% en tiempo promedio.',
    'cartola-v3-label': 'Resultado final',
    'cartola-v3-desc': 'Jerarquía semántica completa. 75% de usuarios la prefirió en test final.',
    'cartola-sec-7': 'Validación de Diseño',
    'cartola-test-t': 'Mapas de calor',
    'cartola-test-em': 'del proceso iterativo',
    'cartola-test-intro':
      'Cada versión fue sometida a tests de usabilidad con usuarios reales. Los mapas de calor revelan cómo evolucionó el comportamiento visual: de clicks dispersos en V.0 a foco total en las métricas clave en V.2.',
    'cartola-test-t1-label': 'Tarea 1',
    'cartola-test-t1-obj': 'Identifica tu monto de inversión',
    'cartola-test-t1-summary':
      'En V.0, los clicks estaban dispersos por toda la pantalla. En V.1 y V.2, el 100% de usuarios fue directamente al bloque de patrimonio total.',
    'cartola-test-t1-v0-note': 'Clicks dispersos. Sin punto focal claro. Tasa de error alta.',
    'cartola-test-t1-v1-note': 'Mejora significativa. Concentración en la sección de patrimonio.',
    'cartola-test-t1-v2-note': 'Focus total en métricas clave. Tiempo promedio reducido 40%.',
    'cartola-test-t3-label': 'Tarea 3',
    'cartola-test-t3-obj': 'Identifica cuánto estás rentando',
    'cartola-test-t3-summary':
      'La tarea de rentabilidad pasó de ser una de las más confusas (71% éxito en V.0) a lograrse con claridad total en V.2, con tiempo promedio de 7.3 segundos.',
    'cartola-test-t3-v0-note': 'Alta dispersión. Rentabilidad enterrada entre datos secundarios.',
    'cartola-test-t3-v1-note': 'Jerarquía mejorada. Usuarios localizan la sección más rápido.',
    'cartola-test-t3-v2-note': 'Éxito total. Bloque de rentabilidad claramente identificable.',
    'cartola-sec-8': 'Resultado Final',
    'cartola-result-t': 'Diseño operativo',
    'cartola-result-em': 'en producción',
    'cartola-result-intro':
      'La solución final establece las plantillas estándar de los formatos oficiales de Banchile Inversiones: portada con métricas clave, hoja de detalle y términos y condiciones, replicados como base para el resto de los documentos corporativos.',
    'cartola-artifact-1-tag': 'Hoja Principal',
    'cartola-artifact-1-desc':
      'Patrimonio total, ganancia/pérdida y distribución como foco principal. Lenguaje simple y directo para decisiones rápidas.',
    'cartola-artifact-2-tag': 'Hoja Interna',
    'cartola-artifact-2-desc':
      'Balance detallado de inversiones con jerarquía visual clara por producto y moneda.',
    'cartola-artifact-3-tag': 'Términos y Condiciones',
    'cartola-artifact-3-desc':
      'Versión simplificada con lenguaje accesible, integrada visualmente al sistema de la cartola.',
    'cartola-sec-9': 'Aprendizajes',
    'cartola-learnings-t': 'Lo que me llevé',
    'cartola-learnings-em': 'de este proyecto',
    'cartola-outcome-pref': 'Prefirió la nueva versión',
    'cartola-outcome-time': 'Tiempo promedio vs versión original',
    'cartola-outcome-prod': 'Salida a producción en Banchile',
    'cartola-learn-0-title': 'Claridad > completitud',
    'cartola-learn-0-body':
      'En productos financieros, mostrar menos pero mejor es más valioso que mostrar todo. La jerarquía no es decoración: es funcionalidad.',
    'cartola-learn-1-title': 'Los datos guían las decisiones',
    'cartola-learn-1-body':
      'Cada iteración estuvo respaldada por métricas de test. Pasar de opinión a evidencia transformó la conversación con stakeholders.',
    'cartola-learn-2-title': 'Product Designer = conector',
    'cartola-learn-2-body':
      'Trabajar en discovery, research, UI, hand-off y salida a producción como único diseñador me permitió ver cómo cada decisión afecta todo el sistema.',
    'cartola-next-label': 'Siguiente caso',
    'cartola-next-title1': '¿Quieres ver otro',
    'cartola-next-title2': 'caso de estudio?',
    'cartola-next-sub': 'Explora el caso Lirmi Familia o hablemos de tu próximo desafío.',
    'cartola-btn-back': '← Volver al portfolio',
    'cartola-btn-next': 'Ver caso Lirmi →',
  },
  pt: {
    'logo-tip': 'Cindy Arlette López Oportus',
    'nav-about': 'Sobre',
    'nav-work': 'Trabalho',
    'nav-contact': 'Contato',
    avail: 'Disponível para novos desafios',
    'li-sub': 'Ver perfil completo →',
    'cv-label': 'Baixar CV',
    'hero-eyebrow': 'Product Designer · Remoto · Brasil 🌿',
    'hero-title-1': 'Transformo problemas',
    'hero-title-2': 'complexos em produtos',
    'hero-title-3': 'claros e escaláveis.',
    'hero-sub':
      'Com raízes em <strong>desenvolvimento frontend</strong>, design de ponta a ponta entendendo o código, o usuário e o negócio. Menos fricção, melhores produtos.',
    years: 'anos',
    'strip-label': 'Skills & ferramentas',
    'about-label': 'Sobre mim',
    'about-t1': 'Product Designer',
    'about-t2': 'com base em código.',
    'about-t3': 'Projeto soluções que funcionam.',
    'about-p1':
      'Comecei minha carreira como frontend, trabalhando em produtos reais, o que me deu uma <strong>base técnica sólida</strong> e uma boa compreensão de como as interfaces são construídas.',
    'about-p2':
      'Hoje sou Product Designer e trabalho de ponta a ponta, desde entender o problema até desenhar soluções junto com negócio e desenvolvimento. Me especializo em  <strong>simplificar cenários complexos</strong>, especialmente em produtos com múltiplas regras e usuários não especialistas.',
    'about-p3':
      'Projeto com foco em <strong>clareza, consistência</strong> e soluções que realmente funcionam.',
    'work-label': 'Projetos selecionados',
    'p1-title': 'Lirmi Família',
    'p1-desc':
      'Redesign de plataforma educacional. Pesquisa com usuários, definição de problemas e melhoria de fluxos para aumentar adoção.',
    'p2-title': 'Cartola de Investimento',
    'p2-desc':
      'Redesign de cartola financeira complexa. Simplificação da informação, hierarquia visual e validação com usuários.',
    'p3-title': 'Isla Nativa Travel',
    'p3-desc':
      'Design de e-commerce do zero. Estrutura, sistema visual e fluxos, integrando IA em exploração, conteúdo e desenvolvimento.',
    'proj-view': 'Ver caso →',
    'proj-wip': 'Em andamento',
    'skills-label': 'Habilidades',
    'clients-label': 'Com quem trabalhei',
    'expertise-label': 'Como trabalho',
    'exp-t1': 'Não só projeto telas.',
    'exp-t2': 'Projeto sistemas ',
    'exp-t3': 'que funcionam.',
    'exp-sub': 'Três disciplinas, um processo. Cada projeto integra pesquisa, design e código.',
    'exp-ux-title': 'Primeiro entendo, depois projeto',
    'exp-ux-title-em': 'Primeiro entendo,',
    'exp-ux-title-rest': 'depois projeto',
    'exp-ux-body':
      'Tudo começa por entender que problema estamos resolvendo. Trabalho com research e análise para identificar o importante e evitar soluções que não respondem à nada real.',
    'exp-ux-s1': 'Definição do problema',
    'exp-ux-s2': 'Research com usuários',
    'exp-ux-s3': 'Síntese e insights',
    'exp-ux-s4': 'Validação antecipada',
    'exp-ui-title': 'Interfaces que inspiram confiança',
    'exp-ui-title-em': 'Interfaces',
    'exp-ui-title-rest': 'que inspiram confiança',
    'exp-ui-body':
      'Projeto interfaces pensadas para serem usadas, não só para parecer bonitas. Cuido de estados, hierarquia e detalhes que fazem o produto ser entendido rapidamente.',
    'exp-ui-s1': 'Sistema de componentes',
    'exp-ui-s2': 'Fluxos e interação',
    'exp-ui-s3': 'Estados e microcopy',
    'exp-ui-s4': 'Protótipo validável',
    'exp-dev-title': 'Projeto pensando em como se constrói',
    'exp-dev-title-em': 'Projeto',
    'exp-dev-title-rest': 'pensando em como se constrói',
    'exp-dev-body':
      'Meu background em frontend me permite projetar soluções viáveis desde o início. Entrego especificações claras e trabalho com desenvolvimento para que o design seja implementado como foi pensado.',
    'exp-dev-s1': 'Handoff claro e sem ambiguidade',
    'exp-dev-s2': 'Uso do Dev Mode',
    'exp-dev-s3': 'Componentes reutilizáveis',
    'exp-dev-s4': 'Apoio na implementação',
    'footer-t1': 'Tem um projeto',
    'footer-t2': 'que ',
    'footer-t3': 'merece bom design',
    'footer-cta': 'Tem um projeto? Vamos conversar.',
    'footer-sub': 'Disponível para projetos remotos. Vamos conversar.',
    'footer-sig': 'Projetado com intenção. Construído com cuidado.',
    'nav-label': 'Navegação',
    'contact-label': 'Contato',
    'btn-view-work': 'Ver projetos →',
    'btn-email': 'Enviar um email',
    'btn-linkedin': 'LinkedIn',
    // Lirmi case study
    'lirmi-back': 'Voltar',
    'lirmi-case-num': 'Caso 01',
    'lirmi-subtitle': 'Conectando famílias com a educação',
    'lirmi-brief':
      'Redesign da experiência de um app móvel de gestão escolar para aumentar a adoção entre responsáveis, reduzir a brecha digital e habilitar a comunicação bidirecional com a escola.',
    'lirmi-meta-role': 'Função',
    'lirmi-meta-year': 'Ano',
    'lirmi-meta-platform': 'Plataforma',
    'lirmi-meta-tools': 'Ferramentas',
    'lirmi-hero-title': 'O desafio de adoção',
    'lirmi-stat-schools': 'Escolas no Chile',
    'lirmi-stat-users': 'Usuários registrados',
    'lirmi-stat-rank': 'Plataforma escolar no Chile',
    'lirmi-sec-1': 'Contexto',
    'lirmi-sec-2': 'Problema',
    'lirmi-sec-3': 'Research',
    'lirmi-sec-4': 'Hipótese',
    'lirmi-sec-5': 'Usuário-alvo',
    'lirmi-sec-6': 'Descobertas',
    'lirmi-sec-7': 'Artefatos UX',
    'lirmi-sec-8': 'Aprendizados',
    'lirmi-ctx-t1': 'O produto',
    'lirmi-ctx-p1a':
      '<strong>Lirmi</strong> é uma plataforma de gestão escolar para professores, estudantes e responsáveis. Permite acessar serviços como biblioteca educacional, planejamentos, avaliações, rubricas, currículo, convivência escolar, emissão de certificados e contato com responsáveis.',
    'lirmi-ctx-p1b':
      '<strong>Lirmi Família</strong> é o aplicativo móvel de comunicação instantânea entre a escola e os responsáveis, lançado em 2020.',
    'lirmi-ctx-t2': 'O desafio inicial',
    'lirmi-ctx-p2a':
      'Apesar do seu exitoso desdobramento em estabelecimentos públicos e privados, a adoção do Lirmi Família era baixa. Os responsáveis continuavam recorrendo a métodos tradicionais para resolver tarefas que o app deveria cobrir.',
    'lirmi-ctx-p2b':
      'A equipe precisava entender <strong>por que os usuários não usavam o app</strong> e que mudanças de design aumentariam sua adoção real.',
    'lirmi-problem-quote':
      'Os responsáveis não utilizam o Lirmi Família com frequência e recorrem ao papel apesar de ter acesso a ferramentas digitais.',
    'lirmi-problem-intro': 'Três fatores críticos foram identificados como causas do problema:',
    'lirmi-factor-1-title': 'Brecha digital',
    'lirmi-factor-1-body':
      'Responsáveis mais velhos não se familiarizam com as funcionalidades. Não compreendem o produto nem as possibilidades que ele oferece.',
    'lirmi-factor-2-title': 'Comunicação unidirecional',
    'lirmi-factor-2-body':
      'Os usuários recebem informações mas não podem responder nem contatar diretamente professores ou autoridades. Isso gera frustração ativa.',
    'lirmi-factor-3-title': 'Subutilização do produto',
    'lirmi-factor-3-body':
      'A adoção lenta resulta em uma ferramenta subutilizada, afetando o retorno de investimento da escola e a comunicação com as famílias.',
    'lirmi-research-t': 'Metodologia de',
    'lirmi-research-em': 'investigação',
    'lirmi-research-intro':
      'Combinar métodos qualitativos e quantitativos permitiu entender tanto as motivações profundas quanto a extensão dos problemas identificados.',
    'lirmi-tech-0-title': 'Entrevistas',
    'lirmi-tech-0-desc':
      'Sessões 1:1 com responsáveis para explorar motivações, barreiras e contexto de uso.',
    'lirmi-tech-1-title': 'Journey Map',
    'lirmi-tech-1-desc':
      'Mapeamento da jornada emocional do usuário desde a notificação até a resolução da tarefa.',
    'lirmi-tech-2-title': 'Teste de usabilidade',
    'lirmi-tech-2-desc':
      'Testing moderado com tarefas reais sobre o app atual para identificar fricções-chave.',
    'lirmi-tech-3-title': 'Pesquisas',
    'lirmi-tech-3-desc':
      'Questionário quantitativo para validar hipóteses e dimensionar os problemas encontrados.',
    'lirmi-hyp-eyebrow1': 'Hipótese de pesquisa',
    'lirmi-hyp-quote':
      'Lirmi Família não satisfaz todas as necessidades dos responsáveis, por isso deixam de usá-lo e recorrem a métodos tradicionais para realizar certas tarefas.',
    'lirmi-hyp-eyebrow2': 'Perguntas de pesquisa',
    'lirmi-q1':
      'Quais são as principais necessidades e expectativas que os usuários têm de um aplicativo de gestão escolar?',
    'lirmi-q2':
      'Como o nível de experiência digital dos responsáveis afeta sua adoção e uso do Lirmi Família?',
    'lirmi-user-t': 'Pais e tutores',
    'lirmi-user-em': 'comprometidos com a educação',
    'lirmi-user-p1':
      'O público-alvo são pais e tutores entre <strong>18 e 50 anos</strong> cujos filhos frequentam estabelecimentos educacionais que utilizam o Lirmi em Santiago do Chile.',
    'lirmi-user-p2':
      'Pessoas comprometidas com a educação e o bem-estar de seus filhos, que podem enfrentar desafios ao adotar e utilizar aplicativos digitais.',
    'lirmi-attr-1-title': 'Nível digital variável',
    'lirmi-attr-1-body': 'De nativos digitais a usuários com pouca experiência em apps',
    'lirmi-attr-2-title': 'Contexto educacional ativo',
    'lirmi-attr-2-body': 'Com filhos em escolas que já usam a plataforma Lirmi',
    'lirmi-attr-3-title': 'Tempo limitado',
    'lirmi-attr-3-body': 'Precisam resolver tarefas rápido, sem curvas de aprendizagem',
    'lirmi-attr-4-title': 'Alta motivação',
    'lirmi-attr-4-body': 'Querem participar ativamente da educação de seus filhos',
    'lirmi-findings-t': 'O que o research',
    'lirmi-findings-em': 'revelou',
    'lirmi-ins-0-title': 'Brecha digital como barreira de adoção',
    'lirmi-ins-0-body':
      'Responsáveis com mais de 40 anos relataram não entender as funcionalidades do produto. A familiaridade com apps digitais influencia diretamente a frequência de uso.',
    'lirmi-ins-1-title': 'Comunicação unidirecional frustra o usuário',
    'lirmi-ins-1-body':
      'Os responsáveis recebem informações mas não podem responder nem iniciar conversas. Essa limitação gera frustração e abandono do app em favor do papel.',
    'lirmi-ins-2-title': 'O papel continua sendo o canal de confiança',
    'lirmi-ins-2-body':
      'Tarefas como autorizações, permissões e consultas continuam sendo feitas presencialmente. A ferramenta digital não está cobrindo essas necessidades críticas.',
    'lirmi-ins-3-title': 'Baixo conhecimento do produto disponível',
    'lirmi-ins-3-body':
      'Usuários desconheciam funções-chave do app. A falta de onboarding e descobribilidade contribui diretamente para a subutilização da plataforma.',
    'lirmi-artifacts-t': 'Ferramentas que',
    'lirmi-artifacts-em': 'guiaram o design',
    'lirmi-artifacts-intro':
      'Os artefatos de pesquisa sintetizaram as descobertas e serviram como base para definir os critérios de redesign.',
    'lirmi-artifact-1-tag': 'User Persona',
    'lirmi-artifact-1-desc':
      'Representação do usuário primário com suas motivações, frustrações e comportamentos digitais.',
    'lirmi-artifact-2-tag': 'Mapa de Empatia',
    'lirmi-artifact-2-desc':
      'O que o responsável pensa, sente, diz e faz ao interagir com o aplicativo.',
    'lirmi-artifact-3-tag': 'Journey Map',
    'lirmi-artifact-3-desc':
      'Jornada emocional do usuário desde a notificação recebida até completar (ou abandonar) uma tarefa no app.',
    'lirmi-learnings-t': 'O que aprendi',
    'lirmi-learnings-em': 'com este projeto',
    'lirmi-learn-0-title': 'A adoção é um problema de comportamento, não só de UI',
    'lirmi-learn-0-body':
      'Melhorar a interface não é suficiente. As barreiras de adoção em usuários com baixa alfabetização digital requerem estratégias de onboarding, educação e acompanhamento.',
    'lirmi-learn-1-title': 'A comunicação bidirecional é inegociável',
    'lirmi-learn-1-body':
      'Para que um produto de gestão escolar seja adotado, os usuários precisam sentir que têm agência. A capacidade de responder e iniciar contato é um diferenciador crítico.',
    'lirmi-learn-2-title': 'O research antecipado evita projetar soluções erradas',
    'lirmi-learn-2-body':
      'Sem entrevistas e testes de usabilidade, a equipe teria iterado sobre UI sem atacar o problema real. Validar a hipótese antes de projetar economizou tempo e recursos significativos.',
    'lirmi-next-label': 'Próximo projeto',
    'lirmi-next-title1': 'Cartola de',
    'lirmi-next-title2': 'Investimento',
    'lirmi-next-sub': 'Redesign de cartola financeira complexa. Fintech · End-to-end',
    'lirmi-next-soon': 'Em breve',
    'lirmi-btn-view': 'Ver caso →',
    'lirmi-btn-back': '← Voltar ao portfólio',
    // ── Cartola de Inversión ──────────────────────
    'cartola-back': 'Voltar',
    'cartola-case-num': 'Caso 02',
    'cartola-subtitle': 'Redesign de cartela de investimento complexa',
    'cartola-brief':
      'Simplificação de informações, hierarquia visual e validação com usuários para melhorar a compreensão e a confiança no produto.',
    'cartola-meta-role': 'Papel',
    'cartola-meta-year': 'Ano',
    'cartola-meta-platform': 'Suporte',
    'cartola-meta-tools': 'Ferramentas',
    'cartola-badge-before': 'Antes',
    'cartola-badge-after': 'Depois',
    'cartola-hero-title': 'Da confusão à clareza financeira',
    'cartola-stat-interviews': 'Entrevistas em profundidade',
    'cartola-stat-surveys': 'Pesquisas de preferência',
    'cartola-stat-users': 'Usuários em teste de tarefas',
    'cartola-stat-pref': 'Preferiram a nova versão',
    'cartola-sec-1': 'Contexto',
    'cartola-ctx-t1': 'O produto',
    'cartola-ctx-p1a':
      'A <strong>Cartela de Investimento</strong> é o documento principal que os clientes do Banchile usam para entender seu patrimônio, rentabilidade e composição de investimentos.',
    'cartola-ctx-p1b':
      'É um dos pontos de contato mais críticos com o cliente, distribuído mensalmente em versão física e digital.',
    'cartola-ctx-t2': 'O desafio',
    'cartola-ctx-p2a':
      'A cartela acumulava anos de informações sem revisão estrutural. A versão existente não distinguia dados primários de secundários.',
    'cartola-ctx-p2b':
      'A equipe comercial relatava que clientes ligavam frequentemente com perguntas básicas sobre sua carteira, sinal de que o documento <strong>não cumpria sua função</strong>.',
    'cartola-sec-2': 'Problema',
    'cartola-problem-quote': '"Não sei se estou ganhando ou perdendo dinheiro."',
    'cartola-problem-intro':
      'Apesar de conter todas as informações necessárias, os usuários falhavam sistematicamente em tarefas básicas de leitura de carteira.',
    'cartola-factor-1-title': 'Sobrecarga de informação',
    'cartola-factor-1-body':
      'Sem hierarquia clara, os usuários não sabiam onde olhar primeiro. Tudo competia pela mesma atenção visual.',
    'cartola-factor-2-title': 'Métricas-chave enterradas',
    'cartola-factor-2-body':
      'Ganho/perda e patrimônio total, os dados mais procurados, não tinham protagonismo visual.',
    'cartola-factor-3-title': 'Inconsistência físico/digital',
    'cartola-factor-3-body':
      'Design diferente entre versão impressa e digital gerava confusão e desconfiança na informação.',
    'cartola-sec-3': 'Research',
    'cartola-research-t': 'Pesquisa',
    'cartola-research-em': 'mista e centrada em tarefas',
    'cartola-research-intro':
      'Combinei entrevistas para entender contexto e emoções com testes de tarefas mensuráveis para detectar exatamente onde a leitura falhava.',
    'cartola-tech-0-title': 'Entrevistas',
    'cartola-tech-0-desc':
      'Compreensão do modelo mental do investidor e suas frustrações com o documento atual.',
    'cartola-tech-1-title': 'Pesquisas',
    'cartola-tech-1-desc':
      'Teste de preferência visual entre versões do design para validar hierarquia e clareza percebida.',
    'cartola-tech-2-title': 'Teste de tarefas',
    'cartola-tech-2-desc':
      'Medição de tempo e taxa de sucesso em 5 tarefas-chave em 3 versões do design.',
    'cartola-tech-3-title': 'Teste A/B',
    'cartola-tech-3-desc':
      'Comparação direta entre cartela atual vs proposta com usuários reais do Banchile.',
    'cartola-sec-4': 'Hipótese',
    'cartola-hyp-eyebrow1': 'Hipótese de design',
    'cartola-hyp-quote':
      'Se priorizarmos patrimônio total, ganho/perda e composição como foco principal, os usuários identificarão sua situação financeira mais rápido e com maior confiança.',
    'cartola-hyp-eyebrow2': 'Perguntas norteadoras',
    'cartola-q1': 'Que informação um investidor busca primeiro ao abrir sua cartela?',
    'cartola-q2': 'Que nível de detalhe um usuário não especialista precisa para tomar decisões?',
    'cartola-sec-5': 'Descobertas',
    'cartola-findings-t': 'O que a pesquisa',
    'cartola-findings-em': 'revelou',
    'cartola-ins-0-title': 'Hierarquia quebrada',
    'cartola-ins-0-body':
      'Excesso de informação sem ordem visual clara. Usuários escaneavam sem saber por onde começar.',
    'cartola-ins-1-title': 'Métricas invisíveis',
    'cartola-ins-1-body':
      'Ganho/perda e patrimônio, os dados mais procurados, estavam enterrados entre informações secundárias.',
    'cartola-ins-2-title': 'Gráficos confusos',
    'cartola-ins-2-body':
      'Representações visuais difíceis de interpretar para usuários sem perfil financeiro especialista.',
    'cartola-ins-3-title': 'Dupla versão, dupla confusão',
    'cartola-ins-3-body':
      'Inconsistência entre cartela física e digital gerava desconfiança e dúvidas sobre a informação.',
    'cartola-sec-6': 'Processo de design',
    'cartola-process-t': 'De hipótese',
    'cartola-process-em': 'à solução validada',
    'cartola-process-intro':
      'Iterei 4 versões do design, cada uma informada pelos resultados do teste anterior. Objetivo: encontrar o equilíbrio entre completude e clareza.',
    'cartola-v0-label': 'Primeira proposta',
    'cartola-v0-desc': 'Primeira iteração de design. Reestruturação de blocos semânticos e hierarquia visual inicial.',
    'cartola-v1-label': 'Segunda proposta',
    'cartola-v1-desc': 'Refinamento de blocos semânticos. Melhora de 50% na tarefa 1.',
    'cartola-v2-label': 'Refinamento',
    'cartola-v2-desc': 'Ênfase nas métricas principais. Redução de 40% no tempo médio.',
    'cartola-v3-label': 'Resultado final',
    'cartola-v3-desc': 'Hierarquia semântica completa. 75% dos usuários preferiram no teste final.',
    'cartola-sec-7': 'Validação de Design',
    'cartola-test-t': 'Mapas de calor',
    'cartola-test-em': 'do processo iterativo',
    'cartola-test-intro':
      'Cada versão foi submetida a testes de usabilidade com usuários reais. Os mapas de calor revelam como o comportamento visual evoluiu: de cliques dispersos em V.0 ao foco total nas métricas-chave em V.2.',
    'cartola-test-t1-label': 'Tarefa 1',
    'cartola-test-t1-obj': 'Identifique o valor do seu investimento',
    'cartola-test-t1-summary':
      'Em V.0, os cliques estavam dispersos pela tela. Em V.1 e V.2, 100% dos usuários foram diretamente ao bloco de patrimônio total.',
    'cartola-test-t1-v0-note': 'Cliques dispersos. Sem ponto focal claro. Alta taxa de erro.',
    'cartola-test-t1-v1-note': 'Melhora significativa. Concentração na seção de patrimônio.',
    'cartola-test-t1-v2-note': 'Foco total nas métricas-chave. Tempo médio reduzido 40%.',
    'cartola-test-t3-label': 'Tarefa 3',
    'cartola-test-t3-obj': 'Identifique quanto está rentando',
    'cartola-test-t3-summary':
      'A tarefa de rentabilidade passou de uma das mais confusas (71% de sucesso em V.0) para clareza total em V.2, com tempo médio de 7,3 segundos.',
    'cartola-test-t3-v0-note': 'Alta dispersão. Rentabilidade enterrada entre dados secundários.',
    'cartola-test-t3-v1-note': 'Hierarquia melhorada. Usuários localizam a seção mais rápido.',
    'cartola-test-t3-v2-note': 'Sucesso total. Bloco de rentabilidade claramente identificável.',
    'cartola-sec-8': 'Resultado Final',
    'cartola-result-t': 'Design operacional',
    'cartola-result-em': 'em produção',
    'cartola-result-intro':
      'A solução final define os modelos padrão dos formatos oficiais do Banchile Inversiones: capa com métricas-chave, folha de detalhes e termos e condições, replicados como base para os demais documentos corporativos.',
    'cartola-artifact-1-tag': 'Folha Principal',
    'cartola-artifact-1-desc':
      'Patrimônio total, ganho/perda e distribuição como foco principal. Linguagem simples para decisões rápidas.',
    'cartola-artifact-2-tag': 'Folha Interna',
    'cartola-artifact-2-desc':
      'Balanço detalhado de investimentos com hierarquia visual clara por produto e moeda.',
    'cartola-artifact-3-tag': 'Termos e Condições',
    'cartola-artifact-3-desc':
      'Versão simplificada com linguagem acessível, integrada visualmente ao sistema da cartela.',
    'cartola-sec-9': 'Aprendizados',
    'cartola-learnings-t': 'O que aprendi',
    'cartola-learnings-em': 'neste projeto',
    'cartola-outcome-pref': 'Preferiram a nova versão',
    'cartola-outcome-time': 'Tempo médio vs versão original',
    'cartola-outcome-prod': 'Lançado em produção no Banchile',
    'cartola-learn-0-title': 'Clareza > completude',
    'cartola-learn-0-body':
      'Em produtos financeiros, mostrar menos mas melhor é mais valioso do que mostrar tudo. Hierarquia não é decoração: é funcionalidade.',
    'cartola-learn-1-title': 'Dados guiam decisões',
    'cartola-learn-1-body':
      'Cada iteração foi respaldada por métricas de teste. Passar de opinião a evidência transformou a conversa com stakeholders.',
    'cartola-learn-2-title': 'Product Designer = conector',
    'cartola-learn-2-body':
      'Trabalhar em discovery, research, UI, hand-off e lançamento como único designer me permitiu ver como cada decisão afeta todo o sistema.',
    'cartola-next-label': 'Próximo caso',
    'cartola-next-title1': 'Quer ver outro',
    'cartola-next-title2': 'estudo de caso?',
    'cartola-next-sub': 'Explore o caso Lirmi Familia ou vamos conversar sobre seu próximo desafio.',
    'cartola-btn-back': '← Voltar ao portfólio',
    'cartola-btn-next': 'Ver caso Lirmi →',
  },
  en: {
    'logo-tip': 'Cindy Arlette López Oportus',
    'nav-about': 'About',
    'nav-work': 'Work',
    'nav-contact': 'Contact',
    avail: 'Available for new challenges',
    'li-sub': 'View full profile →',
    'cv-label': 'Download CV',
    'hero-eyebrow': 'Product Designer · Remote · Brazil 🌿',
    'hero-title-1': 'I transform complex',
    'hero-title-2': 'problems into clear',
    'hero-title-3': 'and scalable products.',
    'hero-sub':
      'With roots in <strong>frontend development</strong>, I design end-to-end understanding code, users, and business. Less friction, better products.',
    years: 'years',
    'strip-label': 'Skills & tools',
    'about-label': 'About me',
    'about-t1': 'Product Designer',
    'about-t2': 'with roots in code.',
    'about-t3': 'I design solutions that work.',
    'about-p1':
      'I started my career in frontend, working on real products, which gave me a <strong>strong technical foundation</strong> and a solid understanding of how interfaces are built.',
    'about-p2':
      'Today I’m a Product Designer, working end-to-end from understanding the problem to designing solutions alongside business and development teams. I specialize in  <strong>simplifying complex scenarios</strong>, especially in products with multiple rules and non-expert users.',
    'about-p3':
      'I design with a focus on <strong>clarity, consistency</strong> and solutions that truly work.',
    'work-label': 'Selected work',
    'p1-title': 'Lirmi Familia',
    'p1-desc':
      'Educational platform redesign. User research, problem definition and key flow improvements to increase adoption and clarity.',
    'p2-title': 'Investment Statement',
    'p2-desc':
      'Complex financial statement redesign. Information simplification, visual hierarchy and user validation to improve comprehension.',
    'p3-title': 'Isla Nativa Travel',
    'p3-desc':
      'E-commerce designed from scratch. Structure, visual system and flows, integrating AI in exploration, content and development.',
    'proj-view': 'View case →',
    'proj-wip': 'In progress',
    'skills-label': 'Skills',
    'clients-label': "Clients I've worked with",
    'expertise-label': 'How I work',
    'exp-t1': "I don't just design screens.",
    'exp-t2': 'I design systems ',
    'exp-t3': 'that work.',
    'exp-sub':
      'Three disciplines, one process. Every project integrates research, design and code.',
    'exp-ux-title': 'I understand first, then design',
    'exp-ux-title-em': 'I understand first,',
    'exp-ux-title-rest': 'then design',
    'exp-ux-body':
      "Everything starts by understanding what problem we're solving. I use research and analysis to identify what matters and avoid designing solutions that don't address anything real.",
    'exp-ux-s1': 'Problem definition',
    'exp-ux-s2': 'User research',
    'exp-ux-s3': 'Synthesis & insights',
    'exp-ux-s4': 'Early validation',
    'exp-ui-title': 'Interfaces that inspire confidence',
    'exp-ui-title-em': 'Interfaces',
    'exp-ui-title-rest': 'that inspire confidence',
    'exp-ui-body':
      'I design interfaces meant to be used, not just to look good. I care about states, hierarchy and details that make the product understood quickly and work without friction.',
    'exp-ui-s1': 'Component system',
    'exp-ui-s2': 'Flows & interaction',
    'exp-ui-s3': 'States & microcopy',
    'exp-ui-s4': 'Validatable prototype',
    'exp-dev-title': 'Designing with buildability in mind',
    'exp-dev-title-em': 'Designing',
    'exp-dev-title-rest': 'with buildability in mind',
    'exp-dev-body':
      'My frontend background lets me design viable solutions from the start. I deliver clear specs and work alongside development so the design gets implemented as intended.',
    'exp-dev-s1': 'Clear, unambiguous handoff',
    'exp-dev-s2': 'Dev Mode usage',
    'exp-dev-s3': 'Reusable components',
    'exp-dev-s4': 'Implementation support',
    'footer-t1': 'Have a project',
    'footer-t2': 'that ',
    'footer-t3': 'deserves great design',
    'footer-cta': "Have a project? Let's talk.",
    'footer-sub': "Available for remote projects. Let's talk.",
    'footer-sig': 'Designed with intention. Built with care.',
    'nav-label': 'Navigation',
    'contact-label': 'Contact',
    'btn-view-work': 'View projects →',
    'btn-email': 'Send an email',
    'btn-linkedin': 'LinkedIn',
    // Lirmi case study
    'lirmi-back': 'Back',
    'lirmi-case-num': 'Case 01',
    'lirmi-subtitle': 'Connecting families with education',
    'lirmi-brief':
      'Redesign of a mobile school management app experience to increase adoption among parents, reduce the digital divide and enable two-way communication with the school.',
    'lirmi-meta-role': 'Role',
    'lirmi-meta-year': 'Year',
    'lirmi-meta-platform': 'Platform',
    'lirmi-meta-tools': 'Tools',
    'lirmi-hero-title': 'The adoption challenge',
    'lirmi-stat-schools': 'Schools in Chile',
    'lirmi-stat-users': 'Registered users',
    'lirmi-stat-rank': 'School platform in Chile',
    'lirmi-sec-1': 'Context',
    'lirmi-sec-2': 'Problem',
    'lirmi-sec-3': 'Research',
    'lirmi-sec-4': 'Hypothesis',
    'lirmi-sec-5': 'Target user',
    'lirmi-sec-6': 'Findings',
    'lirmi-sec-7': 'UX Artifacts',
    'lirmi-sec-8': 'Learnings',
    'lirmi-ctx-t1': 'The product',
    'lirmi-ctx-p1a':
      '<strong>Lirmi</strong> is a school management platform for teachers, students and parents. It provides access to services like educational library, lesson plans, assessments, rubrics, curriculum, school life, certificate issuance and parent communication.',
    'lirmi-ctx-p1b':
      '<strong>Lirmi Familia</strong> is the instant mobile communication app between the school and parents, launched in 2020.',
    'lirmi-ctx-t2': 'The initial challenge',
    'lirmi-ctx-p2a':
      'Despite its successful rollout across public and private schools, Lirmi Familia adoption was low. Parents kept falling back on traditional methods to complete tasks the app was supposed to handle.',
    'lirmi-ctx-p2b':
      "The team needed to understand <strong>why users weren't using the app</strong> and what design changes would increase real adoption.",
    'lirmi-problem-quote':
      "Parents don't use Lirmi Familia frequently and resort to paper despite having access to digital tools.",
    'lirmi-problem-intro': 'Three critical factors were identified as root causes:',
    'lirmi-factor-1-title': 'Digital divide',
    'lirmi-factor-1-body':
      "Older parents struggle to understand the app's features. They don't grasp the product or the possibilities it offers.",
    'lirmi-factor-2-title': 'One-way communication',
    'lirmi-factor-2-body':
      'Users receive information but cannot reply or contact teachers or authorities directly. This generates active frustration.',
    'lirmi-factor-3-title': 'Product underutilization',
    'lirmi-factor-3-body':
      "Slow adoption results in an underused tool, affecting the school's return on investment and family communication.",
    'lirmi-research-t': 'Research',
    'lirmi-research-em': 'methodology',
    'lirmi-research-intro':
      'Combining qualitative and quantitative methods allowed us to understand both deep motivations and the scope of identified problems.',
    'lirmi-tech-0-title': 'Interviews',
    'lirmi-tech-0-desc':
      '1:1 sessions with parents to explore motivations, barriers and usage context.',
    'lirmi-tech-1-title': 'Journey Map',
    'lirmi-tech-1-desc':
      "Mapping the user's emotional journey from notification to task resolution.",
    'lirmi-tech-2-title': 'Usability testing',
    'lirmi-tech-2-desc':
      'Moderated testing with real tasks on the current app to identify key friction points.',
    'lirmi-tech-3-title': 'Surveys',
    'lirmi-tech-3-desc':
      'Quantitative questionnaire to validate hypotheses and measure the scale of identified problems.',
    'lirmi-hyp-eyebrow1': 'Research hypothesis',
    'lirmi-hyp-quote':
      'Lirmi Familia does not meet all the needs of parents, so they stop using it and resort to traditional methods to carry out certain tasks.',
    'lirmi-hyp-eyebrow2': 'Research questions',
    'lirmi-q1':
      'What are the main needs and expectations that users have of a school management app?',
    'lirmi-q2':
      'How does the digital experience level of parents affect their adoption and use of Lirmi Familia?',
    'lirmi-user-t': 'Parents and guardians',
    'lirmi-user-em': 'committed to education',
    'lirmi-user-p1':
      'The target audience is parents and guardians between <strong>18 and 50 years old</strong> whose children attend educational institutions that use Lirmi in Santiago, Chile.',
    'lirmi-user-p2':
      'People committed to the education and well-being of their children, who may face challenges adopting and using digital apps.',
    'lirmi-attr-1-title': 'Variable digital level',
    'lirmi-attr-1-body': 'From digital natives to users with little app experience',
    'lirmi-attr-2-title': 'Active educational context',
    'lirmi-attr-2-body': 'With children in schools already using the Lirmi platform',
    'lirmi-attr-3-title': 'Limited time',
    'lirmi-attr-3-body': 'Need to resolve tasks quickly, no learning curves',
    'lirmi-attr-4-title': 'High motivation',
    'lirmi-attr-4-body': "Want to actively participate in their children's education",
    'lirmi-findings-t': 'What the research',
    'lirmi-findings-em': 'revealed',
    'lirmi-ins-0-title': 'Digital divide as adoption barrier',
    'lirmi-ins-0-body':
      "Parents over 40 reported not understanding the product's features. Familiarity with digital apps directly influences usage frequency.",
    'lirmi-ins-1-title': 'One-way communication frustrates users',
    'lirmi-ins-1-body':
      'Parents receive information but cannot reply or start conversations. This limitation causes frustration and app abandonment in favor of paper.',
    'lirmi-ins-2-title': 'Paper remains the trusted channel',
    'lirmi-ins-2-body':
      'Tasks like authorizations, permits and inquiries continue to be handled in person. The digital tool is not covering these critical needs.',
    'lirmi-ins-3-title': 'Low product awareness',
    'lirmi-ins-3-body':
      'Users were unaware of key app features. The lack of onboarding and discoverability directly contributes to platform underutilization.',
    'lirmi-artifacts-t': 'Tools that',
    'lirmi-artifacts-em': 'guided the design',
    'lirmi-artifacts-intro':
      'Research artifacts synthesized findings and served as the foundation for defining redesign criteria.',
    'lirmi-artifact-1-tag': 'User Persona',
    'lirmi-artifact-1-desc':
      'Representation of the primary user with their motivations, frustrations and digital behaviors.',
    'lirmi-artifact-2-tag': 'Empathy Map',
    'lirmi-artifact-2-desc':
      'What the parent thinks, feels, says and does when interacting with the app.',
    'lirmi-artifact-3-tag': 'Journey Map',
    'lirmi-artifact-3-desc':
      "User's emotional journey from the received notification to completing (or abandoning) a task in the app.",
    'lirmi-learnings-t': 'What I took away',
    'lirmi-learnings-em': 'from this project',
    'lirmi-learn-0-title': 'Adoption is a behavior problem, not just a UI problem',
    'lirmi-learn-0-body':
      "Improving the interface isn't enough. Adoption barriers for users with low digital literacy require onboarding, education and guidance strategies.",
    'lirmi-learn-1-title': 'Two-way communication is non-negotiable',
    'lirmi-learn-1-body':
      'For a school management product to be adopted, users need to feel they have agency. The ability to reply and initiate contact is a critical differentiator.',
    'lirmi-learn-2-title': 'Early research prevents designing the wrong solutions',
    'lirmi-learn-2-body':
      'Without interviews and usability tests, the team would have iterated on UI without addressing the real problem. Validating the hypothesis before designing saved significant time and resources.',
    'lirmi-next-label': 'Next project',
    'lirmi-next-title1': 'Investment',
    'lirmi-next-title2': 'Statement',
    'lirmi-next-sub': 'Complex financial statement redesign. Fintech · End-to-end',
    'lirmi-next-soon': 'Coming soon',
    'lirmi-btn-view': 'View case →',
    'lirmi-btn-back': '← Back to portfolio',
    // ── Cartola de Inversión ──────────────────────
    'cartola-back': 'Back',
    'cartola-case-num': 'Case 02',
    'cartola-subtitle': 'Redesign of a complex financial statement',
    'cartola-brief':
      'Information simplification, visual hierarchy and user validation to improve understanding and trust in the product.',
    'cartola-meta-role': 'Role',
    'cartola-meta-year': 'Year',
    'cartola-meta-platform': 'Format',
    'cartola-meta-tools': 'Tools',
    'cartola-badge-before': 'Before',
    'cartola-badge-after': 'After',
    'cartola-hero-title': 'From confusion to financial clarity',
    'cartola-stat-interviews': 'In-depth interviews',
    'cartola-stat-surveys': 'Preference surveys',
    'cartola-stat-users': 'Users in task testing',
    'cartola-stat-pref': 'Preferred the new version',
    'cartola-sec-1': 'Context',
    'cartola-ctx-t1': 'The product',
    'cartola-ctx-p1a':
      'The <strong>Investment Statement</strong> is the main document Banchile clients use to understand their assets, returns and investment composition.',
    'cartola-ctx-p1b':
      'It is one of the most critical client touchpoints, distributed monthly in both physical and digital format.',
    'cartola-ctx-t2': 'The challenge',
    'cartola-ctx-p2a':
      'The statement had accumulated years of information without structural revision. The existing version did not distinguish between primary and secondary data.',
    'cartola-ctx-p2b':
      'The commercial team reported clients frequently calling with basic portfolio questions, a signal that the document <strong>was not fulfilling its purpose</strong>.',
    'cartola-sec-2': 'Problem',
    'cartola-problem-quote': '"I don\'t know if I\'m making or losing money."',
    'cartola-problem-intro':
      'Despite containing all necessary information, users systematically failed at basic portfolio reading tasks.',
    'cartola-factor-1-title': 'Information overload',
    'cartola-factor-1-body':
      'Without clear hierarchy, users did not know where to look first. Everything competed for the same visual attention.',
    'cartola-factor-2-title': 'Key metrics buried',
    'cartola-factor-2-body':
      'Gain/loss and total assets, the most sought-after data, had no visual prominence.',
    'cartola-factor-3-title': 'Physical/digital inconsistency',
    'cartola-factor-3-body':
      'Different design between printed and digital versions created confusion and distrust in the information.',
    'cartola-sec-3': 'Research',
    'cartola-research-t': 'Mixed research',
    'cartola-research-em': 'focused on tasks',
    'cartola-research-intro':
      'I combined interviews to understand context and emotions with measurable task tests to detect exactly where reading failed.',
    'cartola-tech-0-title': 'Interviews',
    'cartola-tech-0-desc':
      'Understanding the investor\'s mental model and frustrations with the current document.',
    'cartola-tech-1-title': 'Surveys',
    'cartola-tech-1-desc':
      'Visual preference tests between design versions to validate hierarchy and perceived clarity.',
    'cartola-tech-2-title': 'Task tests',
    'cartola-tech-2-desc':
      'Measuring time and success rate on 5 key tasks across 3 design versions.',
    'cartola-tech-3-title': 'A/B test',
    'cartola-tech-3-desc':
      'Direct comparison between current vs proposed statement with real Banchile users.',
    'cartola-sec-4': 'Hypothesis',
    'cartola-hyp-eyebrow1': 'Design hypothesis',
    'cartola-hyp-quote':
      'If we prioritize total assets, gain/loss and composition as the main focus, users will identify their financial situation faster and with greater confidence.',
    'cartola-hyp-eyebrow2': 'Guiding questions',
    'cartola-q1': 'What information does an investor look for first when opening their statement?',
    'cartola-q2': 'What level of detail does a non-expert user need to make financial decisions?',
    'cartola-sec-5': 'Findings',
    'cartola-findings-t': 'What the research',
    'cartola-findings-em': 'revealed',
    'cartola-ins-0-title': 'Broken hierarchy',
    'cartola-ins-0-body':
      'Excess information with no clear visual order. Users scanned without knowing where to start.',
    'cartola-ins-1-title': 'Invisible metrics',
    'cartola-ins-1-body':
      'Gain/loss and total assets, the most sought data, were buried among secondary information.',
    'cartola-ins-2-title': 'Confusing charts',
    'cartola-ins-2-body':
      'Visual representations difficult to interpret for users without expert financial profiles.',
    'cartola-ins-3-title': 'Two versions, double confusion',
    'cartola-ins-3-body':
      'Inconsistency between physical and digital statement generated distrust and doubts about the information.',
    'cartola-sec-6': 'Design process',
    'cartola-process-t': 'From hypothesis',
    'cartola-process-em': 'to validated solution',
    'cartola-process-intro':
      'I iterated 4 design versions, each informed by the findings of the previous test. Goal: find the balance between completeness and clarity.',
    'cartola-v0-label': 'First proposal',
    'cartola-v0-desc': 'First design iteration. Initial restructuring of semantic blocks and visual hierarchy.',
    'cartola-v1-label': 'Second proposal',
    'cartola-v1-desc': 'Semantic block refinement. 50% improvement in task 1.',
    'cartola-v2-label': 'Refinement',
    'cartola-v2-desc': 'Emphasis on main metrics. 40% reduction in average time.',
    'cartola-v3-label': 'Final result',
    'cartola-v3-desc': 'Complete semantic hierarchy. 75% of users preferred it in the final test.',
    'cartola-sec-7': 'Design Validation',
    'cartola-test-t': 'Heatmaps',
    'cartola-test-em': 'of the iterative process',
    'cartola-test-intro':
      'Every version was submitted to usability testing with real users. The heatmaps show how visual behavior evolved from scattered clicks in V.0 to total focus on key metrics in V.2.',
    'cartola-test-t1-label': 'Task 1',
    'cartola-test-t1-obj': 'Identify your investment amount',
    'cartola-test-t1-summary':
      'In V.0, clicks were scattered across the screen. In V.1 and V.2, 100% of users went directly to the total assets block.',
    'cartola-test-t1-v0-note': 'Scattered clicks. No clear focal point. High error rate.',
    'cartola-test-t1-v1-note': 'Significant improvement. Concentration on the assets section.',
    'cartola-test-t1-v2-note': 'Total focus on key metrics. Average time reduced 40%.',
    'cartola-test-t3-label': 'Task 3',
    'cartola-test-t3-obj': 'Identify your returns',
    'cartola-test-t3-summary':
      'The returns task went from one of the most confusing (71% success in V.0) to total clarity in V.2, with an average time of 7.3 seconds.',
    'cartola-test-t3-v0-note': 'High dispersion. Returns buried among secondary data.',
    'cartola-test-t3-v1-note': 'Improved hierarchy. Users locate the section faster.',
    'cartola-test-t3-v2-note': 'Total success. Returns block clearly identifiable.',
    'cartola-sec-8': 'Final Result',
    'cartola-result-t': 'Operational design',
    'cartola-result-em': 'in production',
    'cartola-result-intro':
      'The final solution defines the standard templates for all official Banchile Inversiones document formats: cover with key metrics, detail sheet and terms and conditions, replicated as the foundation for the rest of their corporate documents.',
    'cartola-artifact-1-tag': 'Main Page',
    'cartola-artifact-1-desc':
      'Total assets, gain/loss and distribution as the main focus. Simple and direct language for quick decisions.',
    'cartola-artifact-2-tag': 'Internal Page',
    'cartola-artifact-2-desc':
      'Detailed investment balance with clear visual hierarchy by product and currency.',
    'cartola-artifact-3-tag': 'Terms & Conditions',
    'cartola-artifact-3-desc':
      'Simplified version with accessible language, visually integrated into the statement system.',
    'cartola-sec-9': 'Learnings',
    'cartola-learnings-t': 'What I took away',
    'cartola-learnings-em': 'from this project',
    'cartola-outcome-pref': 'Preferred the new version',
    'cartola-outcome-time': 'Average time vs original version',
    'cartola-outcome-prod': 'Shipped to production at Banchile',
    'cartola-learn-0-title': 'Clarity > completeness',
    'cartola-learn-0-body':
      'In financial products, showing less but better is more valuable than showing everything. Hierarchy is not decoration: it is functionality.',
    'cartola-learn-1-title': 'Data drives decisions',
    'cartola-learn-1-body':
      'Every iteration was backed by test metrics. Moving from opinion to evidence transformed conversations with stakeholders.',
    'cartola-learn-2-title': 'Product Designer = connector',
    'cartola-learn-2-body':
      'Working across discovery, research, UI, hand-off and launch as the sole designer let me see how every decision affects the entire system.',
    'cartola-next-label': 'Next case',
    'cartola-next-title1': 'Want to see another',
    'cartola-next-title2': 'case study?',
    'cartola-next-sub': 'Explore the Lirmi Familia case or let\'s talk about your next challenge.',
    'cartola-btn-back': '← Back to portfolio',
    'cartola-btn-next': 'View Lirmi case →',
  },
}
