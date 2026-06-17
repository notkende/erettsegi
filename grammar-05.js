// 5. nyelvtan tétel: A nyelvtörténet forrásai: a nyelvemlékek
window.loadGrammarData(5, {
  outline: [
    "A nyelvemlékek fogalma és jelentősége a nyelvtudományban",
    "A nyelvemlékek fő csoportjai: írásos és szóbeli források",
    "Az írásos nyelvemlékek típusai: szórványemlékek, glosszák, összefüggő szövegemlékek",
    "A legfontosabb magyar nyelvű nyelvemlékek (Tihanyi alapítólevél, Halotti Beszéd, Ómagyar Mária-siralom)",
    "A kódexirodalom jelentősége a középmagyar kor előestéjén"
  ],
  introduction: `
    <p>A nyelvemlék a múltból fennmaradt írott vagy szóbeli forrás, amely a nyelv korábbi állapotát dokumentálja. <strong>A magyar nyelvtudomány számára a nyelvemlékek a legfontosabb történeti források, mivel ezek segítségével rekonstruálható a hangrendszer, az alaktan, a mondattan és a szókincs alakulása.</strong> Legtöbb korai nyelvemlékünk latin nyelvű kódexekben vagy oklevelekben maradt fenn.</p>
  `,
  biography: `
    <p>A magyar nyelvemlékek gyűjtése, rendszerezése és tudományos feldolgozása a 18. század végén indult meg Pray György jezsuita szerzetes munkásságával (aki 1770-ben felfedezte a Halotti Beszédet tartalmazó kódexet, a Pray-kódexet). A 19. században Toldy Ferenc és Volf György adták ki a kódexek szövegeit, lefektetve a magyar történeti nyelvészet alapjait.</p>
  `,
  keyWorks: [
    {
      title: "Az írásos nyelvemlékek típusai",
      analysis: `
        <p>A latin betűs magyar nyelvemlékeket szerkezeti felépítésük szerint három fő típusba soroljuk:</p>
        <ul>
          <li><strong>Szórványemlékek</strong>: Idegen (többnyire latin vagy görög) nyelvű szövegben elszórtan előforduló magyar szavak, nevek vagy kifejezések. Például: birtokhatárok leírása, helynevek, személynevek.</li>
          <li><strong>Glosszák és szójegyzékek</strong>: Latin nyelvű kódexek margójára vagy a sorok közé beírt magyar magyarázó szavak, fordítások (glosszák), illetve témakörök szerint rendezett szólisták (szójegyzékek). Például: <i>Marosvásárhelyi sorok</i> (14. század).</li>
          <li><strong>Összefüggő szövegemlékek</strong>: Olyan írások, amelyekben a magyar szavak már mondatokat, bekezdéseket vagy teljes műveket alkotnak (pl. imák, prédikációk, versek, kódexek).</li>
        </ul>
      `
    },
    {
      title: "A legfontosabb magyar nyelvemlékek",
      analysis: `
        <p>A magyar nyelvtörténet sarokköveinek számító legfontosabb korai emlékek:</p>
        <ol>
          <li><strong>A tihanyi apátság alapítólevele (1055)</strong>: Latin nyelvű oklevél, amely az apátság alapítását rögzíti I. András király pecsétjével. Legnagyobb <strong>szórványemlékünk</strong>. 58 magyar szót tartalmaz, köztük a híres mondattöredéket: <i>„feheruuaru rea meneh hutu queriesu”</i> (Fehérvárra menő hadi útra).</li>
          <li><strong>Halotti Beszéd és Könyörgés (1192–1195)</strong>: A Pray-kódexben fennmaradt temetési prédikáció és ima. A legelső összefüggő, legrégebbi <strong>szövegemlékünk</strong>. Két részből áll: a 26 soros beszédből és a 6 soros könyörgésből. Fontos történeti bizonyítéka a korabeli magánhangzó-rendszernek (pl. tővéghangzók megléte: <i>„látjátok feleim szümtükhel”</i>).</li>
          <li><strong>Ómagyar Mária-siralom (13. század közepe)</strong>: A Leuveni kódexben fennmaradt költemény. Az első magyar nyelvű <strong>vers- és irodalmi szövegemlékünk</strong>. Művészi szerkezetű, rímes-alliteráló alkotás, amely Mária fájdalmát fejezi ki fia kereszthalálakor.</li>
        </ol>
      `
    }
  ],
  styleAndForm: `
    <p>A 15. század végén jelennek meg a **kódexek**, amelyek kézzel írt, többnyire vallási tartalmú (Biblia-fordítások, legendák, imádságok) magyar nyelvű könyvek (pl. <i>Jókai-kódex</i>, a legkorábbi magyar nyelvű kódex, amely Assisi Szent Ferenc életét mutatja be, vagy a <i>Muncheni kódex</i>, amely az első bibliafordításunkat tartalmazza).</p>
  `,
  conclusion: `
    <p>A korai nyelvemlékek tanulmányozása bizonyítja, hogy a magyar nyelv már a középkorban is alkalmas volt elvont teológiai és magas művészi tartalom kifejezésére, segítve nemzeti identitásunk megőrzését.</p>
  `,
  flashcards: [
    {
      question: "Mi a tihanyi apátság alapítólevelének (1055) fő nyelvtörténeti jelentősége?",
      answer: "A legrégebbi latin betűs szórványemlékünk (58 magyar szóval és egy mondattöredékkel)."
    },
    {
      question: "Melyik a legelső összefüggő magyar nyelvű szövegemlék?",
      answer: "A Halotti Beszéd és Könyörgés (12. század vége, Pray-kódex)."
    },
    {
      question: "Melyik kódexben találták meg a legrégebbi magyar nyelvű verset?",
      answer: "A Leuveni kódexben (itt található az Ómagyar Mária-siralom)."
    },
    {
      question: "Mi a különbség a szórványemlék és a szövegemlék között?",
      answer: "A szórványemlék idegen nyelvű szövegben elszórtan előforduló magyar szavak összessége, a szövegemlék összefüggő magyar mondatokból áll."
    }
  ],
  quiz: [
    {
      question: "Melyik híres mondattöredék szerepel a tihanyi apátság alapítólevelében?",
      options: [
        "latiatuc feleym zumtuhel",
        "feheruuaru rea meneh hutu queriesu",
        "volast vala engem halalra",
        "ki sorsot vetett a hazára"
      ],
      correctIndex: 1,
      explanation: "A tihanyi alapítólevél leghíresebb magyar nyelvű része a 'feheruuaru rea meneh hutu queriesu' (Fehérvárra menő hadi útra) mondattöredék."
    },
    {
      question: "Ki fedezte fel és ismertette először a Halotti Beszédet tartalmazó Pray-kódexet 1770-ben?",
      options: ["Kazinczy Ferenc", "Pray György", "Toldy Ferenc", "Károlyi Gáspár"],
      correctIndex: 1,
      explanation: "Pray György jezsuita történetíró talált rá és írta le a kódexet, amelyet róla neveztek el Pray-kódexnek."
    },
    {
      question: "Mi az a 'glossza'?",
      options: [
        "Egy teljes könyvnyi fordítás",
        "Kódexek margójára vagy sorai közé írt magyarázó szó vagy jegyzet",
        "Az uráli alapnyelv neve",
        "Rovásírással készült oklevél"
      ],
      correctIndex: 1,
      explanation: "A glosszák a latin szövegek megértését segítő, a margóra vagy a sorok közé beszúrt magyar fordítások, széljegyzetek."
    }
  ]
});
