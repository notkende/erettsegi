// 10. nyelvtan tétel: A magánhangzók és mássalhangzók rendszere
window.loadGrammarData(10, {
  outline: [
    "A hangképzés folyamata és a beszédhangok fogalma",
    "A magánhangzók osztályozási rendszere (hangrend)",
    "A mássalhangzók osztályozása (zöngésség, képzés helye és módja)",
    "A magánhangzótörvények (hangrendi illeszkedés, ajakkerekítés)",
    "A mássalhangzótörvények (hasonulások, összeolvadás, rövidülés, kiesés)"
  ],
  introduction: `
    <p>A beszédhangok a beszéd legkisebb, önálló jelentéssel nem bíró, de jelentésmegkülönböztető nyelvi elemei (fonémák). <strong>A magyar hangrendszer 39 fonémából áll, melyeket magánhangzókra (14 hang) és mássalhangzókra (25 hang) osztunk fel a képzésük és akusztikai tulajdonságaik alapján.</strong></p>
  `,
  biography: `
    <p>A magyar fonetika (hangtan) megalapozója Kempelen Farkas (1734–1804) volt, aki megalkotta a világ első beszélőgépét, és részletesen leírta az emberi hangképző szervek működését 'Az emberi beszéd mechanizmusa' című művében. A 20. században Gombocz Zoltán és Laziczius Gyula fejlesztették tovább a magyar leíró hangtant.</p>
  `,
  keyWorks: [
    {
      title: "A magánhangzók rendszere és törvényei",
      analysis: `
        <p>A magánhangzók képzésekor a tüdőből kiáramló levegő akadály nélkül távozik, megremegtetve a hangszalagokat (mindegyik zöngés). Csoportosításuk három szempont szerint történik:</p>
        <ol>
          <li><strong>A nyelv vízszintes mozgása szerint</strong>:
            <ul>
              <li><i>Mély (hátul képzett / veláris) hangok</i>: a, á, o, ó, u, ú.</li>
              <li><i>Magas (elöl képzett / palatális) hangok</i>: e, é, i, í, ö, ő, ü, ű.</li>
            </ul>
          </li>
          <li><strong>Ajakműködés szerint</strong>:
            <ul>
              <li><i>Ajakkerítéses (labiális)</i>: a, o, ó, u, ú, ö, ő, ü, ű.</li>
              <li><i>Ajakréses (illabiális)</i>: á, e, é, i, í.</li>
            </ul>
          </li>
          <li><strong>Időtartam szerint</strong>: Rövid (a, e, i, o, ö, u, ü) és hosszú (á, é, í, ó, ő, ú, ű).</li>
        </ol>
        <p>A **magánhangzótörvények** közül a legfontosabb a **hangrend**, amely szerint a magyar szavak lehetnek mély hangrendűek (<i>autó, kapu</i>), magas hangrendűek (<i>tenisz, üveg</i>) vagy vegyes hangrendűek (<i>virág, leány</i>). Ehhez kapcsolódik az **illeszkedés törvénye**: a toldalékok hangrendben igazodnak a szótőhöz (pl. <i>ház-ban, kert-ben, könyv-ben</i>).</p>
      `
    },
    {
      title: "A mássalhangzók rendszere és törvényei",
      analysis: `
        <p>Mássalhangzók képzésekor a levegő akadályba (fog, ajak, íny) ütközik. Osztályozásuk:</p>
        <ul>
          <li><strong>Zöngésség szerint</strong>: Zöngés (b, d, g, v, z, zs, dz, dzs, j, l, m, n, ny, r) és zöngétlen (p, t, k, f, sz, s, c, cs, h). Sokan párba állíthatók (pl. b-p, d-t, g-k, z-sz, zs-s, v-f).</li>
          <li><strong>Képzés helye szerint</strong>: pl. ajakhangok (p, b, m), foghangok (t, d, n), ínyhangok (k, g).</li>
          <li><strong>Képzés módja szerint</strong>: pl. zárhangok (p, b, t, d, k, g), réshangok (f, v, sz, z, s, zs, h).</li>
        </ul>
        <p>A **mássalhangzótörvények** a beszéd során fellépő hangváltozások:</p>
        <ul>
          <li><strong>Részleges hasonulás</strong>: Csak egy képzési tulajdonság változik meg.
            <ul>
              <li><i>Zöngésség szerinti hasonulás</i>: pl. <i>vasgolyó</i> [vazgolyó], <i>népdal</i> [nébdal] - írásban nem jelölt.</li>
              <li><i>Képzés helye szerinti hasonulás</i>: pl. <i>színpad</i> [szímpad].</li>
            </ul>
          </li>
          <li><strong>Teljes hasonulás</strong>: A találkozó hangok közül az egyik teljesen azonossá válik a másikkal. Lehet <i>írásban jelölt</i> (pl. <i>ház + val $\\rightarrow$ házzal</i>) vagy <i>írásban jelöletlen</i> (pl. <i>anyja</i> [annyja], <i>egészség</i> [egésség]).</li>
          <li><strong>Összeolvadás</strong>: Két különböző hang találkozásakor egy harmadik, hosszú hang keletkezik, pl. <i>barátság</i> [baráccság] ($t+s=ccs$), <i>tanítja</i> [taníttya] ($t+j=tty$).</li>
          <li><strong>Rövidülés</strong>: Egy hosszú és egy rövid mássalhangzó találkozásakor a hosszú megrövidül, pl. <i>otthon</i> [othon], <i>varrógép</i> [varógép].</li>
          <li><strong>Kiesés</strong>: Három különböző mássalhangzó találkozásakor a középső kiesik, pl. <i>mindnyájan</i> [minnyájan], <i>azt mondta</i> [azt monta].</li>
        </ul>
      `
    }
  ],
  styleAndForm: `
    <p>A magyar hangrendszer jellegzetes akusztikai sajátossága a **magánhangzó-mássalhangzó egyensúly** és a **magánhangzó-harmónia**, amelyek lággyá, dallamossá teszik a beszédet.</p>
  `,
  conclusion: `
    <p>A hangtani törvények ismerete megkönnyíti a helyesírási szabályok elsajátítását (pl. a kiejtés elve és a szóelemzés elve közötti egyensúlyt) és javítja a szépkiejtést (ortoépia).</p>
  `,
  flashcards: [
    {
      question: "Melyik három szempont szerint osztályozzuk a magánhangzókat?",
      answer: "A nyelv vízszintes mozgása (mély/magas), az ajakműködés (ajakkerekítéses/ajakréses) és a hang időtartama (rövid/hosszú) szerint."
    },
    {
      question: "Mi az illeszkedés törvénye?",
      answer: "A toldalékok magánhangzóinak igazodása a szótő hangrendjéhez (pl. mély tőhöz mély toldalék: asztal-on; magas tőhöz magas toldalék: szék-en)."
    },
    {
      question: "Mondj példát az írásban jelölt teljes hasonulásra!",
      answer: "A -val/-vel és a -vá/-vé ragok hasonulása: kés-sel, vízzé, virággal."
    },
    {
      question: "Melyik törvény érvényesül a 'barátság' szó kiejtésében?",
      answer: "Az összeolvadás törvénye (a t és s találkozásakor egy hosszú cs hangot ejtünk: [baráccság])."
    }
  ],
  quiz: [
    {
      question: "Hány beszédhangból (fonémából) áll a magyar standard hangrendszer?",
      options: ["14", "25", "39", "44"],
      correctIndex: 2,
      explanation: "A magyar standard hangrendszer 39 fonémából áll (14 magánhangzó és 25 mássalhangzó)."
    },
    {
      question: "Melyik állítás igaz a magánhangzók képzésére vonatkozóan?",
      options: [
        "A tüdőből kiáramló levegő valamilyen akadályba (fog, ajak, íny) ütközik",
        "A kiáramló levegő akadály nélkül távozik a szájüregből, megremegtetve a hangszalagokat",
        "A magánhangzók egy része zöngétlen a magyarban",
        "Képzésük során a nyelv nem játszik semmilyen szerepet"
      ],
      correctIndex: 1,
      explanation: "A magánhangzók képzésekor a levegő akadálytalanul áramlik ki, miközben a hangszalagok rezegnek (minden magánhangzó zöngés)."
    },
    {
      question: "Melyik magánhangzócsoportba tartoznak az 'a, á, o, ó, u, ú' hangok a nyelv vízszintes mozgása szerint?",
      options: [
        "Magas (elöl képzett / palatális) magánhangzók",
        "Mély (hátul képzett / veláris) magánhangzók",
        "Vegyes képzésű magánhangzók",
        "Orrhangú magánhangzók"
      ],
      correctIndex: 1,
      explanation: "Az a, á, o, ó, u, ú hangok ejtésekor a nyelv hátrahúzódik, így ezek mély (veláris) magánhangzók."
    },
    {
      question: "Melyik magánhangzócsoportba tartoznak az 'e, é, i, í, ö, ő, ü, ű' hangok a nyelv vízszintes mozgása szerint?",
      options: ["Mély magánhangzók", "Magas (elöl képzett) magánhangzók", "Zöngétlen magánhangzók", "Zárhangok"],
      correctIndex: 1,
      explanation: "Ezeknek a hangoknak az ejtésekor a nyelv előretolódik a szájüregben, ezért magas (palatális) magánhangzóknak nevezzük őket."
    },
    {
      question: "Melyik hang ajakréses (illabiális) az alábbiak közül?",
      options: ["o", "ö", "u", "é"],
      correctIndex: 3,
      explanation: "Az 'é' (valamint á, e, é, i, í) ejtésekor az ajkak réshelyzetben vannak (ajakrésesek), míg az o, ö, u ejtésekor kerekítettek (ajakkerekítésesek)."
    },
    {
      question: "Mit jelent a magyar szavak 'hangrendje'?",
      options: [
        "A mássalhangzók száma és elrendezése a szóban",
        "A szavak magánhangzóinak összetétele hangmagasság szerint (mély, magas vagy vegyes)",
        "A helyesírási szótár betűrendi felépítése",
        "A beszéd dallamának és hangerejének eloszlása a mondatban"
      ],
      correctIndex: 1,
      explanation: "A hangrend a szavak magánhangzó-összetételét jelenti: megkülönböztetünk mély (pl. autó), magas (pl. tenisz) és vegyes (pl. virág) hangrendű szavakat."
    },
    {
      question: "Melyik szó vegyes hangrendű az alábbiak közül?",
      options: ["autó", "tenisz", "virág", "könyv"],
      correctIndex: 2,
      explanation: "A 'virág' szóban mély (á) és magas (i) magánhangzó is található, így vegyes hangrendű."
    },
    {
      question: "Melyik törvény szabályozza, hogy a toldalékok magánhangzói igazodnak a szótőhöz (pl. ház-ban, kert-ben)?",
      options: [
        "A hangrendi illeszkedés törvénye",
        "A zöngésség szerinti hasonulás",
        "A mássalhangzó-összeolvadás",
        "Az ajakkerekítés törvénye"
      ],
      correctIndex: 0,
      explanation: "Az illeszkedés törvénye biztosítja a magánhangzó-harmóniát: a mély hangrendű tőhöz mély toldalék, a magas tőhöz magas toldalék járul."
    },
    {
      question: "Mi történik a mássalhangzók képzésekor a tüdőből kiáramló levegővel?",
      options: [
        "Akadály nélkül távozik a szájüregből",
        "A szájüregben valamilyen akadályba (fog, ajak, íny stb.) ütközik",
        "Mindig teljesen elakad az orrüregben",
        "Kizárólag a hangszalagok rezgését kelti akadály nélkül"
      ],
      correctIndex: 1,
      explanation: "Mássalhangzók képzésekor a levegő akadályba ütközik, és az akadály feloldása vagy a résen átpréselődés adja a jellegzetes zörejt."
    },
    {
      question: "Melyik hang zöngétlen az alábbiak közül?",
      options: ["b", "d", "z", "k"],
      correctIndex: 3,
      explanation: "A 'k' zöngétlen hang (a hangszalagok nem rezegnek a képzésekor), míg a b, d, z hangok zöngések."
    },
    {
      question: "Melyik mássalhangzópár tagjai alkotnak zöngés-zöngétlen párt a magyarban?",
      options: ["b - p", "d - k", "m - n", "z - s"],
      correctIndex: 0,
      explanation: "A zöngés 'b' zöngétlen párja a 'p' hang (ugyanolyan képzéshely és mód mellett csak a zöngésség tér el)."
    },
    {
      question: "Melyik mássalhangzótörvény érvényesül a 'vasgolyó' [vazgolyó] kifejezésben?",
      options: [
        "Zöngésség szerinti részleges hasonulás (zöngésedés)",
        "Írásban jelölt teljes hasonulás",
        "Összeolvadás",
        "Mássalhangzó-kiesés"
      ],
      correctIndex: 0,
      explanation: "A zöngétlen 's' hangot a mögötte álló zöngés 'g' zöngésíti 'z' hanggá: [vazgolyó]. Ez zöngésség szerinti részleges hasonulás."
    },
    {
      question: "Melyik mássalhangzótörvény érvényesül a 'népdal' [nébdal] szó kiejtésekor?",
      options: [
        "Zöngésség szerinti részleges hasonulás (zöngésedés)",
        "Zöngésség szerinti részleges hasonulás (zöngétlenedés)",
        "Teljes hasonulás",
        "Összeolvadás"
      ],
      correctIndex: 0,
      explanation: "A zöngétlen 'p' hangot a mögötte álló zöngés 'd' zöngésíti 'b' hanggá: [nébdal]. Ez zöngésedés."
    },
    {
      question: "Melyik szóban találunk írásban jelölt teljes hasonulást?",
      options: ["anyja", "késsel", "egészség", "színpad"],
      correctIndex: 1,
      explanation: "A 'kés + vel' kapcsolódásakor a 'v' teljesen hasonul az 's'-hez, amit írásban is jelölünk: 'késsel' (írásban jelölt teljes hasonulás)."
    },
    {
      question: "Melyik mássalhangzótörvény érvényesül az 'egészség' [egésség] szó kiejtésekor?",
      options: [
        "Írásban jelöletlen teljes hasonulás",
        "Írásban jelölt teljes hasonulás",
        "Zöngésség szerinti hasonulás",
        "Mássalhangzó-rövidülés"
      ],
      correctIndex: 0,
      explanation: "A szótővégi 'sz' és a toldalékkezdő 's' találkozásakor hosszú 'ss'-t ejtünk, de ezt írásban nem jelöljük: [egésség]."
    },
    {
      question: "Melyik szó kiejtésekor történik mássalhangzó-összeolvadás?",
      options: ["barátság", "otthon", "színpad", "vasgolyó"],
      correctIndex: 0,
      explanation: "A 'barátság' szóban a 't' és 's' hangok találkozásakor egy harmadik, hosszú hangot ejtünk: [baráccság]."
    },
    {
      question: "Melyik szóban érvényesül a mássalhangzó-rövidülés törvénye?",
      options: ["mindnyájan", "otthon", "barátság", "dobd"],
      correctIndex: 1,
      explanation: "Az 'otthon' szóban a hosszú 'tt' után álló 'h' miatt a kiejtésben megrövidül a mássalhangzó: [othon]."
    },
    {
      question: "Melyik mássalhangzótörvény érvényesül a 'mindnyájan' [minnyájan] szó kiejtésekor?",
      options: ["Összeolvadás", "Mássalhangzó-kiesés", "Zöngésség szerinti hasonulás", "Hangrendi illeszkedés"],
      correctIndex: 1,
      explanation: "A 'mindnyájan' szóban egymás után álló 'ndny' torlódásakor a középső 'd' hang kiesik: [minnyájan]."
    },
    {
      question: "Melyik szó kiejtésekor történik képzés helye szerinti részleges hasonulás?",
      options: ["színpad", "egér", "otthon", "barátság"],
      correctIndex: 0,
      explanation: "A 'színpad' szóban a foghang 'n' hangot a kétajki 'p' részlegesen hasonlítja, így kétajki 'm'-nek ejtjük: [szímpad]."
    },
    {
      question: "Ki volt a magyar leíró hangtan úttörője, aki megalkotta a világ első beszélőgépét a 18. század végén?",
      options: ["Kempelen Farkas", "Sajnovics János", "Budenz József", "Simonyi Zsigmond"],
      correctIndex: 0,
      explanation: "Kempelen Farkas írta le részletesen az emberi hangképzés mechanizmusát, és egy mechanikus beszélőgépet is épített a beszédhangok szintetizálására."
    }
  ]
});
