var isPhone = false;
(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // var person = prompt("Please use a laptop or desktop computer to access this website.", "");
        alert("For best viewing please consider using your laptop or desktop computer.");
        isPhone = true;
    }
    else {
        // alert("Please .");
    }
})();