// Set the date we're counting down to
var countDownDate = new Date("Nov 6, 2024 19:09:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  var z = document.getElementsByClassName("offer-timers");
  for (var i = 0; i < z.length; i++) {
    z[i].innerHTML =
      '<span id="days">' +
      days +
      "</span>" +
      '<span id="hours">' +
      hours +
      "</span>" +
      '<span id="minutes">' +
      minutes +
      "</span>" +
      '<span id="seconds">' +
      seconds +
      "</span>";
  }
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    // document.getElementById("offer-timer").innerHTML = "";
    var y = document.getElementsByClassName("offer-timers");
    for (var i = 0; i < z.length; i++) {
      y[i].innerHTML = "";
    }
    // document.getElementById("offer-expire-text").classList.add("design-offer-expire-text");
    var t = document.getElementsByClassName("offers-expire-text");
    for (var i = 0; i < z.length; i++) {
      t[i].classList.add("design-offer-expire-text");
    }
    // document.getElementById("offer-expire-text-inner").innerHTML ="پیشنهاد ویژه این محصول به پایان رسیده";
    var h = document.getElementsByClassName("offer-expire-text-inner");
    for (var i = 0; i < z.length; i++) {
      h[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده";
    }
    // document.getElementById("special-offer").style.filter = "blur(3px)";
    var f = document.getElementsByClassName("special-offer");
    for (var i = 0; i < z.length; i++) {
      f[i].style.filter = "blur(3px)";
    }
  }
}, 1000);

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    items: 5,
    margin: 0,
    center: true,
    loop: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
  $(".brands-owl-carouse").owlCarousel({
    rtl: true,
    items: 7,
    margin: 0,
    center: true,
    loop: true,
    nav: true,
    dots: false,
    responsiveClass: true,
    slideBy: 2,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 6,
      },
    },
  });
});

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
