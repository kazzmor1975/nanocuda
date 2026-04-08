const fs = require('fs');

// Read the file as text
let code = fs.readFileSync('data.js', 'utf8');

// Load it in Node
const dataModule = require('./data.js');
let APP_DATA = dataModule.APP_DATA;
let UI_I18N = dataModule.UI_I18N;

const icons = {
    sensor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
    biomaterial: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/><path d="M12 12v6"/><path d="M9 15h6"/></svg>',
    coating: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 12h20"/><path d="M2 16h20"/></svg>',
    electrochemical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="16" height="10" rx="2" ry="2"/><line x1="22" y1="11" x2="22" y2="13"/><line x1="6" y1="12" x2="14" y2="12"/><line x1="10" y1="8" x2="10" y2="16"/></svg>',
    catalyst: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v4.36L5.33 17.65A2 2 0 0 0 7.05 21h9.9a2 2 0 0 0 1.72-3.35L14 7.36V3"/><path d="M9 15c1.5 0 1.5 2 3 2s1.5-2 3-2"/></svg>',
    filtration: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    structural: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    optical: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
};

const scores = {
    "sensor_graphene": [5, 5, 2, 3],
    "sensor_metal_oxides": [3, 3, 4, 5],
    "sensor_cnt": [4, 4, 4, 3],

    "bio_ha": [5, 4, 2, 4],
    "bio_ceramics": [5, 3, 3, 5],
    "bio_polymers": [3, 5, 4, 3],

    "coat_oxide": [4, 3, 3, 4, 5],
    "coat_ceramic": [5, 5, 4, 5, 3],
    "coat_polymer": [3, 2, 2, 4, 3],

    "ec_carbon": [5, 4, 5, 5],
    "ec_metal_oxides": [2, 3, 2, 3],
    "ec_polymers": [4, 2, 1, 4],

    "cat_precious": [5, 4, 3, 4, 1],
    "cat_zeolites": [3, 5, 4, 5, 1],
    "cat_photo": [4, 2, 5, 3, 4],

    "filt_go": [4, 4, 2, 3],
    "filt_electrospun": [5, 2, 3, 4],
    "filt_zif": [2, 5, 1, 2],

    "struc_cnt": [5, 5, 4, 4, 2],
    "struc_clay": [3, 4, 3, 3, 3],
    "struc_mmc": [4, 4, 3, 5, 4],

    "opt_qd": [5, 5, 3, 4],
    "opt_plasmonic": [2, 3, 5, 5],
    "opt_ucnp": [1, 5, 5, 4]
};

for (const lang of ['en', 'pl']) {
    for (const app of APP_DATA[lang]) {
        app.icon = icons[app.id];
        for (const mat of app.materials) {
            mat.propertyScores = scores[mat.id] || [];
        }
    }
}

const output = `const UI_I18N = ${JSON.stringify(UI_I18N, null, 4)};

const APP_DATA = ${JSON.stringify(APP_DATA, null, 4)};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APP_DATA, UI_I18N };
} else {
    window.APP_DATA = APP_DATA;
    window.UI_I18N = UI_I18N;
}
`;

fs.writeFileSync('data.js', output);
console.log("data.js modified");
