// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, email, id, officeNo) {
        super(name, email, id)
        this.officeNo = officeNo
    }
}

module.exports = Manager