// 12. nyelvtan tétel: Az intertextualitás
window.loadGrammarData(12, {
  outline: [
    "Az intertextualitás (szövegköztiség) fogalma",
    "Az intertextuális kapcsolatok főbb típusai (idézet, utalás, paródia)",
    "A hipertextualitás mint a digitális kor intertextualitása",
    "Irodalmi példák az intertextualitásra a klasszikus és modern költészetben",
    "A befogadó (olvasó) aktív szerepe az intertextuális jelek dekódolásában"
  ],
  introduction: `
    <p>Az intertextualitás (szövegköztiség) azt a jelenséget jelenti, hogy **egy szöveg nem elszigetelten létezik**, hanem más, korábbi vagy egyidejű szövegekkel áll kapcsolatban, azokat megidézi, beépíti vagy reflektál rájuk. <strong>Julia Kristeva által bevezetett fogalom szerint minden szöveg egy korábbi szövegmozaik beépítése, és minden szöveg más szövegek újraírása.</strong></p>
  `,
  biography: `
    <p>Az intertextualitás fogalmát Julia Kristeva francia-bolgár irodalomelméleti kutató alkotta meg 1966-ban, Mihail Bahtin dialógus-elméletére támaszkodva. Bahtin szerint a szavak mindig 'párbeszédben' állnak korábbi elhangzásokkal. Később Gérard Genette francia irodalmár rendszerezte a szövegközi kapcsolatok formáit (transztextualitás) 'Palimpszeszt' című híres művében.</p>
  `,
  keyWorks: [
    {
      title: "Az intertextualitás főbb megjelenési formái",
      analysis: `
        <p>A szövegek közötti párbeszéd többféle módon valósulhat meg a szövegben:</p>
        <ul>
          <li><strong>Idézet (idézés)</strong>: Egy másik szöveg szó szerinti átvétele idézőjellel vagy forrásmegjelöléssel (pl. tudományos cikkekben) vagy jelöletlenül (pl. szépirodalomban).</li>
          <li><strong>Utalás (allúzió)</strong>: Egy másik műre, eseményre vagy karakterre történő közvetett, burkolt utalás, amely feltételezi az olvasó tájékozottságát.</li>
          <li><strong>Paródia</strong>: Egy korábbi mű vagy stílus szándékos utánzása, de kiforgatott, humoros vagy kritikai éllel (pl. Karinthy Frigyes: <i>Így írtok ti</i>).</li>
          <li><strong>Pastiche (pasztis)</strong>: Egy másik szerző stílusának tiszteletteljes utánzása gúnyolódás nélkül, tisztelgésként.</li>
          <li><strong>Adaptáció</strong>: Egy mű átültetése más műfajba vagy médiumba (pl. regényből film vagy dráma készítése).</li>
        </ul>
      `
    },
    {
      title: "Hipertext és az olvasó szerepe",
      analysis: `
        <p>A digitális korban az intertextualitás konkrét technikai formát öltött a **hipertext** (linkek, kattintható hivatkozások) révén. A weboldalakon található linkek közvetlenül összekötik a különböző dokumentumokat, megvalósítva az azonnali szövegköztiséget.</p>
        <p>Az intertextualitás működéséhez elengedhetetlen a **befogadó (olvasó)** aktív szerepe. Ha az olvasó nem ismeri a megidézett (forrás) szöveget, a szövegközi utalás rejtve marad, és a mű mélyebb rétegei nem tárulnak fel. Az olvasó háttértudása (kulturális kódja) határozza meg a megértés mélységét.</p>
      `
    }
  ],
  styleAndForm: `
    <p>Az intertextualitás a **posztmodern irodalom** egyik legfőbb stílusjegyévé vált. A posztmodern írók (pl. Esterházy Péter) nyíltan használják mások szövegeit montázsként, megkérdőjelezve az eredetiség és a szerzői tulajdon hagyományos fogalmát.</p>
  `,
  conclusion: `
    <p>A szövegköztiség gazdagítja a kommunikációt, új értelmezési tartományokat nyit meg, és bizonyítja a kultúra folyamatosságát és a szövegek közötti végtelen párbeszédet.</p>
  `,
  flashcards: [
    {
      question: "Ki vezette be az intertextualitás fogalmát az irodalomelméletbe?",
      answer: "Julia Kristeva (1966-ban)."
    },
    {
      question: "Mi a paródia és a pastiche közötti fő különbség?",
      answer: "A paródia humoros, kritikus utánzás gúnyos éllel, míg a pastiche tiszteletteljes stílusutánzás tisztelgésként."
    },
    {
      question: "Melyik digitális technológia valósítja meg közvetlenül az intertextualitást?",
      answer: "A hipertext (hivatkozások, linkek az interneten)."
    },
    {
      question: "Miért fontos az olvasó szerepe az intertextualitásban?",
      answer: "Mert az utalásokat és idézeteket az olvasónak kell felismernie a saját háttértudása alapján; felismerés nélkül a kapcsolat rejtve marad."
    }
  ],
  quiz: [
    {
      question: "Melyik fogalom jelenti egy korábbi mű stílusának humoros, eltorzított utánzását gúnyos vagy kritikai szándékkal?",
      options: ["Pastiche", "Paródia", "Idézet", "Adaptáció"],
      correctIndex: 1,
      explanation: "A paródia célja egy mű, stílus vagy szerző stílusjegyeinek felnagyítása és kinevetése."
    },
    {
      question: "Melyik irodalmi korszak tette meg az intertextualitást a legfőbb stilisztikai eszközévé?",
      options: ["Klasszicizmus", "Realizmus", "Posztmodern", "Felvilágosodás"],
      correctIndex: 2,
      explanation: "A posztmodern irodalomra (pl. Esterházy Péter műveire) jellemző a kollázstechnika, a vendégszövegek és idézetek folyamatos, játékos beépítése."
    },
    {
      question: "Hogyan nevezzük azt az intertextuális formát, amikor egy regényből színházi előadás vagy mozifilm készül?",
      options: ["Allúzió (utalás)", "Adaptáció", "Glossza", "Hipertext"],
      correctIndex: 1,
      explanation: "Az adaptáció egy műalkotás átültetése egyik művészeti ágból (pl. epika/regény) egy másikba (pl. dráma/film)."
    }
  ]
});
