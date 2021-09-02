window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 32 || document.documentElement.scrollTop > 32) {
    // document.getElementById("map").style.height = "calc(10vh - 2rem)";
    document.getElementById("map").style.top = "1rem";
    document.getElementById("map").style.bottom = "1rem";
    document.getElementById("map").style.height = "calc(100vh - 2rem)"; //100vh -top and bottom position
  } else {
    // All theses values are defaults values in map
    document.getElementById("map").style.top = "2.4rem";
    document.getElementById("map").style.bottom = "1rem";
    document.getElementById("map").style.height = "calc(97vh - 2.4rem)";
  }
};
