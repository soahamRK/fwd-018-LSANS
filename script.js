// Dark Mode Toggle with LocalStorage
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    let isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("lsansTheme", isDark ? "dark" : "light");
    updateThemeButtonText();
}

function updateThemeButtonText() {
    let btn = document.getElementById("themeBtn");
    if (!btn) return;
    if (document.body.classList.contains("dark-mode")) {
        btn.innerHTML = "☀️ Light Mode";
    } else {
        btn.innerHTML = "🌙 Dark Mode";
    }
}

window.onload = function () {
    let savedTheme = localStorage.getItem("lsansTheme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
    updateThemeButtonText();
    startTypingEffect();
};

// Hero Typing Effect
const phrases = [
    "Fairness in Social Networks",
    "Robust Community Detection",
    "Diversified Influence Maximization",
    "Privacy-Preserving Machine Learning"
];
let phraseIndex = 0;
let charIndex = 0;

function startTypingEffect() {
    let target = document.getElementById("typingText");
    if (!target) return;
    let currentPhrase = phrases[phraseIndex];
    target.innerHTML = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentPhrase.length) {
        setTimeout(() => {
            charIndex = 0;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            startTypingEffect();
        }, 1800);
    } else {
        setTimeout(startTypingEffect, 75);
    }
}

// Live Search Filter
function filterCards() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("searchable-card");
    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(input) ? "inline-block" : "none";
    }
}

// Research Card Highlight
function toggleHighlight(card) {
    card.classList.toggle("highlighted-card");
}

// Smooth Back to Top
window.onscroll = function () {
    let btn = document.getElementById("backToTop");
    if (!btn) return;
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Form Submission Alert
function submitForm(event) {
    event.preventDefault();
    alert("Success! Your submission has been recorded and sent to LSANS (Room CSE-221, SAU).");
    event.target.reset();
}