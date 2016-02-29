(function() {    
    var navbarElem = $("#desktop-menu");
    var desktopNavbarButtons = $(".desktop-navbar-links");
    var mobileNavbarButtons = $(".mobile-navbar-links");
    var menuIcon = $(".menu-icon");
    var isScrollInProgress = false;
    var isHovered = false, isShrink = false;

    $.extend(jQuery.easing,
            {smooth:
                function (x, t, b, c, d) {
                    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
                    return c/2*((t-=2)*t*t*t*t + 2) + b;
                }
            });

    function inView(element, buffer, isLast) {
        var elementTop = element.offset().top;
        var elementBottom = element.offset().top + element.height();
        var screenBottom = $(window).scrollTop() + $(window).height();
        var screenTop = $(window).scrollTop();

        if (!isLast) {
            return elementTop > screenTop - buffer && screenBottom > elementBottom - buffer;
        }
        else {
            return screenBottom > elementTop;
        }
    }

    function tryShrinkNavbar() {
        if (!isHovered) {
            if ($(document).scrollTop() > 50) {
                isShrink = true;
                navbarElem.addClass('navbar-shrink');
            } else {
                isShrink = false;
                navbarElem.removeClass('navbar-shrink');
            }
        }
    }

    function clearActiveNavbars() {
        Array.prototype.forEach.call(desktopNavbarButtons, function(navbarButton, index) {
            $(navbarButton).removeClass("navbar-active");
        })
    }

    function activateNavbar(index) {
        var navbarButtonELem = $(desktopNavbarButtons[index]);
        if (!navbarButtonELem.hasClass("navbar-active")) {
            clearActiveNavbars();
        }
        navbarButtonELem.addClass("navbar-active");
    }

    function smoothScrollTo(element, indexNavbar) {

        var page = $("html, body");

        function removePageEvent() {
            isScrollInProgress = false;
            page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
        }

        // if (indexNavbar === 0) {
        //     offset = 100;
        // }
        // else if (indexNavbar === 1) {
        //     offset = 200;
        // }
        // else {
        //     offset = 200;
        // }

        // allow user to stop smooth scroll when manual scroll is detected
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
           page.stop();
           removePageEvent();
        });

        $('html, body').animate(
            {
                scrollTop: element.offset().top
            }, 1200, 'smooth',
            function(){
                removePageEvent();
                // after scrolling is done activate the cicked navbar
                activateNavbar(indexNavbar);
            }
        );
    };



    Array.prototype.forEach.call(desktopNavbarButtons, function (navbarButton, index) {
        var navbarButtonElem = $(navbarButton);
        navbarButtonElem.click(function(){
            if (!navbarButtonElem.hasClass("navbar-active")) {
                isScrollInProgress = true;
                clearActiveNavbars();
                if (index === 0) {
                    smoothScrollTo($("#multi-column"), 0);
                }
                else if (index === 1) {
                    smoothScrollTo($("#carousel"), 1);
                }
                else {
                    smoothScrollTo($("#modal"), 2);
                }
            }
        })
    });
    Array.prototype.forEach.call(mobileNavbarButtons, function (navbarButton, index) {
        var navbarButtonElem = $(navbarButton);
        navbarButtonElem.click(function(){
            menuIcon.click();
            if (!navbarButtonElem.hasClass("navbar-active")) {
                isScrollInProgress = true;
                clearActiveNavbars();
                if (index === 0) {
                    smoothScrollTo($("#multi-column"), 0);
                }
                else if (index === 1) {
                    smoothScrollTo($("#carousel"), 1);
                }
                else {
                    smoothScrollTo($("#modal"), 2);
                }
            }
        })
    });

    $(window).scroll(function() {
        tryShrinkNavbar();
        // prevent changing active navbar when scroll in progress
        // for smoother transition
        if (!isScrollInProgress) {
            if (inView($("#multi-column"), 200) ) {
                activateNavbar(0);
            }
            else if (inView($("#carousel"), 200)) {
                activateNavbar(1);
            }
            else if (inView($("#modal"), 0, true)) {
                activateNavbar(2);
            }
            else {
                clearActiveNavbars();
            }
        }
    });

    navbarElem.mouseover(function() {
        if (isShrink) {
            navbarElem.removeClass('navbar-shrink');
            isShrink = false;
        }
        isHovered = true;
    });

    navbarElem.mouseleave(function() {
        isHovered = false;
        tryShrinkNavbar();
    });


})();