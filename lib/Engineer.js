// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        super(name, email, id)
        this.gitHub = gitHub
    }
}

const generateEngineer = (name, id, email, github) => {
    return `
        <div class="card employee-card mx-2 shadow">
            <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-tools mr-2"></i></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID:${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
                </ul>
            </div>
        </div>`
}

module.exports = { Engineer, generateEngineer }