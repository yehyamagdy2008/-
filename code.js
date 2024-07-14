let bg_header = document.querySelector("header");
let bg_header_small = document.querySelector(".small-screen-header");
let bg_header2 = bg_header.offsetTop;
let co_nav = document.querySelectorAll("header nav ul li a");
let ab = document.querySelectorAll(".humburger-button span");

document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 100) {
    bg_header.style.background = "#2e7d32";
    bg_header_small.style.background = "#2e7d32";
    co_nav.forEach((e) => {
      e.style.color = "#ffffff";
    });
    ab.forEach((e) => {
      e.style.background = "#ffffff";
    });
  } else {
    bg_header.style.backgroundColor = "#ffffff";
    bg_header_small.style.background = "#ffffff";
    co_nav.forEach((e) => {
      e.style.color = "#2e7d32";
    });
    ab.forEach((e) => {
      e.style.background = "black";
    });
  }
});

let a = document.querySelector(".humburger-button");
let b = document.querySelector(".humburger-button span:first-child");
let c = document.querySelector(".humburger-button span:nth-child(2)");
let d = document.querySelector(".humburger-button span:last-child");
let f = document.querySelector(".nav-header-small-screen");
let v = document.querySelectorAll(".nav-header-small-screen ul li");
function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}
function nn() {
  b.classList.toggle("posistion");
  d.classList.toggle("posistion");
  c.classList.toggle("hidden-burger");
  b.classList.toggle("mark1");
  d.classList.toggle("mark2");
  f.classList.toggle("display-flex");
  document.body.classList.toggle("over-flow");
  scrollToTop();
}

a.addEventListener("click", () => {
  nn();
});

v.forEach((e) => {
  e.addEventListener("click", () => {
    nn();
  });
});
let img1 = document.querySelector(
  ".Services .container-cards .card:nth-child(1) .img-card img:nth-child(1)"
);
let img2 = document.querySelector(
  ".Services .container-cards .card:nth-child(2) .img-card img:nth-child(1)"
);
let img3 = document.querySelector(
  ".Services .container-cards .card:nth-child(3) .img-card img:nth-child(1)"
);
let img4 = document.querySelector(
  ".Services .container-cards .card:nth-child(4) .img-card img:nth-child(1)"
);
let img5 = document.querySelector(
  ".Services .container-cards .card:nth-child(5) .img-card img:nth-child(1)"
);
let img6 = document.querySelector(
  ".Services .container-cards .card:nth-child(6) .img-card img:nth-child(1)"
);
let img7 = document.querySelector(
  ".Services .container-cards .card:nth-child(7) .img-card img:nth-child(1)"
);

let card1 = document.querySelector(
  ".Services .container-cards .card:nth-child(1)"
);
let card2 = document.querySelector(
  ".Services .container-cards .card:nth-child(2)"
);
let card3 = document.querySelector(
  ".Services .container-cards .card:nth-child(3)"
);
let card4 = document.querySelector(
  ".Services .container-cards .card:nth-child(4)"
);
let card5 = document.querySelector(
  ".Services .container-cards .card:nth-child(5)"
);
let card6 = document.querySelector(
  ".Services .container-cards .card:nth-child(6)"
);
let card7 = document.querySelector(
  ".Services .container-cards .card:nth-child(7)"
);

function changeImg(Proimg, card, imge1, imge2) {
  document.addEventListener("DOMContentLoaded", () => {
    let originalSrc = Proimg.src; // حفظ مسار الصورة الأصلية
    card.addEventListener("mouseenter", () => {
      Proimg.src = imge2;
    });

    card.addEventListener("mouseleave", () => {
      Proimg.src = originalSrc;
    });
  });
}

changeImg(img1, card1, "./img/moslem(1).png", "./img/moslem(2).png");
changeImg(
  img2,
  card2,
  "./img/wedding-contract.png",
  "./img/wedding-contract(1).png"
);
changeImg(img3, card3, "./img/quran.png", "./img/quran(1).png");
changeImg(img4, card4, "./img/dhad.png", "./img/dhad(1).png");
changeImg(img5, card5, "./img/corporate.png", "./img/corporate(1).png");
changeImg(img6, card6, "./img/lesson.png", "./img/lesson(1).png");
changeImg(img7, card7, "./img/couple.png", "./img/couple(1).png");
