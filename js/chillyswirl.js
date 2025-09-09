// Gelato Delícia - JavaScript Functions

// Smooth scrolling para navegação
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Filtro de sabores
function filterFlavors(category) {
  const cards = document.querySelectorAll(".flavor-card")
  const buttons = document.querySelectorAll(".btn-group .btn")

  // Remove active class from all buttons
  buttons.forEach((btn) => btn.classList.remove("active"))

  // Add active class to clicked button
  event.target.classList.add("active")

  // Filter cards
  cards.forEach((card) => {
    if (category === "todos" || card.dataset.category === category) {
      card.classList.remove("hidden")
      setTimeout(() => {
        card.style.display = "block"
      }, 50)
    } else {
      card.classList.add("hidden")
      setTimeout(() => {
        if (card.classList.contains("hidden")) {
          card.style.display = "none"
        }
      }, 500)
    }
  })
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.05)"
  }
})

// Form submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()

      // Get form data
      const formData = new FormData(this)
      const nome = document.getElementById("nome").value
      const email = document.getElementById("email").value
      const telefone = document.getElementById("telefone").value
      const assunto = document.getElementById("assunto").value
      const mensagem = document.getElementById("mensagem").value

      // Validate form
      if (!nome || !email || !assunto || !mensagem) {
        showAlert("Por favor, preencha todos os campos obrigatórios.", "warning")
        return
      }

      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML

      submitBtn.innerHTML = '<span class="loading"></span> Enviando...'
      submitBtn.disabled = true

      setTimeout(() => {
        submitBtn.innerHTML = originalText
        submitBtn.disabled = false

        showAlert("Mensagem enviada com sucesso! Entraremos em contato em breve.", "success")
        this.reset()
      }, 2000)
    })
  }
})

// Alert function
function showAlert(message, type = "info") {
  // Remove existing alerts
  const existingAlert = document.querySelector(".custom-alert")
  if (existingAlert) {
    existingAlert.remove()
  }

  // Create alert
  const alert = document.createElement("div")
  alert.className = `alert alert-${type} custom-alert position-fixed`
  alert.style.cssText = `
        top: 100px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        border-radius: 10px;
    `
  alert.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi bi-${type === "success" ? "check-circle" : type === "warning" ? "exclamation-triangle" : "info-circle"} me-2"></i>
            <span>${message}</span>
            <button type="button" class="btn-close ms-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `

  document.body.appendChild(alert)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (alert.parentElement) {
      alert.remove()
    }
  }, 5000)
}

// Animate elements on scroll
function animateOnScroll() {
  const elements = document.querySelectorAll(".card, .hero-content, .location-info")

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top
    const elementVisible = 150

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1"
      element.style.transform = "translateY(0)"
    }
  })
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  // Set initial state for animations
  const elements = document.querySelectorAll(".card, .location-info")
  elements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "all 0.6s ease"
  })

  // Animate on scroll
  window.addEventListener("scroll", animateOnScroll)
  animateOnScroll() // Initial check
})

// Mobile menu auto-close
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link")
  const navbarCollapse = document.querySelector(".navbar-collapse")

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = window.bootstrap.Collapse // Declare bootstrap variable
        new bsCollapse(navbarCollapse).hide()
      }
    })
  })
})

// Add loading states to buttons
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (this.type !== "submit" && !this.classList.contains("btn-group")) {
        const originalText = this.innerHTML
        this.innerHTML = '<span class="loading"></span>'

        setTimeout(() => {
          this.innerHTML = originalText
        }, 1000)
      }
    })
  })
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const heroImage = document.querySelector(".hero-image img")

  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.1}px)`
  }
})

// Add hover effects to cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card")

  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})

// Initialize tooltips (if Bootstrap tooltips are needed)
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
    return new window.bootstrap.Tooltip(tooltipTriggerEl) // Declare bootstrap variable
  })
})

// Add click effects
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    const ripple = document.createElement("span")
    const rect = e.target.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `

    e.target.style.position = "relative"
    e.target.style.overflow = "hidden"
    e.target.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  }
})

// Add ripple animation
const style = document.createElement("style")
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)
