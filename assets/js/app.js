var employeesList = [];


$("#add-employee-btn").on("click", function(event) {
    event.preventDefault();
    
    var emp = {};
    emp.name = $().val().trim();
    emp.role = $().val().trim();
    emp.startDate = $().val().trim();
    emp.monthlyRate = $().val().trim();
    
    emp.monthsWorked = emp.startDate;
    emp.totalBill = emp.monthlyRate;

    var tr = $('<tr>');

    var elename = $('<td>');

    var elerole = $('<td>');

    var elestart = $('<td>');

    var elemonths = $('<td>');

    var elemonRate = $('<td>');

    var eletotalBill = $('<td>'); 

    
    tr.append(name);
    tr.append(role);
    tr.append(start);
    tr.append(months);
    tr.append(monRate);
    tr.append(totalBilled);

    $('tbody').append(tr);
});