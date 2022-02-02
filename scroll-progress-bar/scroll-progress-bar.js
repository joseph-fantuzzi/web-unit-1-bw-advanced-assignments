// most of the work here will be done with logic and a little math
// what's the usual measurement of a progress bar? you'll need to measure the same way here
// use that measurement to update the style of your inner fill element as you scroll

const scrollProgress = document.querySelector(".scroll-progress");

document.addEventListener("scroll", () => {
  const totalHeightOfPage = document.body.scrollHeight;
  const currentDistanceFromTop = document.documentElement.scrollTop;
  const windowHeight = document.documentElement.clientHeight;
  const scrolledPercentage = (currentDistanceFromTop / (totalHeightOfPage - windowHeight)) * 100;

  scrollProgress.style.width = Math.round(scrolledPercentage) + "%";
});
