// 18. nyelvtan tétel: Szóképek felismerése, elemzése és értelmezése
window.loadGrammarData(18, {
  outline: [
    "A szóképek (trópusok) fogalma és stilisztikai szerepe",
    "A hasonlóságon alapuló szóképek (metafora, megszemélyesítés, szinesztézia)",
    "A hasonlat (mint stilisztikai eszköz és kapcsolat a szóképekkel)",
    "Az érintkezésen alapuló szóképek (metonímia és szinekdoché)",
    "Összetett szóképek: szimbólum és allegória"
  ],
  introduction: `
    <p>A szóképek (trópusok) olyan stilisztikai eszközök, amelyekben **egy szót vagy kifejezést nem a megszokott, szószerinti jelentésében**, hanem egy másik fogalommal való kapcsolat (hasonlóság vagy érintkezés) révén átvitt jelentésben használunk. <strong>A szóképek a költői nyelv alapkövei, amelyek sűrítik a jelentést, érzelmi többletet hordoznak és képszerűvé teszik a leírást.</strong></p>
  `,
  biography: `
    <p>A szóképek és retorikai alakzatok rendszerezése az ókori retorikáig nyúlik vissza (Arisztotelész és Quintilianus munkássága). Quintilianus határozta meg a trópus fogalmát mint a szó saját jelentésének művészi megváltoztatását. A modern stilisztika és kognitív nyelvészet (pl. George Lakoff) kimutatta, hogy a metaforák nemcsak költői díszek, hanem az emberi gondolkodás alapvető logikai sémái.</p>
  `,
  keyWorks: [
    {
      title: "Hasonlóságon alapuló szóképek",
      analysis: `
        <p>Ezek a szóképek két fogalom közötti valóságos vagy képzeletbeli hasonlóságon (közös tulajdonságon) alapulnak:</p>
        <ul>
          <li><strong>Metafora</strong>: Két fogalom azonosítása közös tulajdonságuk alapján. Lehet <i>teljes metafora</i> (mindkét tag jelen van: <i>„királyom, te napom”</i>) vagy <i>egytagú metafora</i> (csak a kép szerepel: <i>„zöld tenger”</i> - a fűre utalva).</li>
          <li><strong>Megszemélyesítés (personificatio)</strong>: Élettelen dolgok, természeti jelenségek felruházása emberi tulajdonságokkal, cselekvésekkel (pl. <i>„beszél a fák suhogása”</i>, <i>„alszik a város”</i>).</li>
          <li><strong>Szinesztézia</strong>: Különböző érzékterületek (látás, hallás, tapintás, ízlelés) összekapcsolása egy képben (pl. <i>„selymes hang”</i>, <i>„sűrű csend”</i>, <i>„fényes illat”</i>).</li>
          <li><strong>Hasonlat (comparatio)</strong>: Bár szigorúan véve nem szókép (mert nem történik jelentésátvitel, a két tag külön megmarad), szorosan kapcsolódik hozzájuk. Két dolgot hasonlít össze a <i>mint, mintha, -ként</i> kötőszavakkal (pl. <i>„szalad, mint a szél”</i>).</li>
        </ul>
      `
    },
    {
      title: "Érintkezésen alapuló és összetett szóképek",
      analysis: `
        <p>Ezek a szóképek logikai, térbeli, időbeli vagy anyagbeli kapcsolatokon (érintkezésen) alapulnak:</p>
        <ul>
          <li><strong>Metonímia (névcsere)</strong>: Két fogalom közötti érintkezésen alapul. Típusai:
            <ul>
              <li>Térbeli érintkezés: pl. <i>„alszik a ház”</i> (a házban lakók).</li>
              <li>Időbeli érintkezés: pl. <i>„a huszadik század rettegése”</i>.</li>
              <li>Anyagbeli érintkezés: pl. <i>„vasra verik”</i> (bilincsre).</li>
              <li>Ok-okozati érintkezés: pl. <i>„olvassa Aranyt”</i> (Arany János műveit).</li>
            </ul>
          </li>
          <li><strong>Szinekdoché (együttérzés)</strong>: A metonímia alfaja, amely a rész-egész vagy nem-faj viszonyán alapul, pl. <i>„ezer fő”</i> (emberek), <i>„nincs egy fia deszkám”</i> (koporsóm), <i>„a magyar győzött”</i> (a magyar csapat).</li>
          <li><strong>Szimbólum (jelkép)</strong>: Valamilyen elvont gondolat vagy érzés érzéki jele, képe. Jelentése többrétegű, homályos, nem fordítható le egyetlen szóra (pl. Ady Endre: <i>A fekete zongora</i>).</li>
          <li><strong>Allegória</strong>: Egy elvont gondolat, erkölcsi eszme képsorozaton vagy egy egész történeten keresztül történő részletes bemutatása (pl. Petőfi: <i>Föltámadott a tenger</i> - a tenger a nép, a gálya a zsarnokok).</li>
        </ul>
      `
    }
  ],
  styleAndForm: `
    <p>A szóképek elemzésekor meg kell határoznunk a **kiinduló fogalmat (tenor)**, az **átvitt képet (vehicle)** és a közöttük lévő **közös tulajdonságot (ground)**, valamint vizsgálnunk kell a szövegkörnyezetben betöltött hangulati, stilisztikai szerepüket.</p>
  `,
  conclusion: `
    <p>A szóképek felismerése és helyes értelmezése elengedhetetlen az irodalmi művek mélyebb megértéséhez, az esztétikai élmény befogadásához és a kreatív írás elsajátításához.</p>
  `,
  flashcards: [
    {
      question: "Mi a metafora és melyek a fő típusai?",
      answer: "Két fogalom azonosítása közös tulajdonság alapján; típusai: kéttagú (teljes) és egytagú (csonka) metafora."
    },
    {
      question: "Melyik szóképben kapcsolódnak össze a különböző érzékterületek?",
      answer: "A szinesztéziában (pl. 'szúrós szag' - tapintás + szaglás)."
    },
    {
      question: "Mi a különbség a metonímia és a szinekdoché között?",
      answer: "A metonímia általános fogalmi érintkezésen alapul (pl. szerző a mű helyett), a szinekdoché kifejezetten rész-egész vagy nem-faj viszonyra épül (pl. 'százezer láb menetel')."
    },
    {
      question: "Mi az allegória?",
      answer: "Egy elvont gondolat, eszme részletes bemutatása képsorozaton vagy egy egész történeten keresztül."
    }
  ],
  quiz: [
    {
      question: "Melyik szókép szerepel Radnóti Miklós következő sorában: 'Sűrű sötét lombú vadgesztenyék hangja morajlott'?",
      options: ["Hasonlat", "Szinesztézia", "Szimbólum", "Metonímia"],
      correctIndex: 1,
      explanation: "A 'sűrű sötét lombú vadgesztenyék hangja' képben a sűrűség (tapintás), a sötét (látás) és a hang morajlása (hallás) érzékterületei mosódnak össze, ami szinesztézia."
    },
    {
      question: "Milyen típusú metonímia szerepel a 'Megiszom egy pohár vizet' mondatban?",
      options: [
        "Térbeli érintkezésen alapuló (edény és tartalom cseréje)",
        "Ok-okozati érintkezés",
        "Anyagbeli érintkezés",
        "Rész-egész viszony (szinekdoché)"
      ],
      correctIndex: 0,
      explanation: "Az edény (pohár) nevét használjuk a benne lévő folyadék (víz) helyett, ami térbeli érintkezésen alapuló metonímia."
    },
    {
      question: "Melyik szókép azonosítja az élettelen dolgokat vagy elvont fogalmakat emberi cselekvésekkel, érzésekkel?",
      options: ["Szinesztézia", "Megszemélyesítés", "Metonímia", "Szinekdoché"],
      correctIndex: 1,
      explanation: "A megszemélyesítés (personificatio) során emberi tulajdonságokat vetítünk élettelen tárgyakra vagy jelenségekre (pl. 'sír a szél')."
    }
  ]
});
