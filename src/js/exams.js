const semesterSelect = document.getElementById("semester-select");
const viewResultsButton = document.getElementById("view-results-button");
const resultsSection = document.getElementById("results-section");
const selectedSemesterTitle = document.getElementById("selected-semester-title");

viewResultsButton.addEventListener("click", () => {

    const selectedSemester = semesterSelect.value;

    if (!selectedSemester) {
        alert("Please select a semester first.");
        return;
    }

    const semesterName = semesterSelect.options[semesterSelect.selectedIndex].text;

    selectedSemesterTitle.textContent = semesterName;

    resultsSection.classList.remove("hidden");
});