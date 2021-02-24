// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, email, id, officeNo) {
        super(name, email, id)
        this.officeNo = officeNo
    }
}

const generateManager = (name, id, email, officeNumber) => {
    return `
        <div class="card employee-card mx-2 shadow">
            <div class="card-header">
                <h2 class="card-title">${name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID:${id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                    <li class="list-group-item">Office number:${officeNumber}</li>
                </ul>
            </div>
        </div>`
}


module.exports = { Manager, generateManager }