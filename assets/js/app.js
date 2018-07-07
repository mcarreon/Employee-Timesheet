var employeesList = [];


$("#add-employee-btn").on("click", function(event) {
    event.preventDefault();
    
    var emp = {};
    emp.empName = $('#name').val().trim();
    emp.role = $('#role').val().trim();
    emp.startDate = $('#date').val().trim();
    emp.monthlyRate = $('#rate').val().trim();
    
    emp.monthsWorked = emp.startDate;
    emp.totalBill = emp.monthlyRate;

    employeesList.push(emp);
    database.ref().push(emp);

    var tr = $('<tr>');

    var elename = $('<td>');
    elename.text(emp.empName);

    var elerole = $('<td>');
    elerole.text(emp.role);

    var elestart = $('<td>');
    elestart.text(emp.startDate);

    var elemonths = $('<td>');
    elemonths.text(emp.monthsWorked);

    var elemonRate = $('<td>');
    elemonRate.text(emp.monthlyRate);

    var eletotalBill = $('<td>'); 
    eletotalBill.text(emp.totalBill);

    
    tr.append(elename);
    tr.append(elerole);
    tr.append(elestart);
    tr.append(elemonths);
    tr.append(elemonRate);
    tr.append(eletotalBill);

    $('tbody').append(tr);


});

