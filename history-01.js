// 1. tétel: A középkori város jellemzőinek bemutatása
window.loadHistoryData(1, {
  outline: [
    "A középkori városok kialakulásának előfeltételei és folyamata a 10-11. századtól",
    "A városi kiváltságok (privilégiumok) és a földesurakkal vívott harc az önkormányzatért",
    "A középkori város társadalmi rétegződése (patríciusok, polgárok, plebejusok)",
    "A céhes ipar működése, szabályai és gazdasági-társadalmi szerepe",
    "Távolsági kereskedelmi útvonalak (Levante, Hanza) és a városok szerepe a pénzgazdálkodásban"
  ],
  introduction: `
    <p>A Nyugat-Római Birodalom bukása után a városi élet jelentősen visszaesett Európában, a gazdaság önellátóvá vált. A 10-11. században azonban a mezőgazdaság technikai megújulása (pl. nehézeke, szügyhám, háromnyomásos gazdálkodás) révén termelési felesleg keletkezett. <strong>Ez lehetővé tette az ipar és a kereskedelem leválását a mezőgazdaságról, ami a városi élet újjászületéséhez és új városok alapításához vezetett.</strong> A középkori városok nemcsak gazdasági központokká, hanem a szabadság, a jogi autonómia és a kulturális fejlődés bástyáivá is váltak a hűbéri rendszerben.</p>
  `,
  biography: `
    <p>A középkori városok kezdetben földesúri birtokokon alakultak ki (pl. utak kereszteződésénél, gázlóknál, püspöki székhelyek vagy várak közelében). A lakók – akik kezdetben jobbágyok voltak – függtek a földesúrtól. Hamarosan azonban megkezdődött a <em>kommuna-mozgalom</em>: a polgárok összefogtak, és pénzzel vagy fegyverrel harcoltak ki autonómiát (önkormányzatiságot) a hűbéruraktól. A királyok gyakran támogatták a városokat, mivel a polgárság készpénzadója erősítette a központi hatalmat a nagybirtokosokkal szemben. E harcok eredményeként született meg a híres középkori jogelv: <strong>„A városi levegő szabaddá tesz”</strong> (Stadtluft macht frei), mely szerint ha egy szökött jobbágy egy évet és egy napot a város falain belül eltöltött anélkül, hogy ura visszaigényelte volna, elveszítette jobbágyi státuszát és szabad emberré vált.</p>
  `,
  keyWorks: [
    {
      title: "A városi privilégiumok és önkormányzat",
      analysis: `
        <p>A városok szabadságát a királyok vagy földesurak által kiállított <strong>kiváltságlevelek (privilégiumok)</strong> biztosították. A legfontosabb városi kiváltságok közé tartoztak:</p>
        <ul>
          <li><strong>Egyösszegű adózás (tributum):</strong> A város lakói közvetlenül a királynak fizették az adót, évente egyszer, fix összegben, így a földesúri önkény alól mentesültek.</li>
          <li><strong>Saját bíráskodás (jurisdictio):</strong> A polgárok felett saját választott bírájuk és a városi tanács (szenátus) ítélkezett a helyi jog szokásai szerint.</li>
          <li><strong>Plébánosválasztás joga:</strong> Biztosította az egyházi autonómiát és a helyi vallási élet irányítását.</li>
          <li><strong>Falépítési jog:</strong> A város saját védelmére kőfalat emelhetett, ami katonai erőt is jelentett.</li>
          <li><strong>Vásártartási jog és árumegállító jog (jus stapulae):</strong> Az árumegállító jog kötelezte az áthaladó idegen kereskedőket, hogy termékeiket a város piacán eladásra kínálják, vagy fizessenek vámot.</li>
        </ul>
        <p>Ezek a jogok zárt egységgé tették a várost a feudális környezetben, létrehozva a szabad királyi városok (civitas) kategóriáját.</p>
      `
    },
    {
      title: "A céhrendszer és a kézműves ipar",
      analysis: `
        <p>A városi kézművesek a 11-12. századtól kezdődően szakmánként érdekvédelmi és vallási szervezetekbe, <strong>céhekbe</strong> tömörültek. A céhek legfőbb célja a piac szabályozása, a konkurencia kizárása és a tagok megélhetésének biztosítása volt. A céhrendszer legfőbb jellemzői:</p>
        <ul>
          <li><strong>Monopolhelyzet:</strong> A városban csak a céh tagjai folytathattak adott ipari tevékenységet. A céhen kívüli kontárokat üldözték.</li>
          <li><strong>A verseny korlátozása:</strong> Szigorúan megszabták a nyersanyagok beszerzését, a munkaidőt, az alkalmazható segédek számát, a munkaeszközök minőségét és a termékek árát. Tilos volt a reklám és az olcsóbb árusítás.</li>
          <li><strong>Szigorú hierarchia:</strong> A műhely élén a <em>mester</em> állt. Neki dolgoztak az <em>inasok</em> (akik tanultak) és a <em>legények</em> (akik már értettek a szakmához). A legényből úgy válhatott mester, ha külföldi vándorút (peregrináció) után elkészítette a mestermunkát (remek) és tagdíjat fizetett.</li>
          <li><strong>Szociális gondoskodás:</strong> A céhtagok segítették egymás özvegyeit, árváit és beteg tagjait a céhládából.</li>
        </ul>
        <p>Bár a céhek garantálták a magas minőséget, a verseny hiánya és a technológiai újítások tiltása miatt a későbbi századokban a gazdasági fejlődés gátjává váltak.</p>
      `
    }
  ],
  styleAndForm: `
    <p>A középkori városok térbeli szerkezetét a védelem igénye határozta meg. A kőfalak mögötti terület szűkös volt, ezért a házak többnyire többszintesek voltak, az utcák pedig rendkívül keskenyek, kanyargósak és sötétek. A csatornázás hiánya miatt a higiéniai viszonyok katasztrofálisak voltak, a szemét és a szennyvíz az utcára folyt, ami hozzájárult a pusztító pestisjárványok gyors terjedéséhez. A város középpontjában a piac (főtér), a városháza és a monumentális katedrális állt. A lakosság társadalmilag erősen rétegzett volt: a legfelső réteget a gazdag kereskedők (<strong>patríciusok</strong>) alkották, akik a város vezetőségét adták. A többséget a polgárjoggal bíró kézművesek (<strong>polgárok</strong>) alkották. A legalsó, jogfosztott réteget a polgárjog nélküli napszámosok, szolgák és kontárok (<strong>plebejusok</strong>) alkották.</p>
  `,
  conclusion: `
    <p>A középkori városok a feudális társadalmon belül egy teljesen új gazdasági és társadalmi minőséget képviseltek. A pénzgazdálkodás és a távolsági kereskedelem motorjaivá váltak (a Levantei útvonal Kelettel, a Hanza északon kötötte össze a kontinens gazdaságát). A városok falai között indult virágzásnak a világi oktatás (egyetemek) és a polgári kultúra, amely megalapozta a humanizmus és a reneszánsz korát, hosszú távon pedig a kapitalizmus kialakulását.</p>
  `,
  flashcards: [
    {
      question: "Mi a „városi levegő szabaddá tesz” elv lényege?",
      answer: "Ha egy szökött jobbágy egy évig és egy napig a városban élt anélkül, hogy a földesura visszakövetelte volna, szabad emberré vált."
    },
    {
      question: "Mi volt az árumegállító jog (jus stapulae)?",
      answer: "A város kiváltsága, amely kötelezte az áthaladó kereskedőket, hogy áruikat a helyi piacon eladásra kínálják."
    },
    {
      question: "Kik alkották a középkori város vezető rétegét (patríciusok)?",
      answer: "A leggazdagabb, polgárjoggal rendelkező kereskedőcsaládok tagjai, akik kezükben tartották a város irányítását."
    },
    {
      question: "Mi volt a céh legfőbb célja?",
      answer: "A piac szabályozása, a konkurencia kizárása és a tagok tisztes megélhetésének biztosítása (nem a profit maximalizálása)."
    },
    {
      question: "Melyik két nagy távolsági kereskedelmi útvonal határozta meg a középkori Európát?",
      answer: "A Levantei kereskedelem (keleti luxuscikkek a Földközi-tengeren) és a Hanza szövetség (északi nyersanyagok az Északi- és Balti-tengeren)."
    }
  ],
  quiz: [
    {
      question: "Melyik folyamat játszott kulcsszerepet a középkori városok 10-11. századi újjászületésében?",
      options: [
        "A római utak teljes megsemmisülése",
        "A mezőgazdasági technika fejlődése és az árutermelés megjelenése",
        "Az önellátó gazdálkodás kizárólagossá válása",
        "A pápaság világi hatalmának bukása"
      ],
      correctIndex: 1,
      explanation: "A mezőgazdaság fejlődése (pl. nehézeke, vetésforgó) felesleget eredményezett, ami lehetővé tette az ipar és kereskedelem önállósodását és a városok növekedését."
    },
    {
      question: "Mit jelent a kommuna-mozgalom a középkorban?",
      options: [
        "A parasztok földosztási mozgalmát",
        "A szerzetesrendek szegénységi mozgalmát",
        "A városi polgárok összefogását az autonómia kivívására a földesúrral szemben",
        "A céhen kívüli segédek lázadását a mesterek ellen"
      ],
      correctIndex: 2,
      explanation: "A kommuna a polgárok esküszövetsége volt, amellyel önkormányzati jogokat (privilégiumokat) követeltek és harcoltak ki a földesuraktól."
    },
    {
      question: "Mennyi idő elteltével vált szabaddá egy szökött jobbágy a városban a jog szokása szerint?",
      options: [
        "Fél év után",
        "Egy év és egy nap után",
        "Öt év folyamatos tartózkodás után",
        "Azonnal, amint átlépte a városkaput"
      ],
      correctIndex: 1,
      explanation: "A szokásjog szerint ha a jobbágyot ura egy év és egy nap alatt nem találtatta meg és nem követelte vissza a várostól, szabad polgárként élhetett tovább."
    },
    {
      question: "Melyik jogot jelenti az 'egyösszegű adózás' privilégiuma?",
      options: [
        "A polgárok egyáltalán nem fizettek adót a királynak",
        "A város közössége évente egy alkalommal, közvetlenül a királynak fizetett egy rögzített összeget",
        "Minden polgárnak pontosan ugyanannyi adót kellett fizetnie",
        "Csak a kereskedők adóztak, a kézművesek mentesültek"
      ],
      correctIndex: 2,
      explanation: "A kollektív adózás megvédte a várost a földesúri adószedők zaklatásától és az önkényes adóemelésektől."
    },
    {
      question: "Melyik jog kötelezte a kereskedőket, hogy áruikat a városon áthaladva eladásra kínálják?",
      options: [
        "Vásártartási jog",
        "Árumegállító jog",
        "Vámmentesség joga",
        "Bíráskodási jog"
      ],
      correctIndex: 1,
      explanation: "Az árumegállító jog (jus stapulae) értelmében a külföldi kereskedő köteles volt áruját a város piacán kirakni és a helyieknek megvételre felkínálni."
    },
    {
      question: "Ki volt a város legfőbb bírája a középkori autonóm városban?",
      options: [
        "A helyi püspök",
        "A legközelebbi földesúr által kinevezett tisztviselő",
        "A polgárok által választott bíró vagy polgármester",
        "A királyi ispán"
      ],
      correctIndex: 2,
      explanation: "A városi önkormányzat alapvető része volt a szabad bíróválasztás joga, így saját maguk közül választották meg a bírót."
    },
    {
      question: "Kik alkották a középkori városok társadalmának legfelső, szűk elitjét?",
      options: [
        "A patríciusok",
        "A plebejusok",
        "A kontárok",
        "A céhsegédek"
      ],
      correctIndex: 0,
      explanation: "A patríciusok a gazdag nagykereskedő családok tagjai voltak, akik kisajátították a városi tisztségeket (szenátus, bírói tisztség)."
    },
    {
      question: "Melyik társadalmi réteg alkotta a középkori város lakosságának többségét?",
      options: [
        "A nemesek",
        "A polgárjoggal rendelkező kézművesek",
        "A jobbágyok",
        "A plebejusok"
      ],
      correctIndex: 1,
      explanation: "A város gerincét a polgárjoggal bíró, saját műhellyel rendelkező önálló kézművesek (polgárok) adták."
    },
    {
      question: "Kik voltak a plebejusok a középkori városokban?",
      options: [
        "A városi papok",
        "A leggazdagabb bankárok",
        "A polgárjoggal nem rendelkező, szegény napszámosok, szolgák és kontárok",
        "A céhmesterek"
      ],
      correctIndex: 2,
      explanation: "A plebejusok jogfosztott városi lakosok voltak, nem volt polgárjoguk, nem szavazhattak, és nem lehettek céhtagok."
    },
    {
      question: "Mi a céh?",
      options: [
        "A kereskedők katonai szövetsége",
        "Azonos szakmát űző kézművesek érdekvédelmi szervezete",
        "A városi önkormányzat központi épülete",
        "A jobbágyok adófajtája"
      ],
      correctIndex: 1,
      explanation: "A céh az azonos mesterséget folytató szabad kézművesek vallásos, gazdasági és katonai önsegélyező szervezete volt."
    },
    {
      question: "Hogyan törekedtek a céhek a verseny korlátozására?",
      options: [
        "Szigorúan meghatározták a munkaidőt, a szerszámok számát és a termékek árát",
        "Támogatták a reklámot és az akciókat",
        "Engedélyezték, hogy bárki szabadon nyithasson műhelyt",
        "Gépeket vezettek be a termelés felgyorsítására"
      ],
      correctIndex: 0,
      explanation: "A céhek tiltották a belső versenyt, hogy minden mester biztos megélhetéshez jusson. Korlátozták a segédek számát és az árakat is."
    },
    {
      question: "Ki volt a céhen kívüli engedély nélküli kézműves?",
      options: [
        "A plebejus",
        "A kontár",
        "A hospes",
        "Az inas"
      ],
      correctIndex: 1,
      explanation: "A kontárok olyan kézművesek voltak, akik nem voltak céhtagok, ezért illegálisan, olcsóbban és rosszabb minőségben dolgoztak; a céh üldözte őket."
    },
    {
      question: "Mi volt a céhbeli legény feladata a mesterré válás folyamatában?",
      options: [
        "Kizárólag adófizetés",
        "Hosszú vándorút (peregrináció) külföldön és a mestermunka (remek) elkészítése",
        "Belépés a lovagrendbe",
        "Egy kolostor felépítése a városban"
      ],
      correctIndex: 1,
      explanation: "A segédnek vándorútra kellett indulnia, hogy idegenben fejlessze tudását, majd itthon el kellett készítenie a vizsgamunkát (remeket)."
    },
    {
      question: "Milyen pozitív társadalmi szerepet játszott a céh a tagjai életében?",
      options: [
        "Ingyenes külföldi utazásokat szervezett mindenkinek",
        "Gondoskodott a beteg tagokról, özvegyekről és árvákról a céhládából",
        "Mentességet biztosított a királyi adók alól",
        "Biztosította a nemesi cím elnyerését"
      ],
      correctIndex: 1,
      explanation: "A céh szociális intézményként is működött: a tagok befizetéseiből tartották fenn a céhládát, amelyből a rászoruló tagokat és családjaikat segítették."
    },
    {
      question: "Melyik kereskedelmi útvonal kötötte össze Európát a Távol-Kelettel?",
      options: [
        "Hanza kereskedelem",
        "Levantei kereskedelem",
        "Borostyánút",
        "Selyemút észak-európai ága"
      ],
      correctIndex: 1,
      explanation: "A Levantei kereskedelem a Földközi-tenger keleti medencéjén keresztül szállított luxuscikkeket (fűszerek, selyem, illatszerek) Európába."
    },
    {
      question: "Melyek voltak a Hanza szövetség legfőbb kereskedelmi árui?",
      options: [
        "Keleti fűszerek, selyem és porcelán",
        "Arany, ezüst és drágakövek",
        "Nyersanyagok (fa, viasz, prémes állatok), gabona, hering és posztó",
        "Fegyverek és lőpor"
      ],
      correctIndex: 2,
      explanation: "A Hanza az Északi- és Balti-tenger vidékét kötötte össze, főként tömegárukkal kereskedtek: fával, gabonával, hallal, vassal és szőrmékkel."
    },
    {
      question: "Hogyan védekeztek a középkori városok a külső katonai támadások ellen?",
      options: [
        "Kőfalak építésével (falépítési jog) és polgárőrség szervezésével",
        "A királyi hadsereg állandó állomásoztatásával",
        "Fizetett zsoldosok állandó készenlétben tartásával",
        "A városok elrejtésével a hegyekben"
      ],
      correctIndex: 0,
      explanation: "A falépítési jog alapvető privilégium volt. A falak védelmét háború esetén maguk a polgárok (céhek szerint beosztva) látták el."
    },
    {
      question: "Milyen higiéniai jellemzői voltak a középkori városoknak?",
      options: [
        "Modern csatornahálózat és tiszta utcák jellemezték",
        "Csatornázás hiánya, kosz, az utcára öntött szemét és szennyvíz jellemezte",
        "A fürdők teljes betiltása miatt senki sem tisztálkodott",
        "Kizárólag földalatti alagutakban közlekedtek a higiénia miatt"
      ],
      correctIndex: 1,
      explanation: "A szűk utcákon felhalmozódó szemét és a szennyvízelvezetés hiánya miatt a higiéniai viszonyok nagyon rosszak voltak, ami a járványok táptalaját adta."
    },
    {
      question: "Melyik intézmény jelent meg a városokban az oktatás és a tudomány terén?",
      options: [
        "A lovagi akadémiák",
        "A népiskolák",
        "Az egyetemek (universitas)",
        "A királyi kutatóintézetek"
      ],
      correctIndex: 2,
      explanation: "Az egyetemek a középkori városi fejlődés termékei voltak, mint a tanárok és diákok önkormányzati testületei."
    },
    {
      question: "Miért váltak a céhek a késő középkorban és kora újkorban a fejlődés gátjává?",
      options: [
        "Mert túl olcsón adták a termékeket",
        "Mert tiltották a technikai újításokat és akadályozták a szabad versenyt",
        "Mert kizárólag mezőgazdasággal foglalkoztak",
        "Mert nem képeztek inasokat"
      ],
      correctIndex: 1,
      explanation: "A céhek merev szabályrendszere, a technikai fejlesztések tiltása és a szabad verseny gátlása megakadályozta a tömegtermelést és a manufaktúrák terjedését."
    }
  ]
});
