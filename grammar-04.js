// 4. nyelvtan tétel: A magyar nyelv történetének fő korszakai
window.loadGrammarData(4, {
  outline: [
    "Az uráli alapnyelvtől való elválás és az önálló élet kezdete",
    "Az ősmagyar kor (Kr. e. 1000 – Kr. u. 896): a vándorlások ideje",
    "Az ómagyar kor (896–1526): az írásbeliség kezdetei és az államalapítás",
    "A középmagyar kor (1526–1772): a könyvnyomtatás és a reformáció",
    "Az újmagyar kor (1772–1920) és a jelenkori magyar nyelv"
  ],
  introduction: `
    <p>A magyar nyelv története több ezer éves fejlődési folyamat, amely az uráli alapnyelvből (azon belül a finnugor ágból) való kiszakadással kezdődött Kr. e. 1000–500 körül. <strong>Nyelvünk történetét hat fő korszakra osztjuk fel, melyeket jelentős történelmi, társadalmi és kulturális események (honfoglalás, államalapítás, könyvnyomtatás, nyelvújítás) határolnak le.</strong></p>
  `,
  biography: `
    <p>A magyar nyelvtörténet tudományos periodizációját (korszakolását) a 19. század végén és a 20. század elején dolgozták ki olyan neves nyelvészek, mint Halász Ignác, Szinnyei József és Bárczi Géza. A korszakolás alapját a belső nyelvi változások (hangtani, alaktani átalakulások) és a külső nyelvtörténeti tényezők (történelmi fordulatok) együttes figyelembevétele képezi.</p>
  `,
  keyWorks: [
    {
      title: "Az ősmagyar és az ómagyar kor",
      analysis: `
        <p>Az önálló magyar nyelvfejlődés első két szakasza alapozta meg a mai nyelvrendszert:</p>
        <ul>
          <li><strong>Ősmagyar kor (Kr. e. 1000 – Kr. u. 896)</strong>: Az önálló nyelvi élet kezdete a honfoglalásig. A szóbeli kultúra időszaka, írásos emlékek nélkül (csak rovásírás létezett). A korszak során a nyelv kapcsolatba került török és iráni nyelvekkel, ahonnan számos jövevényszót vett át (pl. földművelés, állattenyésztés szavai: <i>búza, ökör, sajt, gyapjú</i>).</li>
          <li><strong>Ómagyar kor (896–1526)</strong>: A honfoglalástól a mohácsi vészig tart. Megkezdődik a keresztény államszervezés és a latin betűs írásbeliség. Ebből a korból származnak az első összefüggő nyelvemlékeink (pl. Halotti Beszéd és Könyörgés, Ómagyar Mária-siralom). Erősödik a szláv és latin nyelvi hatás (pl. vallási és közigazgatási szavak: <i>király, megye, pap, kereszt</i>).</li>
        </ul>
      `
    },
    {
      title: "A középmagyar, újmagyar és legújabb kor",
      analysis: `
        <p>A kora újkortól napjainkig tartó időszakot a standardizáció és a szókincsbővülés jellemzi:</p>
        <ul>
          <li><strong>Középmagyar kor (1526–1772)</strong>: A mohácsi csatától a felvilágosodás kezdetéig (Bessenyei György fellépéséig) tart. A török hódoltság és az ország három részre szakadásának ideje. A reformáció és a könyvnyomtatás elterjedése (pl. Károlyi Gáspár Biblia-fordítása, 1590) elindítja a nyelvjárások közeledését és az egységes irodalmi nyelv kialakulását.</li>
          <li><strong>Újmagyar kor (1772–1920)</strong>: Bessenyei fellépésétől a trianoni békediktátumig tart. Legfőbb eseménye a **nyelvújítás** mozgalma (Kazinczy Ferenc vezetésével), amely megújítja és alkalmassá teszi a magyar nyelvet a tudományok és a művészetek művelésére. 1844-ben a magyar államnyelvvé válik.</li>
          <li><strong>Újabb magyar kor (1920-tól napjainkig)</strong>: A Trianon utáni időszak, a határon túli magyar nyelvváltozatok önállóbb fejlődése (pluricentrikus jelleg) és a digitális forradalom hatása.</li>
        </ul>
      `
    }
  ],
  styleAndForm: `
    <p>A nyelvtörténeti korszakok során a magyar nyelv hangrendszere egyszerűsödött (pl. elkoptak bizonyos múlt idők, mint a múlt idejű elbeszélő alakok), a szókincs folyamatosan bővült a jövevényszavakkal és belső szóalkotással, míg a mondatszerkezet a latin minták hatására bonyolultabbá, strukturáltabbá vált.</p>
  `,
  conclusion: `
    <p>A magyar nyelv története jól példázza, hogyan tükrözi egy nép történelme, vándorlása és kulturális kapcsolatai a szókincs és a nyelvtani rendszer változásait az évszázadok folyamán.</p>
  `,
  flashcards: [
    {
      question: "Melyik nyelvcsaládba tartozik a magyar nyelv?",
      answer: "Az uráli nyelvcsalád finnugor ágába."
    },
    {
      question: "Melyik történelmi esemény zárja le az ősmagyar kort?",
      answer: "A honfoglalás (896)."
    },
    {
      question: "Melyik korszakhoz köthető az első fennmaradt összefüggő magyar szöveg?",
      answer: "Az ómagyar korhoz (Halotti Beszéd, kb. 1192-1195)."
    },
    {
      question: "Melyik mozgalom határozza meg az újmagyar kor kezdetét?",
      answer: "A nyelvújítás mozgalma (Bessenyei György fellépésétől, 1772)."
    }
  ],
  quiz: [
    {
      question: "Melyik nyelvből származnak a 'búza, ökör, sajt, gyapjú, kapu' szavaink a honfoglalás előtti ősmagyar korból?",
      options: ["Szláv", "Latin", "Csuvasos jellegű török", "Német"],
      correctIndex: 2,
      explanation: "A honfoglalás előtti vándorlások során (Kaukázus vidéke, Kazár Birodalom) a magyarok szoros kapcsolatba kerültek török népekkel, ahonnan földművelési és állattenyésztési szavakat vettek át."
    },
    {
      question: "Melyik évben lett hivatalos államnyelv a magyar Magyarországon (felváltva a latint)?",
      options: ["1772", "1844", "1848", "1867"],
      correctIndex: 1,
      explanation: "Az 1844-es II. törvénycikk értelmében a magyar lett a hivatalos államnyelv az oktatásban, a közigazgatásban és a törvényhozásban."
    },
    {
      question: "Melyik kulturális tényező járult hozzá leginkább a középmagyar korban (1526–1772) az egységes nemzeti nyelv terjedéséhez?",
      options: [
        "Az első magyar nyelvű egyetem alapítása",
        "A reformáció és a könyvnyomtatás (főleg a magyar nyelvű Biblia-kiadások)",
        "A rovásírás állami bevezetése",
        "A latin nyelv teljes betiltása"
      ],
      correctIndex: 1,
      explanation: "A protestáns prédikátorok anyanyelven terjesztették a hitet, a nyomtatott Biblia- és zsoltárfordítások pedig eljutottak az ország minden részébe, csökkentve a nyelvjárási különbségeket."
    }
  ]
});
