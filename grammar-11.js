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
      question: "Melyik szófajba tartozik a 'tanuló' szó a következő mondatban: 'A szorgalmas tanuló könyvet olvas.'?",
      options: ["Melléknév", "Melléknévi igenév", "Főnév (szófajváltással)", "Ige"],
      correctIndex: 2,
      explanation: "Bár a 'tanuló' eredetileg melléknévi igenév, ebben a mondatban alanyként áll, ragozható, így szófajváltás útján főnévvé vált."
    },
    {
      question: "Melyik szó egy viszonyszó az alábbiak közül?",
      options: ["asztal", "olvasni", "mögött", "jaj"],
      correctIndex: 2,
      explanation: "'Mögött' egy névutó, amely a viszonyszók közé tartozik, mivel nincs önálló jelentése és mondatrészi szerepe."
    },
    {
      question: "Melyik állítás igaz a névmásokra?",
      options: [
        "Nincs önálló jelentésük, mindig más szavakat helyettesítenek a szövegben",
        "Csak zöngétlen mássalhangzót tartalmazhatnak",
        "Kizárólag cselekvést fejeznek ki",
        "A mondatszók alcsoportjába tartoznak"
      ],
      correctIndex: 0,
      explanation: "A névmások helyettesítő szófajok; önálló fogalmi jelentésük nincs, azt mindig a helyettesített szóból és a szövegkörnyezetből nyerik."
    }
  ]
});
