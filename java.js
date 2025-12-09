// Read difficulty from URL
const params = new URLSearchParams(window.location.search);
const urlMode = params.get("mode");

if (urlMode === "easy") aiDifficulty = "easy";
if (urlMode === "medium") aiDifficulty = "medium";
if (urlMode === "hard") aiDifficulty = "hard"; // you will add hard logic later
