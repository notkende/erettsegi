// 18. nyelvtan tétel: Szóképek felismerése, elemzése és értelmezése
window.loadGrammarData(18, {
  outline: [
    "A szóképek (trópusok) fogalma és stilisztikai szerepe",
    "A hasonlóságon alapuló szóképek (metafora, megszemélyesítés, szinesztézia)",
    "A hasonlat (mint stilisztikai eszköz és kapcsolat a szóképekkel)",
    "Az érintkezésen alapuló szóképek (metonímia és szinekdoché)",
    "Összetett szóképek: szimbólum és allegória"
  ],
  introduction: `
    <p>A szóképek (trópusok) olyan stilisztikai eszközök, amelyekben **egy szót vagy kifejezést nem a megszokott, szószerinti jelentésében**, hanem egy másik fogalommal való kapcsolat (hasonlóság vagy érintkezés) révén átvitt jelentésben használunk. <strong>A szóképek a költői nyelv alapkövei, amelyek sűrítik a jelentést, érzelmi többletet hordoznak és képszerűvé teszik a leírást.</strong></p>
  `,
  biography: `
    <p>A szóképek és retorikai alakzatok rendszerezése az ókori retorikáig nyúlik vissza (Arisztotelész és Quintilianus munkássága). Quintilianus határozta meg a trópus fogalmát mint a szó saját jelentésének művészi megváltoztatását. A modern stilisztika és kognitív nyelvészet (pl. George Lakoff) kimutatta, hogy a metaforák nemcsak költői díszek, hanem az emberi gondolkodás alapvető logikai sémái.</p>
  `,
  keyWorks: [
    {
      title: "Hasonlóságon alapuló szóképek",
      analysis: `
        <p>Ezek a szóképek két fogalom közötti valóságos vagy képzeletbeli hasonlóságon (közös tulajdonságon) alapulnak:</p>
        <ul>
          <li><strong>Metafora</strong>: Két fogalom azonosítása közös tulajdonságuk alapján. Lehet <i>teljes metafora</i> (mindkét tag jelen van: <i>„királyom, te napom”</i>) vagy <i>egytagú metafora</i> (csak a kép szerepel: <i>„zöld tenger”</i> - a fűre utalva).</li>
          <li><strong>Megszemélyesítés (personificatio)</strong>: Élettelen dolgok, természeti jelenségek felruházása emberi tulajdonságokkal, cselekvésekkel (pl. <i>„beszél a fák suhogása”</i>, <i>„alszik a város”</i>).</li>
          <li><strong>Szinesztézia</strong>: Különböző érzékterületek (látás, hallás, tapintás, ízlelés) összekapcsolása egy képben (pl. <i>„selymes hang”</i>, <i>„sűrű csend”</i>, <i>„fényes illat”</i>).</li>
          <li><strong>Hasonlat (comparatio)</strong>: Bár szigorúan véve nem szókép (mert nem történik jelentésátvitel, a két tag külön megmarad), szorosan kapcsolódik hozzájuk. Két dolgot hasonlít össze a <i>mint, mintha, -ként</i> kötőszavakkal (pl. <i>„szalad, mint a szél”</i>).</li>
        </ul>
      `
    },
    {
      title: "Érintkezésen alapuló és összetett szóképek",
      analysis: `
        <p>Ezek a szóképek logikai, térbeli, időbeli vagy anyagbeli kapcsolatokon (érintkezésen) alapulnak:</p>
        <ul>
          <li><strong>Metonímia (névcsere)</strong>: Két fogalom közötti érintkezésen alapul. Típusai:
            <ul>
              <li>Térbeli érintkezés: pl. <i>„alszik a ház”</i> (a házban lakók).</li>
              <li>Időbeli érintkezés: pl. <i>„a huszadik század rettegése”</i>.</li>
              <li>Anyagbeli érintkezés: pl. <i>„vasra verik”</i> (bilincsre).</li>
              <li>Ok-okozati érintkezés: pl. <i>„olvassa Aranyt”</i> (Arany János műveit).</li>
            </ul>
          </li>
          <li><strong>Szinekdoché (együttérzés)</strong>: A metonímia alfaja, amely a rész-egész vagy nem-faj viszonyán alapul, pl. <i>„ezer fő”</i> (emberek), <i>„nincs egy fia deszkám”</i> (koporsóm), <i>„a magyar győzött”</i> (a magyar csapat).</li>
          <li><strong>Szimbólum (jelkép)</strong>: Valamilyen elvont gondolat vagy érzés érzéki jele, képe. Jelentése többrétegű, homályos, nem fordítható le egyetlen szóra (pl. Ady Endre: <i>A fekete zongora</i>).</li>
          <li><strong>Allegória</strong>: Egy elvont gondolat, erkölcsi eszme képsorozaton vagy egy egész történeten keresztül történő részletes bemutatása (pl. Petőfi: <i>Föltámadott a tenger</i> - a tenger a nép, a gálya a zsarnokok).</li>
        </ul>
      `
    }
  ],
  styleAndForm: `
    <p>A szóképek elemzésekor meg kell határoznunk a **kiinduló fogalmat (tenor)**, az **átvitt képet (vehicle)** és a közöttük lévő **közös tulajdonságot (ground)**, valamint vizsgálnunk kell a szövegkörnyezetben betöltött hangulati, stilisztikai szerepüket.</p>
  `,
  conclusion: `
    <p>A szóképek felismerése és helyes értelmezése elengedhetetlen az irodalmi művek mélyebb megértéséhez, az esztétikai élmény befogadásához és a kreatív írás elsajátításához.</p>
  `,
  flashcards: [
    {
      question: "Mi a metafora és melyek a fő típusai?",
      answer: "Két fogalom azonosítása közös tulajdonság alapján; típusai: kéttagú (teljes) és egytagú (csonka) metafora."
    },
    {
      question: "Melyik szóképben kapcsolódnak össze a különböző érzékterületek?",
      answer: "A szinesztéziában (pl. 'szúrós szag' - tapintás + szaglás)."
    },
    {
      question: "Mi a különbség a metonímia és a szinekdoché között?",
      answer: "A metonímia általános fogalmi érintkezésen alapul (pl. szerző a mű helyett), a szinekdoché kifejezetten rész-egész vagy nem-faj viszonyra épül (pl. 'százezer láb menetel')."
    },
    {
      question: "Mi az allegória?",
      answer: "Egy elvont gondolat, eszme részletes bemutatása képsorozaton vagy egy egész történeten keresztül."
    }
  ],
  quiz: [
    {
      question: "Mi a szóképek (trópusok) alapvető stilisztikai jellemzője?",
      options: ["A szavak szószerinti jelentésének kizárólagos alkalmazása", "Egy szó vagy kifejezés átvitt (nem szószerinti) jelentésben való használata valamilyen összefüggés alapján", "A szavak hangalakjának megváltoztatása", "A mondatok helyesírási szabályainak áthágása"],
      correctIndex: 1,
      explanation: "A szóképek lényege, hogy egy kifejezést átvitt jelentésben használunk, egy másik fogalommal való hasonlósági vagy érintkezési kapcsolat alapján."
    },
    {
      question: "Melyik szókép alapul két fogalom azonosításán valamilyen közös tulajdonság (hasonlóság) alapján?",
      options: ["Metonímia", "Metafora", "Szinekdoché", "Eufemizmus"],
      correctIndex: 1,
      explanation: "A metafora hasonlóságon alapuló szókép, amely két fogalmat azonosít egy vagy több közös tulajdonságuk alapján."
    },
    {
      question: "Milyen metaforáról beszélünk, ha mind a kiinduló fogalom (azonosított), mind az átvitt kép (azonosító) megjelenik a szövegben?",
      options: ["Egytagú (csonka) metafora", "Kéttagú (teljes) metafora", "Szinesztézia", "Szinekdoché"],
      correctIndex: 1,
      explanation: "A kéttagú (teljes) metaforában mindkét tag jelen van (pl. „Petőfi: királyom, te napom” – ahol a király a naphoz van hasonlítva-azonosítva)."
    },
    {
      question: "Milyen stilisztikai eszköz szerepel József Attila „alszik a szív és alszik a föld” sorában?",
      options: ["Megszemélyesítés", "Metonímia", "Szinesztézia", "Szinekdoché"],
      correctIndex: 0,
      explanation: "A megszemélyesítés (personificatio) során élettelen dolgokat vagy elvont fogalmakat ruházunk fel emberi tulajdonságokkal (pl. alvás)."
    },
    {
      question: "Melyik érzékterületek kapcsolódnak össze a „selymes csend” szinesztéziás képben?",
      options: ["Látás és hallás", "Tapintás és hallás", "Ízlelés és szaglás", "Tapintás és szaglás"],
      correctIndex: 1,
      explanation: "A „selymes” a tapintásra, míg a „csend” a hallás (vagy annak hiánya) területére utal, így ezek összekapcsolása szinesztézia."
    },
    {
      question: "Miért NEM minősül a hasonlat (pl. „szalad, mint a nyúl”) a szó szoros értelmében szóképnek (trópusnak)?",
      options: ["Mert nem tartalmaz költői szavakat", "Mert nincs benne jelentésátvitel, a hasonlított és a hasonló különálló tagként, kötőszóval kapcsolódik össze", "Mert csak a köznyelvben használatos", "Mert túl rövid"],
      correctIndex: 1,
      explanation: "A hasonlatban nincs valódi jelentésátvitel (trópus), hanem a két tag külön megmarad, és a „mint”, „mintha” kötőszavak kapcsolják össze őket."
    },
    {
      question: "Milyen kapcsolaton alapulnak az érintkezésen alapuló szóképek, a metonímiák?",
      options: ["Két fogalom közötti külső vagy belső hasonlóságon", "Két fogalom közötti térbeli, időbeli, anyagbeli vagy ok-okozati kapcsolaton", "Különböző érzékterületek összekeveredésén", "Egy történet végigvitelén"],
      correctIndex: 1,
      explanation: "A metonímia (névcsere) lényege, hogy két fogalom közötti valóságos érintkezés (térbeli, időbeli, anyagbeli vagy ok-okozati kapcsolat) révén az egyik nevét a másikra vetítjük."
    },
    {
      question: "Milyen típusú metonímia látható az „alszik a ház” kifejezésben?",
      options: ["Időbeli érintkezés", "Térbeli érintkezés", "Anyagbeli érintkezés", "Ok-okozati érintkezés"],
      correctIndex: 1,
      explanation: "Ez térbeli érintkezésen alapuló metonímia, mivel a hely (ház) nevét használjuk a benne lévő emberek (lakók) helyett."
    },
    {
      question: "Milyen metonímia szerepel a „Végigolvastam Aranyt” mondatban?",
      options: ["Anyagbeli érintkezés", "Ok-okozati érintkezés (szerző a mű helyett)", "Térbeli érintkezés", "Időbeli érintkezés"],
      correctIndex: 1,
      explanation: "Ez ok-okozati (szerző-mű) metonímia, ahol az alkotó (Arany) nevét használjuk az általa létrehozott művek helyett."
    },
    {
      question: "Mi a szinekdoché lényege?",
      options: ["Érzéki benyomások összekapcsolása", "A rész-egész vagy a nem-faj viszonyán alapuló jelentésátvitel", "Egy elvont eszme képsora", "A hasonlóságon alapuló azonosítás"],
      correctIndex: 1,
      explanation: "A szinekdoché a metonímia alfaja, amely kifejezetten a rész-egész (pl. rész az egész helyett) vagy a nem-faj (pl. fajnév a nemnév helyett) viszonyára épül."
    },
    {
      question: "Melyik kifejezésben valósul meg a szinekdoché rész-egész viszonya?",
      options: ["Retteg a huszadik század", "Nincs egy fia deszkája sem (koporsó helyett deszka)", "Megiszom egy pohárral", "Vasra verik"],
      correctIndex: 1,
      explanation: "A „deszka” a koporsó egy része, így a rész megnevezése az egész helyett szinekdoché."
    },
    {
      question: "Mi a szimbólum (jelkép) fő jellemzője a költészetben?",
      options: ["Kizárólag egyetlen, pontosan lefordítható jelentése van", "Egy elvont gondolat vagy érzés érzéki képe, amelynek jelentése többrétegű, homályos és hangulati", "Egy rövid, kötőszavas hasonlítás", "A hangutánzó szavak felhalmozása"],
      correctIndex: 1,
      explanation: "A szimbólum többértelmű, sejtelmes költői kép, amely egy elvont fogalmat vagy érzést jelenít meg érzéki formában, és nem fejthető meg egyértelműen."
    },
    {
      question: "Melyik stilisztikai eszköz jelenik meg Petőfi Sándor „Föltámadott a tenger” című versében, ahol a tenger a népet, a gálya a zsarnokokat jelképezi végig a mű során?",
      options: ["Szinesztézia", "Szinekdoché", "Allegória", "Metonímia"],
      correctIndex: 2,
      explanation: "Az allegória egy elvont gondolat vagy eszme részletes bemutatása képsorozaton vagy egy egész történeten keresztül."
    },
    {
      question: "Melyik szókép szerepel Ady Endre „A fekete zongora” című versének címében?",
      options: ["Hasonlat", "Szimbólum", "Metonímia", "Szinekdoché"],
      correctIndex: 1,
      explanation: "A fekete zongora egy összetett, többrétegű költői kép, azaz szimbólum, amely az életet, a halált vagy a művészetet jeleníti meg sejtelmesen."
    },
    {
      question: "Mit jelent az anyagbeli érintkezésen alapuló metonímia?",
      options: ["Amikor az edényt használjuk a benne lévő dolog helyett", "Amikor az anyag nevét használjuk a belőle készült tárgy helyett (pl. 'vasra verik')", "Amikor a szerző nevével utalunk a művére", "Amikor a rész nevét használjuk az egész helyett"],
      correctIndex: 1,
      explanation: "Az anyagbeli érintkezés során az anyag neve (vas) jelöli a belőle készült tárgyat (bilincs)."
    },
    {
      question: "Melyik szókép található Babits Mihály „fekete hegedűszó” kifejezésében?",
      options: ["Megszemélyesítés", "Szinesztézia", "Hasonlat", "Szinekdoché"],
      correctIndex: 1,
      explanation: "A „fekete” (látás) és a „hegedűszó” (hallás) érzékterületeinek összekapcsolása szinesztézia."
    },
    {
      question: "Mi a különbség az allegória és a szimbólum között?",
      options: ["Nincs köztük különbség", "A szimbólum jelentése többrétegű és homályos, míg az allegória egy gondolatsort, történetet visz végig egyértelműbb jelentéssel", "Az allegória mindig rövidebb, mint a szimbólum", "A szimbólum nem szókép, az allegória igen"],
      correctIndex: 1,
      explanation: "A szimbólum egyedi, többértelmű kép, míg az allegória egy végigvitt, racionálisabban lefordítható képsor vagy megszemélyesített eszme (pl. az Igazság mint bekötött szemű nőalak)."
    },
    {
      question: "Melyik elem felel meg az átvitt képnek (vehicle) a szóképek elemzésekor?",
      options: ["A kiinduló fogalom, amit azonosítani akarunk", "A kép, amellyel azonosítunk, vagy amelyre a jelentést átvisszük", "A két fogalom közötti közös tulajdonság", "A kötőszó"],
      correctIndex: 1,
      explanation: "A stilisztikában a kiinduló fogalom a tenor, az átvitt kép a vehicle, a közös tulajdonság pedig a ground."
    },
    {
      question: "Melyik szókép látható a következő mondatban: „A stadion ujjongott a gól után”?",
      options: ["Hasonlat", "Térbeli érintkezésen alapuló metonímia", "Szinesztézia", "Szinekdoché"],
      correctIndex: 1,
      explanation: "A stadion (mint hely, építmény) nevét használjuk a benne lévő emberek (nézők) helyett, ami térbeli metonímia."
    },
    {
      question: "Melyik szókép ismerhető fel József Attila „Kék, piros, sárga, összedőlt képeket / kevergetek...” sorában?",
      options: ["Metafora (az emlékek mint képek)", "Megszemélyesítés", "Szinekdoché", "Metonímia"],
      correctIndex: 0,
      explanation: "Az emlékek azonosítása a színes, összedőlt képekkel metafora (kéttagú, mert az emlékek a kontextusban vannak)."
    }
  ]
});
