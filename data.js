const APP_DATA = {
    applications: [
        {
            id: "sensor",
            title: "Sensor",
            description: "Nanomaterials used for detecting gases, biological molecules, or physical changes via electrical, optical, or mechanical signals.",
            dimensions: [
                { id: "sensitivity", label: "High Sensitivity", opposite: "Wide Range" },
                { id: "stability", label: "Long-term Stability", opposite: "Fast Response" },
                { id: "cost", label: "Low Cost / Scalable", opposite: "Advanced Properties" }
            ],
            materials: [
                {
                    id: "sensor_graphene",
                    name: "Graphene-based materials",
                    why: "High surface-to-volume ratio and excellent electrical conductivity allow for extreme sensitivity.",
                    strengths: ["Extreme sensitivity", "Fast response time", "High electrical conductivity"],
                    limitations: ["Prone to baseline drift", "Hard to achieve high selectivity without complex functionalization"],
                    ratings: { sensitivity: 5, stability: 2, cost: 3 },
                    experimentalPath: [
                        "Synthesize or acquire graphene dispersion and spin-coat onto interdigitated electrodes.",
                        "Perform Raman Spectroscopy to confirm few-layer structure and defect density.",
                        "Run basic I-V curves to verify baseline conductivity.",
                        "Expose to target analyte in a controlled chamber and measure resistance change over time."
                    ],
                    externalId: { type: "PubChem", id: null }
                },
                {
                    id: "sensor_metal_oxides",
                    name: "Metal oxides (e.g., ZnO, SnO2)",
                    why: "Surface oxygen vacancies change conductivity when interacting with target gases.",
                    strengths: ["High stability", "Low cost", "Well-understood gas sensing mechanisms"],
                    limitations: ["Often requires high operating temperatures (200-400°C)"],
                    ratings: { sensitivity: 4, stability: 5, cost: 5 },
                    experimentalPath: [
                        "Synthesize nanoparticles via sol-gel or hydrothermal methods.",
                        "Use XRD to confirm crystal phase and crystallite size.",
                        "Deposit on heated substrates and test sensing response at varying temperatures.",
                        "Evaluate cross-sensitivity with humidity and interfering gases."
                    ],
                    externalId: { type: "MaterialsProject", id: null }
                },
                {
                    id: "sensor_cnt",
                    name: "Carbon Nanotube (CNT) composites",
                    why: "High electrical conductivity and easily functionalized surfaces for selective sensing.",
                    strengths: ["Excellent mechanical flexibility", "Good room-temperature operation"],
                    limitations: ["Difficult to disperse uniformly in composites", "Batch-to-batch variation"],
                    ratings: { sensitivity: 4, stability: 3, cost: 3 },
                    experimentalPath: [
                        "Functionalize CNTs with specific receptor molecules (e.g., via acid treatment).",
                        "Verify functionalization using FTIR and Raman Spectroscopy.",
                        "Integrate into a polymer matrix and measure baseline electrochemical impedance (EIS).",
                        "Test sensor response and recovery times upon cyclic exposure."
                    ],
                    externalId: null
                }
            ],
            targetProperties: ["Conductivity", "Specific Surface Area", "Selectivity", "Stability"],
            methods: [
                { name: "Raman Spectroscopy", why: "Identifies defects and number of layers in carbon materials." },
                { name: "SEM/AFM", why: "Visualizes surface morphology and sensor film thickness." },
                { name: "EIS (Electrochemical Impedance Spectroscopy)", why: "Measures changes in electrical resistance/capacitance." },
                { name: "XRD", why: "Confirms crystal structure of metal oxides." }
            ],
            tradeOffs: "High sensitivity often comes at the cost of poor selectivity. Sensor drift over time is common.",
            studentQuestions: "How do I attach specific receptors to the surface without destroying conductivity?"
        },
        {
            id: "biomaterial",
            title: "Biomaterial",
            description: "Nanomaterials designed to interact with biological systems for medical purposes, such as implants or tissue engineering.",
            dimensions: [
                { id: "biocompatibility", label: "Bioactivity / Integration", opposite: "Inertness" },
                { id: "strength", label: "Mechanical Strength", opposite: "High Porosity" },
                { id: "ease", label: "Ease of Synthesis", opposite: "Complex Functionalization" }
            ],
            materials: [
                {
                    id: "bio_ha",
                    name: "Hydroxyapatite (HA) nanoparticles",
                    why: "Chemically similar to bone mineral, promoting excellent osteoconductivity.",
                    strengths: ["Excellent osteoconductivity", "Promotes bone ingrowth"],
                    limitations: ["Brittle", "Poor load-bearing capability on its own"],
                    ratings: { biocompatibility: 5, strength: 2, ease: 4 },
                    experimentalPath: [
                        "Precipitate HA nanoparticles using calcium and phosphate precursors.",
                        "Confirm phase purity and crystallinity using XRD.",
                        "Perform simulated body fluid (SBF) tests for 7-14 days.",
                        "Use SEM to observe apatite layer formation on the surface."
                    ],
                    externalId: { type: "MaterialsProject", id: null }
                },
                {
                    id: "bio_ceramics",
                    name: "Bioactive ceramics (e.g., Bioglass)",
                    why: "Forms a chemical bond with living tissue.",
                    strengths: ["Rapid surface reaction in vivo", "Can stimulate gene expression for bone repair"],
                    limitations: ["Difficult to form into complex shapes without losing bioactivity"],
                    ratings: { biocompatibility: 5, strength: 3, ease: 3 },
                    experimentalPath: [
                        "Melt-quench or sol-gel synthesize the glass composition.",
                        "Characterize ion release kinetics in PBS over time.",
                        "Assess in vitro bioactivity via SBF immersion.",
                        "Run basic cell viability (MTT) assays with osteoblast lineages."
                    ],
                    externalId: null
                },
                {
                    id: "bio_polymers",
                    name: "Polymer nanocomposites",
                    why: "Provides a tunable scaffold matrix mimicking the extracellular matrix.",
                    strengths: ["Highly tunable degradation rates", "Flexible and resilient"],
                    limitations: ["Possible inflammatory response to degradation byproducts"],
                    ratings: { biocompatibility: 3, strength: 4, ease: 5 },
                    experimentalPath: [
                        "Electrospin or cast polymer solutions mixed with nanofillers.",
                        "Measure mechanical properties (tensile testing) and contact angle.",
                        "Evaluate degradation rate in enzymatic solutions over weeks.",
                        "Perform cell attachment and proliferation studies using fluorescence microscopy."
                    ],
                    externalId: null
                }
            ],
            targetProperties: ["Biocompatibility", "Porosity", "Mechanical strength", "Surface chemistry"],
            methods: [
                { name: "FTIR", why: "Identifies functional groups and confirms surface modifications." },
                { name: "SEM", why: "Observes pore size and cell attachment morphology." },
                { name: "Contact Angle", why: "Determines hydrophilicity, crucial for protein adsorption." },
                { name: "In vitro assays (e.g., MTT)", why: "Tests cell viability and cytotoxicity." }
            ],
            tradeOffs: "Materials with high porosity for tissue ingrowth often have compromised mechanical strength.",
            studentQuestions: "Will these nanoparticles agglomerate in biological fluids?"
        },
        {
            id: "coating",
            title: "Coating",
            description: "Nanoscale layers applied to surfaces to enhance properties like hardness, corrosion resistance, or self-cleaning.",
            dimensions: [
                { id: "hardness", label: "Hardness & Wear", opposite: "Flexibility" },
                { id: "protection", label: "Corrosion Protection", opposite: "Optical Transparency" },
                { id: "cost", label: "Low Cost / Easy App", opposite: "Vacuum Processes" }
            ],
            materials: [
                {
                    id: "coat_oxide",
                    name: "Oxide coatings (e.g., TiO2, SiO2)",
                    why: "Provides self-cleaning (photocatalytic) or anti-reflective properties.",
                    strengths: ["Excellent optical properties", "Self-cleaning capabilities (TiO2)"],
                    limitations: ["Prone to cracking under mechanical stress", "Requires UV for photocatalysis"],
                    ratings: { hardness: 3, protection: 4, cost: 4 },
                    experimentalPath: [
                        "Synthesize sol and dip-coat or spin-coat onto substrates.",
                        "Calcination step to form crystalline phase.",
                        "Measure thickness and roughness using Ellipsometry or Profilometry.",
                        "Test self-cleaning via dye degradation under UV light."
                    ],
                    externalId: { type: "MaterialsProject", id: null }
                },
                {
                    id: "coat_ceramic",
                    name: "Ceramic thin films (e.g., TiN, SiC)",
                    why: "Offers extreme hardness and wear resistance for cutting tools.",
                    strengths: ["Extreme hardness", "High thermal stability"],
                    limitations: ["Expensive deposition methods (PVD/CVD)", "Poor adhesion if thermal mismatch exists"],
                    ratings: { hardness: 5, protection: 5, cost: 1 },
                    experimentalPath: [
                        "Deposit film using magnetron sputtering or CVD.",
                        "Perform nanoindentation to extract hardness and elastic modulus.",
                        "Conduct scratch testing to evaluate critical adhesion load.",
                        "Cross-sectional SEM to inspect film-substrate interface."
                    ],
                    externalId: null
                },
                {
                    id: "coat_polymer",
                    name: "Polymer nanocomposite coatings",
                    why: "Combines flexibility with barrier properties against moisture or oxygen.",
                    strengths: ["Highly flexible", "Easy to apply over large/complex areas"],
                    limitations: ["Lower thermal stability", "Susceptible to UV degradation over time"],
                    ratings: { hardness: 2, protection: 4, cost: 5 },
                    experimentalPath: [
                        "Disperse nanofillers (e.g., clay, silica) into polymer resin using high shear mixing.",
                        "Apply coating via spray or bar casting and cure.",
                        "Measure electrochemical corrosion resistance (Tafel plots).",
                        "Evaluate flexibility and adhesion via mandrel bend or tape tests."
                    ],
                    externalId: null
                }
            ],
            targetProperties: ["Adhesion", "Hardness", "Roughness", "Corrosion resistance", "Transparency"],
            methods: [
                { name: "AFM/Profilometry", why: "Measures nanoscale roughness and coating thickness." },
                { name: "Nanoindentation", why: "Determines hardness and elastic modulus of thin films." },
                { name: "Electrochemical testing (Tafel)", why: "Evaluates corrosion resistance in specific environments." },
                { name: "Cross-sectional TEM/SEM", why: "Inspects the coating-substrate interface." }
            ],
            tradeOffs: "Increasing coating thickness can lead to residual stress and delamination.",
            studentQuestions: "How do I ensure uniform coverage on a complex 3D substrate?"
        },
        {
            id: "electrochemical",
            title: "Electrochemical Material",
            description: "Nanomaterials for energy storage and conversion devices like batteries, supercapacitors, and fuel cells.",
            dimensions: [
                { id: "capacity", label: "High Specific Capacity", opposite: "High Power/Cycling" },
                { id: "stability", label: "Cycling Stability", opposite: "Initial Capacity" },
                { id: "cost", label: "Low Cost / Earth Abundant", opposite: "Rare/Expensive Elements" }
            ],
            materials: [
                {
                    id: "ec_carbon",
                    name: "Carbon nanomaterials (e.g., Graphene, Mesoporous Carbon)",
                    why: "Provides high surface area and electrical conductivity for double-layer capacitance.",
                    strengths: ["Excellent cycling stability", "High power density"],
                    limitations: ["Low energy density (specific capacity) compared to metal oxides"],
                    ratings: { capacity: 2, stability: 5, cost: 4 },
                    experimentalPath: [
                        "Prepare electrode slurry with binder and conductive additive.",
                        "Coat onto current collector and dry in vacuum oven.",
                        "Assemble coin cell or 3-electrode setup.",
                        "Run Cyclic Voltammetry (CV) at various scan rates to verify EDLC behavior."
                    ],
                    externalId: null
                },
                {
                    id: "ec_metal_oxides",
                    name: "Mixed transition metal oxides",
                    why: "Offers high specific capacity through redox (pseudocapacitive) reactions.",
                    strengths: ["High specific capacity/energy density", "Multiple redox states available"],
                    limitations: ["Poor intrinsic electrical conductivity", "Volume expansion during cycling"],
                    ratings: { capacity: 5, stability: 2, cost: 3 },
                    experimentalPath: [
                        "Synthesize hierarchical oxide structures via hydrothermal methods.",
                        "Verify phase purity with XRD and surface area with BET.",
                        "Assemble cells and perform Galvanostatic Charge-Discharge (GCD) testing.",
                        "Use EIS to measure charge transfer resistance before and after cycling."
                    ],
                    externalId: { type: "MaterialsProject", id: null }
                },
                {
                    id: "ec_polymers",
                    name: "Conductive polymers",
                    why: "Flexible and highly conductive, good for wearable electronics.",
                    strengths: ["Mechanical flexibility", "High conductivity", "Fast doping/dedoping kinetics"],
                    limitations: ["Poor long-term cycling stability due to structural degradation"],
                    ratings: { capacity: 3, stability: 1, cost: 5 },
                    experimentalPath: [
                        "Electropolymerize or chemically synthesize the polymer onto flexible substrates.",
                        "Confirm chemical structure with FTIR.",
                        "Perform CV to observe oxidation/reduction peaks.",
                        "Run long-term cycling tests to evaluate capacitance retention."
                    ],
                    externalId: null
                }
            ],
            targetProperties: ["Electrical conductivity", "Ion transport rate", "Cycling stability", "Electrochemically active surface area"],
            methods: [
                { name: "Cyclic Voltammetry (CV)", why: "Identifies redox peaks and electrochemical behavior." },
                { name: "Galvanostatic Charge-Discharge", why: "Measures specific capacity and cycle life." },
                { name: "BET Surface Area Analysis", why: "Quantifies the available surface area for ion adsorption." },
                { name: "EIS", why: "Separates charge transfer resistance from diffusion limitations." }
            ],
            tradeOffs: "Materials with very high capacity (like silicon anodes) often suffer from severe volume expansion and poor cycle life.",
            studentQuestions: "Why does my specific capacity drop so quickly after the first few cycles?"
        },
        {
            id: "catalyst",
            title: "Catalyst",
            description: "Nanoparticles used to accelerate chemical reactions, essential in environmental cleanup, petrochemistry, and green energy.",
            dimensions: [
                { id: "activity", label: "High Catalytic Activity", opposite: "Selectivity" },
                { id: "stability", label: "Poisoning Resistance", opposite: "Initial Turnover" },
                { id: "cost", label: "Earth-Abundant", opposite: "Precious Metals" }
            ],
            materials: [
                {
                    id: "cat_precious",
                    name: "Precious metal nanoparticles (Pt, Pd, Au)",
                    why: "Highly active surfaces for specific reactions (e.g., reduction, oxidation).",
                    strengths: ["Exceptional catalytic activity at low temperatures", "Well-defined reaction mechanisms"],
                    limitations: ["Very high cost", "Susceptible to CO poisoning"],
                    ratings: { activity: 5, stability: 3, cost: 1 },
                    experimentalPath: [
                        "Synthesize nanoparticles using wet-chemical reduction.",
                        "Characterize size and facet distribution using HR-TEM.",
                        "Load onto high-surface-area support and measure active metal dispersion via Chemisorption.",
                        "Run baseline catalytic activity tests in a microreactor."
                    ],
                    externalId: null
                },
                {
                    id: "cat_zeolites",
                    name: "Zeolites and mesoporous silica",
                    why: "Provides high surface area and shape-selective pores for reactants.",
                    strengths: ["Excellent shape selectivity", "High thermal stability", "Low cost"],
                    limitations: ["Mass transfer limitations in micropores", "Less active for certain redox reactions"],
                    ratings: { activity: 3, stability: 4, cost: 5 },
                    experimentalPath: [
                        "Synthesize zeolites using templating agents.",
                        "Remove template via calcination and confirm structure via XRD.",
                        "Perform N2 physisorption (BET) to confirm pore size distribution.",
                        "Test catalytic cracking or isomerization in a flow reactor."
                    ],
                    externalId: null
                },
                {
                    id: "cat_photo",
                    name: "Photocatalytic metal oxides (e.g., TiO2)",
                    why: "Generates electron-hole pairs under UV/visible light to drive redox reactions.",
                    strengths: ["Can utilize solar energy", "Chemically stable in aqueous environments"],
                    limitations: ["Often requires UV light due to wide bandgap", "Rapid electron-hole recombination"],
                    ratings: { activity: 4, stability: 5, cost: 4 },
                    experimentalPath: [
                        "Synthesize oxide powder and calculate bandgap using UV-Vis Diffuse Reflectance.",
                        "Disperse in aqueous solution containing a model pollutant (e.g., Methylene Blue).",
                        "Irradiate with light source and take aliquots over time to measure degradation.",
                        "Perform trapping experiments to identify primary reactive oxygen species."
                    ],
                    externalId: { type: "MaterialsProject", id: null }
                }
            ],
            targetProperties: ["Catalytic activity", "Selectivity", "Stability/Poisoning resistance", "Surface area", "Bandgap (for photocatalysts)"],
            methods: [
                { name: "BET / Chemisorption", why: "Measures total surface area and active metal dispersion." },
                { name: "XRD", why: "Determines crystallite size and phase purity." },
                { name: "TEM", why: "Visualizes nanoparticle size distribution and shape/facets." },
                { name: "UV-Vis Spectroscopy", why: "Calculates the optical bandgap for photocatalysts." }
            ],
            tradeOffs: "Smaller nanoparticles have higher activity but are more prone to aggregation/sintering at high temperatures.",
            studentQuestions: "How do I prevent my nanoparticles from clumping together during the reaction?"
        },
        {
            id: "filtration",
            title: "Filtration / Membrane",
            description: "Nanomaterials used for water purification, desalination, or gas separation by selective permeation.",
            dimensions: [
                { id: "selectivity", label: "High Selectivity/Rejection", opposite: "High Permeability/Flux" },
                { id: "fouling", label: "Anti-fouling properties", opposite: "Basic filtration" },
                { id: "robustness", label: "Mechanical Robustness", opposite: "Ultrathin layers" }
            ],
            materials: [
                {
                    id: "filt_go",
                    name: "Graphene Oxide (GO) membranes",
                    why: "Interlayer spacing allows water transport while blocking larger ions/molecules.",
                    strengths: ["Atomic-scale thickness allows high theoretical flux", "Tunable interlayer spacing"],
                    limitations: ["Swelling in aqueous environments degrades selectivity", "Difficult to scale up defect-free"],
                    ratings: { selectivity: 4, fouling: 3, robustness: 2 },
                    experimentalPath: [
                        "Prepare GO dispersion via Hummer's method.",
                        "Fabricate membrane via vacuum filtration onto a porous support.",
                        "Measure interlayer d-spacing using XRD in wet and dry states.",
                        "Test pure water flux and dye/ion rejection in a dead-end filtration cell."
                    ],
                    externalId: null
                },
                {
                    id: "filt_electrospun",
                    name: "Electrospun nanofiber mats",
                    why: "High porosity and interconnected pore structure for particulate filtration.",
                    strengths: ["Very high porosity and permeability", "Easy to functionalize or embed active particles"],
                    limitations: ["Pore sizes usually too large for reverse osmosis/nanofiltration", "Mechanically delicate"],
                    ratings: { selectivity: 2, fouling: 4, robustness: 3 },
                    experimentalPath: [
                        "Optimize electrospinning parameters (voltage, distance, polymer concentration).",
                        "Characterize fiber diameter distribution and porosity using SEM.",
                        "Measure surface wettability via contact angle.",
                        "Perform cross-flow filtration to measure particulate removal efficiency."
                    ],
                    externalId: null
                },
                {
                    id: "filt_zif",
                    name: "Zeolitic Imidazolate Frameworks (ZIFs / MOFs)",
                    why: "Precisely tunable pore sizes for highly selective gas separation.",
                    strengths: ["Exceptional molecular sieving capability", "Highly ordered crystalline pores"],
                    limitations: ["Poor hydrothermal stability in some MOFs", "Brittle nature complicates membrane fabrication"],
                    ratings: { selectivity: 5, fouling: 2, robustness: 1 },
                    experimentalPath: [
                        "Synthesize ZIF crystals or grow a continuous ZIF film on a ceramic support.",
                        "Verify crystal structure and phase purity with XRD.",
                        "Measure single-gas permeance (e.g., H2 vs CO2) to determine ideal selectivity.",
                        "Test mixed-gas separation performance under varying temperatures."
                    ],
                    externalId: null
                }
            ],
            targetProperties: ["Permeability", "Selectivity/Rejection rate", "Mechanical robustness", "Anti-fouling"],
            methods: [
                { name: "Dead-end / Cross-flow filtration setup", why: "Measures water flux and rejection efficiency." },
                { name: "Contact Angle", why: "Assesses hydrophilicity, which influences fouling resistance." },
                { name: "SEM", why: "Inspects membrane cross-section and surface pore structure." },
                { name: "Zeta Potential", why: "Measures surface charge to predict interaction with foulants." }
            ],
            tradeOffs: "Higher selectivity (rejection) usually results in lower permeability (flux). Look up the 'Robeson upper bound'.",
            studentQuestions: "How do I scale up the synthesis of this membrane without introducing defects?"
        },
        {
            id: "structural",
            title: "Structural Nanocomposite",
            description: "Materials combining a bulk matrix with nanoscale fillers to drastically improve mechanical properties like strength, stiffness, or toughness.",
            dimensions: [
                { id: "strength", label: "Tensile Strength / Modulus", opposite: "Toughness / Ductility" },
                { id: "thermal", label: "Thermal Stability", opposite: "Low Temp Processing" },
                { id: "dispersion", label: "Ease of Dispersion", opposite: "Extreme Performance" }
            ],
            materials: [
                {
                    id: "struc_cnt",
                    name: "Carbon Nanotube (CNT) / Polymer composites",
                    why: "CNTs provide immense tensile strength and stiffness at low weight fractions.",
                    strengths: ["Unmatched strength-to-weight ratio", "Can add electrical conductivity to polymers"],
                    limitations: ["Extreme difficulty in achieving uniform dispersion", "High cost of pristine CNTs"],
                    ratings: { strength: 5, thermal: 4, dispersion: 1 },
                    experimentalPath: [
                        "Functionalize CNTs to improve matrix compatibility.",
                        "Use high-power ultrasonication to disperse CNTs in resin/solvent.",
                        "Cast or mold composite samples and cure.",
                        "Perform tensile testing and correlate strength with dispersion quality via fracture surface SEM."
                    ],
                    externalId: null
                },
                {
                    id: "struc_clay",
                    name: "Nanoclay reinforced polymers",
                    why: "Improves barrier properties, flame retardancy, and stiffness cost-effectively.",
                    strengths: ["Low cost", "Excellent barrier and flame-retardant properties"],
                    limitations: ["Modest improvements in absolute strength", "Requires precise organic modification to exfoliate"],
                    ratings: { strength: 3, thermal: 3, dispersion: 4 },
                    experimentalPath: [
                        "Select organically modified montmorillonite clay compatible with the polymer.",
                        "Melt-compound clay with polymer using a twin-screw extruder.",
                        "Use XRD and TEM to verify clay exfoliation vs. intercalation.",
                        "Measure thermal degradation improvements via TGA."
                    ],
                    externalId: null
                },
                {
                    id: "struc_mmc",
                    name: "Metal matrix nanocomposites (e.g., Al/SiC)",
                    why: "Enhances specific strength and wear resistance in lightweight metals.",
                    strengths: ["High-temperature performance", "Excellent wear resistance"],
                    limitations: ["Complex manufacturing (powder metallurgy or stir casting)", "Machining the final part is very difficult"],
                    ratings: { strength: 4, thermal: 5, dispersion: 2 },
                    experimentalPath: [
                        "Mix metal powders with ceramic nanoparticles via high-energy ball milling.",
                        "Consolidate powders using Spark Plasma Sintering (SPS) or hot pressing.",
                        "Measure density and porosity using Archimedes' method.",
                        "Perform wear testing (pin-on-disk) and analyze wear debris."
                    ],
                    externalId: null
                }
            ],
            targetProperties: ["Tensile strength", "Elastic modulus", "Fracture toughness", "Thermal stability", "Density"],
            methods: [
                { name: "Tensile / Flexural Testing", why: "Measures macroscopic mechanical properties (strength, modulus)." },
                { name: "Dynamic Mechanical Analysis (DMA)", why: "Evaluates viscoelastic properties and glass transition temperature (Tg)." },
                { name: "TEM / SEM of fracture surfaces", why: "Examines dispersion of nanofillers and failure mechanisms (e.g., pull-out).", },
                { name: "TGA", why: "Determines thermal degradation temperature and filler loading." }
            ],
            tradeOffs: "Poor dispersion (agglomeration) of nanofillers actually degrades mechanical properties rather than improving them.",
            studentQuestions: "What mixing technique is best to unbundle the nanotubes in the resin?"
        },
        {
            id: "optical",
            title: "Optical / Photonic Material",
            description: "Nanomaterials that manipulate light, used in displays, lasers, solar cells, and bio-imaging.",
            dimensions: [
                { id: "efficiency", label: "Quantum Yield / Efficiency", opposite: "Broad Spectrum" },
                { id: "safety", label: "Low Toxicity", opposite: "Heavy Metal Based" },
                { id: "stability", label: "Photostability", opposite: "Readily Degradable" }
            ],
            materials: [
                {
                    id: "opt_qd",
                    name: "Quantum Dots (QDs, e.g., CdSe, Perovskites)",
                    why: "Size-tunable bandgap enables highly efficient, narrow-emission fluorescence.",
                    strengths: ["Extremely high quantum yield", "Size-tunable emission colors", "Narrow emission peaks"],
                    limitations: ["Toxicity issues (Cd, Pb)", "Susceptible to photobleaching/oxidation without core-shell structures"],
                    ratings: { efficiency: 5, safety: 1, stability: 3 },
                    experimentalPath: [
                        "Synthesize core-shell QDs via hot-injection method.",
                        "Measure UV-Vis absorption to estimate particle size from the first exciton peak.",
                        "Measure Photoluminescence (PL) spectra to determine emission wavelength and FWHM.",
                        "Calculate Photoluminescence Quantum Yield (PLQY) using an integrating sphere."
                    ],
                    externalId: null
                },
                {
                    id: "opt_plasmonic",
                    name: "Plasmonic nanoparticles (Au, Ag)",
                    why: "Exhibit Localized Surface Plasmon Resonance (LSPR) for sensing or enhanced absorption.",
                    strengths: ["Huge scattering cross-sections", "Highly biocompatible (Au)", "No photobleaching"],
                    limitations: ["High cost of precious metals", "Broad emission compared to QDs"],
                    ratings: { efficiency: 4, safety: 5, stability: 5 },
                    experimentalPath: [
                        "Synthesize gold nanoparticles or nanorods using seeded growth.",
                        "Measure LSPR peak shift using UV-Vis upon changing the local refractive index.",
                        "Verify size and shape uniformity with TEM.",
                        "Test Surface Enhanced Raman Scattering (SERS) activity with a reporter dye."
                    ],
                    externalId: null
                },
                {
                    id: "opt_ucnp",
                    name: "Upconverting nanoparticles (UCNPs)",
                    why: "Convert near-infrared light to visible light, useful for deep-tissue imaging.",
                    strengths: ["Zero background autofluorescence in biological tissue", "Deep tissue penetration (NIR light)"],
                    limitations: ["Very low overall quantum yield (< 5%)", "Complex synthesis requiring rare-earth elements"],
                    ratings: { efficiency: 1, safety: 4, stability: 5 },
                    experimentalPath: [
                        "Synthesize lanthanide-doped fluoride nanoparticles (e.g., NaYF4:Yb,Er).",
                        "Confirm crystalline phase (hexagonal vs cubic) via XRD, as it dictates efficiency.",
                        "Expose to 980nm continuous-wave laser and measure visible emission spectra.",
                        "Perform cytotoxicity assays before in vitro imaging."
                    ],
                    externalId: null
                }
            ],
            targetProperties: ["Photoluminescence quantum yield (PLQY)", "Emission/Absorption wavelength", "Photostability", "Refractive index"],
            methods: [
                { name: "Photoluminescence (PL) Spectroscopy", why: "Measures emission spectra and identifies defect states." },
                { name: "UV-Vis Spectroscopy", why: "Identifies absorption peaks and LSPR bands." },
                { name: "Time-Resolved PL (TRPL)", why: "Measures excited-state carrier lifetimes." },
                { name: "DLS (Dynamic Light Scattering)", why: "Determines hydrodynamic size and colloidal stability in suspension." }
            ],
            tradeOffs: "Many highly efficient quantum dots contain toxic heavy metals (like Cd or Pb), limiting their commercial applications.",
            studentQuestions: "Why does the emission color shift when I change the synthesis time?"
        }
    ]
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_DATA;
} else {
    window.APP_DATA = APP_DATA;
}
