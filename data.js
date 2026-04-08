const UI_I18N = {
    "en": {
        "title": "Nanomaterial Matchmaker",
        "version": "v2.0",
        "themeDark": "🌙 Dark Mode",
        "themeLight": "☀️ Light Mode",
        "langToggle": "🇵🇱 PL",
        "homeTitle": "Select an Intended Use Case",
        "homeDesc": "Choose your application area to start finding the best nanomaterial for your lab project.",
        "btnBackUseCases": "← Back to Use Cases",
        "btnBackPriorities": "← Back to Priorities",
        "btnBackRecs": "← Back to Recommendations",
        "priStep2": "Step 2: Set Your Priorities",
        "priAdjust": "Adjust the sliders below based on your project constraints for",
        "btnGetRecs": "Get Recommendations",
        "sumTitle": "Your Recommendations",
        "sumDesc": "Ranked material classes for",
        "sumBasedOn": "based on your priorities.",
        "btnCompareSelected": "Compare Selected",
        "compareLimitHelper": "Select up to 2 materials to compare.",
        "match": "Match",
        "btnViewDetails": "View Details",
        "btnCompareToggleAdd": "+ Compare",
        "btnCompareToggleActive": "✓ Selected",
        "alertCompareLimit": "You can only compare 2 materials at a time.",
        "resWhy": "Why this material?",
        "resProperties": "Most Important Target Properties",
        "resMethods": "Recommended Characterization Methods",
        "resPath": "Experimental Path",
        "resStrengths": "Key Strengths",
        "resRisks": "Key Risks & Limitations",
        "resQuestion": "Example Student Question",
        "compTitle": "Material Comparison",
        "compStrengths": "Strengths",
        "compLimitations": "Limitations",
        "compRatings": "Dimension Ratings"
    },
    "pl": {
        "title": "Kreator Nanomateriałów",
        "version": "v2.0",
        "themeDark": "🌙 Tryb Ciemny",
        "themeLight": "☀️ Tryb Jasny",
        "langToggle": "🇬🇧 EN",
        "homeTitle": "Wybierz Zamierzone Zastosowanie",
        "homeDesc": "Wybierz obszar zastosowań, aby rozpocząć poszukiwania najlepszego nanomateriału do swojego projektu.",
        "btnBackUseCases": "← Powrót do zastosowań",
        "btnBackPriorities": "← Powrót do priorytetów",
        "btnBackRecs": "← Powrót do rekomendacji",
        "priStep2": "Krok 2: Ustaw Priorytety",
        "priAdjust": "Dostosuj suwaki poniżej w oparciu o ograniczenia projektu dla",
        "btnGetRecs": "Uzyskaj rekomendacje",
        "sumTitle": "Twoje Rekomendacje",
        "sumDesc": "Ranking klas materiałów dla",
        "sumBasedOn": "na podstawie Twoich priorytetów.",
        "btnCompareSelected": "Porównaj wybrane",
        "compareLimitHelper": "Wybierz do 2 materiałów do porównania.",
        "match": "Dopasowanie",
        "btnViewDetails": "Zobacz szczegóły",
        "btnCompareToggleAdd": "+ Porównaj",
        "btnCompareToggleActive": "✓ Wybrane",
        "alertCompareLimit": "Możesz porównać tylko 2 materiały jednocześnie.",
        "resWhy": "Dlaczego ten materiał?",
        "resProperties": "Najważniejsze właściwości docelowe",
        "resMethods": "Zalecane metody charakteryzacji",
        "resPath": "Ścieżka eksperymentalna",
        "resStrengths": "Główne zalety",
        "resRisks": "Kluczowe ryzyka i ograniczenia",
        "resQuestion": "Przykładowe pytanie studenta",
        "compTitle": "Porównanie Materiałów",
        "compStrengths": "Zalety",
        "compLimitations": "Ograniczenia",
        "compRatings": "Oceny wymiarów"
    }
};

