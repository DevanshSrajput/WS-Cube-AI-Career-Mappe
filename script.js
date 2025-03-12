// DOM Elements
const careerCards = document.querySelectorAll(".career-card");
const filterBtns = document.querySelectorAll(".filter-btn");
const roadmapSelect = document.getElementById("roadmap-select");
const roadmapContainer = document.getElementById("roadmap-container");
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendMessage = document.getElementById("send-message");
const careerModal = document.getElementById("career-modal");
const careerDetailContent = document.getElementById("career-detail-content");
const closeModal = document.querySelector(".close-modal");
const startConsultation = document.getElementById("start-consultation");
const prevTestimonial = document.getElementById("prev-testimonial");
const nextTestimonial = document.getElementById("next-testimonial");
const testimonialDots = document.querySelectorAll(".dot");

// Career Data
const careerData = {
  "software-development": {
    title: "Software Development",
    description:
      "Software developers design, build, and maintain computer programs, mobile apps, and software systems.",
    stats: {
      salary: "$85,000 - $135,000",
      growth: "22%",
      difficulty: "Moderate",
      demand: "Very High",
    },
    skills: {
      technical: [
        { name: "Programming", level: "Advanced", percent: 90 },
        { name: "Version Control", level: "Intermediate", percent: 75 },
        { name: "Testing", level: "Intermediate", percent: 70 },
        { name: "Databases", level: "Intermediate", percent: 65 },
      ],
      soft: [
        { name: "Problem Solving", level: "Advanced", percent: 85 },
        { name: "Teamwork", level: "Intermediate", percent: 75 },
        { name: "Communication", level: "Intermediate", percent: 70 },
      ],
    },
    roadmap: [
      {
        title: "Foundations",
        description:
          "Learn programming basics and core computer science concepts.",
        skills: [
          "HTML/CSS",
          "JavaScript",
          "Python",
          "Data Structures",
          "Algorithms",
        ],
      },
      {
        title: "Building Blocks",
        description: "Explore frameworks, libraries, and development tools.",
        skills: ["React/Angular", "Node.js", "Git", "Database Systems"],
      },
      {
        title: "Advanced Concepts",
        description:
          "Master system design, architecture patterns, and testing methodologies.",
        skills: ["System Design", "API Development", "Testing", "CI/CD"],
      },
      {
        title: "Specialization",
        description: "Focus on a specific area of software development.",
        skills: ["Web Dev", "Mobile Apps", "Game Dev", "Enterprise Software"],
      },
    ],
  },
  "data-analytics": {
    title: "Data Analytics",
    description:
      "Data analysts collect, process, and analyze data to help businesses make informed decisions.",
    stats: {
      salary: "$75,000 - $115,000",
      growth: "25%",
      difficulty: "Moderate",
      demand: "High",
    },
    skills: {
      technical: [
        { name: "SQL", level: "Advanced", percent: 90 },
        { name: "Excel", level: "Advanced", percent: 85 },
        { name: "Python/R", level: "Intermediate", percent: 75 },
        { name: "Visualization Tools", level: "Intermediate", percent: 80 },
      ],
      soft: [
        { name: "Analytical Thinking", level: "Advanced", percent: 90 },
        { name: "Attention to Detail", level: "Advanced", percent: 85 },
        { name: "Business Acumen", level: "Intermediate", percent: 70 },
      ],
    },
    roadmap: [
      {
        title: "Data Foundations",
        description:
          "Learn data collection, cleaning, and basic analysis techniques.",
        skills: ["Excel", "SQL", "Data Collection", "Data Cleaning"],
      },
      {
        title: "Analysis Tools",
        description: "Master data analysis tools and programming languages.",
        skills: ["Python/R", "Statistical Analysis", "Data Visualization"],
      },
      {
        title: "Business Applications",
        description: "Apply data analytics to solve business problems.",
        skills: ["Business Intelligence", "Dashboard Creation", "Reporting"],
      },
      {
        title: "Advanced Analytics",
        description: "Explore advanced analytics techniques and tools.",
        skills: ["Predictive Analytics", "A/B Testing", "Process Optimization"],
      },
    ],
  },
  "data-science": {
    title: "Data Science",
    description:
      "Data scientists extract insights from complex data using statistics, programming, and domain expertise.",
    stats: {
      salary: "$95,000 - $145,000",
      growth: "31%",
      difficulty: "High",
      demand: "Very High",
    },
    skills: {
      technical: [
        { name: "Programming (Python/R)", level: "Advanced", percent: 90 },
        { name: "Statistics", level: "Advanced", percent: 85 },
        { name: "Machine Learning", level: "Intermediate", percent: 80 },
        { name: "Big Data Tools", level: "Intermediate", percent: 75 },
      ],
      soft: [
        { name: "Problem Solving", level: "Advanced", percent: 90 },
        { name: "Research Skills", level: "Advanced", percent: 85 },
        { name: "Domain Knowledge", level: "Intermediate", percent: 70 },
      ],
    },
    roadmap: [
      {
        title: "Foundations",
        description:
          "Build a strong foundation in programming, statistics, and mathematics.",
        skills: ["Python/R", "Statistics", "Linear Algebra", "Calculus"],
      },
      {
        title: "Data Analysis",
        description: "Learn to clean, process, and analyze data effectively.",
        skills: [
          "Data Wrangling",
          "Exploratory Analysis",
          "SQL",
          "Visualization",
        ],
      },
      {
        title: "Machine Learning",
        description: "Master machine learning algorithms and techniques.",
        skills: [
          "Supervised Learning",
          "Unsupervised Learning",
          "Model Evaluation",
        ],
      },
      {
        title: "Advanced Topics",
        description: "Explore specialized areas of data science.",
        skills: ["Deep Learning", "NLP", "Computer Vision", "Big Data"],
      },
    ],
  },
  "ml-engineer": {
    title: "Machine Learning Engineer",
    description:
      "ML Engineers design and implement machine learning systems and applications.",
    stats: {
      salary: "$110,000 - $150,000",
      growth: "35%",
      difficulty: "High",
      demand: "Very High",
    },
    skills: {
      technical: [
        { name: "Python", level: "Advanced", percent: 95 },
        { name: "ML Frameworks", level: "Advanced", percent: 90 },
        { name: "Data Modeling", level: "Advanced", percent: 85 },
        { name: "Software Engineering", level: "Intermediate", percent: 75 },
      ],
      soft: [
        { name: "Problem Solving", level: "Advanced", percent: 90 },
        { name: "Research Skills", level: "Advanced", percent: 85 },
        { name: "Collaboration", level: "Intermediate", percent: 75 },
      ],
    },
    roadmap: [
      {
        title: "Software Engineering Basics",
        description:
          "Develop strong programming and software engineering skills.",
        skills: ["Python", "Software Design", "Version Control", "Testing"],
      },
      {
        title: "Data Science Skills",
        description: "Learn data manipulation, analysis, and visualization.",
        skills: [
          "Data Processing",
          "Exploratory Analysis",
          "Statistics",
          "Feature Engineering",
        ],
      },
      {
        title: "Machine Learning",
        description: "Master machine learning algorithms and frameworks.",
        skills: ["ML Algorithms", "TensorFlow/PyTorch", "Model Training"],
      },
      {
        title: "ML Systems",
        description: "Design and deploy machine learning systems.",
        skills: ["Model Deployment", "ML Pipelines", "MLOps", "Optimization"],
      },
    ],
  },
  devops: {
    title: "DevOps Engineer",
    description:
      "DevOps Engineers bridge development and operations to improve deployment cycles and system reliability.",
    stats: {
      salary: "$95,000 - $140,000",
      growth: "22%",
      difficulty: "Moderate",
      demand: "High",
    },
    skills: {
      technical: [
        { name: "Cloud Platforms", level: "Advanced", percent: 90 },
        { name: "Containerization", level: "Advanced", percent: 85 },
        { name: "Scripting", level: "Advanced", percent: 85 },
        { name: "CI/CD", level: "Advanced", percent: 90 },
      ],
      soft: [
        { name: "System Thinking", level: "Advanced", percent: 85 },
        { name: "Problem Solving", level: "Advanced", percent: 85 },
        { name: "Communication", level: "Intermediate", percent: 75 },
      ],
    },
    roadmap: [
      {
        title: "Systems Administration",
        description:
          "Learn Linux, networking, and basic system administration.",
        skills: [
          "Linux",
          "Networking",
          "Bash Scripting",
          "System Administration",
        ],
      },
      {
        title: "Code & Automation",
        description: "Develop programming and automation skills.",
        skills: [
          "Python/Go",
          "Infrastructure as Code",
          "Configuration Management",
        ],
      },
      {
        title: "Containerization & Orchestration",
        description: "Master containerization and container orchestration.",
        skills: ["Docker", "Kubernetes", "Service Mesh", "Microservices"],
      },
      {
        title: "Cloud & Monitoring",
        description: "Learn cloud platforms and monitoring solutions.",
        skills: ["AWS/Azure/GCP", "Monitoring", "Logging", "Security"],
      },
    ],
  },
  cybersecurity: {
    title: "Cybersecurity Specialist",
    description:
      "Cybersecurity Specialists protect systems, networks, and data from digital attacks.",
    stats: {
      salary: "$90,000 - $135,000",
      growth: "33%",
      difficulty: "Moderate to High",
      demand: "Very High",
    },
    skills: {
      technical: [
        { name: "Network Security", level: "Advanced", percent: 90 },
        { name: "Security Tools", level: "Advanced", percent: 85 },
        { name: "Programming", level: "Intermediate", percent: 70 },
        { name: "Cryptography", level: "Intermediate", percent: 75 },
      ],
      soft: [
        { name: "Analytical Thinking", level: "Advanced", percent: 90 },
        { name: "Attention to Detail", level: "Advanced", percent: 95 },
        { name: "Communication", level: "Intermediate", percent: 75 },
      ],
    },
    roadmap: [
      {
        title: "IT Fundamentals",
        description:
          "Build a strong foundation in networking, operating systems, and basic security.",
        skills: ["Networking", "Operating Systems", "Basic Security Concepts"],
      },
      {
        title: "Security Essentials",
        description: "Learn core security principles and practices.",
        skills: ["Security Frameworks", "Risk Assessment", "Cryptography"],
      },
      {
        title: "Defense Techniques",
        description: "Master defensive security techniques and tools.",
        skills: ["Firewalls", "IDS/IPS", "SIEM", "Threat Intelligence"],
      },
      {
        title: "Specialization",
        description: "Focus on a specific area of cybersecurity.",
        skills: [
          "Penetration Testing",
          "Security Architecture",
          "Incident Response",
          "Cloud Security",
        ],
      },
    ],
  },
};

