// Smooth scroll for nav links
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form validation
document.querySelector("form").addEventListener("submit", function (e) {
  const name = document.querySelector("#name");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    e.preventDefault();
    alert("Please fill in all fields.");
  }
});

// Simple animation for project cards on scroll
const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

projectCards.forEach((card) => {
  observer.observe(card);
});
