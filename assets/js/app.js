function clearForm() {
    $("#name").val("");
    $("#role").val("");
    $("#date").val("");
    $("#rate").val("");
}

function clearTable() {
    $('tbody>').empty();
}

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB38SVdf2SObtbKFyt4OenutB7oUDw0dLI",
    authDomain: "uclax-85776.firebaseapp.com",
    databaseURL: "https://uclax-85776.firebaseio.com",
    projectId: "uclax-85776",
    storageBucket: "uclax-85776.appspot.com",
    messagingSenderId: "140111681205"
};
firebase.initializeApp(config);
database = firebase.database();

var employeesList = [];

$("#add-employee-button").on("click", function(event) {
    event.preventDefault();

    startDate = moment($('#date').val().trim()).format('MM-DD-YYYY');
    monthsWork = moment().diff(startDate, 'months');
    totalBill = $('#rate').val().trim() * monthsWork;
    
    var emp = {};
    emp.empName = $('#name').val().trim();
    emp.role = $('#role').val().trim();
    emp.startDate = $('#date').val().trim();
    emp.monthlyRate = $('#rate').val().trim();
    emp.monthsWork = monthsWork;
    emp.totalBill = totalBill;

    
    database.ref().push(emp);

    clearForm();
});

database.ref().on('child_added', function(snapshot) {
    employeesList.push(snapshot.val());
    fillEmployees(employeesList);
});

function fillEmployees(emp) {
    clearTable();
    console.log(emp);

    for (var i = 0; i < emp.length; i++) {
        var tr = $('<tr>');

        var elename = $('<td>');
        elename.text(emp[i].empName);
    
        var elerole = $('<td>');
        elerole.text(emp[i].role);
    
        var elestart = $('<td>');
        elestart.text(emp[i].startDate);
    
        var elemonths = $('<td>');
        elemonths.text(emp[i].monthsWork);
    
        var elemonRate = $('<td>');
        elemonRate.text(emp[i].monthlyRate);
    
        var eletotalBill = $('<td>'); 
        eletotalBill.text(emp[i].totalBill);
    
        
        tr.append(elename);
        tr.append(elerole);
        tr.append(elestart);
        tr.append(elemonths);
        tr.append(elemonRate);
        tr.append(eletotalBill);
    
        $('tbody').append(tr);
    }     
}