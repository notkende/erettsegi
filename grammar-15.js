// 15. nyelvtan tétel: Az érvelő beszéd felépítése, az érvtípusok. Az érvelés logikája és technikája
window.loadGrammarData(15, {
  outline: [
    "Az érvelés fogalma és a meggyőzés szerepe a retorikában",
    "Az érv szerkezeti felépítése (tétel, bizonyíték, összekötő elem)",
    "Az érvtípusok osztályozása (definícióból vett, ok-okozati, tekintélyre hivatkozó)",
    "Az érvelés logikai módszerei: dedukció és indukció, a szillogizmus",
    "Az érvelő beszéd (esszé) klasszikus szerkezete"
  ],
  introduction: `
    <p>Az érvelés olyan kijelentések sorozata, amelyekkel egy állítás (tétel) igazságát igyekszünk bizonyítani vagy cáfolni. <strong>A retorikában (szónoklattanban) az érvelés a meggyőzés legfőbb racionális eszköze (logosz), amely a hallgatóság belátására és logikus gondolkodására épít.</strong></p>
  `,
  biography: `
    <p>Az érvelés elméletét és a formális logikát Arisztotelész (Kr. e. 384–322) görög filozófus alapozta meg 'Organon' című művében. Ő írta le először a szillogizmust (a deduktív következtetés alapformáját). A modern érveléselméletben Stephen Toulmin brit filozófus Toulmin-modellje vált meghatározóvá, amely az érvek szerkezeti elemeit írja le.</p>
  `,
  keyWorks: [
    {
      title: "Az érv szerkezete és a logikai következtetés",
      analysis: `
        <p>A logikus érv három alapvető elemből épül fel:</p>
        <ul>
          <li><strong>Tétel (Állítás)</strong>: Az a gondolat, vélemény, amelyet be akarunk bizonyítani (pl. „Holnap esernyőt kell vinnünk.”).</li>
          <li><strong>Bizonyíték (Alátámasztás)</strong>: A tételt igazoló tény, adat vagy érv (pl. „Mert a meteorológia heves esőzést jósol.”).</li>
          <li><strong>Összekötő elem (Garancia)</strong>: A tétel és a bizonyíték közötti logikai kapcsolatot magyarázza meg (pl. „A meteorológiai előrejelzések általában megbízhatóak.”). Ha az összekötő elem nyilvánvaló, elhagyható (csonka érv: entiméma).</li>
        </ul>
        <p>Az érvelés logikai útjai:</p>
        <ul>
          <li><strong>Dedukció</strong>: Az általánostól halad az egyedi felé. Alapja a **szillogizmus**, amely két előzményből (premissza) és egy következtetésből áll (pl. <i>Minden ember halandó. Szókratész ember. $\\rightarrow$ Szókratész halandó.</i>).</li>
          <li><strong>Indukció</strong>: Az egyedi tényekből, megfigyelésekből következtet az általános szabályra (pl. <i>Ez a hattyú fehér, az a hattyú is fehér... $\\rightarrow$ Minden hattyú fehér.</i> - Vigyázat: az indukció nem ad 100%-os bizonyosságot!).</li>
        </ul>
      `
    },
    {
      title: "Érvtípusok és az érvelő beszéd felépítése",
      analysis: `
        <p>A leggyakoribb érvtípusok, amelyeket a meggyőzés során alkalmazhatunk:</p>
        <ol>
          <li><strong>Definícióból (meghatározásból) levezetett érv</strong>: A fogalom pontos jelentésére épít (pl. „A hazugság szándékos félretájékoztatás, így amit tettél, az hazugság.”).</li>
          <li><strong>Ok-okozati összefüggésre épülő érv</strong>: Bemutatja a következményeket (pl. „Ha nem tanulunk, megbukunk a vizsgán.”).</li>
          <li><strong>Tekintélyre hivatkozó érv (argumentum ad verecundiam)</strong>: Elfogadott szakértő, tudós vagy híres ember véleményére épít (pl. „Einstein szerint is...”).</li>
          <li><strong>Analógia (hasonlóság) alapján álló érv</strong>: Hasonló esettel párhuzamot von (pl. „Ahogy a hajónak kell a kapitány, úgy a cégnek is kell a vezető.”).</li>
          <li><strong>Általánosításon alapuló érv</strong>: Statisztikákra vagy általános tapasztalatra épít (pl. „A felmérések szerint az emberek 80%-a...”).</li>
        </ol>
        <p>Az **érvelő beszéd** klasszikus retorikai szerkezete: 1. Bevezetés (figyelemfelkeltés), 2. Elbeszélés (témameghatározás), 3. Tétel kimondása, 4. Bizonyítás (saját érvek), 5. Cáfolás (ellenérvek elvetése), 6. Befejezés (összegzés, érzelmi hatás).</p>
      `
    }
  ],
  styleAndForm: `
    <p>Az érvelés során kerülni kell a **logikai hibákat** (pl. személyeskedés: <i>argumentum ad hominem</i>, körbefutó érvelés, vagy a hamis dilemma, amikor csak két végletet mutatunk be).</p>
  `,
  conclusion: `
    <p>A logikus és tisztességes érvelés képessége elengedhetetlen a vitakultúrában, a demokratikus párbeszédben, a tudományos munkában és az érettségi esszék megírásakor.</p>
  `,
  flashcards: [
    {
      question: "Melyik három szerkezeti elemből épül fel egy teljes érv?",
      answer: "Tétel (állítás), bizonyíték (alátámasztás) és összekötő elem (garancia)."
    },
    {
      question: "Mi a különbség a dedukció és az indukció között?",
      answer: "A dedukció az általános elvtől halad az egyedi eset felé (szillogizmus), az indukció az egyedi esetekből von le általános következtetést."
    },
    {
      question: "Mi a szillogizmus?",
      answer: "A deduktív következtetés klasszikus formája: két premisszából (fő- és altétel) levont konklúzió (következtetés)."
    },
    {
      question: "Milyen érvtípus a következő: 'Ahogy a testnek kell az edzés, úgy a szellemnek az olvasás.'?",
      options: [],
      answer: "Hasonlóságon alapuló érv (analógia)."
    }
  ],
  quiz: [
    {
      question: "Mi az érvelés elsődleges célja a retorikában (szónoklattanban)?",
      options: [
        "A hallgatóság meggyőzése egy állítás igazságáról vagy hamisságáról",
        "A hallgatóság szórakoztatása és megnevettetése",
        "A szavak gyors kiejtésének gyakorlása",
        "A vitapartner fizikai megfélemlítése"
      ],
      correctIndex: 0,
      explanation: "Az érvelés racionális bizonyítási folyamat, amelynek célja a befogadó meggyőzése és véleményének formálása."
    },
    {
      question: "Melyik ókori görög filozófus fektette le a formális logika és az érveléselmélet alapjait?",
      options: [
        "Arisztotelész",
        "Platón",
        "Szókratész",
        "Pitagorasz"
      ],
      correctIndex: 0,
      explanation: "Arisztotelész az 'Organon' című logikai értekezéseiben határozta meg a következtetések és a szillogizmusok szabályait."
    },
    {
      question: "Melyik három kötelező elemből épül fel egy teljes, logikus érv a Toulmin-modell szerint?",
      options: [
        "Tétel (állítás), bizonyíték (alátámasztás) és összekötő elem (garancia)",
        "Bevezetés, tárgyalás és befejezés",
        "Premissza, konklúzió és cáfolat",
        "Kérdés, válasz és magyarázat"
      ],
      correctIndex: 0,
      explanation: "A teljes érv magjából (tétel), az azt alátámasztó tényből (bizonyíték) és a kettő közötti logikai hidat képező magyarázatból (garancia) áll."
    },
    {
      question: "Mit nevezünk 'tételnek' az érvelés során?",
      options: [
        "Azt a határozott állítást, véleményt, amelyet be szeretnénk bizonyítani.",
        "A bizonyítékként felhasznált statisztikai adatot.",
        "Az ellenfél cáfolatának szövegét.",
        "A szónoki beszéd zárómondatát."
      ],
      correctIndex: 0,
      explanation: "A tétel (Claim) az érvelés kiindulópontja, az a kijelentés, amelynek igazságát a bizonyítékokkal igyekszünk igazolni."
    },
    {
      question: "Mi a szerepe az összekötő elemnek (garanciának) az érv szerkezetében?",
      options: [
        "Megteremti a logikai kapcsolatot a tétel és a bizonyíték között.",
        "Díszíti a beszédet költői képekkel.",
        "Összefoglalja a beszéd főbb pontjait a végén.",
        "A vitapartner személyét jellemzi."
      ],
      correctIndex: 0,
      explanation: "A garancia (Warrant) magyarázza meg, hogy a felhozott bizonyíték miért támasztja alá éppen az adott tételt."
    },
    {
      question: "Hogyan nevezzük azt a csonka érvet (entiméma), amelyben az összekötő elem a magától értetődősége miatt elmarad?",
      options: [
        "Entiméma",
        "Szillogizmus",
        "Analógia",
        "Parafrázis"
      ],
      correctIndex: 0,
      explanation: "Az entiméma a csonka vagy elhallgatott érv, amelyben a beszélő a hallgatóság intelligenciájára bízva kihagyja a nyilvánvaló premisszát vagy garanciát."
    },
    {
      question: "Melyik következtetési módszer halad az általános elvtől az egyedi, konkrét eset felé (dedukció)?",
      options: [
        "Dedukció",
        "Indukció",
        "Analógia",
        "Általánosítás"
      ],
      correctIndex: 0,
      explanation: "A dedukció során egy elfogadott általános szabályból vezetjük le az egyedi esetre vonatkozó igazságot."
    },
    {
      question: "Hogyan nevezzük a deduktív következtetés klasszikus formáját, amely két előzményből (premissza) és egy záró következtetésből (konklúzió) áll?",
      options: [
        "Szillogizmus",
        "Entiméma",
        "Szóértelmezés",
        "Cento"
      ],
      correctIndex: 0,
      explanation: "A szillogizmus a logikai következtetés alapformája (pl. Minden ember halandó [főtétel]. Szókratész ember [altétel]. Szókratész halandó [következtetés].)."
    },
    {
      question: "Mi a jellemzője az induktív következtetésnek (indukciónak)?",
      options: [
        "Egyedi tényekből, megfigyelésekből következtet az általános szabályra, de nem ad 100%-os biztonságot.",
        "Az általános elméletből vezet le egyedi eseteket csalhatatlanul.",
        "Kizárólag híres emberek véleményére támaszkodik.",
        "A vitapartner fizikai tulajdonságaiból indul ki."
      ],
      correctIndex: 0,
      explanation: "Az indukció tapasztalati úton gyűjt adatokat, és azokból von le általánosítást (pl. 'minden eddig látott hattyú fehér, tehát minden hattyú fehér' - ám ez cáfolható egy fekete hattyúval)."
    },
    {
      question: "Milyen érvtípust alkalmazunk a következő mondatban: 'A hazugság szándékos félretájékoztatás, így amit tettél, az hazugság.'?",
      options: [
        "Definícióból (meghatározásból) vett érv",
        "Ok-okozati összefüggésre épülő érv",
        "Tekintélyre hivatkozó érv",
        "Hasonlóságon alapuló érv (analógia)"
      ],
      correctIndex: 0,
      explanation: "Ez az érv a 'hazugság' fogalmának pontos definíciójára épül, abból vezeti le a konkrét eset minősítését."
    },
    {
      question: "Milyen érvtípust képvisel a következő kijelentés: 'Ha nem óvjuk a környezetet, a globális felmelegedés lakhatatlanná teszi a Földet.'?",
      options: [
        "Ok-okozati összefüggésre épülő érv",
        "Tekintélyre hivatkozó érv",
        "Definícióból levezetett érv",
        "Általánosításon alapuló érv"
      ],
      correctIndex: 0,
      explanation: "Az érv bemutatja a cselekvés hiányának (ok) és a Föld lakhatatlanná válásának (okozat) közvetlen összefüggését."
    },
    {
      question: "Hogyan nevezzük azt az érvtípust, amely egy elismert szakértő, tudós vagy intézmény véleményével támasztja alá a tételt?",
      options: [
        "Tekintélyre hivatkozó érv (argumentum ad verecundiam)",
        "Személyeskedés (argumentum ad hominem)",
        "Analógia",
        "Tényeken alapuló érv"
      ],
      correctIndex: 0,
      explanation: "A tekintélyre való hivatkozás során egy elismert külső forrás hitelességét használjuk fel a saját igazunk bizonyítására."
    },
    {
      question: "Milyen érvtípus látható a következő mondatban: 'Ahogy a hajónak kell a kapitány, úgy a cégnek is kell a vezető.'?",
      options: [
        "Analógián (hasonlóságon) alapuló érv",
        "Ok-okozati érv",
        "Tényen alapuló érv",
        "Definícióból vett érv"
      ],
      correctIndex: 0,
      explanation: "Az analógia párhuzamot von két különböző terület (hajózás és cégvezetés) hasonló belső szerkezete, működése között."
    },
    {
      question: "Mi a klasszikus érvelő beszéd (retorikai beszéd) helyes szerkezeti sorrendje?",
      options: [
        "Bevezetés, elbeszélés, tétel, bizonyítás, cáfolás, befejezés",
        "Cáfolás, bevezetés, bizonyítás, elbeszélés, befejezés",
        "Tétel, bizonyítás, cáfolás, elbeszélés, bevezetés",
        "Bevezetés, bizonyítás, befejezés"
      ],
      correctIndex: 0,
      explanation: "A klasszikus szónoki beszéd hatos tagolása logikusan építi fel a témát, előbb felkészít, kifejti a tényeket, bizonyítja a saját igazát, cáfolja az ellenvéleményeket, majd összegez."
    },
    {
      question: "Mi a feladata a 'cáfolásnak' (refutatio) a szónoki beszédben?",
      options: [
        "Az ellenérvek bemutatása és azok logikai megsemmisítése, igazságtartalmuk cáfolása.",
        "A beszéd legfontosabb tételeinek újbóli elismétlése.",
        "A hallgatóság érzelmi befolyásolása és megkönnyeztetése.",
        "A saját állítások alátámasztása statisztikai adatokkal."
      ],
      correctIndex: 0,
      explanation: "A cáfolás során a szónok anticipating jelleggel maga hozza fel a lehetséges ellenérveket, és bizonyítja be azok tarthatatlanságát."
    },
    {
      question: "Melyik logikai hibát követi el az a vitázó, aki a partnere érvei helyett annak jellemét, külsejét vagy múltját támadja?",
      options: [
        "Személyeskedés (argumentum ad hominem)",
        "Tekintélyre hivatkozás (argumentum ad verecundiam)",
        "Hamis dilemma",
        "Szalmabáb-érvelés"
      ],
      correctIndex: 0,
      explanation: "Az argumentum ad hominem az a logikai hiba, amelynél a vitapartner személyét hiteltelenítik, megkerülve az érdemi vitát."
    },
    {
      question: "Mit jelent a 'hamis dilemma' logikai hibája?",
      options: [
        "Amikor a valóságnál jóval kevesebb (általában kettő, szélsőséges) választási lehetőséget mutatunk be, elhallgatva a többi opciót.",
        "Amikor a bizonyítás során folyamatosan ismételgetjük a tételt.",
        "Amikor nem létező szakértőre hivatkozunk.",
        "Amikor túl sok logikus érvet hozunk fel egyszerre."
      ],
      correctIndex: 0,
      explanation: "A hamis dilemma tipikus manipulációs eszköz (pl. 'Vagy velünk vagy, vagy ellenünk'), ami kizárja a köztes, árnyaltabb megoldásokat."
    },
    {
      question: "Mi a lényege a körbefutó érvelésnek (petitio principii)?",
      options: [
        "Amikor a bizonyítani kívánt tételt eleve igaznak feltételezzük, és önmagával bizonyítjuk.",
        "Amikor a vitapartnerünket összezavarjuk körkörös mozdulatokkal.",
        "Amikor a beszéd elején elmondottakat a végén megcáfoljuk.",
        "Amikor statisztikai adatokból hibás következtetést vonunk le."
      ],
      correctIndex: 0,
      explanation: "A körbefutó érvelésben az állítás és a bizonyíték tartalmilag azonos (pl. 'Ez a könyv azért sikeres, mert sokan olvassák, és azért olvassák sokan, mert sikeres.')."
    },
    {
      question: "Mi a szalmabáb logikai hiba (strawman fallacy) lényege?",
      options: [
        "A vitapartner álláspontjának eltorzítása, és ennek a legyengített, hamis álláspontnak a támadása.",
        "Kizárólag mezőgazdasági témákban történő érvelés.",
        "A beszéd közbeni elnémulás és merevvé válás.",
        "Az érzelmekre való túlzott apellálás a tények helyett."
      ],
      correctIndex: 0,
      explanation: "A szalmabáb hiba során a vitázó egy könnyen támadható, karikírozott álláspontot tulajdonít ellenfelének, majd azt diadalmasan megcáfolja."
    },
    {
      question: "Arisztotelész szerint melyik retorikai meggyőzési eszköz épít a hallgatóság értelmére és a racionális érvekre?",
      options: [
        "Logosz",
        "Étosz",
        "Pátosz",
        "Szillogizmus"
      ],
      correctIndex: 0,
      explanation: "Arisztotelész hármas felosztásában a logosz a racionális érvelés, az étosz a szónok hitelessége, a pátosz pedig a hallgatóság érzelmi megérintése."
    }
  ]
});
