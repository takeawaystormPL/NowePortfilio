const section3 = document.querySelector("#section3");
const firstProjectImages = section3.querySelectorAll(
  ".content .projectPhotosContainer:first-of-type img",
);
const secondProjectImages = section3.querySelectorAll(
  ".content .projectPhotosContainer:last-of-type img",
);

let firstProjectImagesArray = [];
firstProjectImages.forEach((el) => {
  firstProjectImagesArray.push(el);
});

let secondProjectImagesArray = [];
secondProjectImages.forEach((el) => {
  secondProjectImagesArray.push(el);
});

let currentImage = { count: 0 };
let currentImage2 = { count: 0 };
setInterval(() => {
  animateImage(firstProjectImagesArray, currentImage);
  animateImage(secondProjectImagesArray, currentImage2);
}, 3000);
function animateImage(imagesArray, currentImage) {
  let leftValue =
    window.innerWidth > 550 ? "20%" : window.innerWidth > 450 ? "10%" : "0%";

  imagesArray[currentImage.count].animate(
    [{ left: leftValue }, { left: "-120%" }],
    {
      duration: 1600,
      easing: "ease",
      fill: "both",
      iterations: 1,
    },
  );
  if (currentImage.count + 1 > imagesArray.length - 1) currentImage.count = 0;
  else {
    currentImage.count++;
  }
  imagesArray[currentImage.count].animate(
    [{ left: "120%" }, { left: leftValue }],
    {
      duration: 1600,
      easing: "ease",
      fill: "both",
      iterations: 1,
    },
  );
}
window.addEventListener("resize", () => {
  console.log(window.innerWidth);
});
