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
      question: "Melyik logikai hibát követi el az, aki a vitapartner személyiségét, jellemét támadja ahelyett, hogy annak érveivel vitatkozna?",
      options: [
        "Argumentum ad hominem (személyeskedés)",
        "Argumentum ad verecundiam (tekintélyre hivatkozás)",
        "Hamis dilemma",
        "Körbefutó érvelés"
      ],
      correctIndex: 0,
      explanation: "Az argumentum ad hominem (személyeskedés) az a logikai hiba, amikor az ellenfél személyét vagy hitelességét támadják az állítása helyett."
    },
    {
      question: "Milyen érvtípust alkalmazunk a következő mondatban: 'A tüdőrákos esetek 90%-áért a dohányzás a felelős, ezért a dohányzás súlyos egészségkárosodást okoz.'?",
      options: [
        "Tekintélyre hivatkozó érv",
        "Ok-okozati összefüggésre épülő érv",
        "Analógia",
        "Szóértelmezésen alapuló érv"
      ],
      correctIndex: 1,
      explanation: "A mondat megmutatja a dohányzás (ok) és a tüdőrák/egészségkárosodás (okozat) közötti közvetlen kapcsolatot, így ez ok-okozati érv."
    },
    {
      question: "Melyik rész követi a 'bizonyítást' a klasszikus érvelő beszéd szerkezetében?",
      options: ["Bevezetés", "Cáfolás (az ellenérvek cáfolása)", "Elbeszélés", "Összegzés"],
      correctIndex: 1,
      explanation: "A klasszikus szónoki beszédben a saját álláspont bizonyítása után azonnal következik a cáfolás (az ellenérvek bemutatása és megsemmisítése)."
    }
  ]
});
