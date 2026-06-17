// 8. nyelvtan tétel: A köznyelvi változatok, csoportnyelvek és rétegnyelvek
window.loadGrammarData(8, {
  outline: [
    "A nyelv társadalmi tagozódása (szociolektusok)",
    "A nemzeti nyelv rétegei: irodalmi nyelv és köznyelv",
    "A csoportnyelvek típusai: szaknyelvek és hobbinyelvek",
    "A szleng fogalma, kialakulása és jellemzői",
    "Az argó (tolvajnyelv) és a csoportnyelvek hatása a köznyelvre"
  ],
  introduction: `
    <p>A nyelv nem egységes tömbként létezik, hanem társadalmi és földrajzi tagozódás szerint különböző változatokban él. <strong>A társadalom rétegződése (életkor, nem, lakóhely, iskolázottság, foglalkozás) szerint elkülönülő nyelvváltozatokat szociolektusoknak (csoportnyelveknek) nevezzük.</strong> A modern nyelvművelés és szociolangvisztika feladata ezek kölcsönhatásainak és szerepének vizsgálata.</p>
  `,
  biography: `
    <p>A szociolingvisztika (társadalomnyelvészet) a 20. század közepén alakult ki mint önálló tudományág. Legismertebb úttörője William Labov amerikai nyelvész volt, aki kimutatta, hogy a nyelvi változatok használata szorosan korrelál a beszélő társadalmi osztályával. Magyarországon a szociolingvisztikai kutatásokat a 20. század végén olyan nyelvészek terjesztették el, mint Kontra Miklós és Kiss Jenő.</p>
  `,
  keyWorks: [
    {
      title: "A nemzeti nyelv rétegződése",
      analysis: `
        <p>A magyar nemzeti nyelv piramisszerűen épül fel, amelynek tetején a leginkább igényes és egységesített változatok állnak:</p>
        <ul>
          <li><strong>Irodalmi nyelv</strong>: A nemzeti nyelv legigényesebb, írott változata. Művészi alkotások, esszék, irodalom nyelve.</li>
          <li><strong>Köznyelv</strong>: A mindennapi hivatalos és társasági érintkezés beszélt és írt változata. Két fő változata van: az igényesebb <i>írott köznyelv</i> (pl. újságok, híradások) és a lazább <i>beszélt köznyelv</i>.</li>
        </ul>
      `
    },
    {
      title: "Csoportnyelvek és rétegnyelvek (Szociolektusok)",
      analysis: `
        <p>A szociolektusokat a használóik köre és a használat helyszíne alapján osztjuk csoportokra:</p>
        <ol>
          <li><strong>Szaknyelvek (jargonok)</strong>: Egy-egy szakma, tudomány vagy mesterség szakkifejezéseinek összessége (pl. orvosi, jogi, informatikai szaknyelv). Célja a pontos, egyértelmű információcsere.</li>
          <li><strong>Hobbinyelvek</strong>: Különböző szabadidős tevékenységek, sportok speciális szókincse (pl. horgász, videojátékos, kerékpáros szleng).</li>
          <li><strong>Szleng (ifjúsági nyelv)</strong>: Az egyik legdinamikusabb nyelvváltozat, amelyet főleg a fiatalok használnak. Célja az expresszivitás, az érzelmi színezet, a csoporthoz tartozás kifejezése és a hagyományos formák elleni lázadás (pl. <i>fejleszt, beég, gáz, vágja</i>).</li>
          <li><strong>Argó (tolvajnyelv)</strong>: Eredetileg a bűnözői csoportok titkos nyelve volt, amelynek célja a kívülállók kizárása és az eltitkolás (pl. <i>dohány, sarok, zsarufő</i>). Mára sok argó szavunk beépült a szlengbe és a köznyelvbe (pl. <i>lóvé, balhé, duma</i>).</li>
        </ol>
      `
    }
  ],
  styleAndForm: `
    <p>A csoportnyelvek nyelvtani rendszere megegyezik a köznyelvvel, az eltérés szinte kizárólag a **szókincsben** (lexikális szinten) jelentkezik, amelyet sajátos metaforákkal, szóalkotásokkal vagy idegen szavak átvételével alakítanak ki.</p>
  `,
  conclusion: `
    <p>A csoport- és rétegnyelvek gazdagítják a nemzeti nyelvet. Szavaik folyamatosan áramlanak be a köznyelvbe, megújítva a szókincset és árnyalva a mindennapi önkifejezést.</p>
  `,
  flashcards: [
    {
      question: "Mi a szociolektus fogalma?",
      answer: "Társadalmi tagozódás (foglalkozás, életkor, réteg) szerint elkülönülő nyelvváltozat."
    },
    {
      question: "Mi a különbség az irodalmi nyelv és a köznyelv között?",
      answer: "Az irodalmi nyelv a legigényesebb, írott, csiszolt nyelvváltozat, a köznyelv a mindennapi hivatalos és társasági érintkezés beszélt/írt változata."
    },
    {
      question: "Mi a szaknyelv (jargon) elsődleges funkciója?",
      answer: "A pontos, egyértelmű és gyors információcsere egy adott szakmai körön belül."
    },
    {
      question: "Melyek a szleng használatának fő indítékai?",
      answer: "A csoporthoz tartozás kifejezése, az érzelmi telítettség (kifejezőerő) és a játékosság."
    }
  ],
  quiz: [
    {
      question: "Melyik fogalom jelenti a bűnözők korábbi titkos, rejtjelező nyelvét, amelyből sok szó a mai köznyelvbe is átkerült?",
      options: ["Szaknyelv", "Nyelvjárás", "Argó (tolvajnyelv)", "Irodalmi nyelv"],
      correctIndex: 2,
      explanation: "Az argó a bűnözők zárt csoportjának nyelve volt, amely az eltitkolást szolgálta (pl. lóvé, hekus, duma)."
    },
    {
      question: "Melyik nyelvi szinten térnek el leginkább a szociolektusok (csoportnyelvek) a köznyelvtől?",
      options: ["Nyelvtani (alaktani és mondattani) szinten", "Szókincsbeli (lexikális) szinten", "Hangtani szinten", "Írásrendszerükben"],
      correctIndex: 1,
      explanation: "A csoportnyelvek nyelvtana megegyezik a standard nyelvvel, a különbség szinte kizárólag a speciális szókincsben (szakszavak, szleng kifejezések) rejlik."
    },
    {
      question: "Mi jellemzi a szlenget?",
      options: [
        "Teljesen merev, évszázadokig nem változó szókincs",
        "Rendkívül gyors változás, játékosság és érzelmi színezet",
        "A hivatalos parlamenti törvénykezés kötelező nyelve",
        "Kizárólag latin betűs írott formában létezik"
      ],
      correctIndex: 1,
      explanation: "A szleng folyamatos mozgásban van, gyorsan cserélődnek a szavai, stilisztikailag érzelmi színezetű és kifejezetten játékos szóalkotású."
    }
  ]
});
