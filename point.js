class Point {
    constructor(name, numcredits, test, midterm, endterm, avg1) {
        this.name = name;
        this.numcredits = numcredits;
        this.test = test;
        this.midterm = midterm;
        this.endterm = endterm;
        this.avg1 = avg1;
    }
    getName() {
        return this.name;
    }
    getNumcredits() {
        return this.numcredits;
    }
    getTest() {
        return this.test;
    }
    getMidterm() {
        return this.midterm;
    }
    getEndterm() {
        return this.endterm;
    }
    getAvg1() {
        return this.avg1;
    }
    setName(name) {
        this.name = name;
    }
    steNumcredits(numcredits) {
        this.numcredits = numcredits;
    }
    setTest(test) {
        this.test = test;
    }
    setMidterm(midterm) {
        this.midterm = midterm;
    }
    setEndterm(endterm) {
        this.endterm = endterm;
    }
    setAvg1(avg1) {
        this.avg1 = avg1
    }
}