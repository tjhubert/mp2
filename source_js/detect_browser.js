var isPhone = false;
(function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // var person = prompt("Please use a laptop or desktop computer to access this website.", "");
        alert("For even more cool pop art magic, please use your laptop or desktop computer.");
        isPhone = true;
    }
    else if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
        alert("For even more cool pop art magic, please use Firefox or Chrome ")
    }
    else {
        alert("For even more cool pop art magic, please allow webcam access.");
    }
})();