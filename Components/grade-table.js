class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    console.log(grades);
    var tBody = $("#table");
    tBody.empty();
    for (var i = 0; i < grades.length; i++) {
      // var row = document.createElement("tr");
      // var studentName = document.createElement("td");
      // var course = document.createElement("td");
      // var grade = document.createElement("td");
      // tBody.append(row);
      // row.appendChild(studentName);
      // studentName.textContent = grades[i].name;
      // row.appendChild(course);
      // course.textContent = grades[i].course;
      // row.appendChild(grade);
      // grade.textContent = grades[i].grade;
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var table = $("#table");
    var row = document.createElement("<tr>");
    var name = document.createElement("<td>");
    var course = document.createElement("<td>");
    var grade = document.createElement("<td>");
    var deleteData = document.createElement("<td>")
    var button = document.createElement("<button>");
    //table.append(row);
    row.appendChild(name);
    name.textContent = data.name;
    row.appendChild(course);
    course.textContent = data.course;
    row.appendChild(grade);
    grade.textContent = data.grade;
    row.appendChild(deleteData);
    deleteData.appendChild(button);
    button.textContent = "DELETE";
    return row;
  }
}
