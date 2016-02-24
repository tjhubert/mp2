(function() {    
    var carouselSlides = $('.carousel-slides');
    var carouselSpan = $('#span-repeat');
    var carouselArrowLeft = $('#arrow-carousel-left');
    var isCarouselArrowLeftExist = true;
    var currentCarouselIndex = 1;
    var oldIndex;

    function hideCarouselSlide(index) {
        $(carouselSlides[index])
            .css("display", "none");
    }

    function showCarouselSlide(index) {
        $(carouselSlides[index])
            .css("display", "block");
    }

    $("#arrow-carousel-right").click(function(){
        
        if (currentCarouselIndex >= carouselSlides.length - 1) {
            carouselSpan.text(carouselSpan.text() + " and repeat")
            currentCarouselIndex++;
        }
        else {
            oldIndex = currentCarouselIndex;
            currentCarouselIndex++;
            hideCarouselSlide(oldIndex);
            showCarouselSlide(currentCarouselIndex);
        }

        if (!isCarouselArrowLeftExist) {
            carouselArrowLeft.removeClass("hide-arrow");
            isCarouselArrowLeftExist = true;
        }

    })

    $("#arrow-carousel-left").click(function(){
        if (currentCarouselIndex >= carouselSlides.length) {
            carouselSpan.text(carouselSpan.text().slice(0, -11));
            currentCarouselIndex--;
        }
        else if (currentCarouselIndex > 0){
            oldIndex = currentCarouselIndex;
            hideCarouselSlide(oldIndex);
            currentCarouselIndex--;
            showCarouselSlide(currentCarouselIndex);
        }

        if (currentCarouselIndex === 0) {
            carouselArrowLeft.addClass("hide-arrow");
            isCarouselArrowLeftExist = false;
        }
    })

    showCarouselSlide(1);

})();


