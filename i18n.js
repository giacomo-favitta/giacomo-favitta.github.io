/* ============ TESTI IT / EN / ES ============ */
const I18N = {
  it:{
    nav_home:"Home", scroll:"Scorri ↓",
    home_tag:"Musicista · Chitarrista · Artista",
    door_mus:"Musicista", door_mus_d:"Esibizioni, registrazioni, collaborazioni dal vivo.",
    door_tea:"Insegnante", door_tea_d:"Lezioni, didattica e direzione d'insieme.",
    door_pro:"Producer", door_pro_d:"Produzione, composizione, direzione artistica.",
    door_por:"Portfolio", door_por_d:"Progetti: solista, duo, trio.",
    door_blog:"Blog", door_blog_d:"Diario personale e pensieri.",
    s_skills:"Competenze", s_exp:"Esperienza", s_edu:"Formazione",
    cta_h:"Lavoriamo insieme", cta_p:"Cerchi un musicista, un insegnante o un producer per il tuo progetto? Parliamone — ogni collaborazione parte da una conversazione.",
    cta_mail:"Scrivimi", cta_call:"Chiama",
    edu:{ // comune a tutti i profili
      music:{k:"Formazione musicale",v:"Bachelor in Musica Classica al Conservatorio di Como. Erasmus in Flamenco al Real Conservatorio Superior de Música de Madrid. Studi Jazz alla Valerio Silvestro Academy. Master in Musica Classica alla Civica Scuola di Musica Claudio Abbado, Milano."},
      guitar:{k:"Studi di chitarra",v:"Chitarra Classica (Claudio Maccari, Paolo Pugliese, Guido Fichtner). Chitarra Elettrica (Alessandro Sebastiani, Marco Galiero). A proprio agio anche con la chitarra acustica."},
      vbp:{k:"Studi di voce, basso e pianoforte",v:"Voce con Loredana Lubrano. Basso con Marco Galiero. Pianoforte con Ferdinando Baroffio e Valerio Silvestro. Sviluppo della versatilità attraverso melodia, armonia e ritmo."}
    }
  },
  en:{
    nav_home:"Home", scroll:"Scroll ↓",
    home_tag:"Musician · Guitarist · Artist",
    door_mus:"Musician", door_mus_d:"Live performance, recording, collaboration.",
    door_tea:"Teacher", door_tea_d:"Lessons, education and ensemble direction.",
    door_pro:"Producer", door_pro_d:"Production, composition, artistic direction.",
    door_por:"Portfolio", door_por_d:"Projects: solo, duo, trio.",
    door_blog:"Blog", door_blog_d:"Personal journal and thoughts.",
    s_skills:"Skills", s_exp:"Experience", s_edu:"Education",
    cta_h:"Let's work together", cta_p:"Looking for a musician, a teacher or a producer for your project? Let's talk — every collaboration starts with a conversation.",
    cta_mail:"Email me", cta_call:"Call",
    edu:{
      music:{k:"Music training",v:"Bachelor in Classical Music at Conservatorio di Como. Erasmus in Flamenco at Real Conservatorio Superior de Música de Madrid. Jazz studies at Valerio Silvestro Academy. Master in Classical Music at Civica Scuola di Musica Claudio Abbado, Milan."},
      guitar:{k:"Guitar studies",v:"Classical Guitar (Claudio Maccari, Paolo Pugliese, Guido Fichtner). Electric Guitar (Alessandro Sebastiani, Marco Galiero). Confident also with acoustic guitar."},
      vbp:{k:"Voice, Bass & Piano studies",v:"Voice with Loredana Lubrano. Bass with Marco Galiero. Piano with Ferdinando Baroffio and Valerio Silvestro. Developing versatility across melody, harmony and rhythm."}
    }
  },
  es:{
    nav_home:"Inicio", scroll:"Desplázate ↓",
    home_tag:"Músico · Guitarrista · Artista",
    door_mus:"Músico", door_mus_d:"Actuaciones, grabaciones, colaboraciones.",
    door_tea:"Profesor", door_tea_d:"Clases, didáctica y dirección de ensemble.",
    door_pro:"Productor", door_pro_d:"Producción, composición, dirección artística.",
    door_por:"Portfolio", door_por_d:"Proyectos: solista, dúo, trío.",
    door_blog:"Blog", door_blog_d:"Diario personal y pensamientos.",
    s_skills:"Habilidades", s_exp:"Experiencia", s_edu:"Formación",
    cta_h:"Trabajemos juntos", cta_p:"¿Buscas un músico, un profesor o un productor para tu proyecto? Hablemos — cada colaboración empieza con una conversación.",
    cta_mail:"Escríbeme", cta_call:"Llama",
    edu:{
      music:{k:"Formación musical",v:"Bachelor en Música Clásica en el Conservatorio de Como. Erasmus en Flamenco en el Real Conservatorio Superior de Música de Madrid. Estudios de Jazz en Valerio Silvestro Academy. Máster en Música Clásica en la Civica Scuola di Musica Claudio Abbado, Milán."},
      guitar:{k:"Estudios de guitarra",v:"Guitarra Clásica (Claudio Maccari, Paolo Pugliese, Guido Fichtner). Guitarra Eléctrica (Alessandro Sebastiani, Marco Galiero). Cómodo también con la guitarra acústica."},
      vbp:{k:"Estudios de voz, bajo y piano",v:"Voz con Loredana Lubrano. Bajo con Marco Galiero. Piano con Ferdinando Baroffio y Valerio Silvestro. Desarrollando versatilidad a través de la melodía, armonía y ritmo."}
    }
  }
};

