
$(document).ready(function () {
    $('.navbar-toggler').on('click', function () {
        $('#icone-navbar').toggleClass('bi-x-circle');
    });
});

// countDownDate code start


//set time in the end date
var countDownDate = new Date("July 25 ,2024 15:37:25").getTime();

//orign code count-down-date
var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var z = document.getElementsByClassName("demmos");
    for (var i = 0; i < z.length; i++) {
        z[i].innerHTML =
            '<span id="day">' + days + '</span>' +
            '<span id="hours">' + hours + '</span>' +
            '<span id="minutes">' + minutes + '</span>' +
            '<span id="seconds">' + seconds + '</span>';

    }

    //set demos count-down-date

    if (distance < 0) {
        clearInterval(x);
        var y = document.getElementsByClassName("demmos");
        for (var i = 0; i < z.length; i++) {
            y[i].innerHTML = "";
        }

        //set text-end-offer-date count-down-date

        var g = document.getElementsByClassName("text-offers-end");
        for (var i = 0; i < z.length; i++) {
            g[i].innerHTML = "پیشنهاد ویژه این محصول به پایان رسیده!";
        }

        //set fillter-blur count-down-date

        var t = document.getElementsByClassName("countDownDate");
        for (var i = 0; i < z.length; i++) {
            t[i].style.filter = "blur(2px)";
        }
    }
}, 1000);

// countDownDate code end


// carousel-items code start
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        // slideBy:3,
        center: true,
        lazyLoad: true,
        mouseDrag: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    });
});
// carousel-items code end

