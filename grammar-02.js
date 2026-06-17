// 2. nyelvtan tétel: Az emberi kommunikáció nem nyelvi jelei és kifejezőeszközei
window.loadGrammarData(2, {
  outline: [
    "A verbális és nonverbális kommunikáció aránya",
    "A nem nyelvi jelek csoportosítása (mimika, gesztusok, testtartás)",
    "A térközszabályozás (személyes tér és zónák)",
    "A vokális nem nyelvi jelek szerepe",
    "A nem nyelvi jelek kultúrafüggősége és a kongruencia fontossága"
  ],
  introduction: `
    <p>Az emberi kommunikációban a verbális (nyelvi) közlések mellett rendkívül fontos szerepet játszanak a nem nyelvi (nonverbális) jelek. <strong>Kutatások szerint a kommunikáció során az információk több mint 50-60%-át nem nyelvi jeleken keresztül közvetítjük.</strong> Ezek a jelek közvetítik az érzelmeket, a partnerekhez való viszonyt, és hitelesítik vagy esetenként cáfolják a kimondott szavakat.</p>
  `,
  biography: `
    <p>A nonverbális kommunikáció tudományos kutatása a 19. században kezdődött, Charles Darwin 'Az érzelmek kifejezése az embernél és az állatoknál' című művével. Később, a 20. század második felében olyan kutatók fejlesztették tovább a területet, mint Albert Mehrabian (aki megfogalmazta a 7%-38%-55%-os szabályt a szavak, a hanghordozás és a testbeszéd arányáról) és Edward T. Hall (a szociális térközök megalkotója).</p>
  `,
  keyWorks: [
    {
      title: "A nem nyelvi jelek fő típusai",
      analysis: `
        <p>A nem nyelvi kifejezőeszközöket az alábbi nagyobb csoportokba soroljuk:</p>
        <ul>
          <li><strong>Mimika (arcjáték)</strong>: Az érzelmek legfőbb tükre. Az alapérzelmek (öröm, bánat, meglepetés, félelem, düh, undor, megvetés) egyetemesek és az arcon tükröződnek.</li>
          <li><strong>Gesztusok (kéz- és karjáték)</strong>: A mondanivaló illusztrálására, hangsúlyozására szolgálnak (pl. mutatás, integetés).</li>
          <li><strong>Kinezika (testtartás, mozgás)</strong>: A test tartása kifejezi az önbizalmat, a nyitottságot vagy a bezárkózást (pl. karba tett kéz).</li>
          <li><strong>Tekintet (szemkontaktus)</strong>: Szabályozza a beszélgetés menetét, jelzi az érdeklődést, a figyelmet vagy a dominanciát.</li>
          <li><strong>Proxemika (térközszabályozás)</strong>: A partnerek közötti fizikai távolság. Edward T. Hall négy zónát különít el: intim (0-45 cm), személyes (45-120 cm), társasági (120-360 cm) és nyilvános (360 cm felett).</li>
        </ul>
      `
    },
    {
      title: "Kongruencia és kulturális eltérések",
      analysis: `
        <p>A kommunikáció akkor sikeres és hiteles, ha **kongruens**, vagyis a verbális üzenet és a nonverbális jelek összhangban vannak egymással. Ha egy diák azt mondja: „Nem izgulok”, de remeg a keze és kerüli a tekintetet, a vevő a nem nyelvi jeleknek fog hinni. Fontos megjegyezni, hogy bár az alapérzelmek kifejezése univerzális, sok gesztus kultúrafüggő (pl. a bólogatás Bulgáriában nemet jelent).</p>
      `
    }
  ],
  styleAndForm: `
    <p>A nonverbális csatornák közé tartoznak a **vokális jelek** is (hangszín, hangerő, tempó, hangsúly, szünetek), valamint a **külső megjelenés** (öltözködés, hajviselet, jelvények), amelyek társadalmi státuszt, identitást és hangulatot fejeznek ki.</p>
  `,
  conclusion: `
    <p>A nem nyelvi jelek tudatosítása és olvasása fejleszti az empátiát, segíti a hatékonyabb önkifejezést és megelőzi a kommunikációs félreértéseket mind a magánéletben, mind a munkahelyen.</p>
  `,
  flashcards: [
    {
      question: "Körülbelül mekkora arányt képvisel a nonverbális csatorna a kommunikációban?",
      answer: "Körülbelül 55-65%-ot (az érzelmi közléseknél még magasabb is lehet)."
    },
    {
      question: "Mi a proxemika és ki a legismertebb kutatója?",
      answer: "A térközszabályozás (a partnerek fizikai távolsága a kommunikáció során); Edward T. Hall."
    },
    {
      question: "Mit jelent a kommunikációban a 'kongruencia'?",
      answer: "A szavak (verbális) és a testbeszéd (nonverbális) közötti összhangot és hitelességet."
    },
    {
      question: "Melyek az egyetemes emberi alapérzelmek, amelyek mimikája univerzális?",
      answer: "Öröm, szomorúság, félelem, düh, undor, meglepetés, megvetés."
    }
  ],
  quiz: [
    {
      question: "Melyik zónába tartozik az 50 cm-es távolság a beszélgetőpartnerek között Edward T. Hall szerint?",
      options: ["Intim zóna", "Személyes zóna", "Társasági zóna", "Nyilvános zóna"],
      correctIndex: 1,
      explanation: "A személyes zóna 45 cm-től 120 cm-ig terjed. Az intim zóna 45 cm alatti távolság."
    },
    {
      question: "Hogyan hívjuk a nem nyelvi jelek azon csoportját, amely a hangszínt, hangerőt és beszédtempót foglalja magában?",
      options: ["Kinezika", "Proxemika", "Vokális nonverbális jelek (paranyelv)", "Mimika"],
      correctIndex: 2,
      explanation: "A vokális nem nyelvi jelek (paralingvisztikai eszközök) a beszédhang tulajdonságait jelentik, elválasztva a szavak jelentésétől."
    },
    {
      question: "Mit tapasztalunk inkongruens kommunikáció esetén?",
      options: ["A beszélő szavai és testbeszéde ellentmondanak egymásnak", "Tökéletes az összhang a partnerek között", "Nincs zaj a csatornán", "Írásbeli üzenetváltást"],
      correctIndex: 0,
      explanation: "Inkongruenciáról akkor beszélünk, ha a nem nyelvi jelek (pl. remegő hang, keresztbe tett karok) cáfolják vagy nincsenek összhangban a kimondott szavakkal."
    }
  ]
});
