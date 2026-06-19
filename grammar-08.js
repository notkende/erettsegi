// 8. nyelvtan tétel: A köznyelvi változatok, csoportnyelvek és rétegnyelvek
window.loadGrammarData(8, {
  outline: [
    "A nyelv társadalmi tagozódása (szociolektusok)",
    "A nemzeti nyelv rétegei: irodalmi nyelv és köznyelv",
    "A csoportnyelvek típusai: szaknyelvek és hobbinyelvek",
    "A szleng fogalma, kialakulása és jellemzői",
    "Az argó (tolvajnyelv) és a csoportnyelvek hatása a köznyelvre"
  ],
  introduction: `
    <p>A nyelv nem egységes tömbként létezik, hanem társadalmi és földrajzi tagozódás szerint különböző változatokban él. <strong>A társadalom rétegződése (életkor, nem, lakóhely, iskolázottság, foglalkozás) szerint elkülönülő nyelvváltozatokat szociolektusoknak (csoportnyelveknek) nevezzük.</strong> A modern nyelvművelés és szociolangvisztika feladata ezek kölcsönhatásainak és szerepének vizsgálata.</p>
  `,
  biography: `
    <p>A szociolingvisztika (társadalomnyelvészet) a 20. század közepén alakult ki mint önálló tudományág. Legismertebb úttörője William Labov amerikai nyelvész volt, aki kimutatta, hogy a nyelvi változatok használata szorosan korrelál a beszélő társadalmi osztályával. Magyarországon a szociolingvisztikai kutatásokat a 20. század végén olyan nyelvészek terjesztették el, mint Kontra Miklós és Kiss Jenő.</p>
  `,
  keyWorks: [
    {
      title: "A nemzeti nyelv rétegződése",
      analysis: `
        <p>A magyar nemzeti nyelv piramisszerűen épül fel, amelynek tetején a leginkább igényes és egységesített változatok állnak:</p>
        <ul>
          <li><strong>Irodalmi nyelv</strong>: A nemzeti nyelv legigényesebb, írott változata. Művészi alkotások, esszék, irodalom nyelve.</li>
          <li><strong>Köznyelv</strong>: A mindennapi hivatalos és társasági érintkezés beszélt és írt változata. Két fő változata van: az igényesebb <i>írott köznyelv</i> (pl. újságok, híradások) és a lazább <i>beszélt köznyelv</i>.</li>
        </ul>
      `
    },
    {
      title: "Csoportnyelvek és rétegnyelvek (Szociolektusok)",
      analysis: `
        <p>A szociolektusokat a használóik köre és a használat helyszíne alapján osztjuk csoportokra:</p>
        <ol>
          <li><strong>Szaknyelvek (jargonok)</strong>: Egy-egy szakma, tudomány vagy mesterség szakkifejezéseinek összessége (pl. orvosi, jogi, informatikai szaknyelv). Célja a pontos, egyértelmű információcsere.</li>
          <li><strong>Hobbinyelvek</strong>: Különböző szabadidős tevékenységek, sportok speciális szókincse (pl. horgász, videojátékos, kerékpáros szleng).</li>
          <li><strong>Szleng (ifjúsági nyelv)</strong>: Az egyik legdinamikusabb nyelvváltozat, amelyet főleg a fiatalok használnak. Célja az expresszivitás, az érzelmi színezet, a csoporthoz tartozás kifejezése és a hagyományos formák elleni lázadás (pl. <i>fejleszt, beég, gáz, vágja</i>).</li>
          <li><strong>Argó (tolvajnyelv)</strong>: Eredetileg a bűnözői csoportok titkos nyelve volt, amelynek célja a kívülállók kizárása és az eltitkolás (pl. <i>dohány, sarok, zsarufő</i>). Mára sok argó szavunk beépült a szlengbe és a köznyelvbe (pl. <i>lóvé, balhé, duma</i>).</li>
        </ol>
      `
    }
  ],
  styleAndForm: `
    <p>A csoportnyelvek nyelvtani rendszere megegyezik a köznyelvvel, az eltérés szinte kizárólag a **szókincsben** (lexikális szinten) jelentkezik, amelyet sajátos metaforákkal, szóalkotásokkal vagy idegen szavak átvételével alakítanak ki.</p>
  `,
  conclusion: `
    <p>A csoport- és rétegnyelvek gazdagítják a nemzeti nyelvet. Szavaik folyamatosan áramlanak be a köznyelvbe, megújítva a szókincset és árnyalva a mindennapi önkifejezést.</p>
  `,
  flashcards: [
    {
      question: "Mi a szociolektus fogalma?",
      answer: "Társadalmi tagozódás (foglalkozás, életkor, réteg) szerint elkülönülő nyelvváltozat."
    },
    {
      question: "Mi a különbség az irodalmi nyelv és a köznyelv között?",
      answer: "Az irodalmi nyelv a legigényesebb, írott, csiszolt nyelvváltozat, a köznyelv a mindennapi hivatalos és társasági érintkezés beszélt/írt változata."
    },
    {
      question: "Mi a szaknyelv (jargon) elsődleges funkciója?",
      answer: "A pontos, egyértelmű és gyors információcsere egy adott szakmai körön belül."
    },
    {
      question: "Melyek a szleng használatának fő indítékai?",
      answer: "A csoporthoz tartozás kifejezése, az érzelmi telítettség (kifejezőerő) és a játékosság."
    }
  ],
  quiz: [
    {
      question: "Hogyan nevezzük a társadalom rétegződése (életkor, foglalkozás, iskolázottság) szerint elkülönülő nyelvváltozatokat?",
      options: ["Dialektusok", "Szociolektusok (csoportnyelvek)", "Idiolektusok", "Lingua franca"],
      correctIndex: 1,
      explanation: "A társadalmi tényezők (pl. életkor, szakma) alapján elkülönülő nyelvváltozatokat szociolektusoknak vagy csoportnyelveknek nevezzük."
    },
    {
      question: "Melyik nyelvészeti részterület vizsgálja a nyelv és a társadalom kapcsolatát?",
      options: ["Dialektológia", "Szociolingvisztika", "Fonetika", "Szemantika"],
      correctIndex: 1,
      explanation: "A szociolingvisztika (társadalomnyelvészet) a nyelv használatát a társadalmi tényezők összefüggésében kutatja."
    },
    {
      question: "Ki volt a szociolingvisztika (társadalomnyelvészet) 20. századi amerikai úttörője?",
      options: ["William Labov", "Noam Chomsky", "Ferdinand de Saussure", "Kempelen Farkas"],
      correctIndex: 0,
      explanation: "William Labov végzett először módszeres vizsgálatokat arra nézve, hogyan függ össze a beszélők társadalmi osztálya a nyelvváltozatukkal."
    },
    {
      question: "Melyik nyelvváltozat a magyar nemzeti nyelv leginkább igényes, írott, esztétikailag csiszolt változata?",
      options: ["Beszélt köznyelv", "Irodalmi nyelv", "Szaknyelv", "Szleng"],
      correctIndex: 1,
      explanation: "Az irodalmi nyelv a nemzeti nyelv legigényesebb, írott változata, amely az irodalmi és esszéírói gyakorlatban kristályosodott ki."
    },
    {
      question: "Mi a különbség az irodalmi nyelv és a köznyelv között?",
      options: [
        "Az irodalmi nyelv a társadalom alsóbb rétegeinek nyelve, a köznyelv a felsőbbeké",
        "Az irodalmi nyelv elsősorban a művészi-irodalmi írásbeliség stílusa, míg a köznyelv a mindennapi hivatalos és társasági érintkezésé",
        "Nincs közöttük semmi különbség, a két fogalom teljesen azonos",
        "Az irodalmi nyelv kizárólag latin szavakat használ, a köznyelv nem"
      ],
      correctIndex: 1,
      explanation: "Az irodalmi nyelv csiszoltabb és művészibb, míg a köznyelv a mindennapi, praktikus és hivatalos kommunikáció eszköze."
    },
    {
      question: "Mi a szaknyelvek (jargonok) elsődleges funkciója?",
      options: [
        "A kívülállók tudatos kizárása a kommunikációból",
        "A pontos, egyértelmű és gyors információcsere egy adott szakmai körön belül",
        "A beszéd érzelmi színezése és a játékosság kifejezése",
        "A helyesírási szabályok egyszerűsítése"
      ],
      correctIndex: 1,
      explanation: "A szaknyelvek célja, hogy a szakemberek (pl. orvosok, jogászok) félreértések nélkül, pontosan és gyorsan kommunikáljanak."
    },
    {
      question: "Melyik csoportnyelvre jellemző az orvosi, jogi vagy informatikai terminológia használata?",
      options: ["Szleng", "Szaknyelv", "Argó", "Népnyelv"],
      correctIndex: 1,
      explanation: "Az orvosi, jogi, mérnöki vagy informatikai kifejezések az adott tudományágak és tevékenységek szaknyelvéhez tartoznak."
    },
    {
      question: "Mi jellemzi a hobbinyelveket?",
      options: [
        "Kifejezetten bűnözői csoportok titkos kódolása",
        "Különböző szabadidős tevékenységek, sportok speciális szókincse",
        "A hivatalos parlamenti törvénykezés stílusa",
        "Kizárólag a kisgyermekek beszédében fordul elő"
      ],
      correctIndex: 1,
      explanation: "A hobbinyelvek (pl. horgász, videojátékos, hegymászó nyelvek) a szabadidős közösségek sajátos szókincsét tartalmazzák."
    },
    {
      question: "Mi a szleng legfőbb használati és stilisztikai jellemzője?",
      options: [
        "A szigorú tudományos pontosság",
        "A gyors változás, játékosság, érzelmi színezet és a csoporthoz való tartozás kifejezése",
        "A szabálykönyvekben (helyesírási szótárban) való rögzítettség",
        "A latin és görög nyelvtani szerkezetek követése"
      ],
      correctIndex: 1,
      explanation: "A szleng rendkívül dinamikus, kifejező (expresszív), humoros szóalkotású, és segít kifejezni egy csoport összetartozását."
    },
    {
      question: "Melyik csoport körében a legmeghatározóbb a szleng használata?",
      options: ["Kisgyermekek", "Fiatalok (ifjúsági nyelv)", "Idősek", "Hivatalnokok"],
      correctIndex: 1,
      explanation: "Bár szinte mindenki használja, a szleng legfőbb hordozói és terjesztői a fiatalok (diákok, tinédzserek)."
    },
    {
      question: "Hogyan nevezték eredetileg a bűnözők zárt, titkosító csoportnyelvét?",
      options: ["Szaknyelv", "Szleng", "Argó (tolvajnyelv)", "Irodalmi nyelv"],
      correctIndex: 2,
      explanation: "Az argó vagy tolvajnyelv a bűnözői csoportok zárt nyelve volt, amely az eltitkolást szolgálta a kívülállók elől."
    },
    {
      question: "Melyik szó került át eredetileg a tolvajnyelvből (argóból) a mai köznyelvbe vagy szlengbe?",
      options: ["folyóirat", "lóvé", "diagnózis", "tétel"],
      correctIndex: 1,
      explanation: "A 'lóvé' (pénz), 'balhé', 'duma' szavak mind az argóból származnak, és mára széles körben elterjedtek a köznyelvben is."
    },
    {
      question: "Melyik nyelvi szinten térnek el leginkább a csoportnyelvek a standard köznyelvtől?",
      options: [
        "Nyelvtani (alaktani és mondattani) szinten",
        "Szókincsbeli (lexikális) szinten",
        "Hangtani (kiejtési) szinten",
        "Írásrendszeri és betűrendi szinten"
      ],
      correctIndex: 1,
      explanation: "A csoportnyelvek nyelvtana és hangtana alapvetően megegyezik a köznyelvvel, eltérés szinte csak a szókincsben van."
    },
    {
      question: "Melyik kifejezés szleng eredetű az alábbiak közül?",
      options: ["orr", "beég", "orvos", "határozat"],
      correctIndex: 1,
      explanation: "A 'beég' (kellemetlen helyzetbe kerül) kifejezés tipikus ifjúsági szleng szó."
    },
    {
      question: "Mit jelent a csoportnyelvek és a köznyelv közötti kölcsönhatás?",
      options: [
        "A köznyelvi szavakat teljesen kitiltják a csoportnyelvekből",
        "A csoportnyelvek szavai folyamatosan beépülhetnek a köznyelvbe, és fordítva",
        "A két változatot csak a tolmácsok segítségével lehet összekapcsolni",
        "A nyelvek folyamatosan elszakadnak egymástól"
      ],
      correctIndex: 1,
      explanation: "A nyelvváltozatok nem zártak; a szleng- vagy szaknyelvi szavak (pl. meló, számítógép) gyakran válnak a köznyelv részévé."
    },
    {
      question: "Hogyan értelmezi a magyar nyelvtan a 'jargon' kifejezést szűkebb értelemben?",
      options: [
        "A családi kör bensőséges nyelveként",
        "Bizonyos szakmai vagy társadalmi csoportok zárt, kívülállók számára nehezen érthető nyelvhasználataként",
        "A legkisebb falvak tájszavakban gazdag nyelvjárásaként",
        "A kisgyermekek beszédfejlődési szakaszaként"
      ],
      correctIndex: 1,
      explanation: "A jargon (zsargon) a szakmai, társadalmi csoportok kissé mesterkélt, zárt nyelvezete (pl. üzleti jargon)."
    },
    {
      question: "Miért mondjuk, hogy a szleng szókincse rendkívül gyorsan változik?",
      options: [
        "Mert a szleng szavait a törvények tiltják",
        "Mert a kifejezések gyorsan elavulnak, cserélődnek az új generációk divatja szerint",
        "Mert csak leírva létezik",
        "Mert nem alkalmas bonyolult gondolatok kifejezésére"
      ],
      correctIndex: 1,
      explanation: "A szleng lényege az újszerűség; ha egy szót a köznyelv átvesz, a fiatalok újat keresnek helyette, mert a régi 'ciki' lesz."
    },
    {
      question: "Miért alakult ki a tolvajnyelv?",
      options: [
        "A bűnözők eltitkolási szándéka miatt (hogy a rendőrök és áldozatok ne értsék őket)",
        "Az iskolaigazgatók kérésére a diákok rendszabályozásához",
        "A parasztok és nemesek közötti hivatalos közvetítéshez",
        "A külföldi kereskedőkkel való könnyebb alkudozás céljából"
      ],
      correctIndex: 0,
      explanation: "Az argó tolvajnyelvi jellege a titkosságra épült, hogy elfedje a bűnözői csoportok ténykedését."
    },
    {
      question: "Melyik nyelvváltozatot tekintjük a nemzeti nyelv standard, egységesítő változatának?",
      options: ["Argót", "Köznyelvet", "Diákszlengt", "Palóc nyelvjárást"],
      correctIndex: 1,
      explanation: "A köznyelv az, amely országosan érthető, egységes, és közvetít a különböző csoport- és tájnyelvek között."
    },
    {
      question: "Melyik nyelvészpáros végzett meghatározó szociolingvisztikai kutatásokat Magyarországon?",
      options: [
        "Sajnovics János és Gyarmathi Sámuel",
        "Kontra Miklós és Kiss Jenő",
        "Kazinczy Ferenc és Kölcsey Ferenc",
        "Bessenyei György és Vámbéry Ármin"
      ],
      correctIndex: 1,
      explanation: "Kontra Miklós és Kiss Jenő a hazai szociolingvisztikai és dialektológiai kutatások kiemelkedő képviselői."
    }
  ]
});
