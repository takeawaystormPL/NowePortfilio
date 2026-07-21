const projectImageList = document.querySelectorAll("#section3 .content img");
const imageDialog = document.querySelector("dialog");
const closeIcon = document.querySelector("#closeIcon");
projectImageList.forEach((image) => {
  image.addEventListener("click", () => {
    // Checking width of window
    if (window.innerWidth > 570) {
      imageDialog
        .querySelector("img#currentlyFocusedImage")
        .setAttribute("src", image.src);
      imageDialog.showModal();
      imageDialog.animate(
        ([{ opacity: "0" }, { opacity: "1" }],
        {
          fill: "both",
          easing: "ease",
          duration: 1000,
          iterations: 1,
        }),
      );
    } else {
      window.open(`${image.src}`);
    }
  });
});
closeIcon.addEventListener("click", () => {
  console.log(imageDialog);
  imageDialog.close();
});
