
console.log("🖤 Welcome to my black and pink portfolio 💖");


if (!sessionStorage.getItem("welcomeShown")) {
  alert("Hello! Welcome to my portfolio site 💖🖤");
  sessionStorage.setItem("welcomeShown", "true");
}


const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});


sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(40px)";
  section.style.transition = "opacity 1s ease, transform 1s ease";
  observer.observe(section);
});
