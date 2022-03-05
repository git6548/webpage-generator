const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// const helper = require('./src/helpers');
 const  generateMarkdown  = require('./src/helpers');

let EmployeeData = [];
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name",
            name: "manager_name"
        },
        {
            type: "input",
            message: "Enter the team manager's employee ID",
            name: "manager_ID"
        },
        {
            type: "input",
            message: "Enter the team manager's email address",
            name: "manager_email"
        },
        {
            type: "input",
            message: "Enter the team manager's office number",
            name: "manager_office"
        }
    ])
    .then((managerData) => {
        const manager = new Manager(managerData.manager_name,managerData.manager_ID,managerData.manager_email, managerData.manager_office);
        EmployeeData.push(manager);
       // console.log(EmployeeData);
    });
};




//make a new function that you can call after the initial prompts about adding engineer or intern
const newEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add an engineer or an intern to your team?",
            name: "employee_type",
            choices: ['engineer', 'intern', 'done']
        }
    ])
    
    .then(employeeTypeData => {
        if (employeeTypeData.employee_type === 'engineer') {
            engineerQuestions()

        }
        else if (employeeTypeData.employee_type === 'intern') {
            internQuestions()
               
        }
       else {
           //console.log("here" + JSON.stringify(EmployeeData));
          
            createTeam(EmployeeData);
       }
    });;
};
// make another prompt function that can be called after to collect engineer info
const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name",
            name: "engineer_name"
        },
        {
            type: "input",
            message: "Enter the engineer's employee ID",
            name: "engineer_ID"
        },
        {
            type: "input",
            message: "Enter the engineer's email address",
            name: "engineer_email"
        },
        {
            type: "input",
            message: "Enter the engineer's Github username",
            name: "engineer_username"
        }
    ])
    .then((engineerData) => {
        const engineer = new Engineer(engineerData.engineer_name,engineerData.engineer_ID,engineerData.engineer_email, engineerData.engineer_username )
        EmployeeData.push(engineer);
        //console.log(EmployeeData);
        newEmployee();
    });
    ;
};

// make another prompt function that can be called to collect intern info
const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name",
            name: "intern_name"
        },
        {
            type: "input",
            message: "Enter the intern's employee ID",
            name: "intern_ID"
        },
        {
            type: "input",
            message: "Enter the intern's email address",
            name: "intern_email"
        },
        {
            type: "input",
            message: "Enter the intern's school",
            name: "intern_school"
        }
    ])
    .then((internData) => {
        const intern = new Intern(internData.intern_name,internData.intern_ID,internData.intern_email, internData.intern_school);
        EmployeeData.push(intern);
        //console.log(EmployeeData);
        newEmployee();
    });
};


// function writeToFile(fileName, data) {
//     fs.writeFileSync(fileName, data,"utf8") 
//         // (err) => {
//         // if (err) throw err;
//         console.log('The file has been saved!');
// };


  
function createTeam(EmployeeData) {
    //console.log(EmployeeData);
(fs.writeFileSync('./dist/index.html', generateMarkdown(EmployeeData)));
};

managerQuestions()
    .then(() => {
         newEmployee();
       //  createTeam(EmployeeData);
});
