(function () {
    var photoVideoContainerElems = $(".input-photo-video");
    var multiColumnElem = $("#multi-column");
    var failGetWebcam = false;

    // if (isPhone) {
    //     multiColumnElem.append('<input type="file" id="take-picture" accept="image/*">');
    //     var takePicture = document.querySelector("#take-picture");
    //     takePicture.onchange = function (event) {
    //         // Get a reference to the taken picture or chosen file
    //         var files = event.target.files,
    //             file;
    //         if (files && files.length > 0) {
    //             file = files[0];
    //         }
    //     };
    // }

     function appendImageVideoElems() {
        Array.prototype.forEach.call(photoVideoContainerElems, function(elem){
            var $elem = $(elem);
            if (isPhone || failGetWebcam) {
                $elem.prepend('<img src="./data/images/warhol_portrait.jpg" alt="portrait">');
            }
            else {
                $elem.prepend('<video class="column-webcam"></video>');
            }
        });
    }

    if (isPhone) {
        appendImageVideoElems();
        // console.log("this is phone");

        // var photoImgElems = $(".show-picture");

        // // Create ObjectURL
        // var imgURL = window.URL.createObjectURL(file);

        // Array.prototype.forEach.call(photoImgElems, function(elem){
        //     var $elem = $(elem);
        //     $elem.attr("src", imgURL);
        // });

        // // Set img src to ObjectURL
        // showPicture.src = imgURL;

        // // For performance reasons, revoke used ObjectURLs
        // URL.revokeObjectURL(imgURL);
    }
    else {
        navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

        navigator.getMedia(
            // constraints
            {video:true, audio:false},

            // success callback
            function (mediaStream) {
                appendImageVideoElems();
                var videos = document.getElementsByClassName('column-webcam');
                Array.prototype.forEach.call(videos, function(video){
                    video.src = window.URL.createObjectURL(mediaStream);
                    video.play();
                });
            },   
            //handle error
            function (error) {
                failGetWebcam = true;
                console.log(error);
                appendImageVideoElems();
            });
    }


})();