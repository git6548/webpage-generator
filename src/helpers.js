//const fs = require('fs');
//const {EmployeeData} = require('../index');
//const index = require('../index');
// const Employee = require('../lib/Employee');
// const Engineer = require('../lib/Engineer');
// const Manager = require('../lib/Manager');
// const Intern = require('../lib/Intern');

function generateMarkdown(EmployeeData) {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    
    <body>
        <header>
            <h1>My Team</h1>
        </header>

        ${(makeEmployeeBlocks(EmployeeData))}
    
        <script src="./assets/js/script.js" async defer></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
  `;
  };
  

  function makeEmployeeBlocks(EmployeeData){
  // can't get this to work      EmployeeData.forEach(EmployeeData.getRole)
  //console.log(JSON.stringify(EmployeeData) + "helper");
  return EmployeeData.map(employee => {
         if(employee.getRole() === 'Manager') {
            return ` 
            <div class="card text-white bg-secondary col-3" style="max-width: 18rem;">
            <div class="card-header">${employee.getName()}</div>
            <div class="card-body">
              <h5 class="card-title">${employee.getRole()}</h5>
              <p class="card-text">ID: ${employee.getId()}</p>
              <p class="card-text">Email: ${employee.getEmail()}</p>
              <p class="card-text">Office Number: ${employee.getOfficeNumber()}</p>
            </div>         
            `;
         }
         else if(employee.getRole() === 'Engineer') {
            return ` 
            <div class="card text-white bg-secondary col-3" style="max-width: 18rem;">
            <div class="card-header">${employee.getName()}</div>
            <div class="card-body">
              <h5 class="card-title">${employee.getRole()}</h5>
              <p class="card-text">ID: ${employee.getId()}</p>
              <p class="card-text">Email: ${employee.getEmail()}</p>
              <p class="card-text">Office Number: ${employee.getGithub()}</p>
            </div>             
            `;

         }
         else if (employee.getRole() === 'Intern') {
            return `   
            <div class="card text-white bg-secondary col-3" style="max-width: 18rem;">
            <div class="card-header">${employee.getName()}</div>
            <div class="card-body">
              <h5 class="card-title">${employee.getRole()}</h5>
              <p class="card-text">ID: ${employee.getId()}</p>
              <p class="card-text">Email: ${employee.getEmail()}</p>
              <p class="card-text">School: ${employee.getSchool()}</p>
            </div>  
            `;
         }}).join();
     };
     //check EmployeeData.getRole()
     //if role = manager, return managerhtml block
     //if role = engineer, return engineerhtml block
     //if role = intern, return interhtml block

  module.exports = generateMarkdown;

  // ${EmployeeData.project}