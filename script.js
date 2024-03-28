let students = [
    { name: "Jordan", grade: "A", missingAssignments: 2 },
    { name: "Kyle", grade: "B", missingAssignments: 1 },
    { name: "Maxine", grade: "C", missingAssignments: 3 },
    { name: "Kadesha", grade: "F", missingAssignments: 3 }
];

// Function to display students in the table
function displayStudents() {
    const tableBody = document.getElementById("studentTableBody");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.grade}</td>
            <td>${student.missingAssignments}</td>
            <td>
                <button type="button" class="btn btn-primary btn-sm" onclick="editStudent(${index})">Edit</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to edit student information
function editStudent(index) {
    const newName = prompt("Enter new name:");
    const newGrade = prompt("Enter new grade:");
    const newMissingAssignments = prompt("Enter missing assignments:");

    // Update student information if inputs are not empty
    if (newName !== null && newName.trim() !== "" && newGrade !== null && newGrade.trim() !== "" && newMissingAssignments !== null && !isNaN(newMissingAssignments)) {
        students[index].name = newName.trim();
        students[index].grade = newGrade.trim();
        students[index].missingAssignments = parseInt(newMissingAssignments);
        displayStudents(); // Refresh the table
    }
}

// Function to add a new student
function addStudent() {
    const newName = prompt("Enter student name:");
    const newGrade = prompt("Enter student grade:");
    const newMissingAssignments = prompt("Enter missing assignments:");

    // Add new student if inputs are not empty
    if (newName !== null && newName.trim() !== "" && newGrade !== null && newGrade.trim() !== "" && newMissingAssignments !== null && !isNaN(newMissingAssignments)) {
        students.push({ name: newName.trim(), grade: newGrade.trim(), missingAssignments: parseInt(newMissingAssignments) });
        displayStudents(); // Refresh the table
    }
}

// Initial display of students
displayStudents();