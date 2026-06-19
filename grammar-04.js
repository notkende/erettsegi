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
      question: "Melyik nyelvcsaládba tartozik a magyar nyelv?",
      options: ["Indoeurópai", "Uráli (finnugor ág)", "Altaji (török ág)", "Sino-tibeti"],
      correctIndex: 1,
      explanation: "A magyar nyelv a történeti összehasonlító nyelvészet bizonyítékai alapján az uráli nyelvcsalád finnugor ágához tartozik."
    },
    {
      question: "Melyik történelmi esemény határolja le az ősmagyar kor végét és az ómagyar kor kezdetét?",
      options: ["A honfoglalás (896)", "Az államalapítás (1000)", "A mohácsi vész (1526)", "A tatárjárás (1241)"],
      correctIndex: 0,
      explanation: "Az ősmagyar kor a honfoglalásig (896) tartott, amely egyben az ómagyar kor és az európai beilleszkedés kezdete."
    },
    {
      question: "Meddig tartott az ómagyar kor a magyar nyelv történetében?",
      options: ["A honfoglalásig (896)", "A reformáció elterjedéséig (1526, a mohácsi vész)", "A nyelvújítás kezdetéig (1772)", "Trianonig (1920)"],
      correctIndex: 1,
      explanation: "Az ómagyar kor 896-tól a mohácsi vészig (1526) tartott, ezt követi a középmagyar kor."
    },
    {
      question: "Melyik nyelvből származnak a 'búza, ökör, sajt, gyapjú, kapu' szavaink a honfoglalás előtti ősmagyar korból?",
      options: ["Szláv", "Latin", "Csuvasos jellegű török", "Német"],
      correctIndex: 2,
      explanation: "A honfoglalás előtti vándorlások során (Kaukázus vidéke, Kazár Birodalom) a magyarok szoros kapcsolatba kerültek török népekkel, ahonnan földművelési és állattenyésztési szavakat vettek át."
    },
    {
      question: "Melyik történelmi és kulturális folyamat indította el a latin betűs magyar írásbeliség kialakulását az ómagyar korban?",
      options: [
        "A vándorló életmód feladása és a rovásírás kötelezővé tétele",
        "A kereszténység felvétele és az államalapítás",
        "A könyvnyomtatás elterjedése",
        "A latin nyelv teljes betiltása"
      ],
      correctIndex: 1,
      explanation: "A keresztény állam megalakulásával a latin betűs írásbeliség vált az adminisztráció és a liturgia nyelvévé, ami magával hozta a magyar nevek és szavak lejegyzését is."
    },
    {
      question: "Melyik korhoz köthető az első fennmaradt összefüggő magyar szövegemlékünk (Halotti Beszéd és Könyörgés)?",
      options: ["Ősmagyar kor", "Ómagyar kor", "Középmagyar kor", "Újmagyar kor"],
      correctIndex: 1,
      explanation: "A Halotti Beszéd a 12. század végén (kb. 1192–1195) keletkezett, ami az ómagyar kor virágkora."
    },
    {
      question: "Mely nyelvek hatása volt a legerősebb a magyar szókincsre az államalapítást követő ómagyar korban a vallás és a közigazgatás terén?",
      options: ["Görög és arab", "Török és iráni", "Szláv és latin", "Német és francia"],
      correctIndex: 2,
      explanation: "A letelepedés és az államszervezés során a környező szláv népekkel való együttélés, valamint a liturgia és tudomány nyelveként használt latin gazdagította leginkább a szókincsünket."
    },
    {
      question: "Melyik korszakot határolja le az 1526-os mohácsi vész és az 1772-es felvilágosodás kezdete?",
      options: ["Ómagyar kor", "Középmagyar kor", "Újmagyar kor", "Újabb magyar kor"],
      correctIndex: 1,
      explanation: "A középmagyar kor a mohácsi csatától (1526) Bessenyei György fellépéséig, azaz a felvilágosodás kezdetéig (1772) tart."
    },
    {
      question: "Melyik kulturális tényező segítette leginkább a nyelvjárások közeledését és az egységes irodalmi nyelv terjedését a középmagyar korban?",
      options: [
        "A rovásírás állami megreformálása",
        "A reformáció és a könyvnyomtatás elterjedése (anyanyelvű Bibliák és zsoltárok)",
        "Az első magyar nyelvű színitársulat megalakulása",
        "A sajtószabadság törvénybe iktatása"
      ],
      correctIndex: 1,
      explanation: "A protestáns prédikátorok anyanyelven terjesztették a hitet, a nyomtatott Biblia- és zsoltárfordítások pedig eljutottak az ország minden részébe, csökkentve a nyelvjárási különbségeket."
    },
    {
      question: "Kinek a nevéhez fűződik az első teljes, nyomtatott magyar nyelvű Biblia-fordítás (1590, Vizsoly)?",
      options: ["Károlyi Gáspár", "Sylvester János", "Pázmány Péter", "Bessenyei György"],
      correctIndex: 0,
      explanation: "A vizsolyi Bibliát Károlyi Gáspár református lelkész és munkatársai fordították le és adták ki 1590-ben."
    },
    {
      question: "Melyik eseményhez kötjük az újmagyar kor kezdetét?",
      options: [
        "A mohácsi vészhez (1526)",
        "Bessenyei György 'Ágis tragédiája' című művének megjelenéséhez (1772)",
        "Az 1848-as forradalomhoz",
        "A trianoni békediktátumhoz (1920)"
      ],
      correctIndex: 1,
      explanation: "A magyar nyelvtörténetben az újmagyar kort 1772-től, a felvilágosodás kezdetétől és Bessenyei fellépésétől számítjuk."
    },
    {
      question: "Ki volt az újmagyar kor legjelentősebb nyelvészeti mozgalmának, a nyelvújításnak a vezéralakja?",
      options: ["Kazinczy Ferenc", "Bessenyei György", "Kölcsey Ferenc", "Arany János"],
      correctIndex: 0,
      explanation: "Kazinczy Ferenc volt a nyelvújító mozgalom (a neológusok) szellemi vezetője, a stílus és a szókincs megújításának fő szervezője."
    },
    {
      question: "Melyik évben lett hivatalos államnyelv a magyar Magyarországon (felváltva a latint)?",
      options: ["1772", "1844", "1848", "1867"],
      correctIndex: 1,
      explanation: "Az 1844-es II. törvénycikk értelmében a magyar lett a hivatalos államnyelv az oktatásban, a közigazgatásban és a törvényhozásban."
    },
    {
      question: "Melyik történelmi esemény zárja le az újmagyar kort, és nyitja meg az újabb (jelenkori) magyar kort?",
      options: ["A kiegyezés (1867)", "Az első világháborút lezáró trianoni békediktátum (1920)", "A második világháború vége (1945)", "A rendszerváltás (1989)"],
      correctIndex: 1,
      explanation: "Az újabb magyar kor kezdetét 1920-tól számítjuk, amikor a határok meghúzása miatt a magyar nyelvfejlődés pluricentrikussá vált."
    },
    {
      question: "Mit jelent a magyar nyelv pluricentrikus jellege az újabb magyar korban (1920-tól napjainkig)?",
      options: [
        "Azt, hogy a nyelvnek több különböző nyelvtani rendszere van érvényben egyszerre",
        "Azt, hogy a magyar nyelvnek a trianoni határokon kívül is vannak önálló fejlődésű, regionális standard változatai",
        "Azt, hogy a nyelvjárások száma drasztikusan növekedett",
        "Azt, hogy a nyelvújítás során több központot jelöltek ki Kazinczyék"
      ],
      correctIndex: 1,
      explanation: "A pluricentrikusság azt fejezi ki, hogy a szomszédos országokban kisebbségben élő magyar közösségek nyelve sajátos regionális szavakkal és kifejezésekkel gazdagodott a többségi nyelvek hatására."
    },
    {
      question: "Melyik nyelvből vette át a magyar nyelv a legtöbb modern technikai és informatikai kifejezést az újabb magyar korban?",
      options: ["Német", "Orosz", "Angol", "Francia"],
      correctIndex: 2,
      explanation: "A 20. század végétől a globalizáció és a számítástechnika terjedése miatt az angol nyelvi hatás vált a legmeghatározóbbá a magyar szókincsben."
    },
    {
      question: "Melyik állítás jellemzi a magyar nyelv nyelvtani rendszerének változását a korszakok során?",
      options: [
        "A nyelvtani rendszer egyre bonyolultabbá és áttekinthetetlenebbé vált",
        "Az alaktan egyszerűsödött, például kikoptak bizonyos múlt idők (elbeszélő múlt, régmúlt)",
        "Eltűntek a tárgyas és alanyi ragozás közötti különbségek",
        "A névszóragok teljesen eltűntek a nyelvből"
      ],
      correctIndex: 1,
      explanation: "Az ómagyar korban még több múlt idő létezett (pl. íra, írt vala, írt volt), amelyek a középmagyar és újmagyar korra nagyrészt eltűntek, egyszerűsítve az igealakokat."
    },
    {
      question: "Honnan származnak a magyar nyelvben a 'király, megye, pap, kereszt, tiszt, szerda' szavak?",
      options: ["A finnugor alapnyelvből", "A török nyelvből", "A szláv nyelvekből", "A latinból"],
      correctIndex: 2,
      explanation: "Ezek a szavak a kereszténység felvétele és az államszervezés környékén kerültek a magyarba a környező szláv népeken keresztül."
    },
    {
      question: "Melyik írásrendszert használták a magyarok a latin betűs írásbeliség elterjedése előtt?",
      options: ["Középkori rovásírást", "Cirill betűs írást", "Képirást", "Gót betűs írást"],
      correctIndex: 0,
      explanation: "A honfoglalás előtti és ómagyar kori szóbeli kultúrában a magyarok saját rovásírást használtak, amelynek emlékei főleg fába, kőbe vésve maradtak fenn."
    },
    {
      question: "Melyik nyelvújítási módszerrel jött létre például a 'gyár, fény, szobrász, mérnök' szavunk?",
      options: [
        "Idegen szavak közvetlen átvételével",
        "Tudatos szóalkotással (pl. szómegvonás, szócsonkítás, szóképzés)",
        "A rovásírás jeleinek összeolvasásával",
        "Véletlenszerű hangutánzással"
      ],
      correctIndex: 1,
      explanation: "A nyelvújítás során számos új szót hoztak létre mesterségesen, például a 'gyárt' igéből elvonással a 'gyár'-at, vagy a 'mér' igéből a 'mérnök'-öt képzővel."
    }
  ]
});
