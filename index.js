const fs = require ('fs');
const inquirer = require('inquirer'); 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Helper = require('./utils/helpers');


inquirer
const managerQuestions = () => {
    return inquirer.prompt([
{
    type: "input",
    message: "What is the team manager's name",
    name: "manager-name"
},
{
    type: "input",
    message: "Enter the team manager's employee ID",
    name: "manager-ID"    
},
{
    type: "input",
    message: "Enter the team manager's email address",
    name: "manager-email"    
},
{
    type: "input",
    message: "Enter the team manager's office number",
    name: "manager-office"    
}
]);
};

//make a new function that you can call after the initial prompts about adding engineer or intern
const newEmployee = () => {
    return inquirer.prompt([
{
    type: "list",
    message: "Would you like to add an engineer or an intern to your team?",
    name: "employee-type", 
    choices: ['engineer', 'intern', 'done']   
}
]);
};
// make another prompt function that can be called after to collect engineer info
const engineerQuestions = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the engineer's name",
        name: "engineer-name"
    },
    {
        type: "input",
        message: "Enter the engineer's employee ID",
        name: "engineer-ID"    
    },
    {
        type: "input",
        message: "Enter the engineer's email address",
        name: "engineer-email"    
    },
    {
        type: "input",
        message: "Enter the engineer's Github username",
        name: "engineer-username"    
    }
]);
};

// make another prompt function that can be called to collect intern info
const internQuestions = () => {
    return inquirer.prompt([
    {
        type: "input",
        message: "What is the intern's name",
        name: "engineer-name"
    },
    {
        type: "input",
        message: "Enter the intern's employee ID",
        name: "engineer-ID"    
    },
    {
        type: "input",
        message: "Enter the intern's email address",
        name: "engineer-email"    
    },
    {
        type: "input",
        message: "Enter the intern's school",
        name: "engineer-username"    
    }
]);
};

managerQuestions()
.then(newEmployee)
if(newEmployee.employee-type === 'engineer'){
engineerQuestions()
}
else if (newEmployee.employee-type === 'intern'){
    internQuestions()
}
else {
    (answers => writeToFile('./output/index.html', generateMarkdown(answers)))
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};    

// TODO: Create a function to initialize app
//notes: i don't think my then prompts are correct and I need to update my writetofile completely
/* function init() {
    inquirer
    .prompt(managerQuestions)
    .then (prompt(newEmployee))
    if ( newEmployee.employee-type === "engineer") {
        prompt(engineerQuestions)
    }
    else if ( newEmployee.employee-type === "intern") {
       prompt(internQuestions)
    }
    else if ( newEmployee.employee-type === "done") {
        then(answers => writeToFile('./output/index.html', generateMarkdown(answers)));   
    }

}; */

// Function call to initialize app
//init();