// 1. nyelvtan tétel: A kommunikációs folyamat tényezői és funkciói
window.loadGrammarData(1, {
  outline: [
    "A kommunikáció fogalma és alapvető szerepe",
    "A kommunikációs folyamat tényezői (Jakobson-modell)",
    "A kommunikáció hat alapvető funkciója",
    "A tényezők és funkciók közötti szoros kapcsolat",
    "A sikeres információcsere feltételei és a zaj fogalma"
  ],
  introduction: `
    <p>A kommunikáció latin eredetű szó (communicatio), jelentése: információk, gondolatok, érzések megosztása, közlése egy adott jelrendszer segítségével. <strong>Nem csupán az emberi társadalom alapköve, hanem az egyéni szocializáció és a kultúra közvetítésének elsődleges eszköze is.</strong> A modern kommunikációelmélet Roman Jakobson modelljén alapul, amely a folyamat résztvevőit és azok céljait rendszerezi.</p>
  `,
  biography: `
    <p>Roman Jakobson (1896–1982) orosz származású nyelvész és irodalomtudós volt, a 20. századi strukturalista nyelvészet egyik úttörője. 1960-ban fogalmazta meg híres modelljét, amelyben a nyelvi kommunikáció hat tényezőjéhez hat funkciót rendelt hozzá. Jakobson felismerte, hogy bár a nyelvi megnyilatkozásokben egyszerre több funkció is jelen lehet, szinte mindig van egy domináns cél, amely meghatározza a közlés jellegét.</p>
  `,
  keyWorks: [
    {
      title: "A kommunikáció tényezői",
      analysis: `
        <p>A Jakobson-modell szerint a sikeres kommunikációhoz hat alapvető tényező együttes jelenléte szükséges:</p>
        <ul>
          <li><strong>Adó (Feladó)</strong>: Az üzenet megfogalmazója, a kibocsátó.</li>
          <li><strong>Vevő (Címzett)</strong>: Az üzenet befogadója, értelmezője.</li>
          <li><strong>Üzenet</strong>: Maga a továbbított információ vagy tartalom.</li>
          <li><strong>Kód</strong>: A közös jelrendszer (pl. a magyar nyelv), amelyet mindkét félnek ismernie kell a dekódoláshoz.</li>
          <li><strong>Csatorna</strong>: A fizikai közeg, amelyen keresztül az üzenet eljut az adótól a vevőhöz (pl. levegő, telefon, papír).</li>
          <li><strong>Kontextus (Beszédhelyzet)</strong>: A valós vagy gondolati háttér, amelyben az üzenet értelmezhetővé válik.</li>
        </ul>
      `
    },
    {
      title: "A kommunikáció funkciói",
      analysis: `
        <p>A hat tényezőhöz közvetlenül kapcsolódik a kommunikáció hat alapvető funkciója (célja):</p>
        <ol>
          <li><strong>Tájékoztató (kifejtő, ábrázoló) funkció</strong>: A kontextusra irányul. Célja az információközlés, a valóság leírása (pl. „Holnap esni fog.”).</li>
          <li><strong>Kifejező (emocionális) funkció</strong>: Az adóra irányul. Az adó érzelmeit, hangulatát, véleményét fejezi ki (pl. „Jaj, de gyönyörű!”).</li>
          <li><strong>Felhívó (konatív) funkció</strong>: A vevőre irányul. Befolyásolni kívánja a címzett viselkedését (pl. felszólítás, kérés, parancs: „Csukd be az ajtót!”).</li>
          <li><strong>Kapcsolattartó (fatikus) funkció</strong>: A csatornára irányul. A kapcsolat létrehozását, fenntartását vagy lezárását szolgálja (pl. „Halló!”, „Hogy vagy?”, „Szia!”).</li>
          <li><strong>Metanyelvi (értelmező) funkció</strong>: A kódra irányul. Magára a nyelvre, a kód értelmezésére utal (pl. „Mit jelent ez a szó?”).</li>
          <li><strong>Esztétikai (poétikai) funkció</strong>: Magára az üzenetre irányul. Az üzenet formájára, szépségére, ritmusára helyezi a hangsúlyt (pl. versek, szójátékok).</li>
        </ol>
      `
    }
  ],
  styleAndForm: `
    <p>A kommunikáció lehet **verbális** (nyelvi, szóbeli és írásbeli) és **nonverbális** (nem nyelvi jelek, gesztusok). A sikeres dekódoláshoz elengedhetetlen a közös kód megléte és a **zaj** (zavaró tényezők, pl. háttérzaj, rossz térerő, figyelmetlenség) minimalizálása.</p>
  `,
  conclusion: `
    <p>A kommunikációs tényezők és funkciók ismerete kulcsfontosságú a mindennapi életben. Segít megérteni a félreértések okait, javítja a kifejezőkészséget és képessé tesz a manipulatív médiatartalmak kritikus elemzésére.</p>
  `,
  flashcards: [
    {
      question: "Ki alkotta meg a kommunikáció 6 tényezőjének és funkciójának híres modelljét?",
      answer: "Roman Jakobson."
    },
    {
      question: "Mi a kommunikáció 6 alapvető tényezője?",
      answer: "Adó, vevő, üzenet, csatorna, kód, kontextus."
    },
    {
      question: "Melyik funkció irányul a csatornára?",
      answer: "A kapcsolattartó (fatikus) funkció (pl. üdvözlések, kapcsolatellenőrzés)."
    },
    {
      question: "Mi a metanyelvi funkció célja?",
      answer: "A nyelv magyarázata, a kód tisztázása (pl. szavak jelentésének megbeszélése)."
    }
  ],
  quiz: [
    {
      question: "Ki alkotta meg a kommunikációs folyamat hat tényezőjének és funkciójának elméleti modelljét?",
      options: ["Roman Jakobson", "Edward T. Hall", "Noam Chomsky", "Albert Mehrabian"],
      correctIndex: 0,
      explanation: "A kommunikáció hat alapvető tényezőjét és az ezekhez kapcsolódó funkciókat Roman Jakobson rendszerezte 1960-ban."
    },
    {
      question: "Melyik kommunikációs tényezőhöz kapcsolódik a felhívó (konatív) funkció?",
      options: ["Adó", "Kód", "Vevő", "Csatorna"],
      correctIndex: 2,
      explanation: "A felhívó funkció célja a címzett (vevő) befolyásolása, cselekvésre vagy magatartás-változtatásra késztetése."
    },
    {
      question: "Melyik kommunikációs funkció dominál a következő mondatban: 'Szia, hallasz engem? Ott vagy még?'?",
      options: ["Tájékoztató", "Kapcsolattartó (fatikus)", "Metanyelvi", "Kifejező"],
      correctIndex: 1,
      explanation: "Ez a mondat a kommunikációs csatorna ellenőrzését és fenntartását szolgálja, ami a kapcsolattartó (fatikus) funkció."
    },
    {
      question: "Melyik kommunikációs tényező a kifejező (emocionális) funkció elsődleges fókuszpontja?",
      options: ["A vevő", "A csatorna", "A kontextus", "Az adó"],
      correctIndex: 3,
      explanation: "A kifejező funkció az adó (feladó) belső állapotát, érzelmeit, hangulatát és hozzáállását tükrözi."
    },
    {
      question: "Mit nevezünk a kommunikációelméletben a megértést zavaró, akadályozó tényezők összességének?",
      options: ["Kódolás", "Zaj", "Visszacsatolás", "Kontextus"],
      correctIndex: 1,
      explanation: "A zaj minden olyan fizikai, pszichés vagy szemantikai tényező, amely torzítja vagy gátolja az üzenet célba érését és megértését."
    },
    {
      question: "Melyik kommunikációs funkció érvényesül akkor, amikor a nyelv elemeit, szabályait magyarázzuk (pl. 'A kommunikáció szó latin eredetű')?",
      options: ["Esztétikai", "Tájékoztató", "Metanyelvi", "Felhívó"],
      correctIndex: 2,
      explanation: "A metanyelvi funkció akkor működik, amikor a kódról, azaz magáról a nyelvről vagy a szavak jelentéséről beszélünk."
    },
    {
      question: "Melyik tényező biztosítja az üzenet fizikai továbbítását az adótól a vevőig?",
      options: ["A csatorna", "A kontextus", "A kód", "A visszajelzés"],
      correctIndex: 0,
      explanation: "A csatorna az a fizikai közeg (pl. levegő, telefonvonal, papír), amelyen keresztül az üzenet eljut a címzetthez."
    },
    {
      question: "Melyik kommunikációs funkció kapcsolódik közvetlenül a kontextushoz vagy beszédhelyzethez?",
      options: ["Felhívó", "Tájékoztató (ábrázoló)", "Fatikus", "Esztétikai"],
      correctIndex: 1,
      explanation: "A tájékoztató funkció célja a valóság tényeinek, a kontextusnak a leírása, az információközlés."
    },
    {
      question: "Mit jelent a 'kód' fogalma a kommunikációs folyamatban?",
      options: [
        "A beszélgetés helyszínét",
        "A felek által közösen ismert és használt jelrendszert",
        "A továbbításra használt technikai eszközt",
        "Az adó belső érzelmi állapotát"
      ],
      correctIndex: 1,
      explanation: "A kód az a közös jelrendszer (pl. a magyar nyelv vagy a morzekód), amellyel az üzenet megfogalmazható (kódolható) és megérthető (dekódolható)."
    },
    {
      question: "Melyik funkció érvényesül leginkább egy költői képben, rímben vagy szójátékban?",
      options: ["Kifejező", "Esztétikai (poétikai)", "Fatikus", "Tájékoztató"],
      correctIndex: 1,
      explanation: "Az esztétikai (poétikai) funkció magára az üzenet formájára, hangzására, szépségére és művészi megformáltságára irányul."
    },
    {
      question: "Hogyan nevezzük azt a partnert, aki az üzenetet megfogalmazza, kódolja és elküldi?",
      options: ["Vevő", "Címzett", "Adó", "Kapuőr"],
      correctIndex: 2,
      explanation: "Az adó (vagy feladó) a kommunikáció kezdeményezője, aki az információt kóddá alakítja és elküldi."
    },
    {
      question: "Mi a fatikus (kapcsolattartó) funkció elsődleges célja?",
      options: [
        "Új információk átadása a valóságról",
        "A partner érzelmeinek megváltoztatása",
        "A kapcsolat létrehozása, fenntartása, ellenőrzése vagy lezárása",
        "A nyelvtani hibák kijavítása"
      ],
      correctIndex: 2,
      explanation: "A fatikus funkció nem a tartalmi közlésre, hanem a kapcsolatfelvételre (pl. köszönés), a csatorna tesztelésére (pl. 'halló') vagy a búcsúzásra szolgál."
    },
    {
      question: "Melyik kommunikációs csatorna jellemző a közvetlen, élőszóbeli beszélgetésre?",
      options: ["Optikai kábel", "A levegő hanghullámai", "A papír", "A digitális hálózat"],
      correctIndex: 1,
      explanation: "A személyes, élőszóbeli kommunikációban a csatornát a levegő hanghullámai jelentik, amelyeken keresztül a hang eljut a fülhöz."
    },
    {
      question: "Melyik funkció dominál az alábbi megnyilatkozásban: 'Jaj, de nagyon megijedtem!'?",
      options: ["Tájékoztató", "Kifejező (emocionális)", "Felhívó", "Metanyelvi"],
      correctIndex: 1,
      explanation: "A mondat az adó szubjektív érzelmi reakcióját, ijedtségét fejezi ki felkiáltás formájában."
    },
    {
      question: "Melyik tényező hiányában nem tudja a vevő értelmezni az adó üzenetét, ha a csatorna és a kapcsolat egyébként tökéletes?",
      options: ["Közös kód", "Zajos környezet", "Esztétikai funkció", "Visszacsatolás"],
      correctIndex: 0,
      explanation: "Közös kód (közös nyelv vagy jelrendszer) hiányában a vevő képtelen a kapott jeleket dekódolni és megérteni."
    },
    {
      question: "Melyik kommunikációs funkció dominál a törvényekben, használati utasításokban és parancsokban?",
      options: ["Kapcsolattartó", "Kifejező", "Felhívó (konatív)", "Esztétikai"],
      correctIndex: 2,
      explanation: "Ezek a szövegek a befogadó viselkedését, cselekedeteit kívánják irányítani és szabályozni, ami a felhívó funkció jellemzője."
    },
    {
      question: "Mit nevezünk kontextusnak (beszédhelyzetnek) a kommunikációban?",
      options: [
        "A szavak szótári jelentését",
        "A beszélő és a hallgató közötti fizikai távolságot",
        "A valós vagy gondolati valóságot, amelyben az üzenet értelmezhető",
        "A zavaró tényezők jelenlétét"
      ],
      correctIndex: 2,
      explanation: "A kontextus az a külső valóság, környezet vagy gondolati összefüggés, amely megadja az üzenet pontos jelentését."
    },
    {
      question: "Melyik állítás igaz a nyelvi megnyilatkozások funkcióira vonatkozóan?",
      options: [
        "Minden mondatnak szigorúan csak egyetlen funkciója lehet",
        "A funkciók függetlenek a kommunikációs tényezőktől",
        "Egy közlésben egyszerre több funkció is jelen lehet, de többnyire egy a domináns",
        "A poétikai funkció kizárólag verses formában jelenhet meg"
      ],
      correctIndex: 2,
      explanation: "A valódi kommunikációban a funkciók keverednek (pl. egy tájékoztató mondatban is lehet kifejező erő), de a beszédhelyzet szerint az egyik általában uralkodik."
    },
    {
      question: "Melyik funkció dominál az alábbi mondatban: 'A magyar nyelv az uráli nyelvcsalád tagja.'?",
      options: ["Tájékoztató", "Kifejező", "Felhívó", "Kapcsolattartó"],
      correctIndex: 0,
      explanation: "A mondat objektív tényt közöl a valóságról érzelmek vagy felszólítás nélkül, így a tájékoztató funkció érvényesül."
    },
    {
      question: "Melyik tényezőhöz kapcsolódik az esztétikai (poétikai) funkció Jakobson modelljében?",
      options: ["A csatornához", "Az üzenethez", "A kódhoz", "A kontextushoz"],
      correctIndex: 1,
      explanation: "Az esztétikai funkció közvetlenül magára a megformált üzenetre (annak szerkezetére, szépségére, hangzására) irányul."
    }
  ]
});
