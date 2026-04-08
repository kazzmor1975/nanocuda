# Nanomaterial Matchmaker

A lightweight, student-facing web app designed to help Materials Engineering and Nanomaterials students choose appropriate nanomaterial classes based on intended use cases.

## Features
- **Guided Selection**: Users select an application area (e.g., Sensor, Biomaterial, Coating).
- **Tailored Recommendations**: The app suggests relevant nanomaterial classes, key target properties, and characterization methods.
- **Educational Explanations**: Includes concise reasons ("why") for every recommendation.
- **Risks & Next Steps**: Details key trade-offs, limitations, and the recommended next lab step.
- **Premium Academic UI**: Clean, accessible interface with light and dark mode support.

## Technical Stack
- Vanilla HTML, CSS, and JavaScript.
- No backend required. Works entirely offline.

## Recommendation Logic & Data Model
The recommendation engine is rule-based and transparent, powered entirely by a separate data module located in `data.js`. The logic is intentionally separated from the UI components to allow for easy expansion.

### Extending the Data
To add a new application area or modify existing recommendations, edit `data.js`. The structured schema for an application area looks like this:

```javascript
{
    id: "application_id",
    title: "Application Title",
    description: "Brief explanation of the use case.",
    materials: [
        {
            name: "Material Name",
            why: "Why this material is suitable.",
            externalId: { type: "PubChem", id: "12345" } // Optional, for future API integrations
        }
    ],
    targetProperties: ["Property 1", "Property 2"],
    methods: [
        { name: "Method Name", why: "Why this method is useful." }
    ],
    tradeOffs: "Key limitations or risks.",
    studentQuestions: "Common question a student might ask.",
    nextLabStep: "Actionable next step in the lab."
}
```

### Future API Integrations
The `data.js` structure includes an `externalId` field within the `materials` array. This is intentionally designed to support future integrations with external data sources like:
- **Materials Project API**: For fetching computed properties (e.g., oxides, functional materials).
- **PubChem PUG REST API**: For retrieving basic chemical information and identifiers.
- **eNanoMapper**: For nanosafety and toxicity data extensions.

Currently, the app relies strictly on the offline, local dataset to ensure speed and reliability.

## Running Locally
Since it is a simple static site, you can view the app by opening `index.html` in any modern web browser. For a better development experience, use a local server (like Python's `http.server` or VS Code's Live Server) to handle potential CORS issues when loading external resources (like fonts).