/* ============ CONTENUTI PROFILI ============ */
const PROFILES = {
  musicista:{
    role:{it:"Musicista · Chitarrista · Artista",en:"Musician · Guitarist · Artist",es:"Músico · Guitarrista · Artista"},
    skills:{
      it:[["Esecuzione strumentale e vocale","Si esibisce in una vasta gamma di contesti — solista, duo, trio, big band e orchestra. A proprio agio sia come sideman sia come direttore musicale."],["Musicalità e arrangiamento","Formazione classica e jazz, con ricerca personale in rock, metal, funk, progressive, soul, pop, R&B e latin. Arrangia e compone con forte senso della struttura armonica."],["Repertorio rapido e adattabilità","Esteso allenamento dell'orecchio: preparazione rapida e affidabile di set completi con poco preavviso, anche con minime prove."]],
      en:[["Instrumental & vocal performance","Performs across a wide range of contexts — solo, duo, trio, big band and orchestral settings. Comfortable as both sideman and musical director."],["Musicianship & arranging","Classical and jazz training, with personal research across rock, metal, funk, progressive, soul, pop, R&B and latin. Arranges and composes with a strong sense of harmonic structure."],["Rapid repertoire & adaptability","Extensive ear training: fast, reliable preparation of full sets on short notice, even with minimal rehearsal."]],
      es:[["Interpretación instrumental y vocal","Actúa en una amplia variedad de contextos — solista, dúo, trío, big band y orquesta. Cómodo como sideman y como director musical."],["Musicalidad y arreglos","Formación clásica y jazz, con investigación personal en rock, metal, funk, progressive, soul, pop, R&B y latin. Arregla y compone con fuerte sentido de la estructura armónica."],["Repertorio rápido y adaptabilidad","Amplio entrenamiento auditivo: preparación rápida y fiable de sets completos con poco aviso, incluso con mínimo ensayo."]]
    },
    exp:{
      it:[["2013—2026","Italia, Europa","Esibizioni dal vivo","Sale da concerto, palchi, pub, locali notturni e spazi all'aperto. Esperienza in molteplici stili musicali."],["2018—2026","Milano","Registrazioni in studio","Apple Sauce (mixato e masterizzato da Federico Ascari, ospite speciale Ralph Salati)."],["2023—2026","In tutto il mondo","Collaborazioni musicali","Collaborazioni con artisti e musicisti di diversi paesi e background musicali."]],
      en:[["2013—2026","Italy, Europe","Live performances","Concert halls, stages, pubs, nightclubs and outdoor venues. Experience across multiple musical styles."],["2018—2026","Milan","Studio recordings","Apple Sauce (mixed and mastered by Federico Ascari, special guest Ralph Salati)."],["2023—2026","Worldwide","Musical collaborations","Collaborations with artists and musicians from different countries and musical backgrounds."]],
      es:[["2013—2026","Italia, Europa","Actuaciones en vivo","Salas de conciertos, escenarios, pubs, locales nocturnos y espacios al aire libre. Experiencia en múltiples estilos musicales."],["2018—2026","Milán","Grabaciones de estudio","Apple Sauce (mezclado y masterizado por Federico Ascari, invitado especial Ralph Salati)."],["2023—2026","Mundialmente","Colaboraciones musicales","Colaboraciones con artistas y músicos de diferentes países y bagajes musicales."]]
    }
  },
  insegnante:{
    role:{it:"Insegnante · Educatore Musicale · Performance Coach",en:"Teacher · Music Educator · Performance Coach",es:"Profesor · Educador Musical · Performance Coach"},
    skills:{
      it:[["Insegnamento multi-strumento e vocal coaching","Chitarra come strumento principale, insieme a basso, pianoforte e voce. L'insegnamento integra basi classiche e jazz, trattando la musica come un vocabolario vivo. Consapevolezza corporea, coordinazione, movimento e canto centrali in ogni lezione."],["Teoria musicale e diagnosi armonica","Teoria e pratica insegnate come inseparabili — imparare a parlare la musica prima di leggerla. Copre tutti i livelli, inclusa la produzione. Con i più giovani, concetti introdotti attraverso giochi ed esplorazione fisica."],["Repertorio rapido e adattabilità","Altamente adattabile alle richieste degli studenti in tutto lo spettro della musica occidentale — dalla classica al pop, rock, jazz e latin. Guida trasparente e centrata sullo studente."]],
      en:[["Multi-instrument teaching & vocal coaching","Guitar as primary instrument, alongside bass, piano and voice. Teaching integrates classical and jazz foundations, treating music as a living vocabulary. Body awareness, coordination, movement and singing are central to every lesson."],["Music theory & harmonic diagnosis","Theory and practice taught as inseparable — learning to speak music before reading it. Covers all levels including production. With younger students, concepts come through games and physical exploration."],["Rapid repertoire & adaptability","Highly adaptable to student requests across the full spectrum of Western music — classical to pop, rock, jazz and latin. Transparent, student-centred guidance."]],
      es:[["Enseñanza multi-instrumento y vocal coaching","Guitarra como instrumento principal, junto con bajo, piano y voz. La enseñanza integra fundamentos clásicos y de jazz, tratando la música como un vocabulario vivo. Conciencia corporal, coordinación, movimiento y canto centrales en cada lección."],["Teoría musical y diagnóstico armónico","Teoría y práctica enseñadas como inseparables — aprender a hablar música antes de leerla. Cubre todos los niveles, incluida la producción. Con los más jóvenes, conceptos a través de juegos y exploración física."],["Repertorio rápido y adaptabilidad","Altamente adaptable a las solicitudes de los estudiantes en todo el espectro de la música occidental — de clásica a pop, rock, jazz y latin. Orientación transparente y centrada en el estudiante."]]
    },
    exp:{
      it:[["2018—2026","In tutto il mondo","Lezioni private — in presenza e online","Tutte le età e i livelli: chitarra, basso, pianoforte, voce e produzione. In presenza e online via Google Meet, sempre adattate agli obiettivi dello studente."],["2022—2026","Varese","Insegnamento al Liceo Musicale","Professore di chitarra all'Istituto Statale Manzoni — Liceo Musicale, Varese. Esecuzione, ensemble di chitarre, musica da camera e d'insieme."],["2023—2026","Varese, Como, Milano","Direzione d'insieme","Direzione di band, cori ed ensemble da camera in contesti scolastici, privati e concertistici, con studenti e adulti."]],
      en:[["2018—2026","Worldwide","Private lessons — in-person & online","All ages and levels: guitar, bass, piano, voice and production. In-person and online via Google Meet, always tailored to the student's goals."],["2022—2026","Varese","Music high school teaching","Guitar teacher at Istituto Statale Manzoni — Liceo Musicale, Varese. Performance, guitar ensemble, chamber and ensemble music."],["2023—2026","Varese, Como, Milan","Ensemble music direction","Direction of bands, choirs and chamber ensembles in scholastic, private and concert settings, with students and adults."]],
      es:[["2018—2026","Mundialmente","Clases particulares — presenciales y online","Todas las edades y niveles: guitarra, bajo, piano, voz y producción. Presencial y online vía Google Meet, siempre adaptadas a los objetivos del estudiante."],["2022—2026","Varese","Enseñanza en Liceo Musical","Profesor de guitarra en el Istituto Statale Manzoni — Liceo Musicale, Varese. Interpretación, ensemble de guitarras, música de cámara y de conjunto."],["2023—2026","Varese, Como, Milán","Dirección de ensemble","Dirección de bandas, coros y ensembles de cámara en contextos escolares, privados y de concierto, con estudiantes y adultos."]]
    }
  },
  producer:{
    role:{it:"Produttore · Compositore · Direttore Artistico",en:"Producer · Composer · Art Director",es:"Productor · Compositor · Director Artístico"},
    skills:{
      it:[["Produzione musicale","Principalmente in Logic Pro, con esperienza in Reaper e Ableton. Approccio influenzato dallo studio di artisti come Jacob Collier e Mr. Bill — profondità armonica, arrangiamento creativo e sound design non convenzionale."],["Composizione e arrangiamento","Scrittura in formati cinematografici, basati sulla canzone e di arrangiamento. A proprio agio nel comporre per film, creare tracce per album o progettare arrangiamenti per show dal vivo."],["Direzione artistica","Suono ed estetica come strumenti di comunicazione unificati. Ispirato da Quincy Jones, Duke Ellington e Rick Rubin. Disponibile per la produzione di singoli, album e show."]],
      en:[["Music production","Primarily in Logic Pro, with experience in Reaper and Ableton. Approach shaped by in-depth study of artists like Jacob Collier and Mr. Bill — harmonic depth, creative arrangement and unconventional sound design."],["Composition & arranging","Writing across cinematic, song-based and arrangement formats. Comfortable scoring for film, crafting album tracks or designing arrangements for live shows."],["Artistic direction","Sound and aesthetic as unified communication tools. Inspired by Quincy Jones, Duke Ellington and Rick Rubin. Available for single, album and show production."]],
      es:[["Producción musical","Principalmente en Logic Pro, con experiencia en Reaper y Ableton. Enfoque influenciado por el estudio de artistas como Jacob Collier y Mr. Bill — profundidad armónica, arreglo creativo y diseño sonoro no convencional."],["Composición y arreglos","Escritura en formatos cinematográficos, basados en canciones y de arreglo. Cómodo componiendo para cine, creando pistas de álbum o diseñando arreglos para shows en vivo."],["Dirección artística","Sonido y estética como herramientas de comunicación unificadas. Inspirado por Quincy Jones, Duke Ellington y Rick Rubin. Disponible para producción de singles, álbumes y shows."]]
    },
    exp:{
      it:[["2016—2023","Italia, Europa","Apple Sauce — produzione completa","Produzione artistica completa del progetto Apple Sauce: composizione, arrangiamento e direzione artistica."],["2022—2026","Varese","Progetti multimediali — Liceo Musicale Varese","Produzione di molteplici progetti audiovisivi: composizione musicale, registrazione e video."],["2026","Milano, Varese, Berna","Trio — in sviluppo","Progettazione di un nuovo progetto Trio, focalizzato su composizione e arrangiamento da zero."]],
      en:[["2016—2023","Italy, Europe","Apple Sauce — full production","Full artistic production of the Apple Sauce project: composition, arranging and artistic direction."],["2022—2026","Varese","Multimedia projects — Liceo Musicale Varese","Production of multiple audio-visual projects: music composition, recording and video."],["2026","Milan, Varese, Bern","Trio — in development","Designing a new Trio project, focused on composition and arrangement from the ground up."]],
      es:[["2016—2023","Italia, Europa","Apple Sauce — producción completa","Producción artística completa del proyecto Apple Sauce: composición, arreglos y dirección artística."],["2022—2026","Varese","Proyectos multimedia — Liceo Musicale Varese","Producción de múltiples proyectos audiovisuales: composición musical, grabación y vídeo."],["2026","Milán, Varese, Berna","Trío — en desarrollo","Diseño de un nuevo proyecto de Trío, enfocado en composición y arreglos desde cero."]]
    }
  }
};

