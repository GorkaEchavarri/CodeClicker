import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    console.log("Hello from our first Stimulus controller");
    this.startRefreshing();
  }

  initialize() {
    this.total_coded = 0;
    this.per_second = 0;
  }

  startRefreshing() {
    setInterval(() => {
      // Call the code() function to refresh your code
      this.generate_lines();
      // Every half second (500)
    }, 500);
  }

  code() {
    const counter = document.getElementById("total-coded");
    this.total_coded += 1;
    // console.log(this.total_coded);
    // console.log(counter);
    counter.innerText = this.total_coded
  }

  hire_junior() {
    const junior = document.getElementById("junior");
    const per_second = document.getElementById("per-second");

    if (this.total_coded >= 25) {
      // console.log(junior);
      this.per_second += 0.25;
      this.total_coded -= 25;
      per_second.innerText = this.per_second * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_senior() {
    const senior = document.getElementById("junior");
    const per_second = document.getElementById("per-second");

    if (this.total_coded >= 50) {
      // console.log(junior);
      this.per_second += 0.5;
      this.total_coded -= 50;
      per_second.innerText = this.per_second * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_startup() {
    const startup = document.getElementById("startup");
    const per_second = document.getElementById("per-second");

    if (this.total_coded >= 150) {
      // console.log(junior);
      this.per_second += 1.5;
      this.total_coded -= 150;
      per_second.innerText = this.per_second * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_company() {
    const company = document.getElementById("company");
    const per_second = document.getElementById("per-second");

    if (this.total_coded >= 450) {
      // console.log(junior);
      this.per_second += 3;
      this.total_coded -= 450;
      per_second.innerText = this.per_second * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_big_tech() {
    const big_tech = document.getElementById("big-tech");
    const per_second = document.getElementById("per-second");

    if (this.total_coded >= 1350) {
      // console.log(junior);
      this.per_second += 9;
      this.total_coded -= 1350;
      per_second.innerText = this.per_second * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_quantum_computer() {
    const quantum_computer = document.getElementById("quantum-computer");
    const per_second = document.getElementById("per-second");

    if (this.total_coded >= 5000) {
      // console.log(junior);
      this.per_second += 25;
      this.total_coded -= 5000;
      per_second.innerText = this.per_second * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_ai() {
    const ai = document.getElementById("AI");
    const per_second = document.getElementById("per-second");

    if (this.total_coded >= 20000) {
      // console.log(junior);
      this.per_second += 100;
      this.total_coded -= 20000;
      per_second.innerText = this.per_second * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_coding_star() {
    const coding_star = document.getElementById("coding-star");
    const per_second = document.getElementById("per-second");

    if (this.total_coded >= 100000) {
      // console.log(junior);
      this.per_second += 400;
      this.total_coded -= 100000;
      per_second.innerText = this.per_second * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_architect() {
    const architect = document.getElementById("architect");
    const per_second = document.getElementById("per-second");

    if (this.total_coded >= 500000) {
      // console.log(junior);
      this.per_second += 1000;
      this.total_coded -= 500000;
      per_second.innerText = this.per_second * 2
    } else {
      console.log("Not enought coded")
    }
  }

  generate_lines() {
    const counter = document.getElementById("total-coded");

    this.total_coded += this.per_second
    // console.log(this.total_coded);
    // console.log(this.per_second);
    counter.innerText = this.total_coded

  }
}
