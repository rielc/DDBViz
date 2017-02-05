//keywords, aus denen das html gerüst gebaut wird.
var keywords = [
    {"id":4,"value":1148022,"name":"Fotos"},
    {"id":5,"value":480195,"name":"Kapitel"},
    {"id":19,"value":452050,"name":"Spruchkammerakten"},
    {"id":1,"value":374466,"name":"Fotografie"},
    {"id":2,"value":347882,"name":"Foto"},
    {"id":11,"value":345758,"name":"Kontaktbogen"},
    {"id":21,"value":266164,"name":"Monografie"},
    {"id":9,"value":252913,"name":"Personalakten"},
    {"id":20,"value":232532,"name":"Abschnitt"},
    {"id":10,"value":220378,"name":"Architektur"},
    {"id":66,"value":154549,"name":"Ortskatalog zur Kunst und Architektur"},
    {"id":74,"value":104964,"name":"Urkunden"},
    {"id":30,"value":104707,"name":"Amtsbücher"},
    {"id":14,"value":100141,"name":"Monographie"},
    {"id":24,"value":85612,"name":"Bild"},
    {"id":63,"value":84038,"name":"Illustration"},
    {"id":64,"value":81896,"name":"Aufsatz"},
    {"id":72,"value":80823,"name":"Politik"},
    {"id":25,"value":71290,"name":"Prospekt"},
    {"id":52,"value":69751,"name":"Technik-Katalog"},
    {"id":15,"value":63932,"name":"Skulptur"},
    {"id":22,"value":62335,"name":"Medizin, Gesundheit"},
    {"id":166,"value":61669,"name":"Standfoto"},
    {"id":17,"value":60077,"name":"Kunst und Kultur"},
    {"id":35,"value":57063,"name":"Krankenakten"},
    {"id":155,"value":47925,"name":"Gesellschaft"},
    {"id":51,"value":46646,"name":"Druck"},
    {"id":82,"value":46477,"name":"Karten und Pläne"},
    {"id":36,"value":45227,"name":"Wohnhaus"},
    {"id":6,"value":43285,"name":"Kunstgewerbe"},
    {"id":27,"value":40082,"name":"Zeichenkunst"},
    {"id":50,"value":39687,"name":"Druckgrafik"},
    {"id":23,"value":34685,"name":"Tafelmalerei"},
    {"id":132,"value":33252,"name":"Malerei"},
    {"id":31,"value":31183,"name":"AV-Materialien"},
    {"id":28,"value":28398,"name":"Zeichnung"},
    {"id":60,"value":28292,"name":"Bildnis"},
    {"id":3,"value":28291,"name":"Szenenbilder"},
    {"id":179,"value":28090,"name":"Band"},
    {"id":192,"value":26174,"name":"Bildung und Wissenschaft"},
    {"id":102,"value":25309,"name":"Bildnis-Katalog"},
    {"id":62,"value":23656,"name":"Luftbildschrägaufnahme"},
    {"id":94,"value":23535,"name":"Deckenmalerei"},
    {"id":95,"value":21488,"name":"Freskomalerei"},
    {"id":172,"value":21281,"name":"Grabskulptur"},
    {"id":178,"value":20580,"name":"Online-Publikation"},
    {"id":111,"value":20064,"name":"Wandmalerei"},
    {"id":38,"value":19815,"name":"Industrie"},
    {"id":133,"value":18646,"name":"Bildnisse"},
    {"id":16,"value":18589,"name":"Statue"},
    {"id":157,"value":18092,"name":"Nachlässe"},
    {"id":153,"value":17934,"name":"Bauskulptur"},
    {"id":85,"value":17653,"name":"Buchmalerei"},
    {"id":93,"value":17224,"name":"Deckenbild"},
    {"id":115,"value":16874,"name":"Wirtschaft"},
    {"id":186,"value":16355,"name":"Zeitschrift"},
    {"id":12,"value":16336,"name":"Recht"},
    {"id":391,"value":16314,"name":"Kartenforum"},
    {"id":58,"value":16287,"name":"Nachrichtenmedien, Journalismus, Verlagswesen"},
    {"id":146,"value":16254,"name":"Handel und Wirtschaft"},
    {"id":262,"value":16222,"name":"Erziehung, Schul- und Bildungswesen"},
    {"id":73,"value":15957,"name":"Relief"},
    {"id":201,"value":15297,"name":"Zeitschriften, fortlaufende Sammelwerke"},
    {"id":235,"value":15258,"name":"Biowissenschaften, Biologie"},
    {"id":239,"value":14875,"name":"Grabstein"},
    {"id":46,"value":14808,"name":"Portrait"},
    {"id":145,"value":14790,"name":"Wandbild"},
    {"id":184,"value":14306,"name":"Geschichte"},
    {"id":320,"value":13223,"name":"Physik"},
    {"id":328,"value":13098,"name":"Bauwesen"},
    {"id":319,"value":12477,"name":"Musik"},
    {"id":450,"value":12436,"name":"Stadt"},
    {"id":77,"value":12039,"name":"Sport"},
    {"id":126,"value":12035,"name":"Kirche"},
    {"id":635,"value":11877,"name":"Mühle"},
    {"id":568,"value":11787,"name":"Druckgraphik"},
    {"id":215,"value":11368,"name":"Chemie"},
    {"id":67,"value":11130,"name":"Schellackplatte"},
    {"id":91,"value":11023,"name":"Möbel"},
    {"id":253,"value":10738,"name":"Ingenieurwissenschaften und Maschinenbau"},
    {"id":263,"value":10146,"name":"Landwirtschaft, Veterinärmedizin"},
    {"id":236,"value":10085,"name":"Print"},
    {"id":250,"value":10030,"name":"Künstlerzeitschrift"},
    {"id":251,"value":9681,"name":"Zeitschriften-Beitrag"},
    {"id":203,"value":9258,"name":"Text"},
    {"id":738,"value":8834,"name":"Sakralraumskulptur"},
    {"id":858,"value":8719,"name":"Handschrift"},
    {"id":45,"value":8714,"name":"Landwirtschaft"},
    {"id":112,"value":8455,"name":"Buchkunst"},
    {"id":380,"value":8222,"name":"Natur"},
    {"id":522,"value":8178,"name":"Informatik"},
    {"id":1030,"value":8085,"name":"Karte"},
    {"id":114,"value":7992,"name":"Straße"},
    {"id":271,"value":7987,"name":"Geografie"},
    {"id":90,"value":7941,"name":"Möbeldesign"},
    {"id":61,"value":7840,"name":"Enthaltenes Werk"},
    {"id":174,"value":7682,"name":"Wohnen"},
    {"id":327,"value":7252,"name":"Wohn- und Geschäftshaus"},
    {"id":530,"value":7064,"name":"Geschichte Deutschlands"},
    {"id":68,"value":7053,"name":"Oper"},
    {"id":386,"value":7032,"name":"Verkehrswesen"},
    {"id":185,"value":7013,"name":"Quelle"},
    {"id":110,"value":6880,"name":"Bildfeld"},
    {"id":353,"value":6872,"name":"Kapitell"},
    {"id":204,"value":6545,"name":"Sonstiges"},
    {"id":323,"value":6517,"name":"Strafprozessakten"},
    {"id":188,"value":6404,"name":"Theologie, Christentum"},
    {"id":315,"value":6225,"name":"Tiere"},
    {"id":401,"value":6036,"name":"liturgischer Text"},
    {"id":390,"value":6035,"name":"Topografie"},
    {"id":529,"value":6025,"name":"Geografie, Reisen (Deutschland)"},
    {"id":363,"value":5978,"name":"Mathematik"},
    {"id":415,"value":5709,"name":"Zeichnung / Grafik"},
    {"id":867,"value":5670,"name":"Musik-Katalog"},
    {"id":187,"value":5561,"name":"Bauernhof"},
    {"id":168,"value":5545,"name":"Geowissenschaften"},
    {"id":413,"value":5513,"name":"Grabmal"},
    {"id":1277,"value":5432,"name":"Buch"},
    {"id":322,"value":5412,"name":"Ort"},
    {"id":1482,"value":5395,"name":"Deutschland"},
    {"id":761,"value":5142,"name":"Schloss"},
    {"id":523,"value":5071,"name":"Messen"},
    {"id":105,"value":5020,"name":"mehrbändiges Werk"},
    {"id":152,"value":5014,"name":"Technische Chemie"},
    {"id":424,"value":4923,"name":"Künstler"},
    {"id":283,"value":4900,"name":"Gesundheitswesen"},
    {"id":211,"value":4875,"name":"Grundriss"},
    {"id":18,"value":4871,"name":"Astronomie, Kartographie"},
    {"id":170,"value":4767,"name":"Naturwissenschaften"},
    {"id":169,"value":4736,"name":"Allgemeines, Wissenschaft"},
    {"id":1175,"value":4574,"name":"Buchseite"},
    {"id":605,"value":4507,"name":"Militär"},
    {"id":1528,"value":4488,"name":"Mathematica"},
    {"id":949,"value":4468,"name":"Kirche (evangelisch)"},
    {"id":1029,"value":4422,"name":"Verordnung"},
    {"id":116,"value":4417,"name":"Altarskulptur"},
    {"id":510,"value":4402,"name":"Leichenpredigt"},
    {"id":1044,"value":4346,"name":"Literatur, Rhetorik, Literaturwissenschaft"},
    {"id":974,"value":4314,"name":"Geschichte Europas"},
    {"id":962,"value":4213,"name":"Geografie, Reisen"},
    {"id":1368,"value":4167,"name":"Photographie"},
    {"id":422,"value":4076,"name":"Auktionskatalog"},
    {"id":1673,"value":4031,"name":"Personenkraftwagen"},
    {"id":1542,"value":3839,"name":"Soziale Probleme, Sozialdienste, Versicherungen"},
    {"id":84,"value":3837,"name":"Bildseite"},
    {"id":377,"value":3785,"name":"Gemälde"},
    {"id":622,"value":3781,"name":"Statuette"},
    {"id":412,"value":3729,"name":"Denkmalskulptur"},
    {"id":196,"value":3698,"name":"Handel, Kommunikation, Verkehr"},
    {"id":33,"value":3678,"name":"Lyrik"},
    {"id":39,"value":3674,"name":"Sozialwissenschaften, Soziologie, Anthropologie"},
    {"id":851,"value":3649,"name":"Lied"},
    {"id":267,"value":3648,"name":"Keramik"},
    {"id":40,"value":3632,"name":"Handwerk"},
    {"id":480,"value":3606,"name":"Unterrichtsmittel"},
    {"id":98,"value":3552,"name":"book"},
    {"id":427,"value":3543,"name":"Management"},
    {"id":314,"value":3427,"name":"Pflanzen (Botanik)"},
    {"id":34,"value":3415,"name":"Gelegenheitsschrift:Tod"},
    {"id":1283,"value":3365,"name":"Varia"},
    {"id":1027,"value":3344,"name":"Denkmal"},
    {"id":1167,"value":3321,"name":"Sonstiges&"},
    {"id":1540,"value":3303,"name":"Altar"},
    {"id":606,"value":3269,"name":"Plan"},
    {"id":288,"value":3236,"name":"Entwurf"},
    {"id":167,"value":3196,"name":"Portal"},
    {"id":238,"value":3190,"name":"Porträt"},
    {"id":417,"value":3188,"name":"Kunsthandwerk"},
    {"id":980,"value":3142,"name":"Gesundheit und Soziales"},
    {"id":437,"value":3106,"name":"Rathaus"},
    {"id":224,"value":3091,"name":"Miniatur"},
    {"id":587,"value":3087,"name":"Kirche (katholisch)"},
    {"id":130,"value":3066,"name":"Graphik"},
    {"id":312,"value":3066,"name":"Vorderseite"},
    {"id":439,"value":3057,"name":"Französische Literatur"},
    {"id":296,"value":3038,"name":"Brunnen"},
    {"id":575,"value":3033,"name":"Ausstellung"},
    {"id":441,"value":3028,"name":"Spanische und portugiesische Literatur"},
    {"id":440,"value":3013,"name":"Italienische, rumänische, rätoromanische Literatur"},
    {"id":1046,"value":2992,"name":"Literatur"},
    {"id":474,"value":2971,"name":"Landkarte"},
    {"id":1174,"value":2962,"name":"Künste, Bildende Kunst allgemein"},
    {"id":2093,"value":2943,"name":"Burg"},
    {"id":956,"value":2905,"name":"Historische Drucke"},
    {"id":372,"value":2901,"name":"Glasmalerei"},
    {"id":859,"value":2888,"name":"Mehrbändiges Werk"},
    {"id":1377,"value":2870,"name":"Ausstellungen"},
    {"id":2794,"value":2837,"name":"Haar- und Bartpflege"},
    {"id":287,"value":2832,"name":"Landschaft"},
    {"id":511,"value":2808,"name":"Psychologie"},
    {"id":499,"value":2806,"name":"Industrielle und handwerkliche Fertigung"},
    {"id":414,"value":2805,"name":"Realismus"},
    {"id":191,"value":2803,"name":"Urkunde"},
    {"id":59,"value":2798,"name":"Freizeitgestaltung, Darstellende Kunst"},
    {"id":1004,"value":2767,"name":"Messgerät"},
    {"id":691,"value":2759,"name":"VD18 digital"},
    {"id":1039,"value":2730,"name":"Kultur"},
    {"id":264,"value":2727,"name":"Hauswirtschaft und Familienleben"},
    {"id":455,"value":2723,"name":"Einblattdruck"},
    {"id":905,"value":2677,"name":"Rückseite"},
    {"id":1565,"value":2676,"name":"Villa"},
    {"id":479,"value":2637,"name":"Schule"},
    {"id":1834,"value":2634,"name":"Bayern"},
    {"id":586,"value":2629,"name":"Biografie, Genealogie, Heraldik"},
    {"id":447,"value":2623,"name":"Fortlaufendes Sammelwerk"},
    {"id":268,"value":2603,"name":"Gruppe (2-figurig)"},
    {"id":378,"value":2512,"name":"Reliefplastik"},
    {"id":151,"value":2494,"name":"Zeichnung / Skizze"},
    {"id":198,"value":2421,"name":"Kommunales"},
    {"id":583,"value":2414,"name":"Weltfestspiele der Jugend und Studenten"},
    {"id":755,"value":2397,"name":"Aufriss"},
    {"id":1909,"value":2389,"name":"Landschaften"},
    {"id":230,"value":2385,"name":"Veranstaltungen"},
    {"id":806,"value":2363,"name":"Zoologica"},
    {"id":3133,"value":2361,"name":"Ansicht"},
    {"id":476,"value":2360,"name":"Arbeiterfotografie"},
    {"id":421,"value":2348,"name":"Kunst"},
    {"id":830,"value":2290,"name":"Deutsche Literatur"},
    {"id":831,"value":2251,"name":"Theater"},
    {"id":571,"value":2236,"name":"Büste"},
    {"id":1915,"value":2231,"name":"Skizzenbuchblatt"},
    {"id":362,"value":2222,"name":"Zyklus"},
    {"id":992,"value":2218,"name":"Textilkunst"},
    {"id":3462,"value":2201,"name":"Sonstige"},
    {"id":371,"value":2191,"name":"Fliegende Blätter"},
    {"id":329,"value":2178,"name":"Platz"},
    {"id":1566,"value":2157,"name":"Miniatur (in der Kolumne)"},
    {"id":1012,"value":2142,"name":"Deckendekoration"},
    {"id":311,"value":2136,"name":"Freizeit"},
    {"id":758,"value":2117,"name":"Portalskulptur"},
    {"id":700,"value":2107,"name":"Glasbild"},
    {"id":1202,"value":2104,"name":"Theologie"},
    {"id":194,"value":2085,"name":"Schriftkunst"},
    {"id":432,"value":2083,"name":"biblischer Text"},
    {"id":780,"value":2083,"name":"Philosophie"},
    {"id":361,"value":2067,"name":"Rundplastik"},
    {"id":1140,"value":2067,"name":"Bergbau"},
    {"id":118,"value":2032,"name":"Brennkraftmotor"},
    {"id":1173,"value":2027,"name":"Bauernhaus"},
    {"id":585,"value":2019,"name":"Plastik, Numismatik, Keramik, Metallkunst"},
    {"id":925,"value":2016,"name":"Galerie Neue Meister"},
    {"id":1212,"value":2015,"name":"Bibliotheks- und Informationswissenschaft"},
    {"id":1028,"value":1997,"name":"Zivilprozessakten"},
    {"id":2022,"value":1980,"name":"Medizin"},
    {"id":80,"value":1962,"name":"Alte Geschichte, Archäologie"},
    {"id":156,"value":1958,"name":"Dissertation:jur."},
    {"id":1814,"value":1955,"name":"Aufsatzsammlung"},
    {"id":175,"value":1954,"name":"Technik"},
    {"id":932,"value":1953,"name":"politische Veranstaltungen"},
    {"id":452,"value":1923,"name":"Goldschmiedekunst"},
    {"id":828,"value":1912,"name":"sonstiger Text"},
    {"id":107,"value":1900,"name":"DigiWunschbuch"},
    {"id":2063,"value":1884,"name":"Frankreich"},
    {"id":1672,"value":1854,"name":"Sitzfigur"},
    {"id":173,"value":1852,"name":"Epitaph"},
    {"id":967,"value":1834,"name":"Alltag"},
    {"id":96,"value":1830,"name":"Gasthaus"},
    {"id":1736,"value":1813,"name":"Bildwerke / Bildende Kunst"},
    {"id":108,"value":1779,"name":"Brücke"},
    {"id":1226,"value":1770,"name":"Deutsch"},
    {"id":649,"value":1752,"name":"Kapelle"},
    {"id":3537,"value":1747,"name":"Flurförderer mit Hubeinrichtung"},
    {"id":55,"value":1742,"name":"Schauspiel"},
    {"id":757,"value":1736,"name":"Kopf"},
    {"id":870,"value":1726,"name":"Wanddekoration"},
    {"id":418,"value":1721,"name":"Arbeiten auf Papier"},
    {"id":854,"value":1708,"name":"Brief"},
    {"id":883,"value":1702,"name":"Buchillustration"},
    {"id":2257,"value":1673,"name":"Bucherhaltung"},
    {"id":985,"value":1672,"name":"Schloß"},
    {"id":599,"value":1659,"name":"Pressefotografie"},
    {"id":676,"value":1621,"name":"Lastkraftwagen"},
    {"id":8,"value":1619,"name":"Stenografie"},
    {"id":1831,"value":1591,"name":"Gruppe"},
    {"id":1460,"value":1581,"name":"Sprache,-Linguistik"},
    {"id":199,"value":1570,"name":"Gemäldegalerie Alte Meister"},
    {"id":1470,"value":1566,"name":"Literatur in anderen Sprachen"},
    {"id":2640,"value":1557,"name":"Bericht"},
    {"id":1456,"value":1533,"name":"Sammlung"},
    {"id":561,"value":1530,"name":"Kruzifix"},
    {"id":131,"value":1523,"name":"920 - Biografie, Genealogie"},
    {"id":1219,"value":1520,"name":"Stadtplan"},
    {"id":2143,"value":1519,"name":"Schlussstein"},
    {"id":221,"value":1517,"name":"Statistik"},
    {"id":580,"value":1508,"name":"Vase"},
    {"id":2048,"value":1508,"name":"Bauwerk"},
    {"id":1393,"value":1502,"name":"Schmiedekunst"},
    {"id":3806,"value":1497,"name":"Turm"},
    {"id":366,"value":1487,"name":"Kaiserreich Geschichtsschulbuecher"},
    {"id":128,"value":1469,"name":"Hamburgensien: Portraits"},
    {"id":129,"value":1469,"name":"Portraitsammlung"},
    {"id":379,"value":1460,"name":"Kanzel"},
    {"id":930,"value":1447,"name":"Elektromotor"},
    {"id":718,"value":1446,"name":"Retabel"},
    {"id":1359,"value":1436,"name":"elektrisch"},
    {"id":106,"value":1428,"name":"Itineraria"},
    {"id":4359,"value":1427,"name":"Aufbau"},
    {"id":148,"value":1418,"name":"Bleistift"},
    {"id":2349,"value":1412,"name":"Vedute"},
    {"id":2354,"value":1407,"name":"Kulturveranstaltungen"},
    {"id":1018,"value":1403,"name":"EDV, Anwendung"},
    {"id":1740,"value":1403,"name":"Libretto"},
    {"id":871,"value":1397,"name":"Gewölbebild"},
    {"id":1601,"value":1379,"name":"Jugend"},
    {"id":778,"value":1377,"name":"Altarbild"},
    {"id":3183,"value":1362,"name":"Plastik"},
    {"id":1961,"value":1352,"name":"Skizze"},
    {"id":1901,"value":1351,"name":"Klosterkirche"},
    {"id":295,"value":1343,"name":"Brunnenskulptur"},
    {"id":37,"value":1340,"name":"Tierwelt"},
    {"id":524,"value":1338,"name":"Geometrie"},
    {"id":1615,"value":1338,"name":"Trailer"},
    {"id":2320,"value":1338,"name":"City"},
    {"id":1539,"value":1332,"name":"Altkarte"},
    {"id":1730,"value":1332,"name":"Archivalien"},
    {"id":1426,"value":1311,"name":"Studie"},
    {"id":1035,"value":1309,"name":"Freiskulptur"},
    {"id":1911,"value":1307,"name":"Schrank"},
    {"id":566,"value":1297,"name":"Reisezugwagen"},
    {"id":92,"value":1294,"name":"Wohnzimmermöbel"},
    {"id":26,"value":1292,"name":"Lagereiwesen"},
    {"id":48,"value":1286,"name":"Figur"},
    {"id":1261,"value":1283,"name":"Postkarte"},
    {"id":402,"value":1268,"name":"historisierte Initiale"},
    {"id":2145,"value":1262,"name":"Veröffentlichung"},
    {"id":491,"value":1259,"name":"Produktionsmaterial"},
    {"id":2123,"value":1259,"name":"Dorfkirche"},
    {"id":1414,"value":1252,"name":"Vorlesungsverzeichnis"},
    {"id":657,"value":1249,"name":"Tierfigur"},
    {"id":513,"value":1248,"name":"Kloster"},
    {"id":651,"value":1237,"name":"Porträts"},
    {"id":1296,"value":1236,"name":"Initiale"},
    {"id":123,"value":1227,"name":"Gebäude"},
    {"id":181,"value":1214,"name":"Konsole"},
    {"id":977,"value":1210,"name":"Hausbau, Bauhandwerk"},
    {"id":3966,"value":1206,"name":"Gefäß"},
    {"id":857,"value":1198,"name":"830 - Deutsche und verwandte Literaturen"},
    {"id":307,"value":1195,"name":"Deutsches Filminstitut - DIF e.V., Standfoto"},
    {"id":2651,"value":1194,"name":"Kongress"},
    {"id":3168,"value":1193,"name":"Frisör"},
    {"id":814,"value":1189,"name":"Mosaikkunst"},
    {"id":294,"value":1183,"name":"Innenraum"},
    {"id":1874,"value":1175,"name":"Grafik"},
    {"id":598,"value":1172,"name":"Verwaltungsgebäude"},
    {"id":779,"value":1164,"name":"Bibliographie"},
    {"id":1249,"value":1163,"name":"Musizierende"},
    {"id":632,"value":1160,"name":"Güterwagen"},
    {"id":855,"value":1151,"name":"Aus Nachlass Richard Dehmel"},
    {"id":856,"value":1151,"name":"Briefkopierbücher Richard Dehmel"},
    {"id":4972,"value":1151,"name":"Astronomie"},
    {"id":246,"value":1141,"name":"Bagger"},
    {"id":2381,"value":1140,"name":"Europa"},
    {"id":627,"value":1139,"name":"Staatliche Hochschule für Baukunst und Bildende Künste Weimar 1946-1951"},
    {"id":3122,"value":1135,"name":"Öffentliche Verwaltung"},
    {"id":1370,"value":1132,"name":"Laden"},
    {"id":2698,"value":1124,"name":"Theater / Oper"},
    {"id":3224,"value":1123,"name":"liturgischer Text &amp; Gebetbuch"},
    {"id":1491,"value":1114,"name":"Museum"},
    {"id":1620,"value":1114,"name":"Öffentliche Darbietungen, Film, Rundfunk"},
    {"id":482,"value":1112,"name":"Hochaltar"},
    {"id":910,"value":1109,"name":"Fabrik"},
    {"id":805,"value":1108,"name":"fortlaufendes Sammelwerk"},
    {"id":896,"value":1107,"name":"Schale"},
    {"id":850,"value":1095,"name":"Stadttor"},
    {"id":1360,"value":1088,"name":"Wappen"},
    {"id":1529,"value":1086,"name":"Baumaschine"},
    {"id":1353,"value":1079,"name":"Dissertation:phil."},
    {"id":1022,"value":1074,"name":"Konzert"},
    {"id":444,"value":1066,"name":"Rezension"},
    {"id":2200,"value":1061,"name":"Hotel"},
    {"id":2867,"value":1058,"name":"Schriftsteller"},
    {"id":1771,"value":1056,"name":"Staatsbibliotheken"},
    {"id":1777,"value":1056,"name":"Zeitung"},
    {"id":569,"value":1050,"name":"Dorf"},
    {"id":1545,"value":1044,"name":"Dissertation:med."},
    {"id":1412,"value":1042,"name":"Modellbau"},
    {"id":373,"value":1038,"name":"Fenster"},
    {"id":3160,"value":1038,"name":"Historische Drucke: 1601 bis 1700"},
    {"id":1036,"value":1035,"name":"Gruppe (3-figurig)"},
    {"id":1143,"value":1034,"name":"Demonstrationen"},
    {"id":1290,"value":1030,"name":"Sozialwesen"},
    {"id":265,"value":1023,"name":"Gemeinderechnungen"},
    {"id":2355,"value":1021,"name":"Paläontologie"},
    {"id":719,"value":1016,"name":"Reportagefotografie"},
    {"id":926,"value":1011,"name":"Grabplatte"},
    {"id":1677,"value":1010,"name":"Hamburgensien: Darstellungen und Nachschlagewerke"},
    {"id":5104,"value":1009,"name":"Gaststätte"},
    {"id":1023,"value":994,"name":"Tondokument ohne Titel"},
    {"id":472,"value":985,"name":"Biographie"},
    {"id":446,"value":983,"name":"Dissertation:theol."},
    {"id":703,"value":983,"name":"Altstadt"},
    {"id":486,"value":969,"name":"940 - Geschichte Europas"},
    {"id":1635,"value":964,"name":"Kanne"},
    {"id":1875,"value":964,"name":"Scheune"},
    {"id":993,"value":960,"name":"Kriegswirtschaftsverordnung"},
    {"id":475,"value":958,"name":"Amtsdruckschrift / Gesetzessammlung / Verordnung / Vertrag / Gesetz / Edikt"},
    {"id":2906,"value":955,"name":"Hamburgensien: Zeitschriften"},
    {"id":2907,"value":941,"name":"050 - Zeitschriften, fortlaufende Sammelwerke"},
    {"id":385,"value":940,"name":"Arbeit"},
    {"id":733,"value":940,"name":"Kirchen"},
    {"id":5776,"value":939,"name":"Straßenbaumaschine"},
    {"id":628,"value":936,"name":"Kinder"},
    {"id":1479,"value":936,"name":"vorbereitende Zeichnung"},
    {"id":968,"value":931,"name":"Taufstein"},
    {"id":936,"value":929,"name":"Innenstadt"},
    {"id":1014,"value":925,"name":"Sarkophag"},
    {"id":357,"value":922,"name":"Dresden"},
    {"id":2463,"value":921,"name":"Marktplatz"},
    {"id":1053,"value":917,"name":"Aktfotografie"},
    {"id":467,"value":914,"name":"Akte"},
    {"id":624,"value":911,"name":"Großherzoglich Sächsische Kunstschule zu Weimar 1860-1910"},
    {"id":1621,"value":902,"name":"Erster Mai"},
    {"id":3620,"value":902,"name":"elektronisch"},
    {"id":3911,"value":900,"name":"Österreich"},
    {"id":4104,"value":899,"name":"Bibliografien"},
    {"id":3339,"value":898,"name":"Konsolfigur"},
    {"id":931,"value":884,"name":"DDR"},
    {"id":231,"value":881,"name":"Arbeitende"},
    {"id":2324,"value":880,"name":"Waffe"},
    {"id":886,"value":875,"name":"Bremse"},
    {"id":2716,"value":871,"name":"Traktat"},
    {"id":687,"value":868,"name":"Religion, Religionsphilosophie"},
    {"id":500,"value":864,"name":"Grafische Verfahren, Drucke"},
    {"id":435,"value":863,"name":"Modell"},
    {"id":1616,"value":863,"name":"Deutsches Filminstitut - DIF e.V."},
    {"id":1201,"value":860,"name":"Museum für Sächsische Volkskunst mit Puppentheatersammlung"},
    {"id":1192,"value":856,"name":"Palais"},
    {"id":5933,"value":855,"name":"Leuchter"},
    {"id":44,"value":854,"name":"Möbelmessen"},
    {"id":4303,"value":853,"name":"Tor"},
    {"id":1934,"value":851,"name":"Flugschrift"},
    {"id":1108,"value":849,"name":"Schulbuch"},
    {"id":2258,"value":847,"name":"GöttingerUniversitätsgeschichte-GedruckteWerke"},
    {"id":7,"value":846,"name":"Medaille"},
    {"id":712,"value":840,"name":"Wohnen; Wohnhaus"},
    {"id":1567,"value":838,"name":"Kartenwerk"},
    {"id":121,"value":836,"name":"Gemeinderechnungen, Beilagen"},
    {"id":1454,"value":835,"name":"Landschaftsgestaltung, Raumplanung"},
    {"id":1116,"value":832,"name":"Gelegenheitsschrift:Einladung"},
    {"id":521,"value":831,"name":"Geographieschulbuecher Kaiserreich"},
    {"id":182,"value":826,"name":"Kriegszerstörte Stadt"},
    {"id":1271,"value":826,"name":"Kleinskulptur"},
    {"id":927,"value":817,"name":"Tür"},
    {"id":1674,"value":817,"name":"Krankenhaus"},
    {"id":454,"value":816,"name":"Druckerzeugnis"},
    {"id":872,"value":815,"name":"Krug"},
    {"id":1450,"value":811,"name":"Kriege"},
    {"id":1493,"value":808,"name":"Querschnitt"},
    {"id":861,"value":804,"name":"Gartenskulptur"},
    {"id":2167,"value":800,"name":"Kosmetika"},
    {"id":4629,"value":799,"name":"Palast"},
    {"id":310,"value":797,"name":"Natürliche Ressourcen, Energie und Umwelt"},
    {"id":1800,"value":793,"name":"Inschrift"},
    {"id":772,"value":783,"name":"Profanarchitektur"},
    {"id":686,"value":779,"name":"Reliquiar"},
    {"id":2090,"value":778,"name":"Bräuche, Etikette, Folklore"},
    {"id":3121,"value":778,"name":"stuckiert"},
    {"id":1397,"value":775,"name":"Glasgefäß"},
    {"id":913,"value":774,"name":"Decke"},
    {"id":678,"value":771,"name":"Schlösser"},
    {"id":765,"value":771,"name":"Handel"},
    {"id":487,"value":769,"name":"Sekkomalerei"},
    {"id":4395,"value":767,"name":"Teller"},
    {"id":562,"value":766,"name":"Geldwesen"},
    {"id":620,"value":766,"name":"Theater, Tanz"},
    {"id":2074,"value":764,"name":"Schienenfahrzeug"},
    {"id":99,"value":763,"name":"sh2008113365"},
    {"id":5300,"value":763,"name":"Friedhof"},
    {"id":1987,"value":760,"name":"Sakralbau"},
    {"id":963,"value":759,"name":"Geographie"},
    {"id":1824,"value":758,"name":"Militärarchitektur"},
    {"id":3125,"value":752,"name":"Gabelstapler"},
    {"id":1903,"value":750,"name":"Nordamericana"},
    {"id":2925,"value":750,"name":"Ortsansicht"},
    {"id":1037,"value":748,"name":"Rundplastik (Rückseite ausgearbeitet)"},
    {"id":313,"value":742,"name":"Kleintransporter"},
    {"id":501,"value":741,"name":"Fotografie, Computerkunst"},
    {"id":331,"value":735,"name":"Münze"},
    {"id":3017,"value":735,"name":"Park"},
    {"id":1055,"value":734,"name":"Festveranstaltungen"},
    {"id":714,"value":732,"name":"sh85148236"},
    {"id":6962,"value":732,"name":"Bibliothek"},
    {"id":704,"value":729,"name":"Kreuzgang"},
    {"id":1123,"value":729,"name":"Portfolio-Pöppelmann-Zwinger"},
    {"id":5100,"value":728,"name":"Organisationen, Museumswissenschaft"},
    {"id":6464,"value":727,"name":"Elektrotechnik, Elektronik"},
    {"id":4145,"value":723,"name":"Freie Deutsche Jugend"},
    {"id":827,"value":722,"name":"Miniatur (halbseitig)"},
    {"id":1124,"value":718,"name":"Festarchitektur"},
    {"id":135,"value":715,"name":"Oberbaumaschine"},
    {"id":2233,"value":715,"name":"Schiffe"},
    {"id":3174,"value":714,"name":"Territorium"},
    {"id":86,"value":712,"name":"theologischer Text"},
    {"id":465,"value":711,"name":"Bibliotheken"},
    {"id":1206,"value":711,"name":"Stuhl"},
    {"id":1294,"value":711,"name":"Bleistift, Feder"},
    {"id":4273,"value":711,"name":"Saal"},
    {"id":2013,"value":710,"name":"Schüler"},
    {"id":1581,"value":707,"name":"Berufsausbildung"},
    {"id":1129,"value":705,"name":"Landesaufnahme"}];


