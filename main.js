var tableBody = $("<table>");
var header = document.querySelector("#header");
var form = document.querySelector("#gradeForm")
var noGrades = document.querySelector("#noGrade");
var gradeForm = new GradeForm(form);
var pageHeader = new PageHeader(header);
var newTable = new GradeTable(tableBody, noGrades);
var initiate = new App(newTable, pageHeader, gradeForm);
initiate.start();
