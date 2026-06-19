// 11. történelem tétel: Az országgyűlési választási rendszer Magyarországon
window.loadHistoryData(11, {
  outline: [
    "A választójog alapelvei és fogalma (aktív és passzív választójog)",
    "Történeti előzmények: a rendi képviselettől a cenzusos, majd az általános választójogig",
    "A jelenlegi magyar választási rendszer felépítése: a vegyes rendszer jellemzői (egyéni választókerületek és országos lista)",
    "A mandátumszerzés menete: a győzteskompenzáció, a töredékszavazatok és a parlamenti küszöb",
    "A nemzetiségi képviselet és a választási rendszer demokratikus garanciái"
  ],
  introduction: `
    <p>Az országgyűlési választási rendszer határozza meg, hogy a választópolgárok akarata miként alakul át parlamenti mandátumokká. Magyarországon a választások demokratikus, szabad és közvetlen módon zajlanak. A jelenlegi rendszer egy sajátos <strong>vegyes választási rendszer</strong>, amely ötvözi az egyéni választókerületi (többségi) és az országos listás (arányos) szisztéma elemeit. Ez a rendszer biztosítja a stabil kormányozhatóságot, miközben teret enged a pártok arányos képviseletének és a nemzeti kisebbségek jogainak is.</p>
  `,
  biography: `
    <p>A modern magyar választási rendszer jogi alapjait Magyarország Alaptörvénye és a <strong>2011. évi CCIII. törvény (az országgyűlési képviselők választásáról)</strong> rögzíti. A választások lebonyolításáért és tisztaságáért független szervek, a <strong>Nemzeti Választási Bizottság (NVB)</strong> és a <strong>Nemzeti Választási Iroda (NVI)</strong> felelnek. A választójog univerzális érték, melynek fejlődése a 19. századi cenzusos rendszertől a 20. századi általános és titkos választójogon át vezetett a mai modern, elektronikus névjegyzékkel támogatott eljárásig.</p>
  `,
  keyWorks: [
    {
      title: "Történeti út a népképviseletig (1848–1989)",
      analysis: `
        <p>A magyarországi választási rendszer története szorosan összefügg a polgárosodással. Az <strong>1848-as áprilisi törvények</strong> (V. törvénycikk) vezették be a népképviseleti rendszert a korábbi rendi gyűlések helyett. Ez a rendszer még szigorú vagyoni és műveltségi <strong>cenzushoz</strong> kötötte a szavazójogot (a férfiak kb. 8-10%-a szavazhatott). A dualizmus korában ez az arány alig változott, és a szavazás vidéken nyíltan zajlott.</p>
        <p>A Horthy-korszakban (az 1920-as és 1930-as években) fokozatosan kiterjesztették a választójogot a nőkre is, de a nyílt szavazást csak 1938-ban törölték el teljesen. A második világháború után, 1945-ben tartották az első teljesen általános, titkos és egyenlő választást. A kommunista diktatúra alatt (1949–1989) a választások formálissá váltak (egypártrendszer, Hazafias Népfront listája).</p>
        <p>A rendszerváltás során (1989. évi XXXIV. törvény) jött létre az a kétfordulós, 386 fős vegyes rendszer, amely 2010-ig határozta meg a magyar parlamentarizmust.</p>
      `
    },
    {
      title: "A jelenlegi választási szisztéma felépítése (2011 után)",
      analysis: `
        <p>A 2011-ben elfogadott új törvény gyökeresen átalakította a rendszert. A legfontosabb változások a következők:</p>
        <ul>
          <li><strong>Létszámcsökkentés:</strong> A parlament létszáma 386-ról <strong>199 főre</strong> csökkent.</li>
          <li><strong>Egyfordulós rendszer:</strong> A korábbi két forduló helyett a szavazás egyetlen fordulóban dől el (relatív többségi elv).</li>
          <li><strong>Vegyes struktúra:</strong>
            <ul>
              <li><strong>106 képviselőt</strong> egyéni választókerületben (OEVK) választanak meg, ahol a legtöbb szavazatot kapott jelölt nyeri el a mandátumot (nincs érvényességi küszöb).</li>
              <li><strong>93 képviselő</strong> országos listáról (pártlistákról vagy nemzetiségi listákról) szerez mandátumot arányos rendszerben.</li>
            </ul>
          </li>
          <li><strong>Határon túli magyarok szavazati joga:</strong> A magyarországi lakcímmel nem rendelkező magyar állampolgárok levélben szavazhatnak az országos listákra.</li>
        </ul>
      `
    },
    {
      title: "Mandátumkiosztás, töredékszavazatok és kompenzáció",
      analysis: `
        <p>A magyar rendszer sajátossága a <strong>töredékszavazatok</strong> visszamérése az országos pártlistákhoz. Töredékszavazatnak minősül:</p>
        <ol>
          <li>Az egyéni választókerületben a vesztes jelöltekre leadott összes szavazat (mivel ezek nem vezettek közvetlen mandátumhoz).</li>
          <li>A győztes jelöltre leadott szavazatok közül azok, amelyek már nem voltak szükségesek a győzelemhez (a győztes szavazatainak száma mínusz a második helyezett szavazatainak száma plusz egy). Ezt nevezik <strong>győzteskompenzációnak</strong>.</li>
        </ol>
        <p>A listás mandátumok kiosztása a <strong>D'Hondt-módszer</strong> segítségével történik, amely egy matematikai algoritmus az arányos elosztásra. Országos listáról csak azon pártok kaphatnak mandátumot, amelyek elérik az <strong>5%-os parlamenti küszöböt</strong> (két párt közös listája esetén 10%, három vagy több párt esetén 15%).</p>
      `
    }
  ],
  styleAndForm: `
    <p>A választójog alapelvei a modern demokráciákban:</p>
    <ul>
      <li><strong>Általánosság:</strong> Minden nagykorú állampolgár rendelkezik választójoggal (kivéve a bíróság által kizártakat).</li>
      <li><strong>Egyenlőség:</strong> Minden választópolgár szavazata azonos értékű (egyenlő súlyú).</li>
      <li><strong>Közvetlenség:</strong> A választók közvetlenül a jelöltekre és listákra szavaznak, nem pedig elektorok útján.</li>
      <li><strong>Titkosság:</strong> A szavazás fülkében, zárt borítékban vagy urnában történik, így senki sem ellenőrizheti a választó akaratát.</li>
    </ul>
    <p>A magyar rendszer emellett biztosítja a <strong>nemzetiségi képviseletet</strong> is: a regisztrált nemzetiségi választók kedvezményes kvótával szerezhetnek teljes jogú mandátumot, vagy hu ezt nem érik el, nemzetiségi szószólót küldhetnek a parlamentbe.</p>
  `,
  conclusion: `
    <p>Összegzésképpen a magyar országgyűlési választási rendszer egy rendkívül koncentrált, a többségi elvnek kedvező vegyes szisztéma. A győzteskompenzáció és az egyfordulós relatív többségi egyéni kerületek biztosítják, hogy a választásokon győztes párt stabil kormányzó többséget szerezzen, miközben a listás ág garantálja az ellenzéki és kisebbségi hangok megjelenését az Országgyűlésben.</p>
  `,
  flashcards: [
    {
      question: "Hány tagból áll a magyar Országgyűlés a jelenlegi választási rendszerben?",
      answer: "199 képviselőből (106 egyéni választókerületi és 93 országos listás képviselő)."
    },
    {
      question: "Mit jelent a passzív választójog fogalma?",
      answer: "Azt a jogot, hogy egy állampolgár képviselőjelöltként indulhat a választásokon, azaz választható."
    },
    {
      question: "Mekkora a bejutási küszöb az országgyűlési választásokon az egyéni pártlisták esetében?",
      answer: "5% (a leadott érvényes listás szavazatok legalább 5%-át kell megszerezni)."
    },
    {
      question: "Hogyan szavazhatnak a magyarországi lakcímmel nem rendelkező magyar állampolgárok?",
      answer: "Levélben szavazhatnak, és kizárólag az országos pártlistákra adhatnak le szavazatot."
    },
    {
      question: "Mi a győzteskompenzáció lényege a magyar rendszerben?",
      answer: "Az egyéni győztes jelöltre leadott szavazatok közül a győzelemhez nem szükséges szavazatokat (töredékszavazatként) hozzáadják a párt országos listájához."
    }
  ],
  quiz: [
    {
      question: "Hány tagból áll a magyar Országgyűlés a 2011. évi választási törvény szerint?",
      options: ["386", "199", "100", "200"],
      correctIndex: 1,
      explanation: "A 2011-es törvény 199 tagban határozta meg az Országgyűlés létszámát."
    },
    {
      question: "Milyen típusú választási rendszer működik jelenleg Magyarországon az országgyűlési választásokon?",
      options: ["Tiszta többségi rendszer", "Tiszta arányos listás rendszer", "Vegyes választási rendszer", "Kétlépcsős elektori rendszer"],
      correctIndex: 2,
      explanation: "A magyar rendszer vegyes: egyesíti az egyéni kerületi (többségi) és az országos listás (arányos) elemeket."
    },
    {
      question: "Hány egyéni választókerületi (OEVK) mandátumot osztanak ki a választásokon?",
      options: ["106", "93", "199", "150"],
      correctIndex: 0,
      explanation: "Magyarországon 106 egyéni választókerület található, mindegyikből egy képviselő jut be."
    },
    {
      question: "Hány mandátum szerezhető meg országos listáról?",
      options: ["106", "93", "199", "386"],
      correctIndex: 1,
      explanation: "Az országos listáról 93 mandátumot osztanak ki a szavazatok arányában."
    },
    {
      question: "Hány fordulós jelenleg a magyar országgyűlési választás?",
      options: ["Egyfordulós", "Kétfordulós", "Háromfordulós", "Attól függ, hány jelölt indul"],
      correctIndex: 0,
      explanation: "A 2011. évi reform óta a választás egyetlen fordulóban dől el."
    },
    {
      question: "Melyik évben vezették be az első népképviseleti választásokat Magyarországon?",
      options: ["1848", "1867", "1920", "1945"],
      correctIndex: 0,
      explanation: "Az 1848-as áprilisi törvények (V. tc.) vezették be először a népképviseleti országgyűlést."
    },
    {
      question: "Mekkora a parlamenti küszöb önállóan induló pártok esetén az országos listán?",
      options: ["3%", "4%", "5%", "10%"],
      correctIndex: 2,
      explanation: "Az önálló pártlistáknak legalább a leadott szavazatok 5%-át kell elérniük a mandátumszerzéshez."
    },
    {
      question: "Mekkora a bejutási küszöb, ha három párt indít közös listát?",
      options: ["5%", "10%", "15%", "20%"],
      correctIndex: 2,
      explanation: "Közös lista esetén két pártnál 10%, három vagy több pártnál 15% a küszöb."
    },
    {
      question: "Ki felelős a választások törvényes előkészítéséért és lebonyolításáért állami szinten?",
      options: [
        "A Kormány és a Miniszterelnökség",
        "A Nemzeti Választási Bizottság (NVB) és a Nemzeti Választási Iroda (NVI)",
        "Az Alkotmánybíróság és a Kúria",
        "A Köztársasági Elnöki Hivatal"
      ],
      correctIndex: 1,
      explanation: "Az NVB és az NVI független szervekként felelősek a választások megszervezéséért és törvényességéért."
    },
    {
      question: "Mi számít töredékszavazatnak a választási rendszerben?",
      options: [
        "A külföldön leadott, sérült szavazólapok",
        "Az egyéni kerületben a vesztesekre leadott szavazatok és a győztes felesleges szavazatai",
        "A határon túli magyarok által levélben leadott szavazatok fele",
        "Az érvénytelenül leadott szavazólapok"
      ],
      correctIndex: 1,
      explanation: "Töredékszavazat a vesztesekre leadott szavazat, valamint a győztes mandátumot nem eredményező plusz szavazatai."
    },
    {
      question: "Mit jelent az aktív választójog?",
      options: [
        "A választópolgár joga arra, hogy szavazhasson a választáson",
        "A jelölt joga arra, hogy kampányt folytasson",
        "A szavazatszámlálók joga a szavazatok összesítésére",
        "A pártok joga a listák állítására"
      ],
      correctIndex: 0,
      explanation: "Az aktív választójog a szavazásban való részvétel jogát (a választás jogát) jelenti."
    },
    {
      question: "Hogyan szavazhat az a választópolgár, akinek van magyarországi lakcíme, de a választás napján külföldön tartózkodik?",
      options: [
        "Levélben szavazhat tetszőleges címről",
        "Kizárólag interneten keresztül szavazhat",
        "A magyar nagykövetségeken és konzulátusokon (külképviseleteken) személyesen szavazhat",
        "Nem szavazhat külföldről"
      ],
      correctIndex: 2,
      explanation: "A magyarországi lakcímmel rendelkező állampolgárok külföldön a kijelölt külképviseleteken adhatják le szavazatukat."
    },
    {
      question: "Melyik módszert alkalmazzák a listás mandátumok kiosztásakor a töredékszavazatok elosztására?",
      options: ["D'Hondt-módszer", "Hare-kvóta", "Sainte-Laguë módszer", "Abszolút többségi formula"],
      correctIndex: 0,
      explanation: "A magyar választási rendszer a D'Hondt-módszert alkalmazza az országos listás mandátumok kiosztására."
    },
    {
      question: "Mit biztosít a nemzetiségi regisztráció a választóknak?",
      options: [
        "Kétszeres szavazati jogot a pártlistákra",
        "Kedvezményes mandátumszerzési lehetőséget nemzetiségi listáról",
        "Adómentességet a választási évben",
        "Kizárólagos egyéni jelöltállítási jogot"
      ],
      correctIndex: 1,
      explanation: "A nemzetiségi névjegyzékbe vett választópolgárok kedvezményes kvótával juttathatnak be képviselőt a parlamentbe."
    },
    {
      question: "Hány évente tartanak rendes országgyűlési választásokat Magyarországon?",
      options: ["3 évente", "4 évente", "5 évente", "6 évente"],
      correctIndex: 1,
      explanation: "A magyar Alaptörvény szerint az országgyűlési képviselők megbízatása 4 évre szól."
    },
    {
      question: "Melyik választási alapelvet sérti meg az, ha egy személy több szavazóhelyiségben is leadhatja a szavazatát?",
      options: ["Az általánosság elvét", "Az egyenlőség elvét", "A közvetlenség elvét", "A titkosság elvét"],
      correctIndex: 1,
      explanation: "Az egyenlőség elve kimondja, hogy minden választónak egy szavazata van, és minden szavazat azonos súlyú."
    },
    {
      question: "Hogyan kell érvényesen szavazni az országgyűlési választáson?",
      options: [
        "A jelölt neve mellé írt 'igen' szóval",
        "A jelölt vagy párt neve melletti körbe tollal rajzolt két egymást metsző vonallal (X vagy +)",
        "A szavazólap hátoldalának aláírásával",
        "Bármilyen jelöléssel, ami kifejezi a szavazó szándékát"
      ],
      correctIndex: 1,
      explanation: "Érvényesen szavazni csak a körben elhelyezett két egymást metsző vonallal (X vagy +) lehet."
    },
    {
      question: "A bíróság kit zárhat ki a választójogból Magyarországon?",
      options: [
        "Aki nem fizetett adót az előző évben",
        "Akit bűncselekmény elkövetése vagy belátási képességének hiánya miatt a bíróság eltiltott a választójogtól",
        "Aki nem rendelkezik érettségi bizonyítvánnyal",
        "A munkanélküli állampolgárokat"
      ],
      correctIndex: 1,
      explanation: "A választójogból csak bírósági határozat alapján, meghatározott súlyos okokból (bűncselekmény, gondnokság alá helyezés) lehet kizárni valakit."
    },
    {
      question: "Mi a nemzetiségi szószóló szerepe a parlamentben?",
      options: [
        "Szavazati joggal rendelkező rendes képviselő",
        "Szavazati joggal nem rendelkező, de felszólalási joggal bíró képviselő a nemzetiség érdekében",
        "A Nemzeti Választási Bizottság elnöke",
        "A köztársasági elnök tanácsadója"
      ],
      correctIndex: 1,
      explanation: "If a national minority does not secure a preferential seat, they can send a minority spokesperson to Parliament with speaking rights but no voting rights."
    },
    {
      question: "Mit jelent a győzteskompenzáció fogalma?",
      options: [
        "A választások győztesének járó pénzügyi támogatást",
        "A győztes egyéni jelölt pártjának juttatott plusz szavazatokat az országos listán",
        "Az ellenzéki pártok mandátumainak kiegészítését",
        "A választókerületi határok átrajzolását a győztes javára"
      ],
      correctIndex: 1,
      explanation: "A győzteskompenzáció az egyéni választókerületben győztes jelölt azon szavazatait csatornázza a pártlistára, amelyek meghaladták a győzelemhez szükséges minimumot."
    }
  ]
});
