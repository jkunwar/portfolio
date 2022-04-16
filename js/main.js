// Script for preloader
$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
            $(".navbar").css("background", "#ffffff");
            $(".navbar").css("box-shadow", "0px 6px 9px 0px rgba(0, 0, 0, 0.06)");
            $(".nav-link").css("color", "#0078ff")
            $(".name-nav").css("color", "#0078ff")
            $(".line").css("background", "#0078ff")
            $(".navbar").fadeIn();
            $(".navbar").fadeIn("slow");
            $(".navbar").fadeIn(3000);
        } else {
            $(".navbar").css("background", "transparent");
            $(".nav-link").css("color", "#FFFFFF")
            $(".name-nav").css("color", "#FFFFFF")
            $(".line").css("background", "#FFFFFF")
        }
    })

    if ($('.typed').length == 1) {
        var typed_content = $('.typed-items').text();
        var typed = new Typed('.typed', {
            strings: typed_content.split(','),
            typeSpeed: 100,
            loop: true,
            backDelay: 1100,
            backSpeed: 30,
        });
    }

    // script for skill bar
    jQuery('.skillbar').each(function () {
        jQuery(this).find('.skillbar-bar').animate({
            width: jQuery(this).attr('data-percent')
        }, 10000);
    });
    jQuery('.Count').each(function () {
        var $this = $(this);
        jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
            duration: 10000,
            easing: 'swing',
            step: function () {
                $this.text(Math.ceil(this.Counter));
            }
        });
    });


    // handle click event on humburger icon on small screen
    $('.hamburger').click(function (event) {
        var x = document.getElementById("slidemenu");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    })


    //  JavaScript code for filter on portfolio - section
    filterSelection('all');

    $('.filter').click(function (event) {
        const filterKey = $(this).attr('id');
        filterSelection(filterKey)
    });

    function filterSelection(c = 'all') {
        var x, i;
        x = document.getElementsByClassName("portfolio-column");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            removeClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
        }
    }

    function addClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    function removeClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }


});
