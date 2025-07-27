// Translations
const translations = {
  uz: {
    nav: {
      about: "Men haqimda",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      contact: "Aloqa",
    },
    hero: {
      greeting: "Salom, men",
      name: "Alex Developer",
      title: "Full Stack Dasturchi",
      description:
        "Zamonaviy veb-ilovalar yaratishga ixtisoslashgan dasturchi. React, Node.js va zamonaviy texnologiyalar bilan ishlash tajribasi.",
      cta: "Loyihalarni ko'rish",
    },
    about: {
      title: "Men haqimda",
      description:
        "Men 5+ yillik tajribaga ega full-stack dasturchiman. Zamonaviy veb-texnologiyalar va eng yaxshi amaliyotlar bilan ishlashni yaxshi ko'raman.",
      experience: "Tajriba",
      years: "5+ yil",
      projects: "Loyihalar",
      count: "50+",
    },
    skills: {
      title: "Ko'nikmalar",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Vositalar",
    },
    projects: {
      title: "Loyihalar",
      viewProject: "Loyihani ko'rish",
      viewCode: "Kodni ko'rish",
    },
    contact: {
      title: "Aloqa",
      description: "Loyiha bo'yicha gaplashish uchun menga murojaat qiling",
      email: "Email yuborish",
    },
  },
  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, я",
      name: "Alex Developer",
      title: "Full Stack Разработчик",
      description:
        "Разработчик, специализирующийся на создании современных веб-приложений. Опыт работы с React, Node.js и современными технологиями.",
      cta: "Посмотреть проекты",
    },
    about: {
      title: "Обо мне",
      description:
        "Я full-stack разработчик с опытом работы 5+ лет. Люблю работать с современными веб-технологиями и лучшими практиками.",
      experience: "Опыт",
      years: "5+ лет",
      projects: "Проекты",
      count: "50+",
    },
    skills: {
      title: "Навыки",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Инструменты",
    },
    projects: {
      title: "Проекты",
      viewProject: "Посмотреть проект",
      viewCode: "Посмотреть код",
    },
    contact: {
      title: "Контакты",
      description: "Свяжитесь со мной для обсуждения проекта",
      email: "Отправить email",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Alex Developer",
      title: "Full Stack Developer",
      description:
        "A developer specializing in creating modern web applications. Experience with React, Node.js and modern technologies.",
      cta: "View Projects",
    },
    about: {
      title: "About Me",
      description:
        "I'm a full-stack developer with 5+ years of experience. I love working with modern web technologies and best practices.",
      experience: "Experience",
      years: "5+ years",
      projects: "Projects",
      count: "50+",
    },
    skills: {
      title: "Skills",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
    },
    projects: {
      title: "Projects",
      viewProject: "View Project",
      viewCode: "View Code",
    },
    contact: {
      title: "Contact",
      description: "Get in touch to discuss your project",
      email: "Send Email",
    },
  },
}

// Global variables
let currentLanguage = "en"
let isDarkMode = false

// DOM Elements
const languageSelector = document.getElementById("language-selector")
const themeToggle = document.getElementById("theme-toggle")
const themeIcon = document.getElementById("theme-icon")
const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const navMenu = document.getElementById("nav-menu")
const navLinks = document.querySelectorAll(".nav-link")

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme()
  initializeLanguage()
  initializeNavigation()
  initializeScrollEffects()
  initializeSkillBars()
})

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme) {
    isDarkMode = savedTheme === "dark"
    updateTheme()
  }

  themeToggle.addEventListener("click", toggleTheme)
}

function toggleTheme() {
  isDarkMode = !isDarkMode
  updateTheme()
  localStorage.setItem("theme", isDarkMode ? "dark" : "light")
}

function updateTheme() {
  document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light")
  themeIcon.className = isDarkMode ? "fas fa-sun" : "fas fa-moon"
}

// Language Management
function initializeLanguage() {
  const savedLanguage = localStorage.getItem("language")
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage
    languageSelector.value = currentLanguage
  }

  updateLanguage()
  languageSelector.addEventListener("change", function () {
    currentLanguage = this.value
    updateLanguage()
    localStorage.setItem("language", currentLanguage)
  })
}

function updateLanguage() {
  const elements = document.querySelectorAll("[data-key]")
  elements.forEach((element) => {
    const key = element.getAttribute("data-key")
    const keys = key.split(".")
    let translation = translations[currentLanguage]

    for (const k of keys) {
      translation = translation[k]
    }

    if (translation) {
      element.textContent = translation
    }
  })
}

// Navigation Management
function initializeNavigation() {
  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    mobileMenuToggle.classList.toggle("active")
  })

  // Navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1)
      scrollToSection(targetId)

      // Close mobile menu
      navMenu.classList.remove("active")
      mobileMenuToggle.classList.remove("active")
    })
  })

  // Active section highlighting
  window.addEventListener("scroll", updateActiveNavLink)
}

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - 80 // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function updateActiveNavLink() {
  const sections = ["hero", "about", "skills", "projects", "contact"]
  const scrollPosition = window.scrollY + 100

  for (const sectionId of sections) {
    const section = document.getElementById(sectionId)
    if (section) {
      const offsetTop = section.offsetTop
      const offsetHeight = section.offsetHeight

      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        // Remove active class from all links
        navLinks.forEach((link) => link.classList.remove("active"))

        // Add active class to current section link
        const activeLink = document.querySelector(`[data-section="${sectionId}"]`)
        if (activeLink) {
          activeLink.classList.add("active")
        }
        break
      }
    }
  }
}

// Scroll Effects
function initializeScrollEffects() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe sections
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    observer.observe(section)
  })
}

// Skill Bars Animation
function initializeSkillBars() {
  const skillsSection = document.getElementById("skills")
  let skillsAnimated = false

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !skillsAnimated) {
          animateSkillBars()
          skillsAnimated = true
        }
      })
    },
    { threshold: 0.5 },
  )

  skillsObserver.observe(skillsSection)
}

function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")
  skillBars.forEach((bar, index) => {
    setTimeout(() => {
      const width = bar.style.width
      bar.style.width = "0%"
      setTimeout(() => {
        bar.style.width = width
      }, 100)
    }, index * 100)
  })
}

// Smooth scrolling for older browsers
function smoothScrollTo(targetPosition, duration = 1000) {
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Add debounced scroll listener
window.addEventListener("scroll", debounce(updateActiveNavLink, 10))

// Handle window resize
window.addEventListener("resize", () => {
  // Close mobile menu on resize
  if (window.innerWidth > 768) {
    navMenu.classList.remove("active")
    mobileMenuToggle.classList.remove("active")
  }
})

// Prevent default behavior for project buttons (since they're just examples)
document.addEventListener("click", (e) => {
  if (e.target.closest(".project-link") || e.target.closest(".btn")) {
    const href = e.target.closest("a")?.getAttribute("href")
    if (href === "#") {
      e.preventDefault()
      console.log("Project link clicked - replace with actual URL")
    }
  }
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})
