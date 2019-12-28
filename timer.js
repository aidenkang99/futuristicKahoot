class Timer{
    constructor(time, gs, stage){
        this.done = false;
        this.time = time;
        var thisTimer = setInterval(function(){
            time -= 1;
            document.getElementById("timer").innerHTML = time;
            //this.result.innerHTML = time;
            this.time = time;
            if(time <= 0){
                //this.result.innerHTML = time;
                this.done = true;
                if (stage == 1){
                    gs.thinkyTime();
                }
                else if(stage == 2){
                    gs.selectyTime();
                }
                else if (stage == 3){
                    gs.responseTime();
                }
                else if (stage == 4){
                    gs.endOrBreak();
                }
                clearInterval(thisTimer);
            }
        }, 1000);
        if (stage == 3){
            var thatTimer = setInterval(function(){
                gs.computePosition();
                if (time <= 0){
                    clearInterval(thatTimer);
                }
            }, 10);
        }
    }
}
