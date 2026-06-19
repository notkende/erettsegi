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
      question: "Hogyan nevezzük a nemzeti nyelv területi, földrajzi alapon elkülönülő változatait?",
      options: ["Szociolektusok", "Dialektusok (nyelvjárások)", "Jargonok", "Argó"],
      correctIndex: 1,
      explanation: "A földrajzi elhelyezkedés szerint tagolódó nyelvváltozatokat dialektusoknak vagy nyelvjárásoknak nevezzük."
    },
    {
      question: "Hány nagy nyelvjárási régióra osztja fel a modern magyar nyelvészet a magyar nyelvterületet?",
      options: ["3", "5", "10", "15"],
      correctIndex: 2,
      explanation: "A magyar nyelvterületet jelenleg 10 nagy nyelvjárási régióra tagoljuk (pl. palóc, székely, nyugat-dunántúli stb.)."
    },
    {
      question: "Melyik nyelvjárásunk áll történelmileg a legközelebb a mai köznyelvi normához?",
      options: ["Székely", "Nyugat-dunántúli", "Északkeleti", "Palóc"],
      correctIndex: 2,
      explanation: "Az északkeleti nyelvjárás területéről indult el a Biblia-fordítás és a nyelvújítás, ezért ez lett a mai köznyelvünk alapja."
    },
    {
      question: "Melyik nyelvjárásunkra jellemző a zárt 'ë' hang rendszeres megkülönböztetése a nyílt 'e' hangtól?",
      options: ["Nyugat-dunántúli", "Palóc", "Székely", "Moldvai csángó"],
      correctIndex: 0,
      explanation: "A nyugat-dunántúli (és részben a déli) nyelvjárásokban élesen megkülönböztetik a zárt ë-t (pl. embër, mentek) a nyílttól."
    },
    {
      question: "Mi jellemzi leginkább a palóc (északnyugati) nyelvjárást hangtanilag?",
      options: [
        "Erős ö-zés",
        "Az illabiális (ajakkerekítés nélküli) 'a' hang használata és a zárt á-zás",
        "A mássalhangzók sziszegő ejtése (s helyett sz)",
        "Az l hang teljes elhagyása a szavak végéről"
      ],
      correctIndex: 1,
      explanation: "A palócok a köznyelvi 'a' hangot ajakkerekítés nélkül ejtik, ami szinte az 'á'-hoz közelít (pl. anya $\rightarrow$ ányá)."
    },
    {
      question: "Melyik nyelvjárási régióra jellemző az 'ö-zés' (az e hangok egy részének ö-ként ejtése, pl. kellesz $\rightarrow$ köll)?",
      options: ["Palóc", "Dél-dunántúli", "Északkeleti", "Moldvai csángó"],
      correctIndex: 1,
      explanation: "Az ö-zés a dél-dunántúli és a dél-alföldi nyelvjárások egyik legszembetűnőbb hangtani jellemzője."
    },
    {
      question: "Melyik a legarchaikusabb, a középkori magyar nyelv elemeit és a sziszegő beszédet leginkább megőrző nyelvjárásunk?",
      options: ["Székely", "Mezőségi (erdélyi)", "Moldvai csángó", "Tisza-Körös-vidéki"],
      correctIndex: 2,
      explanation: "A moldvai csángó nyelvjárás a földrajzi elszigeteltség miatt megőrizte a honfoglalás és középkor utáni nyelvállapot számos vonását."
    },
    {
      question: "Hogyan nevezzük azokat a szavakat, amelyek csak bizonyos nyelvjárásokban léteznek, a köznyelvben nincsenek meg (pl. pityóka, sing)?",
      options: ["Jelentésbeli tájszavak", "Valódi tájszavak", "Jargon szavak", "Idegen szavak"],
      correctIndex: 1,
      explanation: "A valódi tájszavak hangalakjukban és jelentésükben is teljesen eltérnek a köznyelvi szavaktól (pl. pityóka = burgonya)."
    },
    {
      question: "Mit jelent a 'jelentésbeli tájszó' fogalma?",
      options: [
        "Olyan szó, amelynek a kiejtése helyi, de leírva köznyelvi",
        "Olyan szó, amely a köznyelvben is él, de a nyelvjárásban más a jelentése (pl. bogár mint légy)",
        "Olyan szó, amelynek nincs konkrét szótári jelentése",
        "Kizárólag a fiatalok szlengjében használt kifejezés"
      ],
      correctIndex: 1,
      explanation: "Jelentésbeli tájszó esetén a hangalak megegyezik egy köznyelvi szóval, de helyben mást jelent (pl. a bogár szót a légyre értik)."
    },
    {
      question: "Mit jelent a 'nyelvi norma' fogalma?",
      options: [
        "A nyelvjárások elavult szavainak összességét",
        "A köznyelv egységesített, szabálykönyvekbe foglalt szabályrendszerét, amely az országos megértést biztosítja",
        "A szleng kifejezések kötelező iskolai használatát",
        "A külföldi nyelvek nyelvtani szabályainak magyarítását"
      ],
      correctIndex: 1,
      explanation: "A nyelvi norma a köznyelv kodifikált (MTA által elfogadott) szabályrendszere, amely zsinórmértékként szolgál az igényes kommunikációban."
    },
    {
      question: "Melyik intézmény felelős a magyar nyelvi norma és a helyesírási szabályok hivatalos kodifikációjáért?",
      options: ["Magyar Nemzeti Múzeum", "Magyar Tudományos Akadémia (MTA)", "Országos Széchényi Könyvtár", "Nemzeti Színház"],
      correctIndex: 1,
      explanation: "A magyar nyelvi norma és a helyesírási szabályzat őre és kodifikálója a Magyar Tudományos Akadémia."
    },
    {
      question: "Mi a modern nyelvtudomány álláspontja a nyelvjárások használatáról?",
      options: [
        "Helytelen és műveletlen beszédmód, amelyet teljesen ki kell irtani",
        "Értékes kulturális és nyelvi örökség, amely gazdagítja a nemzeti nyelvet",
        "A hivatalos államigazgatás és törvénykezés kizárólagos nyelve",
        "Idegen országok által ránk erőltetett beszédstílus"
      ],
      correctIndex: 1,
      explanation: "A modern nyelvészet elveti a nyelvjárások megbélyegzését, és azokat a nemzeti kultúra és nyelv egyenrangú, értékes részeinek tartja."
    },
    {
      question: "Mit jelent a nyelvjárásokkal kapcsolatban javasolt 'kétnyelvűség' (diglosszia) elve?",
      options: [
        "Minden magyar állampolgárnak kötelező két idegen nyelvet beszélnie",
        "A beszélők családi körben bátran használhatják nyelvjárásukat, de hivatalos helyzetben a köznyelvi normát alkalmazzák",
        "A nyelvjárások használatát teljesen be kell tiltani a nyilvánosság előtt",
        "A nyelvjárások és a köznyelv szavait folyamatosan össze kell keverni"
      ],
      correctIndex: 1,
      explanation: "A szituatív kétnyelvűség (diglosszia) lehetővé teszi a nyelvjárás megőrzését a magánéletben, miközben biztosítja a köznyelvi érvényesülést a közéletben."
    },
    {
      question: "Melyik tényező játszik leginkább szerepet a nyelvjárások mai visszaszorulásában?",
      options: [
        "Az urbanizáció, az iskolázottság terjedése és a tömegmédia egységesítő hatása",
        "A nyelvjárási szavak használatának törvényi büntetése",
        "Az írásbeliség és a könyvkiadás teljes eltűnése a falvakból",
        "A latin nyelv kötelező visszaállítása az iskolákban"
      ],
      correctIndex: 0,
      explanation: "A modern mobilitás, a média (tévé, internet) és az egységes iskolarendszer természetes módon koptatja a regionális nyelvi különbségeket."
    },
    {
      question: "Melyik szó valódi tájszó az alábbiak közül?",
      options: ["kutya", "pityóka", "bogár", "asztal"],
      correctIndex: 1,
      explanation: "A 'pityóka' (burgonya) valódi tájszó, míg a 'bogár' a székelységben jelentésbeli tájszó (mert legyet jelent, de maga a hangalak a köznyelvben is él)."
    },
    {
      question: "Ha a dél-alföldi nyelvjárásban a 'szőlő' szót 'szűlő'-nek ejtik (ű-zés), az az eltérés melyik szintjére példa?",
      options: ["Nyelvtani szint", "Hangtani szint", "Szókincsbeli szint", "Stilisztikai szint"],
      correctIndex: 1,
      explanation: "A magánhangzók eltérő ejtése (pl. í-zés, ö-zés, ű-zés) a nyelvjárások hangtani szintű sajátossága."
    },
    {
      question: "Melyik tudományos kiadványban rögzítették a magyar nyelvterület nyelvjárási adatait térképeken a 20. században?",
      options: [
        "A magyar nyelvjárások atlasza",
        "Magyar Helyesírási Szabályzat",
        "Erdélyi Tájszótár",
        "A magyar nyelv etimológiai szótára"
      ],
      correctIndex: 0,
      explanation: "A magyar nyelvjárások atlasza egy többkötetes tudományos munka, amely térképeken ábrázolja a különböző tájszavak és hangtani jelenségek földrajzi eloszlását."
    },
    {
      question: "Melyik határon túli nyelvjárásunkra jellemző a szomszédos nyelvek erős hatása, a dallamos hanglejtés és a gazdag, egyedi szókincs?",
      options: ["Nyugat-dunántúli", "Palóc", "Székely", "Tisza-Körös-vidéki"],
      correctIndex: 2,
      explanation: "A székely nyelvjárás (és az erdélyi régió) dallamos hanglejtéséről, sajátos mesemondó stílusáról és gazdag kifejezésvilágáról ismert."
    },
    {
      question: "Melyik szó jelentésbeli tájszó a székely nyelvjárásban, ahol 'posztónadrág' értelemben használják?",
      options: ["pityóka", "harisnya", "sing", "guba"],
      correctIndex: 1,
      explanation: "A székelyeknél a 'harisnya' hagyományosan a szorosan simuló gyapjú- vagy posztónadrágot jelenti, így ez a szó jelentésbeli tájszó."
    },
    {
      question: "Melyik állítás igaz a nyelvi norma változékonyságára vonatkozóan?",
      options: [
        "A norma teljesen örök és változatlan, soha nem módosulhat",
        "A norma lassan és rugalmasan követi a nyelv természetes fejlődését és a művelt köznyelvi szokásokat",
        "A normát a politikai pártok határozzák meg törvényekkel",
        "A norma csak az írott sajtóra vonatkozik, a beszéltre nem"
      ],
      correctIndex: 1,
      explanation: "A nyelvi norma nem merev dogma; a nyelvészek időről időre felülvizsgálják (pl. a helyesírási szabályzat új kiadásai), igazítva az élő nyelvhasználathoz."
    }
  ]
});