// AI Chat responses
const aiResponses = {
  greeting:
    "Hello! I'm your AI Career Advisor. I'll help you discover the perfect tech career path. Ready to get started?",
  questions: [
    "What aspects of technology interest you the most?",
    "Do you prefer working with data, building applications, or solving complex problems?",
    "On a scale of 1-10, how comfortable are you with mathematics and statistics?",
    "Would you rather work on creative projects or analytical tasks?",
    "Are you interested in a career that requires continuous learning?",
  ],
  recommendations: {
    dataFocus:
      "Based on your interest in data and analysis, you might excel in Data Science or Data Analytics. Data Science typically requires stronger math skills.",
    buildingThings:
      "Your preference for building things suggests Software Development or DevOps might be good paths to explore.",
    problemSolving:
      "With your strong problem-solving interest, Machine Learning Engineering or Cybersecurity could be excellent matches for your skills.",
    creativeWork:
      "For those who enjoy creative work but also have technical skills, Software Development with a focus on front-end or UX might be perfect.",
    continuousLearning:
      "All tech careers require ongoing learning, but fields like AI/ML and Cybersecurity evolve particularly rapidly.",
  },
  followUp:
    "Would you like me to provide more specific information about any of these career paths?",
  closing:
    "I hope this guidance helps! Feel free to explore the detailed roadmaps for each career path on our site.",
};

