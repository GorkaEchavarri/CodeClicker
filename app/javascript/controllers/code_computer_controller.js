import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    console.log("Hello from our first Stimulus controller");
    this.startRefreshing();
  }

  initialize() {
    this.totalCoded = 0;
    this.perSecond = 0;
    this.totalJuniors = 0;
    this.juniorsPerSecond = 0;
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
    this.totalCoded += 1;
    // console.log(this.totalCoded);
    // console.log(counter);
    counter.innerText = this.totalCoded
  }

  hire_junior() {
    const junior = document.getElementById("junior");
    const perSecond = document.getElementById("per-second");
    const totalJuniors = document.getElementById("total-juniors");
    const codingJuniors = document.getElementById("coding-juniors");

    if (this.totalCoded >= 25) {
      // console.log(junior);
      this.perSecond += 0.25;
      this.totalCoded -= 25;
      this.totalJuniors += 1;
      this.codingJuniors += 1;
      perSecond.innerText = this.perSecond * 2
      totalJuniors.innerText = this.totalJuniors
      codingJuniors.innerText = this.totalJuniors * 0.5
    } else {
      console.log("Not enought coded")
    }
  }

  hire_senior() {
    const senior = document.getElementById("junior");
    const perSecond = document.getElementById("per-second");

    if (this.totalCoded >= 50) {
      // console.log(junior);
      this.perSecond += 0.5;
      this.totalCoded -= 50;
      perSecond.innerText = this.perSecond * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_startup() {
    const startup = document.getElementById("startup");
    const perSecond = document.getElementById("per-second");

    if (this.totalCoded >= 150) {
      // console.log(junior);
      this.perSecond += 1.5;
      this.totalCoded -= 150;
      perSecond.innerText = this.perSecond * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_company() {
    const company = document.getElementById("company");
    const perSecond = document.getElementById("per-second");

    if (this.totalCoded >= 450) {
      // console.log(junior);
      this.perSecond += 3;
      this.totalCoded -= 450;
      perSecond.innerText = this.perSecond * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_big_tech() {
    const big_tech = document.getElementById("big-tech");
    const perSecond = document.getElementById("per-second");

    if (this.totalCoded >= 1350) {
      // console.log(junior);
      this.perSecond += 9;
      this.totalCoded -= 1350;
      perSecond.innerText = this.perSecond * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_quantum_computer() {
    const quantum_computer = document.getElementById("quantum-computer");
    const perSecond = document.getElementById("per-second");

    if (this.totalCoded >= 5000) {
      // console.log(junior);
      this.perSecond += 25;
      this.totalCoded -= 5000;
      perSecond.innerText = this.perSecond * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_ai() {
    const ai = document.getElementById("AI");
    const perSecond = document.getElementById("per-second");

    if (this.totalCoded >= 20000) {
      // console.log(junior);
      this.perSecond += 100;
      this.totalCoded -= 20000;
      perSecond.innerText = this.perSecond * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_coding_star() {
    const coding_star = document.getElementById("coding-star");
    const perSecond = document.getElementById("per-second");

    if (this.totalCoded >= 100000) {
      // console.log(junior);
      this.perSecond += 400;
      this.totalCoded -= 100000;
      perSecond.innerText = this.perSecond * 2
    } else {
      console.log("Not enought coded")
    }
  }

  hire_architect() {
    const architect = document.getElementById("architect");
    const perSecond = document.getElementById("per-second");

    if (this.totalCoded >= 500000) {
      // console.log(junior);
      this.perSecond += 1000;
      this.totalCoded -= 500000;
      perSecond.innerText = this.perSecond * 2
    } else {
      console.log("Not enought coded")
    }
  }

  generate_lines() {
    const counter = document.getElementById("total-coded");

    this.totalCoded += this.perSecond
    // console.log(this.totalCoded);
    // console.log(this.perSecond);
    counter.innerText = this.totalCoded

  }
}
