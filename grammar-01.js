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
      question: "Melyik kommunikációs funkció dominál a következő mondatban: 'Kérlek, add ide a sót!'?",
      options: ["Tájékoztató", "Kifejező", "Felhívó", "Fatikus"],
      correctIndex: 2,
      explanation: "A mondat kérést fejez ki, a vevő viselkedését befolyásolja, ez a felhívó (konatív) funkció."
    },
    {
      question: "Mit jelent a kommunikációban a 'zaj'?",
      options: ["Csak a hangos kiabálást", "Bármilyen zavaró tényezőt, ami akadályozza az üzenet célba érését", "A közös kódot", "A visszajelzést"],
      correctIndex: 1,
      explanation: "Zajnak nevezünk minden olyan külső vagy belső zavart (pl. rossz térerő, fáradtság, fizikai zaj), ami rontja az üzenet átvitelének hatékonyságát."
    },
    {
      question: "Melyik tényezőhöz kapcsolódik a kifejező (emocionális) funkció?",
      options: ["A vevőhöz", "A csatornához", "Az adóhoz", "A kódhoz"],
      correctIndex: 2,
      explanation: "A kifejező funkció az adó (feladó) belső állapotát, érzelmeit közvetíti, így az adóhoz kapcsolódik."
    }
  ]
});
