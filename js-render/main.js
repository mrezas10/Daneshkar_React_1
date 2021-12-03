function Student(firstName, lastName, status) {
    this.id = Math.floor(Math.random()*100000)
    this.firstName = firstName
    this.lastName = lastName
    this.status = status
}

let students = []
students.push(new Student('Mohammadreza' , 'Saffari', "programmer"))
students.push(new Student('Mohammad' , 'Saffari', "developer"))
students.push(new Student('reza' , 'Saffari', "photographer"))

function generateStudents() {
    let generatedStudents = ""
    students.forEach(student => generatedStudents+=`
    <tr>
        <td class="student-id">${student.id}</td>
        <td>${student.firstName}</td>
        <td>${student.lastName}</td>
        <td>${student.status}</td>
        <td>
          <button onclick="updateStudent(this)">Update</button>
          <button onclick="deleteStudent(this)">Delete</button>
        </td>
    </tr>
    `)
    let studentContainer = document.getElementById("students-container")
    studentContainer.innerHTML = generatedStudents
}

generateStudents()

function addStudent() {
    let firstName = prompt("please enter your first name")
    let lastName = prompt("please enter your last name")
    let status = prompt("please enter your status")
    let newStudent = new Student(firstName, lastName, status)
    students.push(newStudent)
    generateStudents()
}

function updateStudent(e) {
    let id = e.parentElement.parentElement.getElementsByClassName("student-id")[0].textContent
    students.forEach(student => {
        if (student.id === Number(id)) {
            student.firstName = prompt("please enter your first name" , student.firstName)
            student.lastName = prompt("please enter your last name", student.lastName)
            student.status = prompt("please enter your last name", student.status)
        }

    })
    generateStudents()
}

function deleteStudent(e) {
    let id = e.parentElement.parentElement.getElementsByClassName("student-id")[0].textContent
    students = students.filter(student => student.id !== Number(id))
    generateStudents()
}