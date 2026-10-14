const savedStudents = localStorage.getItem("students");

const students = savedStudents
    ? JSON.parse(savedStudents)
    : [];

const form = document.querySelector("#student-form");

const admissionNumber = document.querySelector("#admission-number");
const fullName = document.querySelector("#full-name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const course = document.querySelector("#course");
const year = document.querySelector("#year");

const message = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const student = {
        id: admissionNumber.value.trim(),
        name: fullName.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        course: course.value,
        year: year.value
    };

    students.push(student);

    localStorage.setItem("students", JSON.stringify(students));

    message.textContent = "Student registered successfully.";

    form.reset();

    console.log(students);
});