var overlay = {};
var selectedKeywordID = 0;
//kommas zu punkten
function formatNumber (number) {
    var reg = new RegExp(",", 'g');
    return d3.format(",")(number).replace(reg, ".");
}

//hilfe button overlay
function generateOverlay () {
    
    overlay
    .style("display", "inline")
    .style("width", $(window).width)
    .selectAll("*").remove();    
//klicke automatisch die ID-4 an (Fotos)
    if (selectedKeywordID != 4){ 
        var e = document.createEvent('UIEvents');
        e.initUIEvent('click', true, true, window, 1);
        d3.select("#t4").node().dispatchEvent(e);
   }
    var infos = 
        [
            { x: 105, y: 190, text: "Ausgwähltes Stichwort, erneut klicken um die Auswahl zu deselektieren", r: 30},
            { x: 920, y: 200, text: "Viele gemeinsame Einträge sind rot", r: 20},
            { x: 240, y: 445, text: "Wenige gemeinsame Einträge sind grau", r: 15},
            { x: 670, y: 310, text: "Keine gemeinsamen Einträge sind schwarz", r: 10},
            { x: 270, y: 35, text: "Verlinkung zu www.deutsche-digitale-bibliothek.de", r: 20}
        ];

//wieder magie mit mathe
    overlay
    .selectAll("g")
    .data(infos)
      .enter()
        .append("g")
        .attr("class", "infoField")
        .attr("transform", function(d){ return "translate("+d.x+","+d.y+"), rotate(10)"; })
        .transition()
        .delay(function(d,i){ return i*50; })
        .each("end",function(d){
          var infoTip = d3.select(this);
          var p = d.x > $("body").width()/2;

          infoTip.append("circle").attr("r", function(d){ return d.r; })
          infoTip.append("line").attr("x1", 0).attr("y1", 0).attr("x2", p ? -5 : 5).attr("y2", 5)

          var background = infoTip.append("rect")
          var text = infoTip.append("text").text(function(d){ return d.text; })
          var bb = text.node().getBBox();

          text.attr("transform", "translate("+(p ? (-bb.width-8) : (4+4))+","+15+")");

          background
            .attr("width", bb.width+(4*2))
            .attr("height", bb.height).attr("transform", "translate("+(p ? (-bb.width-12) : 4)+","+(15-(bb.height)+4)+")");
          infoTip.transition().attr("transform", function(d){ return "translate("+d.x+","+d.y+"), rotate(0)";});
    })
}


    var csvData = [];

    $(document).ready( function() {
        //feedback button        
        fm_options = {
            jQueryUI : false,
            position : "right-bottom",
            // name_placeholder:"Name please",                     
            trigger_label : "Feedback",
            title_label: "Ihre Beobachtungen, Ideen und Vorschläge",
            message_required : true,
            show_asterisk_for_required : false,
            feedback_url : "send_feedback",
            submit_label: "Absenden",
            email_required: false,
            callback: function(data){ 

            },
        };

    //overlay generieren, wenn man auf den help button klickt        
     overlay = d3.select("#overlay svg");     
        
      d3.select('.help')
        .selectAll("img")
        .data([{active:false}])
        .enter()
        .append("img")
        .attr("src", "icons/info.svg")
        .on("click", function(d){
            d.active = !d.active;
            d3.select(this).classed("active", d.active);
            if(d.active) generateOverlay();
            
        });
        //overlay ausblenden + ID 4 abwählen        
        $("#overlay svg").click(function(){
            
            var e = document.createEvent('UIEvents');
                e.initUIEvent('click', true, true, window, 1);
                d3.select("#t4").node().dispatchEvent(e);
                d3.select(".help img")
                    .classed("active", false)
                overlay.style("display", "none")
                
        });
        //vorher erstellter tip ausblenden
        $("#tip").css("opacity", 0);

        // lade die CSV-datei und pack sie in csvDATA
        d3.csv("./data/data-tags.csv")
            .row(function(d) { return d; })
            .get(function(error, rows) {
                csvData = rows;
            });
        
    
        
        
        // erzeuge die colorscale
        var colorScale = d3.scale.linear()
            .domain([0, 1])
            .range(["rgb(75, 75, 75)", "rgb(164, 5, 57)"]);

        // verknüpfe LI-elemente mit daten 
        var keywordsSelection = d3
            .select(".main")
            .append("div")
            .selectAll("div#keywords span");
        
    
        selectedKeywordID = 0;
        
        var max = 1148022;
        var min = 705;
        var valueScale = d3.scale.sqrt().domain([min, max]).range([115, 650]);
        
         // i dont' know what this is all about, but the tip is involved…      
        function customTip(d, position) {
            
            var hoveredKeywordData = csvData.filter( function (k) { return (
                k.current_facet_id == selectedKeywordID && 
                k.facet_id == d.id);})[0];
            
            if (hoveredKeywordData != undefined) {
                // wenn man über aktive hovert
                if (selectedKeywordID == d.id) {
                    $("#tip").css("opacity", 1.0);
                    
                    var tag = $("#t"+d.id);

                    $("#tip p").text(formatNumber(hoveredKeywordData.c)+" Einträge. Erneutes Klicken hebt die Auswahl auf."); 
                    $("#tip").css({
                                "top": 
                                    tag.offset().top
                                   -parseInt(tag.css('font-size'))/3
                                   -$("#tip").height(), 
                                "left":
                                    tag.offset().left
                                    - parseInt(tag.css('padding-right'))
                                    + tag.width()/2
                                    - $("#tip").width()/2 
                                      });
                }
                // wenn worte hovert die eingefärbt sind ungleich 0
                else if (selectedKeywordID != 0) {
                    
                    $("#tip").css("opacity", 1.0);
                    
                    var tag = $("#t"+d.id);

                    $("#tip p").text(formatNumber(hoveredKeywordData.c)+" gemeinsame Einträge"); 
                    $("#tip").css({
                                "top": 
                                    tag.offset().top
                                   -parseInt(tag.css('font-size'))/3
                                   -$("#tip").height(), 
                                "left":
                                    tag.offset().left
                                    - parseInt(tag.css('padding-right'))
                                    + tag.width()/2
                                    - $("#tip").width()/2 
                                      });


                } 
                // alles andere, also 0
                else {
                    var tag = $("#t"+d.id);
                    $("#tip p").text("0"); 
                    $("#tip").css({
                                "top": 
                                    tag.offset().top
                                   -parseInt(tag.css('font-size'))/3
                                   -$("#tip").height(), 
                                "left":
                                    tag.offset().left
                                    - parseInt(tag.css('padding-right'))
                                    + tag.width()/2
                                    - $("#tip").width()/2 
                                  });

                }
                    
            }
                         
        }
        

         // füge für jede zeile in den daten ein LI ein
        keywordsSelection
            .data(keywords)
            .enter()
            .append("span")
            .attr("id", function (d) { return "t"+d.id; })
            .style("font-size", function(d) { return valueScale(d.value) + "em"; })
            .text( function (d) { return d.name; })
            .style("background-color", "#222")
            .style("color", "#ccc")
            .style("opacity", 1)
            .on("mouseover", function(d)  { customTip(d, 200) })
            .on("click", function (d) {

                       $("#tip").css("opacity", 0);

                    // hole aus scvData alle Zeilen raus bei denen die current_facet_id mit der id des aktuellen wortes übereinstimmt
                    // und sortiere diese nach vorkommen
                        d3.select("#top")
                            .attr("class", "op2");

                
                    keywordCount = csvData
                        .filter( function (k) { return (k.current_facet_id == d.id);} )
                        .sort(function (a, b) { return (b.c-a.c);} );
                
                
                        colorMax = keywordCount[1].c; // zweitgrößte anzahl
                        colorMin = keywordCount[keywordCount.length-1].c;
                        
                        
                    // falls es für das aktuelle wort überhaupt einträge gibt…
                    if (keywordCount.length>0) {

                        
                        // voll toller reset
                       d3.selectAll(".main span")
                            .transition()
                            .duration(350)
                            .attr("class", "kickMe")
                            .style("color", "#181818")
                            .style("background-color", "#222");
                        
                        d3.selectAll("#value")
                            .remove();
                            
                        // geht durch alle keywords
                        for(var i=0; i<keywordCount.length; i++) {
                            
                            // aktulles keyword ist nicht das keyword des aktuellen LI-elements
                            if (keywordCount[i].facet_id != d.id){

                                // färbs es nach der scale ein
                                d3.select("#t" + keywordCount[i].facet_id)
                                    .transition()
                                    .duration(350)
                                    .attr("class", "kickMe")
                                    .style("background-color", "#222")
                                    .style("color", colorScale.domain([colorMin, colorMax])(keywordCount[i].c))
                                
                                
                            } else {
                                
                                // merke dir die ID des ausgewählten keywords 
                                selectedKeywordID = keywordCount[i].facet_id;
                                                                
                                // oh, es sit doch das akteuelle LI… FÄRBE ES WHITE!!!
                                d3.select("#t" + keywordCount[i].facet_id)
                                    .transition()
                                    .duration(350)
                                    .attr("class", "active")
                                    .style("color", "#000")
                                    .style("background-color", "#ccc")
                                    .style("background-clip", "content-box");
                                
                                d3.select(".subheader .container h1 span")
                                    .remove("class", "blankHL");
                                
                                d3.select(".subheader .container h1")
                                    .append("span")
                                    .attr("class", "activeSmall")
                                    .attr("id", "value")
                                    .text( function (d) { return "Stichwort: "+keywordCount[i].value+" hat "})
                                    .append("a")
                                    .attr("href", "https://www.deutsche-digitale-bibliothek.de/searchresults?query=*&rows=20&offset=0&sort=RELEVANCE&viewType=list&category=Kultur&clearFilter=true&facetValues%5B%5D=keywords_fct%3D"+keywordCount[i].value)
                                    .on("click", function (d, i) { } )
                                    .attr("target", "_blank")
                                    .attr("class", "activeLink")
                                    .text(function (d){return formatNumber(keywordCount[i].c)+" Einträge";});

                        }
                        }
                    } else {
                        // keine keywords in der aktuellen liste 
                        d3.selectAll(".main span")
                            .transition()
                            .duration(350)
                            .attr("class", "kickMe")
                            .style("color", "#181818")
                            .style("background-color", "#222");
                        

                    }
                
                   if($(this).hasClass('active'))  {
                        d3.selectAll(".main span")
                            .transition()
                            .duration(350)
                            .attr("class", "kickMe")
                            .style("color", "#ccc")
                            .style("background-color", "#222");
                       
                        selectedKeywordID = 0;

                        d3.selectAll("#value")
                            .remove();

                        d3.select(".subheader .container h1")
                            .append("span")
                            .attr("class", "blankHL")
                            .text("Stichworte");

                    }
                    else {
                    }

                }
            );
        // beim seiten-start wird animation abgespielt.
        d3.select(".main")
            .style("opacity", 0)
            .transition()
            .ease("exp-in-out")
            .duration(1500)
            .style("opacity", 1);

});

        