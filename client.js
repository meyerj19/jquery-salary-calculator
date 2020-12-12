console.log('js loaded!');

$(document).ready(readyNow);


function readyNow() {
    console.log('in ReadyNow');

    // click listeners
    $('#addEmployee').on('click', employeeClick);
}


let employees = [];


function employeeClick(){
    console.log('in employeeClick');
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()     
    };
    console.log(newEmployee);
    employees.push(newEmployee);
    console.log(employees);

    renderToDom();

    clearInput();

}


function renderToDom() {
    console.log('in renderToDom');
    $('#employeeData').empty();
    for (let employee of employees) {
        $('#employeeData').append(`
        <tr class="employee">
           <td>${employee.firstName}</td>
           <td>${employee.lastName}</td>
           <td>${employee.idNumber}</td>
           <td>${employee.jobTitle}</td>
           <td>${employee.annualSalary}</td>
           <button>Delete</button>
        </tr>`)
        //$('#employeeData').priceFormat(`
        //<tr class="employee">
           //<td>${employee.annualSalary}</td>
        //</tr>`)
    }
}

function clearInput(){
    console.log('in clearInput');
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}



//$('#price').priceFormat();