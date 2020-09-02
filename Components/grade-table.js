class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    console.log(grades);
    var tBody = $("#table");
    tBody.empty();
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    };
    if(grades === null) {
      var noGrades = document.getElementById("noGrade");
      noGrades.classList.remove(".d-none");
    };
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var table = $("#table");
    var row = document.createElement("tr");
    var name = document.createElement("td");
    var course = document.createElement("td");
    var grade = document.createElement("td");
    var deleteData = document.createElement("td")
    var button = document.createElement("button");
    table.append(row);
    row.appendChild(name);
    name.textContent = data.name;
    row.appendChild(course);
    course.textContent = data.course;
    row.appendChild(grade);
    grade.textContent = data.grade;
    row.appendChild(deleteData);
    deleteData.appendChild(button);
    button.textContent = "DELETE";
    button.onclick = function deletes() {
      deleteGrade(data.id);
    }
    //button.addEventListener("click", deleteGrade(data.id));
    //button.classList.add("btn btn-danger")
    return row;
  }
}
