// script.js

// Data for predefined verbs and their forms
const verbData = {
    "ذهب": {
        past: "ذهب (He went)",
        present: "يذهب (He goes)",
        command: "اذهب (Go!)",
        origin: "ذهاب (Going)"
    },
    "أكل": {
        past: "أكل (He ate)",
        present: "يأكل (He eats)",
        command: "كل (Eat!)",
        origin: "أكل (Eating)"
    },
    "كتب": {
        past: "كتب (He wrote)",
        present: "يكتب (He writes)",
        command: "اكتب (Write!)",
        origin: "كتابة (Writing)"
    },
    "قرء": {
        past: "قرأ (He read)",
        present: "يقرأ (He reads)",
        command: "اقرأ (Read!)",
        origin: "قراءة (Reading)"
    }
};

// Function to update grammar forms in the UI
function updateGrammarForms(verb) {
    const grammarInfo = document.getElementById("grammar-info");

    if (verbData[verb]) {
        // If the verb is found in predefined data
        const forms = verbData[verb];
        grammarInfo.innerHTML = `
            <h3>Verb: ${verb}</h3>
            <p><strong>Past (ماض):</strong> ${forms.past}</p>
            <p><strong>Present (مضارع):</strong> ${forms.present}</p>
            <p><strong>Command (أمر):</strong> ${forms.command}</p>
            <p><strong>Origin (مصدر):</strong> ${forms.origin}</p>
        `;
    } else if (verb.trim() === "") {
        // Empty input validation
        grammarInfo.innerHTML = `<p>Please select or enter a valid verb.</p>`;
    } else {
        // For custom verbs not in the predefined data
        grammarInfo.innerHTML = `
            <h3>Verb: ${verb}</h3>
            <p><strong>Past (ماض):</strong> Not available</p>
            <p><strong>Present (مضارع):</strong> Not available</p>
            <p><strong>Command (أمر):</strong> Not available</p>
            <p><strong>Origin (مصدر):</strong> Not available</p>
        `;
    }
}

// Event listener for the dropdown and input field
document.getElementById("show-verb-forms").addEventListener("click", function () {
    const selectedVerb = document.getElementById("verb-select").value;
    const customVerb = document.getElementById("custom-verb").value;

    // Use custom verb if entered; otherwise, use selected verb
    const verb = customVerb.trim() || selectedVerb;
    updateGrammarForms(verb);
});

// Initialize with the default verb "ذهب"
updateGrammarForms("ذهب");
