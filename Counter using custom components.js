"use strict";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
class simpleCounter extends HTMLElement {
    static get boundAttributes() {
        return ['min', 'max', 'interval'];
    }
    static get observedAttributes() {
        return ['min', 'max', 'interval']
    }

    get min() {
        if (this.hasAttribute('min')) {
            if (isNaN(parseFloat(this.getAttribute('min')))) {
                return 0;
            }
            return parseFloat(this.getAttribute('min'));
        }
        return 0;
    }
    get max() {
        if (this.hasAttribute('max')) {
            if (isNaN(parseFloat(this.getAttribute('max')))) {
                return 100;
            }
            return parseFloat(this.getAttribute('max'));
        }
        return 100;
    }
    get step() {
        if (this.hasAttribute('step')) {
            if (isNaN(parseFloat(this.getAttribute('step')))) {
                return 1;
            }
            return parseFloat(this.getAttribute('max'));
        }
        return 1;
    }

    get interval() {
        if (this.hasAttribute('interval')) {
            if (isNaN(parseFloat(this.getAttribute('interval'))) || parseFloat(this.getAttribute('interval')) == 0) {
                return 1000;
            }
            return (parseFloat(this.getAttribute('interval')) * 1000);
        }
        return 1000;
    }

    connectedCallback() {
        var MIN = parseFloat(this.min);
        var i = MIN;
        var INTERVAL = (this.interval);
        var STEP = parseFloat(this.step);
        var MAX = this.max;
        var COUNTER = setInterval(
            () => {

                if (i <= MAX) {
                    this.innerHTML = i;
                    i = i + STEP;
                } else {
                    clearInterval(COUNTER);
                }
            }, INTERVAL
        )
    }

    constructor() {
        super();

    }
}

customElements.define("simple-counter", simpleCounter);

setTimeout(function () {
    var celebration = document.getElementById('celebration');
    celebration.style.display = "block";
}, 10200);