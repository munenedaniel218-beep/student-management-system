const students = [
    {
        id: "ST001",
        password: "stud001",
        name: "John Munene",
        course: "BSc Computer Science"
    },
    {
        id: "ST002",
        password: "stud002",
        name: "Mary Wanjiku",
        course: "BSc Information Technology"
    },
    {
        id: "ST003",
        password: "stud003",
        name: "Brian Otieno",
        course: "BSc Software Engineering"
    }
];

const form = document.querySelector("#login-form");
const admNo = document.querySelector("#adm-no");
const password = document.querySelector("#password");
const admNoError = document.querySelector("#adm-no-error");
const passwordError = document.querySelector("#password-error");
const loginButton = document.querySelector("#login-button");
const togglePasswordButton = document.querySelector("#toggle-password-button");

loginButton.disabled = true;

function validateForm() {
    let valid = true;

    if (admNo.value.trim() === "") {
        admNoError.textContent = "Admission number is required";
        valid = false;
    } else {
        admNoError.textContent = "";
    }

    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    loginButton.disabled = !valid;
}

admNo.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);

togglePasswordButton.addEventListener("click", function() {
    const hidden = password.type === "password";

    password.type = hidden ? "text" : "password";
    togglePasswordButton.textContent = hidden ? "Hide" : "Show";
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const admissionNumber = admNo.value.trim();
    const enteredPassword = password.value;

    const student = students.find(function(student) {
        return student.id === admissionNumber &&
               student.password === enteredPassword;
    });

    if (student) {
        localStorage.setItem("currentStudent", student.id);

        window.location.href = "/src/studentDashboard.html";
    } else {
        passwordError.textContent = "Invalid admission number or password";
    }
});