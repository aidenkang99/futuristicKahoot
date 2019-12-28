class GameScreen {
    constructor() {
        this.level = -1;
        this.vote = 0; //INTEGER!!!
        this.questionsList = [];
        this.questionsList[0] = new Question("What is 2019’s top song?",
            "bad guy", "Señorita", "Old Town Road", "Sunflower", 1, false);
        this.questionsList[1] = new Question("What is 2019’s most streamed artist?",
            "Post Malone", "Billie Eilish", "Ariana Grande", "Drake", 1, false);
        this.questionsList[2] = new Question("What is the most popular SUV purchased in 2019?",
            "Jeep Wrangler", "Ford Escape", "Nissan Rogue", "Toyota Highlander", 2, false);
        this.questionsList[3] = new Question("What is the most watched Netflix show of 2019?",
            "Lucifer", "Stranger Things", "Black Mirror", "13 Reasons Why", 1, false);
        this.questionsList[4] = new Question("What is the most widely used programming language of 2019?",
            "Python", "Java", "JavaScript", "Ruby", 2, false);
        this.questionsList[5] = new Question("What is the most used social networking app of 2019?",
            "Twitter", "Instagram", "Facebook", "Snapchat", 2, false);
        this.questionsList[6] = new Question("What is the most populated country as of 2019?",
            "India", "US", "Brazil", "China", 3, false);
        this.questionsList[7] = new Question("What is the most populated US city as of 2019?",
            "New York, New York", "Houston, TX", "Chicago, IL", "Los Angeles, CA", 0, true);
        this.squares = [];
        this.squares[0] = new Square(0, "TopLeft", "F00000", "E59595");
        this.squares[1] = new Square(1, "TopRight", "00AA03", "78B079");
        this.squares[2] = new Square(2, "BottomLeft", "0066F0", "88B4EF");
        this.squares[3] = new Square(3, "BottomRight", "FFAA00", "FFDB92");
        this.messageBar = new MessageBar();
        
        this.gazePos = [];
        this.gazePosLength = 0;

        this.topLeft;
        this.topRight;
        this.bottomLeft;
        this.bottomRight;
    }
    //actual screen display stuff
    breakTime() {
        this.level++;
        document.getElementById("questionbar").innerHTML = "";
        this.dimSquares();
        this.messageBar.breakTime(this.level);
        var t1 = new Timer(5, this, 1);
    }
    thinkyTime() {
        this.setUpLevel(this.level);
        this.messageBar.thinkyTime();
        var t1 = new Timer(7, this, 2);
    }
    selectyTime() {
        var centerX = window.innerWidth * 0.5;
        var centerY = window.innerHeight * 0.5;
        this.topLeft = new squarePos(0, 0, centerX, centerY);
        this.topRight = new squarePos(centerX, 0, window.innerWidth, centerY);
        this.bottomLeft = new squarePos(0, centerY, centerX, window.innerHeight);
        this.bottomRight = new squarePos(centerX, centerY, window.innerWidth, window.innerHeight);
        
        this.messageBar.selectyTime();
        var t1 = new Timer(5, this, 3);
    }
    responseTime() {
        this.computeVote();
        this.dimFalse();
        if (this.questionsList[this.level].isCorrect(this.vote)) {
            this.messageBar.correctAnswer();
            this.messageBar.addScore();
            this.messageBar.printScore();
        }
        else {
            this.messageBar.falseAnswer();
            this.messageBar.printScore();
        }
        var t1 = new Timer(5, this, 4);
    }
    endOrBreak() {
        if (this.questionsList[this.level].isLast()) {
            this.endScreen();
        }
        else {
            this.breakTime();
        }
    }
    endScreen() {
        this.dimSquares();
        document.getElementById("questionbar").innerHTML = "";
        this.messageBar.endGame();
    }
    computeVote() {
        var totalPos = new Coordinate(0, 0);
        for (var i = 0; i < this.gazePosLength; i++) {
            totalPos.setX(totalPos.getX() + this.gazePos[i].getX());
            totalPos.setY(totalPos.getY() + this.gazePos[i].getY());
        }
        totalPos.setX(totalPos.getX()/this.gazePosLength);
        totalPos.setY(totalPos.getY()/this.gazePosLength);
        if (totalPos.getX() < this.topLeft.getBtmRtX() && totalPos.getY() < this.topLeft.getBtmRtY()){
            this.vote = 0;
        }
        else if (totalPos.getX() > this.topRight.getTopLftX() && totalPos.getY() < this.topRight.getBtmRtY()) {
            this.vote = 1;
        }
        else if (totalPos.getX() < this.bottomLeft.getBtmRtX() && totalPos.getY() > this.bottomLeft.getTopLftY()) {
            this.vote = 2;
        }
        else if (totalPos.getX() > this.topLeft.getTopLftX() && totalPos.getY() > this.topLeft.getTopLftY()) {
            this.vote = 3;
        }
        this.gazePosLength = 0;
        this.gazePos = [];
    }
    computePosition() {
        var c = new Coordinate(thisD.x, thisD.y);
        this.gazePos.push(c);
        this.gazePosLength++;
    }
    dimSquares() {
        for (var i = 0; i < 4; i++) {
            this.squares[i].dim();
        }
    }
    dimFalse() {
        for (var i = 0; i < 4; i++) {
            if (i != this.questionsList[this.level].getCorrectAnswer()) {
                this.squares[i].dim();
            }
        }
    }
    brightenSquares() {
        for (var i = 0; i < 4; i++) {
            this.squares[i].brighten();
        }
    }
    setUpLevel() {
        document.getElementById("TopLeft").innerHTML = "";
        document.getElementById("TopRight").innerHTML = "";
        document.getElementById("BottomLeft").innerHTML = "";
        document.getElementById("BottomRight").innerHTML = "";
        document.getElementById("questionbar").innerHTML = this.questionsList[this.level].getQuestion();
        for (var i = 0; i < 4; i++) {
            this.squares[i].brighten();
            var para = document.createElement("div");
            para.id = "inside" + i;
            para.classList.add("inside");
            para.innerHTML = this.questionsList[this.level].getAnswer(i);
            var element = document.getElementById(this.squares[i].getDivId());
            element.appendChild(para);
        }
    }
}
