const imageEls = document.querySelectorAll(".item-image");
imageEls.forEach((item, index) => {
  // console.log(item);
  item.style.backgroundImage = `url(../public/2.7-images/${index + 1}.jpg)`;
});

const wh = window.innerHeight;
window.addEventListener("scroll", function () {
  imageEls.forEach((el) => {
    const { bottom, top } = el.getBoundingClientRect();
    console.log(top, bottom);
    // if (bottom <= 0 || top >= wh) return;
    // console.log("....");
    const y = document.documentElement.scrollTop * 0.5;
    el.style.backgroundPosition = `center -${y}px`;
  });
});

const arr = [1, 2, 3, 4];
arr.forEach((item) => {
  if (item === 2) {
    return
  }
  console.log(item);
});
