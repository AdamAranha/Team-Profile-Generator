const inquirer = require('inquirer')
const fs = require('fs')
const engineer = require('./lib/Engineer')
const intern = require('./lib/Intern')
const manager = require('./lib/Manager')
const renderBender = require('./lib/htmlRenderer')

const arrayEng = []
const arrayInt = []
const arrayMan = []

var htmlEng = ''
var htmlInt = ''
var htmlMan = ''




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
    // Arrow function that creates object using the Manager class, names it using the manager's name, and fills it with the user submitted information
    const createObj = name => { arrayMan.push(name = new manager.Manager(respMan.managerName, respMan.managerID, respMan.managerEmail, respMan.managerOfficeNo)) };
    createObj(respMan.managerName);

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
    // Arrow function that creates object using the Intern class, names it using the intern's name, and fills it with the user submitted information
    const createObj = name => {
        arrayInt.push(name = new intern.Intern(respIntern.internName, respIntern.internID, respIntern.internEmail, respIntern.internSchool))
    };
    createObj(respIntern.internName);

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
    // Arrow function that creates object using the Manager class, names it using the managers name, and fills it with the user submitted information
    const createObj = name => {
        arrayEng.push(name = new engineer.Engineer(respEng.engineerName, respEng.engineerID, respEng.engineerEmail, respEng.engineerGitHub
        ))
    };
    createObj(respEng.engineerName);

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
            console.log('Adding an Engineer')
            getEngineerInfo()
            break;

        case ('Intern'):
            console.log('Adding an Intern')
            getInternInfo()
            break;

        case ('No More Members'):
            console.log('Positions filled')
            console.log(arrayMan, arrayEng, arrayInt)

            generateHTML()
            break;
    }
}

function generateHTML() {

    for (let i = 0; i < arrayEng.length; i++) {
        htmlEng = engineer.generateEngineer(arrayEng[i].name, arrayEng[i].email, arrayEng[i].id, arrayEng[i].gitHub)
        console.log(htmlEng)
    }
    for (let i = 0; i < arrayInt.length; i++) {
        htmlInt = intern.generateIntern(arrayInt[i].name, arrayInt[i].email, arrayInt[i].id, arrayInt[i].school)
        console.log(htmlEng)
    }
    for (let i = 0; i < arrayMan.length; i++) {
        htmlMan = manager.generateManager(arrayMan[i].name, arrayMan[i].email, arrayMan[i].id, arrayMan[i].gitHub)
        console.log(htmlEng)
    }
    const output = renderBender(htmlEng, htmlInt, htmlMan)
    fs.writeFileSync('index.html', output);

}


getManagerInfo()
