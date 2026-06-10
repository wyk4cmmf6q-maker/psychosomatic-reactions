const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
const progressBar = document.getElementById("progressBar");

// ハンバーガーメニュー
if (menuToggle && sideMenu) {
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    sideMenu.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  document.querySelectorAll(".side-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      sideMenu.classList.remove("open");
      menuToggle.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      sideMenu.classList.remove("open");
      menuToggle.classList.remove("active");
    }
  });
}

// 上の進捗バー
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const scrollPercent =
    documentHeight > 0
      ? (scrollTop / documentHeight) * 100
      : 0;

  if (progressBar) {
    progressBar.style.width = `${scrollPercent}%`;
  }
});

// reveal animation
const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.13,
  }
);

revealItems.forEach((item) => {
  observer.observe(item);
});