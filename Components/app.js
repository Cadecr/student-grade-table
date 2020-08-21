class App {
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
  }

  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    console.log(grades);
  }

  getGrades() {
    $.ajax({
      type: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      "headers": {
        "X-Access-Token": "KyjK1372"
      },
      response: [
      {
        "id": 15,
        "name": "Tim Davis",
        "course": "Web Development",
        "grade": 98,
        "createdBy": "Joe Bishop"
      },
      {
        "id": 16,
        "name": "Cody Miller",
        "course": "Web Development",
        "grade": 98,
        "createdBy": "Joe Bishop"
      },
      {
        "id": 17,
        "name": "Tim Horist",
        "course": "Web Development",
        "grade": 98,
        "createdBy": "Joe Bishop"
      },
      {
        "id": 18,
        "name": "Brett Albright",
        "course": "Web Development",
        "grade": 98,
        "createdBy": "Joe Bishop"
      },
      {
        "id": 19,
        "name": "Scott Bowler",
        "course": "Web Development",
        "grade": 98,
        "createdBy": "Joe Bishop"
      }
    ],
      success: this.handleGetGradesSuccess(),
      error: this.handleGetGradesError()
  });
  }

  start() {
    this.getGrades();
  }
}
