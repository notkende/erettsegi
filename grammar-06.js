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
      question: "Melyik finn szó felel meg a magyar 'hal' szónak a szókezdő hangmegfelelések szabályai szerint?",
      options: ["puu", "pää", "kala", "vesi"],
      correctIndex: 2,
      explanation: "A magyar szókezdő h- hangnak a finnben a k- felel meg. Így a magyar 'hal' megfelelője a finnben a 'kala'."
    },
    {
      question: "Mi volt a tétje a 19. századi 'ugor-török háború' néven elhíresült vitának?",
      options: [
        "A török hódoltság alatti cenzúra kérdése",
        "Annak eldöntése, hogy a magyar nyelv finnugor vagy török eredetű-e",
        "A rovásírás állami engedélyezése",
        "A reformkori színházak nyelvének meghatározása"
      ],
      correctIndex: 1,
      explanation: "A vitában Vámbéry Ármin a török rokonságot, Budenz József pedig a finnugor rokonságot védte. Budenz nyert, bizonyítva a nyelvtani rokonság finnugor jellegét."
    },
    {
      question: "Melyik tulajdonság bizonyítja nyelvtani szinten a finnugor rokonságot?",
      options: [
        "A magyar nyelv agglutináló (ragasztó) jellege és a birtokos személyjelek használata",
        "A betűrendes írás használata",
        "Az idegen szavak hiánya",
        "A határozott névelők gyakori használata"
      ],
      correctIndex: 0,
      explanation: "Az agglutináció és a személyjelezés (pl. házam, házad) az uráli alapnyelvből örökölt strukturális vonás, amely a rokon nyelvekben közösen megvan."
    }
  ]
});
