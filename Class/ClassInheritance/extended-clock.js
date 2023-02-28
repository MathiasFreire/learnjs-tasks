class ExtendedClock extends Clock {
    constructor(input) {
        super(input);
        let {precision = 1000} = input
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}