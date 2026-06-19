// 11. nyelvtan tétel: A magyar nyelv szófaji rendszere: az alapszófajok, viszonyszók és a mondatszók
window.loadGrammarData(11, {
  outline: [
    "A szófaj fogalma és a szófajba sorolás szempontjai",
    "Az alapszófajok (valódi alapszófajok, átmeneti szófajok, helyettesítő szófajok)",
    "A viszonyszók (kapcsolati és funkcionális szerepek)",
    "A mondatszók (interakciós és indulatkifejező szerepek)",
    "A szófajváltás jelensége a magyar nyelvben"
  ],
  introduction: `
    <p>A szófajok a nyelv szókészletének olyan csoportjai, amelyeket a szavak **jelentése**, **alaktani viselkedése** (ragozhatósága) és **mondattani szerepe** (mondatbeli betölthető funkciója) alapján különítünk el. <strong>A magyar nyelv szófaji rendszere három fő kategóriára oszlik: alapszófajokra, viszonyszókra és mondatszókra.</strong></p>
  `,
  biography: `
    <p>A magyar szófajtan első tudományos rendszerezését Révai Miklós végezte el a 19. század elején. A mai modern, funkcionális-kognitív alapú szófaji felosztást a Rácz Endre és Szathmári István által szerkesztett leíró nyelvtanok, valamint a Keszler Borbála-féle akadémiai Magyar grammatika határozta meg.</p>
  `,
  keyWorks: [
    {
      title: "Az alapszófajok rendszere",
      analysis: `
        <p>Az alapszófajok önálló fogalmi jelentéssel bírnak, önállóan lehetnek mondatrészek, ragozhatók (többségükben), és kérdezhetünk rájuk. Három alcsoportjuk van:</p>
        <ol>
          <li><strong>Valódi alapszófajok</strong>:
            <ul>
              <li><i>Ige</i>: Cselekvést, történést, létezést fejez ki (pl. <i>olvas, történik, van</i>).</li>
              <li><i>Főnév</i>: Élőlények, tárgyak, elvont dolgok neve (pl. <i>ember, könyv, szeretet</i>).</li>
              <li><i>Melléknév</i>: Személyek, tárgyak tulajdonságát fejezi ki (pl. <i>piros, okos</i>).</li>
              <li><i>Számnév</i>: Mennyiséget, sorrendiséget fejez ki (pl. <i>három, sok, harmadik</i>).</li>
              <li><i>Határozószó</i>: A cselekvés körülményeit (hely, idő, mód) fejezi ki (pl. <i>itt, tegnap, lassan</i>).</li>
            </ul>
          </li>
          <li><strong>Átmeneti szófajok (Igenevek)</strong>: Az ige és más alapszófajok tulajdonságait ötvözik.
            <ul>
              <li><i>Főnévi igenév</i>: -ni képzős (pl. <i>tanulni</i>).</li>
              <li><i>Melléknévi igenév</i>: folyamatos (-ó/-ő: <i>író</i>), befejezett (-t/-tt: <i>megírt</i>), beálló (-andó/-endő: <i>megírandó</i>).</li>
              <li><i>Határozói igenév</i>: -va/-ve, -ván/-vén képzős (pl. <i>sírva, elolvasván</i>).</li>
            </ul>
          </li>
          <li><strong>Helyettesítő alapszófajok (Névmások)</strong>: Önálló jelentésük nincs, a szövegkörnyezetben helyettesítenek más alapszófajokat, pl. <i>én, te, ő</i> (személyes), <i>ez, az</i> (mutató), <i>ki, mi</i> (kérdő), <i>valaki, valami</i> (határozatlan).</li>
        </ol>
      `
    },
    {
      title: "Viszonyszók és Mondatszók",
      analysis: `
        <p>Ezek a szavak nem bírnak önálló fogalmi jelentéssel, és önállóan nem lehetnek mondatrészek:</p>
        <ul>
          <li><strong>Viszonyszók</strong>: Más szavak közötti viszonyt fejeznek ki, vagy nyelvtani szerepet töltenek be.
            <ul>
              <li><i>Segédige</i>: Az igei jelentést módosítja időben vagy módban (pl. <i>fog olvasni, olvasott volna</i>).</li>
              <li><i>Névutó</i>: A főnév mögött állva határozói viszonyt fejez ki (pl. <i>asztal alatt, ház mögött</i>).</li>
              <li><i>Kötőszó</i>: Mondatokat vagy mondatrészeket köt össze (pl. <i>és, de, mert, hogy</i>).</li>
              <li><i>Névelő</i>: Határozott (<i>a, az</i>) és határozatlan (<i>egy</i>).</li>
              <li><i>Módosítószó</i>: A mondat tartalmához való beszélői viszonyt fejezi ki (pl. <i>talán, talán nem, bizonyosan, vajon</i>).</li>
              <li><i>Igekötő</i>: Az ige irányát vagy aspektusát módosítja (pl. <i>be-, ki-, meg-, el-</i>).</li>
            </ul>
          </li>
          <li><strong>Mondatszók</strong>: Nincs mondattani kapcsolatuk más szavakkal, gyakran önálló mondatot alkotnak.
            <ul>
              <li><i>Indulatszó</i>: Érzelmet, akaratot fejez ki (pl. <i>jaj, ó, fúj, pszt</i>).</li>
              <li><i>Hangutánzó mondatszó</i>: pl. <i>reccs, puff, durr</i>.</li>
              <li><i>Kapcsolattartó mondatszó</i>: pl. <i>szia, szervusz, igen, nem, nos</i>.</li>
            </ul>
          </li>
        </ul>
      `
    }
  ],
  styleAndForm: `
    <p>A magyar nyelvben gyakori a **szófajváltás** (szófaji konverzió), amikor egy szó ragozás vagy képzés nélkül szófajt vált a mondatbeli szerepe alapján (pl. a <i>zöld</i> melléknév főnévvé válik: „Szeretem a <i>zöldet</i>”; vagy az <i>író</i> igenév főnévvé válik).</p>
  `,
  conclusion: `
    <p>A szófaji rendszer ismerete az alaktani és mondattani elemzések alapköve, amely segít megérteni a szavak mondatbeli viselkedését és a helyesírási szabályokat (pl. különírás-egybeírás).</p>
  `,
  flashcards: [
    {
      question: "Melyik három szempont alapján soroljuk szófajokba a szavakat?",
      answer: "A szó jelentése, alaktani viselkedése (ragozhatóság) és mondattani szerepe szerint."
    },
    {
      question: "Melyek az átmeneti szófajok (igenevek) típusai?",
      answer: "Főnévi igenév (tanulni), melléknévi igenév (olvasó, megírt, beálló) és határozói igenév (sírva)."
    },
    {
      question: "Mi a különbség a névutó és az igekötő között?",
      answer: "A névutó a főnév után állva határozói viszonyt jelöl (pl. fa alatt), az igekötő az igéhez kapcsolódva annak irányát/befejezettségét fejezi ki (pl. megír, kimegy)."
    },
    {
      question: "Melyik szófaji kategóriába tartoznak az indulatszavak (pl. jaj, ó)?",
      answer: "A mondatszók kategóriájába."
    }
  ],
  quiz: [
    {
      question: "Mely szempontok alapján határozzuk meg egy szó szófaját a magyar nyelvben?",
      options: [
        "Jelentéstani, alaktani és mondattani szempontok alapján",
        "Kizárólag a szó hangalakja és szótagolása alapján",
        "A szó helyesírása és történelmi eredete szerint",
        "A szó mondatbeli helye és szótagszáma szerint"
      ],
      correctIndex: 0,
      explanation: "A szófajba sorolás hármas kritériuma: a szó jelentése (fogalmi tartalom), alaktani viselkedése (ragozhatóság, jelek, ragok) és mondattani szerepe (milyen mondatrész lehet)."
    },
    {
      question: "Melyik szófaj NEM tartozik a valódi alapszófajok közé?",
      options: [
        "Ige",
        "Főnévi igenév",
        "Határozószó",
        "Melléknév"
      ],
      correctIndex: 1,
      explanation: "A főnévi igenév az átmeneti szófajok (igenevek) közé tartozik, nem pedig a valódi alapszófajok közé."
    },
    {
      question: "Melyik mondatban találunk beálló melléknévi igenevet?",
      options: [
        "A tegnap megírt levelet ma postáztam.",
        "A fapadon ülő fiú nagyot köszönt.",
        "A holnap elintézendő feladatok még várhatnak.",
        "Sírva fakadt a kislány az elveszett játék miatt."
      ],
      correctIndex: 2,
      explanation: "A beálló melléknévi igenév képzője az -andó/-endő. Az 'elintézendő' szó a jövőre utal, a cselekvés végrehajtása még hátravan."
    },
    {
      question: "Milyen szófajú a 'tanulni' szó a következő mondatban: 'Szeretek új dolgokat tanulni.'?",
      options: [
        "Ige",
        "Főnév",
        "Főnévi igenév",
        "Határozószó"
      ],
      correctIndex: 2,
      explanation: "A 'tanulni' egy -ni képzős főnévi igenév, amely átmeneti szófajként az ige és a főnév tulajdonságait egyesíti."
    },
    {
      question: "Melyik állítás igaz a határozói igenevekre?",
      options: [
        "Képzőjük a -va/-ve vagy -ván/-vén, és a cselekvés körülményét fejezik ki.",
        "Fokozhatóak és melléknévi szerepet töltenek be.",
        "Alany- és tárgyragot is kaphatnak.",
        "Önállóan sosem tölthetnek be állítmányi szerepet."
      ],
      correctIndex: 0,
      explanation: "A határozói igenevek a -va/-ve, -ván/-vén képzőkkel jönnek létre, határozói szerepet töltenek be, és alaktanilag ragozhatatlanok."
    },
    {
      question: "Melyik csoport képvisel kizárólag helyettesítő alapszófajokat?",
      options: [
        "Névmások",
        "Igenevek",
        "Módosítószók",
        "Névutók"
      ],
      correctIndex: 0,
      explanation: "A helyettesítő alapszófajok a névmások, amelyek önálló fogalmi jelentés nélkül helyettesítenek főneveket, mellékneveket, számneveket vagy határozószókat."
    },
    {
      question: "Milyen típusú névmás az 'egymás' szó?",
      options: [
        "Visszaható névmás",
        "Személyes névmás",
        "Kölcsönös névmás",
        "Mutató névmás"
      ],
      correctIndex: 2,
      explanation: "Az 'egymás' a magyar nyelv egyetlen kölcsönös névmása, amely két vagy több személy kölcsönös kapcsolatát, cselekvését fejezi ki."
    },
    {
      question: "Melyik mondatban szerepel vonatkozó névmás?",
      options: [
        "Aki másnak vermet ás, maga esik bele.",
        "Valaki kopogott az ajtón.",
        "Te voltál a tegnapi előadáson?",
        "Ezt a könyvet már kétszer olvastam."
      ],
      correctIndex: 0,
      explanation: "Az 'Aki' egy vonatkozó névmás, amely mellékmondatot vezet be, és a főmondatbeli utalószóra (pl. az, olyasvalaki) mutat vissza."
    },
    {
      question: "Mi a viszonyszók legfőbb közös jellemzője?",
      options: [
        "Mindig ragozhatók és önálló mondatrészek lehetnek.",
        "Nincs önálló fogalmi jelentésük, és önállóan nem lehetnek mondatrészek.",
        "Érzelmeket és akaratot fejeznek ki, mondatbeli kapcsolat nélkül.",
        "Kizárólag igék és igenevek előtt állhatnak."
      ],
      correctIndex: 1,
      explanation: "A viszonyszóknak nincs önálló fogalmi jelentésük, csak viszonyjelentésük (nyelvtani vagy szerkezeti funkciójuk), ezért önállóan nem lehetnek mondatrészek."
    },
    {
      question: "Melyik szó segédige a következő mondatban: 'Péter holnap moziba fog menni.'?",
      options: [
        "holnap",
        "moziba",
        "fog",
        "menni"
      ],
      correctIndex: 2,
      explanation: "A 'fog' ebben a mondatban segédige, mert a 'menni' főnévi igenévvel együtt fejezi ki a jövő időt."
    },
    {
      question: "Melyik szó névutó a következő felsorolásból?",
      options: [
        "és",
        "miatt",
        "talán",
        "meg"
      ],
      correctIndex: 1,
      explanation: "A 'miatt' egy névutó, mert főnév után állva határozói (okhatározói) viszonyt jelöl ki (pl. az eső miatt)."
    },
    {
      question: "Melyik szófaji kategóriába tartozik a 'vajon' szó?",
      options: [
        "Módosítószó",
        "Kötőszó",
        "Indulatszó",
        "Segédige"
      ],
      correctIndex: 0,
      explanation: "A 'vajon' egy módosítószó, amely a beszélő kérdező, bizonytalankodó viszonyulását fejezi ki a mondat tartalmához."
    },
    {
      question: "Mi a szerepe az igekötőnek a magyar nyelvben?",
      options: [
        "A főnevek birtokos személyjelének helyettesítése.",
        "A cselekvés irányának kifejezése vagy az ige szemléletének (pl. befejezettségének) megváltoztatása.",
        "Mondatok közötti logikai és nyelvtani kapcsolatok teremtése.",
        "Érzelmi és hangulati elemek közvetlen kifejezése."
      ],
      correctIndex: 1,
      explanation: "Az igekötő módosítja az ige jelentését: megadhatja a cselekvés irányát (pl. kimegy, bemegy) vagy kifejezheti a cselekvés befejezett aspektusát (pl. megír)."
    },
    {
      question: "Hogyan csoportosítjuk a mondatszókat?",
      options: [
        "Névelők, névutók és kötőszavak",
        "Indulatszavak, hangutánzó mondatszavak és kapcsolattartó mondatszavak",
        "Személyes, mutató és kérdő névmások",
        "Valódi, átmeneti és helyettesítő mondatszavak"
      ],
      correctIndex: 1,
      explanation: "A mondatszók fő csoportjai: indulatszavak (jaj, ó), hangutánzó mondatszavak (puff, reccs) és kapcsolattartó mondatszavak (szia, igen, nem)."
    },
    {
      question: "Melyik szó mondatszó a következő mondatban: 'Jaj, de hideg van itt!'?",
      options: [
        "Jaj",
        "de",
        "hideg",
        "itt"
      ],
      correctIndex: 0,
      explanation: "A 'Jaj' egy indulatszó, amely a mondatszók közé tartozik, mert érzelmet fejez ki és nem kapcsolódik szervesen a mondat szerkezetéhez."
    },
    {
      question: "Mit jelent a szófajváltás (konverzió) jelensége?",
      options: [
        "Amikor egy szó a mondatbeli szerepe alapján képző nélkül egy másik szófajba lép át.",
        "Amikor egy szót ragozunk vagy jelekkel látunk el.",
        "A szavak idegen nyelvekből való átvétele és magyarosítása.",
        "A szavak ellentétes jelentésűvé alakítása igekötők segítségével."
      ],
      correctIndex: 0,
      explanation: "A szófajváltás során egy szó alaktani változás (képzők) nélkül vesz fel új szófaji szerepet a mondatban, pl. a 'zöld' (melléknév) főnévként viselkedik ('szeretem a zöldet')."
    },
    {
      question: "Melyik szófajváltás történik a 'sötét' szóval ebben a mondatban: 'Fél a sötéttől.'?",
      options: [
        "Ige -> Főnév",
        "Melléknév -> Főnév",
        "Határozószó -> Melléknév",
        "Melléknévi igenév -> Főnév"
      ],
      correctIndex: 1,
      explanation: "A 'sötét' alapesetben melléknév (tulajdonságot jelöl), de itt főnévi szerepet kapott, amit a főnévi rag (-től) is jelez."
    },
    {
      question: "Milyen szófajú a 'ki' szó a következő mondatban: 'Ki jött el tegnap?'?",
      options: [
        "Kérdő névmás",
        "Igekötő",
        "Vonatkozó névmás",
        "Kérdő partikula"
      ],
      correctIndex: 0,
      explanation: "A 'Ki' ebben a mondatban kérdő névmás, amely egy személyre kérdez rá, és önálló alanyként szerepel a mondatban."
    },
    {
      question: "Milyen szófajú a 'ki' szó a következő mondatban: 'János kirohant a teremből.'?",
      options: [
        "Kérdő névmás",
        "Igekötő",
        "Névutó",
        "Határozószó"
      ],
      correctIndex: 1,
      explanation: "A 'ki' itt az 'irohan' igéhez kapcsolódó igekötő, amely a cselekvés irányát (kifelé) határozza meg."
    },
    {
      question: "Melyik szó egy kapcsolattartó mondatszó az alábbiak közül?",
      options: [
        "talán",
        "szia",
        "mögött",
        "bár"
      ],
      correctIndex: 1,
      explanation: "A 'szia' egy köszönés, azaz társadalmi érintkezést szolgáló, kapcsolattartó mondatszó."
    }
  ]
});
