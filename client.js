//check if js is loaded
console.log('js loaded!');

$(document).ready(readyNow);

//start things off
function readyNow() {
    console.log('in ReadyNow');

    // click listeners
    $('#addEmployee').on('click', employeeClick);
    $('#employeeData').on('click', '#deleteEmployee', employeeDataDelete);

}


let employees = [];




//entered data and calls the function to display on the DOM in a table
function employeeClick() {
    console.log('in employeeClick');
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idNumberIn').val(),
        jobTitle: $('#jobTitleIn').val(),
        annualSalary: $('#annualSalaryIn').val()
    };
    console.log('new employee info', newEmployee);

    employees.push(newEmployee);
    console.log('array', employees);



    renderToDom();



    clearInput();

    sumMonthly(employees);

}
//removes a employee data row when delete button clicked
function employeeDataDelete() {
    console.log('in data delete');
    $(this).parent().parent().remove()
}

//renders the entered employee data to the DOM
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
           <td><button class="delete employee"  id="deleteEmployee">Delete</button></td>
        </tr>`)

    }


}

/*totals the employee annual salaries, determines monthly amount, changes to fixed
two decimal places and gives red background color is monthly amount > 20K */
function sumMonthly(array) {
    console.log('in sumMonthly');
    let sum = 0;
    for (let employee of array) {
        console.log('in for loop');
        sum += parseFloat(employee.annualSalary);
        console.log('employee.annualSalary', employee.annualSalary);
        console.log('sum', sum);
    }
    let total = sum / 12
    let n = total.toFixed(2);
    total = n
    console.log('total', total);
    let totalSalary = $('#annualSalaryAdder')
    totalSalary.empty();
    
    totalSalary.append(`<div id=annualSalaryAdder>Total Monthly: ${total}</div>`);
    console.log('totalSalary', totalSalary);

    

    if (total > 20000.00) {
        console.log('in if', total);
        $('#annualSalaryAdder').css("background-color", "red");
    }
    return total;
}





//clears the employee input fields
function clearInput() {
    console.log('in clearInput');
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#jobTitleIn').val('');
    $('#annualSalaryIn').val('');
}



