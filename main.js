var tableBody = $("<table>");
var header = $("<h5>");
var pageHeader = new PageHeader(header);
var newTable = new GradeTable(tableBody);
var initiate = new App(newTable, pageHeader);
initiate.start();
