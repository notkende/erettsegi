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
      question: "Melyik magánhangzó-csoportba tartozik az 'e, é, i, í' hangsor?",
      options: [
        "Mély és ajakkerekítéses",
        "Magas és ajakréses (illabiális)",
        "Mély és ajakréses",
        "Magas és ajakkerekítéses"
      ],
      correctIndex: 1,
      explanation: "Az e, é, i, í hangok elöl képzett (magas) hangok, és ejtésükkor az ajkak réshelyzetben vannak (ajakrésesek)."
    },
    {
      question: "Melyik mássalhangzótörvény érvényesül a 'vasgolyó' [vazgolyó] kifejezés kiejtésekor?",
      options: [
        "Írásban jelöletlen teljes hasonulás",
        "Zöngésség szerinti részleges hasonulás (zöngésedés)",
        "Összeolvadás",
        "Mássalhangzó-kiesés"
      ],
      correctIndex: 1,
      explanation: "A zöngétlen 's' hangot a mögötte álló zöngés 'g' zöngéssé teszi, így 'z'-nek ejtjük [vazgolyó]. Ez részleges hasonulás, mert csak a zöngésség változott meg."
    },
    {
      question: "Melyik szóban érvényesül a mássalhangzó-rövidülés törvénye?",
      options: ["otthon", "egészség", "látja", "színpad"],
      correctIndex: 0,
      explanation: "Az 'otthon' szóban a hosszú 'tt' után egy mássalhangzó ('h') áll, így a kiejtésben a hosszú hang megrövidül: [othon]."
    }
  ]
});
