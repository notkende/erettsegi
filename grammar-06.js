// 6. nyelvtan tétel: A magyar nyelv rokonságának elméletei
window.loadGrammarData(6, {
  outline: [
    "A magyar nyelv származásának tudományos alapjai",
    "Az uráli/finnugor nyelvrokonság bizonyítékai",
    "Rendszeres hangmegfelelések és az alapszókincs vizsgálata",
    "A történeti-összehasonlító nyelvészet módszere",
    "Alternatív rokonsági elméletek és azok tudományos kritikája"
  ],
  introduction: `
    <p>A magyar nyelv eredetének kérdése régóta foglalkoztatja a kutatókat és a közvéleményt. <strong>A tudományosan bizonyított és elfogadott tény az, hogy a magyar nyelv az uráli nyelvcsalád finnugor ágához (azon belül az ugor csoporthoz) tartozik.</strong> Bár a történelem folyamán más népekkel való keveredés (pl. török, szláv) jelentősen megváltoztatta a szókincset, a nyelv szerkezeti-nyelvtani magva megőrizte finnugor jellegét.</p>
  `,
  biography: `
    <p>A finnugor nyelvrokonság elméletét a 18. század végén dolgozta ki Sajnovics János (aki 1770-ben megírta a 'Demonstratio' című művét a magyar és a számi/lapp nyelv egyezéséről) és Gyarmathi Sámuel (aki 1799-ben rendszerezte a nyelvtani egyezéseket). A 19. században a tudományos vitát a híres 'ugor-török háború' jellemezte Vámbéry Ármin (török rokonság) és Budenz József (finnugor rokonság) között, amely az utóbbi győzelmével zárult.</p>
  `,
  keyWorks: [
    {
      title: "A finnugor nyelvrokonság bizonyítékai",
      analysis: `
        <p>A történeti-összehasonlító nyelvészet három fő területen bizonyítja a rokonságot:</p>
        <ul>
          <li><strong>Alapszókincs egyezése</strong>: A legősibb, legfontosabb szavaink (kb. 800-1000 szó) finnugor eredetűek. Ide tartoznak a testrészek (<i>fej, kéz, szem, szív</i>), a rokonságnevek (<i>anya, apa, fiú, meny</i>), a természeti jelenségek (<i>víz, tűz, fa, kő</i>), a számok (<i>egy, kettő, három, négy</i>) és az alapvető cselekvések (<i>él, hal, eszik, iszik, megy</i>).</li>
          <li><strong>Rendszeres hangmegfelelések</strong>: A rokon nyelvek szavai között szigorú hangtani szabályok érvényesülnek. Például a szókezdő magyar <b>f-</b> hangnak a finnben rendszerint <b>p-</b> felel meg (magyar: <i>fa, hal, fő, fészek</i> $\\leftrightarrow$ finn: <i>puu, kala, pää, pesä</i> - itt a hal-kala esetében a magyar szókezdő <b>h-</b> a finnben <b>k-</b> hangnak felel meg).</li>
          <li><strong>Szerkezeti és nyelvtani hasonlóságok</strong>: A nyelvtani rendszer alapvető logikája megegyezik: ragasztó (agglutináló) nyelvjelleg (tő + jel + rag), a névutók használata az elöljárószavak helyett, a birtokos személyjelek megléte (<i>házam, házad, háza</i>) és a főnév mellett álló jelző ragozatlansága.</li>
        </ul>
      `
    },
    {
      title: "Alternatív elméletek és cáfolatuk",
      analysis: `
        <p>A történelem során több alternatív rokonsági elmélet is szárnyra kapott, de ezeket a modern nyelvészet elveti:</p>
        <ol>
          <li><strong>Török rokonság (turáni elmélet)</strong>: A magyarok törökös életmódja és a nagyszámú honfoglalás előtti jövevényszó miatt vetették fel. Nyelvileg azonban a török elemek jövevényszavak (kölcsönzés), nem pedig genetikai rokonság eredményei.</li>
          <li><strong>Sumer, etruszk vagy hun rokonság</strong>: Különböző délibábos elméletek, amelyek többnyire véletlen hangzásbeli hasonlóságokra (csengő-bongó szópárokra) építenek, de nélkülözik a módszeres hangtani és nyelvtani bizonyítást.</li>
        </ol>
      `
    }
  ],
  styleAndForm: `
    <p>A nyelvrokonság kutatásában a **történeti-összehasonlító módszer** az irányadó, amely kizárja a véletlenszerű szóhasonlításokat és a nyelvek szerkezetét, valamint a hangváltozások történelmi törvényszerűségeit vizsgálja.</p>
  `,
  conclusion: `
    <p>A finnugor nyelvrokonság tudományos tény, amely nem mond ellent a magyarság keleti kulturális kapcsolatainak vagy a honfoglalás kori törökös nomád hagyományoknak, hiszen a nyelvrokonság nem azonos a genetikai vagy néprajzi rokonsággal.</p>
  `,
  flashcards: [
    {
      question: "Melyik nyelvcsaládba tartozik genetikailag a magyar nyelv?",
      answer: "Az uráli nyelvcsalád finnugor ágának ugor csoportjába."
    },
    {
      question: "Ki írta az első tudományos bizonyítást a lapp-magyar nyelvrokonságról?",
      answer: "Sajnovics János (Demonstratio, 1770)."
    },
    {
      question: "Mely szavak tartoznak a finnugor alapszókincsbe?",
      answer: "A testrészek, rokonságnevek, számok (1-6), elemi cselekvések és a természeti jelenségek nevei."
    },
    {
      question: "Mi a különbség a nyelvrokonság és a nyelvi kölcsönzés között?",
      answer: "A nyelvrokonság közös ősből való származást jelent (nyelvtani mag), a kölcsönzés szavak átvétele más nyelvekből a történelem során (jövevényszavak)."
    }
  ],
  quiz: [
    {
      question: "Melyik nyelvcsaládba tartozik tudományosan bizonyítottan a magyar nyelv?",
      options: ["Indoeurópai", "Uráli (finnugor ág)", "Altaji", "Kaukázusi"],
      correctIndex: 1,
      explanation: "A magyar nyelv az uráli nyelvcsalád finnugor ágába, azon belül az ugor nyelvcsoportba tartozik."
    },
    {
      question: "Ki írta az első rendszerező munkát a magyar és a számi (lapp) nyelv rokonságáról 1770-ben?",
      options: ["Gyarmathi Sámuel", "Budenz József", "Sajnovics János", "Vámbéry Ármin"],
      correctIndex: 2,
      explanation: "Sajnovics János 1770-ben megjelent 'Demonstratio' című művében bizonyította be a lapp és a magyar nyelv rokonságát."
    },
    {
      question: "Mi a címe Sajnovics János 1770-ben megjelent úttörő nyelvészeti művének?",
      options: [
        "Affinitas linguae Hungaricae cum linguis Fennicae originis",
        "Demonstratio. Idioma Ungarorum et Lapponum idem esse",
        "Orthophonia",
        "Gesta Hungarorum"
      ],
      correctIndex: 1,
      explanation: "Sajnovics művének teljes címe: 'Demonstratio. Idioma Ungarorum et Lapponum idem esse' (Bizonyítás. A magyarok és a lappok nyelve azonos)."
    },
    {
      question: "Melyik tudós rendszerezte a nyelvtani egyezéseket a rokon nyelvek között 1799-ben megjelent 'Affinitas...' című művében?",
      options: ["Sajnovics János", "Gyarmathi Sámuel", "Budenz József", "Hunfalvy Pál"],
      correctIndex: 1,
      explanation: "Gyarmathi Sámuel az 'Affinitas linguae Hungaricae...' (1799) című munkájában a szókincsen túl a nyelvtani szerkezetek egyezéseit is szisztematikusan vizsgálta."
    },
    {
      question: "Ki volt a török nyelvrokonság (turáni elmélet) fő képviselője az 'ugor-török háború' néven elhíresült vitában?",
      options: ["Budenz József", "Reguly Antal", "Vámbéry Ármin", "Sajnovics János"],
      correctIndex: 2,
      explanation: "A 19. századi tudományos vitában Vámbéry Ármin képviselte a török nyelvrokonság elméletét Budenz Józseffel szemben."
    },
    {
      question: "Ki volt a finnugor rokonság elméletének legfőbb védelmezője és rendszerezője az 'ugor-török háború' vitájában?",
      options: ["Vámbéry Ármin", "Budenz József", "Gyarmathi Sámuel", "Bessenyei György"],
      correctIndex: 1,
      explanation: "Német származású nyelvészünk, Budenz József dolgozta ki részletesen a magyar és más finnugor nyelvek összehasonlító nyelvtanát, eldöntve a vitát."
    },
    {
      question: "Melyik nyelvcsoportba tartozik a magyar nyelv az uráli nyelvcsaládon belül?",
      options: ["Finn-permi csoport", "Szamojéd csoport", "Ugor csoport", "Balti-finn csoport"],
      correctIndex: 2,
      explanation: "Az uráli nyelvcsalád finnugor ágán belül a magyar az ugor csoport tagja (a manysi és chanti nyelvekkel együtt)."
    },
    {
      question: "Mely nyelvek a magyar nyelv legközelebbi rokonai az ugor csoporton belül?",
      options: ["Finn és észt", "Manysi (vogul) és chanti (osztják)", "Számi (lapp)", "Mari (cseremisz)"],
      correctIndex: 1,
      explanation: "A magyar legközelebbi rokonai a manysi (vogul) és a chanti (osztják), amelyeket ob-ugor nyelveknek is neveznek."
    },
    {
      question: "Hogyan nevezzük összefoglaló néven a manysi és chanti nyelvet, illetve az ezeket beszélő népeket?",
      options: ["Volga-vidéki finnek", "Szamojédek", "Ob-ugorok", "Balti-finnek"],
      correctIndex: 2,
      explanation: "Mivel az Ob folyó vidékén élnek, a manysikat és a chantiakat összefoglalóan ob-ugoroknak nevezzük."
    },
    {
      question: "Miért tartalmaz a magyar nyelv sok török eredetű szót, ha szerkezetileg finnugor eredetű?",
      options: [
        "Mert a magyar nyelv a törökből fejlődött ki",
        "A honfoglalás előtti szoros történelmi érintkezés és kulturális kapcsolatok (kölcsönzés) miatt",
        "Mert a török nyelv is az uráli nyelvcsalád tagja",
        "Kizárólag a 150 éves török hódoltság alatti átvételek miatt"
      ],
      correctIndex: 1,
      explanation: "A magyarok a honfoglalás előtt évszázadokig éltek török nyelvű népek szomszédságában, tőlük nagyszámú jövevényszót vettek át (pl. mezőgazdasági, állattenyésztési szavakat)."
    },
    {
      question: "Melyik állítás igaz a magyar nyelv szókincsének finnugor eredetű rétegére?",
      options: [
        "A mai szókincsünk több mint 90%-a finnugor eredetű szó",
        "Bár számarányuk viszonylag csekély (kb. 800-1000 szó), ezek alkotják a leggyakoribb szavakból álló alapszókincset",
        "Csak a modern tudományos szakszavak finnugor eredetűek",
        "Nincsenek finnugor eredetű szavaink, csak nyelvtani szerkezeti egyezések"
      ],
      correctIndex: 1,
      explanation: "A finnugor eredetű szavak száma kb. 800-1000, de ezek a legősibb és leggyakrabban használt szavaink (alapszókincs)."
    },
    {
      question: "Melyik fogalomkör szavai NEM tartoznak tipikusan a finnugor eredetű alapszókincshez?",
      options: [
        "Testrészek (pl. fej, szem, kéz)",
        "Rokonságnevek (pl. apa, anya, fiú)",
        "Keresztény vallási szakkifejezések (pl. templom, pap, kereszt)",
        "Természeti jelenségek, elemek (pl. víz, tűz, kő)"
      ],
      correctIndex: 2,
      explanation: "A keresztény vallási szavak többsége szláv (pl. templom, pap, kereszt) vagy latin eredetű jövevényszó, nem a finnugor alapszókincs része."
    },
    {
      question: "Melyik szó finnugor eredetű az alábbiak közül?",
      options: ["asztal", "zongora", "hal", "iskola"],
      correctIndex: 2,
      explanation: "'Hal' szavunk finnugor eredetű (finn megfelelője: kala). Az 'asztal' és 'iskola' jövevényszavak, a 'zongora' pedig nyelvújítási szó."
    },
    {
      question: "Melyik módszer a nyelvrokonság kutatásának és bizonyításának elsődleges tudományos eszköze?",
      options: [
        "Véletlenszerű szóhasonlítás a csengés-bongás alapján",
        "A történeti-összehasonlító nyelvészet módszere",
        "A rovásírásos emlékek vizsgálata",
        "A mai beszélők DNS-ének genetikai elemzése"
      ],
      correctIndex: 1,
      explanation: "A történeti-összehasonlító nyelvészet a hangváltozások törvényszerűségeit és a nyelvtani szerkezetek egyezéseit vizsgálja rendszerszerűen."
    },
    {
      question: "Mit jelent a 'rendszeres hangmegfelelések' szabálya a nyelvészetben?",
      options: [
        "A rokon nyelvek szavaiban a hangok teljesen azonosak",
        "A rokon nyelvek szavainak megfelelő hangjai között törvényszerű, történetileg igazolható párhuzamok vannak",
        "Minden nyelven ugyanúgy ejtik a magánhangzókat",
        "A szavak végén álló hangok mindig lekopnak"
      ],
      correctIndex: 1,
      explanation: "A rokon nyelvek szai között szigorú hangtani szabályok érvényesülnek, például a magyar szókezdő f- hangnak a finnben p- felel meg (pl. fa - puu)."
    },
    {
      question: "Melyik finn szó felel meg a magyar 'fő' (fej) szónak a szókezdő hangmegfelelés (magyar f- $\\leftrightarrow$ finn p-) alapján?",
      options: ["kala", "puu", "pää", "vesi"],
      correctIndex: 2,
      explanation: "A magyar 'fő' (fej) szó megfelelője a finnben a 'pää'. (A 'kala' a hal, a 'puu' a fa megfelelője)."
    },
    {
      question: "Melyik szerkezeti (nyelvtani) tulajdonság bizonyítja leginkább a magyar nyelv finnugor rokonságát?",
      options: [
        "Az elöljárószavak kizárólagos használata",
        "Az agglutináló (ragasztó) jelleg és a birtokos személyjelek használata",
        "A nyelvtani nemek szigorú megkülönböztetése",
        "A jelzők kötelező egyeztetése a jelzett szóval számban és esetben"
      ],
      correctIndex: 1,
      explanation: "Az agglutináció (toldalékolás), a névutók használata és a birtokos személyjelezés (pl. házam, házad) mind az uráli alapnyelv szerkezeti örökségei."
    },
    {
      question: "Mit bizonyít a magyar 'házam', 'házad', 'háza' ragozási sor a finnugor rokonság szempontjából?",
      options: [
        "A névutók kizárólagos használatát",
        "Az indoeurópai típusú birtokos névmások átvételét",
        "A birtokos személyjelek rendszerét, amely közös uráli szerkezeti jellemző",
        "A nyelvtani nemek jelenlétét a magyarban"
      ],
      correctIndex: 2,
      explanation: "A birtokos személyjelzés a névszókon olyan szerkezeti sajátosság, amely a finnugor nyelvekben közös, szemben például az indoeurópai nyelvek birtokos névmásaival."
    },
    {
      question: "Miért veti el a tudomány a sumer-magyar vagy etruszk-magyar nyelvrokonsági elméleteket?",
      options: [
        "Mert politikailag nem kívánatosak a kutatásuk",
        "Mert ezekből a nyelvekből egyáltalán nincsenek írásos emlékek",
        "Mert nélkülözik a módszeres hangtani és nyelvtani bizonyítást, csupán véletlen hangzásbeli hasonlóságokra épülnek",
        "Mert a sumerek és etruszkok nem hagytak hátra nyelvi nyomokat"
      ],
      correctIndex: 2,
      explanation: "Ezek az alternatív elméletek nem tudnak felmutatni rendszeres hangmegfeleléseket és nyelvtani szerkezeti egyezéseket, csupán csengő-bongó, véletlen szóhasonlításokra építenek."
    },
    {
      question: "Melyik állítás fogalmazza meg helyesen a nyelvrokonság és a népesség genetikai rokonságának kapcsolatát?",
      options: [
        "A nyelvrokonság és a genetikai rokonság teljesen azonos kategória",
        "A nyelvrokonság nem azonos a genetikai rokonsággal, mert a nyelvhasználat történeti, kulturális tényező, míg a genetika biológiai",
        "A magyarok genetikailag teljesen megegyeznek a finnekkel",
        "A nyelvi rokonságot kizárólag modern DNS-vizsgálatokkal lehet igazolni"
      ],
      correctIndex: 1,
      explanation: "A nyelvrokonság kizárólag a nyelv származását jelenti. Egy nép a történelem során átvehetett egy másik nyelvet, miközben biológiailag más népekkel keveredett."
    }
  ]
});
