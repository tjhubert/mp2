(function () {
    var photoVideoContainerElems = $(".input-photo-video");
    var multiColumnElem = $("#multi-column");

     function replaceImageWithWebcam() {
        Array.prototype.forEach.call(photoVideoContainerElems, function(elem){
            var $elem = $(elem);
            $elem.find(".filter-overlay").replaceWith('<video class="filter-overlay column-webcam"></video>');
        });
    }

    if (!isPhone) {
        navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

        navigator.getMedia(
            // constraints
            {video:true, audio:false},

            // success callback
            function (mediaStream) {
                replaceImageWithWebcam();
                var videos = document.getElementsByClassName('column-webcam');
                Array.prototype.forEach.call(videos, function(video){
                    video.src = window.URL.createObjectURL(mediaStream);
                    video.play();
                });
            },   
            //handle error
            function (error) {
                if (error.name === "PermissionDeniedError") {
                    alert("You denied webcam access. Booo!!! Not cool. Allow webcam access and refresh the page.");
                }
                console.log(error);
            });
        
    }


})();