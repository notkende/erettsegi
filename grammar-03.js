// 3. nyelvtan tétel: A tömegkommunikáció fogalma, jellemzői és funkciói
window.loadGrammarData(3, {
  outline: [
    "A tömegkommunikáció meghatározása és kialakulása",
    "A tömegkommunikáció sajátos jellemzői a személyes kommunikációval szemben",
    "A tömegmédia funkciói a társadalomban",
    "A kapuőr (gatekeeper) szerep és a hírszelekció",
    "A digitális média kihívásai: álhírek és a médiaértés"
  ],
  introduction: `
    <p>A tömegkommunikáció (mass communication) olyan kommunikációs forma, amelyben **egy intézményesült adó** technikai eszközök segítségével **nagyszámú, szétszórt, heterogén közönség** számára továbbít üzeneteket. <strong>A modern demokráciák és az információs társadalom működése elképzelhetetlen a tömegmédia nélkül, amelyet gyakran a 'negyedik hatalmi ágnak' is neveznek.</strong></p>
  `,
  biography: `
    <p>A tömegkommunikáció gyökerei a könyvnyomtatás feltalálásához (Johannes Gutenberg, kb. 1450) nyúlnak vissza, de igazi robbanása a 19-20. században történt a sajtóipar, a rádió (1920-as évek) és a televízió (1950-es évek) elterjedésével. A 21. század elején az internet és a közösségi média megjelenésével a hagyományos tömegkommunikáció egyirányú modellje átalakult interaktív, hálózatos struktúrává.</p>
  `,
  keyWorks: [
    {
      title: "A tömegkommunikáció jellemzői",
      analysis: `
        <p>A tömegkommunikáció több ponton alapvetően eltér a személyes (interperszonális) kommunikációtól:</p>
        <ul>
          <li><strong>Egyirányúság (közvetítettség)</strong>: Az üzenet az adótól a vevő felé áramlik. A visszacsatolás (feedback) közvetett, késleltetett és korlátozott (pl. olvasói levél, nézettségi mutatók).</li>
          <li><strong>Technikai közvetítettség</strong>: Az üzenet közvetítéséhez bonyolult technikai eszközrendszer szükséges (nyomda, sugárzás, internet).</li>
          <li><strong>Intézményesség</strong>: Az adó nem egyénekből, hanem intézményekből (kiadók, televíziós csatornák, szerkesztőségek) áll.</li>
          <li><strong>Nyilvánosság</strong>: Bárki számára hozzáférhető, a tartalom nyilvános.</li>
          <li><strong>Közönség jellege</strong>: A befogadók száma óriási, földrajzilag elszórtak és heterogének (különböző életkorúak, foglalkozásúak).</li>
        </ul>
      `
    },
    {
      title: "A média funkciói és a kapuőr elmélet",
      analysis: `
        <p>A tömegkommunikáció legfőbb funkciói a társadalomban a következők:</p>
        <ol>
          <li><strong>Tájékoztatás (hírközlés)</strong>: A legfontosabb hírek, események közvetítése.</li>
          <li><strong>Szocializáció és kulturális közvetítés</strong>: Normák, értékek, kulturális örökség átadása a generációk között.</li>
          <li><strong>Szórakoztatás</strong>: Szabadidő eltöltése, rekreáció (filmek, showműsorok).</li>
          <li><strong>Véleményformálás és mozgósítás</strong>: Politikai vagy társadalmi akciókra való felhívás, viták generálása.</li>
        </ol>
        <p>A hírek szűrését a **kapuőr (gatekeeper)** elmélet magyarázza. A szerkesztők és újságírók döntenek arról, hogy a világ eseményei közül melyik válik hírré (szelekció), ezzel alapvetően alakítva a társadalmi valóságot és a közbeszédet.</p>
      `
    }
  ],
  styleAndForm: `
    <p>A tömegkommunikáció nyelvezete törekszik a **közérthetőségre**, az objektivitásra (a hírműfajokban) vagy a kifejező és felhívó jellegre (a publicisztikai és reklámműfajokban). A digitális korban a **manipuláció**, az álhírek (fake news) és a véleménybuborékok ellensúlyozására a **médiaértés (médiatudatosság)** vált a legfontosabb kompetenciává.</p>
  `,
  conclusion: `
    <p>A tömegkommunikáció formálja a közvéleményt és a kultúrát. Megfelelő használata tájékozott állampolgárokat nevel, de kritikátlan befogadása a manipuláció és a félretájékoztatás veszélyét hordozza magában.</p>
  `,
  flashcards: [
    {
      question: "Mi a tömegkommunikáció definíciója?",
      answer: "Egy intézményesült adó üzeneteinek közvetítése technikai eszközökkel egy nagyszámú, elszórt közönség felé."
    },
    {
      question: "Miben tér el a tömegkommunikáció visszacsatolása a személyes beszélgetéstől?",
      answer: "Késleltetett, közvetett és korlátozott (pl. kommentek, nézettségi adatok)."
    },
    {
      question: "Mi a 'kapuőr' (gatekeeper) szerep lényege a médiában?",
      answer: "A szerkesztők hírszelekciós munkája; ők döntenek arról, hogy mi kerülhet be a hírekbe és mi marad ki."
    },
    {
      question: "Melyek a tömegkommunikáció fő funkciói?",
      answer: "Tájékoztatás, szórakoztatás, szocializáció (kulturális közvetítés) és véleményformálás."
    }
  ],
  quiz: [
    {
      question: "Miért nevezik a médiát gyakran a 'negyedik hatalmi ágnak'?",
      options: [
        "Mert közvetlenül hoz törvényeket",
        "Mert ellenőrizni képes a politikai és társadalmi hatalom működését a nyilvánosság erejével",
        "Mert a bíróságok felett áll",
        "Mert Gutenberg kora óta ezt a nevet viseli"
      ],
      correctIndex: 1,
      explanation: "A média tájékoztató funkcióján keresztül képes ellenőrizni a törvényhozó, végrehajtó és bírói hatalmat, feltárva a visszaéléseket."
    },
    {
      question: "Melyik állítás igaz a tömegkommunikáció közönségére?",
      options: [
        "Homogén csoportot alkot",
        "Földrajzilag egy helyen tömörül",
        "Heterogén, szétszórt és névtelen egyének összessége",
        "Kizárólag magasan képzett szakértőkből áll"
      ],
      correctIndex: 2,
      explanation: "A tömegkommunikáció befogadói közönsége (a tömeg) rendkívül heterogén (különböző korú, nemű, végzettségű) és földrajzilag tág területen oszlik el."
    },
    {
      question: "Melyik fogalom jelenti a digitális média korában a félretájékoztatás és manipulatív hírek tudatos kiszűrésének képességét?",
      options: ["Hálózati semlegesség", "Médiaértés (médiatudatosság)", "Kapuőrzés", "Cenzúra"],
      correctIndex: 1,
      explanation: "A médiaértés (médiaműveltség) az a képesség, amellyel a befogadó kritikusan tudja elemezni a kapott információkat, kiszűrve az álhíreket."
    }
  ]
});
