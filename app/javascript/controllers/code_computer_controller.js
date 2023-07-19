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
      this.generateLines();
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

  hireJunior() {
    const perSecond = document.getElementById("per-second");
    const totalJuniors = document.getElementById("total-juniors");
    const codingJuniors = document.getElementById("coding-juniors");

    // Create a random junior image
    const juniorImage = document.createElement('img');
    juniorImage.src = 'https://res.cloudinary.com/dgqqot40q/image/upload/v1688378808/Screenshot_2023-07-03_at_11.06.08_d6g5cs.png';
    juniorImage.className = 'random-image';

    // Calculate random positions within the container
    const container = document.getElementById('pics-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 50));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    // Set the position of the image
    juniorImage.style.position = 'absolute';
    juniorImage.style.left = randomX + 'px';
    juniorImage.style.top = randomY + 'px';

    if (this.totalCoded >= 25) {
      this.perSecond += 0.25;
      this.totalCoded -= 25;
      this.totalJuniors += 1;
      perSecond.innerText = this.perSecond * 2
      totalJuniors.innerText = this.totalJuniors
      codingJuniors.innerText = this.totalJuniors * 0.5
      // Append the image to the container
      container.appendChild(juniorImage);
    } else {
      console.log("Not enought coded")
    }
  }

  hireSenior() {
    const perSecond = document.getElementById("per-second");
    const totalSeniors = document.getElementById("total-seniors");
    const codingSeniors = document.getElementById("coding-seniors");

    // Create a random senior image
    const seniorImage = document.createElement('img');
    seniorImage.src = 'https://res.cloudinary.com/dgqqot40q/image/upload/v1689679926/senior-dev_fhxjfd.png';
    seniorImage.className = 'random-image';

    // Calculate random positions within the container
    const container = document.getElementById('pics-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 50));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    // Set the position of the image
    seniorImage.style.position = 'absolute';
    seniorImage.style.left = randomX + 'px';
    seniorImage.style.top = randomY + 'px';

    if (this.totalCoded >= 50) {
      this.perSecond += 0.5;
      this.totalCoded -= 50;
      this.totalSeniors += 1;
      perSecond.innerText = this.perSecond * 2
      totalSeniors.innerText = this.totalSeniors
      codingSeniors.innerText = this.totalSeniors * 1
      // Append the image to the container
      container.appendChild(seniorImage);
    } else {
      console.log("Not enought coded")
    }
  }

  hireStartup() {
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

  hireCompany() {
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

  hireBigTech() {
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

  hireQuantumComputer() {
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

  hireAi() {
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

  hireCodingStar() {
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

  hireArchitect() {
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

  generateLines() {
    const counter = document.getElementById("total-coded");

    this.totalCoded += this.perSecond
    // console.log(this.totalCoded);
    // console.log(this.perSecond);
    counter.innerText = this.totalCoded

  }
}
