class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    var head = this.headerElement;
    var badge = head.querySelector("h5 span")
    console.log(newAverage);
    badge.textContent = newAverage;
  }
}
