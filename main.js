var tableBody = $("<table>");
var header = document.querySelector("#header");
var pageHeader = new PageHeader(header);
var newTable = new GradeTable(tableBody);
var initiate = new App(newTable, pageHeader);
initiate.start();
