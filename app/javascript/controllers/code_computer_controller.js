import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["output"]

  connect() {
    this.initialize();
    this.startRefreshing();
    this.generateLines(); // Call generateLines after the elements are initialized.
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
      this.generateLines();
      // ten times per second (100)
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
    const totalJuniors = document.getElementById("total-juniors");
    const codingJuniors = document.getElementById("coding-juniors");
    const senior = document.getElementById("senior");
    const juniorStatText = document.getElementById("stats-text-juniors");
    const notEnoughMessage = document.querySelector(".not-enough-message");

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
      this.perSecond += 0.05;
      this.totalCoded -= 25;
      this.totalJuniors += 1;
      // For stats
      totalJuniors.innerText = this.totalJuniors
      codingJuniors.innerText = this.totalJuniors * 0.5
      juniorStatText.style.visibility = "visible";
      // To make visible next item in store
      senior.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(juniorImage);
    } else {
      //Show message of not enough coded
        const messageContainer = document.getElementById("messageText");

        messageContainer.classList.remove("hidden");
        setTimeout(() => {
            messageContainer.style.opacity = "0";
            messageContainer.style.transform = "translateY(-30px)";
            setTimeout(() => {
                messageContainer.classList.add("hidden");
                messageContainer.style.opacity = "1";
                messageContainer.style.transform = "translateY(0)";
            }, 2000);
        }, 100);
      }
  }

  hireSenior() {
    const totalSeniors = document.getElementById("total-seniors");
    const codingSeniors = document.getElementById("coding-seniors");
    const startup = document.getElementById("startup");
    const seniorStatText = document.getElementById("stats-text-seniors");

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
      //For stats
      totalSeniors.innerText = this.totalSeniors
      codingSeniors.innerText = this.totalSeniors * 1
      seniorStatText.style.visibility = "visible";
      // To make visible next item in store
      startup.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(seniorImage);
    } else {
      //Show message of not enough coded
      const messageContainer = document.getElementById("messageText");

      messageContainer.classList.remove("hidden");
      setTimeout(() => {
          messageContainer.style.opacity = "0";
          messageContainer.style.transform = "translateY(-30px)";
          setTimeout(() => {
              messageContainer.classList.add("hidden");
              messageContainer.style.opacity = "1";
              messageContainer.style.transform = "translateY(0)";
          }, 2000);
      }, 100);
    }
  }

  hireStartup() {
    const totalStartups = document.getElementById("total-startups");
    const codingStartups = document.getElementById("coding-startups");
    const company = document.getElementById("company");
    const startupStatText = document.getElementById("stats-text-startups");

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
      //For stats
      totalStartups.innerText = this.totalStartups
      codingStartups.innerText = this.totalStartups * 3
      startupStatText.style.visibility = "visible";
      // To make visible next item in store
      company.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(startupImage);
    } else {
      //Show message of not enough coded
      const messageContainer = document.getElementById("messageText");

      messageContainer.classList.remove("hidden");
      setTimeout(() => {
          messageContainer.style.opacity = "0";
          messageContainer.style.transform = "translateY(-30px)";
          setTimeout(() => {
              messageContainer.classList.add("hidden");
              messageContainer.style.opacity = "1";
              messageContainer.style.transform = "translateY(0)";
          }, 2000);
      }, 100);
    }
  }

  hireCompany() {
    const totalCompanies = document.getElementById("total-companies");
    const codingCompanies = document.getElementById("coding-companies");
    const bigtech = document.getElementById("big-tech");
    const companiesStatText = document.getElementById("stats-text-companies");

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
      // For stats
      totalCompanies.innerText = this.totalCompanies
      codingCompanies.innerText = this.totalCompanies * 6
      companiesStatText.style.visibility = "visible";
      // To make visible next item in store
      bigtech.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(companyImage);
    } else {
      //Show message of not enough coded
      const messageContainer = document.getElementById("messageText");

      messageContainer.classList.remove("hidden");
      setTimeout(() => {
          messageContainer.style.opacity = "0";
          messageContainer.style.transform = "translateY(-30px)";
          setTimeout(() => {
              messageContainer.classList.add("hidden");
              messageContainer.style.opacity = "1";
              messageContainer.style.transform = "translateY(0)";
          }, 2000);
      }, 100);
    }
  }

  hireBigTech() {
    const totalBigtechs = document.getElementById("total-bigtechs");
    const codingBigtechs = document.getElementById("coding-bigtechs");
    const quantum_computer = document.getElementById("quantum-computer");
    const bigtechStatText = document.getElementById("stats-text-bigtechs");

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
      // For stats
      totalBigtechs.innerText = this.totalBigtechs
      codingBigtechs.innerText = this.totalBigtechs * 18
      bigtechStatText.style.visibility = "visible";
      // To make visible next item in store
      quantum_computer.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(bigTechImage);
    } else {
      //Show message of not enough coded
      const messageContainer = document.getElementById("messageText");

      messageContainer.classList.remove("hidden");
      setTimeout(() => {
          messageContainer.style.opacity = "0";
          messageContainer.style.transform = "translateY(-30px)";
          setTimeout(() => {
              messageContainer.classList.add("hidden");
              messageContainer.style.opacity = "1";
              messageContainer.style.transform = "translateY(0)";
          }, 2000);
      }, 100);
    }
  }

  hireQuantumComputer() {
    const totalQuantum = document.getElementById("total-quantum");
    const codingQuantum = document.getElementById("coding-quantum");
    const AI = document.getElementById("AI");
    const quantumStatText = document.getElementById("stats-text-quantums");

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
      // For stats
      totalQuantum.innerText = this.totalQuantum
      codingQuantum.innerText = this.totalQuantum * 50
      quantumStatText.style.visibility = "visible";
      // To make visible next item in store
      AI.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(quantumComputerImage);
    } else {
      //Show message of not enough coded
      const messageContainer = document.getElementById("messageText");

      messageContainer.classList.remove("hidden");
      setTimeout(() => {
          messageContainer.style.opacity = "0";
          messageContainer.style.transform = "translateY(-30px)";
          setTimeout(() => {
              messageContainer.classList.add("hidden");
              messageContainer.style.opacity = "1";
              messageContainer.style.transform = "translateY(0)";
          }, 2000);
      }, 100);
    }
  }

  hireAi() {
    const totalAIs = document.getElementById("total-ais");
    const codingais = document.getElementById("coding-ais");
    const coding_star = document.getElementById("coding-star");
    const aisStatText = document.getElementById("stats-text-ais");

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
      // For stats
      totalAIs.innerText = this.totalAIs
      codingais.innerText = this.totalAIs * 200
      aisStatText.style.visibility = "visible";
      // To make visible next item in store
      coding_star.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(AIImage);
    } else {
      //Show message of not enough coded
      const messageContainer = document.getElementById("messageText");

      messageContainer.classList.remove("hidden");
      setTimeout(() => {
          messageContainer.style.opacity = "0";
          messageContainer.style.transform = "translateY(-30px)";
          setTimeout(() => {
              messageContainer.classList.add("hidden");
              messageContainer.style.opacity = "1";
              messageContainer.style.transform = "translateY(0)";
          }, 2000);
      }, 100);
    }
  }

  hireCodingStar() {
    const totalStars = document.getElementById("total-stars");
    const codingStars = document.getElementById("coding-stars");
    const architect = document.getElementById("architect");
    const starsStatText = document.getElementById("stats-text-stars");

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
      // For stats
      totalStars.innerText = this.totalStars
      codingStars.innerText = this.totalStars * 800
      starsStatText.style.visibility = "visible";
      // Makes visible next item in store
      architect.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(codingStarImage);
    } else {
      //Show message of not enough coded
      const messageContainer = document.getElementById("messageText");

      messageContainer.classList.remove("hidden");
      setTimeout(() => {
          messageContainer.style.opacity = "0";
          messageContainer.style.transform = "translateY(-30px)";
          setTimeout(() => {
              messageContainer.classList.add("hidden");
              messageContainer.style.opacity = "1";
              messageContainer.style.transform = "translateY(0)";
          }, 2000);
      }, 100);
    }
  }

  hireArchitect() {
    const totalArchitects = document.getElementById("total-architects");
    const codingArchitects = document.getElementById("coding-architects");
    const architectsStatText = document.getElementById("stats-text-architects");

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
      // For stats
      totalArchitects.innerText = this.totalArchitects
      codingArchitects.innerText = this.totalArchitects * 2000
      architectsStatText.style.visibility = "visible";
      // Append the image to the container
      container.appendChild(architectImage);
    } else {
      //Show message of not enough coded
      const messageContainer = document.getElementById("messageText");

      messageContainer.classList.remove("hidden");
      setTimeout(() => {
          messageContainer.style.opacity = "0";
          messageContainer.style.transform = "translateY(-40px)";
          setTimeout(() => {
              messageContainer.classList.add("hidden");
              messageContainer.style.opacity = "1";
              messageContainer.style.transform = "translateY(0)";
          }, 3000);
      }, 1000);
    }
  }

  generateLines() {
    const counter = document.getElementById("total-coded");
    const perSecondElement = document.getElementById("per-second");

    if (counter && perSecondElement) {
      this.totalCoded += this.perSecond;

      //To format the numbers
      if (this.totalCoded < 1000) {
        const formattedTotalCoded = this.totalCoded.toFixed(2).toLocaleString();
        counter.innerText = formattedTotalCoded;
      } else {
        counter.innerText = this.totalCoded.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });;
      }

      const formattedPerSecond = (this.perSecond * 10).toLocaleString();
      perSecondElement.innerText = formattedPerSecond;
    }
  }
}
