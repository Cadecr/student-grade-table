class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    this.tableElement.empty();
    for (var i = 0; i < grades.length; i++) {
      var render = this.renderGradeRow(grades[i], this.deleteGrade);
      this.tableElement.append(render);
    };
    if(grades.length === 0) {
      var noGrades =this.noGradesElement
      noGrade.classList.remove("d-none");
    };

  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var row = document.createElement("tr");
    var name = document.createElement("td");
    var course = document.createElement("td");
    var grade = document.createElement("td");
    var deleteData = document.createElement("td")
    var button = document.createElement("button");
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
