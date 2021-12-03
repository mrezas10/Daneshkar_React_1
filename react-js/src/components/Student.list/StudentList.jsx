import {Component} from 'react'

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

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {students: students}
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <td>ID</td>
                        <td>First name</td>
                        <td>Last name</td>
                        <td>Status</td>
                        <td>Actions</td>
                    </tr>
                    </thead>
                    <tbody id="students-container">
                    {this.state.students.map(student => (
                        <tr>
                            <td className="student-id">{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.status}</td>
                            <td>
                                <button onClick={() => {
                                    student.firstName = prompt("please enter your first name" , student.firstName)
                                    student.lastName = prompt("please enter your last name", student.lastName)
                                    student.status = prompt("please enter your status", student.status)
                                    this.setState({students: students})
                                }}>Update</button>
                                <button onClick={() => {
                                    students = students.filter(user => user.id !== student.id)
                                    this.setState({students: students})
                                }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button onClick={ () => {
                    let firstName = prompt("please enter your first name")
                    let lastName = prompt("please enter your last name")
                    let status = prompt("please enter your status")
                    let newStudent = new Student(firstName, lastName, status)
                    students.push(newStudent)
                    this.setState({students: students})
                }
                }>Add Student</button>
            </div>
        )
    }
}

export default StudentList