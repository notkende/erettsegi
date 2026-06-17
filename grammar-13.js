// 13. nyelvtan tétel: A szóbeli és írott szövegek szerepe, eltérő jegyei
window.loadGrammarData(13, {
  outline: [
    "A szóbeliség és írásbeliség történelmi viszonya",
    "A szóbeli szövegek sajátosságai (tervezetlenség, kontextus)",
    "Az írott szövegek sajátosságai (tervezettség, maradandóság)",
    "A szóbeli és írott kommunikáció nyelvi (stilisztikai, mondattani) különbségei",
    "A másodlagos szóbeliség (digitális írásbeliség) térnyerése a 21. században"
  ],
  introduction: `
    <p>A szöveg a nyelv és a beszéd legmagasabb szintű egysége, amely lehet szóbeli vagy írásbeli megnyilatkozás. <strong>Bár mindkét forma ugyanazt a nyelvi kódot használja, a létrehozás körülményei, a befogadás módja és a kísérőcsatornák eltérése miatt alapvető különbségek mutatkoznak a szóbeli és az írott szövegek szerkezetében és stílusában.</strong></p>
  `,
  biography: `
    <p>A szóbeliség (orality) és írásbeliség (literacy) kutatásának kiemelkedő alakja Walter J. Ong amerikai jezsuita szerzetes és kultúrtörténész volt. 'Szóbeliség és írásbeliség' (1982) című alapművében leírta, hogyan alakította át az írás az emberi gondolkodást, és bevezette a 'másodlagos szóbeliség' fogalmát az elektronikus média korára vonatkozóan.</p>
  `,
  keyWorks: [
    {
      title: "A szóbeli szövegek jellemzői",
      analysis: `
        <p>A szóbeli szövegek a beszélt csatornán keresztül jönnek létre, közvetlen jelenlétben:</p>
        <ul>
          <li><strong>Közvetlen beszédhelyzet</strong>: Az adó és a vevő általában egy térben és időben van jelen, így azonnali a visszacsatolás.</li>
          <li><strong>Spontaneitás és tervezetlenség</strong>: A szöveg alkotása és befogadása szinte egy időben zajlik. Gyakoribbak a megakadások, az önjavítások, a félbeszakított mondatok (anakoluthon).</li>
          <li><strong>Nonverbális támogatás</strong>: Erősen támaszkodik a kísérőcsatornákra (mimika, gesztusok, hangszín, hangerő), amelyek pótolják a hiányzó nyelvi elemeket.</li>
          <li><strong>Mondatszerkezet</strong>: Egyszerűbb, rövidebb mondatok, mellérendelő szerkezetek dominanciája jellemzi.</li>
        </ul>
      `
    },
    {
      title: "Az írott szövegek jellemzői",
      analysis: `
        <p>A leírt szövegek a vizuális csatornán keresztül terjednek, térben és időben elválasztva a feleket:</p>
        <ul>
          <li><strong>Tervezettség és javíthatóság</strong>: Az írónak ideje van átgondolni, szerkeszteni és javítani a szöveget a publikálás előtt.</li>
          <li><strong>Maradandóság</strong>: Az írott szöveg rögzített, bármikor újraolvasható, visszakereshető és megőrizhető az utókor számára.</li>
          <li><strong>Nyelvi kifejtettség (kontextusfüggetlenség)</strong>: Mivel a vevő nincs jelen, a szövegnek teljesen önmagát kell megmagyaráznia (explicit nyelvezet). Hiányoznak a nonverbális jelek, ezeket leíró szavakkal, írásjelekkel kell pótolni.</li>
          <li><strong>Mondatszerkezet</strong>: Bonyolultabb, többszörösen összetett mondatok, alárendelő szerkezetek jellemzik.</li>
        </ul>
      `
    }
  ],
  styleAndForm: `
    <p>A digitális korban (e-mail, SMS, chat) létrejött a **digitális írásbeliség** (másodlagos szóbeliség), amely egyesíti a szóbeliség spontaneitását, lazaságát az írás technikai formájával, sajátos jelekkel (emojik, rövidítések) pótolva a nonverbális jeleket.</p>
  `,
  conclusion: `
    <p>Mind a szóbeli, mind az írott szövegeknek megvan a maguk helye és szerepe a társadalomban. A sikeres kommunikáció kulcsa a helyzetnek megfelelő stílus és forma kiválasztása.</p>
  `,
  flashcards: [
    {
      question: "Mi a szóbeli szöveg legfőbb kísérőcsatornája?",
      answer: "A nonverbális csatorna (gesztusok, mimika, hanghordozás)."
    },
    {
      question: "Melyik szövegtípusra jellemzőbb a bonyolultabb, alárendelő mondatszerkezet?",
      answer: "Az írott szövegekre (a tervezettség miatt)."
    },
    {
      question: "Mit jelent a 'másodlagos szóbeliség' fogalma Walter Ong szerint?",
      answer: "Az elektronikus és digitális média által létrehozott új szóbeliséget, amely írott formában utánozza a beszélt nyelvet (pl. csetelés)."
    },
    {
      question: "Miért mondjuk, hogy az írott szöveg kontextusfüggetlenebb, mint a szóbeli?",
      answer: "Mert az író és az olvasó térben/időben el van választva, így a szövegnek önmagában, külső szituatív segítség nélkül kell érthetőnek lennie."
    }
  ],
  quiz: [
    {
      question: "Melyik nyelvi-szerkezeti sajátosság jellemző a szóbeli szövegekre?",
      options: [
        "Szigorúan szerkesztett, többszörösen összetett körmondatok",
        "Spontaneitás, laza mondatkapcsolás, félbeszakított mondatok és önjavítások",
        "Helyesírási hibák hiánya",
        "A nonverbális jelek teljes hiánya"
      ],
      correctIndex: 1,
      explanation: "A szóbeli megnyilatkozások spontán jellegükből adódóan kevésbé tervezettek, így gyakoriak bennük az ismétlések, javítások és az egyszerűbb mondatfűzés."
    },
    {
      question: "Hogyan pótolja az írásbeliség a szóbeli kommunikációban jelen lévő mimikát és gesztusokat?",
      options: [
        "Nem pótolja semmivel",
        "Írásjelekkel, hangulatjelekkel (emojik) és részletes leíró, stilisztikai eszközökkel",
        "A hangerő növelésével",
        "Latin szavak beillesztésével"
      ],
      correctIndex: 1,
      explanation: "Az írott szövegben a hanghordozást és érzelmeket írásjelekkel (pl. felkiáltójel), stilisztikai eszközökkel, a digitális kommunikációban pedig emojikkal fejezzük ki."
    },
    {
      question: "Melyik állítás igaz a digitális írásbeliségre (pl. csetelés)?",
      options: [
        "A legszigorúbb akadémiai helyesírást követi",
        "Átmeneti formát képez: írott formájú, de szerkezetében és spontaneitásában a szóbeliséghez áll közelebb",
        "Kizárólag tudományos értekezésekben használatos",
        "Teljesen kiküszöböli a félreértéseket"
      ],
      correctIndex: 1,
      explanation: "A csetelés során írunk (írásbeliség), de a társalgás tempója, lazasága és közvetlensége a beszélt nyelv (szóbeliség) mintáit követi."
    }
  ]
});
