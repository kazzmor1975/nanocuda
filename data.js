const APP_DATA = {
    applications: [
        {
            id: "sensor",
            title: "Sensor",
            description: "Nanomaterials used for detecting gases, biological molecules, or physical changes via electrical, optical, or mechanical signals.",
            materials: [
                {
                    name: "Graphene-based materials",
                    why: "High surface-to-volume ratio and excellent electrical conductivity allow for extreme sensitivity.",
                    externalId: { type: "PubChem", id: null }
                },
                {
                    name: "Metal oxides (e.g., ZnO, SnO2)",
                    why: "Surface oxygen vacancies change conductivity when interacting with target gases.",
                    externalId: { type: "MaterialsProject", id: null }
                },
                {
                    name: "Carbon Nanotube (CNT) composites",
                    why: "High electrical conductivity and easily functionalized surfaces for selective sensing.",
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
            studentQuestions: "How do I attach specific receptors to the surface without destroying conductivity?",
            nextLabStep: "Synthesize the material and perform basic electrical characterization (I-V curve) before exposing it to analytes."
        },
        {
            id: "biomaterial",
            title: "Biomaterial",
            description: "Nanomaterials designed to interact with biological systems for medical purposes, such as implants or tissue engineering.",
            materials: [
                {
                    name: "Hydroxyapatite (HA) nanoparticles",
                    why: "Chemically similar to bone mineral, promoting excellent osteoconductivity.",
                    externalId: { type: "MaterialsProject", id: null }
                },
                {
                    name: "Bioactive ceramics (e.g., Bioglass)",
                    why: "Forms a chemical bond with living tissue.",
                    externalId: null
                },
                {
                    name: "Polymer nanocomposites",
                    why: "Provides a tunable scaffold matrix mimicking the extracellular matrix.",
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
            studentQuestions: "Will these nanoparticles agglomerate in biological fluids?",
            nextLabStep: "Perform a simulated body fluid (SBF) test to observe apatite formation over time."
        },
        {
            id: "coating",
            title: "Coating",
            description: "Nanoscale layers applied to surfaces to enhance properties like hardness, corrosion resistance, or self-cleaning.",
            materials: [
                {
                    name: "Oxide coatings (e.g., TiO2, SiO2)",
                    why: "Provides self-cleaning (photocatalytic) or anti-reflective properties.",
                    externalId: { type: "MaterialsProject", id: null }
                },
                {
                    name: "Ceramic thin films (e.g., TiN, SiC)",
                    why: "Offers extreme hardness and wear resistance for cutting tools.",
                    externalId: null
                },
                {
                    name: "Polymer nanocomposite coatings",
                    why: "Combines flexibility with barrier properties against moisture or oxygen.",
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
            studentQuestions: "How do I ensure uniform coverage on a complex 3D substrate?",
            nextLabStep: "Deposit the coating and immediately test adhesion using a simple tape test or scratch test."
        },
        {
            id: "electrochemical",
            title: "Electrochemical Material",
            description: "Nanomaterials for energy storage and conversion devices like batteries, supercapacitors, and fuel cells.",
            materials: [
                {
                    name: "Carbon nanomaterials (e.g., Graphene, Mesoporous Carbon)",
                    why: "Provides high surface area and electrical conductivity for double-layer capacitance.",
                    externalId: null
                },
                {
                    name: "Mixed transition metal oxides",
                    why: "Offers high specific capacity through redox (pseudocapacitive) reactions.",
                    externalId: { type: "MaterialsProject", id: null }
                },
                {
                    name: "Conductive polymers",
                    why: "Flexible and highly conductive, good for wearable electronics.",
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
            studentQuestions: "Why does my specific capacity drop so quickly after the first few cycles?",
            nextLabStep: "Assemble a simple coin cell or three-electrode setup to run initial CV sweeps."
        },
        {
            id: "catalyst",
            title: "Catalyst",
            description: "Nanoparticles used to accelerate chemical reactions, essential in environmental cleanup, petrochemistry, and green energy.",
            materials: [
                {
                    name: "Precious metal nanoparticles (Pt, Pd, Au)",
                    why: "Highly active surfaces for specific reactions (e.g., reduction, oxidation).",
                    externalId: null
                },
                {
                    name: "Zeolites and mesoporous silica",
                    why: "Provides high surface area and shape-selective pores for reactants.",
                    externalId: null
                },
                {
                    name: "Photocatalytic metal oxides (e.g., TiO2)",
                    why: "Generates electron-hole pairs under UV/visible light to drive redox reactions.",
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
            studentQuestions: "How do I prevent my nanoparticles from clumping together during the reaction?",
            nextLabStep: "Perform a baseline reaction test to measure conversion rate and compare it against a standard catalyst."
        },
        {
            id: "filtration",
            title: "Filtration / Membrane",
            description: "Nanomaterials used for water purification, desalination, or gas separation by selective permeation.",
            materials: [
                {
                    name: "Graphene Oxide (GO) membranes",
                    why: "Interlayer spacing allows water transport while blocking larger ions/molecules.",
                    externalId: null
                },
                {
                    name: "Electrospun nanofiber mats",
                    why: "High porosity and interconnected pore structure for particulate filtration.",
                    externalId: null
                },
                {
                    name: "Zeolitic Imidazolate Frameworks (ZIFs / MOFs)",
                    why: "Precisely tunable pore sizes for highly selective gas separation.",
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
            studentQuestions: "How do I scale up the synthesis of this membrane without introducing defects?",
            nextLabStep: "Cast a small membrane disk and measure pure water flux at varying pressures."
        },
        {
            id: "structural",
            title: "Structural Nanocomposite",
            description: "Materials combining a bulk matrix with nanoscale fillers to drastically improve mechanical properties like strength, stiffness, or toughness.",
            materials: [
                {
                    name: "Carbon Nanotube (CNT) / Polymer composites",
                    why: "CNTs provide immense tensile strength and stiffness at low weight fractions.",
                    externalId: null
                },
                {
                    name: "Nanoclay reinforced polymers",
                    why: "Improves barrier properties, flame retardancy, and stiffness cost-effectively.",
                    externalId: null
                },
                {
                    name: "Metal matrix nanocomposites (e.g., Al/SiC)",
                    why: "Enhances specific strength and wear resistance in lightweight metals.",
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
            studentQuestions: "What mixing technique is best to unbundle the nanotubes in the resin?",
            nextLabStep: "Prepare a small batch focusing entirely on optimizing the dispersion technique (e.g., ultrasonication or shear mixing) before mechanical testing."
        },
        {
            id: "optical",
            title: "Optical / Photonic Material",
            description: "Nanomaterials that manipulate light, used in displays, lasers, solar cells, and bio-imaging.",
            materials: [
                {
                    name: "Quantum Dots (QDs, e.g., CdSe, Perovskites)",
                    why: "Size-tunable bandgap enables highly efficient, narrow-emission fluorescence.",
                    externalId: null
                },
                {
                    name: "Plasmonic nanoparticles (Au, Ag)",
                    why: "Exhibit Localized Surface Plasmon Resonance (LSPR) for sensing or enhanced absorption.",
                    externalId: null
                },
                {
                    name: "Upconverting nanoparticles (UCNPs)",
                    why: "Convert near-infrared light to visible light, useful for deep-tissue imaging.",
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
            studentQuestions: "Why does the emission color shift when I change the synthesis time?",
            nextLabStep: "Synthesize a batch and immediately measure the UV-Vis absorption to estimate the particle size."
        }
    ]
};

// Export for module usage, or attach to window for simple script inclusion
if (typeof module !== 'undefined' && module.exports) {
    module.exports = APP_DATA;
} else {
    window.APP_DATA = APP_DATA;
}