const CONTACT = { email:"giacomo.favitta@gmail.com", phone:"+39 380 3120324", phoneHref:"+393803120324" };

/* ============ HELPERS ============ */
function getLang(){ return localStorage.getItem('lang_'+'x') || (navigator.language||'it').slice(0,2).match(/it|en|es/)?(navigator.language||'it').slice(0,2):'it'; }
// nota: niente localStorage su artifact, ma su GitHub Pages funziona. Fallback sotto.
let CURRENT='it';
function tryStore(l){ try{ localStorage.setItem('giac_lang',l);}catch(e){} }
function tryLoad(){ try{ return localStorage.getItem('giac_lang'); }catch(e){ return null; } }

function buildLangSwitch(onChange){
  const nav=document.createElement('nav'); nav.className='lang';
  ['it','en','es'].forEach(l=>{
    const b=document.createElement('button'); b.textContent=l.toUpperCase(); b.dataset.lang=l;
    b.onclick=()=>{ setLang(l); onChange&&onChange(l); };
    nav.appendChild(b);
  });
  document.body.appendChild(nav);
}
function markActive(l){ document.querySelectorAll('.lang button').forEach(b=>b.classList.toggle('active',b.dataset.lang===l)); }
function setLang(l){ CURRENT=l; document.documentElement.lang=l; tryStore(l); markActive(l); applyStatic(l); }
function applyStatic(l){
  document.querySelectorAll('[data-t]').forEach(el=>{ const v=I18N[l][el.dataset.t]; if(v!==undefined) el.innerHTML=v; });
}
function initLang(onChange){
  const saved=tryLoad(); const nav=(navigator.language||'it').slice(0,2);
  CURRENT = saved || (['it','en','es'].includes(nav)?nav:'it');
  buildLangSwitch(onChange);
  setLang(CURRENT);
  onChange&&onChange(CURRENT);
}
function revealInit(){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}
