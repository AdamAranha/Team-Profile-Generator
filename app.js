const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')



async function getManagerInfo() {
    const respMan = await inquirer.prompt(
        [
            {
                type: 'input',
                message: `Please enter the team manager's name`,
                name: 'managerName'

            },

            {
                type: 'input',
                message: `Please enter the team manager's employee ID`,
                name: 'managerID'
            },

            {
                type: 'input',
                message: `Please enter the team manager's email address`,
                name: 'managerEmail'
            },

            {
                type: 'input',
                message: `Please enter the team manager's office number`,
                name: 'managerOfficeNo'
            }
        ]
    )

    console.log(respMan)
    let newArray = []
    function createObj(name) {
        newArray.push(name = new Manager(respMan.managerName, respMan.managerID, respMan.managerEmail, respMan.managerOfficeNo))
    }
    createObj(respMan.managerName)
    // const tempName = new Manager(respMan.managerName, respMan.managerID, respMan.managerEmail, respMan.managerOfficeNo)
    // console.log(tempName)
    console.log(newArray)

    encore()
}

async function getInternInfo() {
    const respIntern = await inquirer.prompt(
        [
            {
                type: 'input',
                message: `Please enter this Intern's name`,
                name: 'internName'

            },

            {
                type: 'input',
                message: `Please enter the Intern's employee ID`,
                name: 'internID'
            },

            {
                type: 'input',
                message: `Please enter the Intern's email address`,
                name: 'internEmail'
            },

            {
                type: 'input',
                message: `What school did this Intern go to?`,
                name: 'internSchool'
            }
        ]
    )
    console.log(respIntern)
    encore()
}

async function getEngineerInfo() {
    const respEng = await inquirer.prompt(
        [
            {
                type: 'input',
                message: `Please enter the Engineer's name`,
                name: 'engineerName'

            },

            {
                type: 'input',
                message: `Please enter the Engineer's employee ID`,
                name: 'engineerID'
            },

            {
                type: 'input',
                message: `Please enter the Engineer's email address`,
                name: 'engineerEmail'
            },

            {
                type: 'input',
                message: `Please enter the Engineer's GitHub Username`,
                name: 'engineerGitHub'
            }
        ]
    )
    console.log(respEng)
    encore()
}

async function encore() {
    const respEncore = await inquirer.prompt(
        {
            type: 'list',
            message: `Would you like to add another member to the team`,
            choices: ['Engineer', 'Intern', 'No More Members'],
            name: 'nextChoice'
        }
    )
    console.log(respEncore)

    switch (respEncore.nextChoice) {
        case ('Engineer'):
            console.log('Adding and Engineer')
            getEngineerInfo()
            break;

        case ('Intern'):
            console.log('Adding and Intern')
            getInternInfo()
            break;

        case ('No More Members'):
            console.log('No More Members')
            break;
    }
}

getManagerInfo()