const APP_DATA = {
    "en": [
        {
            "id": "sensor",
            "title": "Sensor",
            "description": "Nanomaterials used for detecting gases, biological molecules, or physical changes via electrical, optical, or mechanical signals.",
            "dimensions": [
                {
                    "id": "sensitivity",
                    "label": "High Sensitivity",
                    "opposite": "Wide Range"
                },
                {
                    "id": "stability",
                    "label": "Long-term Stability",
                    "opposite": "Fast Response"
                },
                {
                    "id": "cost",
                    "label": "Low Cost / Scalable",
                    "opposite": "Advanced Properties"
                }
            ],
            "materials": [
                {
                    "id": "sensor_graphene",
                    "name": "Graphene-based materials",
                    "why": "High surface-to-volume ratio and excellent electrical conductivity allow for extreme sensitivity.",
                    "strengths": [
                        "Extreme sensitivity",
                        "Fast response time",
                        "High electrical conductivity"
                    ],
                    "limitations": [
                        "Prone to baseline drift",
                        "Hard to achieve high selectivity without complex functionalization"
                    ],
                    "ratings": {
                        "sensitivity": 5,
                        "stability": 2,
                        "cost": 3
                    },
                    "experimentalPath": [
                        "Synthesize or acquire graphene dispersion and spin-coat onto interdigitated electrodes.",
                        "Perform Raman Spectroscopy to confirm few-layer structure and defect density.",
                        "Run basic I-V curves to verify baseline conductivity.",
                        "Expose to target analyte in a controlled chamber and measure resistance change over time."
                    ],
                    "externalId": {
                        "type": "PubChem",
                        "id": null
                    },
                    "propertyScores": [
                        5,
                        5,
                        2,
                        3
                    ]
                },
                {
                    "id": "sensor_metal_oxides",
                    "name": "Metal oxides (e.g., ZnO, SnO2)",
                    "why": "Surface oxygen vacancies change conductivity when interacting with target gases.",
                    "strengths": [
                        "High stability",
                        "Low cost",
                        "Well-understood gas sensing mechanisms"
                    ],
                    "limitations": [
                        "Often requires high operating temperatures (200-400°C)"
                    ],
                    "ratings": {
                        "sensitivity": 4,
                        "stability": 5,
                        "cost": 5
                    },
                    "experimentalPath": [
                        "Synthesize nanoparticles via sol-gel or hydrothermal methods.",
                        "Use XRD to confirm crystal phase and crystallite size.",
                        "Deposit on heated substrates and test sensing response at varying temperatures.",
                        "Evaluate cross-sensitivity with humidity and interfering gases."
                    ],
                    "externalId": {
                        "type": "MaterialsProject",
                        "id": null
                    },
                    "propertyScores": [
                        3,
                        3,
                        4,
                        5
                    ]
                },
                {
                    "id": "sensor_cnt",
                    "name": "Carbon Nanotube (CNT) composites",
                    "why": "High electrical conductivity and easily functionalized surfaces for selective sensing.",
                    "strengths": [
                        "Excellent mechanical flexibility",
                        "Good room-temperature operation"
                    ],
                    "limitations": [
                        "Difficult to disperse uniformly in composites",
                        "Batch-to-batch variation"
                    ],
                    "ratings": {
                        "sensitivity": 4,
                        "stability": 3,
                        "cost": 3
                    },
                    "experimentalPath": [
                        "Functionalize CNTs with specific receptor molecules (e.g., via acid treatment).",
                        "Verify functionalization using FTIR and Raman Spectroscopy.",
                        "Integrate into a polymer matrix and measure baseline electrochemical impedance (EIS).",
                        "Test sensor response and recovery times upon cyclic exposure."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        4,
                        4,
                        4,
                        3
                    ]
                }
            ],
            "targetProperties": [
                "Conductivity",
                "Specific Surface Area",
                "Selectivity",
                "Stability"
            ],
            "methods": [
                {
                    "name": "Raman Spectroscopy",
                    "why": "Identifies defects and number of layers in carbon materials."
                },
                {
                    "name": "SEM/AFM",
                    "why": "Visualizes surface morphology and sensor film thickness."
                },
                {
                    "name": "EIS (Electrochemical Impedance Spectroscopy)",
                    "why": "Measures changes in electrical resistance/capacitance."
                },
                {
                    "name": "XRD",
                    "why": "Confirms crystal structure of metal oxides."
                }
            ],
            "tradeOffs": "High sensitivity often comes at the cost of poor selectivity. Sensor drift over time is common.",
            "studentQuestions": "How do I attach specific receptors to the surface without destroying conductivity?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.55a11 11 0 0 1 14.08 0\"/><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"/><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"/><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"/></svg>"
        },
        {
            "id": "biomaterial",
            "title": "Biomaterial",
            "description": "Nanomaterials designed to interact with biological systems for medical purposes, such as implants or tissue engineering.",
            "dimensions": [
                {
                    "id": "biocompatibility",
                    "label": "Bioactivity / Integration",
                    "opposite": "Inertness"
                },
                {
                    "id": "strength",
                    "label": "Mechanical Strength",
                    "opposite": "High Porosity"
                },
                {
                    "id": "ease",
                    "label": "Ease of Synthesis",
                    "opposite": "Complex Functionalization"
                }
            ],
            "materials": [
                {
                    "id": "bio_ha",
                    "name": "Hydroxyapatite (HA) nanoparticles",
                    "why": "Chemically similar to bone mineral, promoting excellent osteoconductivity.",
                    "strengths": [
                        "Excellent osteoconductivity",
                        "Promotes bone ingrowth"
                    ],
                    "limitations": [
                        "Brittle",
                        "Poor load-bearing capability on its own"
                    ],
                    "ratings": {
                        "biocompatibility": 5,
                        "strength": 2,
                        "ease": 4
                    },
                    "experimentalPath": [
                        "Precipitate HA nanoparticles using calcium and phosphate precursors.",
                        "Confirm phase purity and crystallinity using XRD.",
                        "Perform simulated body fluid (SBF) tests for 7-14 days.",
                        "Use SEM to observe apatite layer formation on the surface."
                    ],
                    "externalId": {
                        "type": "MaterialsProject",
                        "id": null
                    },
                    "propertyScores": [
                        5,
                        4,
                        2,
                        4
                    ]
                },
                {
                    "id": "bio_ceramics",
                    "name": "Bioactive ceramics (e.g., Bioglass)",
                    "why": "Forms a chemical bond with living tissue.",
                    "strengths": [
                        "Rapid surface reaction in vivo",
                        "Can stimulate gene expression for bone repair"
                    ],
                    "limitations": [
                        "Difficult to form into complex shapes without losing bioactivity"
                    ],
                    "ratings": {
                        "biocompatibility": 5,
                        "strength": 3,
                        "ease": 3
                    },
                    "experimentalPath": [
                        "Melt-quench or sol-gel synthesize the glass composition.",
                        "Characterize ion release kinetics in PBS over time.",
                        "Assess in vitro bioactivity via SBF immersion.",
                        "Run basic cell viability (MTT) assays with osteoblast lineages."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        5,
                        3,
                        3,
                        5
                    ]
                },
                {
                    "id": "bio_polymers",
                    "name": "Polymer nanocomposites",
                    "why": "Provides a tunable scaffold matrix mimicking the extracellular matrix.",
                    "strengths": [
                        "Highly tunable degradation rates",
                        "Flexible and resilient"
                    ],
                    "limitations": [
                        "Possible inflammatory response to degradation byproducts"
                    ],
                    "ratings": {
                        "biocompatibility": 3,
                        "strength": 4,
                        "ease": 5
                    },
                    "experimentalPath": [
                        "Electrospin or cast polymer solutions mixed with nanofillers.",
                        "Measure mechanical properties (tensile testing) and contact angle.",
                        "Evaluate degradation rate in enzymatic solutions over weeks.",
                        "Perform cell attachment and proliferation studies using fluorescence microscopy."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        3,
                        5,
                        4,
                        3
                    ]
                }
            ],
            "targetProperties": [
                "Biocompatibility",
                "Porosity",
                "Mechanical strength",
                "Surface chemistry"
            ],
            "methods": [
                {
                    "name": "FTIR",
                    "why": "Identifies functional groups and confirms surface modifications."
                },
                {
                    "name": "SEM",
                    "why": "Observes pore size and cell attachment morphology."
                },
                {
                    "name": "Contact Angle",
                    "why": "Determines hydrophilicity, crucial for protein adsorption."
                },
                {
                    "name": "In vitro assays (e.g., MTT)",
                    "why": "Tests cell viability and cytotoxicity."
                }
            ],
            "tradeOffs": "Materials with high porosity for tissue ingrowth often have compromised mechanical strength.",
            "studentQuestions": "Will these nanoparticles agglomerate in biological fluids?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\"/><path d=\"M12 12v6\"/><path d=\"M9 15h6\"/></svg>"
        },
        {
            "id": "coating",
            "title": "Coating",
            "description": "Nanoscale layers applied to surfaces to enhance properties like hardness, corrosion resistance, or self-cleaning.",
            "dimensions": [
                {
                    "id": "hardness",
                    "label": "Hardness & Wear",
                    "opposite": "Flexibility"
                },
                {
                    "id": "protection",
                    "label": "Corrosion Protection",
                    "opposite": "Optical Transparency"
                },
                {
                    "id": "cost",
                    "label": "Low Cost / Easy App",
                    "opposite": "Vacuum Processes"
                }
            ],
            "materials": [
                {
                    "id": "coat_oxide",
                    "name": "Oxide coatings (e.g., TiO2, SiO2)",
                    "why": "Provides self-cleaning (photocatalytic) or anti-reflective properties.",
                    "strengths": [
                        "Excellent optical properties",
                        "Self-cleaning capabilities (TiO2)"
                    ],
                    "limitations": [
                        "Prone to cracking under mechanical stress",
                        "Requires UV for photocatalysis"
                    ],
                    "ratings": {
                        "hardness": 3,
                        "protection": 4,
                        "cost": 4
                    },
                    "experimentalPath": [
                        "Synthesize sol and dip-coat or spin-coat onto substrates.",
                        "Calcination step to form crystalline phase.",
                        "Measure thickness and roughness using Ellipsometry or Profilometry.",
                        "Test self-cleaning via dye degradation under UV light."
                    ],
                    "externalId": {
                        "type": "MaterialsProject",
                        "id": null
                    },
                    "propertyScores": [
                        4,
                        3,
                        3,
                        4,
                        5
                    ]
                },
                {
                    "id": "coat_ceramic",
                    "name": "Ceramic thin films (e.g., TiN, SiC)",
                    "why": "Offers extreme hardness and wear resistance for cutting tools.",
                    "strengths": [
                        "Extreme hardness",
                        "High thermal stability"
                    ],
                    "limitations": [
                        "Expensive deposition methods (PVD/CVD)",
                        "Poor adhesion if thermal mismatch exists"
                    ],
                    "ratings": {
                        "hardness": 5,
                        "protection": 5,
                        "cost": 1
                    },
                    "experimentalPath": [
                        "Deposit film using magnetron sputtering or CVD.",
                        "Perform nanoindentation to extract hardness and elastic modulus.",
                        "Conduct scratch testing to evaluate critical adhesion load.",
                        "Cross-sectional SEM to inspect film-substrate interface."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        5,
                        5,
                        4,
                        5,
                        3
                    ]
                },
                {
                    "id": "coat_polymer",
                    "name": "Polymer nanocomposite coatings",
                    "why": "Combines flexibility with barrier properties against moisture or oxygen.",
                    "strengths": [
                        "Highly flexible",
                        "Easy to apply over large/complex areas"
                    ],
                    "limitations": [
                        "Lower thermal stability",
                        "Susceptible to UV degradation over time"
                    ],
                    "ratings": {
                        "hardness": 2,
                        "protection": 4,
                        "cost": 5
                    },
                    "experimentalPath": [
                        "Disperse nanofillers (e.g., clay, silica) into polymer resin using high shear mixing.",
                        "Apply coating via spray or bar casting and cure.",
                        "Measure electrochemical corrosion resistance (Tafel plots).",
                        "Evaluate flexibility and adhesion via mandrel bend or tape tests."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        3,
                        2,
                        2,
                        4,
                        3
                    ]
                }
            ],
            "targetProperties": [
                "Adhesion",
                "Hardness",
                "Roughness",
                "Corrosion resistance",
                "Transparency"
            ],
            "methods": [
                {
                    "name": "AFM/Profilometry",
                    "why": "Measures nanoscale roughness and coating thickness."
                },
                {
                    "name": "Nanoindentation",
                    "why": "Determines hardness and elastic modulus of thin films."
                },
                {
                    "name": "Electrochemical testing (Tafel)",
                    "why": "Evaluates corrosion resistance in specific environments."
                },
                {
                    "name": "Cross-sectional TEM/SEM",
                    "why": "Inspects the coating-substrate interface."
                }
            ],
            "tradeOffs": "Increasing coating thickness can lead to residual stress and delamination.",
            "studentQuestions": "How do I ensure uniform coverage on a complex 3D substrate?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/><path d=\"M2 12h20\"/><path d=\"M2 16h20\"/></svg>"
        },
        {
            "id": "electrochemical",
            "title": "Electrochemical Material",
            "description": "Nanomaterials for energy storage and conversion devices like batteries, supercapacitors, and fuel cells.",
            "dimensions": [
                {
                    "id": "capacity",
                    "label": "High Specific Capacity",
                    "opposite": "High Power/Cycling"
                },
                {
                    "id": "stability",
                    "label": "Cycling Stability",
                    "opposite": "Initial Capacity"
                },
                {
                    "id": "cost",
                    "label": "Low Cost / Earth Abundant",
                    "opposite": "Rare/Expensive Elements"
                }
            ],
            "materials": [
                {
                    "id": "ec_carbon",
                    "name": "Carbon nanomaterials (e.g., Graphene, Mesoporous Carbon)",
                    "why": "Provides high surface area and electrical conductivity for double-layer capacitance.",
                    "strengths": [
                        "Excellent cycling stability",
                        "High power density"
                    ],
                    "limitations": [
                        "Low energy density (specific capacity) compared to metal oxides"
                    ],
                    "ratings": {
                        "capacity": 2,
                        "stability": 5,
                        "cost": 4
                    },
                    "experimentalPath": [
                        "Prepare electrode slurry with binder and conductive additive.",
                        "Coat onto current collector and dry in vacuum oven.",
                        "Assemble coin cell or 3-electrode setup.",
                        "Run Cyclic Voltammetry (CV) at various scan rates to verify EDLC behavior."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        5,
                        4,
                        5,
                        5
                    ]
                },
                {
                    "id": "ec_metal_oxides",
                    "name": "Mixed transition metal oxides",
                    "why": "Offers high specific capacity through redox (pseudocapacitive) reactions.",
                    "strengths": [
                        "High specific capacity/energy density",
                        "Multiple redox states available"
                    ],
                    "limitations": [
                        "Poor intrinsic electrical conductivity",
                        "Volume expansion during cycling"
                    ],
                    "ratings": {
                        "capacity": 5,
                        "stability": 2,
                        "cost": 3
                    },
                    "experimentalPath": [
                        "Synthesize hierarchical oxide structures via hydrothermal methods.",
                        "Verify phase purity with XRD and surface area with BET.",
                        "Assemble cells and perform Galvanostatic Charge-Discharge (GCD) testing.",
                        "Use EIS to measure charge transfer resistance before and after cycling."
                    ],
                    "externalId": {
                        "type": "MaterialsProject",
                        "id": null
                    },
                    "propertyScores": [
                        2,
                        3,
                        2,
                        3
                    ]
                },
                {
                    "id": "ec_polymers",
                    "name": "Conductive polymers",
                    "why": "Flexible and highly conductive, good for wearable electronics.",
                    "strengths": [
                        "Mechanical flexibility",
                        "High conductivity",
                        "Fast doping/dedoping kinetics"
                    ],
                    "limitations": [
                        "Poor long-term cycling stability due to structural degradation"
                    ],
                    "ratings": {
                        "capacity": 3,
                        "stability": 1,
                        "cost": 5
                    },
                    "experimentalPath": [
                        "Electropolymerize or chemically synthesize the polymer onto flexible substrates.",
                        "Confirm chemical structure with FTIR.",
                        "Perform CV to observe oxidation/reduction peaks.",
                        "Run long-term cycling tests to evaluate capacitance retention."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        4,
                        2,
                        1,
                        4
                    ]
                }
            ],
            "targetProperties": [
                "Electrical conductivity",
                "Ion transport rate",
                "Cycling stability",
                "Electrochemically active surface area"
            ],
            "methods": [
                {
                    "name": "Cyclic Voltammetry (CV)",
                    "why": "Identifies redox peaks and electrochemical behavior."
                },
                {
                    "name": "Galvanostatic Charge-Discharge",
                    "why": "Measures specific capacity and cycle life."
                },
                {
                    "name": "BET Surface Area Analysis",
                    "why": "Quantifies the available surface area for ion adsorption."
                },
                {
                    "name": "EIS",
                    "why": "Separates charge transfer resistance from diffusion limitations."
                }
            ],
            "tradeOffs": "Materials with very high capacity (like silicon anodes) often suffer from severe volume expansion and poor cycle life.",
            "studentQuestions": "Why does my specific capacity drop so quickly after the first few cycles?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"7\" width=\"16\" height=\"10\" rx=\"2\" ry=\"2\"/><line x1=\"22\" y1=\"11\" x2=\"22\" y2=\"13\"/><line x1=\"6\" y1=\"12\" x2=\"14\" y2=\"12\"/><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"16\"/></svg>"
        },
        {
            "id": "catalyst",
            "title": "Catalyst",
            "description": "Nanoparticles used to accelerate chemical reactions, essential in environmental cleanup, petrochemistry, and green energy.",
            "dimensions": [
                {
                    "id": "activity",
                    "label": "High Catalytic Activity",
                    "opposite": "Selectivity"
                },
                {
                    "id": "stability",
                    "label": "Poisoning Resistance",
                    "opposite": "Initial Turnover"
                },
                {
                    "id": "cost",
                    "label": "Earth-Abundant",
                    "opposite": "Precious Metals"
                }
            ],
            "materials": [
                {
                    "id": "cat_precious",
                    "name": "Precious metal nanoparticles (Pt, Pd, Au)",
                    "why": "Highly active surfaces for specific reactions (e.g., reduction, oxidation).",
                    "strengths": [
                        "Exceptional catalytic activity at low temperatures",
                        "Well-defined reaction mechanisms"
                    ],
                    "limitations": [
                        "Very high cost",
                        "Susceptible to CO poisoning"
                    ],
                    "ratings": {
                        "activity": 5,
                        "stability": 3,
                        "cost": 1
                    },
                    "experimentalPath": [
                        "Synthesize nanoparticles using wet-chemical reduction.",
                        "Characterize size and facet distribution using HR-TEM.",
                        "Load onto high-surface-area support and measure active metal dispersion via Chemisorption.",
                        "Run baseline catalytic activity tests in a microreactor."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        5,
                        4,
                        3,
                        4,
                        1
                    ]
                },
                {
                    "id": "cat_zeolites",
                    "name": "Zeolites and mesoporous silica",
                    "why": "Provides high surface area and shape-selective pores for reactants.",
                    "strengths": [
                        "Excellent shape selectivity",
                        "High thermal stability",
                        "Low cost"
                    ],
                    "limitations": [
                        "Mass transfer limitations in micropores",
                        "Less active for certain redox reactions"
                    ],
                    "ratings": {
                        "activity": 3,
                        "stability": 4,
                        "cost": 5
                    },
                    "experimentalPath": [
                        "Synthesize zeolites using templating agents.",
                        "Remove template via calcination and confirm structure via XRD.",
                        "Perform N2 physisorption (BET) to confirm pore size distribution.",
                        "Test catalytic cracking or isomerization in a flow reactor."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        3,
                        5,
                        4,
                        5,
                        1
                    ]
                },
                {
                    "id": "cat_photo",
                    "name": "Photocatalytic metal oxides (e.g., TiO2)",
                    "why": "Generates electron-hole pairs under UV/visible light to drive redox reactions.",
                    "strengths": [
                        "Can utilize solar energy",
                        "Chemically stable in aqueous environments"
                    ],
                    "limitations": [
                        "Often requires UV light due to wide bandgap",
                        "Rapid electron-hole recombination"
                    ],
                    "ratings": {
                        "activity": 4,
                        "stability": 5,
                        "cost": 4
                    },
                    "experimentalPath": [
                        "Synthesize oxide powder and calculate bandgap using UV-Vis Diffuse Reflectance.",
                        "Disperse in aqueous solution containing a model pollutant (e.g., Methylene Blue).",
                        "Irradiate with light source and take aliquots over time to measure degradation.",
                        "Perform trapping experiments to identify primary reactive oxygen species."
                    ],
                    "externalId": {
                        "type": "MaterialsProject",
                        "id": null
                    },
                    "propertyScores": [
                        4,
                        2,
                        5,
                        3,
                        4
                    ]
                }
            ],
            "targetProperties": [
                "Catalytic activity",
                "Selectivity",
                "Stability/Poisoning resistance",
                "Surface area",
                "Bandgap (for photocatalysts)"
            ],
            "methods": [
                {
                    "name": "BET / Chemisorption",
                    "why": "Measures total surface area and active metal dispersion."
                },
                {
                    "name": "XRD",
                    "why": "Determines crystallite size and phase purity."
                },
                {
                    "name": "TEM",
                    "why": "Visualizes nanoparticle size distribution and shape/facets."
                },
                {
                    "name": "UV-Vis Spectroscopy",
                    "why": "Calculates the optical bandgap for photocatalysts."
                }
            ],
            "tradeOffs": "Smaller nanoparticles have higher activity but are more prone to aggregation/sintering at high temperatures.",
            "studentQuestions": "How do I prevent my nanoparticles from clumping together during the reaction?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 3h6\"/><path d=\"M10 3v4.36L5.33 17.65A2 2 0 0 0 7.05 21h9.9a2 2 0 0 0 1.72-3.35L14 7.36V3\"/><path d=\"M9 15c1.5 0 1.5 2 3 2s1.5-2 3-2\"/></svg>"
        },
        {
            "id": "filtration",
            "title": "Filtration / Membrane",
            "description": "Nanomaterials used for water purification, desalination, or gas separation by selective permeation.",
            "dimensions": [
                {
                    "id": "selectivity",
                    "label": "High Selectivity/Rejection",
                    "opposite": "High Permeability/Flux"
                },
                {
                    "id": "fouling",
                    "label": "Anti-fouling properties",
                    "opposite": "Basic filtration"
                },
                {
                    "id": "robustness",
                    "label": "Mechanical Robustness",
                    "opposite": "Ultrathin layers"
                }
            ],
            "materials": [
                {
                    "id": "filt_go",
                    "name": "Graphene Oxide (GO) membranes",
                    "why": "Interlayer spacing allows water transport while blocking larger ions/molecules.",
                    "strengths": [
                        "Atomic-scale thickness allows high theoretical flux",
                        "Tunable interlayer spacing"
                    ],
                    "limitations": [
                        "Swelling in aqueous environments degrades selectivity",
                        "Difficult to scale up defect-free"
                    ],
                    "ratings": {
                        "selectivity": 4,
                        "fouling": 3,
                        "robustness": 2
                    },
                    "experimentalPath": [
                        "Prepare GO dispersion via Hummer's method.",
                        "Fabricate membrane via vacuum filtration onto a porous support.",
                        "Measure interlayer d-spacing using XRD in wet and dry states.",
                        "Test pure water flux and dye/ion rejection in a dead-end filtration cell."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        4,
                        4,
                        2,
                        3
                    ]
                },
                {
                    "id": "filt_electrospun",
                    "name": "Electrospun nanofiber mats",
                    "why": "High porosity and interconnected pore structure for particulate filtration.",
                    "strengths": [
                        "Very high porosity and permeability",
                        "Easy to functionalize or embed active particles"
                    ],
                    "limitations": [
                        "Pore sizes usually too large for reverse osmosis/nanofiltration",
                        "Mechanically delicate"
                    ],
                    "ratings": {
                        "selectivity": 2,
                        "fouling": 4,
                        "robustness": 3
                    },
                    "experimentalPath": [
                        "Optimize electrospinning parameters (voltage, distance, polymer concentration).",
                        "Characterize fiber diameter distribution and porosity using SEM.",
                        "Measure surface wettability via contact angle.",
                        "Perform cross-flow filtration to measure particulate removal efficiency."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        5,
                        2,
                        3,
                        4
                    ]
                },
                {
                    "id": "filt_zif",
                    "name": "Zeolitic Imidazolate Frameworks (ZIFs / MOFs)",
                    "why": "Precisely tunable pore sizes for highly selective gas separation.",
                    "strengths": [
                        "Exceptional molecular sieving capability",
                        "Highly ordered crystalline pores"
                    ],
                    "limitations": [
                        "Poor hydrothermal stability in some MOFs",
                        "Brittle nature complicates membrane fabrication"
                    ],
                    "ratings": {
                        "selectivity": 5,
                        "fouling": 2,
                        "robustness": 1
                    },
                    "experimentalPath": [
                        "Synthesize ZIF crystals or grow a continuous ZIF film on a ceramic support.",
                        "Verify crystal structure and phase purity with XRD.",
                        "Measure single-gas permeance (e.g., H2 vs CO2) to determine ideal selectivity.",
                        "Test mixed-gas separation performance under varying temperatures."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        2,
                        5,
                        1,
                        2
                    ]
                }
            ],
            "targetProperties": [
                "Permeability",
                "Selectivity/Rejection rate",
                "Mechanical robustness",
                "Anti-fouling"
            ],
            "methods": [
                {
                    "name": "Dead-end / Cross-flow filtration setup",
                    "why": "Measures water flux and rejection efficiency."
                },
                {
                    "name": "Contact Angle",
                    "why": "Assesses hydrophilicity, which influences fouling resistance."
                },
                {
                    "name": "SEM",
                    "why": "Inspects membrane cross-section and surface pore structure."
                },
                {
                    "name": "Zeta Potential",
                    "why": "Measures surface charge to predict interaction with foulants."
                }
            ],
            "tradeOffs": "Higher selectivity (rejection) usually results in lower permeability (flux). Look up the 'Robeson upper bound'.",
            "studentQuestions": "How do I scale up the synthesis of this membrane without introducing defects?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/></svg>"
        },
        {
            "id": "structural",
            "title": "Structural Nanocomposite",
            "description": "Materials combining a bulk matrix with nanoscale fillers to drastically improve mechanical properties like strength, stiffness, or toughness.",
            "dimensions": [
                {
                    "id": "strength",
                    "label": "Tensile Strength / Modulus",
                    "opposite": "Toughness / Ductility"
                },
                {
                    "id": "thermal",
                    "label": "Thermal Stability",
                    "opposite": "Low Temp Processing"
                },
                {
                    "id": "dispersion",
                    "label": "Ease of Dispersion",
                    "opposite": "Extreme Performance"
                }
            ],
            "materials": [
                {
                    "id": "struc_cnt",
                    "name": "Carbon Nanotube (CNT) / Polymer composites",
                    "why": "CNTs provide immense tensile strength and stiffness at low weight fractions.",
                    "strengths": [
                        "Unmatched strength-to-weight ratio",
                        "Can add electrical conductivity to polymers"
                    ],
                    "limitations": [
                        "Extreme difficulty in achieving uniform dispersion",
                        "High cost of pristine CNTs"
                    ],
                    "ratings": {
                        "strength": 5,
                        "thermal": 4,
                        "dispersion": 1
                    },
                    "experimentalPath": [
                        "Functionalize CNTs to improve matrix compatibility.",
                        "Use high-power ultrasonication to disperse CNTs in resin/solvent.",
                        "Cast or mold composite samples and cure.",
                        "Perform tensile testing and correlate strength with dispersion quality via fracture surface SEM."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        5,
                        5,
                        4,
                        4,
                        2
                    ]
                },
                {
                    "id": "struc_clay",
                    "name": "Nanoclay reinforced polymers",
                    "why": "Improves barrier properties, flame retardancy, and stiffness cost-effectively.",
                    "strengths": [
                        "Low cost",
                        "Excellent barrier and flame-retardant properties"
                    ],
                    "limitations": [
                        "Modest improvements in absolute strength",
                        "Requires precise organic modification to exfoliate"
                    ],
                    "ratings": {
                        "strength": 3,
                        "thermal": 3,
                        "dispersion": 4
                    },
                    "experimentalPath": [
                        "Select organically modified montmorillonite clay compatible with the polymer.",
                        "Melt-compound clay with polymer using a twin-screw extruder.",
                        "Use XRD and TEM to verify clay exfoliation vs. intercalation.",
                        "Measure thermal degradation improvements via TGA."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        3,
                        4,
                        3,
                        3,
                        3
                    ]
                },
                {
                    "id": "struc_mmc",
                    "name": "Metal matrix nanocomposites (e.g., Al/SiC)",
                    "why": "Enhances specific strength and wear resistance in lightweight metals.",
                    "strengths": [
                        "High-temperature performance",
                        "Excellent wear resistance"
                    ],
                    "limitations": [
                        "Complex manufacturing (powder metallurgy or stir casting)",
                        "Machining the final part is very difficult"
                    ],
                    "ratings": {
                        "strength": 4,
                        "thermal": 5,
                        "dispersion": 2
                    },
                    "experimentalPath": [
                        "Mix metal powders with ceramic nanoparticles via high-energy ball milling.",
                        "Consolidate powders using Spark Plasma Sintering (SPS) or hot pressing.",
                        "Measure density and porosity using Archimedes' method.",
                        "Perform wear testing (pin-on-disk) and analyze wear debris."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        4,
                        4,
                        3,
                        5,
                        4
                    ]
                }
            ],
            "targetProperties": [
                "Tensile strength",
                "Elastic modulus",
                "Fracture toughness",
                "Thermal stability",
                "Density"
            ],
            "methods": [
                {
                    "name": "Tensile / Flexural Testing",
                    "why": "Measures macroscopic mechanical properties (strength, modulus)."
                },
                {
                    "name": "Dynamic Mechanical Analysis (DMA)",
                    "why": "Evaluates viscoelastic properties and glass transition temperature (Tg)."
                },
                {
                    "name": "TEM / SEM of fracture surfaces",
                    "why": "Examines dispersion of nanofillers and failure mechanisms (e.g., pull-out)."
                },
                {
                    "name": "TGA",
                    "why": "Determines thermal degradation temperature and filler loading."
                }
            ],
            "tradeOffs": "Poor dispersion (agglomeration) of nanofillers actually degrades mechanical properties rather than improving them.",
            "studentQuestions": "What mixing technique is best to unbundle the nanotubes in the resin?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"/><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"/><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"/></svg>"
        },
        {
            "id": "optical",
            "title": "Optical / Photonic Material",
            "description": "Nanomaterials that manipulate light, used in displays, lasers, solar cells, and bio-imaging.",
            "dimensions": [
                {
                    "id": "efficiency",
                    "label": "Quantum Yield / Efficiency",
                    "opposite": "Broad Spectrum"
                },
                {
                    "id": "safety",
                    "label": "Low Toxicity",
                    "opposite": "Heavy Metal Based"
                },
                {
                    "id": "stability",
                    "label": "Photostability",
                    "opposite": "Readily Degradable"
                }
            ],
            "materials": [
                {
                    "id": "opt_qd",
                    "name": "Quantum Dots (QDs, e.g., CdSe, Perovskites)",
                    "why": "Size-tunable bandgap enables highly efficient, narrow-emission fluorescence.",
                    "strengths": [
                        "Extremely high quantum yield",
                        "Size-tunable emission colors",
                        "Narrow emission peaks"
                    ],
                    "limitations": [
                        "Toxicity issues (Cd, Pb)",
                        "Susceptible to photobleaching/oxidation without core-shell structures"
                    ],
                    "ratings": {
                        "efficiency": 5,
                        "safety": 1,
                        "stability": 3
                    },
                    "experimentalPath": [
                        "Synthesize core-shell QDs via hot-injection method.",
                        "Measure UV-Vis absorption to estimate particle size from the first exciton peak.",
                        "Measure Photoluminescence (PL) spectra to determine emission wavelength and FWHM.",
                        "Calculate Photoluminescence Quantum Yield (PLQY) using an integrating sphere."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        5,
                        5,
                        3,
                        4
                    ]
                },
                {
                    "id": "opt_plasmonic",
                    "name": "Plasmonic nanoparticles (Au, Ag)",
                    "why": "Exhibit Localized Surface Plasmon Resonance (LSPR) for sensing or enhanced absorption.",
                    "strengths": [
                        "Huge scattering cross-sections",
                        "Highly biocompatible (Au)",
                        "No photobleaching"
                    ],
                    "limitations": [
                        "High cost of precious metals",
                        "Broad emission compared to QDs"
                    ],
                    "ratings": {
                        "efficiency": 4,
                        "safety": 5,
                        "stability": 5
                    },
                    "experimentalPath": [
                        "Synthesize gold nanoparticles or nanorods using seeded growth.",
                        "Measure LSPR peak shift using UV-Vis upon changing the local refractive index.",
                        "Verify size and shape uniformity with TEM.",
                        "Test Surface Enhanced Raman Scattering (SERS) activity with a reporter dye."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        2,
                        3,
                        5,
                        5
                    ]
                },
                {
                    "id": "opt_ucnp",
                    "name": "Upconverting nanoparticles (UCNPs)",
                    "why": "Convert near-infrared light to visible light, useful for deep-tissue imaging.",
                    "strengths": [
                        "Zero background autofluorescence in biological tissue",
                        "Deep tissue penetration (NIR light)"
                    ],
                    "limitations": [
                        "Very low overall quantum yield (< 5%)",
                        "Complex synthesis requiring rare-earth elements"
                    ],
                    "ratings": {
                        "efficiency": 1,
                        "safety": 4,
                        "stability": 5
                    },
                    "experimentalPath": [
                        "Synthesize lanthanide-doped fluoride nanoparticles (e.g., NaYF4:Yb,Er).",
                        "Confirm crystalline phase (hexagonal vs cubic) via XRD, as it dictates efficiency.",
                        "Expose to 980nm continuous-wave laser and measure visible emission spectra.",
                        "Perform cytotoxicity assays before in vitro imaging."
                    ],
                    "externalId": null,
                    "propertyScores": [
                        1,
                        5,
                        5,
                        4
                    ]
                }
            ],
            "targetProperties": [
                "Photoluminescence quantum yield (PLQY)",
                "Emission/Absorption wavelength",
                "Photostability",
                "Refractive index"
            ],
            "methods": [
                {
                    "name": "Photoluminescence (PL) Spectroscopy",
                    "why": "Measures emission spectra and identifies defect states."
                },
                {
                    "name": "UV-Vis Spectroscopy",
                    "why": "Identifies absorption peaks and LSPR bands."
                },
                {
                    "name": "Time-Resolved PL (TRPL)",
                    "why": "Measures excited-state carrier lifetimes."
                },
                {
                    "name": "DLS (Dynamic Light Scattering)",
                    "why": "Determines hydrodynamic size and colloidal stability in suspension."
                }
            ],
            "tradeOffs": "Many highly efficient quantum dots contain toxic heavy metals (like Cd or Pb), limiting their commercial applications.",
            "studentQuestions": "Why does the emission color shift when I change the synthesis time?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\"/><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"/><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"/><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"/><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"/><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"/><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"/><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"/></svg>"
        }
    ],
    "pl": [
        {
            "id": "sensor",
            "title": "Czujnik",
            "description": "Nanomateriały stosowane do wykrywania gazów, cząsteczek biologicznych lub zmian fizycznych poprzez sygnały elektryczne, optyczne lub mechaniczne.",
            "dimensions": [
                {
                    "id": "sensitivity",
                    "label": "Wysoka czułość",
                    "opposite": "Szeroki zakres"
                },
                {
                    "id": "stability",
                    "label": "Długotrwała stabilność",
                    "opposite": "Szybki czas reakcji"
                },
                {
                    "id": "cost",
                    "label": "Niski koszt / Skalowalność",
                    "opposite": "Zaawansowane właściwości"
                }
            ],
            "materials": [
                {
                    "id": "sensor_graphene",
                    "name": "Materiały oparte na grafenie",
                    "why": "Wysoki stosunek powierzchni do objętości i doskonałe przewodnictwo elektryczne pozwalają na ekstremalną czułość.",
                    "strengths": [
                        "Ekstremalna czułość",
                        "Szybki czas reakcji",
                        "Wysokie przewodnictwo elektryczne"
                    ],
                    "limitations": [
                        "Podatność na dryft linii bazowej",
                        "Trudność w osiągnięciu wysokiej selektywności bez złożonej funkcjonalizacji"
                    ],
                    "ratings": {
                        "sensitivity": 5,
                        "stability": 2,
                        "cost": 3
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj lub pozyskaj dyspersję grafenu i nałóż na elektrody palczaste (spin-coating).",
                        "Wykonaj spektroskopię Ramana, aby potwierdzić strukturę kilkuwarstwową i gęstość defektów.",
                        "Przeprowadź podstawowe pomiary krzywych I-V w celu weryfikacji przewodnictwa bazowego.",
                        "Wystaw na działanie docelowego analitu w kontrolowanej komorze i mierz zmianę rezystancji w czasie."
                    ],
                    "propertyScores": [
                        5,
                        5,
                        2,
                        3
                    ]
                },
                {
                    "id": "sensor_metal_oxides",
                    "name": "Tlenki metali (np. ZnO, SnO2)",
                    "why": "Tlenowe wakansje powierzchniowe zmieniają przewodnictwo podczas interakcji z gazami docelowymi.",
                    "strengths": [
                        "Wysoka stabilność",
                        "Niski koszt",
                        "Dobrze poznane mechanizmy wykrywania gazów"
                    ],
                    "limitations": [
                        "Często wymaga wysokich temperatur pracy (200-400°C)"
                    ],
                    "ratings": {
                        "sensitivity": 4,
                        "stability": 5,
                        "cost": 5
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj nanocząstki metodą zol-żel lub hydrotermalną.",
                        "Użyj XRD do potwierdzenia fazy krystalicznej i wielkości krystalitów.",
                        "Osadź na podgrzewanych podłożach i testuj reakcję sensoryczną w różnych temperaturach.",
                        "Oceń czułość krzyżową (wpływ wilgotności i gazów zakłócających)."
                    ],
                    "propertyScores": [
                        3,
                        3,
                        4,
                        5
                    ]
                },
                {
                    "id": "sensor_cnt",
                    "name": "Kompozyty z nanorurkami węglowymi (CNT)",
                    "why": "Wysokie przewodnictwo elektryczne i łatwość funkcjonalizacji powierzchni dla czujników selektywnych.",
                    "strengths": [
                        "Doskonała elastyczność mechaniczna",
                        "Dobra praca w temperaturze pokojowej"
                    ],
                    "limitations": [
                        "Trudność w jednorodnym dyspergowaniu w kompozytach",
                        "Zmienność właściwości między partiami"
                    ],
                    "ratings": {
                        "sensitivity": 4,
                        "stability": 3,
                        "cost": 3
                    },
                    "experimentalPath": [
                        "Zfunkcjonalizuj CNT specyficznymi cząsteczkami receptorowymi (np. poprzez obróbkę kwasem).",
                        "Potwierdź funkcjonalizację za pomocą spektroskopii FTIR i Ramana.",
                        "Zintegruj z matrycą polimerową i zmierz bazową impedancję elektrochemiczną (EIS).",
                        "Testuj czasy reakcji i regeneracji czujnika przy cyklicznej ekspozycji."
                    ],
                    "propertyScores": [
                        4,
                        4,
                        4,
                        3
                    ]
                }
            ],
            "targetProperties": [
                "Przewodnictwo",
                "Powierzchnia właściwa",
                "Selektywność",
                "Stabilność"
            ],
            "methods": [
                {
                    "name": "Spektroskopia Ramana",
                    "why": "Identyfikuje defekty i liczbę warstw w materiałach węglowych."
                },
                {
                    "name": "SEM/AFM",
                    "why": "Wizualizuje morfologię powierzchni i grubość warstwy czujnika."
                },
                {
                    "name": "EIS",
                    "why": "Mierzy zmiany oporu elektrycznego / pojemności."
                },
                {
                    "name": "XRD",
                    "why": "Potwierdza strukturę krystaliczną tlenków metali."
                }
            ],
            "tradeOffs": "Wysoka czułość często odbywa się kosztem słabej selektywności. Zjawisko dryftu sygnału w czasie jest powszechne.",
            "studentQuestions": "Jak przymocować konkretne receptory do powierzchni bez niszczenia przewodnictwa?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12.55a11 11 0 0 1 14.08 0\"/><path d=\"M1.42 9a16 16 0 0 1 21.16 0\"/><path d=\"M8.53 16.11a6 6 0 0 1 6.95 0\"/><line x1=\"12\" y1=\"20\" x2=\"12.01\" y2=\"20\"/></svg>"
        },
        {
            "id": "biomaterial",
            "title": "Biomateriał",
            "description": "Nanomateriały przeznaczone do interakcji z układami biologicznymi w celach medycznych, takimi jak implanty lub inżynieria tkankowa.",
            "dimensions": [
                {
                    "id": "biocompatibility",
                    "label": "Bioaktywność / Integracja",
                    "opposite": "Obojętność (Inertność)"
                },
                {
                    "id": "strength",
                    "label": "Wytrzymałość mechaniczna",
                    "opposite": "Wysoka porowatość"
                },
                {
                    "id": "ease",
                    "label": "Łatwość syntezy",
                    "opposite": "Złożona funkcjonalizacja"
                }
            ],
            "materials": [
                {
                    "id": "bio_ha",
                    "name": "Nanocząstki hydroksyapatytu (HA)",
                    "why": "Chemicznie zbliżone do minerału kości, co sprzyja doskonałej osteokonduktywności.",
                    "strengths": [
                        "Doskonała osteokonduktywność",
                        "Wspomaga wrastanie tkanki kostnej"
                    ],
                    "limitations": [
                        "Kruchość",
                        "Słabe właściwości nośne samodzielnie"
                    ],
                    "ratings": {
                        "biocompatibility": 5,
                        "strength": 2,
                        "ease": 4
                    },
                    "experimentalPath": [
                        "Wytrąć nanocząstki HA przy użyciu prekursorów wapnia i fosforu.",
                        "Potwierdź czystość fazową i krystaliczność za pomocą XRD.",
                        "Przeprowadź testy w symulowanym płynie ustrojowym (SBF) przez 7-14 dni.",
                        "Użyj SEM do obserwacji tworzenia warstwy apatytu na powierzchni."
                    ],
                    "propertyScores": [
                        5,
                        4,
                        2,
                        4
                    ]
                },
                {
                    "id": "bio_ceramics",
                    "name": "Ceramika bioaktywna (np. Bioglass)",
                    "why": "Tworzy chemiczne wiązanie z żywą tkanką.",
                    "strengths": [
                        "Szybka reakcja powierzchniowa in vivo",
                        "Może stymulować ekspresję genów do naprawy kości"
                    ],
                    "limitations": [
                        "Trudność w formowaniu w złożone kształty bez utraty bioaktywności"
                    ],
                    "ratings": {
                        "biocompatibility": 5,
                        "strength": 3,
                        "ease": 3
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj szkło metodą stapiania i hartowania lub zol-żel.",
                        "Scharakteryzuj kinetykę uwalniania jonów w PBS w czasie.",
                        "Oceń bioaktywność in vitro przez zanurzenie w SBF.",
                        "Wykonaj podstawowe testy żywotności komórek (MTT) z liniami osteoblastów."
                    ],
                    "propertyScores": [
                        5,
                        3,
                        3,
                        5
                    ]
                },
                {
                    "id": "bio_polymers",
                    "name": "Nanokompozyty polimerowe",
                    "why": "Zapewniają dostrajalną matrycę rusztowania naśladującą macierz zewnątrzkomórkową.",
                    "strengths": [
                        "Wysoce kontrolowane tempo degradacji",
                        "Elastyczność i sprężystość"
                    ],
                    "limitations": [
                        "Możliwa reakcja zapalna na produkty uboczne degradacji"
                    ],
                    "ratings": {
                        "biocompatibility": 3,
                        "strength": 4,
                        "ease": 5
                    },
                    "experimentalPath": [
                        "Przeprowadź elektroprzędzenie lub odlew z roztworów polimerów zmieszanych z nanonapełniaczami.",
                        "Zmierz właściwości mechaniczne (rozciąganie) i kąt zwilżania.",
                        "Oceń tempo degradacji w roztworach enzymatycznych w ciągu kilku tygodni.",
                        "Przeprowadź badania adhezji i proliferacji komórek za pomocą mikroskopii fluorescencyjnej."
                    ],
                    "propertyScores": [
                        3,
                        5,
                        4,
                        3
                    ]
                }
            ],
            "targetProperties": [
                "Biokompatybilność",
                "Porowatość",
                "Wytrzymałość mechaniczna",
                "Chemia powierzchni"
            ],
            "methods": [
                {
                    "name": "FTIR",
                    "why": "Identyfikuje grupy funkcyjne i potwierdza modyfikacje powierzchni."
                },
                {
                    "name": "SEM",
                    "why": "Obserwuje wielkość porów i morfologię przylegania komórek."
                },
                {
                    "name": "Kąt zwilżania",
                    "why": "Określa hydrofilowość, kluczową dla adsorpcji białek."
                },
                {
                    "name": "Testy in vitro (np. MTT)",
                    "why": "Testuje żywotność komórek i cytotoksyczność."
                }
            ],
            "tradeOffs": "Materiały o wysokiej porowatości, przeznaczone do wrastania tkanek, często mają zmniejszoną wytrzymałość mechaniczną.",
            "studentQuestions": "Czy te nanocząstki będą się aglomerować w płynach ustrojowych?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z\"/><path d=\"M12 12v6\"/><path d=\"M9 15h6\"/></svg>"
        },
        {
            "id": "coating",
            "title": "Powłoka",
            "description": "Warstwy w skali nano nakładane na powierzchnie w celu poprawy właściwości takich jak twardość, odporność na korozję lub samoczyszczenie.",
            "dimensions": [
                {
                    "id": "hardness",
                    "label": "Twardość i ścieralność",
                    "opposite": "Elastyczność"
                },
                {
                    "id": "protection",
                    "label": "Ochrona przed korozją",
                    "opposite": "Przejrzystość optyczna"
                },
                {
                    "id": "cost",
                    "label": "Niski koszt aplikacji",
                    "opposite": "Procesy próżniowe"
                }
            ],
            "materials": [
                {
                    "id": "coat_oxide",
                    "name": "Powłoki tlenkowe (np. TiO2, SiO2)",
                    "why": "Zapewniają właściwości samoczyszczące (fotokatalityczne) lub antyrefleksyjne.",
                    "strengths": [
                        "Doskonałe właściwości optyczne",
                        "Zdolności samoczyszczące (TiO2)"
                    ],
                    "limitations": [
                        "Podatność na pękanie pod naprężeniem mechanicznym",
                        "Wymaga promieniowania UV do fotokatalizy"
                    ],
                    "ratings": {
                        "hardness": 3,
                        "protection": 4,
                        "cost": 4
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj zol i nałóż powłokę przez zanurzenie (dip-coating) lub spin-coating.",
                        "Kalcynuj w celu utworzenia fazy krystalicznej.",
                        "Zmierz grubość i chropowatość za pomocą elipsometrii lub profilometrii.",
                        "Testuj samoczyszczenie poprzez degradację barwnika w świetle UV."
                    ],
                    "propertyScores": [
                        4,
                        3,
                        3,
                        4,
                        5
                    ]
                },
                {
                    "id": "coat_ceramic",
                    "name": "Cienkie warstwy ceramiczne (np. TiN, SiC)",
                    "why": "Oferują ekstremalną twardość i odporność na zużycie dla narzędzi skrawających.",
                    "strengths": [
                        "Ekstremalna twardość",
                        "Wysoka stabilność termiczna"
                    ],
                    "limitations": [
                        "Drogie metody osadzania (PVD/CVD)",
                        "Słaba adhezja przy niedopasowaniu cieplnym"
                    ],
                    "ratings": {
                        "hardness": 5,
                        "protection": 5,
                        "cost": 1
                    },
                    "experimentalPath": [
                        "Osadź film za pomocą napylania magnetronowego lub CVD.",
                        "Wykonaj nanownikanie (nanoindentation) w celu ekstrakcji twardości i modułu sprężystości.",
                        "Przeprowadź test zarysowania w celu oceny krytycznego obciążenia adhezji.",
                        "Wykonaj SEM przekroju poprzecznego w celu zbadania interfejsu powłoka-podłoże."
                    ],
                    "propertyScores": [
                        5,
                        5,
                        4,
                        5,
                        3
                    ]
                },
                {
                    "id": "coat_polymer",
                    "name": "Powłoki z nanokompozytów polimerowych",
                    "why": "Łączą elastyczność z właściwościami barierowymi dla wilgoci lub tlenu.",
                    "strengths": [
                        "Bardzo elastyczne",
                        "Łatwe do nałożenia na duże/złożone obszary"
                    ],
                    "limitations": [
                        "Niższa stabilność termiczna",
                        "Podatne na degradację UV w czasie"
                    ],
                    "ratings": {
                        "hardness": 2,
                        "protection": 4,
                        "cost": 5
                    },
                    "experimentalPath": [
                        "Rozprosz nanonapełniacze (np. glinka, krzemionka) w żywicy polimerowej przy użyciu mieszania z wysokim ścinaniem.",
                        "Nałóż powłokę przez natrysk lub odlew i utwardź.",
                        "Zmierz elektrochemiczną odporność na korozję (krzywe Tafela).",
                        "Oceń elastyczność i adhezję poprzez testy zginania na trzpieniu lub testy taśmowe."
                    ],
                    "propertyScores": [
                        3,
                        2,
                        2,
                        4,
                        3
                    ]
                }
            ],
            "targetProperties": [
                "Adhezja",
                "Twardość",
                "Chropowatość",
                "Odporność na korozję",
                "Przezroczystość"
            ],
            "methods": [
                {
                    "name": "AFM / Profilometria",
                    "why": "Mierzy chropowatość w skali nano i grubość powłoki."
                },
                {
                    "name": "Nanownikanie",
                    "why": "Określa twardość i moduł sprężystości cienkich warstw."
                },
                {
                    "name": "Testy elektrochemiczne (Tafel)",
                    "why": "Oceniają odporność na korozję w określonych środowiskach."
                },
                {
                    "name": "TEM/SEM przekroju",
                    "why": "Bada interfejs między powłoką a podłożem."
                }
            ],
            "tradeOffs": "Zwiększenie grubości powłoki może prowadzić do naprężeń szczątkowych i delaminacji.",
            "studentQuestions": "Jak zapewnić równomierne pokrycie na złożonym podłożu 3D?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"6\" width=\"20\" height=\"12\" rx=\"2\"/><path d=\"M2 12h20\"/><path d=\"M2 16h20\"/></svg>"
        },
        {
            "id": "electrochemical",
            "title": "Materiał elektrochemiczny",
            "description": "Nanomateriały do urządzeń magazynowania i konwersji energii, takich jak baterie, superkondensatory i ogniwa paliwowe.",
            "dimensions": [
                {
                    "id": "capacity",
                    "label": "Wysoka pojemność właściwa",
                    "opposite": "Wysoka moc / Cyklowalność"
                },
                {
                    "id": "stability",
                    "label": "Stabilność cykliczna",
                    "opposite": "Pojemność początkowa"
                },
                {
                    "id": "cost",
                    "label": "Niski koszt / Powszechne",
                    "opposite": "Rzadkie / Drogie pierwiastki"
                }
            ],
            "materials": [
                {
                    "id": "ec_carbon",
                    "name": "Nanomateriały węglowe (np. Grafen, Węgiel Mezoporowaty)",
                    "why": "Zapewniają dużą powierzchnię właściwą i przewodnictwo dla pojemności warstwy podwójnej.",
                    "strengths": [
                        "Doskonała stabilność cykliczna",
                        "Wysoka gęstość mocy"
                    ],
                    "limitations": [
                        "Niska gęstość energii w porównaniu z tlenkami metali"
                    ],
                    "ratings": {
                        "capacity": 2,
                        "stability": 5,
                        "cost": 4
                    },
                    "experimentalPath": [
                        "Przygotuj zawiesinę elektrody ze spoiwem i dodatkiem przewodzącym.",
                        "Nałóż na kolektor prądu i wysusz w piecu próżniowym.",
                        "Złóż ogniwo guzikowe lub konfigurację 3-elektrodową.",
                        "Przeprowadź woltamperometrię cykliczną (CV) przy różnych prędkościach skanowania."
                    ],
                    "propertyScores": [
                        5,
                        4,
                        5,
                        5
                    ]
                },
                {
                    "id": "ec_metal_oxides",
                    "name": "Mieszane tlenki metali przejściowych",
                    "why": "Oferują wysoką pojemność właściwą poprzez reakcje redoks (pseudopojemnościowe).",
                    "strengths": [
                        "Wysoka pojemność właściwa / gęstość energii",
                        "Dostępne liczne stany redoks"
                    ],
                    "limitations": [
                        "Słabe samoistne przewodnictwo elektryczne",
                        "Rozszerzanie objętości podczas cyklowania"
                    ],
                    "ratings": {
                        "capacity": 5,
                        "stability": 2,
                        "cost": 3
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj hierarchiczne struktury tlenkowe metodami hydrotermalnymi.",
                        "Zweryfikuj czystość fazową (XRD) i powierzchnię właściwą (BET).",
                        "Zmontuj ogniwa i przeprowadź galwanostatyczne ładowanie/rozładowanie (GCD).",
                        "Użyj EIS do pomiaru rezystancji przeniesienia ładunku przed i po cyklowaniu."
                    ],
                    "propertyScores": [
                        2,
                        3,
                        2,
                        3
                    ]
                },
                {
                    "id": "ec_polymers",
                    "name": "Polimery przewodzące",
                    "why": "Elastyczne i wysoce przewodzące, dobre do elektroniki ubieralnej.",
                    "strengths": [
                        "Elastyczność mechaniczna",
                        "Wysokie przewodnictwo",
                        "Szybka kinetyka domieszkowania"
                    ],
                    "limitations": [
                        "Słaba długoterminowa stabilność z powodu degradacji strukturalnej"
                    ],
                    "ratings": {
                        "capacity": 3,
                        "stability": 1,
                        "cost": 5
                    },
                    "experimentalPath": [
                        "Przeprowadź elektropolimeryzację lub chemiczną syntezę polimeru na elastycznych podłożach.",
                        "Potwierdź strukturę chemiczną za pomocą FTIR.",
                        "Wykonaj CV do zaobserwowania pików utleniania/redukcji.",
                        "Przeprowadź długoterminowe testy cykliczne do oceny zachowania pojemności."
                    ],
                    "propertyScores": [
                        4,
                        2,
                        1,
                        4
                    ]
                }
            ],
            "targetProperties": [
                "Przewodnictwo elektryczne",
                "Szybkość transportu jonów",
                "Stabilność cykliczna",
                "Aktywna powierzchnia elektrochemiczna"
            ],
            "methods": [
                {
                    "name": "Woltamperometria cykliczna (CV)",
                    "why": "Identyfikuje piki redoks i zachowanie elektrochemiczne."
                },
                {
                    "name": "Galwanostatyczne ładowanie/rozładowanie",
                    "why": "Mierzy pojemność właściwą i żywotność cykliczną."
                },
                {
                    "name": "Analiza powierzchni BET",
                    "why": "Określa ilościowo dostępną powierzchnię do adsorpcji jonów."
                },
                {
                    "name": "EIS",
                    "why": "Oddziela rezystancję przeniesienia ładunku od ograniczeń dyfuzji."
                }
            ],
            "tradeOffs": "Materiały o bardzo wysokiej pojemności (np. anody krzemowe) często cierpią z powodu drastycznego zwiększania objętości i krótkiej żywotności.",
            "studentQuestions": "Dlaczego moja pojemność właściwa tak szybko spada po pierwszych kilku cyklach?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"7\" width=\"16\" height=\"10\" rx=\"2\" ry=\"2\"/><line x1=\"22\" y1=\"11\" x2=\"22\" y2=\"13\"/><line x1=\"6\" y1=\"12\" x2=\"14\" y2=\"12\"/><line x1=\"10\" y1=\"8\" x2=\"10\" y2=\"16\"/></svg>"
        },
        {
            "id": "catalyst",
            "title": "Katalizator",
            "description": "Nanocząstki wykorzystywane do przyspieszania reakcji chemicznych, niezbędne w oczyszczaniu środowiska, petrochemii i zielonej energii.",
            "dimensions": [
                {
                    "id": "activity",
                    "label": "Wysoka aktywność",
                    "opposite": "Selektywność"
                },
                {
                    "id": "stability",
                    "label": "Odporność na zatrucie",
                    "opposite": "Początkowa rotacja"
                },
                {
                    "id": "cost",
                    "label": "Powszechne na Ziemi",
                    "opposite": "Metale szlachetne"
                }
            ],
            "materials": [
                {
                    "id": "cat_precious",
                    "name": "Nanocząstki metali szlachetnych (Pt, Pd, Au)",
                    "why": "Wysoce aktywne powierzchnie dla specyficznych reakcji (np. redukcji, utleniania).",
                    "strengths": [
                        "Wyjątkowa aktywność katalityczna w niskich temperaturach",
                        "Dobrze zdefiniowane mechanizmy reakcji"
                    ],
                    "limitations": [
                        "Bardzo wysoki koszt",
                        "Podatność na zatrucie CO"
                    ],
                    "ratings": {
                        "activity": 5,
                        "stability": 3,
                        "cost": 1
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj nanocząstki metodą mokrej redukcji chemicznej.",
                        "Scharakteryzuj wielkość i rozkład faset używając HR-TEM.",
                        "Nałóż na nośnik o dużej powierzchni i zmierz dyspersję metalu (Chemisorpcja).",
                        "Przeprowadź podstawowe testy aktywności w mikroreaktorze."
                    ],
                    "propertyScores": [
                        5,
                        4,
                        3,
                        4,
                        1
                    ]
                },
                {
                    "id": "cat_zeolites",
                    "name": "Zeolity i krzemionka mezoporowata",
                    "why": "Zapewniają dużą powierzchnię i kształto-selektywne pory dla reagentów.",
                    "strengths": [
                        "Doskonała selektywność kształtu",
                        "Wysoka stabilność termiczna",
                        "Niski koszt"
                    ],
                    "limitations": [
                        "Ograniczenia transportu masy w mikroporach",
                        "Mniej aktywne w niektórych reakcjach redoks"
                    ],
                    "ratings": {
                        "activity": 3,
                        "stability": 4,
                        "cost": 5
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj zeolity używając środków matrycujących.",
                        "Usuń matrycę przez kalcynację i potwierdź strukturę (XRD).",
                        "Wykonaj fizysorpcję N2 (BET), aby potwierdzić rozkład porów.",
                        "Testuj kraking katalityczny lub izomeryzację w reaktorze przepływowym."
                    ],
                    "propertyScores": [
                        3,
                        5,
                        4,
                        5,
                        1
                    ]
                },
                {
                    "id": "cat_photo",
                    "name": "Fotokatalityczne tlenki metali (np. TiO2)",
                    "why": "Generują pary elektron-dziura pod wpływem światła do napędzania reakcji redoks.",
                    "strengths": [
                        "Mogą wykorzystywać energię słoneczną",
                        "Chemicznie stabilne w środowiskach wodnych"
                    ],
                    "limitations": [
                        "Wymagają światła UV ze względu na szeroką przerwę energetyczną",
                        "Szybka rekombinacja ładunków"
                    ],
                    "ratings": {
                        "activity": 4,
                        "stability": 5,
                        "cost": 4
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj proszek i oblicz przerwę energetyczną (UV-Vis).",
                        "Rozprosz w wodnym roztworze polutanta (np. błękit metylenowy).",
                        "Napromieniaj źródłem światła i pobieraj próbki do pomiaru degradacji.",
                        "Wykonaj eksperymenty pułapkowania w celu identyfikacji aktywnych form tlenu."
                    ],
                    "propertyScores": [
                        4,
                        2,
                        5,
                        3,
                        4
                    ]
                }
            ],
            "targetProperties": [
                "Aktywność katalityczna",
                "Selektywność",
                "Odporność na zatrucie",
                "Powierzchnia",
                "Przerwa energetyczna (fotokatalizatory)"
            ],
            "methods": [
                {
                    "name": "BET / Chemisorpcja",
                    "why": "Mierzy całkowitą powierzchnię właściwą i dyspersję metalu."
                },
                {
                    "name": "XRD",
                    "why": "Określa wielkość krystalitów i czystość fazową."
                },
                {
                    "name": "TEM",
                    "why": "Wizualizuje rozkład wielkości i kształtów nanocząstek."
                },
                {
                    "name": "Spektroskopia UV-Vis",
                    "why": "Oblicza optyczną przerwę energetyczną dla fotokatalizatorów."
                }
            ],
            "tradeOffs": "Mniejsze nanocząstki mają wyższą aktywność, ale są bardziej podatne na aglomerację w wysokich temperaturach.",
            "studentQuestions": "Jak zapobiec zbijaniu się nanocząstek w grudki podczas reakcji?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 3h6\"/><path d=\"M10 3v4.36L5.33 17.65A2 2 0 0 0 7.05 21h9.9a2 2 0 0 0 1.72-3.35L14 7.36V3\"/><path d=\"M9 15c1.5 0 1.5 2 3 2s1.5-2 3-2\"/></svg>"
        },
        {
            "id": "filtration",
            "title": "Filtracja / Membrana",
            "description": "Nanomateriały stosowane do oczyszczania wody, odsalania lub separacji gazów poprzez selektywne przenikanie.",
            "dimensions": [
                {
                    "id": "selectivity",
                    "label": "Wysoka selektywność/odrzucenie",
                    "opposite": "Wysoka przepuszczalność"
                },
                {
                    "id": "fouling",
                    "label": "Właściwości antyfoulingowe",
                    "opposite": "Podstawowa filtracja"
                },
                {
                    "id": "robustness",
                    "label": "Wytrzymałość mechaniczna",
                    "opposite": "Warstwy ultracienkie"
                }
            ],
            "materials": [
                {
                    "id": "filt_go",
                    "name": "Membrany z tlenku grafenu (GO)",
                    "why": "Odstępy międzywarstwowe umożliwiają transport wody blokując większe jony.",
                    "strengths": [
                        "Grubość w skali atomowej",
                        "Dostrajalne odstępy międzywarstwowe"
                    ],
                    "limitations": [
                        "Pęcznienie w środowisku wodnym",
                        "Trudność w bezdefektowym skalowaniu"
                    ],
                    "ratings": {
                        "selectivity": 4,
                        "fouling": 3,
                        "robustness": 2
                    },
                    "experimentalPath": [
                        "Przygotuj dyspersję GO metodą Hummera.",
                        "Wyprodukuj membranę przez filtrację próżniową na porowatym nośniku.",
                        "Zmierz odległość międzywarstwową (XRD) w stanie mokrym i suchym.",
                        "Przetestuj strumień czystej wody i odrzucenie barwnika/jonów w komorze filtracyjnej."
                    ],
                    "propertyScores": [
                        4,
                        4,
                        2,
                        3
                    ]
                },
                {
                    "id": "filt_electrospun",
                    "name": "Maty z nanowłókien (elektroprzędzenie)",
                    "why": "Wysoka porowatość i połączona struktura porów do filtracji cząstek.",
                    "strengths": [
                        "Bardzo wysoka porowatość i przepuszczalność",
                        "Łatwe do funkcjonalizacji"
                    ],
                    "limitations": [
                        "Zbyt duże pory dla odwróconej osmozy",
                        "Delikatność mechaniczna"
                    ],
                    "ratings": {
                        "selectivity": 2,
                        "fouling": 4,
                        "robustness": 3
                    },
                    "experimentalPath": [
                        "Optymalizuj parametry elektroprzędzenia (napięcie, odległość, stężenie polimeru).",
                        "Scharakteryzuj rozkład średnicy włókien i porowatość (SEM).",
                        "Zmierz zwilżalność powierzchni za pomocą kąta zwilżania.",
                        "Wykonaj filtrację w przepływie krzyżowym, aby zmierzyć skuteczność usuwania cząstek stałych."
                    ],
                    "propertyScores": [
                        5,
                        2,
                        3,
                        4
                    ]
                },
                {
                    "id": "filt_zif",
                    "name": "Struktury ZIF / MOF",
                    "why": "Precyzyjnie dostrajalne rozmiary porów do wysoce selektywnej separacji gazów.",
                    "strengths": [
                        "Wyjątkowa zdolność sita molekularnego",
                        "Wysoce uporządkowane krystaliczne pory"
                    ],
                    "limitations": [
                        "Słaba stabilność hydrotermalna w niektórych MOF",
                        "Kruchość komplikuje produkcję"
                    ],
                    "ratings": {
                        "selectivity": 5,
                        "fouling": 2,
                        "robustness": 1
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj kryształy ZIF lub hoduj ciągły film ZIF na podłożu ceramicznym.",
                        "Potwierdź strukturę kryształu i czystość fazową za pomocą XRD.",
                        "Zmierz przepuszczalność pojedynczego gazu, aby określić idealną selektywność.",
                        "Testuj wydajność separacji mieszanin gazów w różnych temperaturach."
                    ],
                    "propertyScores": [
                        2,
                        5,
                        1,
                        2
                    ]
                }
            ],
            "targetProperties": [
                "Przepuszczalność",
                "Wskaźnik selektywności/odrzucenia",
                "Wytrzymałość mechaniczna",
                "Odporność na zanieczyszczenia (fouling)"
            ],
            "methods": [
                {
                    "name": "Filtracja dead-end / cross-flow",
                    "why": "Mierzy strumień wody i skuteczność odrzucania."
                },
                {
                    "name": "Kąt zwilżania",
                    "why": "Ocenia hydrofilowość."
                },
                {
                    "name": "SEM",
                    "why": "Bada przekrój membrany i strukturę porów."
                },
                {
                    "name": "Potencjał Zeta",
                    "why": "Mierzy ładunek powierzchniowy."
                }
            ],
            "tradeOffs": "Wyższa selektywność zwykle skutkuje niższą przepuszczalnością (tzw. górna granica Robesona).",
            "studentQuestions": "Jak zwiększyć skalę produkcji tej membrany bez wprowadzania defektów?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polygon points=\"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3\"/></svg>"
        },
        {
            "id": "structural",
            "title": "Nanokompozyt strukturalny",
            "description": "Materiały łączące masową matrycę z nanowypełniaczami w celu radykalnej poprawy właściwości mechanicznych.",
            "dimensions": [
                {
                    "id": "strength",
                    "label": "Wytrzymałość / Moduł",
                    "opposite": "Ciągliwość"
                },
                {
                    "id": "thermal",
                    "label": "Stabilność termiczna",
                    "opposite": "Przetwarzanie w niskich temp."
                },
                {
                    "id": "dispersion",
                    "label": "Łatwość dyspergowania",
                    "opposite": "Ekstremalna wydajność"
                }
            ],
            "materials": [
                {
                    "id": "struc_cnt",
                    "name": "Kompozyty CNT / Polimer",
                    "why": "Nanorurki węglowe zapewniają ogromną wytrzymałość na rozciąganie i sztywność przy niskim udziale masowym.",
                    "strengths": [
                        "Niezrównany stosunek wytrzymałości do wagi",
                        "Mogą nadać polimerom przewodnictwo"
                    ],
                    "limitations": [
                        "Ekstremalna trudność w uzyskaniu jednorodnej dyspersji",
                        "Wysoki koszt"
                    ],
                    "ratings": {
                        "strength": 5,
                        "thermal": 4,
                        "dispersion": 1
                    },
                    "experimentalPath": [
                        "Zfunkcjonalizuj CNT w celu poprawy kompatybilności z matrycą.",
                        "Użyj ultradźwięków dużej mocy do dyspergowania CNT w żywicy/rozpuszczalniku.",
                        "Odlej lub uformuj próbki kompozytowe i utwardź.",
                        "Wykonaj testy rozciągania i powiąż wytrzymałość z jakością dyspersji (SEM)."
                    ],
                    "propertyScores": [
                        5,
                        5,
                        4,
                        4,
                        2
                    ]
                },
                {
                    "id": "struc_clay",
                    "name": "Polimery wzmacniane nanoglinką",
                    "why": "Opłacalnie poprawia właściwości barierowe, ognioodporność i sztywność.",
                    "strengths": [
                        "Niski koszt",
                        "Doskonałe właściwości barierowe i zmniejszające palność"
                    ],
                    "limitations": [
                        "Skromna poprawa wytrzymałości absolutnej",
                        "Wymaga precyzyjnej modyfikacji organicznej"
                    ],
                    "ratings": {
                        "strength": 3,
                        "thermal": 3,
                        "dispersion": 4
                    },
                    "experimentalPath": [
                        "Wybierz organicznie modyfikowany montmorylonit kompatybilny z polimerem.",
                        "Stop i zmieszaj glinkę z polimerem w wytłaczarce dwuślimakowej.",
                        "Użyj XRD i TEM, aby zweryfikować eksfoliację glinki.",
                        "Zmierz poprawę degradacji termicznej za pomocą TGA."
                    ],
                    "propertyScores": [
                        3,
                        4,
                        3,
                        3,
                        3
                    ]
                },
                {
                    "id": "struc_mmc",
                    "name": "Nanokompozyty z matrycą metaliczną (np. Al/SiC)",
                    "why": "Zwiększa wytrzymałość właściwą i odporność na zużycie w lekkich metalach.",
                    "strengths": [
                        "Wydajność w wysokich temperaturach",
                        "Doskonała odporność na zużycie"
                    ],
                    "limitations": [
                        "Złożona produkcja (metalurgia proszków)",
                        "Obróbka skrawaniem jest bardzo trudna"
                    ],
                    "ratings": {
                        "strength": 4,
                        "thermal": 5,
                        "dispersion": 2
                    },
                    "experimentalPath": [
                        "Wymieszaj proszki metali z nanocząstkami ceramicznymi przez wysokoenergetyczne mielenie.",
                        "Skompresuj proszki za pomocą spiekania iskrowego plazmowego (SPS).",
                        "Zmierz gęstość i porowatość metodą Archimedesa.",
                        "Przeprowadź testy zużycia i analizuj szczątki (debris)."
                    ],
                    "propertyScores": [
                        4,
                        4,
                        3,
                        5,
                        4
                    ]
                }
            ],
            "targetProperties": [
                "Wytrzymałość na rozciąganie",
                "Moduł sprężystości",
                "Odporność na pękanie",
                "Stabilność termiczna"
            ],
            "methods": [
                {
                    "name": "Testy rozciągania / zginania",
                    "why": "Mierzą makroskopowe właściwości mechaniczne."
                },
                {
                    "name": "Analiza DMA",
                    "why": "Ocenia właściwości lepkosprężyste (Tg)."
                },
                {
                    "name": "TEM / SEM przełomów",
                    "why": "Bada dyspersję nanowypełniaczy i mechanizmy niszczenia."
                },
                {
                    "name": "TGA",
                    "why": "Określa temperaturę degradacji termicznej."
                }
            ],
            "tradeOffs": "Słaba dyspersja (aglomeracja) nanowypełniaczy pogarsza właściwości mechaniczne zamiast je poprawiać.",
            "studentQuestions": "Jaka technika mieszania jest najlepsza do rozdzielenia nanorurek w żywicy?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\"/><polyline points=\"3.27 6.96 12 12.01 20.73 6.96\"/><line x1=\"12\" y1=\"22.08\" x2=\"12\" y2=\"12\"/></svg>"
        },
        {
            "id": "optical",
            "title": "Materiał optyczny / fotoniczny",
            "description": "Nanomateriały manipulujące światłem, stosowane w wyświetlaczach, laserach, ogniwach słonecznych i obrazowaniu bio.",
            "dimensions": [
                {
                    "id": "efficiency",
                    "label": "Wydajność kwantowa",
                    "opposite": "Szerokie widmo"
                },
                {
                    "id": "safety",
                    "label": "Niska toksyczność",
                    "opposite": "Na bazie metali ciężkich"
                },
                {
                    "id": "stability",
                    "label": "Fotostabilność",
                    "opposite": "Łatwo degradowalne"
                }
            ],
            "materials": [
                {
                    "id": "opt_qd",
                    "name": "Kropki kwantowe (QD, np. CdSe, Perywskity)",
                    "why": "Dostrajalna wielkością przerwa energetyczna umożliwia wysoce wydajną fluorescencję o wąskiej emisji.",
                    "strengths": [
                        "Niezwykle wysoka wydajność kwantowa",
                        "Dostrajalne kolory emisji",
                        "Wąskie piki emisji"
                    ],
                    "limitations": [
                        "Kwestie toksyczności (Cd, Pb)",
                        "Podatne na fotowybielanie bez struktur rdzeń-powłoka"
                    ],
                    "ratings": {
                        "efficiency": 5,
                        "safety": 1,
                        "stability": 3
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj QD typu rdzeń-powłoka metodą gorącego wtrysku.",
                        "Zmierz absorpcję UV-Vis, aby oszacować rozmiar cząstek.",
                        "Zmierz widma fotoluminescencji (PL), aby określić długość fali emisji i FWHM.",
                        "Oblicz wydajność kwantową PL (PLQY) za pomocą sfery całkującej."
                    ],
                    "propertyScores": [
                        5,
                        5,
                        3,
                        4
                    ]
                },
                {
                    "id": "opt_plasmonic",
                    "name": "Nanocząstki plazmoniczne (Au, Ag)",
                    "why": "Wykazują zlokalizowany rezonans plazmonów powierzchniowych (LSPR) do wykrywania lub ulepszonej absorpcji.",
                    "strengths": [
                        "Ogromne przekroje poprzeczne rozpraszania",
                        "Wysoce biokompatybilne (Au)"
                    ],
                    "limitations": [
                        "Wysoki koszt metali szlachetnych",
                        "Szeroka emisja w porównaniu z QD"
                    ],
                    "ratings": {
                        "efficiency": 4,
                        "safety": 5,
                        "stability": 5
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj złote nanocząstki lub nanopręty.",
                        "Zmierz przesunięcie piku LSPR za pomocą UV-Vis przy zmianie współczynnika załamania.",
                        "Zweryfikuj jednolitość wielkości i kształtu za pomocą TEM.",
                        "Przetestuj aktywność SERS z barwnikiem raportującym."
                    ],
                    "propertyScores": [
                        2,
                        3,
                        5,
                        5
                    ]
                },
                {
                    "id": "opt_ucnp",
                    "name": "Nanocząstki konwertujące w górę (UCNP)",
                    "why": "Konwertują światło podczerwone na światło widzialne, przydatne do głębokiego obrazowania tkanek.",
                    "strengths": [
                        "Zerowa autofluorescencja tła w tkance biologicznej",
                        "Głęboka penetracja tkanek (światło NIR)"
                    ],
                    "limitations": [
                        "Bardzo niska ogólna wydajność kwantowa",
                        "Złożona synteza wymagająca metali ziem rzadkich"
                    ],
                    "ratings": {
                        "efficiency": 1,
                        "safety": 4,
                        "stability": 5
                    },
                    "experimentalPath": [
                        "Zsyntetyzuj nanocząstki fluorków domieszkowanych lantanowcami (np. NaYF4:Yb,Er).",
                        "Potwierdź fazę krystaliczną (heksagonalna vs kubiczna) za pomocą XRD.",
                        "Naświetlaj laserem ciągłym 980 nm i mierz widma emisji widzialnej.",
                        "Przeprowadź testy cytotoksyczności przed obrazowaniem in vitro."
                    ],
                    "propertyScores": [
                        1,
                        5,
                        5,
                        4
                    ]
                }
            ],
            "targetProperties": [
                "Wydajność kwantowa PL (PLQY)",
                "Długość fali emisji/absorpcji",
                "Fotostabilność",
                "Współczynnik załamania"
            ],
            "methods": [
                {
                    "name": "Spektroskopia fotoluminescencji (PL)",
                    "why": "Mierzy widma emisji i identyfikuje stany defektów."
                },
                {
                    "name": "Spektroskopia UV-Vis",
                    "why": "Identyfikuje piki absorpcji i pasma LSPR."
                },
                {
                    "name": "DLS",
                    "why": "Określa rozmiar hydrodynamiczny i stabilność koloidalną w zawiesinie."
                }
            ],
            "tradeOffs": "Wiele wysoce wydajnych kropek kwantowych zawiera toksyczne metale ciężkie (jak Cd lub Pb), co ogranicza ich komercyjne zastosowania.",
            "studentQuestions": "Dlaczego kolor emisji zmienia się po zmianie czasu syntezy?",
            "icon": "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"5\"/><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"3\"/><line x1=\"12\" y1=\"21\" x2=\"12\" y2=\"23\"/><line x1=\"4.22\" y1=\"4.22\" x2=\"5.64\" y2=\"5.64\"/><line x1=\"18.36\" y1=\"18.36\" x2=\"19.78\" y2=\"19.78\"/><line x1=\"1\" y1=\"12\" x2=\"3\" y2=\"12\"/><line x1=\"21\" y1=\"12\" x2=\"23\" y2=\"12\"/><line x1=\"4.22\" y1=\"19.78\" x2=\"5.64\" y2=\"18.36\"/><line x1=\"18.36\" y1=\"5.64\" x2=\"19.78\" y2=\"4.22\"/></svg>"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APP_DATA, UI_I18N };
} else {
    window.APP_DATA = APP_DATA;
    window.UI_I18N = UI_I18N;
}
