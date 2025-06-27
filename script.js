// 로딩 스피너 숨기기
window.addEventListener("load", () => {
  const spinner = document.getElementById("loading-spinner");
  if (spinner) {
    spinner.style.opacity = "0";
    setTimeout(() => spinner.style.display = "none", 500);
  }
});

// 스크롤 시 네비게이션 바 표시
const navbar = document.getElementById("navbar");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 50) {
    navbar.classList.add("visible");
  } else {
    navbar.classList.remove("visible");
  }

  // 맨 위로 버튼 표시
  const scrollToTop = document.getElementById("scroll-to-top");
  if (scrollTop > 300) {
    scrollToTop.classList.add("visible");
  } else {
    scrollToTop.classList.remove("visible");
  }

  // 섹션 페이드 인
  document.querySelectorAll(".section").forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("fade-in");
    }
  });
});

// 햄버거 메뉴 토글
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// 메뉴 클릭 시 자동 닫힘 (모바일 UX 개선)
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// 맨 위로 이동
document.getElementById("scroll-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
