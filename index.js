const firstSectionTextDiv = document.querySelector("#section1 #text");
const firstSectionH1 = document.querySelector("#text h1");
const firstSectionParagraphDiv =
  firstSectionTextDiv.querySelector("#text #paragraphs");
const myImage = document.querySelector("#section1 img");
const section2img = document.querySelector("#section2 .content img");
const section2paragraph = document.querySelector("#section2 .content .text");

const header = document.querySelector("header").getBoundingClientRect();
const section1Position = document
  .querySelector("#section1")
  .getBoundingClientRect();
const section2Position = document
  .querySelector("#section2")
  .getBoundingClientRect();
const section3Position = document
  .querySelector("#section3")
  .getBoundingClientRect();
const section4Position = document
  .querySelector("#section4")
  .getBoundingClientRect();
const section5Position = document
  .querySelector("#section5")
  .getBoundingClientRect();

let currentDiv = 0;
const isDone = [false, false, false, false, false];
hideElements();
window.addEventListener("scroll", (e) => {
  loadElements();
});
window.addEventListener("load", () => {
  loadElements();
});
function loadElements() {
  console.log(isDone);
  if (window.scrollY <= 0) {
    currentDiv = 0;
    if (!isDone[currentDiv]) {
      isDone[currentDiv] = true;
      showFirstSection();
    }
  }

  if (window.scrollY >= header.height + section1Position.height - 120) {
    currentDiv = 1;
    if (!isDone[currentDiv]) {
      isDone[currentDiv] = true;
      showSecondSection();
    }
  }
  if (
    window.scrollY >=
    header.height + section1Position.height + section2Position.height - 300
  ) {
    currentDiv = 2;
    if (!isDone[currentDiv]) {
      isDone[currentDiv] = true;
      showThirdSection();
    }
  }
  console.log(window.scrollY, header.height + section1Position.height - 120);
  if (
    window.scrollY >=
    section1Position.height +
      section2Position.height +
      section3Position.height -
      300
  ) {
    currentDiv = 3;
    if (isDone[currentDiv]) return;
    isDone[currentDiv] = true;
    showFourthSection();
  }
}
function hideElements() {
  hideFirstSection();
  hideSecondSection();
  hideThirdSection();
  hideFourthSection();
}

function showFirstSection() {
  headingAnimation(firstSectionH1);
  paragraphAnimation(firstSectionParagraphDiv, "both");
  imageAnimation(myImage, "both");
}
function hideFirstSection() {
  firstSectionH1.innerText = "";

  paragraphAnimation(firstSectionParagraphDiv, "reverse");
  imageAnimation(myImage, "reverse");
}

function showSecondSection() {
  imageAnimation(section2img, "both");
  paragraphAnimation(section2paragraph, "both");
}
function hideSecondSection() {
  imageAnimation(section2img, "reverse");
  paragraphAnimation(section2paragraph, "reverse");
}

function showThirdSection() {
  const section3Images = document.querySelectorAll(
    "#section3 .projectPhotosContainer img",
  );
  section3Images.forEach((img) => {
    img.animate([{ opacity: 0 }, { opacity: 1 }], {
      easing: "ease",
      duration: 1000,
      iterations: 1,
      fill: "both",
    });
  });
}
function hideThirdSection() {
  const section3Images = document.querySelectorAll(
    "#section3 .projectPhotosContainer img",
  );
  section3Images.forEach((img) => {
    img.animate([{ opacity: 1 }, { opacity: 0 }], {
      easing: "ease",
      duration: 0,
      iterations: 1,
      fill: "both",
    });
  });
}

function showFourthSection() {
  const fourthSectionText = document.querySelector(
    "#section4 .content .text p",
  );
  const fourthSectionImg = document.querySelector("#section4 .content img");
  paragraphAnimation(fourthSectionText, "both");
  imageAnimation(fourthSectionImg, "both");
}
function hideFourthSection() {
  const fourthSectionText = document.querySelector(
    "#section4 .content .text p",
  );
  const fourthSectionImg = document.querySelector("#section4 .content img");
  paragraphAnimation(fourthSectionText, "reverse");
  imageAnimation(fourthSectionImg, "reverse");
}

function imageAnimation(img, mode) {
  const firstValue = mode === "both" ? "180%" : "0%";
  const secondValue = mode === "both" ? "0%" : "180%";
  const keyframes = [
    {
      transform: `translateX(${firstValue})`,
      opacity: 0,
    },
    {
      transform: `translateX(${secondValue})`,
      opacity: 1,
    },
  ];
  const properties = {
    easing: "ease",
    duration: mode == "both" ? 1200 : 0,
    fill: "both",
    iterations: 1,
  };
  img.animate(keyframes, properties);
}

function paragraphAnimation(paragraphDiv, mode) {
  const firstValue = mode === "both" ? "180%" : "0%";
  const secondValue = mode === "both" ? "0%" : "180%";
  const keyframes = [
    {
      transform: `translateY(${firstValue})`,
      opacity: mode === "both" ? 0 : 1,
    },
    {
      transform: `translateY(${secondValue})`,
      opacity: mode === "both" ? 1 : 0,
    },
  ];
  const properties = {
    easing: "ease",
    duration: mode == "both" ? 1200 : 0,
    fill: "both",
    iterations: 1,
  };
  paragraphDiv.animate(keyframes, properties);
}

function headingAnimation(heading) {
  heading.innerText = "";
  const text = "BARWEB - Tworzenie stron internetowych";
  let i = 0;
  setInterval(() => {
    if (i < text.length) {
      heading.textContent += text[i];
      i++;
    }
  }, 30);
}
