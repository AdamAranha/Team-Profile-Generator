// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id)
        this.school = school
    }
}

const generateIntern = (name, id, email, school) => {
    return `
        <div class="card employee-card mx-2 shadow">
            <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID:${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">School:${school}</li>
                </ul>
            </div>
        </div>`
}


module.exports = { Intern, generateIntern }