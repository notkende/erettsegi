// 17. nyelvtan tétel: A beszéd megszerkesztésének folyamata
window.loadGrammarData(17, {
  outline: [
    "A szónoki felkészülés jelentősége és fázisai",
    "Az anyaggyűjtés és a téma meghatározása (inventio)",
    "A beszéd vázlatának és szerkezetének elkészítése (dispositio)",
    "A megfogalmazás, a stílus és az alakzatok kidolgozása (elocutio)",
    "A beszéd memorizálása (memoria) és a nyilvános előadás (pronuntiatio)"
  ],
  introduction: `
    <p>A hatásos és emlékezetes szónoki beszéd ritkán a pillanat szüleménye; alapos és módszeres felkészülés eredménye. <strong>A klasszikus retorika a beszéd megszerkesztésének folyamatát öt egymásra épülő lépésben határozta meg (officia oratoris), a gondolat megszületésétől a szónoki emelvényen való megszólalásig.</strong></p>
  `,
  biography: `
    <p>Az öt retorikai lépést a római retorikában rendszerezték véglegesen, legpontosabban a Kr. e. 80 körül keletkezett, ismeretlen szerzőjű 'Rhetorica ad Herennium' (Herenniusnak ajánlott retorika) című mű írja le, amelyet sokáig tévesen Cicerónak tulajdonítottak. Ez a felosztás a mai napig a prezentációkészítés és a nyilvános beszéd oktatásának alapját képezi.</p>
  `,
  keyWorks: [
    {
      title: "A felkészülés első három fázisa (Gondolattól a leírt szövegig)",
      analysis: `
        <p>A beszéd megírásának első szakasza szellemi és írói munkát igényel:</p>
        <ul>
          <li><strong>1. Inventio (Anyaggyűjtés, feltalálás)</strong>: A téma kiválasztása, a cél megfogalmazása és a szükséges információk összegyűjtése (olvasás, kutatás, gondolatébresztő kérdések). Ebben a fázisban dől el, hogy milyen logikai és érzelmi érveket fogunk használni.</li>
          <li><strong>2. Dispositio (Elrendezés, vázlatkészítés)</strong>: Az összegyűjtött anyag logikai rendbe szervezése. A beszéd klasszikus részeinek kialakítása (bevezetés, elbeszélés, tétel, bizonyítás, cáfolat, befejezés). A jó dispositio biztosítja a beszéd fonalának követhetőségét.</li>
          <li><strong>3. Elocutio (Megfogalmazás, stílus)</strong>: A gondolatok szavakba öntése. A megfelelő szókincs kiválasztása, a mondatok ritmusának kialakítása és a retorikai stilisztikai eszközök (képek, alakzatok) beépítése a hatás növelése érdekében.</li>
        </ul>
      `
    },
    {
      title: "A felkészülés utolsó két fázisa (Előadásra való felkészülés)",
      analysis: `
        <p>A leírt beszéd puszta papír; a szónoknak életre kell keltenie azt a hallgatóság előtt:</p>
        <ul>
          <li><strong>4. Memoria (Elmés megjegyzés, memorizálás)</strong>: A beszéd fejben tartása, megtanulása. Az ókorban különböző emlékezőtechnikákat (pl. helyek módszere – Loci-módszer) alkalmaztak. A modern retorikában nem a szó szerinti bemagolás a cél, hanem a kulcsszavak és a logikai ív biztos rögzítése, ami lehetővé teszi a természetes, rugalmas beszédet.</li>
          <li><strong>5. Pronuntiatio (Előadás, megszólaltatás)</strong>: Maga a beszéd elmondása. A hangorgánum (artikuláció, tempó, hangsúlyok) és a testbeszéd (gesztusok, tekintet, kiállás, térhasználat) összehangolt, hiteles működtetése.</li>
        </ul>
      `
    }
  ],
  styleAndForm: `
    <p>A felkészülési folyamat során a szónoknak mindvégig szem előtt kell tartania a **hallgatóság összetételét** és a beszédhelyzetet (alkalmazkodás elve - aptum), hogy a stílus és az érvek célba érjenek.</p>
  `,
  conclusion: `
    <p>Az öt retorikai lépés tudatos követése strukturált gondolkodásra nevel, csökkenti a lámpalázat, és garantálja, hogy a beszéd logikus, összeszedett és meggyőző legyen.</p>
  `,
  flashcards: [
    {
      question: "Mi a beszédkészítés 5 klasszikus retorikai lépése (latinul)?",
      answer: "Inventio, dispositio, elocutio, memoria, pronuntiatio."
    },
    {
      question: "Mit jelent az 'inventio' fázis?",
      answer: "Az anyaggyűjtést, a téma kijelölését és a megfelelő érvek összegyűjtését."
    },
    {
      question: "Mi a 'dispositio' fázis feladata?",
      answer: "A beszéd szerkezetének felépítése, a gondolatok és érvek logikai vázlatba rendezése."
    },
    {
      question: "Miért fontos a 'pronuntiatio' fázis a szónoklat sikerében?",
      answer: "Mert az előadásmód (hanghordozás, gesztusok, testtartás) hitelesíti a leírt szavakat és közvetíti az érzelmeket."
    }
  ],
  quiz: [
    {
      question: "Melyik retorikai lépés felel meg a beszéd stilisztikai kidolgozásának, a szavak megválasztásának és a retorikai alakzatok beépítésének?",
      options: ["Inventio", "Dispositio", "Elocutio", "Memoria"],
      correctIndex: 2,
      explanation: "Az elocutio a megfogalmazás és a stílus szintje, ahol a szónok formába önti a dispositio során elrendezett gondolatait."
    },
    {
      question: "Hogyan érdemes készülni a modern retorika szerint a 'memoria' (memorizálás) fázisban?",
      options: [
        "A szöveg szóról szóra történő bemagolásával",
        "A beszéd logikai ívének és kulcsszavainak megjegyzésével, ami szabad előadást tesz lehetővé",
        "A beszéd teljes felolvasásával a papírról",
        "A felkészülés teljes kihagyásával"
      ],
      correctIndex: 1,
      explanation: "A szószerinti bemagolás merevvé és monotonná teheti a beszédet. A kulcsszavas vázlat megjegyzése természetes és rugalmas előadást biztosít."
    },
    {
      question: "Melyik műben fektették le először szisztematikusan a beszédkészítés öt retorikai lépését Kr. e. 80 körül?",
      options: ["Arisztotelész: Retorika", "Rhetorica ad Herennium", "Cicero: De oratore", "Kölcsey: Szónoki beszédek"],
      correctIndex: 1,
      explanation: "A Rhetorica ad Herennium c. latin nyelvű kézikönyv tartalmazza a szónok feladatainak (officia oratoris) ezt az ötfázisú klasszikus felosztását."
    }
  ]
});
