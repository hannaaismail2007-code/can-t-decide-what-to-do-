/* ==========================================================================
   STUDY BUTTON - JAVASCRIPT (script.js)
   Beginner-friendly random option picker.
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. DEFINE THE 3 OPTIONS
// An array (list) containing our 3 study activities.
// Each item has a title, icon, description, and theme class for styling.
// --------------------------------------------------------------------------
const studyOptions = [
    {
        title: "Go Study",
        icon: "📚",
        tag: "Activity #1",
        description: "Time to open your books or notes and focus on learning something new today!",
        themeClass: "theme-study"
    },
    {
        title: "Take Test",
        icon: "📝",
        tag: "Activity #2",
        description: "Test your knowledge! Practice sample questions and see how much you know.",
        themeClass: "theme-test"
    },
    {
        title: "Watch Films",
        icon: "🎬",
        tag: "Activity #3",
        description: "Grab a snack and watch an inspiring educational film or documentary!",
        themeClass: "theme-films"
    }
];

// --------------------------------------------------------------------------
// 2. GET REFERENCES TO HTML ELEMENTS
// We find our button and our result box using document.getElementById().
// --------------------------------------------------------------------------
const studyButton = document.getElementById("main-study-btn");
const resultBox = document.getElementById("result-box");

// --------------------------------------------------------------------------
// 3. LISTEN FOR BUTTON CLICKS
// Whenever the user clicks the STUDY BUTTON, this function runs.
// --------------------------------------------------------------------------
studyButton.addEventListener("click", function () {
    // Reveal the result box on click
    resultBox.style.display = "flex";

    // A. Generate a random index between 0, 1, and 2
    // - Math.random() produces a random decimal between 0 and 1
    // - Multiplying by studyOptions.length gives 0 to 2.999...
    // - Math.floor() rounds down to the nearest whole number (0, 1, or 2)
    const randomIndex = Math.floor(Math.random() * studyOptions.length);
    const selectedOption = studyOptions[randomIndex];

    // B. Reset any existing theme classes on the result box
    resultBox.className = "result-card pop-in " + selectedOption.themeClass;

    // C. Update the HTML inside the result card to show the chosen option
    resultBox.innerHTML = `
        <div class="result-content">
            <span class="result-tag">${selectedOption.tag}</span>
            <div class="result-icon-large">${selectedOption.icon}</div>
            <h2 class="result-heading">${selectedOption.title}</h2>
            <p class="result-description">${selectedOption.description}</p>
            <p class="result-again-hint">🔄 Click the <strong>STUDY BUTTON</strong> again if you want to re-roll!</p>
        </div>
    `;

    // D. Re-trigger the pop-in animation on every click
    resultBox.classList.remove("pop-in");
    void resultBox.offsetWidth; // This small trick restarts CSS animation
    resultBox.classList.add("pop-in");
});
