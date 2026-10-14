const students = [
    {
        id: "ST001",
        username: "john",
        name: "John Munene",
        course: "BSc Computer Science",
        gpa: 3.8,
        enrolledCourses: 6,
        credits: 29,
        attendance: 92,
        feesBalance: 450,

        nextExam: {
            date: "April 25",
            time: "10:00 AM",
            room: "Room 200"
        },

        timetable: {
            totalClasses: 7,
            today: "Web-dev",
            tomorrow: "Cyb-sec"
        }
    },

    {
        id: "ST002",
        username: "mary",
        name: "Mary Wanjiku",
        course: "BSc Information Technology",
        gpa: 3.6,
        enrolledCourses: 6,
        credits: 24,
        attendance: 88,
        feesBalance: 300,

        nextExam: {
            date: "April 27",
            time: "2:00 PM",
            room: "Room 105"
        },

        timetable: {
            totalClasses: 6,
            today: "Database",
            tomorrow: "Networking"
        }
    },

    {
        id: "ST003",
        username: "brian",
        name: "Brian Otieno",
        course: "BSc Software Engineering",
        gpa: 3.9,
        enrolledCourses: 8,
        credits: 32,
        attendance: 95,
        feesBalance: 150,

        nextExam: {
            date: "April 29",
            time: "9:00 AM",
            room: "Room 210"
        },

        timetable: {
            totalClasses: 8,
            today: "Java",
            tomorrow: "Cybersecurity"
        }
    }
];

const studentId = localStorage.getItem("currentStudent");

const currentStudent = students.find(function(student) {
    return student.id === studentId;
});

if (!currentStudent) {
    window.location.href = "/src/index.html";
} else {

    document.querySelector("#profile-card-name").textContent =
        currentStudent.name;

    document.querySelector("#profile-card-id").textContent =
        currentStudent.id;

    document.querySelector("#profile-card-course").textContent =
        currentStudent.course;

    document.querySelector("#enrolled-courses").textContent =
        currentStudent.enrolledCourses + " Enrolled Courses";

    document.querySelector("#total-credits").textContent =
        currentStudent.credits + " Credits";

    document.querySelector("#current-gpa").textContent =
        "Current GPA: " + currentStudent.gpa;

    document.querySelector("#attendance-percentage").textContent =
        currentStudent.attendance + "%";

    document.querySelector("#fees-balance").textContent =
        "Balance Due: $" + currentStudent.feesBalance.toFixed(2);

    document.querySelector("#exam-date").textContent =
        currentStudent.nextExam.date + ", " +
        currentStudent.nextExam.time;

    document.querySelector("#exam-room").textContent =
        currentStudent.nextExam.room;

    document.querySelector("#class-total").textContent =
        "Total Classes: " +
        currentStudent.timetable.totalClasses;

    document.querySelector("#class-today").textContent =
        "Today: " +
        currentStudent.timetable.today;

    document.querySelector("#class-tomorrow").textContent =
        "Tomorrow: " +
        currentStudent.timetable.tomorrow;
}
    const logoutButton = document.querySelector("#logout-button");
