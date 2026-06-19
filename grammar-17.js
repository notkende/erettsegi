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
      question: "Mi a klasszikus retorikában a beszéd megszerkesztésének és bemutatásának öt egymásra épülő lépése (officia oratoris) időrendben?",
      options: ["Dispositio, inventio, elocutio, memoria, pronuntiatio", "Inventio, dispositio, elocutio, memoria, pronuntiatio", "Inventio, elocutio, dispositio, pronuntiatio, memoria", "Elocutio, inventio, dispositio, memoria, pronuntiatio"],
      correctIndex: 1,
      explanation: "A helyes időrendi sorrend: 1. inventio (anyaggyűjtés), 2. dispositio (elrendezés), 3. elocutio (megfogalmazás), 4. memoria (memorizálás), 5. pronuntiatio (előadás)."
    },
    {
      question: "Mit jelent az \"Inventio\" fázisa a beszéd megszerkesztése során?",
      options: ["A beszéd stilisztikai díszítését", "Az összegyűjtött anyag logikai elrendezését", "A téma kijelölését, az anyaggyűjtést és a megfelelő érvek feltalálását", "A beszéd szóról szóra történő megtanulását"],
      correctIndex: 2,
      explanation: "Az inventio (feltalálás, anyaggyűjtés) során a szónok kijelöli a beszéd témáját és célját, kutatást végez, és összegyűjti a mondandóját alátámasztó érveket."
    },
    {
      question: "Melyik retorikai lépés felel meg az összegyűjtött anyag logikai rendbe szervezésének, a vázlat elkészítésének?",
      options: ["Inventio", "Dispositio", "Elocutio", "Memoria"],
      correctIndex: 1,
      explanation: "A dispositio (elrendezés) feladata a gondolatok és érvek logikus, áttekinthető struktúrába, vázlatba rendezése."
    },
    {
      question: "Melyek a beszéd klasszikus szerkezeti részei a dispositio (elrendezés) fázisában?",
      options: ["bevezetés, elbeszélés, tétel, bizonyítás, cáfolat, befejezés", "cím, bevezetés, tárgyalás, befejezés", "inventio, dispositio, elocutio, memoria, pronuntiatio", "logosz, ethosz, pathosz"],
      correctIndex: 0,
      explanation: "A klasszikus retorikai szerkezet részei a bevezetés (exordium), elbeszélés (narratio), tétel (propositio), bizonyítás (argumentatio), cáfolat (refutatio) és befejezés (peroratio)."
    },
    {
      question: "Melyik fázisban foglalkozik a szónok a gondolatok szavakba öntésével, a stílus és a retorikai alakzatok kidolgozásával?",
      options: ["Inventio", "Dispositio", "Elocutio", "Pronuntiatio"],
      correctIndex: 2,
      explanation: "Az elocutio (megfogalmazás, stílus) fázisában alakítja ki a szónok a beszéd nyelvi formáját, kiválasztva a megfelelő szavakat és stilisztikai eszközöket."
    },
    {
      question: "Mi a \"Memoria\" szakaszának elsődleges célja a modern retorika szerint?",
      options: ["A teljes beszéd szóról szóra történő, merev bemagolása", "A beszéd logikai ívének és kulcsszavainak rögzítése a rugalmas, természetes előadás érdekében", "A beszéd papírról való hibátlan felolvasása", "A hallgatóság reakcióinak előre megírt memorizálása"],
      correctIndex: 1,
      explanation: "A modern retorikában a memoria célja a logikai vázlat és a kulcsszavak megjegyzése, ami lehetővé teszi az interaktív és természetes előadásmódot a szó szerinti magolás helyett."
    },
    {
      question: "Melyik klasszikus retorikai fázis jelenti a beszéd tényleges elmondását, a nonverbális kódok és a beszédtechnika alkalmazását?",
      options: ["Elocutio", "Memoria", "Pronuntiatio", "Dispositio"],
      correctIndex: 2,
      explanation: "A pronuntiatio (előadás, megszólaltatás) a beszéd elhangzásának fázisa, ahol a hangorgánum és a testbeszéd működtetésével kel életre a szöveg."
    },
    {
      question: "Melyik ókori műben rendszerezték először szisztematikusan a szónoki felkészülés öt lépését (officia oratoris) Kr. e. 80 körül?",
      options: ["Arisztotelész: Retorika", "Rhetorica ad Herennium", "Cicero: De oratore", "Quintilianus: Szónoklattan"],
      correctIndex: 1,
      explanation: "A Rhetorica ad Herennium (Herenniusnak ajánlott retorika) az az ismeretlen szerzőjű római mű, amely először rögzítette a szónok öt feladatát (lépését)."
    },
    {
      question: "Hogyan nevezik a klasszikus retorikában a szónok feladatait, azaz a beszédkészítés és előadás lépéseit?",
      options: ["officia oratoris", "genera causarum", "partes orationis", "ornatus"],
      correctIndex: 0,
      explanation: "Az öt lépést latinul officia oratoris-nak, azaz a szónok feladatainak/kötelességeinek nevezik."
    },
    {
      question: "Melyik fázishoz tartozik a Loci-módszer (a helyek módszere) nevű ókori emlékezőtechnika?",
      options: ["Inventio", "Dispositio", "Memoria", "Pronuntiatio"],
      correctIndex: 2,
      explanation: "A Loci-módszer egy klasszikus mnemonikai technika, amelyet a szónokok a beszéd részeinek memorizálására (memoria) használtak képzeletbeli helyszínek segítségével."
    },
    {
      question: "Mit jelent a beszédkészítés során az \"aptum\" elve?",
      options: ["A beszéd stílusának és tartalmának igazítása a hallgatósághoz és a beszédhelyzethez", "A beszéd minél gyorsabb megírását", "Az érvek kizárólag logikai alapon történő felépítését", "A beszéd elmondásának hangerejét"],
      correctIndex: 0,
      explanation: "Az aptum az illőség, az alkalmazkodás elve: a beszéd minden elemének meg kell felelnie a hallgatóság sajátosságainak és a beszédhelyzetnek."
    },
    {
      question: "Mi a dispositio (elrendezés) fázisában a \"bizonyítás\" (argumentatio) szerepe?",
      options: ["A hallgatóság üdvözlése és jóindulatának megnyerése", "A szónok álláspontját alátámasztó érvek és adatok bemutatása", "Az ellenfél érveinek cáfolata", "A beszéd érzelmi lezárása"],
      correctIndex: 1,
      explanation: "A bizonyítás a beszéd azon része, ahol a szónok kifejti az állítását alátámasztó, logikus és meggyőző érveit."
    },
    {
      question: "Mit jelent a dispositio (elrendezés) fázisában a \"cáfolat\" (refutatio)?",
      options: ["Saját korábbi kijelentéseink visszavonása", "Az ellenfél vagy az eltérő vélemények érveinek logikus cáfolata, gyengítése", "A beszéd bevezetőjének megírása", "A hallgatóság kérdéseinek elutasítása"],
      correctIndex: 1,
      explanation: "A cáfolat során a szónok megvizsgálja az ellenérveket, és logikus úton rámutat azok gyengeségére vagy érvénytelenségére."
    },
    {
      question: "Melyik fázishoz tartozik a helyes artikuláció, a tempó és a hangerő szabályozása?",
      options: ["Elocutio", "Memoria", "Pronuntiatio", "Inventio"],
      correctIndex: 2,
      explanation: "A hanghordozás, artikuláció és a beszédtechnika mind a pronuntiatio (előadás) fázisának gyakorlati részét képezik."
    },
    {
      question: "Ha egy szónok beszédet ír és éppen a megfelelő szinonimákat, metaforákat és mondatszerkezeteket választja ki, melyik fázisban jár?",
      options: ["Inventio", "Dispositio", "Elocutio", "Memoria"],
      correctIndex: 2,
      explanation: "A nyelvi megformálás, a szavak kiválasztása és a díszítés az elocutio (stílus/megfogalmazás) feladatköre."
    },
    {
      question: "Mi történik, ha egy szónok teljesen kihagyja az \"inventio\" fázist?",
      options: ["A beszéd túl szép stílusú lesz", "A beszéd nem épül fel logikusan", "A beszéd üres, tartalom és megfelelő érvek nélküli marad", "A beszéd nem lesz elmondható"],
      correctIndex: 2,
      explanation: "Az inventio az anyaggyűjtés és érvek összegyűjtése. Ha ez elmarad, a szónoknak nem lesz megalapozott mondanivalója, a beszéd üres marad."
    },
    {
      question: "Mi a \"bevezetés\" (exordium) fő funkciója a beszéd dispositio (elrendezés) fázisában?",
      options: ["A bizonyítékok részletes elemzése", "A hallgatóság figyelmének és jóindulatának megnyerése (benevolentia captanda), a téma előkészítése", "Az ellenérvek cáfolata", "A beszéd rövid összefoglalása a végén"],
      correctIndex: 1,
      explanation: "A bevezetés (exordium) legfontosabb feladata a figyelem felkeltése, a jóindulat elnyerése (benevolentia captanda) és a téma felvezetése."
    },
    {
      question: "Miért elengedhetetlen a \"pronuntiatio\" (előadás) próbája a felkészülés során?",
      options: ["Mert a szónok itt dönti el, miről fog szólni a beszéd", "Mert a próba segít összehangolni a szöveget a testbeszéddel, a hanghordozással és az időkerettel", "Mert ekkor történik az anyaggyűjtés", "Mert ekkor írja meg a beszéd vázlatát"],
      correctIndex: 1,
      explanation: "A beszéd elmondásának próbája (pronuntiatio) segít elkerülni az előadói hibákat, csiszolja a testbeszédet és segít betartani az időkeretet."
    },
    {
      question: "Melyik állítás igaz a \"dispositio\" (elrendezés) fázisára?",
      options: ["Ez a fázis kizárólag a hangos felolvasást jelenti", "Ekkor történik a szavak stilisztikai csiszolása", "Ebben a fázisban dől el a beszéd logikai váza, tagolása és az érvek sorrendje", "Ez a fázis a könyvtári anyaggyűjtést jelenti"],
      correctIndex: 2,
      explanation: "A dispositio a vázlatkészítés és az elrendezés szakasza, ahol eldől a beszéd logikai menete és az érvelés szerkezete."
    },
    {
      question: "Milyen fázisban van a szónok, amikor a beszéde elmondása közben tudatosan használja a szemkontaktust és a gesztusokat?",
      options: ["Elocutio", "Memoria", "Pronuntiatio", "Inventio"],
      correctIndex: 2,
      explanation: "A gesztusok, a szemkontaktus és a testbeszéd a beszéd elhangzásakor, azaz a pronuntiatio (előadás) fázisában működnek."
    }
  ]
});
