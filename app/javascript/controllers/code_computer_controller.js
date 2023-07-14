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
    this.totalSeniors = 0;
    this.totalStartups = 0;
    this.totalCompanies = 0;
    this.totalBigtechs = 0;
    this.totalQuantum = 0;
    this.totalAIs = 0;
    this.totalStars = 0;
    this.totalArchitects = 0;
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
    const perSecond = document.getElementById("per-second");
    const totalJuniors = document.getElementById("total-juniors");
    const codingJuniors = document.getElementById("coding-juniors");

    if (this.totalCoded >= 25) {
      this.perSecond += 0.25;
      this.totalCoded -= 25;
      this.totalJuniors += 1;
      perSecond.innerText = this.perSecond * 2
      totalJuniors.innerText = this.totalJuniors
      codingJuniors.innerText = this.totalJuniors * 0.5
    } else {
      console.log("Not enought coded")
    }
  }

  hire_senior() {
    const perSecond = document.getElementById("per-second");
    const totalSeniors = document.getElementById("total-seniors");
    const codingSeniors = document.getElementById("coding-seniors");

    if (this.totalCoded >= 50) {
      this.perSecond += 0.5;
      this.totalCoded -= 50;
      this.totalSeniors += 1;
      perSecond.innerText = this.perSecond * 2
      totalSeniors.innerText = this.totalSeniors
      codingSeniors.innerText = this.totalSeniors * 1
    } else {
      console.log("Not enought coded")
    }
  }

  hire_startup() {
    const perSecond = document.getElementById("per-second");
    const totalStartups = document.getElementById("total-startups");
    const codingStartups = document.getElementById("coding-startups");

    if (this.totalCoded >= 150) {
      this.perSecond += 1.5;
      this.totalCoded -= 150;
      this.totalStartups += 1;
      perSecond.innerText = this.perSecond * 2
      totalStartups.innerText = this.totalStartups
      codingStartups.innerText = this.totalStartups * 3
    } else {
      console.log("Not enought coded")
    }
  }

  hire_company() {
    const perSecond = document.getElementById("per-second");
    const totalCompanies = document.getElementById("total-companies");
    const codingCompanies = document.getElementById("coding-companies");

    if (this.totalCoded >= 450) {
      this.perSecond += 3;
      this.totalCoded -= 450;
      this.totalCompanies += 1;
      perSecond.innerText = this.perSecond * 2
      totalCompanies.innerText = this.totalCompanies
      codingCompanies.innerText = this.totalCompanies * 6
    } else {
      console.log("Not enought coded")
    }
  }

  hire_big_tech() {
    const perSecond = document.getElementById("per-second");
    const totalBigtechs = document.getElementById("total-bigtechs");
    const codingBigtechs = document.getElementById("coding-bigtechs");

    if (this.totalCoded >= 1350) {
      this.perSecond += 9;
      this.totalCoded -= 1350;
      this.totalBigtechs += 1;
      perSecond.innerText = this.perSecond * 2
      totalBigtechs.innerText = this.totalBigtechs
      codingBigtechs.innerText = this.totalBigtechs * 18
    } else {
      console.log("Not enought coded")
    }
  }

  hire_quantum_computer() {
    const perSecond = document.getElementById("per-second");
    const totalQuantum = document.getElementById("total-quantum");
    const codingQuantum = document.getElementById("coding-quantum");

    if (this.totalCoded >= 5000) {
      this.perSecond += 25;
      this.totalCoded -= 5000;
      this.totalQuantum += 1;
      perSecond.innerText = this.perSecond * 2
      totalQuantum.innerText = this.totalQuantum
      codingQuantum.innerText = this.totalQuantum * 50
    } else {
      console.log("Not enought coded")
    }
  }

  hire_ai() {
    const perSecond = document.getElementById("per-second");
    const totalAIs = document.getElementById("total-ais");
    const codingais = document.getElementById("coding-ais");

    if (this.totalCoded >= 20000) {
      this.perSecond += 100;
      this.totalCoded -= 20000;
      this.totalAIs += 1;
      perSecond.innerText = this.perSecond * 2
      totalAIs.innerText = this.totalAIs
      codingais.innerText = this.totalAIs * 200
    } else {
      console.log("Not enought coded")
    }
  }

  hire_coding_star() {
    const perSecond = document.getElementById("per-second");
    const totalStars = document.getElementById("total-stars");
    const codingStars = document.getElementById("coding-stars");

    if (this.totalCoded >= 100000) {
      // console.log(junior);
      this.perSecond += 400;
      this.totalCoded -= 100000;
      this.totalStars += 1;
      perSecond.innerText = this.perSecond * 2
      totalStars.innerText = this.totalStars
      codingStars.innerText = this.totalStars * 800
    } else {
      console.log("Not enought coded")
    }
  }

  hire_architect() {
    const perSecond = document.getElementById("per-second");
    const totalArchitects = document.getElementById("total-architects");
    const codingArchitects = document.getElementById("coding-architects");

    if (this.totalCoded >= 500000) {
      // console.log(junior);
      this.perSecond += 1000;
      this.totalCoded -= 500000;
      this.totalArchitects += 1;
      perSecond.innerText = this.perSecond * 2
      totalArchitects.innerText = this.totalArchitects
      codingArchitects.innerText = this.totalArchitects * 2000
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
