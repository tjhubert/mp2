(function(){
    var lightboxElem = $("#lightbox");
    var lightboxElemContent = $("#lightbox-content");
    var lightboxElemDescription = $("#lightbox-description");
    var modalContainerElems = $(".modal-container");
    var worksData = [
        {
            thumbnail_url: "data/images/campbell_thumbnail.jpg",
            full_url: "data/images/campbell_full.jpg"
        },
        {
            thumbnail_url: "data/images/car_thumbnail.jpg",
            full_url: "data/images/car_full.jpg"
        },
        {
            thumbnail_url: "data/images/cow_thumbnail.jpg",
            full_url: "data/images/cow_full.jpg"
        },
        {
            thumbnail_url: "data/images/flower_thumbnail.jpg",
            full_url: "data/images/flower_full.jpg"
        },
        {
            thumbnail_url: "data/images/mao_thumbnail.jpg",
            full_url: "data/images/mao_full.jpg"
        },
        {
            thumbnail_url: "data/images/marilyn_thumbnail.jpg",
            full_url: "data/images/marilyn_full.jpg"
        },
        {
            thumbnail_url: "data/images/1967_thumbnail.jpg",
            full_url: "data/images/1967_full.jpg"
        },
        {
            thumbnail_url: "data/images/elvis_thumbnail.jpg",
            full_url: "data/images/elvis_full.jpg"
        },
        {
            thumbnail_url: "data/images/mickey_thumbnail.jpg",
            full_url: "data/images/mickey_full.jpg"
        },
        {
            thumbnail_url: "data/images/dollar_thumbnail.jpg",
            full_url: "data/images/dollar_full.jpg"
        },
        {
            thumbnail_url: "data/images/skull_thumbnail.jpg",
            full_url: "data/images/skull_full.jpg"
        },
        {
            thumbnail_url: "data/images/queen_thumbnail.jpg",
            full_url: "data/images/queen_full.jpg"
        }
    ];

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault)
          e.preventDefault();
      e.returnValue = false;  
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
      if (window.addEventListener) // older FF
          window.addEventListener('DOMMouseScroll', preventDefault, false);
      window.onwheel = preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
      window.ontouchmove  = preventDefault; // mobile
      document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null; 
        window.onwheel = null; 
        window.ontouchmove = null;  
        document.onkeydown = null;  
    }

    function displayLightbox(image) {
        return function() {
            lightboxElem.css('top', $(document).scrollTop());
            lightboxElem.addClass("show-lightbox");
            lightboxElemContent.css('background-image', 'url(' + image.full_url +')');
            disableScroll();
        }
    }

    worksData.sort(function(a, b) {
        return parseInt(a.year) - parseInt(b.year);
    });


    Array.prototype.forEach.call(modalContainerElems, function(modalContainerElem, index) {
        $(modalContainerElem).css("background-image", "url(" + worksData[index].thumbnail_url + ")")
        $(modalContainerElem).click(displayLightbox(worksData[index]));
    });

    $("#lightbox-hide").click(function(){
        lightboxElem.removeClass("show-lightbox");
        enableScroll();
    });

    $("#lightbox-transparent").click(function(){
        lightboxElem.removeClass("show-lightbox");
        enableScroll();
    });

})();