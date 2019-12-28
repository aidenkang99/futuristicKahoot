class Square {
    constructor(i, divId, color, dimColor) {
        this.index = i;
        this.divId = divId;
        this.originalColor = color;
        this.dimColor = dimColor;
    }
    getIndex() {
        return i;
    }
    getDivId() {
        return this.divId;
    }
    dim() {
        document.getElementById(this.divId).style.backgroundColor = this.dimColor;
    }
    brighten() {
        document.getElementById(this.divId).style.backgroundColor = this.originalColor;
    }
}