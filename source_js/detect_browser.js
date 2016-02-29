var isPhone = false;
(function() {
    var standardMessage = "For even cooler pop art magic, ";
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // var person = prompt("Please use a laptop or desktop computer to access this website.", "");
        alert(standardMessage + "please use your laptop or desktop computer.");
        isPhone = true;
    }
    else if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
        alert(standardMessage + "please use Firefox or Chrome.")
    }
    else {
        alert(standardMessage + "please allow webcam access.");
    }
})();