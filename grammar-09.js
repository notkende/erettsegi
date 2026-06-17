// 9. nyelvtan tétel: A nyelvjárások és a nyelvi norma
window.loadGrammarData(9, {
  outline: [
    "A nyelvjárások fogalma és területi tagozódása (regionalizmusok)",
    "A magyar nyelvjárási területek (a 10 fő nyelvjárási régió)",
    "A nyelvjárások hangtani és szókincsbeli sajátosságai (tájszavak)",
    "A nyelvi norma fogalma és szerepe a nemzeti kultúrában",
    "A nyelvjárások helyzete a modern társadalomban és a kétnyelvűség"
  ],
  introduction: `
    <p>A nyelvjárások (dialektusok) a nemzeti nyelv területi alapon elkülönülő változatai. <strong>Míg a szociolektusok társadalmi tagozódást mutatnak, a nyelvjárások földrajzi határokhoz köthetők.</strong> A nyelvi norma a köznyelv általános, kodifikált (szabálykönyvekbe foglalt) szabályrendszere, amely biztosítja az országos megértést és az egységes kommunikációt.</p>
  `,
  biography: `
    <p>A magyar dialektológia (nyelvjárástan) alapjait a 19. században rakták le. Kiemelkedő alakja volt Révai Miklós és később Simonyi Zsigmond. A 20. század második felében a magyar nyelvjárások átfogó térképét (A magyar nyelvjárások atlasza) Benkő Loránd és munkatársai készítették el, rögzítve a hazai és a határon túli nyelvjárások állapotát.</p>
  `,
  keyWorks: [
    {
      title: "A magyar nyelvjárási régiók",
      analysis: `
        <p>A magyar nyelvterületet jelenleg 10 nagy nyelvjárási régióra osztjuk:</p>
        <ol>
          <li><strong>Nyugat-dunántúli</strong> (erős ë-zés, zárt e hangok használata).</li>
          <li><strong>Közép-dunántúli</strong>.</li>
          <li><strong>Dél-dunántúli</strong> (ö-zés jellemzi, pl. <i>kellesz $\\rightarrow$ köll</i>).</li>
          <li><strong>Dél-alföldi</strong>.</li>
          <li><strong>Palóc (Északnyugati)</strong> (illabiális 'a' hang használata, pl. <i>anya $\\rightarrow$ ányá</i>, és zárt á-zás).</li>
          <li><strong>Tisza-Körös-vidéki</strong>.</li>
          <li><strong>Északkeleti</strong> (a mai köznyelv alapja, pl. Kazinczy és Bessenyei lakóhelye miatt).</li>
          <li><strong>Mezőségi (Erdélyi)</strong>.</li>
          <li><strong>Székely</strong> (sajátos szókincs és dallamos hanglejtés).</li>
          <li><strong>Moldvai (Csángó)</strong> (a legarchaikusabb, megőrizte a középkori magyar nyelv elemeit, pl. sziszegő beszéd: s hang helyett sz).</li>
        </ol>
      `
    },
    {
      title: "Nyelvjárási sajátosságok és a nyelvi norma",
      analysis: `
        <p>A nyelvjárások eltérhetnek a köznyelvtől:</p>
        <ul>
          <li><strong>Hangtanilag</strong>: Pl. az <i>ë</i> (zárt e) hang használata, az <i>ö-zés</i> (pl. <i>sör $\\rightarrow$ sör, ökrök $\\rightarrow$ ökrök</i>) vagy az l, r, j hangok nyújtása.</li>
          <li><strong>Szókincsben</strong>: Sajátos szavak használata. Megkülönböztetünk <b>valódi tájszavakat</b> (olyan szavak, amelyek csak ott léteznek, pl. <i>pityóka</i> $\\rightarrow$ burgonya) és <b>jelentésbeli tájszavakat</b> (a szó a köznyelvben is létezik, de ott mást jelent, pl. <i>bogár</i> $\\rightarrow$ légy).</li>
        </ul>
        <p>A **nyelvi norma** az irodalmi és köznyelv mintaszerűnek tartott szabályrendszere, amelyet a Magyar Tudományos Akadémia kodifikál. A norma nem merev, hanem lassan változik, és biztosítja a nyelvi egységet a regionális különbségekkel szemben.</p>
      `
    }
  ],
  styleAndForm: `
    <p>A mai magyar társadalomban a nyelvjárások visszaszorulóban vannak az urbanizáció, az iskolázottság és a média egységesítő hatása miatt. A nyelvészek ma a **kétnyelvűség (diglosszia)** koncepcióját ajánlják: a beszélők tudják használni a saját nyelvjárásukat otthon, de ismerjék és alkalmazzák a köznyelvi normát is a hivatalos helyzetekben.</p>
  `,
  conclusion: `
    <p>A nyelvjárások nem 'helytelen' vagy 'rontott' beszédmódok, hanem nemzeti kultúránk felbecsülhetetlen értékű forrásai, amelyek színesítik és gazdagítják a magyar nyelvet.</p>
  `,
  flashcards: [
    {
      question: "Hány nyelvjárási régióra osztjuk fel a magyar nyelvterületet?",
      answer: "10 nagy régióra (ideértve a székely és csángó területeket is)."
    },
    {
      question: "Mi a különbség a valódi és a jelentésbeli tájszavak között?",
      answer: "A valódi tájszó hangalakjában és jelentésében is egyedi (pl. pityóka), a jelentésbeli tájszó hangalakja köznyelvi, de jelentése helyi (pl. bogár mint légy)."
    },
    {
      question: "Melyik nyelvjárási régió áll a legközelebb a mai köznyelvi normához?",
      answer: "Az északkeleti nyelvjárás (innen indult el a nyelvújítás és a Biblia-fordítás)."
    },
    {
      question: "Mit jelent a nyelvi norma fogalma?",
      answer: "A köznyelv egységesített, akadémiailag elfogadott szabályrendszere, a nyelvhelyesség mintája."
    }
  ],
  quiz: [
    {
      question: "Melyik nyelvjárásunk őrizte meg a leginkább a középkori magyar nyelv archaikus szavait és hangtani szerkezetét?",
      options: ["Nyugat-dunántúli", "Moldvai csángó", "Északkeleti", "Közép-dunántúli"],
      correctIndex: 1,
      explanation: "A moldvai csángó nyelvjárás elszigeteltsége miatt rendkívül archaikus maradt, megőrizte a középkori szókincs elemeit és a sajátos sziszegő ejtésmódot."
    },
    {
      question: "Mi az az 'ö-zés' és melyik nyelvjárásra jellemző leginkább?",
      options: [
        "A szavak végén álló magánhangzók elhagyása",
        "A köznyelvi 'e' hangok helyett zárt 'ö' ejtése (pl. embër helyett embör), a dél-dunántúli nyelvjárásban",
        "A palócok a-zása",
        "Az l hang elhagyása"
      ],
      correctIndex: 1,
      explanation: "Az ö-zés a dunántúli és különösen a dél-dunántúli nyelvjárás sajátossága, ahol sok e hang helyett ö-t ejtenek (pl. mögy, lösz)."
    },
    {
      question: "Hogyan tekint a modern nyelvtudomány a nyelvjárások használatára?",
      options: [
        "A műveltség hiányának, amit teljesen ki kell irtani",
        "Értékes kulturális örökségnek, amely kiegészíti a köznyelvi normát (helyzettől függő kétnyelvűség javasolt)",
        "A hivatalos államigazgatás egyedüli elfogadott nyelvének",
        "A külföldi nyelvek rossz hatásának"
      ],
      correctIndex: 1,
      explanation: "A modern nyelvészet elveti a nyelvjárások megbélyegzését, és a szituatív kétnyelvűséget támogatja (családi körben nyelvjárás, hivatalos helyen köznyelv)."
    }
  ]
});
