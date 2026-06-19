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
      question: "Mit fejez ki a klasszikus 'Verba volant, scripta manent' szállóige?",
      options: [
        "A szóbeliség mulandóságát és az írásbeliség maradandóságát",
        "A madarak énekét és a papíralapú könyveket",
        "A beszéd gyorsaságát és az írás lassúságát",
        "Az írásbeli vizsgák nehézségét a szóbelivel szemben"
      ],
      correctIndex: 0,
      explanation: "A latin közmondás jelentése: 'A szó elrepül, az írás megmarad', ami a rögzítettség és a maradandóság különbségére utal."
    },
    {
      question: "Melyik neves kultúrtörténész foglalkozott behatóan a szóbeliség és az írásbeliség történelmi kapcsolatával?",
      options: [
        "Walter J. Ong",
        "Noam Chomsky",
        "Ferdinand de Saussure",
        "Sigmund Freud"
      ],
      correctIndex: 0,
      explanation: "Walter J. Ong amerikai kutató írta meg a 'Szóbeliség és írásbeliség' című alapművet, amelyben bemutatta az írás tudatformáló hatását."
    },
    {
      question: "Mi a szóbeli szövegek egyik legfőbb létrehozásbeli sajátossága?",
      options: [
        "A spontaneitás és a tervezetlenség",
        "A szigorú utólagos szerkeszthetőség",
        "A vizuális csatorna kizárólagos használata",
        "A kontextustól való teljes függetlenség"
      ],
      correctIndex: 0,
      explanation: "Mivel a beszélt szöveg alkotása és befogadása szinte egy időben történik, a szóbeliséget a spontán jelleg, az önjavítások és a laza szerkezet jellemzi."
    },
    {
      question: "Melyik mondattani jellemző dominál a beszélt nyelvi szövegekben?",
      options: [
        "Az egyszerű mondatok és a mellérendelő szerkezetek (parataxis)",
        "A bonyolult, többszörösen összetett alárendelő körmondatok (hypotaxis)",
        "A névszói állítmányok teljes hiánya",
        "A szigorúan szerkesztett passzív szerkezetek"
      ],
      correctIndex: 0,
      explanation: "A beszélt nyelvben az időbeli korlátok miatt a beszélők rövidebb mondatokat fűznek össze mellérendelő módon (pl. és, de kötőszavakkal)."
    },
    {
      question: "Melyik mondattani jellemző sajátja az írott szövegeknek a tervezettségből adódóan?",
      options: [
        "A bonyolultabb, többszörösen összetett alárendelő mondatok",
        "A hiányos mondatok rendkívül nagy aránya",
        "A kötőszavak teljes elhagyása",
        "A hangutánzó mondatszavak állandó használata"
      ],
      correctIndex: 0,
      explanation: "Az írott szövegek megalkotásakor van idő a gondolatok strukturálására, ezért gyakoribbak a logikailag pontosan kifejtett alárendelések."
    },
    {
      question: "Hogyan nevezzük azt a beszélt nyelvi jelenséget, amikor a mondat szerkezete menet közben megtörik vagy megváltozik (anakoluthon)?",
      options: [
        "Mondatszerkezeti törés (anakoluthon)",
        "Szófajváltás",
        "Szillogizmus",
        "Elipszis (kihagyás)"
      ],
      correctIndex: 0,
      explanation: "Az anakoluthon a spontán beszéd jellemzője, amikor a beszélő a mondat közben vált szerkezetet, így a mondat nyelvtanilag hibássá vagy befejezetlenné válik."
    },
    {
      question: "Hogyan pótolja az írásbeliség a szóbeli kommunikáció akusztikus és vizuális kísérőcsatornáit (pl. hangsúly, hanghordozás, gesztusok)?",
      options: [
        "Írásjelekkel, tipográfiával (pl. dőlt betű) és stilisztikai kifejezőeszközökkel",
        "A szavak hangos felolvasásával",
        "A szöveg hosszúságának növelésével",
        "Idegen szavak használatával"
      ],
      correctIndex: 0,
      explanation: "Az író az írásjelekkel (pl. felkiáltójel, kérdőjel, három pont), a betűk formázásával és a szavak tudatos megválasztásával pótolja a hanghordozást."
    },
    {
      question: "Mit jelent az, hogy az írott szöveg 'kontextusfüggetlenebb'?",
      options: [
        "A szövegnek önmagában, a fizikai beszédhelyzet segítsége nélkül kell érthetőnek lennie, mert a felek nincsenek egy térben és időben.",
        "Az írás független a nyelvhelyességi szabályoktól.",
        "Az író nem vesz tudomást a történelmi háttérről.",
        "A szöveget bármilyen nyelvre azonnal le lehet fordítani."
      ],
      correctIndex: 0,
      explanation: "Mivel a befogadó nincs jelen, az írónak explicitté, egyértelművé kell tennie a körülményeket, nem utalhat a közvetlen környezetre (pl. nem mondhatja jelzés nélkül, hogy 'ez itt')."
    },
    {
      question: "Melyik állítás igaz a szóbeli kommunikáció visszacsatolására (feedback)?",
      options: [
        "Azonnali és közvetlen, a hallgató reakciói azonnal alakíthatják a beszédet.",
        "Késleltetett vagy egyáltalán nincs rá lehetőség.",
        "Kizárólag írásbeli formában történhet.",
        "Nincs szerepe a kommunikációs folyamatban."
      ],
      correctIndex: 0,
      explanation: "A szóbeli beszélgetés során a hallgató arckifejezései, szavai vagy testbeszéde alapján a beszélő azonnal módosíthatja a mondandóját."
    },
    {
      question: "Melyik médium valósítja meg a digitális írásbeliséget (másodlagos szóbeliséget)?",
      options: [
        "Azonnali üzenetküldő alkalmazások (chat) és SMS-ek",
        "A nyomtatott lexikonok",
        "A hagyományos könyvtári katalógusok",
        "A hivatalos postai levelek"
      ],
      correctIndex: 0,
      explanation: "A chatelés írott formában zajlik, de dinamikája, lazasága és azonnalisága miatt szerkezetileg és stílusilag a szóbeliséghez áll közelebb."
    },
    {
      question: "Hogyan pótolják a nem nyelvi jeleket a modern digitális írásbeliségben?",
      options: [
        "Hangulatjelekkel (emojik), matricákkal és írásjel-halmozással (pl. !!!)",
        "Szigorú latin nyelvű kifejezésekkel",
        "Csak nagybetűkkel írt szavakkal",
        "A helyesírási szabályok fokozott ellenőrzésével"
      ],
      correctIndex: 0,
      explanation: "Az emojik és matricák a beszélő arckifejezéseit és érzelmeit hivatottak helyettesíteni az írott, digitális térben."
    },
    {
      question: "Melyik szövegtípus képviseli a tisztán szóbeli műfajt?",
      options: [
        "Kötetlen társalgás",
        "Hivatalos levél",
        "Enciklopédia-szócikk",
        "Újságcikk"
      ],
      correctIndex: 0,
      explanation: "A baráti, kötetlen beszélgetés a primer (elsődleges) szóbeliség legtermészetesebb formája."
    },
    {
      question: "Melyik tulajdonság jellemző a tudományos stílusú írott szövegekre?",
      options: [
        "Pontos fogalomhasználat, logikus felépítés és csiszoltság",
        "Spontán töltelékszavak sűrű alkalmazása",
        "A nonverbális jelek emojikkal való pótlása",
        "A mondatok befejezetlensége és nyelvtani ziláltsága"
      ],
      correctIndex: 0,
      explanation: "A tudományos írott szövegek a legmagasabb szintű tervezettséget, pontosságot és strukturáltságot követelik meg."
    },
    {
      question: "Mi a szerepe a töltelékszavaknak (pl. 'hát', 'izé', 'ugye') a szóbeli beszédben?",
      options: [
        "Időnyerést biztosítanak a beszélőnek a gondolatai megfogalmazásához.",
        "A tudományos stílus kötelező elemei.",
        "A mondat logikai kapcsolatát erősítik.",
        "Növelik az írott szöveg szókincsét."
      ],
      correctIndex: 0,
      explanation: "A spontán beszédben a gondolkodási folyamat és a beszéd párhuzamosan fut; a töltelékszavak a megakadások áthidalására és időnyerésre szolgálnak."
    },
    {
      question: "Melyik csatorna játszik szerepet a szóbeli kommunikációban?",
      options: [
        "Auditív (akusztikus) és vizuális csatorna egyaránt",
        "Kizárólag a vizuális csatorna",
        "Kizárólag a tapintási csatorna",
        "Csak a taktilis csatorna"
      ],
      correctIndex: 0,
      explanation: "A szóbeliség során nemcsak halljuk a másikat (auditív), hanem látjuk a gesztusait, mimikáját is (vizuális)."
    },
    {
      question: "Mi a különbség a szóbeli és az írott szöveg javíthatósága között?",
      options: [
        "Az írott szöveget a befogadás előtt korlátlanul javíthatjuk, míg a beszédben a javítás (önjavítás) a hallgató előtt, folyamatában történik.",
        "A szóbeli szöveg egyáltalán nem javítható utólag.",
        "Az írott szöveg hibái automatikusan eltűnnek a papírról.",
        "Nincs különbség, mindkettő azonnal rögzül javíthatatlanul."
      ],
      correctIndex: 0,
      explanation: "Az írott szövegnél a javítási fázis rejtve marad az olvasó elől, míg a beszédben az önjavítás (pl. 'illetve nem is...') a hallgató füle hallatára zajlik."
    },
    {
      question: "Mit nevezünk parataxisnak, ami a beszélt nyelvre jellemzőbb?",
      options: [
        "Mellérendelő mondatfűzést",
        "Alárendelő mondatfűzést",
        "A szavak szótagonkénti kiejtését",
        "A hangmagasság változását"
      ],
      correctIndex: 0,
      explanation: "A parataxis a mellérendelő mondatok összekapcsolása, amely egyszerűbbé és gyorsabbá teszi a spontán beszédet."
    },
    {
      question: "Mit jelent a hypotaxis fogalma, amely az írott nyelvre jellemzőbb?",
      options: [
        "Alárendelő mondatfűzést és bonyolultabb hierarchiát",
        "A mondatrészek teljes elhagyását",
        "A beszélt nyelv kötetlen csevegését",
        "A szavak ritmikus ismétlését"
      ],
      correctIndex: 0,
      explanation: "A hypotaxis az alárendelő összetett mondatok használata, ami logikailag pontosan strukturált gondolatmenetet tesz lehetővé az írásban."
    },
    {
      question: "Mi jellemzi a szóbeli kommunikáció időbeliségét?",
      options: [
        "Lineáris és visszafordíthatatlan; elhangzása után azonnal elenyészik (ha nem rögzítik).",
        "Bármikor megállítható, és tetszőleges pontról újraolvasható.",
        "Térben és időben teljesen független a beszélőktől.",
        "Hosszabb élettartamú, mint a kőbe vésett írás."
      ],
      correctIndex: 0,
      explanation: "A beszélt nyelv időben zajlik, lineáris folyamat, és nem lehet a már elhangzott szót fizikailag letörölni vagy visszatekerni a valós idejű beszélgetésben."
    },
    {
      question: "Melyik állítás igaz a digitális etikettre (netikettre) a digitális szóbeliségben?",
      options: [
        "Bár a chatelés laza, a csupa nagybetűvel írt szavak kiabálásnak minősülnek, így kerülendők.",
        "A netikett szerint minden e-mailt hivatalos pecséttel kell ellátni.",
        "A digitális térben tilos az emojik használata.",
        "A chatelés során kötelező a középkori magyar nyelvhasználat."
      ],
      correctIndex: 0,
      explanation: "A csupa nagybetűs írás (pl. 'MIÉRT NEM HÍVTÁL?') a digitális kommunikációban a kiabálást, az agressziót szimbolizálja, így udvariatlanságnak számít."
    }
  ]
});
