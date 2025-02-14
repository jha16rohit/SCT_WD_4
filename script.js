const goalInput = document.getElementById("goal_input");
const goalForm = document.getElementById("goal_form");
const goalList = document.getElementById("goal_list");

// Event listener for form submission
goalForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addGoal();
});

// Function to add a new goal
function addGoal() {
    const goal = goalInput.value.trim();
    if (goal === "") {
        alert("Please enter a goal");
        return;
    }

    const goalItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("goal-check");
    goalItem.appendChild(checkbox);

    const goalText = document.createElement("span");
    goalText.classList.add("goal-text");
    goalText.textContent = goal;
    goalItem.appendChild(goalText);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.textContent = "❌";
    goalItem.appendChild(deleteBtn);

    goalList.appendChild(goalItem);
    goalInput.value = "";
    saveData();
}

// Mark goal as completed
goalList.addEventListener("change", function (event) {
    if (event.target.classList.contains("goal-check")) {
        event.target.nextElementSibling.classList.toggle("completed");
        saveData();
    }
});

// Delete goal
goalList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
        saveData();
    }
});

// Save goals in local storage
function saveData() {
    localStorage.setItem("goals", goalList.innerHTML);
}

// Load saved goals from local storage on page load
function loadData() {
    goalList.innerHTML = localStorage.getItem("goals") || "";
}

loadData();
