var tableBody = $("<table>");
var header = document.querySelector("#header");
var form = document.querySelector("#gradeForm")
var gradeForm = new GradeForm(form);
var pageHeader = new PageHeader(header);
var newTable = new GradeTable(tableBody);
var initiate = new App(newTable, pageHeader, gradeForm);
initiate.start();
