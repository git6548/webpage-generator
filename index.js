// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt ([
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

//make a new function that you can call after the initial prompts about adding engineer or intern
inquirer
.prompt ([
{
    type: "list",
    message: "Would you like to add an engineer or an intern to your team?",
    name: "employee-type", 
    choices: ['engineer', 'intern', 'done']   
}
]);
// make another prompt function that can be called after to collect engineer info
inquirer
.prompt ([
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

// make another prompt function that can be called to collect intern info
inquirer
.prompt ([
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
//need to update this for this project
.then(questions => writeToFile('./README.md', generateMarkdown(questions)));