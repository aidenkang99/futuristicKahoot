var lastHit = 0
var x = 0;
var y = 0;
function gaze (data, clock) { 
    const delay = 400 // ms
    lastHit = clock;
    if (!data){
        thisD.x = -1;
        thisD.y = -1;
    }
    else{
        thisD.x = data.x;
        thisD.y = data.y;
    }
}

window.onload = function() {
    webgazer.setRegression('ridge') /* currently must set regression and tracker */ 
        .setTracker('clmtrackr') 
        .setGazeListener(gaze) 
        .begin() 
        .showPredictionPoints(true); /* shows a square every 100 milliseconds    where current prediction is */ 
    var width = 320;
    var height = 260;
    var topDist = '0px';
    var leftDist = '0px';
    
        thisD = new Data(0, 0);
    
    var setup = function() {
        var video = document.getElementById('webgazerVideoFeed');
        video.style.display = 'block';
        video.style.position = 'absolute';
        video.style.top = topDist;
        video.style.left = leftDist;
        video.width = width;
        video.height = height;
        video.style.margin = '0px';
        webgazer.params.imgWidth = width;
        webgazer.params.imgHeight = height;
        var overlay = document.createElement('canvas');
        overlay.id = 'overlay';
        overlay.style.position = 'absolute';
        overlay.width = width;
        overlay.height = height;
        overlay.style.top = topDist;
        overlay.style.left = leftDist;
        overlay.style.margin = '0px';
        document.body.appendChild(overlay);
        var cl = webgazer.getTracker().clm;
        function drawLoop() {
            requestAnimFrame(drawLoop);
            overlay.getContext('2d').clearRect(0,0,width,height);
            if (cl.getCurrentPosition()) {
                cl.draw(overlay);
            }
        }
        drawLoop();
    };
    function checkIfReady() {
        if (webgazer.isReady()) {
            setup();
        } else {
            setTimeout(checkIfReady, 100);
        }
    }
    setTimeout(checkIfReady,100);
};


function initiate(){
    $("#instruction").fadeOut('slow');
    $("#calibration").show();
    $(".lookHere").hide();
    $("#here0").fadeIn('slow');
    $("#here0").delay(3000).fadeOut('slow');
    $("#here1").delay(5000).fadeIn('slow');
    $("#here1").delay(3000).fadeOut('slow');
    $("#here2").delay(10000).fadeIn('slow');
    $("#here2").delay(3000).fadeOut('slow');
    $("#here3").delay(15000).fadeIn('slow');
    $("#here3").delay(3000).fadeOut('slow');
    $("#calibration").delay(20000).fadeOut('slow');
    $("main").delay(20000).fadeIn('slow');
    setTimeout(() => {  gameStart(); }, 20500);
}


function calibrate(){
    var first = document.getElementById("here1");
    for (var i = 0; i < 30; i++){
        first.click();
    }
}