// Chat functionality
let conversationStage = 0;
const maxConversationStages = 4;

function addMessage(message, isUser = false) {
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${isUser ? "user-message" : "ai-message"}`;
  messageDiv.innerHTML = `<p>${message}</p>`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getAiResponse(userMessage) {
  conversationStage++;

  if (conversationStage === 1) {
    setTimeout(() => addMessage(aiResponses.questions[0]), 1000);
  } else if (conversationStage < maxConversationStages) {
    // Simple response based on keywords in user message
    let response = "";
    if (userMessage.toLowerCase().includes("data")) {
      response = aiResponses.recommendations.dataFocus;
    } else if (
      userMessage.toLowerCase().includes("build") ||
      userMessage.toLowerCase().includes("create")
    ) {
      response = aiResponses.recommendations.buildingThings;
    } else if (
      userMessage.toLowerCase().includes("problem") ||
      userMessage.toLowerCase().includes("solve")
    ) {
      response = aiResponses.recommendations.problemSolving;
    } else if (userMessage.toLowerCase().includes("creative")) {
      response = aiResponses.recommendations.creativeWork;
    } else {
      response = aiResponses.recommendations.continuousLearning;
    }

    setTimeout(() => {
      addMessage(response);
      setTimeout(
        () =>
          addMessage(
            aiResponses.questions[
              conversationStage % aiResponses.questions.length
            ]
          ),
        1000
      );
    }, 1000);
  } else {
    setTimeout(() => {
      addMessage(aiResponses.followUp);
      setTimeout(() => addMessage(aiResponses.closing), 3000);
    }, 1000);
  }
}

// Event Listeners
sendMessage.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (message) {
    addMessage(message, true);
    userInput.value = "";
    getAiResponse(message);
  }
});

userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage.click();
  }
});

startConsultation.addEventListener("click", () => {
  addMessage(aiResponses.greeting);
  setTimeout(() => addMessage(aiResponses.questions[0]), 1000);
});

// Filter career cards
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active filter button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    // Show/hide career cards based on filter
    careerCards.forEach((card) => {
      if (
        filter === "all" ||
        card.getAttribute("data-category").includes(filter)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Roadmap functionality
roadmapSelect.addEventListener("change", () => {
  const selectedCareer = roadmapSelect.value;

  if (selectedCareer) {
    const career = careerData[selectedCareer];

    let roadmapHTML = `
      <div class="roadmap-visualization">
        <h3>${career.title} Learning Roadmap</h3>
        <div class="roadmap-path">
    `;

    career.roadmap.forEach((milestone, index) => {
      roadmapHTML += `
        <div class="roadmap-milestone">
          <div class="milestone-point"></div>
          <div class="milestone-content">
            <div class="milestone-title">Stage ${index + 1}: ${
        milestone.title
      }</div>
            <div class="milestone-description">${milestone.description}</div>
            <div class="milestone-skills">
              ${milestone.skills
                .map((skill) => `<span class="skill-tag">${skill}</span>`)
                .join("")}
            </div>
          </div>
        </div>
      `;
    });

    roadmapHTML += `
        </div>
      </div>
    `;

    roadmapContainer.innerHTML = roadmapHTML;
  } else {
    roadmapContainer.innerHTML = `
      <div class="roadmap-placeholder">
        <i class="fas fa-map-signs"></i>
        <p>Select a career path to view its learning roadmap</p>
      </div>
    `;
  }
});

// Career Details Modal
document.querySelectorAll(".career-details-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const careerId = btn.getAttribute("data-career");
    const career = careerData[careerId];

    if (career) {
      renderCareerDetail(career);
      careerModal.style.display = "flex";
    }
  });
});

closeModal.addEventListener("click", () => {
  careerModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === careerModal) {
    careerModal.style.display = "none";
  }
});

function renderCareerDetail(career) {
  let detailHTML = `
    <div class="career-detail-header">
      <h2>${career.title}</h2>
      <p>${career.description}</p>
    </div>
    <div class="career-detail-content">
      <div class="career-summary">
        <div class="career-stat">
          <div class="stat-value">${career.stats.salary}</div>
          <div class="stat-label">Average Salary</div>
        </div>
        <div class="career-stat">
          <div class="stat-value">${career.stats.growth}</div>
          <div class="stat-label">Job Growth</div>
        </div>
        <div class="career-stat">
          <div class="stat-value">${career.stats.difficulty}</div>
          <div class="stat-label">Learning Curve</div>
        </div>
        <div class="career-stat">
          <div class="stat-value">${career.stats.demand}</div>
          <div class="stat-label">Market Demand</div>
        </div>
      </div>
      
      <div class="detail-section">
        <h3>Required Skills</h3>
        <div class="two-columns">
          <div class="skill-category">
            <h4>Technical Skills</h4>
            <div class="skill-bars">
              ${career.skills.technical
                .map(
                  (skill) => `
                <div class="skill-bar">
                  <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}</span>
                  </div>
                  <div class="skill-progress">
                    <div class="skill-progress-bar" style="width: ${skill.percent}%"></div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
          
          <div class="skill-category">
            <h4>Soft Skills</h4>
            <div class="skill-bars">
              ${career.skills.soft
                .map(
                  (skill) => `
                <div class="skill-bar">
                  <div class="skill-info">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}</span>
                  </div>
                  <div class="skill-progress">
                    <div class="skill-progress-bar" style="width: ${skill.percent}%"></div>
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
      
      <div class="detail-section">
        <h3>Learning Path</h3>
        <div class="learning-path-summary">
          <p>A typical learning journey for ${
            career.title
          } involves these key stages:</p>
          <ol>
            ${career.roadmap
              .map(
                (stage) => `
              <li><strong>${stage.title}:</strong> ${stage.description}</li>
            `
              )
              .join("")}
          </ol>
          <p class="mt-3">For a detailed roadmap with resources, visit the <a href="#roadmaps" onclick="document.getElementById('roadmap-select').value='${career.title
            .toLowerCase()
            .replace(
              " ",
              "-"
            )}'; document.getElementById('roadmap-select').dispatchEvent(new Event('change')); document.querySelector('.close-modal').click();">Learning Roadmaps</a> section.</p>
        </div>
      </div>
    </div>
  `;

  careerDetailContent.innerHTML = detailHTML;
}

// Testimonial carousel
let currentSlide = 0;
const slides = document.querySelectorAll(".testimonial-slide");

function showSlide(n) {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Remove active class from all dots
  testimonialDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  // Show the current slide and activate the corresponding dot
  slides[n].style.display = "block";
  testimonialDots[n].classList.add("active");
}

nextTestimonial.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

prevTestimonial.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

testimonialDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Show the first testimonial
  showSlide(0);

  // Initialize empty roadmap
  roadmapContainer.innerHTML = `
    <div class="roadmap-placeholder">
      <i class="fas fa-map-signs"></i>
      <p>Select a career path to view its learning roadmap</p>
    </div>
  `;
});
