"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

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
      name: "Iskandar Rustamov",
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
      name: "Iskandar Rustamov",
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
      name: "Iskandar Rustamov",
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

export default function Portfolio() {
  const [language, setLanguage] = useState<"uz" | "ru" | "en">("en")
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
    backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express"],
    tools: ["Git", "Docker", "AWS", "Figma", "VS Code"],
  }

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce platform with React and Node.js",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Next.js", "TypeScript", "PostgreSQL"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather dashboard with beautiful UI",
      image: "/placeholder.svg?height=200&width=300",
      tech: ["Vue.js", "Express", "API Integration"],
      liveUrl: "#",
      codeUrl: "#",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${darkMode ? "bg-gray-900/95" : "bg-white/95"} backdrop-blur-sm border-b ${darkMode ? "border-gray-800" : "border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AD
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["about", "skills", "projects", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      activeSection === item
                        ? "bg-blue-600 text-white"
                        : darkMode
                          ? "text-gray-300 hover:text-white hover:bg-gray-700"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {t.nav[item as keyof typeof t.nav]}
                  </button>
                ))}
              </div>
            </div>

            {/* Language Switcher & Theme Toggle */}
            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "uz" | "ru" | "en")}
                className={`px-3 py-1 rounded-md text-sm border ${
                  darkMode ? "bg-gray-800 border-gray-700 text-white" : "bg-white border-gray-300 text-gray-900"
                }`}
              >
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>

              <Button variant="ghost" size="sm" onClick={() => setDarkMode(!darkMode)} className="p-2">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                  {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${darkMode ? "bg-gray-900" : "bg-white"} border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item
                      ? "bg-blue-600 text-white"
                      : darkMode
                        ? "text-gray-300 hover:text-white hover:bg-gray-700"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {t.nav[item as keyof typeof t.nav]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4">{t.hero.greeting}</p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                {t.hero.name}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
              {t.hero.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {t.hero.description}
            </p>
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              {t.hero.cta}
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.about.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{t.about.description}</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{t.about.years}</div>
                  <div className="text-gray-600 dark:text-gray-400">{t.about.experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{t.about.count}</div>
                  <div className="text-gray-600 dark:text-gray-400">{t.about.projects}</div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.skills.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {t.skills[category as keyof typeof t.skills]}
                </h3>
                <div className="space-y-3">
                  {skillList.map((skill) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span>{skill}</span>
                      <div className="w-24 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                        <div
                          className="h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                          style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.projects.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden ${darkMode ? "bg-gray-900" : "bg-white"} shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105`}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                      <span>{t.projects.viewProject}</span>
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center space-x-2 bg-transparent">
                      <Github className="h-4 w-4" />
                      <span>{t.projects.viewCode}</span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.contact.title}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">{t.contact.description}</p>
          </div>
          <div className="max-w-md mx-auto">
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:alex@example.com"
                className={`p-4 rounded-full ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors duration-200`}
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="https://github.com"
                className={`p-4 rounded-full ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors duration-200`}
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                className={`p-4 rounded-full ${darkMode ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-100 hover:bg-gray-200"} transition-colors duration-200`}
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                {t.contact.email}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 ${darkMode ? "bg-gray-900 border-t border-gray-800" : "bg-white border-t border-gray-200"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2024 Alex Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
