//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

$(document).ready(function () {
    $("#autoWidth").lightSlider({
      adaptiveHeight: true,
      auto: true,
      item: 1,
      slideMargin: 0,
      loop: true
    });
  });
  
  const navbarHome = document.querySelector(".navbarHome");
  
  window.addEventListener("scroll", () => {
    const post = window.scrollY > 100;
  
    navbarHome.classList.toggle("scroll", post);
  });
