class MessageBar {
    constructor() {
        this.id = "messagebar";
        this.score = 0;
    }
    breakTime(level) {
        document.getElementById(this.id).innerHTML = "Level " + (level + 1) + " is up next, relax your eyes :)";
    }
    thinkyTime() {
        document.getElementById(this.id).innerHTML = "Decide which answer to vote on now! Your gaze isn't scored yet.";
    }
    selectyTime() {
        document.getElementById(this.id).innerHTML = "Pick your vote by staring at a box. Don't move your eyes."
    }
    correctAnswer() {
        document.getElementById(this.id).innerHTML = "Wahoo! Correct answer!"
    }
    falseAnswer() {
        document.getElementById(this.id).innerHTML = "Ah rats, wrong answer :(";
    }
    endGame() {
        document.getElementById(this.id).innerHTML = "Game over! Thanks for playing :)";
    }
    addScore(){
        this.score += 10;
    }
    printScore() {
	    document.getElementById("score").innerHTML = "score: " + this.score;
    };
}
