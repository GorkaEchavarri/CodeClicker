import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    console.log("Hello from our first Stimulus controller");
  }


  initialize() {
    this.total_coded = 0;
  }

  code() {
    const counter = document.getElementById("total-coded")

    this.total_coded += 1;
    // console.log(this.total_coded);
    // console.log(counter)
    counter.innerText = this.total_coded

  }
}
