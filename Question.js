class Question {
    constructor(q, a1, a2, a3, a4, ca, isLast) {
        this.quest = q; //question string
        this.answers = []; //array of answer strings
        this.answers = [a1, a2, a3, a4];
        this.correctInd = ca; //index of correct answer
        this.last = isLast;
    }
    getQuestion() {
        return this.quest;
    }
    getAnswer(index) {
        return this.answers[index];
    }
    getCorrectAnswer() {
        return this.correctInd;
    }
    getCorrectId() {
        return this.correctInd;
    }
    isCorrect(index) {
        if (index == this.correctInd) {return true;}
        else {return false;}
    }
    isLast() {
        return this.last;
    }
}
