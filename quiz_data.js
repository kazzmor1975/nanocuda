const QUIZ_DATA = {
  "klasy i typy nanomateriałów": [
    {
      "id": 1,
      "question": "Który z poniższych jest przykładem nanomateriału 0D?",
      "options": [
        "Kropka kwantowa CdSe",
        "Nanorurka węglowa",
        "Warstwa grafenu"
      ],
      "correctIndex": 0
    },
    {
      "id": 2,
      "question": "Który z poniższych jest przykładem nanomateriału 1D?",
      "options": [
        "Nanowłókno polimerowe",
        "Nanocząstka złota",
        "Nanopłyta glinokrzemianu"
      ],
      "correctIndex": 0
    },
    {
      "id": 3,
      "question": "Który z poniższych jest przykładem nanomateriału 2D?",
      "options": [
        "Grafen",
        "Koloidalne nanocząstki srebra",
        "Nanokapsułki liposomowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 4,
      "question": "Co odróżnia nanomateriał 3D od 0D/1D/2D?",
      "options": [
        "Ma nanostrukturalny charakter wewnątrz całej objętości materiału",
        "Nie zawiera żadnych elementów w skali nano",
        "Musi być amorficzny"
      ],
      "correctIndex": 0
    },
    {
      "id": 5,
      "question": "Do której klasy wymiarowej należą nanorurki węglowe (CNT)?",
      "options": [
        "1D",
        "0D",
        "2D"
      ],
      "correctIndex": 0
    },
    {
      "id": 6,
      "question": "Do której klasy wymiarowej należy pojedyncza warstwa MoS2?",
      "options": [
        "2D",
        "0D",
        "3D"
      ],
      "correctIndex": 0
    },
    {
      "id": 7,
      "question": "Do której klasy wymiarowej należy proszek złożony z wolnych nanocząstek TiO2?",
      "options": [
        "0D",
        "1D",
        "2D"
      ],
      "correctIndex": 0
    },
    {
      "id": 8,
      "question": "Jak najprościej opisać nanokompozyt polimerowy?",
      "options": [
        "Makroskopowy polimer z wbudowanymi nanocząstkami jako wypełniaczami",
        "Czysty polimer bez dodatków",
        "Mieszaninę dwóch stopionych metali bez fazy nano"
      ],
      "correctIndex": 0
    },
    {
      "id": 9,
      "question": "Który z poniższych jest przykładem nanomateriału węglowego?",
      "options": [
        "Grafen",
        "Nanocząstki TiO2",
        "Nanocząstki AgCl"
      ],
      "correctIndex": 0
    },
    {
      "id": 10,
      "question": "Który z poniższych jest przykładem nanomateriału metalicznego?",
      "options": [
        "Nanocząstki srebra",
        "Nanorurka celulozowa",
        "Liposome z lekiem"
      ],
      "correctIndex": 0
    },
    {
      "id": 11,
      "question": "Który z poniższych jest przykładem nanomateriału tlenkowego (oxide-based)?",
      "options": [
        "Nanocząstki TiO2",
        "Nanorurka węglowa",
        "Peptydowy nanowłókienkowy hydrożel"
      ],
      "correctIndex": 0
    },
    {
      "id": 12,
      "question": "Który z poniższych jest przykładem nanomateriału polimerowego?",
      "options": [
        "Dendrymery",
        "Nanocząstki złota",
        "Grafen"
      ],
      "correctIndex": 0
    },
    {
      "id": 13,
      "question": "Jak sklasyfikujesz liposomy i micelle w nanomedycynie?",
      "options": [
        "Organiczne nanomateriały na bazie związków amfifilowych",
        "Czysto metaliczne nanocząstki",
        "Wyłącznie nieorganiczne tlenki półprzewodnikowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 14,
      "question": "Która grupa najlepiej opisuje główne klasy nanomateriałów wg składu?",
      "options": [
        "Metaliczne, tlenkowe, węglowe, polimerowe, kompozytowe",
        "Gazowe, ciekłe, stałe",
        "Kwasy, zasady, sole"
      ],
      "correctIndex": 0
    },
    {
      "id": 15,
      "question": "Do jakiej kategorii materiałów zaliczysz fulleren C60?",
      "options": [
        "0D nanomateriał węglowy",
        "1D nanomateriał metaliczny",
        "2D nanomateriał tlenkowy"
      ],
      "correctIndex": 0
    },
    {
      "id": 16,
      "question": "Jak sklasyfikujesz pojedynczą warstwę grafenu ze względu na strukturę?",
      "options": [
        "2D nanomateriał węglowy",
        "0D nanomateriał metaliczny",
        "3D nanokompozyt ceramiczny"
      ],
      "correctIndex": 0
    },
    {
      "id": 17,
      "question": "Które z poniższych najlepiej opisuje dendrymer?",
      "options": [
        "Silnie rozgałęziony polimer o strukturze drzewiastej w skali nano",
        "Jednorodny kryształ metalu o rozmiarze centymetrów",
        "Pusta sfera węglowa C60"
      ],
      "correctIndex": 0
    },
    {
      "id": 18,
      "question": "Metal–organic frameworks (MOF) to przykład:",
      "options": [
        "Nanomateriałów kompozytowych o charakterze szkieletu metal–ligand",
        "Czystych nanocząstek metalicznych",
        "Wyłącznie polimerów przewodzących"
      ],
      "correctIndex": 0
    },
    {
      "id": 19,
      "question": "Który opis odpowiada nanocząstkom \"core–shell\"?",
      "options": [
        "Nanocząstka z rdzeniem jednego materiału i otoczką z innego",
        "Nanocząstka z całkowicie jednorodnego materiału",
        "Jednowarstwowa 2D płytka bez powłoki"
      ],
      "correctIndex": 0
    },
    {
      "id": 20,
      "question": "Który przykład jest typowym 0D nanomateriałem półprzewodnikowym?",
      "options": [
        "Kropki kwantowe CdSe",
        "Nanowłókna PLA",
        "Nanowarstwa Al2O3"
      ],
      "correctIndex": 0
    },
    {
      "id": 21,
      "question": "Jak określisz nanorurki TiO2 osadzone pionowo na podłożu?",
      "options": [
        "1D nanomateriał tlenkowy",
        "0D nanomateriał węglowy",
        "2D nanokompozyt metaliczny"
      ],
      "correctIndex": 0
    },
    {
      "id": 22,
      "question": "Które z poniższych jest przykładem nanomateriału naturalnego?",
      "options": [
        "Nanoceluloza",
        "Nanocząstki złota wytworzone redukcją chemiczną",
        "Grafen z CVD"
      ],
      "correctIndex": 0
    },
    {
      "id": 23,
      "question": "Jak sklasyfikujesz aerozole zawierające nanocząstki sadzy z silnika diesla?",
      "options": [
        "Niezamierzone (incidental) nanomateriały węglowe",
        "Intencjonalnie wytworzone nanokompozyty",
        "Wyłącznie naturalne nanomateriały mineralne"
      ],
      "correctIndex": 0
    },
    {
      "id": 24,
      "question": "Który typ nanomateriałów jest definiowany głównie przez strukturę szkieletu z atomów węgla sp2?",
      "options": [
        "Nanomateriały grafenowe",
        "Nanocząstki tlenków metali",
        "Nanocząstki srebra"
      ],
      "correctIndex": 0
    },
    {
      "id": 25,
      "question": "Jak skategoryzujesz nanowarstwy tlenków przejściowych o grubości kilku nm na metalu?",
      "options": [
        "2D nanomateriały tlenkowe",
        "0D nanocząstki węglowe",
        "3D nanowłókna polimerowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 26,
      "question": "Który opis odpowiada nanocząstkom o wysokim współczynniku kształtu (aspect ratio)?",
      "options": [
        "Długość znacznie większa niż średnica, jak w nanodrutach",
        "Kształt zbliżony do idealnej kuli",
        "Objętość taka sama jak powierzchnia"
      ],
      "correctIndex": 0
    },
    {
      "id": 27,
      "question": "Który przykład jest nanomateriałem kompozytowym?",
      "options": [
        "Polimer z nanorurkami węglowymi jako wypełniaczem",
        "Czysty krzem monokrystaliczny",
        "Czysty grafen na Cu"
      ],
      "correctIndex": 0
    },
    {
      "id": 28,
      "question": "Do jakiej klasy materiałów zaliczysz nanodiamanty?",
      "options": [
        "Nanomateriały węglowe 0D",
        "Nanomateriały metaliczne 2D",
        "Nanomateriały polimerowe 1D"
      ],
      "correctIndex": 0
    },
    {
      "id": 29,
      "question": "Co jest typowym przykładem nanomateriału metalicznego stosowanego jako środek antybakteryjny?",
      "options": [
        "Nanocząstki srebra",
        "Nanocząstki krzemionki",
        "Nanowarstwy grafenu"
      ],
      "correctIndex": 0
    },
    {
      "id": 30,
      "question": "Które z poniższych to przykład nanomateriału magnetycznego?",
      "options": [
        "Nanocząstki tlenku żelaza Fe3O4",
        "Nanocząstki cukru",
        "Nanowłókna kolagenowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 31,
      "question": "Jak sklasyfikujesz nanocząstki Au z powłoką PEG używane do terapii fototermicznej?",
      "options": [
        "Metaliczne nanocząstki funkcjonalizowane polimerem",
        "Czysto polimerowe nanocząstki",
        "Nanomateriały ceramiczne 2D"
      ],
      "correctIndex": 0
    },
    {
      "id": 32,
      "question": "Który z poniższych opisów pasuje do nanomateriałów typu 'carbon dots'?",
      "options": [
        "Małe, zazwyczaj <10 nm, wysoko luminoforowe nanokropki węglowe",
        "Nanocząstki metaliczne o średnicy >1 µm",
        "Warstwy krzemu o grubości milimetrów"
      ],
      "correctIndex": 0
    },
    {
      "id": 33,
      "question": "Jak sklasyfikujesz nanocząstki BaTiO3 stosowane w kondensatorach?",
      "options": [
        "Nanomateriały ceramiczne (ferroelektryczne)",
        "Nanomateriały węglowe",
        "Nanomateriały czysto polimerowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 34,
      "question": "Który z poniższych jest przykładem 1D nanomateriału węglowego?",
      "options": [
        "Nanorurka węglowa (CNT)",
        "Grafen",
        "Nanocząstka srebra"
      ],
      "correctIndex": 0
    },
    {
      "id": 35,
      "question": "Która para najlepiej odpowiada klasie 'carbon-based nanomaterials'?",
      "options": [
        "Fullereny i grafen",
        "TiO2 i ZnO",
        "Fe3O4 i CoFe2O4"
      ],
      "correctIndex": 0
    },
    {
      "id": 36,
      "question": "Jak zaklasyfikujesz nanocząstki nanosrebra w żelu do ran?",
      "options": [
        "Metaliczne nanocząstki 0D w matrycy polimerowej",
        "2D warstwa tlenkowa",
        "3D nanowłókno węglowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 37,
      "question": "Który przykład pokazuje różnicę między 0D a 1D dla tej samej chemii?",
      "options": [
        "Nanocząstki Au vs nanodruty Au",
        "Nanocząstki Au vs nanocząstki Ag",
        "Grafen vs grafen z defektami"
      ],
      "correctIndex": 0
    },
    {
      "id": 38,
      "question": "Które z poniższych jest nanomateriałem o strukturze rdzeń–powłoka (core–shell) stosowanym w fotonice?",
      "options": [
        "Kropki kwantowe CdSe/ZnS",
        "Czyste nanocząstki TiO2",
        "Nanowłókna PLA"
      ],
      "correctIndex": 0
    },
    {
      "id": 39,
      "question": "Jak sklasyfikujesz nanocząstki srebra pokryte krzemionką (Ag@SiO2)?",
      "options": [
        "Metaliczno‑tlenkowy nanomateriał rdzeń–powłoka",
        "Czysto węglowy nanomateriał",
        "Polimerowy nanokompozyt 2D"
      ],
      "correctIndex": 0
    },
    {
      "id": 40,
      "question": "Który z poniższych jest przykładem nanomateriału o strukturze laminarnej 2D innej niż grafen?",
      "options": [
        "Warstwa MoS2",
        "Nanocząstki Au",
        "Dendrymery PAMAM"
      ],
      "correctIndex": 0
    },
    {
      "id": 41,
      "question": "Jak zaklasyfikujesz elektroprzędzone włókna polimerowe o średnicy 200 nm?",
      "options": [
        "1D nanowłókna polimerowe",
        "0D nanocząstki tlenkowe",
        "2D nanowarstwy metaliczne"
      ],
      "correctIndex": 0
    },
    {
      "id": 42,
      "question": "Który typ nanomateriałów często opisuje się jako 'nanoclay'?",
      "options": [
        "Warstwowe krzemiany glinokrzemianowe o strukturze 2D",
        "Nanocząstki złota 0D",
        "Nanowłókna kolagenowe 1D"
      ],
      "correctIndex": 0
    },
    {
      "id": 43,
      "question": "Jak sklasyfikujesz cienką warstwę przewodzącego polimeru PEDOT:PSS o grubości 50 nm na podłożu?",
      "options": [
        "2D nanomateriał polimerowy",
        "0D nanocząstki metaliczne",
        "3D nanokompozyt ceramiczny"
      ],
      "correctIndex": 0
    },
    {
      "id": 44,
      "question": "Która grupa najlepiej odpowiada klasie 'metal‑based nanomaterials'?",
      "options": [
        "Nanocząstki Au, Ag, Cu",
        "Grafen, CNT, fullereny",
        "Dendrymery, liposomy, micelle"
      ],
      "correctIndex": 0
    },
    {
      "id": 45,
      "question": "Jak sklasyfikujesz nanocząstki ZnO stosowane w kremach przeciwsłonecznych?",
      "options": [
        "0D nanomateriał tlenkowy",
        "2D nanomateriał węglowy",
        "1D nanowłókno polimerowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 46,
      "question": "Która para 'typ – przykład' jest poprawna?",
      "options": [
        "Dendrymery – nośniki leków o strukturze drzewiastej",
        "Fullereny – 1D nanowłókna z tlenku krzemu",
        "CNT – 0D nanocząstki Ag"
      ],
      "correctIndex": 0
    },
    {
      "id": 47,
      "question": "Jak sklasyfikujesz warstwę ITO (Sn‑doped In2O3) o grubości 80 nm?",
      "options": [
        "2D przewodzący nanomateriał tlenkowy",
        "0D nanocząstki węglowe",
        "3D nanokompozyt polimerowy"
      ],
      "correctIndex": 0
    },
    {
      "id": 48,
      "question": "Które z poniższych najlepiej opisuje nanomateriały kompozytowe w sensie 'hybrid nanomaterials'?",
      "options": [
        "Połączenie co najmniej dwóch faz, z których przynajmniej jedna jest nanostrukturalna",
        "Czysty monokrystaliczny materiał bez domieszek",
        "Dowolny materiał o dużej gęstości"
      ],
      "correctIndex": 0
    },
    {
      "id": 49,
      "question": "Jak zaklasyfikujesz nanopory o średnicy 10 nm w membranie aluminiowej?",
      "options": [
        "Struktura 2D/3D z nanoporowatością, często zaliczana do 2D/3D nanomateriałów",
        "0D nanocząstki metaliczne",
        "1D nanowłókna węglowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 50,
      "question": "Który z poniższych opisów jest poprawny dla klasyfikacji wg wymiarów?",
      "options": [
        "0D: wszystkie wymiary w skali nano; 1D: jeden wymiar makro; 2D: dwa wymiary makro; 3D: struktura objętościowa z elementami nano",
        "0D: jeden wymiar nano; 1D: dwa wymiary nano; 2D: trzy wymiary nano",
        "0D: tylko warstwy; 1D: tylko cząstki; 2D: tylko kompozyty"
      ],
      "correctIndex": 0
    }
  ],
  "metody charakteryzacji nanomateriałów": [
    {
      "id": 1,
      "question": "Jaką informację podstawowo dostarcza skaningowa mikroskopia elektronowa (SEM) przy badaniu nanomateriałów?",
      "options": [
        "Morfologię i topografię powierzchni",
        "Bezpośrednio strukturę pasm elektronowych",
        "Rozkład mas atomowych w jądrze"
      ],
      "correctIndex": 0
    },
    {
      "id": 2,
      "question": "Co jest główną zaletą mikroskopii transmisyjnej (TEM) w stosunku do SEM?",
      "options": [
        "Wyższa rozdzielczość umożliwiająca obrazowanie struktury wewnętrznej aż do poziomu atomowego",
        "Możliwość pracy wyłącznie w warunkach otoczenia bez próżni",
        "Niższa energia wiązki, co zawsze eliminuje uszkodzenia próbki"
      ],
      "correctIndex": 0
    },
    {
      "id": 3,
      "question": "Co mierzy mikroskopia sił atomowych (AFM)?",
      "options": [
        "Topografię powierzchni poprzez siły oddziaływania końcówki z próbką",
        "Absorpcję promieniowania gamma przez próbkę",
        "Sztywność chemiczną wiązań jonowych"
      ],
      "correctIndex": 0
    },
    {
      "id": 4,
      "question": "Która technika jest najbardziej odpowiednia do określania struktury krystalicznej i fazowej nanomateriałów?",
      "options": [
        "Dyfrakcja rentgenowska (XRD)",
        "Dynamiczne rozpraszanie światła (DLS)",
        "Zeta potencjał"
      ],
      "correctIndex": 0
    },
    {
      "id": 5,
      "question": "Dynamiczne rozpraszanie światła (DLS) służy głównie do:",
      "options": [
        "Wyznaczania rozkładu wielkości nanocząstek w zawiesinie",
        "Określania składu pierwiastkowego próbki w próżni",
        "Obrazowania defektów dyslokacyjnych"
      ],
      "correctIndex": 0
    },
    {
      "id": 6,
      "question": "Co opisuje pomiar zeta potencjału w zawiesinach nanocząstek?",
      "options": [
        "Potencjał elektrostatyczny na granicy ścinania, związany ze stabilnością koloidu",
        "Energię aktywacji reakcji chemicznej w roztworze",
        "Różnicę potencjałów między elektrodami odniesienia"
      ],
      "correctIndex": 0
    },
    {
      "id": 7,
      "question": "Która technika może bezpośrednio wizualizować sieć krystaliczną i dyslokacje w nanokrystalach?",
      "options": [
        "Wysokorozdzielcza TEM (HRTEM)",
        "FTIR",
        "DLS"
      ],
      "correctIndex": 0
    },
    {
      "id": 8,
      "question": "Jaką informację podstawowo dostarcza spektroskopia FTIR dla nanomateriałów organicznych lub hybrydowych?",
      "options": [
        "Rodzaje grup funkcyjnych i wiązań chemicznych w materiale",
        "Rozkład mas atomowych w jądrze",
        "Wyłącznie rozkład wielkości cząstek"
      ],
      "correctIndex": 0
    },
    {
      "id": 9,
      "question": "Raman spektroskopia jest szczególnie użyteczna przy badaniu:",
      "options": [
        "Nanomateriałów węglowych, takich jak grafen i nanotuby, poprzez analizę fononów i defektów",
        "Wyłącznie temperatury topnienia polimerów",
        "Składników gazowych pod wysokim ciśnieniem"
      ],
      "correctIndex": 0
    },
    {
      "id": 10,
      "question": "UV-Vis spektroskopia w kontekście nanocząstek metali (np. Au, Ag) pozwala na:",
      "options": [
        "Analizę rezonansu plazmonowego zależnego od wielkości i kształtu cząstek",
        "Bezpośredni pomiar składu izotopowego",
        "Wyłącznie pomiar przewodnictwa elektrycznego"
      ],
      "correctIndex": 0
    },
    {
      "id": 11,
      "question": "Która technika jest podstawowa do określania pola powierzchni właściwej i porowatości nanomateriałów?",
      "options": [
        "Adsorpcja gazu (np. BET)",
        "SEM",
        "CV (cykliczna woltamperometria)"
      ],
      "correctIndex": 0
    },
    {
      "id": 12,
      "question": "Jaka informacja jest zwykle otrzymywana z analizy BET dla nanomateriałów porowatych?",
      "options": [
        "Powierzchnia właściwa i objętość/rozmiar porów",
        "Rozkład ładunku jądrowego",
        "Widmo emisji gamma"
      ],
      "correctIndex": 0
    },
    {
      "id": 13,
      "question": "Która technika jest właściwa do analizy składu pierwiastkowego i często sprzężona z SEM lub TEM?",
      "options": [
        "Energy-dispersive X-ray spectroscopy (EDX/EDS)",
        "DLS",
        "AFM w trybie kontaktowym"
      ],
      "correctIndex": 0
    },
    {
      "id": 14,
      "question": "Jaką informację dostarcza X-ray Photoelectron Spectroscopy (XPS) w charakteryzacji nanomateriałów?",
      "options": [
        "Skład pierwiastkowy i stany utlenienia na powierzchni",
        "Rozkład wielkości cząstek w roztworze",
        "Wyłącznie przewodnictwo cieplne"
      ],
      "correctIndex": 0
    },
    {
      "id": 15,
      "question": "Która technika jest najbardziej odpowiednia do wyznaczania rozkładu wielkości cząstek w roztworach koloidalnych, obok DLS?",
      "options": [
        "Nanoparticle Tracking Analysis (NTA)",
        "XRD",
        "TGA"
      ],
      "correctIndex": 0
    },
    {
      "id": 16,
      "question": "Small-Angle X-ray Scattering (SAXS) służy głównie do:",
      "options": [
        "Analizy rozmiaru, kształtu i agregacji nanocząstek w objętości",
        "Obrazowania powierzchni z rozdzielczością atomową",
        "Pomiaru przewodnictwa jonowego elektrolitu"
      ],
      "correctIndex": 0
    },
    {
      "id": 17,
      "question": "Która technika termoanalityczna mierzy zmianę masy próbki w funkcji temperatury?",
      "options": [
        "Termograwimetria (TGA)",
        "DSC",
        "DLS"
      ],
      "correctIndex": 0
    },
    {
      "id": 18,
      "question": "Diferencjalna kalorymetria skaningowa (DSC) służy do:",
      "options": [
        "Analizy przemian termicznych, takich jak topnienie czy przejścia fazowe",
        "Bezpośredniego obrazowania nanocząstek",
        "Pomiaru ładunku powierzchniowego"
      ],
      "correctIndex": 0
    },
    {
      "id": 19,
      "question": "Która technika elektrochemiczna jest szeroko stosowana do badania kinetyki i reversyjności procesów na elektrodach z nanomateriałami?",
      "options": [
        "Cykliczna woltamperometria (CV)",
        "SEM",
        "DLS"
      ],
      "correctIndex": 0
    },
    {
      "id": 20,
      "question": "Electrochemical Impedance Spectroscopy (EIS) pozwala na:",
      "options": [
        "Analizę oporu, pojemności i transportu ładunku w układach z nanomateriałami",
        "Wyłącznie pomiar kąta zwilżania",
        "Wyznaczanie tylko pola powierzchni właściwej"
      ],
      "correctIndex": 0
    },
    {
      "id": 21,
      "question": "Która technika mikroskopowa mierzy prąd tunelowy między ostrzem a przewodzącą powierzchnią próbki?",
      "options": [
        "Scanning Tunneling Microscopy (STM)",
        "AFM w trybie kontaktowym",
        "SEM"
      ],
      "correctIndex": 0
    },
    {
      "id": 22,
      "question": "Jaką główną informację daje spektroskopia NMR w odniesieniu do nanomateriałów organicznych lub hybrydowych?",
      "options": [
        "Lokalne środowisko jąder (np. 1H, 13C) i dynamikę segmentów molekularnych",
        "Dokładny rozkład wielkości cząstek w zawiesinie",
        "Topografię powierzchni z rozdzielczością nanometrową"
      ],
      "correctIndex": 0
    },
    {
      "id": 23,
      "question": "Która technika spektrometryczna jest używana do dokładnego oznaczania stężenia metali w dyspersjach nanocząstek?",
      "options": [
        "ICP-MS (Inductively Coupled Plasma Mass Spectrometry)",
        "XRD",
        "AFM"
      ],
      "correctIndex": 0
    },
    {
      "id": 24,
      "question": "Co oznacza skrót EELS w kontekście TEM?",
      "options": [
        "Electron Energy Loss Spectroscopy",
        "Electron Elastic Light Scattering",
        "Enhanced Electron Luminescence Study"
      ],
      "correctIndex": 0
    },
    {
      "id": 25,
      "question": "Jaką informację można uzyskać z EELS w połączeniu z TEM?",
      "options": [
        "Skład chemiczny i stany elektronowe lokalnie w nanostrukturze",
        "Wyłącznie rozkład wielkości cząstek w roztworze",
        "Wyłącznie temperaturę topnienia materiału"
      ],
      "correctIndex": 0
    },
    {
      "id": 26,
      "question": "Która technika jest szczególnie przydatna do badania szorstkości i wysokości nanostruktur na izolujących podłożach bez potrzeby przewodności próbki?",
      "options": [
        "AFM",
        "STM",
        "SEM w trybie wysokiego napięcia"
      ],
      "correctIndex": 0
    },
    {
      "id": 27,
      "question": "Która technika pozwala określić szybko i nieinwazyjnie wielkość nanocząstek w roztworze, ale zakłada kulisty kształt?",
      "options": [
        "DLS",
        "SEM",
        "XRD"
      ],
      "correctIndex": 0
    },
    {
      "id": 28,
      "question": "Jaki jest podstawowy parametr wyznaczany z XRD przy użyciu równania Scherrera dla nanokrystalitów?",
      "options": [
        "Średni rozmiar krystalitów w kierunku określonej płaszczyzny krystalograficznej",
        "Zeta potencjał cząstek",
        "Ciepło topnienia materiału"
      ],
      "correctIndex": 0
    },
    {
      "id": 29,
      "question": "Która technika jest najbardziej odpowiednia do bezpośredniego pomiaru grubości ultracienkiej warstwy tlenkowej na metalu w skali nm?",
      "options": [
        "TEM przekrojowe (cross-section TEM)",
        "DLS",
        "UV-Vis"
      ],
      "correctIndex": 0
    },
    {
      "id": 30,
      "question": "Jaki typ informacji daje SEM-EDS (SEM z detektorem energii dyspersyjnej)?",
      "options": [
        "Morfologię powierzchni oraz lokalny skład pierwiastkowy",
        "Wyłącznie strukturę pasmową półprzewodnika",
        "Zależność przewodnictwa od temperatury"
      ],
      "correctIndex": 0
    },
    {
      "id": 31,
      "question": "Która technika jest szczególnie przydatna do badania wysokości barier energii i pracy wyjścia na powierzchni nanomateriałów metalicznych?",
      "options": [
        "Kelvin Probe Force Microscopy (KPFM)",
        "DLS",
        "ICP-MS"
      ],
      "correctIndex": 0
    },
    {
      "id": 32,
      "question": "Jaką informację podstawowo mierzy spektroskopia fotoelektronów rentgenowskich (XPS)?",
      "options": [
        "Energie wiązania elektronów na powierzchni, powiązane ze stanami chemicznymi",
        "Rozkład wielkości porów w strukturze",
        "Odporność próbki na ścieranie"
      ],
      "correctIndex": 0
    },
    {
      "id": 33,
      "question": "Która technika jest klasycznym wyborem do obrazowania struktur lamelarnych, np. warstw blokowych polimerów, w skali nanometrów?",
      "options": [
        "TEM",
        "DLS",
        "XRD w małym kącie"
      ],
      "correctIndex": 0
    },
    {
      "id": 34,
      "question": "Która technika jest najbardziej odpowiednia do pomiaru ładunku powierzchniowego i stabilności nanocząstek w roztworach wodnych?",
      "options": [
        "Zeta potencjał (elektroforeza laserowa)",
        "XRD",
        "SEM w trybie wysokiej próżni"
      ],
      "correctIndex": 0
    },
    {
      "id": 35,
      "question": "Jaką informację głównie dostarcza spektroskopia Raman dla grafenu?",
      "options": [
        "Liczbę warstw, obecność defektów i naprężeń na podstawie pasm G, D i 2D",
        "Wyłącznie stężenie domieszek azotu",
        "Jedynie przewodnictwo jonowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 36,
      "question": "Która technika pozwala badać dystrybucję wielkości nanocząstek w aerozolu?",
      "options": [
        "Scanning Mobility Particle Sizer (SMPS) lub podobne metody mobilnościowe",
        "XPS",
        "AFM w roztworze"
      ],
      "correctIndex": 0
    },
    {
      "id": 37,
      "question": "Co mierzy technika TGA-DSC stosowana równocześnie?",
      "options": [
        "Zmianę masy i przepływu ciepła, pozwalając powiązać rozkład termiczny z przemianami energetycznymi",
        "Wyłącznie rozkład wielkości porów",
        "Wyłącznie przewodnictwo elektryczne"
      ],
      "correctIndex": 0
    },
    {
      "id": 38,
      "question": "Która technika jest właściwa do badania struktury elektronowej i gęstości stanów powierzchniowych w nanomateriałach przewodzących?",
      "options": [
        "STM i spektroskopia dI/dV",
        "DLS",
        "UV-Vis w roztworze"
      ],
      "correctIndex": 0
    },
    {
      "id": 39,
      "question": "Jakie jest główne ograniczenie klasycznego DLS przy analizie polidyspersyjnych, niesferycznych nanocząstek?",
      "options": [
        "Założenie modelu sferycznego powoduje błędy w interpretacji hydrodynamicznej średnicy",
        "Niemożność pomiaru w wodzie",
        "Brak czułości na małe cząstki poniżej 1 µm"
      ],
      "correctIndex": 0
    },
    {
      "id": 40,
      "question": "Która technika pozwala na mapowanie topografii i jednoczesne mierzenie sił adhezji na powierzchni nanomateriału?",
      "options": [
        "AFM w odpowiednich trybach (np. force mapping)",
        "SEM w trybie wtórnych elektronów",
        "XRD"
      ],
      "correctIndex": 0
    },
    {
      "id": 41,
      "question": "Która technika jest używana do badania składu chemicznego przy powierzchni z głębokością analizowaną rzędu kilku nm?",
      "options": [
        "XPS",
        "ICP-MS",
        "DLS"
      ],
      "correctIndex": 0
    },
    {
      "id": 42,
      "question": "Jaką rolę pełni EDX w mikroskopie SEM?",
      "options": [
        "Analizuje widmo promieniowania rentgenowskiego emitowanego z próbki, dając skład pierwiastkowy",
        "Służy do pomiaru zeta potencjału",
        "Wytwarza obraz 3D powierzchni poprzez triangulację"
      ],
      "correctIndex": 0
    },
    {
      "id": 43,
      "question": "Która technika jest odpowiednia do badania optycznych własności nanocząstek półprzewodnikowych, takich jak kropki kwantowe?",
      "options": [
        "Fotoluminescencja (PL) i UV-Vis",
        "XRD",
        "TGA"
      ],
      "correctIndex": 0
    },
    {
      "id": 44,
      "question": "Która para 'technika – główna informacja' jest poprawna?",
      "options": [
        "DLS – rozkład wielkości nanocząstek w roztworze",
        "XPS – rozkład wielkości porów w membranie",
        "AFM – skład pierwiastkowy w objętości"
      ],
      "correctIndex": 0
    },
    {
      "id": 45,
      "question": "Które z poniższych służy do identyfikacji faz krystalicznych i stopnia krystaliczności w polimerach nanonapełnianych?",
      "options": [
        "XRD",
        "Zeta potencjał",
        "DLS"
      ],
      "correctIndex": 0
    },
    {
      "id": 46,
      "question": "Jaką informację można uzyskać z pomiarów kontaktowego kąta zwilżania dla powierzchni pokrytych nanowarstwami?",
      "options": [
        "Charakter hydrofilowy/hydrofobowy i energię powierzchniową",
        "Bezpośrednio rozmiar nanocząstek w roztworze",
        "Skład izotopowy wodoru"
      ],
      "correctIndex": 0
    },
    {
      "id": 47,
      "question": "Która technika jest właściwa do badania rozkładu wielkości nanocząstek w proszkach, a nie tylko w roztworach?",
      "options": [
        "Dyfrakcja laserowa lub analiza sitowa uzupełniona SEM",
        "DLS",
        "Zeta potencjał"
      ],
      "correctIndex": 0
    },
    {
      "id": 48,
      "question": "Która metoda charakteryzacji jest szczególnie czuła na zmiany w strukturze powierzchni i wiązaniach chemicznych w cienkich warstwach organicznych na nanonośnikach?",
      "options": [
        "FTIR (w trybie ATR lub transmisji)",
        "DLS",
        "TGA bez sprzężenia"
      ],
      "correctIndex": 0
    },
    {
      "id": 49,
      "question": "Która kombinacja metod jest typowa dla pełnej charakteryzacji nanocząstek metalicznych w roztworze?",
      "options": [
        "TEM/SEM + DLS + UV-Vis + zeta potencjał",
        "XRD + DSC tylko",
        "AFM + kontaktowy kąt zwilżania"
      ],
      "correctIndex": 0
    },
    {
      "id": 50,
      "question": "Dlaczego w praktyce badań nanomateriałów często stosuje się kilka technik charakteryzacji jednocześnie?",
      "options": [
        "Ponieważ pojedyncza technika zwykle dostarcza tylko częściowej informacji (np. rozmiar, skład, struktura), a pełny obraz wymaga podejścia komplementarnego",
        "Ponieważ przepisy zawsze wymagają dokładnie pięciu metod",
        "Ponieważ każda technika daje identyczne wyniki i trzeba je uśrednić"
      ],
      "correctIndex": 0
    }
  ],
  "metody syntezy i wytwarzania": [
    {
      "id": 1,
      "question": "Które stwierdzenie najlepiej opisuje podejście top-down w syntezie nanomateriałów?",
      "options": [
        "Rozdrabnianie materiału masowego do skali nano za pomocą metod fizycznych lub mechanicznych",
        "Samorzutne łączenie atomów w nanostruktury w roztworze",
        "Syntezę z wykorzystaniem organizmów żywych"
      ],
      "correctIndex": 0
    },
    {
      "id": 2,
      "question": "Które stwierdzenie najlepiej opisuje podejście bottom-up?",
      "options": [
        "Budowanie nanostruktur z atomów, jonów lub cząsteczek poprzez reakcje chemiczne lub samoorganizację",
        "Mechaniczne szlifowanie kryształów do nanometrowych rozmiarów",
        "Obróbkę cieplną materiału masowego w próżni bez reakcji chemicznych"
      ],
      "correctIndex": 0
    },
    {
      "id": 3,
      "question": "Który z poniższych procesów jest klasycznym przykładem metody top-down?",
      "options": [
        "Mielenie kulowe (high-energy ball milling)",
        "Sol-gel",
        "Hydrotermalna synteza w autoklawie"
      ],
      "correctIndex": 0
    },
    {
      "id": 4,
      "question": "Który proces jest typową metodą bottom-up?",
      "options": [
        "Chemical Vapor Deposition (CVD)",
        "Frezowanie mechaniczne",
        "Piaskowanie powierzchni"
      ],
      "correctIndex": 0
    },
    {
      "id": 5,
      "question": "Do jakiej głównej kategorii zalicza się metoda ball milling w syntezie nanocząstek?",
      "options": [
        "Fizyczna metoda top-down",
        "Chemiczna metoda bottom-up",
        "Biologiczna metoda green synthesis"
      ],
      "correctIndex": 0
    },
    {
      "id": 6,
      "question": "Sol-gel to przede wszystkim:",
      "options": [
        "Chemiczna metoda bottom-up oparta na przejściu zolu w żel",
        "Metoda fizycznego odparowania metalu w próżni",
        "Biologiczna metoda z użyciem bakterii"
      ],
      "correctIndex": 0
    },
    {
      "id": 7,
      "question": "Które z poniższych najlepiej opisuje hydrotermalną syntezę nanomateriałów?",
      "options": [
        "Reakcje w zamkniętym autoklawie przy wysokiej temperaturze i ciśnieniu, często w wodzie jako rozpuszczalniku",
        "Wzrost warstw w ultra-wysokiej próżni z wiązki molekularnej",
        "Bezpośrednie napylanie metalu w temperaturze pokojowej"
      ],
      "correctIndex": 0
    },
    {
      "id": 8,
      "question": "Chemical Vapor Deposition (CVD) polega na:",
      "options": [
        "Rozkładzie lub reakcji gazowych prekursorów na gorącym podłożu, prowadzącym do osadzania warstwy stałej",
        "Napylaniu metalu z fazy ciekłej na zimną powierzchnię",
        "Rozdrabnianiu masy proszku w młynie kulowym"
      ],
      "correctIndex": 0
    },
    {
      "id": 9,
      "question": "Physical Vapor Deposition (PVD) to przede wszystkim:",
      "options": [
        "Fizyczne odparowanie lub rozpylanie materiału i jego kondensacja jako cienkiej warstwy",
        "Roztworowa reakcja chemiczna prowadząca do żelu",
        "Biologiczne wytwarzanie nanocząstek przez rośliny"
      ],
      "correctIndex": 0
    },
    {
      "id": 10,
      "question": "Która metoda jest przykładem chemicznej metody bottom-up w roztworze?",
      "options": [
        "Współstrącanie (co-precipitation)",
        "Litografia optyczna",
        "Laserowa ablacja w próżni"
      ],
      "correctIndex": 0
    },
    {
      "id": 11,
      "question": "Co charakteryzuje metodę współstrącania (co-precipitation)?",
      "options": [
        "Równoczesne wytrącanie kilku jonów z roztworu, tworzące nanocząstki po suszeniu i obróbce cieplnej",
        "Napylanie jonowe materiału na podłoże",
        "Samorzutne samoorganizowanie lipidów w micelle"
      ],
      "correctIndex": 0
    },
    {
      "id": 12,
      "question": "Metoda mikroemulsji (microemulsion) wykorzystuje:",
      "options": [
        "Krople fazy wodnej lub olejowej stabilizowane surfaktantami jako nanoreaktory",
        "Wyłącznie wysoką próżnię i wiązki jonowe",
        "Bezpośrednie napylanie metodą magnetronową"
      ],
      "correctIndex": 0
    },
    {
      "id": 13,
      "question": "Która technika syntezy często wykorzystuje fale ultradźwiękowe do inicjowania reakcji?",
      "options": [
        "Metoda sonochemiczna",
        "Metoda sol-gel",
        "Ball milling"
      ],
      "correctIndex": 0
    },
    {
      "id": 14,
      "question": "Metoda syntezy z użyciem promieniowania mikrofalowego (microwave-assisted) daje zwykle:",
      "options": [
        "Szybkie nagrzewanie objętościowe i skrócony czas syntezy",
        "Wyłącznie chłodzenie próbki",
        "Niższe zużycie rozpuszczalników kosztem bardzo długiego czasu reakcji"
      ],
      "correctIndex": 0
    },
    {
      "id": 15,
      "question": "Która z metod syntezy nanomateriałów opiera się na wykorzystaniu organizmów żywych lub ekstraktów roślinnych?",
      "options": [
        "Biologiczna green synthesis",
        "Physical Vapor Deposition",
        "Laserowa ablacja"
      ],
      "correctIndex": 0
    },
    {
      "id": 16,
      "question": "Zaletą biologicznej syntezy nanocząstek metali jest przede wszystkim:",
      "options": [
        "Łagodniejsze warunki, brak toksycznych reagentów i naturalne ligandy stabilizujące",
        "Wyłącznie najwyższa możliwa czystość krystaliczna",
        "Pełna kontrola kształtu bez potrzeby optymalizacji parametrów"
      ],
      "correctIndex": 0
    },
    {
      "id": 17,
      "question": "Która metoda jest typowo używana do wzrostu cienkich warstw krystalicznych półprzewodników III-V?",
      "options": [
        "Epitaksja z wiązki molekularnej (MBE)",
        "Ball milling",
        "Elektroprzędzenie"
      ],
      "correctIndex": 0
    },
    {
      "id": 18,
      "question": "Która metoda pozwala w prosty sposób wytwarzać nanowłókna polimerowe?",
      "options": [
        "Elektroprzędzenie (electrospinning)",
        "Sol-gel",
        "Litografia elektronowa"
      ],
      "correctIndex": 0
    },
    {
      "id": 19,
      "question": "W której metodzie syntezy parametrami kluczowymi są nadmiar prekursorów, szybkość nukleacji i wzrostu ziaren w roztworze?",
      "options": [
        "Chemiczna synteza w roztworze (np. redukcja metali, współstrącanie)",
        "Ball milling",
        "Napylanie katodowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 20,
      "question": "Główną zaletą metod fizycznych typu odparowanie–kondensacja (PVD, ablacja laserowa) jest:",
      "options": [
        "Wysoka czystość produktów, bez dodatkowych reagentów chemicznych",
        "Zawsze niska energochłonność procesu",
        "Pełna biodegradowalność produktów"
      ],
      "correctIndex": 0
    },
    {
      "id": 21,
      "question": "Który z poniższych procesów należy do top-down i jest stosowany do miniaturyzacji struktur litograficznych?",
      "options": [
        "Litografia i trawienie",
        "Sol-gel",
        "Hydrotermalne wygrzewanie"
      ],
      "correctIndex": 0
    },
    {
      "id": 22,
      "question": "Metaliczne nanocząstki srebra wytwarzane przez redukcję Ag+ w roztworze to przykład:",
      "options": [
        "Chemicznej metody bottom-up",
        "Fizycznej metody top-down",
        "Biologicznej epitaksji"
      ],
      "correctIndex": 0
    },
    {
      "id": 23,
      "question": "Która metoda jest szczególnie użyteczna do wytwarzania nanocząstek tlenków metali o kontrolowanym kształcie przy użyciu wysokiej temperatury i ciśnienia w roztworze?",
      "options": [
        "Hydrotermalna synteza",
        "Ball milling",
        "PVD"
      ],
      "correctIndex": 0
    },
    {
      "id": 24,
      "question": "Co jest charakterystyczne dla metody sol-gel przy syntezie tlenków?",
      "options": [
        "Przejście zolu w sieć żelową poprzez hydrolizę i kondensację prekursorów",
        "Bezpośrednie odparowanie stopionego metalu",
        "Użycie bakterii do redukcji jonów metali"
      ],
      "correctIndex": 0
    },
    {
      "id": 25,
      "question": "Która metoda bottom-up jest często wykorzystywana do wzrostu nanorurek węglowych?",
      "options": [
        "Chemical Vapor Deposition (CVD) na katalizatorach metalicznych",
        "Laserowa ablacja w wodzie",
        "Ball milling grafitu"
      ],
      "correctIndex": 0
    },
    {
      "id": 26,
      "question": "W metodzie ball milling dla uzyskania nanocząstek kluczowym parametrem jest:",
      "options": [
        "Energia i czas mielenia oraz stosunek masy kulek do proszku",
        "Stężenie bakterii w roztworze",
        "Moc lasera UV"
      ],
      "correctIndex": 0
    },
    {
      "id": 27,
      "question": "Które z poniższych jest przykładem metody 'green synthesis' nanocząstek srebra?",
      "options": [
        "Redukcja Ag+ ekstraktem roślinnym zawierającym polifenole",
        "Napylanie katodowe Ag w próżni",
        "Elektroprzędzenie roztworu PVA"
      ],
      "correctIndex": 0
    },
    {
      "id": 28,
      "question": "Która metoda bottom-up charakteryzuje się osadzaniem warstw atom po atomie przy użyciu sekwencyjnych impulsów prekursorów?",
      "options": [
        "Atomic Layer Deposition (ALD)",
        "Ball milling",
        "Elektroprzędzenie"
      ],
      "correctIndex": 0
    },
    {
      "id": 29,
      "question": "Elektrochemiczne osadzanie (electrodeposition) nanomateriałów to przykład:",
      "options": [
        "Metody bottom-up wykorzystującej reakcje elektrochemiczne na elektrodzie",
        "Metody top-down mechanicznego rozdrabniania",
        "Biologicznej syntezy enzymatycznej"
      ],
      "correctIndex": 0
    },
    {
      "id": 30,
      "question": "Czy metoda hydrotermalna jest zwykle klasyfikowana jako:",
      "options": [
        "Chemiczna metoda bottom-up w fazie ciekłej",
        "Fizyczna metoda top-down w próżni",
        "Biologiczna metoda z wykorzystaniem bakterii"
      ],
      "correctIndex": 0
    },
    {
      "id": 31,
      "question": "Które z poniższych stanowi główną wadę wielu metod fizycznych top-down, jak ball milling?",
      "options": [
        "Szeroki rozkład rozmiarów i możliwe defekty powierzchni",
        "Niemożność skalowania do większych ilości",
        "Zawsze obecność toksycznych prekursorów gazowych"
      ],
      "correctIndex": 0
    },
    {
      "id": 32,
      "question": "Która zaleta wyróżnia metody typu CVD i ALD w porównaniu z prostą redukcją w roztworze?",
      "options": [
        "Bardzo dobra kontrola grubości i jednorodności cienkich warstw",
        "Brak potrzeby stosowania wysokiej temperatury",
        "Brak konieczności użycia jakichkolwiek prekursorów"
      ],
      "correctIndex": 0
    },
    {
      "id": 33,
      "question": "Która z metod jest przykładem fizycznego top-down bez udziału chemii roztworów?",
      "options": [
        "Laserowa ablacja tarczy w próżni",
        "Sol-gel",
        "Biologiczna synteza z użyciem drożdży"
      ],
      "correctIndex": 0
    },
    {
      "id": 34,
      "question": "W hydrotermalnej syntezie nanorurek lub nanokryształów zwykle kontroluje się:",
      "options": [
        "Temperaturę, ciśnienie, czas wygrzewania i skład roztworu",
        "Wyłącznie natężenie prądu elektrycznego",
        "Jedynie ilość powietrza nad roztworem"
      ],
      "correctIndex": 0
    },
    {
      "id": 35,
      "question": "Która metoda wytwarzania nanostruktur przypomina naturalne procesy biomineralizacji?",
      "options": [
        "Biologiczna synteza wykorzystująca mikroorganizmy lub rośliny",
        "PVD w ultra-wysokiej próżni",
        "Litografia rentgenowska"
      ],
      "correctIndex": 0
    },
    {
      "id": 36,
      "question": "Co jest typowym rozpuszczalnikiem w klasycznej hydrotermalnej syntezie tlenków metali?",
      "options": [
        "Woda",
        "Benzen",
        "Acetonitryl w fazie nadkrytycznej"
      ],
      "correctIndex": 0
    },
    {
      "id": 37,
      "question": "W metodach typu mikroemulsja granice kropli pełnią rolę:",
      "options": [
        "Nanoreaktorów kontrolujących rozmiar powstających nanocząstek",
        "Źródła promieniowania jonizującego",
        "Czynnika mechanicznego rozdrabniającego kryształy"
      ],
      "correctIndex": 0
    },
    {
      "id": 38,
      "question": "Która metoda bottom-up szczególnie nadaje się do wytwarzania nanocząstek związków metali szlachetnych o wąskim rozkładzie rozmiarów?",
      "options": [
        "Chemiczna redukcja metali w roztworze z użyciem reduktora i liganda ochronnego",
        "Ball milling stopu metalu",
        "Napylanie magnezowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 39,
      "question": "W CVD parametrami kluczowymi dla kontroli składu i morfologii są:",
      "options": [
        "Rodzaj gazów prekursorowych, temperatura podłoża i czas osadzania",
        "Wyłącznie pH roztworu",
        "Tylko prędkość wirowania wirówki"
      ],
      "correctIndex": 0
    },
    {
      "id": 40,
      "question": "Która metoda może być traktowana jako szczególnie energochłonna, ale dająca materiały o wysokiej czystości?",
      "options": [
        "Fizyczne metody top-down, takie jak laserowa ablacja i odparowanie w próżni",
        "Biologiczna synteza z użyciem ekstraktu roślinnego",
        "Współstrącanie w temperaturze pokojowej"
      ],
      "correctIndex": 0
    },
    {
      "id": 41,
      "question": "Który opis odpowiada metodzie 'spray pyrolysis'?",
      "options": [
        "Rozpylanie roztworu prekursora w gorącej strefie, gdzie krople ulegają odparowaniu i rozkładowi do nanocząstek",
        "Rozdrabnianie materiału w młynie kulowym",
        "Syntezę nanocząstek w bakteriach glebowych"
      ],
      "correctIndex": 0
    },
    {
      "id": 42,
      "question": "Co jest wspólne dla większości chemicznych metod bottom-up (sol-gel, współstrącanie, mikroemulsje)?",
      "options": [
        "Reakcje przebiegają w fazie ciekłej i obejmują nukleację oraz wzrost cząstek",
        "Wymagają wyłącznie próżni i wysokiej energii wiązek",
        "Nie wykorzystują żadnych prekursorów"
      ],
      "correctIndex": 0
    },
    {
      "id": 43,
      "question": "Który przykład jest typową metodą otrzymywania nanocząstek tlenków metali o kontrolowanym rozmiarze bez użycia skomplikowanej aparatury próżniowej?",
      "options": [
        "Hydrotermalna synteza w autoklawie laboratoryjnym",
        "MBE",
        "PVD z wiązki elektronowej"
      ],
      "correctIndex": 0
    },
    {
      "id": 44,
      "question": "Które stwierdzenie najlepiej opisuje kompromis między metodami top-down i bottom-up?",
      "options": [
        "Top-down daje często prostszą skalowalność, bottom-up – lepszą kontrolę składu i morfologii",
        "Top-down daje zawsze najwyższą jednorodność, bottom-up zawsze najgorszą",
        "Bottom-up nie nadaje się do syntezy żadnych tlenków metali"
      ],
      "correctIndex": 0
    },
    {
      "id": 45,
      "question": "Biologiczna synteza nanocząstek metali przez rośliny lub mikroorganizmy polega zwykle na:",
      "options": [
        "Redukcji jonów metali przez metabolity lub enzymy i stabilizacji otrzymanych jąder przez białka/cukry",
        "Napylaniu metalu w próżni na liście roślin",
        "Użyciu tylko wysokotemperaturowej plazmy"
      ],
      "correctIndex": 0
    },
    {
      "id": 46,
      "question": "Która metoda bottom-up jest szczególnie odpowiednia do otrzymywania porowatych żeli i aerożeli krzemionkowych?",
      "options": [
        "Sol-gel z odpowiednim suszeniem i kalcynacją",
        "Ball milling",
        "Laserowa ablacja"
      ],
      "correctIndex": 0
    },
    {
      "id": 47,
      "question": "W metodzie ALD (Atomic Layer Deposition) grubość warstwy rośnie:",
      "options": [
        "Liniowo z liczbą cykli, zazwyczaj o ułamek nanometra na cykl",
        "Nieliniowo i skokowo o setki nm na cykl",
        "Tylko wtedy, gdy temperatura jest poniżej 0°C"
      ],
      "correctIndex": 0
    },
    {
      "id": 48,
      "question": "Które z poniższych jest prostą metodą top-down stosowaną do otrzymywania nanostruktur z grafitu?",
      "options": [
        "Mechaniczne lub chemiczne złuszczanie (exfoliation)",
        "Hydrotermalna synteza z prekursorów krzemianowych",
        "Sol-gel z alkoksydów tytanu"
      ],
      "correctIndex": 0
    },
    {
      "id": 49,
      "question": "Która metoda bottom-up jest często wykorzystywana do wytwarzania metalicznych nanocząstek w osnowie polimerowej?",
      "options": [
        "In situ redukcja jonów metali w matrycy polimerowej",
        "Ball milling polimeru z metalem",
        "PVD metalu na gotowym kompozycie"
      ],
      "correctIndex": 0
    },
    {
      "id": 50,
      "question": "Dlaczego w praktyce często łączy się metody top-down i bottom-up w jednym procesie technologicznym?",
      "options": [
        "Aby wykorzystać zalety obu podejść: dokładną kontrolę nanoarchitektury i skalowalność produkcji",
        "Ponieważ pojedyncza metoda nie jest dopuszczalna regulacyjnie",
        "Ponieważ metody bottom-up nie pozwalają na wytwarzanie nanostruktur"
      ],
      "correctIndex": 0
    }
  ],
  "modelowanie, symulacje i data‑driven nano": [
    {
      "id": 1,
      "question": "Co jest głównym celem modelowania i symulacji w nanoinżynierii materiałowej?",
      "options": [
        "Przewidywanie właściwości i zachowania nanomateriałów bez konieczności wykonania wszystkich eksperymentów",
        "Zastąpienie wszystkich badań eksperymentalnych marketingiem",
        "Wyłącznie wizualizacja 3D cząstek na potrzeby grafiki"
      ],
      "correctIndex": 0
    },
    {
      "id": 2,
      "question": "Molecular Dynamics (MD) to metoda, która:",
      "options": [
        "Śledzi ruch atomów/cząsteczek w czasie poprzez numeryczne rozwiązywanie równań ruchu",
        "Rozwiązuje wyłącznie równania Maxwella dla pola elektromagnetycznego",
        "Opisuje tylko zjawiska w skali makroskopowej bez atomów"
      ],
      "correctIndex": 0
    },
    {
      "id": 3,
      "question": "Metody Monte Carlo (MC) w modelowaniu nanomateriałów służą głównie do:",
      "options": [
        "Próbkowania przestrzeni konfiguracji i stanów układu przy użyciu losowych kroków",
        "Śledzenia torów cząstek wyłącznie w czasie rzeczywistym",
        "Analizy wyłącznie zjawisk falowych w optyce"
      ],
      "correctIndex": 0
    },
    {
      "id": 4,
      "question": "Density Functional Theory (DFT) w kontekście nanomateriałów służy do:",
      "options": [
        "Obliczania struktury elektronowej i energii układów na poziomie kwantowym",
        "Symulowania przepływu płynów w rurach o dużej średnicy",
        "Projektowania wyłącznie geometrii makroelementów"
      ],
      "correctIndex": 0
    },
    {
      "id": 5,
      "question": "Co oznacza pojęcie „multiscale modeling” w badaniach nanomateriałów?",
      "options": [
        "Łączenie modeli od skali atomowej do makroskopowej w celu opisania materiału w wielu skalach długości i czasu",
        "Modelowanie tylko jednej skali, ale z różnymi kolorami",
        "Zastąpienie modeli atomowych modelami marketingowymi"
      ],
      "correctIndex": 0
    },
    {
      "id": 6,
      "question": "Który typ symulacji jest szczególnie przydatny do badania dyfuzji jonów i molekuł w nanoporach?",
      "options": [
        "Molecular Dynamics (MD)",
        "Metody elementów skończonych (FEM) bez poziomu atomowego",
        "Proste równania liniowe bez dynamiki"
      ],
      "correctIndex": 0
    },
    {
      "id": 7,
      "question": "Phase‑field modeling (PFM) stosuje się w nanomateriałach głównie do:",
      "options": [
        "Symulacji ewolucji mikrostruktury i frontów fazowych w czasie",
        "Obliczeń wyłącznie gęstości elektronowej",
        "Projektowania układów obwodów elektrycznych na PCB"
      ],
      "correctIndex": 0
    },
    {
      "id": 8,
      "question": "Co jest typowym wejściem (features) w modelach machine learning dla materials informatics?",
      "options": [
        "Deskryptory struktury i składu, takie jak skład pierwiastkowy, parametry sieci czy cechy powierzchniowe",
        "Losowe liczby bez związku z materiałem",
        "Wyłącznie nazwa producenta materiału"
      ],
      "correctIndex": 0
    },
    {
      "id": 9,
      "question": "Jaki jest główny cel podejścia data‑driven w projektowaniu nanomateriałów?",
      "options": [
        "Wykorzystanie istniejących danych eksperymentalnych i obliczeniowych do trenowania modeli przewidujących właściwości i optymalne składy",
        "Zbieranie danych tylko do archiwum bez analizy",
        "Zastąpienie wszystkich modeli fizycznych zgadywaniem"
      ],
      "correctIndex": 0
    },
    {
      "id": 10,
      "question": "Który rodzaj algorytmu ML jest często używany do przewidywania właściwości nanomateriałów na podstawie wielu zmiennych wejściowych?",
      "options": [
        "Regresja (np. lasy losowe, sieci neuronowe)",
        "Algorytmy sortowania bąbelkowego",
        "Algorytmy kompresji bezstratnej"
      ],
      "correctIndex": 0
    },
    {
      "id": 11,
      "question": "Co oznacza termin „surrogate model” w kontekście symulacji nanomateriałów?",
      "options": [
        "Przybliżony model ML zastępujący kosztowne obliczenia fizyczne lub kwantowe",
        "Model graficzny do tworzenia animacji",
        "Model opisujący wyłącznie koszty produkcji"
      ],
      "correctIndex": 0
    },
    {
      "id": 12,
      "question": "Które z poniższych najlepiej opisuje podejście „inverse design” z użyciem ML w nanomateriałach?",
      "options": [
        "Poszukiwanie struktury i składu materiału odpowiadających zadanym docelowym właściwościom",
        "Zawsze preferowanie znanych materiałów zamiast nowych",
        "Projektowanie wyłącznie kształtu makroelementów"
      ],
      "correctIndex": 0
    },
    {
      "id": 13,
      "question": "Jaką rolę pełni coarse‑grained (CG) modeling w symulacjach nanomateriałów?",
      "options": [
        "Uproszczenie opisu układu przez grupowanie wielu atomów w pojedyncze „ziarna”, umożliwiające symulacje większych skal",
        "Zastąpienie atomów idealnymi kulkami bez żadnych oddziaływań",
        "Symulacje tylko pojedynczego atomu"
      ],
      "correctIndex": 0
    },
    {
      "id": 14,
      "question": "Które stwierdzenie najlepiej opisuje bazę danych Materials Project lub podobne bazy w kontekście data‑driven nano?",
      "options": [
        "Zawierają obliczone metodami DFT właściwości tysięcy materiałów i służą jako źródło danych do trenowania modeli",
        "Są tylko katalogiem nazw firm",
        "Przechowują wyłącznie zdjęcia próbek"
      ],
      "correctIndex": 0
    },
    {
      "id": 15,
      "question": "Co jest typową miarą jakości modelu predykcyjnego w materials informatics?",
      "options": [
        "Błąd predykcji (np. RMSE, MAE) na zbiorze testowym",
        "Liczba linii kodu w programie",
        "Rozdzielczość ekranu, na którym prezentuje się wyniki"
      ],
      "correctIndex": 0
    },
    {
      "id": 16,
      "question": "Które podejście łączy obliczenia DFT z ML, aby przyspieszyć przeszukiwanie przestrzeni składu nanomateriałów?",
      "options": [
        "Iteracyjne generowanie danych DFT, trenowanie modelu ML i eksploracja nowych kandydatów (active learning)",
        "Losowe wybieranie materiałów bez aktualizacji modelu",
        "Zastąpienie obliczeń DFT całkowitym brakiem danych"
      ],
      "correctIndex": 0
    },
    {
      "id": 17,
      "question": "Modelowanie atomistyczne nanomateriałów metalicznych często wykorzystuje potencjały:",
      "options": [
        "Empiryczne (np. EAM, ReaxFF) lub półempiryczne dopasowane do danych kwantowych",
        "Wyłącznie harmoniczne sprężyny bez parametrów",
        "Modele ignorujące oddziaływania między atomami"
      ],
      "correctIndex": 0
    },
    {
      "id": 18,
      "question": "Jakim zadaniem ML jest klasyfikacja faz krystalicznych na obrazach z mikroskopii elektronowej?",
      "options": [
        "Klasyfikacją (classification)",
        "Regresją",
        "Klasteryzacją bez nadzoru na liczbach porządkowych"
      ],
      "correctIndex": 0
    },
    {
      "id": 19,
      "question": "Czym różni się model continuum (np. FEM) od MD przy opisie deformacji nanokompozytu?",
      "options": [
        "Continuum używa pól ciągłych (naprężenie, odkształcenie), MD śledzi położenia pojedynczych atomów",
        "Continuum opisuje wyłącznie zjawiska kwantowe",
        "MD nie uwzględnia czasu, a continuum zawsze"
      ],
      "correctIndex": 0
    },
    {
      "id": 20,
      "question": "Który etap jest krytyczny przy budowie data‑driven modeli dla nanomateriałów?",
      "options": [
        "Czyszczenie, standaryzacja i walidacja jakości danych wejściowych",
        "Losowe usuwanie połowy danych",
        "Ignorowanie jednostek fizycznych w danych"
      ],
      "correctIndex": 0
    },
    {
      "id": 21,
      "question": "Co jest typowym ograniczeniem klasycznych symulacji MD dla nanomateriałów?",
      "options": [
        "Ograniczona skala czasowa i długości (nanosekundy, kilkadziesiąt nm) ze względu na koszt obliczeniowy",
        "Niemożność symulowania żadnych atomów",
        "Brak możliwości obliczenia energii układu"
      ],
      "correctIndex": 0
    },
    {
      "id": 22,
      "question": "Jakie dane są zwykle wykorzystywane w ML‑owych modelach przewidujących wytrzymałość nanokompozytów?",
      "options": [
        "Skład fazowy, frakcja objętościowa napełniacza, geometria i rozmiar nanofaz",
        "Kolor logo producenta",
        "Jedynie nazwa serii produktu"
      ],
      "correctIndex": 0
    },
    {
      "id": 23,
      "question": "Czy sztuczna inteligencja zstępuje w pełni symulacje MD/DFT w nanonauce?",
      "options": [
        "Nie, uzupełnia je – ML jest szybsze, ale wymaga danych z MD/DFT i eksperymentów do nauki i walidacji",
        "Tak, symulacje stały się całkowicie zbędne",
        "Nie, sztuczna inteligencja w ogóle nie znajduje zastosowania w nanotechnologii"
      ],
      "correctIndex": 0
    }
  ],
  "nanosafety, toksykologia i projektowanie safer‑by‑design": [
    {
      "id": 1,
      "question": "Co jest głównym celem podejścia Safe(r)-by-Design (SbD) w odniesieniu do nanomateriałów?",
      "options": [
        "Uwzględnienie bezpieczeństwa ludzi i środowiska już na etapie projektowania materiału, procesu i produktu",
        "Przeprowadzenie testów toksyczności dopiero po wprowadzeniu produktu na rynek",
        "Całkowita rezygnacja z oceny ryzyka przy innowacjach"
      ],
      "correctIndex": 0
    },
    {
      "id": 2,
      "question": "Która droga narażenia jest zazwyczaj uznawana za najważniejszą przy ocenie ryzyka w miejscu pracy dla nanocząstek w powietrzu?",
      "options": [
        "Inhalacja",
        "Kontakt przez skórę",
        "Droga dożylna"
      ],
      "correctIndex": 0
    },
    {
      "id": 3,
      "question": "Klasyczny paradygmat oceny ryzyka chemicznego obejmuje m.in. następujące kroki:",
      "options": [
        "Identyfikację zagrożeń, charakterystykę zagrożeń, ocenę narażenia i charakterystykę ryzyka",
        "Wyłącznie zebranie opinii eksperckich",
        "Tylko pomiar stężenia w środowisku"
      ],
      "correctIndex": 0
    },
    {
      "id": 4,
      "question": "Które stwierdzenie najlepiej opisuje nanosafety?",
      "options": [
        "Dziedzinę zajmującą się oceną i zarządzaniem potencjalnymi zagrożeniami zdrowotnymi i środowiskowymi nanomateriałów",
        "Wyłącznie techniczne zagadnienia syntezy nanomateriałów",
        "Projektowanie wyłącznie właściwości optycznych nanomateriałów"
      ],
      "correctIndex": 0
    },
    {
      "id": 5,
      "question": "Która właściwość nanocząstek jest szczególnie istotna z punktu widzenia toksykologii inhalacyjnej?",
      "options": [
        "Rozmiar i rozkład rozmiarów cząstek (wpływ na depozycję w drogach oddechowych)",
        "Wyłącznie kolor cząstek",
        "Gęstość prądu płynącego przez cząstkę"
      ],
      "correctIndex": 0
    },
    {
      "id": 6,
      "question": "Które z poniższych NIE jest główną drogą narażenia na nanomateriały?",
      "options": [
        "Promieniowanie gamma z jądra nanocząstki",
        "Inhalacja aerozolu",
        "Kontakt skórny"
      ],
      "correctIndex": 0
    },
    {
      "id": 7,
      "question": "W kontekście nano‑toksykologii, jaki jest typowy skutek dużej reaktywności powierzchniowej nanocząstek w organizmie?",
      "options": [
        "Generacja reaktywnych form tlenu (ROS) i stres oksydacyjny",
        "Natychmiastowa neutralizacja wszystkich toksyn",
        "Brak interakcji z komórkami"
      ],
      "correctIndex": 0
    },
    {
      "id": 8,
      "question": "Które podejście najlepiej odpowiada zasadom SbD przy projektowaniu nowego nanomateriału?",
      "options": [
        "Modyfikacja składu i powierzchni tak, aby zmniejszyć toksyczność przy zachowaniu wymaganej funkcji",
        "Najpierw maksymalizacja wydajności, a kwestie bezpieczeństwa pozostawione na później",
        "Zastąpienie wszystkich badań toksyczności modelami marketingowymi"
      ],
      "correctIndex": 0
    },
    {
      "id": 9,
      "question": "Które stwierdzenie najlepiej opisuje „lifecycle approach” w nanosafety?",
      "options": [
        "Uwzględnienie ryzyka na wszystkich etapach życia nanomateriału: od syntezy, przez użycie, po utylizację",
        "Skupienie się wyłącznie na fazie produkcji",
        "Rozważanie tylko fazy transportu materiału"
      ],
      "correctIndex": 0
    },
    {
      "id": 10,
      "question": "Który z poniższych parametrów często ma większe znaczenie toksykologiczne dla nanocząstek niż sama masa?",
      "options": [
        "Powierzchnia właściwa lub liczba cząstek",
        "Wyłącznie gęstość masowa",
        "Kolor optyczny materiału"
      ],
      "correctIndex": 0
    },
    {
      "id": 11,
      "question": "Jaką rolę pełni powłoka (coating) nanocząstek z punktu widzenia nanosafety?",
      "options": [
        "Może zmieniać rozpuszczalność, interakcje biologiczne i toksyczność cząstek",
        "Służy wyłącznie do poprawy wyglądu optycznego",
        "Zawsze czyni cząstki całkowicie obojętnymi biologicznie"
      ],
      "correctIndex": 0
    },
    {
      "id": 12,
      "question": "Który scenariusz najlepiej ilustruje podejście „exposure reduction” w SbD?",
      "options": [
        "Zamknięcie procesu w izolowanym reaktorze z filtracją emisji zamiast pracy w otwartej instalacji",
        "Zwiększenie prędkości wentylatorów bez filtrów",
        "Poleganie tylko na maseczkach bawełnianych"
      ],
      "correctIndex": 0
    },
    {
      "id": 13,
      "question": "Co oznacza „grouping and read-across” w kontekście oceny bezpieczeństwa nanomateriałów?",
      "options": [
        "Przypisywanie podobnych nanomateriałów do grup na podstawie cech i przenoszenie danych toksyczności między nimi",
        "Łączenie wszystkich nanomateriałów w jedną kategorię toksyczności",
        "Zastępowanie testów toksycznych ankietą wśród pracowników"
      ],
      "correctIndex": 0
    },
    {
      "id": 14,
      "question": "Która z dróg narażenia jest szczególnie istotna w przypadku nanomateriałów stosowanych w kosmetykach i kremach przeciwsłonecznych?",
      "options": [
        "Kontakt skórny (dermalny)",
        "Ekspozycja dożylna",
        "Ekspozycja wyłącznie przez spożycie"
      ],
      "correctIndex": 0
    },
    {
      "id": 15,
      "question": "Co jest typowym krótkoterminowym skutkiem inhalacji wysokich stężeń niektórych nanocząstek metali tlenkowych w modelach zwierzęcych?",
      "options": [
        "Stan zapalny w płucach i stres oksydacyjny",
        "Natychmiastowe zwiększenie masy ciała",
        "Zwiększona odporność na infekcje wirusowe bez skutków ubocznych"
      ],
      "correctIndex": 0
    },
    {
      "id": 16,
      "question": "Które z poniższych jest przykładem środka inżynieryjnego (engineering control) dla nanosafety?",
      "options": [
        "Lokalna wentylacja wyciągowa z filtrami HEPA",
        "Zalecenie, aby pracownicy po prostu „uważali”",
        "Malowanie ścian na inny kolor"
      ],
      "correctIndex": 0
    },
    {
      "id": 17,
      "question": "W podejściu SbD, co powinno być zrobione na jak najwcześniejszym etapie R&D?",
      "options": [
        "Identyfikacja potencjalnych zagrożeń i scenariuszy narażenia dla projektowanego nanomateriału",
        "Wyłącznie oszacowanie kosztów produkcji",
        "Zaprojektowanie logo marketingowego produktu"
      ],
      "correctIndex": 0
    },
    {
      "id": 18,
      "question": "Które nanomateriały zwykle wymagają szczególnej uwagi z powodu możliwości generowania włóknistych struktur podobnych do azbestu?",
      "options": [
        "Długie, cienkie nanorurki węglowe o wysokim stosunku długości do średnicy",
        "Nanocząstki srebra kuliste o niskim stosunku powierzchni do objętości",
        "Nanocząstki soli kuchennej"
      ],
      "correctIndex": 0
    },
    {
      "id": 19,
      "question": "Jakie działanie jest zgodne z hierarchią kontroli ryzyka dla nanomateriałów?",
      "options": [
        "Substytucja bardziej toksycznego nanomateriału mniej toksycznym o podobnej funkcji",
        "Zastąpienie wszystkich zabezpieczeń dodatkowymi szkoleniami",
        "Zwiększanie czasu ekspozycji w celu adaptacji organizmu"
      ],
      "correctIndex": 0
    },
    {
      "id": 20,
      "question": "Co w kontekście nanosafety oznacza „no data, no market” dla nowych nanomateriałów?",
      "options": [
        "Brak wystarczających danych bezpieczeństwa może uniemożliwić wprowadzenie materiału na rynek",
        "Materiał można wprowadzić na rynek bez żadnych danych, jeśli jest przełomowy",
        "Dane toksyczności zbiera się dopiero po szerokim zastosowaniu"
      ],
      "correctIndex": 0
    },
    {
      "id": 21,
      "question": "Które własności fizykochemiczne nanocząstek są kluczowe przy ocenie ich losu w środowisku?",
      "options": [
        "Rozmiar, ładunek powierzchniowy, rozpuszczalność i zdolność do aglomeracji/agregacji",
        "Wyłącznie temperatura topnienia",
        "Tylko przewodnictwo cieplne"
      ],
      "correctIndex": 0
    },
    {
      "id": 22,
      "question": "Który scenariusz jest typowy dla narażenia populacji ogólnej na nanocząstki srebra?",
      "options": [
        "Kontakt z wyrobami konsumenckimi o działaniu antybakteryjnym (tekstyliami, powłokami, kosmetykami)",
        "Wyłącznie praca w laboratorium fizyki jądrowej",
        "Ekspozycja tylko w kopalniach węgla"
      ],
      "correctIndex": 0
    },
    {
      "id": 23,
      "question": "W nano‑toksykologii, co oznacza „dose metric”?",
      "options": [
        "Wielkość opisująca dawkę, np. masa, liczba cząstek lub powierzchnia właściwa",
        "Nazwa producenta danego nanomateriału",
        "Maksymalny czas przechowywania próbki"
      ],
      "correctIndex": 0
    },
    {
      "id": 24,
      "question": "Które z poniższych działań jest związane z SbD na poziomie procesu produkcyjnego?",
      "options": [
        "Projektowanie zamkniętych, zautomatyzowanych linii ograniczających emisję pyłów nano",
        "Zwiększanie ręcznej manipulacji proszkami",
        "Stosowanie wentylatorów bez filtrów"
      ],
      "correctIndex": 0
    },
    {
      "id": 25,
      "question": "Dlaczego nanomateriały w żywności i opakowaniach budzą szczególne obawy toksykologiczne?",
      "options": [
        "Ze względu na potencjalną drogę narażenia przez przewód pokarmowy i brak pełnej wiedzy o biodostępności",
        "Ponieważ zawsze świecą w ciemności",
        "Bo uniemożliwiają wykrycie zepsucia żywności"
      ],
      "correctIndex": 0
    },
    {
      "id": 26,
      "question": "Które stwierdzenie najlepiej oddaje rolę „problem formulation” w ocenie ryzyka nanomateriału?",
      "options": [
        "Zdefiniowanie celu oceny, scenariuszy ekspozycji, populacji narażonych i kluczowych punktów końcowych",
        "Wyłącznie wykonanie pomiarów pyłu w pomieszczeniu",
        "Opis marketingowy zalet produktu"
      ],
      "correctIndex": 0
    },
    {
      "id": 27,
      "question": "Która droga narażenia na nanomateriały jest istotna przy pracach z aerozolami medycznymi lub sprayami?",
      "options": [
        "Inhalacja",
        "Ekspozycja wyłącznie skórna",
        "Ekspozycja wyłącznie dożylna"
      ],
      "correctIndex": 0
    },
    {
      "id": 28,
      "question": "W podejściu SbD do nanoleków, które z poniższych działań jest przykładem redukcji hazardu?",
      "options": [
        "Wybór nośnika o niższej cytotoksyczności przy zachowaniu skuteczności dostarczania leku",
        "Zwiększenie dawki nanonośnika bez zmiany składu",
        "Rezygnacja z badań biokompatybilności"
      ],
      "correctIndex": 0
    },
    {
      "id": 29,
      "question": "Dlaczego stabilność koloidalna nanocząstek w płynach biologicznych ma znaczenie dla nanosafety?",
      "options": [
        "Agregacja lub deagregacja zmienia biodostępność, rozkład w organizmie i toksyczność",
        "Nie ma znaczenia, bo liczy się tylko skład chemiczny",
        "Decyduje wyłącznie o kolorze preparatu"
      ],
      "correctIndex": 0
    },
    {
      "id": 30,
      "question": "Które z poniższych jest przykładem „informacji regulacyjnej” potrzebnej w SbD?",
      "options": [
        "Dane o klasyfikacji zagrożeń, wartościach NDS/REL i wymaganiach rejestracyjnych dla danego typu nanomateriału",
        "Kolor opakowania produktu",
        "Preferencje estetyczne użytkowników"
      ],
      "correctIndex": 0
    },
    {
      "id": 31,
      "question": "Co jest główną zaletą stosowania wysokoprzepustowych (high‑throughput) metod toksykologicznych w SbD?",
      "options": [
        "Szybkie przesiewowe porównanie wielu wariantów nanomateriałów pod kątem hazardu",
        "Zastąpienie całkowicie wszystkich badań toksyczności jednym testem",
        "Ograniczenie się tylko do badań na ludziach"
      ],
      "correctIndex": 0
    },
    {
      "id": 32,
      "question": "Który z poniższych przykładów dotyczy SbD na poziomie produktu końcowego?",
      "options": [
        "Projektowanie powłoki tak, aby minimalizować uwalnianie nanocząstek w trakcie użytkowania i utylizacji",
        "Zwiększenie abrazyjności powłoki bez badań emisji",
        "Stosowanie nanocząstek luźno przyczepionych do powierzchni"
      ],
      "correctIndex": 0
    },
    {
      "id": 33,
      "question": "Dlaczego małe rozmiary nanocząstek ułatwiają przekraczanie barier biologicznych?",
      "options": [
        "Mogą przenikać przez bariery, takie jak nabłonek płuc czy ściany naczyń, oraz być transportowane z krwią i limfą",
        "Bo zawsze są obojętne elektrycznie",
        "Bo nie oddziałują z żadnymi białkami"
      ],
      "correctIndex": 0
    },
    {
      "id": 34,
      "question": "Które stwierdzenie najlepiej opisuje różnicę między „hazard” a „risk” w nanosafety?",
      "options": [
        "Hazard to inherentne właściwości szkodliwe materiału, a ryzyko zależy od hazardu i poziomu narażenia",
        "Hazard i ryzyko to dokładnie to samo",
        "Hazard odnosi się tylko do zagrożeń środowiskowych, ryzyko tylko do ekonomicznych"
      ],
      "correctIndex": 0
    },
    {
      "id": 35,
      "question": "Jakie środki ochrony indywidualnej (PPE) są zazwyczaj rekomendowane przy pracy z nanopyłami?",
      "options": [
        "Półmaski lub maski z filtrami P3/HEPA, rękawice i odzież ochronna",
        "Zwykła maseczka chirurgiczna i podwinięte rękawy",
        "Okulary przeciwsłoneczne bez innych środków"
      ],
      "correctIndex": 0
    },
    {
      "id": 36,
      "question": "W kontekście SbD, co oznacza „trade-off” między bezpieczeństwem a funkcjonalnością?",
      "options": [
        "Konieczność znalezienia kompromisu między maksymalnym bezpieczeństwem a wymaganymi właściwościami użytkowymi i kosztami",
        "Zawsze wybór maksymalnej funkcjonalności niezależnie od ryzyka",
        "Zawsze całkowita rezygnacja z funkcji dla bezpieczeństwa"
      ],
      "correctIndex": 0
    },
    {
      "id": 37,
      "question": "Dlaczego w ocenie ryzyka nanocząstek inhalacyjnych istotny jest ich kształt (np. włóknisty vs kulisty)?",
      "options": [
        "Włókniste cząstki mogą zachowywać się podobnie do azbestu, z trudniejszą eliminacją z płuc",
        "Kształt nie wpływa na los w organizmie",
        "Kuliste cząstki są zawsze bardziej toksyczne niezależnie od rozmiaru"
      ],
      "correctIndex": 0
    },
    {
      "id": 38,
      "question": "Które z poniższych jest przykładem scenariusza wysokiego ryzyka dla uwalniania nanopyłów?",
      "options": [
        "Suche mielenie lub szlifowanie nanokompozytów bez osłon i wyciągu",
        "Przechowywanie nanomateriału w szczelnie zamkniętych pojemnikach",
        "Praca z nanomateriałem w postaci mokrej pasty w zamkniętym systemie"
      ],
      "correctIndex": 0
    },
    {
      "id": 39,
      "question": "Jaką rolę odgrywają testy in vitro w wczesnym etapie SbD?",
      "options": [
        "Pozwalają szybko zidentyfikować potencjalne mechanizmy toksyczności i porównać warianty nanomateriałów",
        "Zastępują całkowicie wszystkie inne badania",
        "Służą tylko do oceny koloru komórek"
      ],
      "correctIndex": 0
    },
    {
      "id": 40,
      "question": "Który element jest KLUCZOWY dla komunikacji ryzyka nanomateriałów w łańcuchu dostaw?",
      "options": [
        "Karty charakterystyki (SDS) zawierające informacje specyficzne dla nanomateriału",
        "Wyłącznie reklamy produktu",
        "Brak jakichkolwiek dokumentów, aby nie wzbudzać obaw"
      ],
      "correctIndex": 0
    },
    {
      "id": 41,
      "question": "Który z poniższych to przykład „process SbD” w fabryce produkującej nanoprochy?",
      "options": [
        "Automatyczne napełnianie i zamykanie worków z odciągiem pyłu",
        "Ręczne przesypywanie proszku z otwartych worków",
        "Suszenie proszku na otwartych tacach w hali"
      ],
      "correctIndex": 0
    },
    {
      "id": 42,
      "question": "Dlaczego cząstki nanometrowe mogą mieć inne profile toksyczności niż ich odpowiedniki makroskopowe o tym samym składzie chemicznym?",
      "options": [
        "Ze względu na odmienne właściwości powierzchniowe, reaktywność, rozpuszczalność i biodystrybucję",
        "Bo skład chemiczny w nanoskali ulega zmianie na losowy",
        "Bo tracą wszystkie właściwości fizyczne"
      ],
      "correctIndex": 0
    },
    {
      "id": 43,
      "question": "Co jest przykładem SbD opartego na SUBSTYTUCJI?",
      "options": [
        "Zastąpienie rozpuszczalnego, bioakumulacyjnego nanomateriału innym, mniej mobilnym i mniej toksycznym",
        "Zwiększenie dawki tego samego nanomateriału",
        "Przeniesienie produkcji do innego kraju bez zmian materiału"
      ],
      "correctIndex": 0
    },
    {
      "id": 44,
      "question": "Która droga narażenia jest szczególnie istotna przy stosowaniu nanomateriałów w żywności i suplementach?",
      "options": [
        "Ingestia (droga pokarmowa)",
        "Inhalacja",
        "Ekspozycja przez skórę"
      ],
      "correctIndex": 0
    },
    {
      "id": 45,
      "question": "W jakim celu stosuje się podejście warstwowe (tiered) w ocenie ryzyka nanomateriałów?",
      "options": [
        "Aby krokowo zwiększać poziom złożoności oceny w zależności od potrzeb i dostępnych danych",
        "Aby wykonać wszystkie możliwe testy od razu",
        "Aby całkowicie pominąć etap zbierania danych"
      ],
      "correctIndex": 0
    },
    {
      "id": 46,
      "question": "Które z poniższych zachowań jest elementem kultury bezpieczeństwa w nanosafety?",
      "options": [
        "Systematyczne zgłaszanie incydentów i „near‑missów” oraz aktualizacja procedur",
        "Ukrywanie wszystkich drobnych incydentów",
        "Poleganie wyłącznie na intuicji pracowników"
      ],
      "correctIndex": 0
    },
    {
      "id": 47,
      "question": "Jak w SbD traktuje się niepewności związane z brakiem danych toksykologicznych dla nowego nanomateriału?",
      "options": [
        "Zastosowanie podejścia ostrożnościowego oraz projektowanie wariantów generujących mniej narażenia",
        "Przyjęcie, że brak danych oznacza brak ryzyka",
        "Ignorowanie niepewności na etapie projektowania"
      ],
      "correctIndex": 0
    },
    {
      "id": 48,
      "question": "Który przykład dotyczy SbD w kontekście końca życia produktu (end‑of‑life)?",
      "options": [
        "Projektowanie nanokompozytów tak, aby w trakcie recyklingu i spalania uwalniały minimalne ilości wolnych nanocząstek",
        "Zakładanie, że recykling nie będzie prowadzony",
        "Brak analiz emisji w instalacjach spalania"
      ],
      "correctIndex": 0
    },
    {
      "id": 49,
      "question": "Po co w ramach nanosafety stosuje się modele in silico (QSAR, PBPK itp.)?",
      "options": [
        "Aby przewidywać zachowanie i toksyczność nanomateriałów oraz wspierać wybór bezpieczniejszych wariantów",
        "Aby zastąpić konieczność posiadania jakichkolwiek danych eksperymentalnych",
        "Wyłącznie do celów marketingowych"
      ],
      "correctIndex": 0
    },
    {
      "id": 50,
      "question": "Jaką rolę pełni współpraca z regulatorami w kontekście Safe‑by‑Design dla nanotechnologii?",
      "options": [
        "Pomaga dostosować projekt materiału i strategię badań do przyszłych wymogów regulacyjnych i ograniczyć ryzyko 'regulatory surprise'",
        "Nie ma znaczenia na etapie projektowania",
        "Służy wyłącznie do uzyskania zezwoleń marketingowych"
      ],
      "correctIndex": 0
    }
  ],
  "podstawy nanonauki": [
    {
      "id": 1,
      "question": "Jaki zakres rozmiarów najczęściej przyjmuje się jako skalę nano?",
      "options": [
        "1–100 nm",
        "1–100 µm",
        "0.1–1 mm"
      ],
      "correctIndex": 0
    },
    {
      "id": 2,
      "question": "Co jest główną przyczyną tego, że właściwości materiału zmieniają się w skali nano?",
      "options": [
        "Wzrost stosunku powierzchni do objętości",
        "Zmiana liczby protonów w jądrze",
        "Inny układ sieci krystalicznej w próżni"
      ],
      "correctIndex": 0
    },
    {
      "id": 3,
      "question": "Które z poniższych najlepiej opisuje nanotechnologię?",
      "options": [
        "Kontrolę materii na poziomie atomowym i molekularnym w zakresie nanometrów",
        "Badania wyłącznie nad półprzewodnikami krzemowymi",
        "Dowolne miniaturyzowanie urządzeń elektronicznych"
      ],
      "correctIndex": 0
    },
    {
      "id": 4,
      "question": "Jaką długość ma 1 nm?",
      "options": [
        "10^-9 m",
        "10^-6 m",
        "10^-12 m"
      ],
      "correctIndex": 0
    },
    {
      "id": 5,
      "question": "Co oznacza skrót 0D w klasyfikacji nanomateriałów?",
      "options": [
        "Obiekt, który jest nanometrowy we wszystkich trzech wymiarach",
        "Nanostruktura o jednym wymiarze makroskopowym",
        "Nanowarstwa o grubości mikrometrowej"
      ],
      "correctIndex": 0
    },
    {
      "id": 6,
      "question": "Który przykład najlepiej pasuje do nanomateriału 1D?",
      "options": [
        "Nanorurka węglowa",
        "Nanocząstka srebra",
        "Nanopory w membranie"
      ],
      "correctIndex": 0
    },
    {
      "id": 7,
      "question": "Który przykład najlepiej pasuje do nanomateriału 2D?",
      "options": [
        "Grafenowa warstwa na podłożu",
        "Sferyczne nanocząstki złota",
        "Nanokapsułki polimerowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 8,
      "question": "Który opis odpowiada nanokompozytowi 3D?",
      "options": [
        "Makroskopowy materiał z nanometrowymi wypełniaczami rozproszonymi w objętości",
        "Pojedyncza warstwa atomowa w próżni",
        "Struktura krystaliczna bez żadnych defektów"
      ],
      "correctIndex": 0
    },
    {
      "id": 9,
      "question": "Co charakteryzuje podejście bottom‑up w nanotechnologii?",
      "options": [
        "Budowanie struktur z atomów lub małych cząsteczek",
        "Mechaniczne rozdrabnianie dużych kryształów",
        "Wyłącznie litografię optyczną"
      ],
      "correctIndex": 0
    },
    {
      "id": 10,
      "question": "Co charakteryzuje podejście top‑down w nanotechnologii?",
      "options": [
        "Tworzenie nanoobiektów przez obróbkę większych struktur",
        "Samorzutne samoorganizowanie cząsteczek",
        "Wzrost kryształów od pojedynczych atomów"
      ],
      "correctIndex": 0
    },
    {
      "id": 11,
      "question": "Dlaczego stosunek powierzchni do objętości rośnie przy zmniejszaniu rozmiaru cząstek?",
      "options": [
        "Objętość maleje szybciej niż powierzchnia",
        "Powierzchnia maleje szybciej niż objętość",
        "Powierzchnia i objętość maleją w tym samym tempie"
      ],
      "correctIndex": 0
    },
    {
      "id": 12,
      "question": "Jakie zjawisko kwantowe jest kluczowe w kropkach kwantowych?",
      "options": [
        "Kwantowe uwięzienie nośników ładunku",
        "Nadprzewodnictwo wysokotemperaturowe",
        "Tunelowanie jądrowe w jądrze atomowym"
      ],
      "correctIndex": 0
    },
    {
      "id": 13,
      "question": "Dlaczego nanocząstki metali mogą mieć inny kolor niż ten sam metal w formie makro?",
      "options": [
        "Zmienia się sposób oddziaływania z promieniowaniem optycznym",
        "Zmieniona jest liczba protonów w jądrze",
        "Nanocząstki nie absorbują światła"
      ],
      "correctIndex": 0
    },
    {
      "id": 14,
      "question": "Które stwierdzenie najlepiej opisuje efekt kwantowego uwięzienia?",
      "options": [
        "Energia elektronów zależy silnie od rozmiaru nanostruktury",
        "Elektrony poruszają się tylko po orbicie kołowej",
        "Elektrony całkowicie przestają przewodzić prąd"
      ],
      "correctIndex": 0
    },
    {
      "id": 15,
      "question": "Dlaczego nanocząstki są często bardziej reaktywne chemicznie niż materiał masowy?",
      "options": [
        "Więcej atomów znajduje się na powierzchni i może reagować",
        "Mają wyższy ładunek jądra",
        "Zawsze są w stanie ciekłym"
      ],
      "correctIndex": 0
    },
    {
      "id": 16,
      "question": "Co odróżnia nanomateriał od zwykłego proszku o cząstkach mikrometrowych?",
      "options": [
        "Przynajmniej jeden wymiar jest w zakresie nanometrów i pojawiają się nowe efekty",
        "Nanomateriał musi być zawsze metaliczny",
        "Nanomateriał nie może przewodzić prądu"
      ],
      "correctIndex": 0
    },
    {
      "id": 17,
      "question": "Jakie jednostki najczęściej stosuje się do opisu powierzchni właściwej nanomateriałów?",
      "options": [
        "m²/g",
        "J/mol",
        "S/m"
      ],
      "correctIndex": 0
    },
    {
      "id": 18,
      "question": "Które stwierdzenie jest prawdziwe dla skali nano?",
      "options": [
        "Siły powierzchniowe i międzycząsteczkowe dominują nad grawitacją",
        "Grawitacja dominuje nad siłami powierzchniowymi",
        "Siły nie zależą od rozmiaru obiektu"
      ],
      "correctIndex": 0
    },
    {
      "id": 19,
      "question": "Kiedy materiał uważa się za nanostrukturalny w kontekście ziarna krystalicznego?",
      "options": [
        "Gdy średni rozmiar ziarna jest w zakresie nanometrów",
        "Gdy ma dowolne wtrącenia makro",
        "Gdy gęstość jest mniejsza od wody"
      ],
      "correctIndex": 0
    },
    {
      "id": 20,
      "question": "Który termin opisuje proces samorzutnego tworzenia uporządkowanych struktur z wielu cząsteczek?",
      "options": [
        "Samoorganizacja",
        "Rozpuszczanie",
        "Topnienie"
      ],
      "correctIndex": 0
    },
    {
      "id": 21,
      "question": "Co jest typową konsekwencją miniaturyzacji tranzystorów do skali kilku nanometrów?",
      "options": [
        "Silniejsze efekty tunelowania i wycieku prądu",
        "Całkowity zanik przewodnictwa",
        "Niezależność parametrów od temperatury"
      ],
      "correctIndex": 0
    },
    {
      "id": 22,
      "question": "Jak określiłbyś 'nanonaukę' w odróżnieniu od nanotechnologii?",
      "options": [
        "Nanonauka bada zjawiska w skali nano, nanotechnologia je wykorzystuje",
        "Nanonauka dotyczy wyłącznie elektroniki, nanotechnologia biologii",
        "Nanonauka oznacza produkcję dowolnych miniaturowych układów"
      ],
      "correctIndex": 0
    },
    {
      "id": 23,
      "question": "Które z poniższych jest przykładem naturalnej nanostruktury?",
      "options": [
        "Struktura barwna skrzydeł motyla",
        "Blok betonowy",
        "Kawałek szkła okiennego"
      ],
      "correctIndex": 0
    },
    {
      "id": 24,
      "question": "Jakie znaczenie mają defekty powierzchniowe w nanocząstkach?",
      "options": [
        "Mogą silnie wpływać na reaktywność i właściwości elektroniczne",
        "Nie mają znaczenia, bo zanika sieć krystaliczna",
        "Są całkowicie pomijalne w porównaniu z objętością"
      ],
      "correctIndex": 0
    },
    {
      "id": 25,
      "question": "Dlaczego w nanoskali klasyczne prawo Hooke’a i modele ciągłe często zawodzą?",
      "options": [
        "Bo materiał składa się z małej liczby atomów i trzeba stosować opis dyskretny",
        "Bo stała sprężystości staje się nieskończona",
        "Bo atomy przestają drgać"
      ],
      "correctIndex": 0
    },
    {
      "id": 26,
      "question": "Co oznacza termin 'functionalization' w kontekście nanocząstek?",
      "options": [
        "Modyfikację powierzchni w celu nadania określonych funkcji chemicznych lub biologicznych",
        "Zwiększenie masy próbki przez dodanie soli",
        "Topnienie nanocząstek w wysokiej temperaturze"
      ],
      "correctIndex": 0
    },
    {
      "id": 27,
      "question": "Jaka jest typowa długość wiązania atomowego w ciele stałym?",
      "options": [
        "Rząd setek pikometrów (0.1–0.3 nm)",
        "Rząd centymetrów",
        "Rząd kilometrów"
      ],
      "correctIndex": 0
    },
    {
      "id": 28,
      "question": "Co najlepiej opisuje 'nano‑scale confinement' w materiałach porowatych?",
      "options": [
        "Ograniczenie ruchu cząsteczek w porach o rozmiarach nanometrowych",
        "Zamknięcie próbki w małym naczyniu laboratoryjnym",
        "Zamrożenie materiału w ciekłym azocie"
      ],
      "correctIndex": 0
    },
    {
      "id": 29,
      "question": "Które zjawisko jest typowo silniejsze w skali nano niż w makroskali?",
      "options": [
        "Siły van der Waalsa",
        "Siły grawitacyjne",
        "Siły odśrodkowe"
      ],
      "correctIndex": 0
    },
    {
      "id": 30,
      "question": "Jak zmiana rozmiaru kropki kwantowej wpływa na jej widmo emisyjne?",
      "options": [
        "Zmiana rozmiaru przesuwa maksimum emisji (np. kolor światła)",
        "Zmiana rozmiaru nie ma wpływu na emisję",
        "Zmiana rozmiaru zawsze zmienia emisję na podczerwień"
      ],
      "correctIndex": 0
    },
    {
      "id": 31,
      "question": "Dlaczego nanocząstki mogą mieć niższą temperaturę topnienia niż materiał masowy?",
      "options": [
        "Duży udział powierzchni zmienia warunki energetyczne topnienia",
        "W nanoskali nie obowiązuje prawo zachowania energii",
        "Nanocząstki mają inną liczbę protonów"
      ],
      "correctIndex": 0
    },
    {
      "id": 32,
      "question": "Jakie jest typowe znaczenie skrótu 'NP' w kontekście nanonauki?",
      "options": [
        "Nanoparticle",
        "Nano‑phase",
        "Nano‑pressure"
      ],
      "correctIndex": 0
    },
    {
      "id": 33,
      "question": "Który opis najlepiej pasuje do nanowłókna?",
      "options": [
        "Struktura o średnicy nanometrowej i długości mikrometrowej lub większej",
        "Sferyczna cząstka o średnicy milimetrowej",
        "Warstwa o grubości kilku milimetrów"
      ],
      "correctIndex": 0
    },
    {
      "id": 34,
      "question": "Jakie zjawisko może ograniczać przewodnictwo cieplne w nanodrutach?",
      "options": [
        "Rozpraszanie fononów na powierzchni i defektach",
        "Brak fononów w tak małych strukturach",
        "Silny wzrost grawitacji"
      ],
      "correctIndex": 0
    },
    {
      "id": 35,
      "question": "Co oznacza termin 'self‑assembly' w nanotechnologii?",
      "options": [
        "Samorzutne tworzenie uporządkowanych struktur z wielu elementów dzięki lokalnym oddziaływaniom",
        "Ręczne składanie układów przez operatora mikroskopu",
        "Automatyczne wytwarzanie obwodów drukowanych"
      ],
      "correctIndex": 0
    },
    {
      "id": 36,
      "question": "Która wielkość jest najbliżej 100 nm?",
      "options": [
        "Wirus grypy",
        "Komórka krwi czerwona",
        "Ludzkie włosy"
      ],
      "correctIndex": 0
    },
    {
      "id": 37,
      "question": "Dlaczego w nanoskali istotne stają się fluktuacje termiczne?",
      "options": [
        "Bo liczba cząstek w układzie jest mała i pojedyncze zdarzenia mają duże znaczenie",
        "Bo temperatura absolutna rośnie z rozmiarem",
        "Bo grawitacja działa silniej na małe cząstki"
      ],
      "correctIndex": 0
    },
    {
      "id": 38,
      "question": "Jak nazywa się zależność własności materiału od kierunku w przestrzeni, która może się nasilać w nanostrukturach?",
      "options": [
        "Anizotropia",
        "Izotropia",
        "Homogenizacja"
      ],
      "correctIndex": 0
    },
    {
      "id": 39,
      "question": "Który typ oddziaływań często stabilizuje koloidalne zawiesiny nanocząstek w roztworach wodnych?",
      "options": [
        "Odpychanie elektrostatyczne lub steryczne między cząstkami",
        "Silna grawitacja między cząstkami",
        "Oddziaływania jądrowe dalekiego zasięgu"
      ],
      "correctIndex": 0
    },
    {
      "id": 40,
      "question": "Co w kontekście nanonauki oznacza termin 'surface functional group'?",
      "options": [
        "Grupę chemiczną związaną z powierzchnią nanomateriału",
        "Dowolny atom wewnątrz ziarna krystalicznego",
        "Miejsce, w którym próbka dotyka stołu laboratoryjnego"
      ],
      "correctIndex": 0
    },
    {
      "id": 41,
      "question": "Jak zwykle definiuje się 'nanomateriał inżynieryjny'?",
      "options": [
        "Materiał zaprojektowany tak, aby zawierał strukturę w skali nano w celu uzyskania nowych właściwości",
        "Dowolny naturalny materiał ilasty",
        "Materiał o gęstości mniejszej niż woda"
      ],
      "correctIndex": 0
    },
    {
      "id": 42,
      "question": "Która kombinacja jednostek najlepiej opisuje rozmiar i powierzchnię nanocząstki?",
      "options": [
        "Rozmiar w nm, powierzchnia w m²/g",
        "Rozmiar w cm, powierzchnia w kg/m³",
        "Rozmiar w m, powierzchnia w V/m"
      ],
      "correctIndex": 0
    },
    {
      "id": 43,
      "question": "Dlaczego w nanoskali ważne jest pojęcie 'polidyspersyjności'?",
      "options": [
        "Bo rozrzut rozmiarów cząstek silnie wpływa na własności optyczne, mechaniczne i transportowe",
        "Bo dotyczy tylko masy próbki",
        "Bo określa jedynie kolor materiału"
      ],
      "correctIndex": 0
    },
    {
      "id": 44,
      "question": "Co opisuje 'zeta potential' w kontekście zawiesin nanocząstek?",
      "options": [
        "Potencjał elektrostatyczny na granicy ścinania, związany ze stabilnością koloidu",
        "Energię aktywacji reakcji chemicznej",
        "Napięcie progowe tranzystora MOSFET"
      ],
      "correctIndex": 0
    },
    {
      "id": 45,
      "question": "Dlaczego pomiary średniego rozmiaru cząstek nie wystarczają do pełnego opisu nanomateriału?",
      "options": [
        "Bo kształt, rozkład rozmiarów i stan powierzchni również silnie wpływają na właściwości",
        "Bo wszystkie cząstki są zawsze identyczne",
        "Bo rozmiar nie ma żadnego znaczenia"
      ],
      "correctIndex": 0
    },
    {
      "id": 46,
      "question": "Co oznacza skrót 'NEMS' w kontekście systemów w skali nano?",
      "options": [
        "Nanoelectromechanical Systems",
        "Nano Energy Management System",
        "Non‑Equilibrium Mass Spectrometry"
      ],
      "correctIndex": 0
    },
    {
      "id": 47,
      "question": "Dlaczego nanocząstki często wymagają stabilizacji przy przechowywaniu w zawiesinie?",
      "options": [
        "Mogą łatwo aglomerować ze względu na silne przyciąganie międzycząsteczkowe",
        "Mogą wyparować jak gaz",
        "Zawsze ulegają natychmiastowej krystalizacji do formy masowej"
      ],
      "correctIndex": 0
    },
    {
      "id": 48,
      "question": "Które ze stwierdzeń najlepiej opisuje relację między nanonauką a inżynierią materiałową?",
      "options": [
        "Nanonauka dostarcza zrozumienia zjawisk w skali nano, a inżynieria materiałowa wykorzystuje je do projektowania funkcjonalnych materiałów",
        "Inżynieria materiałowa i nanonauka to dokładnie to samo",
        "Inżynieria materiałowa dotyczy wyłącznie makroskopowych konstrukcji stalowych"
      ],
      "correctIndex": 0
    },
    {
      "id": 49,
      "question": "Jak w prosty sposób odróżnić efekt 'nano' od zwykłego efektu skali w miniaturyzacji klasycznych elementów?",
      "options": [
        "W skali nano pojawiają się zjawiska jakościowo nowe (np. kwantowe, powierzchniowe), a nie tylko liniowe skalowanie",
        "Efekt nano to zawsze tylko mniejsza wersja tego samego zjawiska",
        "Efekt nano wymaga, by materiał był nadprzewodnikiem"
      ],
      "correctIndex": 0
    },
    {
      "id": 50,
      "question": "Które z poniższych najlepiej opisuje podstawowy cel nanonauki?",
      "options": [
        "Zrozumienie i kontrola własności materii wynikających z jej struktury w skali nano",
        "Produkcja jak największej liczby chipów komputerowych",
        "Zastąpienie wszystkich materiałów makroskopowych nanomateriałami"
      ],
      "correctIndex": 0
    }
  ],
  "właściwości i zjawiska charakterystyczne nanomateriałów": [
    {
      "id": 1,
      "question": "Dlaczego nanocząstki metali są często znacznie bardziej aktywne katalitycznie niż ich odpowiedniki masowe?",
      "options": [
        "Mają znacznie większy stosunek powierzchni do objętości, więc więcej atomów jest dostępnych na powierzchni",
        "Zawsze mają wyższą temperaturę",
        "Zawierają więcej protonów w jądrze atomowym"
      ],
      "correctIndex": 0
    },
    {
      "id": 2,
      "question": "Jak zmniejszenie rozmiaru ziarna do skali nano wpływa typowo na wytrzymałość metali nanokrystalicznych?",
      "options": [
        "Wytrzymałość na rozciąganie zwykle rośnie (umocnienie Hall–Petcha) do pewnego zakresu rozmiarów",
        "Wytrzymałość zawsze maleje proporcjonalnie do 1/d",
        "Nie ma istotnego wpływu na wytrzymałość"
      ],
      "correctIndex": 0
    },
    {
      "id": 3,
      "question": "Dlaczego nanocząstki często mają niższą temperaturę topnienia niż materiał masowy?",
      "options": [
        "Duży udział atomów powierzchniowych obniża energię potrzebną do przejścia w fazę ciekłą",
        "Ponieważ grawitacja działa silniej na małe obiekty",
        "Ponieważ atomy w nanocząstce nie drgają"
      ],
      "correctIndex": 0
    },
    {
      "id": 4,
      "question": "Czym jest podstawowy efekt kwantowych kropek (quantum dots)?",
      "options": [
        "Energia stanów elektronowych zależy silnie od rozmiaru cząstki, co zmienia barwę emisji",
        "Nanocząstki stają się nadprzewodnikami w temperaturze pokojowej",
        "Elektrony przestają w nich przewodzić prąd"
      ],
      "correctIndex": 0
    },
    {
      "id": 5,
      "question": "Co oznacza termin 'gigantyczny stosunek powierzchni do objętości' w kontekście nanomateriałów?",
      "options": [
        "Znacznie większy udział atomów powierzchniowych w porównaniu z objętością niż w materiałach masowych",
        "Zależność pola powierzchni od ciśnienia atmosferycznego",
        "Wzrost gęstości materiału do wartości większej niż stal"
      ],
      "correctIndex": 0
    },
    {
      "id": 6,
      "question": "Jak rozmiar nanocząstek półprzewodnikowych wpływa na ich przerwę energetyczną (bandgap)?",
      "options": [
        "Zmniejszenie rozmiaru zwykle zwiększa efektywny bandgap (blue shift emisji)",
        "Zmniejszenie rozmiaru zawsze zmniejsza bandgap",
        "Rozmiar nie wpływa na bandgap"
      ],
      "correctIndex": 0
    },
    {
      "id": 7,
      "question": "Dlaczego nanocząstki złota mogą wykazywać czerwone lub fioletowe zabarwienie roztworu, zamiast typowej barwy złota masowego?",
      "options": [
        "Ze względu na rezonans plazmonów powierzchniowych zależny od rozmiaru i kształtu cząstek",
        "Ponieważ zmienia się konfiguracja jąder atomowych",
        "Z powodu fluorescencji jądrowej"
      ],
      "correctIndex": 0
    },
    {
      "id": 8,
      "question": "Jak zmiana rozmiaru nanocząstek magnetycznych (np. Fe3O4) do kilku nanometrów wpływa na ich zachowanie magnetyczne?",
      "options": [
        "Mogą stać się superparamagnetyczne, tracąc histerezę w temperaturze pokojowej",
        "Zawsze stają się diamagnetyczne",
        "Zawsze zwiększają remanencję i koercję"
      ],
      "correctIndex": 0
    },
    {
      "id": 9,
      "question": "Co oznacza termin 'superparamagnetyzm' w nanomateriałach magnetycznych?",
      "options": [
        "Zachowanie magnetyczne, w którym małe nanodomenty zachowują się jak pojedyncze momenty i łatwo się rozmagnesowują termicznie",
        "Stan, w którym materiał ma nieskończoną namagnesowanie",
        "Zjawisko kwantowe tylko w nadprzewodnikach"
      ],
      "correctIndex": 0
    },
    {
      "id": 10,
      "question": "Jak rozmiar nanodrutów przewodzących wpływa na ich opór elektryczny?",
      "options": [
        "Rozpraszanie elektronów na powierzchni i ziaranach może zwiększać opór w porównaniu z materiałem masowym",
        "Opór zawsze maleje, bo druty są mniejsze",
        "Rozmiar nie ma żadnego wpływu na opór"
      ],
      "correctIndex": 0
    },
    {
      "id": 11,
      "question": "Dlaczego nanocząstki są szczególnie skuteczne jako nośniki katalizatorów w reakcjach heterogenicznych?",
      "options": [
        "Zapewniają dużą, łatwo dostępną powierzchnię aktywną i mogą stabilizować stany przejściowe",
        "Mają zawsze niższą energię aktywacji niezależnie od reakcji",
        "Nie oddziałują z reagentami chemicznymi"
      ],
      "correctIndex": 0
    },
    {
      "id": 12,
      "question": "Które zjawisko mechaniczne jest szczególnie istotne dla nanocząstek w zawiesinie?",
      "options": [
        "Dominacja ruchów Browna nad sedymentacją grawitacyjną",
        "Silna deformacja plastyczna pod wpływem ciężaru własnego",
        "Brak zderzeń między cząstkami"
      ],
      "correctIndex": 0
    },
    {
      "id": 13,
      "question": "Dlaczego adhezja i tarcie międzyfazowe stają się kluczowe w nanostrukturach mechanicznych, takich jak NEMS?",
      "options": [
        "Ponieważ siły powierzchniowe (van der Waalsa, kapilarne) zaczynają dominować nad siłami objętościowymi",
        "Ponieważ grawitacja rośnie z malejącym rozmiarem",
        "Ponieważ materiały w skali nano nie przewodzą już prądu"
      ],
      "correctIndex": 0
    },
    {
      "id": 14,
      "question": "Jak zmiana porowatości w nanoporowatych materiałach wpływa na ich właściwości mechaniczne?",
      "options": [
        "Zwiększona porowatość zazwyczaj obniża moduł sprężystości i wytrzymałość",
        "Porowatość nie ma wpływu na mechanikę",
        "Większa porowatość zawsze zwiększa wytrzymałość na ściskanie"
      ],
      "correctIndex": 0
    },
    {
      "id": 15,
      "question": "Który efekt optyczny jest typowy dla małych metalicznych nanocząstek (np. Au, Ag)?",
      "options": [
        "Powierzchniowy rezonans plazmonowy",
        "Pełna refleksyjność w całym zakresie widma",
        "Zanik wszystkich przejść optycznych"
      ],
      "correctIndex": 0
    },
    {
      "id": 16,
      "question": "Dlaczego grafen wykazuje wyjątkowo wysoką ruchliwość nośników ładunku?",
      "options": [
        "Elektrony zachowują się jak fermiony Diraca poruszające się z bardzo wysoką prędkością w dwuwymiarowej sieci heksagonalnej",
        "Posiada ogromną liczbę defektów siatki, co ułatwia rozpraszanie",
        "Jest materiałem amorficznym bez struktury krystalicznej"
      ],
      "correctIndex": 0
    },
    {
      "id": 17,
      "question": "Co powoduje, że nanorurki węglowe mają bardzo wysoką wytrzymałość na rozciąganie?",
      "options": [
        "Silne wiązania kowalencyjne C–C i brak defektów w idealnie zwiniętym arkuszu grafenowym",
        "Duża ilość wtrąceń tlenowych",
        "Wysoka gęstość ziaren o przypadkowej orientacji"
      ],
      "correctIndex": 0
    },
    {
      "id": 18,
      "question": "Jak stosunek powierzchni do objętości wpływa na rozpuszczalność nanocząstek w porównaniu z proszkami mikro?",
      "options": [
        "Często przyspiesza rozpuszczanie dzięki większej powierzchni kontaktu z rozpuszczalnikiem",
        "Spowalnia rozpuszczanie, bo powierzchnia jest bardziej gładka",
        "Nie ma żadnego wpływu na rozpuszczalność"
      ],
      "correctIndex": 0
    },
    {
      "id": 19,
      "question": "W jakim sensie nanocząstki mogą wykazywać właściwości pośrednie między molekułami a materiałami masowymi?",
      "options": [
        "Posiadają dyskretne poziomy energetyczne jak molekuły, ale zawierają wiele atomów jak ciała stałe",
        "Zawsze przewodzą jak nadprzewodniki",
        "Nie wykazują żadnych właściwości kwantowych"
      ],
      "correctIndex": 0
    },
    {
      "id": 20,
      "question": "Jak zmiana wielkości nanocząstek magnetycznych wpływa na temperaturę blokowania (blocking temperature)?",
      "options": [
        "Mniejsze cząstki mają zwykle niższą temperaturę blokowania, łatwiej przechodzą w stan superparamagnetyczny",
        "Temperatura blokowania jest niezależna od rozmiaru",
        "Większe cząstki zawsze mają niższą temperaturę blokowania"
      ],
      "correctIndex": 0
    },
    {
      "id": 21,
      "question": "Dlaczego nanocząstki mogą być bardziej toksyczne niż większe cząstki tego samego materiału?",
      "options": [
        "Lepsza penetracja barier biologicznych i większa reaktywność powierzchniowa",
        "Zawsze mają mniejszą zdolność do przechodzenia przez błony",
        "Zawsze są elektrycznie obojętne"
      ],
      "correctIndex": 0
    },
    {
      "id": 22,
      "question": "Co oznacza termin 'quantum confinement' w nanostrukturach półprzewodnikowych?",
      "options": [
        "Ograniczenie ruchu nośników ładunku w jednym lub więcej wymiarach do rozmiaru porównywalnego z długością fali de Broglie’a",
        "Ograniczenie próbki w niewielkim naczyniu laboratoryjnym",
        "Zamrożenie drgań sieci krystalicznej"
      ],
      "correctIndex": 0
    },
    {
      "id": 23,
      "question": "Dlaczego cienkie nanowarstwy mogą wykazywać większą twardość niż materiał masowy o tej samej chemii?",
      "options": [
        "Ograniczenie rozwoju dyslokacji i umocnienie przez rozdrobnienie ziarna",
        "Obecność wielu porów makroskopowych",
        "Niższa gęstość atomów w warstwie"
      ],
      "correctIndex": 0
    },
    {
      "id": 24,
      "question": "Jak zmniejszenie rozmiaru cząstek katalizatora wpływa na jego selektywność reakcji?",
      "options": [
        "Może zmienić selektywność poprzez zmianę dominujących facetów krystalograficznych i miejsc aktywnych",
        "Nie ma żadnego wpływu, decyduje tylko temperatura",
        "Zawsze zmniejsza selektywność do zera"
      ],
      "correctIndex": 0
    },
    {
      "id": 25,
      "question": "Który z poniższych efektów optycznych jest typowy dla nanoporowatych materiałów dielektrycznych?",
      "options": [
        "Zmiana efektywnego współczynnika załamania i rozpraszania, prowadząca do matowych lub opalizujących barw",
        "Powstawanie wyłącznie lustrzanych odbić",
        "Pełna przezroczystość niezależnie od porowatości"
      ],
      "correctIndex": 0
    },
    {
      "id": 26,
      "question": "Jak w skali nano zmienia się relatywne znaczenie sił van der Waalsa w porównaniu z grawitacją?",
      "options": [
        "Siły van der Waalsa stają się dominujące nad grawitacją",
        "Grawitacja staje się dominująca nad siłami powierzchniowymi",
        "Oba typy sił maleją do zera"
      ],
      "correctIndex": 0
    },
    {
      "id": 27,
      "question": "Dlaczego nanocząstki mogą wykazywać intensywną fluorescencję, nawet jeśli materiał masowy jest słabo świecący?",
      "options": [
        "Zmiana gęstości stanów i zakazanych przejść radiacyjnych dzięki kwantowemu uwięzieniu",
        "Obniżenie temperatury topnienia",
        "Zwiększona przewodność cieplna"
      ],
      "correctIndex": 0
    },
    {
      "id": 28,
      "question": "Jak zachowują się właściwości optyczne grafenu przy zwiększaniu liczby warstw?",
      "options": [
        "Transmisja maleje, a struktura pasmowa zbliża się do grafitu trójwymiarowego",
        "Transmisja rośnie, a materiał staje się przezroczysty jak szkło",
        "Własności optyczne nie zmieniają się z liczbą warstw"
      ],
      "correctIndex": 0
    },
    {
      "id": 29,
      "question": "Co dzieje się z przewodnictwem protonowym w nanoporowatych membranach polimerowych przy zwiększeniu stopnia uwodnienia i liczby kanałów nano?",
      "options": [
        "Przewodnictwo protonowe zazwyczaj rośnie dzięki ciągłym ścieżkom przewodzącym",
        "Przewodnictwo zawsze maleje z powodu większej porowatości",
        "Zostaje całkowicie wyłączone"
      ],
      "correctIndex": 0
    },
    {
      "id": 30,
      "question": "Dlaczego nanoziarna w polikrystalicznym materiale mogą zwiększyć odporność na pełzanie w niskiej temperaturze, ale ją pogorszyć w wysokiej?",
      "options": [
        "W wysokiej temperaturze dyfuzja po granicach ziaren przyspiesza pełzanie, a przy niskiej granice działają jak bariery dla dyslokacji",
        "Ponieważ nanoziarna są zawsze amorficzne",
        "Ponieważ zmienia się liczba protonów w jądrze"
      ],
      "correctIndex": 0
    },
    {
      "id": 31,
      "question": "Jak zmiana rozmiaru porów w materiałach mezoporowatych wpływa na zjawiska międzyfazowe, takie jak kondensacja kapilarna?",
      "options": [
        "Mniejsze pory sprzyjają kondensacji przy niższych ciśnieniach względnych dzięki efektom Laplace’a",
        "Rozmiar porów nie wpływa na kondensację",
        "Większe pory zawsze kondensują przy niższym ciśnieniu"
      ],
      "correctIndex": 0
    },
    {
      "id": 32,
      "question": "Dlaczego nanocząstki często wykazują większą aktywność fotokatalityczną niż klasyczne pigmenty tlenkowe?",
      "options": [
        "Więcej miejsc aktywnych na powierzchni i krótsza droga dyfuzji nośników w objętości",
        "Mają zawsze niższy bandgap niż materiał masowy",
        "Nie absorbują światła"
      ],
      "correctIndex": 0
    },
    {
      "id": 33,
      "question": "Jak nano‑skalowa chropowatość powierzchni wpływa na zwilżalność?",
      "options": [
        "Może wzmacniać zarówno hydrofobowość, jak i hydrofilowość w zależności od chemii powierzchni (modele Wenzla/Cassie‑Baxtera)",
        "Zawsze zmniejsza kąt zwilżania do zera",
        "Nie ma wpływu na zwilżalność"
      ],
      "correctIndex": 0
    },
    {
      "id": 34,
      "question": "Dlaczego cienkie nanowarstwy tlenkowe mogą wykazywać bariery dyfuzyjne lepsze niż grube powłoki makroskopowe?",
      "options": [
        "Mogą być bardziej jednorodne i wolne od mikropęknięć, a krótsza droga dyfuzji pozwala lepiej kontrolować defekty",
        "Ponieważ mają większą liczbę porów makroskopowych",
        "Bo łatwiej odspajają się od podłoża"
      ],
      "correctIndex": 0
    },
    {
      "id": 35,
      "question": "W jaki sposób nanocząstki magnetyczne wykorzystywane są w separacji magnetycznej?",
      "options": [
        "Mają silny moment magnetyczny na jednostkę objętości i można je szybko przeciągać polem magnetycznym między fazami",
        "Wytwarzają pole grawitacyjne",
        "Zmieniają temperaturę roztworu bez udziału pola"
      ],
      "correctIndex": 0
    },
    {
      "id": 36,
      "question": "Dlaczego w nanokompozytach polimerowych nawet niewielka ilość nanonapełniacza może znacząco zwiększyć moduł sprężystości?",
      "options": [
        "Silne oddziaływania międzyfazowe i ogromna powierzchnia kontaktu pozwalają efektywnie przenosić naprężenia",
        "Ponieważ nanonapełniacz zawsze ma wyższą gęstość",
        "Ponieważ tworzy makropory zwiększające objętość"
      ],
      "correctIndex": 0
    },
    {
      "id": 37,
      "question": "Co oznacza termin 'perkolacja' w kontekście przewodzących nanonapełniaczy w matrycy izolującej?",
      "options": [
        "Powstanie ciągłej sieci przewodzącej po przekroczeniu krytycznego stężenia napełniacza",
        "Całkowite rozpuszczenie napełniacza w matrycy",
        "Zanik przewodzenia przy wysokim stężeniu"
      ],
      "correctIndex": 0
    },
    {
      "id": 38,
      "question": "Dlaczego nanocząstki metaliczne rozpraszają światło silniej niż duże cząstki o tej samej objętości masy?",
      "options": [
        "Rozmiar porównywalny z długością fali i efekty plazmonowe zwiększają rozpraszanie",
        "Ponieważ mają mniejszą polaryzowalność",
        "Ponieważ nie absorbują żadnego promieniowania"
      ],
      "correctIndex": 0
    },
    {
      "id": 39,
      "question": "Jak rozmiar porów w membranach nanofiltracyjnych wpływa na selektywność transportu?",
      "options": [
        "Rozmiary porów zbliżone do wielkości cząsteczek umożliwiają selektywne odrzucanie/transport na podstawie zjawisk sitowych i międzyfazowych",
        "Większe pory zawsze zwiększają selektywność",
        "Rozmiar porów nie ma znaczenia, decyduje tylko ciśnienie"
      ],
      "correctIndex": 0
    },
    {
      "id": 40,
      "question": "Co powoduje, że nanocząstki węglowe (np. carbon dots) wykazują często silną fotoluminescencję?",
      "options": [
        "Połączenie efektów rozmiarowych, defektów powierzchni i grup funkcyjnych tworzących poziomy emisyjne",
        "Brak jakichkolwiek defektów",
        "Wyłącznie obecność atomów metali szlachetnych"
      ],
      "correctIndex": 0
    },
    {
      "id": 41,
      "question": "Dlaczego nanocząstki ferromagnetyczne powyżej pewnego rozmiaru tracą superparamagnetyzm?",
      "options": [
        "Mogą tworzyć wielodomenowe ziarna z istotną energią barier magnetycznych i histerezą",
        "Zawsze przechodzą w stan diamagnetyczny",
        "Ponieważ temperatura Curie rośnie powyżej temperatury pokojowej"
      ],
      "correctIndex": 0
    },
    {
      "id": 42,
      "question": "Jak efekt tunelowania elektronów ujawnia się w cienkich barierach tlenkowych o grubości kilku nanometrów?",
      "options": [
        "Elektrony mogą przenikać przez barierę mimo klasycznie niewystarczającej energii, co prowadzi do prądu tunelowego",
        "Przewodnictwo całkowicie zanika",
        "Bariera staje się idealnym izolantem bez żadnego prądu"
      ],
      "correctIndex": 0
    },
    {
      "id": 43,
      "question": "Dlaczego efekty międzyfazowe są krytyczne w nanokompozytach polimer–nanonapełniacz?",
      "options": [
        "Bo główna część objętości polimeru znajduje się w pobliżu powierzchni napełniacza i jego właściwości dominują zachowanie makroskopowe",
        "Ponieważ fazy nie wchodzą ze sobą w żadne interakcje",
        "Ponieważ napełniacz znajduje się wyłącznie w rdzeniu próbki"
      ],
      "correctIndex": 0
    },
    {
      "id": 44,
      "question": "Jak obecność nanocząstek może wpływać na przewodnictwo cieplne cieczy (tzw. nanofluids)?",
      "options": [
        "Może zwiększać przewodnictwo cieplne dzięki lepszemu transportowi energii przez cząstki i zjawiskom międzyfazowym",
        "Zawsze zmniejsza przewodnictwo cieplne",
        "Nie zmienia przewodnictwa cieplnego cieczy"
      ],
      "correctIndex": 0
    },
    {
      "id": 45,
      "question": "Który efekt mechaniczny jest charakterystyczny dla bardzo cienkich nanobłon, np. membran grafenowych?",
      "options": [
        "Bardzo wysoka wytrzymałość przy jednocześnie łatwym falowaniu i pofałdowaniach z powodu małej sztywności na zginanie",
        "Całkowita sztywność bez możliwości odkształceń",
        "Wyłącznie sprężystość lepka"
      ],
      "correctIndex": 0
    },
    {
      "id": 46,
      "question": "W jaki sposób zwiększona gęstość stanów powierzchniowych w nanocząstkach półprzewodnikowych może wpływać na ich przewodnictwo?",
      "options": [
        "Pułapki powierzchniowe mogą zmniejszać ruchliwość i czas życia nośników, obniżając przewodnictwo",
        "Zawsze zwiększa przewodnictwo bez strat",
        "Nie ma żadnego wpływu"
      ],
      "correctIndex": 0
    },
    {
      "id": 47,
      "question": "Jak zmiana rozmiaru krystalitów wpływa na szerokość pików w dyfrakcji rentgenowskiej XRD?",
      "options": [
        "Mniejsze krystality powodują poszerzenie pików (efekt Scherrera)",
        "Nie ma żadnego wpływu na szerokość pików",
        "Większe krystality zawsze dają szersze piki"
      ],
      "correctIndex": 0
    },
    {
      "id": 48,
      "question": "Dlaczego nanocząstki są skutecznymi ośrodkami rozpraszania w farbach i powłokach matowych?",
      "options": [
        "Ich rozmiar porównywalny z długością fali światła i wysokie kontrasty współczynników załamania powodują silne rozpraszanie",
        "Ponieważ nie mają żadnego współczynnika załamania",
        "Ponieważ pochłaniają całe światło bez rozpraszania"
      ],
      "correctIndex": 0
    },
    {
      "id": 49,
      "question": "Jak obecność nanocząstek węglowych w kompozycie może wpływać na ekranowanie elektromagnetyczne (EMI shielding)?",
      "options": [
        "Tworzą sieci przewodzące i powierzchnie odbijające, które pochłaniają i odbijają fale EM",
        "Zmniejszają przewodność, co pogarsza ekranowanie",
        "Nie wpływają na własności elektromagnetyczne kompozytu"
      ],
      "correctIndex": 0
    },
    {
      "id": 50,
      "question": "Dlaczego w nanoskali istotna staje się fluktuacja liczby atomów i cząstek w małych objętościach?",
      "options": [
        "Ponieważ niewielka liczba cząstek oznacza, że statystyczne fluktuacje mają duży względny wpływ na własności lokalne",
        "Ponieważ atomy przestają istnieć w małych objętościach",
        "Ponieważ gęstość masy staje się nieskończona"
      ],
      "correctIndex": 0
    }
  ],
  "zastosowania nanotechnologii": [
    {
      "id": 1,
      "question": "Jaka jest jedna z głównych zalet nanonośników leków w terapii nowotworów?",
      "options": [
        "Umożliwiają celowane dostarczanie leku do guza przy mniejszej toksyczności dla zdrowych tkanek",
        "Zwiększają przypadkowe odkładanie leku w całym organizmie",
        "Uniemożliwiają jednoczesne stosowanie kilku leków"
      ],
      "correctIndex": 0
    },
    {
      "id": 2,
      "question": "Do czego wykorzystuje się nanocząstki żelaza lub tlenku żelaza w medycynie obrazowej?",
      "options": [
        "Jako środki kontrastujące w obrazowaniu MRI",
        "Jako źródło promieniowania gamma w PET",
        "Wyłącznie jako nośniki tlenu w krwiobiegu"
      ],
      "correctIndex": 0
    },
    {
      "id": 3,
      "question": "Liposomy i nanonośniki polimerowe są najczęściej stosowane jako:",
      "options": [
        "Systemy kontrolowanego uwalniania leków",
        "Materiały konstrukcyjne w mostach",
        "Wyłączne źródło energii w ogniwach paliwowych"
      ],
      "correctIndex": 0
    },
    {
      "id": 4,
      "question": "Jaką rolę pełnią nanocząstki złota w terapii fototermicznej?",
      "options": [
        "Pochłaniają światło i przekształcają je w ciepło lokalnie niszcząc komórki nowotworowe",
        "Działają tylko jako pasywny materiał wypełniający",
        "Stają się źródłem promieniowania rentgenowskiego"
      ],
      "correctIndex": 0
    },
    {
      "id": 5,
      "question": "Dlaczego nanocząstki srebra są szeroko używane w opatrunkach i powłokach medycznych?",
      "options": [
        "Posiadają silne działanie przeciwbakteryjne dzięki uwalnianiu jonów Ag+",
        "Zwiększają przewodność elektryczną skóry",
        "Zapewniają wyłącznie efekt barwiący bez aktywności biologicznej"
      ],
      "correctIndex": 0
    },
    {
      "id": 6,
      "question": "Jak nanotechnologia poprawia sprawność ogniw słonecznych?",
      "options": [
        "Poprzez zastosowanie nanostrukturalnych warstw światłochłonnych i antyrefleksyjnych zwiększających absorpcję światła",
        "Wyłącznie przez zmianę koloru ogniw",
        "Poprzez użycie grubszych warstw krzemu bez zmian struktury"
      ],
      "correctIndex": 0
    },
    {
      "id": 7,
      "question": "Jaką funkcję pełnią nanorurki węglowe w kompozytowych elektrodach baterii i superkondensatorów?",
      "options": [
        "Poprawiają przewodnictwo elektryczne i zapewniają sieć transportu ładunku",
        "Służą jako źródło elektrolitu ciekłego",
        "Działają wyłącznie jako barwnik"
      ],
      "correctIndex": 0
    },
    {
      "id": 8,
      "question": "Jak nanofiltry są wykorzystywane w uzdatnianiu wody?",
      "options": [
        "Usuwają jony, metale ciężkie i mikro‑zanieczyszczenia dzięki porom o rozmiarach nanometrowych",
        "Dodają wodzie nanocząstki metali w celu poprawy smaku",
        "Zwiększają wyłącznie temperaturę wody"
      ],
      "correctIndex": 0
    },
    {
      "id": 9,
      "question": "Jak nanocząstki TiO2 stosuje się w samooczyszczających się powłokach i szybach?",
      "options": [
        "Jako fotokatalizator rozkładający zanieczyszczenia organiczne pod wpływem UV",
        "Jako izolator termiczny zatrzymujący całkowicie przewodnictwo cieplne",
        "Jako wyłącznie biały pigment bez dodatkowych funkcji"
      ],
      "correctIndex": 0
    },
    {
      "id": 10,
      "question": "Jaką zaletę daje zastosowanie nanocząstek ZnO i TiO2 w kremach przeciwsłonecznych?",
      "options": [
        "Skuteczne blokowanie promieniowania UV przy jednoczesnej przezroczystości preparatu",
        "Zabarwienie skóry na trwały biały kolor",
        "Zwiększenie przepuszczalności UV przez skórę"
      ],
      "correctIndex": 0
    },
    {
      "id": 11,
      "question": "Jak nanocząstki stosuje się w katalizatorach samochodowych?",
      "options": [
        "Zwiększają powierzchnię aktywną katalizatora, poprawiając redukcję NOx i utlenianie CO/HC",
        "Służą tylko jako materiał konstrukcyjny obudowy katalizatora",
        "Zastępują całkowicie metale szlachetne"
      ],
      "correctIndex": 0
    },
    {
      "id": 12,
      "question": "Jak nanocząstki wykorzystywane są w czujnikach chemicznych i biosensorach?",
      "options": [
        "Zwiększają czułość i selektywność dzięki dużej powierzchni i właściwościom elektrycznym/opt., umożliwiając detekcję bardzo niskich stężeń",
        "Pełnią rolę wyłącznie mechanicznego wzmocnienia obudowy czujnika",
        "Służą tylko jako barwnik wskaźnikowy"
      ],
      "correctIndex": 0
    },
    {
      "id": 13,
      "question": "Które zastosowanie nanotechnologii dotyczy poprawy własności mechanicznych materiałów konstrukcyjnych?",
      "options": [
        "Nanokompozyty polimerowe i metalowe z nanonapełniaczami wzmacniającymi",
        "Wyłącznie stosowanie grubych powłok lakierniczych",
        "Zastąpienie wszystkich dodatków mikro wypełniaczami"
      ],
      "correctIndex": 0
    },
    {
      "id": 14,
      "question": "Jak nanocząstki stosuje się w tekstyliach funkcyjnych?",
      "options": [
        "Nadają właściwości antybakteryjne, hydrofobowe lub chroniące przed UV przy zachowaniu miękkości tkaniny",
        "Służą tylko do zmiany koloru włókien",
        "Zawsze zwiększają palność tkanin"
      ],
      "correctIndex": 0
    },
    {
      "id": 15,
      "question": "Dlaczego nanocząstki srebra stosuje się w lodówkach, pralkach i filtrach powietrza?",
      "options": [
        "Redukują rozwój mikroorganizmów na powierzchniach roboczych",
        "Zmniejszają zużycie energii elektrycznej przez urządzenie dzięki nadprzewodnictwu",
        "Stabilizują kolor elementów plastikowych"
      ],
      "correctIndex": 0
    },
    {
      "id": 16,
      "question": "Jak nanotechnologia wspiera rozwój leków o przedłużonym uwalnianiu?",
      "options": [
        "Nanonośniki kontrolują szybkość dyfuzji leku i mogą reagować na bodźce (pH, temperatura)",
        "Leki są po prostu rozpuszczane w większej ilości wody",
        "Zmniejsza się dawkę bez zmiany formy leku"
      ],
      "correctIndex": 0
    },
    {
      "id": 17,
      "question": "Jaką rolę pełnią nanocząstki w nowoczesnych materiałach opakowaniowych do żywności?",
      "options": [
        "Poprawiają barierowość dla tlenu/wody i mogą mieć działanie przeciwdrobnoustrojowe",
        "Zmniejszają wytrzymałość mechaniczną opakowania",
        "Nadają wyłącznie efekt fluorescencyjny"
      ],
      "correctIndex": 0
    },
    {
      "id": 18,
      "question": "W jaki sposób nanotechnologia pomaga w usuwaniu zanieczyszczeń z wody?",
      "options": [
        "Nanoadsorbenty i nanofiltry wiążą metale ciężkie, barwniki i mikro‑zanieczyszczenia organiczne",
        "Nanocząstki zwiększają rozpuszczalność wszystkich zanieczyszczeń",
        "Zastępują proces filtracji mechanicznym mieszaniem"
      ],
      "correctIndex": 0
    },
    {
      "id": 19,
      "question": "Jak nanomateriały wykorzystywane są w wychwycie CO2?",
      "options": [
        "Jako porowate adsorbenty o wysokiej pojemności sorpcyjnej",
        "Tylko jako barwnik do oznaczania obecności CO2",
        "Nie mają zastosowania w tym obszarze"
      ],
      "correctIndex": 0
    },
    {
      "id": 20,
      "question": "Jaką rolę pełnią nanostruktury w nowoczesnych diodach LED i laserach?",
      "options": [
        "Umożliwiają lepszą kontrolę emisji światła i wydajności dzięki kwantowym studniom i kropkom",
        "Zastępują całkowicie warstwy półprzewodnikowe metalem masowym",
        "Służą tylko jako elementy chłodzące"
      ],
      "correctIndex": 0
    },
    {
      "id": 21,
      "question": "Zastosowanie nanotechnologii w diagnostyce in vitro (np. lab-on-a-chip) pozwala na:",
      "options": [
        "Szybką i czułą detekcję biomarkerów przy małej objętości próbki",
        "Zmniejszenie czułości testów w stosunku do metod klasycznych",
        "Wyłącznie powiększenie rozmiaru urządzeń diagnostycznych"
      ],
      "correctIndex": 0
    },
    {
      "id": 22,
      "question": "Jak nanosensory są wykorzystywane w rolnictwie precyzyjnym?",
      "options": [
        "Monitorują poziom wilgotności, składników odżywczych i obecność patogenów w glebie",
        "Służą tylko do oznaczania kolorów nasion",
        "Wytwarzają nawozy bezpośrednio w glebie z powietrza"
      ],
      "correctIndex": 0
    },
    {
      "id": 23,
      "question": "Jak nanotechnologia wpływa na rozwój ogniw paliwowych?",
      "options": [
        "Nanokatalizatory (np. Pt/C) zwiększają aktywność elektrochemiczną i zmniejszają ilość metali szlachetnych",
        "Zastępuje elektrolit cieczą o dużej lepkości",
        "Umożliwia pracę ogniw tylko w niskich temperaturach"
      ],
      "correctIndex": 0
    },
    {
      "id": 24,
      "question": "Jaką funkcję mogą pełnić nanocząstki w materiałach stomatologicznych (np. kompozytach wypełnieniowych)?",
      "options": [
        "Zwiększają wytrzymałość mechanicz­ną, odporność na ścieranie i estetykę",
        "Zmniejszają adhezję do zęba",
        "Nadają materiałowi przewodnictwo nadprzewodzące"
      ],
      "correctIndex": 0
    },
    {
      "id": 25,
      "question": "Jak nanocząstki wykorzystywane są w tzw. smart coatings na szybach i elewacjach?",
      "options": [
        "Nadają własności samoczyszczące, antyrefleksyjne lub regulujące przepuszczalność ciepła",
        "Zwiększają wyłącznie masę konstrukcji",
        "Sprawiają, że powierzchnia zawsze absorbuje wilgoć"
      ],
      "correctIndex": 0
    },
    {
      "id": 26,
      "question": "W jaki sposób nanotechnologia wspiera rozwój inteligentnych systemów dostarczania pestycydów?",
      "options": [
        "Nanonośniki umożliwiają kontrolowane, miejscowe uwalnianie substancji czynnych w roślinach",
        "Zawsze zwiększają toksyczność dla wszystkich organizmów",
        "Powodują samoistne rozpadanie się pestycydu w magazynie"
      ],
      "correctIndex": 0
    },
    {
      "id": 27,
      "question": "Jak nanocząstki stosuje się w materiałach przeciwkorozyjnych?",
      "options": [
        "Jako pigmenty inhibitorowe i składniki powłok barierowych blokujących dyfuzję wilgoci i jonów",
        "Wyłącznie jako barwniki dekoracyjne",
        "Jako źródło gazu ochronnego w porach powłoki"
      ],
      "correctIndex": 0
    },
    {
      "id": 28,
      "question": "Jak nanotechnologia jest wykorzystywana w systemach bezpieczeństwa żywności?",
      "options": [
        "Nanosensory i wskaźniki w inteligentnych opakowaniach monitorują świeżość i obecność patogenów",
        "Nanocząstki nadają produktom intensywniejszy kolor bez innych korzyści",
        "Zmniejszają wartość odżywczą żywności"
      ],
      "correctIndex": 0
    },
    {
      "id": 29,
      "question": "Jak nanotechnologia wspiera rozwój elastycznej elektroniki i wyświetlaczy?",
      "options": [
        "Nanoprzewodzące tusze i warstwy (np. nanodruty Ag, grafen) umożliwiają drukowane, zginane układy elektryczne",
        "Pozwala jedynie na miniaturyzację baterii",
        "Eliminuje potrzebę stosowania półprzewodników"
      ],
      "correctIndex": 0
    },
    {
      "id": 30,
      "question": "Jak nanocząstki stosuje się w materiałach do magazynowania wodoru?",
      "options": [
        "Jako porowate sorbenty lub fazy stopów tworzące wodorki o dużej pojemności",
        "Wyłącznie jako barwniki ostrzegawcze",
        "Działają tylko jako katalizatory spalania wodoru"
      ],
      "correctIndex": 0
    },
    {
      "id": 31,
      "question": "W jaki sposób nanotechnologia poprawia efektywność izolacji cieplnych?",
      "options": [
        "Nanoporowate aerogele i powłoki ograniczają przewodnictwo cieplne dzięki uwięzieniu powietrza i fal cieplnych",
        "Zwiększa przewodnictwo cieplne w celu szybkiego wyrównania temperatury",
        "Wymaga zastosowania grubych warstw metali"
      ],
      "correctIndex": 0
    },
    {
      "id": 32,
      "question": "Jak nanocząstki stosowane są w medycynie regeneracyjnej (np. inżynierii tkankowej)?",
      "options": [
        "Jako składniki scaffoldów imitujących macierz zewnątrzkomórkową i dostarczające sygnały dla komórek",
        "Wyłącznie jako kontrasty MRI",
        "Jako substytut komórek macierzystych"
      ],
      "correctIndex": 0
    },
    {
      "id": 33,
      "question": "Jak nanotechnologia pomaga w szybkim wykrywaniu chorób zakaźnych?",
      "options": [
        "Nanobiosensory i testy punktowe umożliwiają detekcję niskich stężeń patogenów w krótkim czasie",
        "Zastępuje testy laboratoryjne zwykłym badaniem wzrokowym",
        "Umożliwia tylko hodowlę bakterii"
      ],
      "correctIndex": 0
    },
    {
      "id": 34,
      "question": "Jak nanocząstki wykorzystywane są w terapii fotodynamicznej?",
      "options": [
        "Jako nośniki fotouczulaczy, które po naświetleniu generują reaktywne formy tlenu niszczące komórki",
        "Jako wyłączne źródło promieniowania X",
        "Jako izolatory elektryczne w obwodach"
      ],
      "correctIndex": 0
    },
    {
      "id": 35,
      "question": "W jaki sposób nanotechnologia jest stosowana do tworzenia powierzchni antyadhezyjnych (np. przeciw osadzaniu się lodu lub zabrudzeń)?",
      "options": [
        "Nanostrukturyzowana chropowatość i odpowiednia chemia powierzchni powodują superhydrofobowość lub oleofobowość",
        "Dodanie grubej warstwy gumy",
        "Zwiększenie przewodnictwa cieplnego metalu bazowego"
      ],
      "correctIndex": 0
    },
    {
      "id": 36,
      "question": "Jak nanocząstki mogą poprawiać właściwości mechaniczne i antybakteryjne cementu kostnego w ortopedii?",
      "options": [
        "Dodatek nano‑hydroksyapatytu lub nano‑Ag poprawia integrację z kością i ogranicza infekcje",
        "Obniżają moduł sprężystości do zera",
        "Uniemożliwiają wiązanie cementu"
      ],
      "correctIndex": 0
    },
    {
      "id": 37,
      "question": "Jakie jest typowe zastosowanie nanotechnologii w aparatach słuchowych i elektronice ubieralnej?",
      "options": [
        "Miniaturowe komponenty i nano‑akumulatory zwiększają czas pracy przy małej masie",
        "Służą tylko jako dekoracyjne elementy świecące",
        "Zastępują mikrofony głośnikami"
      ],
      "correctIndex": 0
    },
    {
      "id": 38,
      "question": "Jak nanotechnologia wspiera rozwój inteligentnych szyb w budownictwie energooszczędnym?",
      "options": [
        "Nanopowłoki reagujące na światło/temperaturę regulują przepuszczalność promieniowania cieplnego",
        "Zwiększają grubość szkła bez zmiany właściwości",
        "Umożliwiają jedynie zmianę koloru szyb"
      ],
      "correctIndex": 0
    },
    {
      "id": 39,
      "question": "Jaką funkcję pełnią nanocząstki w inteligentnych farbach antykorozyjnych do infrastruktury mostowej?",
      "options": [
        "Działają jako kapsułki samonaprawcze uwalniające inhibitor korozji w miejscu uszkodzenia powłoki",
        "Zmniejszają przyczepność farby do podłoża",
        "Zwiększają przewodność elektrochemiczną stali"
      ],
      "correctIndex": 0
    },
    {
      "id": 40,
      "question": "Zastosowanie nanotechnologii w kosmetykach do pielęgnacji skóry obejmuje m.in.:",
      "options": [
        "Nanoemulsje i nanokapsułki poprawiające przenikanie składników aktywnych",
        "Wyłącznie dodatek nanometalicznych barwników",
        "Zmniejszenie trwałości kosmetyku"
      ],
      "correctIndex": 0
    },
    {
      "id": 41,
      "question": "Jak nanocząstki stosowane są w systemach wykrywania gazów toksycznych?",
      "options": [
        "Nanostrukturalne warstwy półprzewodnikowe zmieniają przewodnictwo w obecności określonych gazów",
        "Służą tylko jako filtry mechaniczne",
        "Pochłaniają wszystkie gazy bez selektywności"
      ],
      "correctIndex": 0
    },
    {
      "id": 42,
      "question": "Jak nanotechnologia pomaga w poprawie właściwości smarów i olejów silnikowych?",
      "options": [
        "Nanododatki zmniejszają tarcie i zużycie, tworząc warstwy ochronne na powierzchniach trących",
        "Powoduje wzrost lepkości do wartości niesmarujących",
        "Zwiększa jedynie przewodność elektryczną oleju"
      ],
      "correctIndex": 0
    },
    {
      "id": 43,
      "question": "Jak nanocząstki wykorzystywane są w medycznych robotach i systemach mikro‑/nano‑manipulacji?",
      "options": [
        "Jako elementy napędzane polami magnetycznymi/elektrycznymi do precyzyjnego dostarczania leków lub zabiegów",
        "Jako pasywne wypełniacze bez funkcji",
        "Wyłącznie jako źródło energii cieplnej"
      ],
      "correctIndex": 0
    },
    {
      "id": 44,
      "question": "W jaki sposób nanotechnologia wspomaga rozwój wysokowydajnych materiałów do magazynowania energii elektrycznej?",
      "options": [
        "Nanostrukturalne elektrody zwiększają powierzchnię reakcji i skracają drogę dyfuzji jonów",
        "Zwiększają opór wewnętrzny baterii",
        "Zmniejszają liczbę cykli ładowania/rozładowania"
      ],
      "correctIndex": 0
    },
    {
      "id": 45,
      "question": "Jak nanocząstki stosuje się w systemach przeciwbiofilmowych w szpitalach?",
      "options": [
        "Jako powłoki antybakteryjne na powierzchniach sprzętu i implantów, ograniczając adhezję i wzrost biofilmu",
        "Jako składniki pożywek bakteryjnych",
        "Wyłącznie jako kontrast w obrazowaniu RTG"
      ],
      "correctIndex": 0
    },
    {
      "id": 46,
      "question": "Jak nanotechnologia jest wykorzystywana w tworzeniu papieru i kart inteligentnych (RFID, smart cards)?",
      "options": [
        "Przewodzące nanopigmenty i tusze umożliwiają drukowane anteny i obwody",
        "Nanocząstki zawsze izolują elektrycznie",
        "Służy jedynie do wybielania papieru"
      ],
      "correctIndex": 0
    },
    {
      "id": 47,
      "question": "W jaki sposób nanotechnologia może poprawić skuteczność terapii genowej?",
      "options": [
        "Nanonośniki chronią materiał genetyczny i umożliwiają jego dostarczenie do konkretnych komórek",
        "Nanocząstki zastępują całkowicie DNA pacjenta",
        "Stosuje się je jedynie do barwienia próbek"
      ],
      "correctIndex": 0
    },
    {
      "id": 48,
      "question": "Jak nanotechnologia jest stosowana w nowoczesnych materiałach budowlanych?",
      "options": [
        "Nanonapełniacze poprawiają wytrzymałość, odporność na ogień i właściwości izolacyjne betonu i kompozytów",
        "Nanocząstki służą tylko do barwienia tynków",
        "Zmniejszają trwałość konstrukcji"
      ],
      "correctIndex": 0
    },
    {
      "id": 49,
      "question": "W jaki sposób nanotechnologia wspiera rozwój biosensorów glukozy dla diabetyków?",
      "options": [
        "Nanomateriały (np. CNT, złoto) zwiększają powierzchnię elektrody i czułość enzymatycznej detekcji glukozy",
        "Umożliwia jedynie zmianę koloru obudowy glukometru",
        "Zastępuje enzymy czystym metalem"
      ],
      "correctIndex": 0
    },
    {
      "id": 50,
      "question": "Jak nanotechnologia jest wykorzystywana w systemach monitorowania środowiska?",
      "options": [
        "Nanosensory wykrywają śladowe stężenia zanieczyszczeń w powietrzu, wodzie i glebie",
        "Nanocząstki powodują większe ukrycie zanieczyszczeń",
        "Stosuje się je wyłącznie w systemach ogrzewania"
      ],
      "correctIndex": 0
    }
  ]
};
