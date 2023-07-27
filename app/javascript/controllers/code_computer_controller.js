import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    console.log("Hello from our first Stimulus controller");
    this.startRefreshing();
  }

  initialize() {
    this.totalCoded = 0;
    this.manually_coded = 0;
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
    }, 100);
  }

  code() {
    const counter = document.getElementById("total-coded");
    const junior = document.getElementById("junior");
    const manually_coded = document.getElementById("manually-coded");
    const notification = document.getElementById("manual-code-notification");

    this.totalCoded += 1;
    this.manually_coded += 1;
    manually_coded.innerText = this.manually_coded
    // To make visible first item in store
    junior.style.visibility = "visible";
    counter.innerText = this.totalCoded.toFixed(2)
  }

  hireJunior() {
    const perSecond = document.getElementById("per-second");
    const totalJuniors = document.getElementById("total-juniors");
    const codingJuniors = document.getElementById("coding-juniors");
    const senior = document.getElementById("senior");

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
      // its suppode to be perSecond += 0.05
      this.perSecond += 0.05;
      this.totalCoded -= 25;
      this.totalJuniors += 1;
      // For stats
      totalJuniors.innerText = this.totalJuniors
      codingJuniors.innerText = this.totalJuniors * 0.5
      // To make visible next item in store
      senior.style.visibility = "visible";
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
    const startup = document.getElementById("startup");

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
      this.perSecond += 0.1;
      this.totalCoded -= 50;
      this.totalSeniors += 1;
      totalSeniors.innerText = this.totalSeniors
      codingSeniors.innerText = this.totalSeniors * 1
      // To make visible next item in store
      startup.style.visibility = "visible";
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
    const company = document.getElementById("company");

    // Create a random startup image
    const startupImage = document.createElement('img');
    startupImage.src = 'https://res.cloudinary.com/dgqqot40q/image/upload/v1688382257/Screenshot_2023-07-03_at_12.03.54_fknigd.png';
    startupImage.className = 'random-image';

    // Calculate random positions within the container
    const container = document.getElementById('pics-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 50));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    // Set the position of the image
    startupImage.style.position = 'absolute';
    startupImage.style.left = randomX + 'px';
    startupImage.style.top = randomY + 'px';

    if (this.totalCoded >= 150) {
      this.perSecond += 0.3;
      this.totalCoded -= 150;
      this.totalStartups += 1;
      totalStartups.innerText = this.totalStartups
      codingStartups.innerText = this.totalStartups * 3
      // To make visible next item in store
      company.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(startupImage);
    } else {
      console.log("Not enought coded")
    }
  }

  hireCompany() {
    const perSecond = document.getElementById("per-second");
    const totalCompanies = document.getElementById("total-companies");
    const codingCompanies = document.getElementById("coding-companies");
    const bigtech = document.getElementById("big-tech");

    // Create a random company image
    const companyImage = document.createElement('img');
    companyImage.src = 'https://res.cloudinary.com/dgqqot40q/image/upload/v1688379727/Screenshot_2023-07-03_at_11.12.35_qspn3i.png';
    companyImage.className = 'random-image';

    // Calculate random positions within the container
    const container = document.getElementById('pics-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 50));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    // Set the position of the image
    companyImage.style.position = 'absolute';
    companyImage.style.left = randomX + 'px';
    companyImage.style.top = randomY + 'px';

    if (this.totalCoded >= 450) {
      this.perSecond += 0.6;
      this.totalCoded -= 450;
      this.totalCompanies += 1;
      totalCompanies.innerText = this.totalCompanies
      codingCompanies.innerText = this.totalCompanies * 6
      // To make visible next item in store
      bigtech.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(companyImage);
    } else {
      console.log("Not enought coded")
    }
  }

  hireBigTech() {
    const perSecond = document.getElementById("per-second");
    const totalBigtechs = document.getElementById("total-bigtechs");
    const codingBigtechs = document.getElementById("coding-bigtechs");
    const quantum_computer = document.getElementById("quantum-computer");

    // Create a random bigtech image
    const bigTechImage = document.createElement('img');
    bigTechImage.src = 'https://res.cloudinary.com/dgqqot40q/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1688380161/Screenshot_2023-07-03_at_11.23.33_lw0j4e.png';
    bigTechImage.className = 'random-image';

    // Calculate random positions within the container
    const container = document.getElementById('pics-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 50));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    // Set the position of the image
    bigTechImage.style.position = 'absolute';
    bigTechImage.style.left = randomX + 'px';
    bigTechImage.style.top = randomY + 'px';

    if (this.totalCoded >= 1350) {
      this.perSecond += 1.8;
      this.totalCoded -= 1350;
      this.totalBigtechs += 1;
      totalBigtechs.innerText = this.totalBigtechs
      codingBigtechs.innerText = this.totalBigtechs * 18
      // To make visible next item in store
      quantum_computer.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(bigTechImage);
    } else {
      console.log("Not enought coded")
    }
  }

  hireQuantumComputer() {
    const perSecond = document.getElementById("per-second");
    const totalQuantum = document.getElementById("total-quantum");
    const codingQuantum = document.getElementById("coding-quantum");
    const AI = document.getElementById("AI");

    // Create a random quantumComputer image
    const quantumComputerImage = document.createElement('img');
    quantumComputerImage.src = 'https://res.cloudinary.com/dgqqot40q/image/upload/v1689681658/EDxIonhUEAI9Tz8_ta2zvd.jpg';
    quantumComputerImage.className = 'random-image';

    // Calculate random positions within the container
    const container = document.getElementById('pics-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 50));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    // Set the position of the image
    quantumComputerImage.style.position = 'absolute';
    quantumComputerImage.style.left = randomX + 'px';
    quantumComputerImage.style.top = randomY + 'px';

    if (this.totalCoded >= 5000) {
      this.perSecond += 5;
      this.totalCoded -= 5000;
      this.totalQuantum += 1;
      totalQuantum.innerText = this.totalQuantum
      codingQuantum.innerText = this.totalQuantum * 50
      // To make visible next item in store
      AI.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(quantumComputerImage);
    } else {
      console.log("Not enought coded")
    }
  }

  hireAi() {
    const perSecond = document.getElementById("per-second");
    const totalAIs = document.getElementById("total-ais");
    const codingais = document.getElementById("coding-ais");
    const coding_star = document.getElementById("coding-star");

    // Create a random AI image
    const AIImage = document.createElement('img');
    AIImage.src = 'https://res.cloudinary.com/dgqqot40q/image/upload/v1688380978/Screenshot_2023-07-03_at_11.40.58_q1ekk3.png';
    AIImage.className = 'random-image';

    // Calculate random positions within the container
    const container = document.getElementById('pics-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 50));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    // Set the position of the image
    AIImage.style.position = 'absolute';
    AIImage.style.left = randomX + 'px';
    AIImage.style.top = randomY + 'px';

    if (this.totalCoded >= 20000) {
      this.perSecond += 20;
      this.totalCoded -= 20000;
      this.totalAIs += 1;
      totalAIs.innerText = this.totalAIs
      codingais.innerText = this.totalAIs * 200
      // To make visible next item in store
      coding_star.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(AIImage);
    } else {
      console.log("Not enought coded")
    }
  }

  hireCodingStar() {
    const perSecond = document.getElementById("per-second");
    const totalStars = document.getElementById("total-stars");
    const codingStars = document.getElementById("coding-stars");
    const architect = document.getElementById("architect");

    // Create a random codingStar image
    const codingStarImage = document.createElement('img');
    codingStarImage.src = 'https://res.cloudinary.com/dgqqot40q/image/upload/v1688381695/code-star_rhmuof.png';
    codingStarImage.className = 'random-image';

    // Calculate random positions within the container
    const container = document.getElementById('pics-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 50));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    // Set the position of the image
    codingStarImage.style.position = 'absolute';
    codingStarImage.style.left = randomX + 'px';
    codingStarImage.style.top = randomY + 'px';

    if (this.totalCoded >= 100000) {
      this.perSecond += 80;
      this.totalCoded -= 100000;
      this.totalStars += 1;

      totalStars.innerText = this.totalStars
      codingStars.innerText = this.totalStars * 800
      // Makes visible next item in store
      architect.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(codingStarImage);
    } else {
      console.log("Not enought coded")
    }
  }

  hireArchitect() {
    const perSecond = document.getElementById("per-second");
    const totalArchitects = document.getElementById("total-architects");
    const codingArchitects = document.getElementById("coding-architects");

    // Create a random architect image
    const architectImage = document.createElement('img');
    architectImage.src = 'https://res.cloudinary.com/dgqqot40q/image/upload/v1688380308/architect_z2rev3.webp';
    architectImage.className = 'random-image';

    // Calculate random positions within the container
    const container = document.getElementById('pics-container');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 50));
    const randomY = Math.floor(Math.random() * (containerHeight - 50));

    // Set the position of the image
    architectImage.style.position = 'absolute';
    architectImage.style.left = randomX + 'px';
    architectImage.style.top = randomY + 'px';

    if (this.totalCoded >= 500000) {
      this.perSecond += 200;
      this.totalCoded -= 500000;
      this.totalArchitects += 1;

      totalArchitects.innerText = this.totalArchitects
      codingArchitects.innerText = this.totalArchitects * 2000
      // Append the image to the container
      container.appendChild(architectImage);
    } else {
      console.log("Not enought coded")
    }
  }

  generateLines() {
    const counter = document.getElementById("total-coded");
    const perSecondElement = document.getElementById("per-second");

    this.totalCoded += this.perSecond;

    // Format the numbers with commas as thousands separators
    const formattedTotalCoded = this.totalCoded.toFixed(2).toLocaleString();
    const formattedPerSecond = (this.perSecond * 10).toLocaleString();

    counter.innerText = formattedTotalCoded;
    perSecondElement.innerText = formattedPerSecond;
  }

}
