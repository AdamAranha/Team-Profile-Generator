const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = []


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

async function getManagerInfo() {
    const response = await inquirer.prompt(
        [
            {
                type: 'input',
                message: `Please enter the team manager's name`,
                name: 'name'

            },

            {
                type: 'input',
                message: `Please enter the team manager's employee ID`,
                name: 'id'
            },

            {
                type: 'input',
                message: `Please enter the team manager's email address`,
                name: 'email'
            },

            {
                type: 'input',
                message: `Please enter the team manager's office number`,
                name: 'officeNumber'
            }
        ]
    )

    console.log(response)
    const createObj = (name, id, email, unique) => { employees.push(name = new Manager(name, id, email, unique)) }
    createObj(response.name, response.id, response.email, response.officeNumber);
    encore()
}

async function getInternInfo() {
    const response = await inquirer.prompt(
        [
            {
                type: 'input',
                message: `Please enter this Intern's name`,
                name: 'name'

            },

            {
                type: 'input',
                message: `Please enter the Intern's employee ID`,
                name: 'id'
            },

            {
                type: 'input',
                message: `Please enter the Intern's email address`,
                name: 'email'
            },

            {
                type: 'input',
                message: `What school did this Intern go to?`,
                name: 'school'
            }
        ]
    )
    console.log(response)
    const createObj = (name, id, email, unique) => { employees.push(name = new Intern(name, id, email, unique)) }
    createObj(response.name, response.id, response.email, response.school);
    encore()
}

async function getEngineerInfo() {
    const response = await inquirer.prompt(
        [
            {
                type: 'input',
                message: `Please enter the Engineer's name`,
                name: 'name'

            },

            {
                type: 'input',
                message: `Please enter the Engineer's employee ID`,
                name: 'id'
            },

            {
                type: 'input',
                message: `Please enter the Engineer's email address`,
                name: 'email'
            },

            {
                type: 'input',
                message: `Please enter the Engineer's GitHub Username`,
                name: 'github'
            }
        ]
    )
    console.log(response)
    const createObj = (name, id, email, unique) => { employees.push(name = new Engineer(name, id, email, unique)) }
    createObj(response.name, response.id, response.email, response.github);
    encore()
}

async function encore() {
    const response = await inquirer.prompt(
        {
            type: 'list',
            message: `Would you like to add another member to the team`,
            choices: ['Engineer', 'Intern', 'No More Members'],
            name: 'nextChoice'
        }
    )
    console.log(response)

    switch (response.nextChoice) {
        case ('Engineer'):
            console.log('Adding an Engineer')
            getEngineerInfo()
            break;

        case ('Intern'):
            console.log('Adding an Intern')
            getInternInfo()
            break;

        case ('No More Members'):
            console.log('Positions filled')
            console.log(employees)
            const output = render(employees)
            fs.writeFileSync('index.html', output)

            break;
    }
}



getManagerInfo()
