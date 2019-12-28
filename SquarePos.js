class squarePos {
    constructor(x1, y1, x2, y2) {
        this.topLftX = x1;
        this.topLftY = y1;
        this.btmRtX = x2;
        this.btmRtY = y2;
    }
    setTopLft(x, y) {
        this.topLftX = x;
        this.topLftY = y;
    }
    setBtmRt(x, y) {
        this.btmRtX = x;
        this.btmRtY = y;
    }
    getTopLftX() {
        return this.topLftX;
    }
    getTopLftY() {
        return this.topLftY;
    }
    getBtmRtX() {
        return this.btmRtX;
    }
    getBtmRtY() {
        return this.btmRtY;
    }
}