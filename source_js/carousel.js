(function() {    
    var carouselSlides = $('.carousel-slides');
    var carouselSpan = $('#span-repeat');
    var currentCarouselIndex = 0;
    var oldIndex;

    function hideCarouselSlide(index) {
        $(carouselSlides[index])
            .css("display", "none")
            .removeClass("carousel-blue");
    }

    function showCarouselSlide(index) {
        $(carouselSlides[index])
            .css("display", "block")
            .addClass("carousel-blue");
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
    })

    showCarouselSlide(0);

})();


