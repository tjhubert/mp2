(function () {
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);

    navigator.getMedia(
        // constraints
        {
            video:
            {
                width: 320,
                height: 240
            }, 
            audio:false
        },

        // success callback
        function (mediaStream) {
            var videos = document.getElementsByClassName('column-webcam');
            Array.prototype.forEach.call(videos, function(video){
                video.src = window.URL.createObjectURL(mediaStream);
                video.play();
            });
        },   
        //handle error
        function (error) {
            console.log(error);
        })   
})();