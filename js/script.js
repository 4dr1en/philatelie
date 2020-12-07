/*
 * Snow fall for all the webpage with multi-speed and multi-directions
 * start whith the Konami Code
 * by adrien charrier for It-Akademy
*/


"use strict";

(() => {
    let keys = [];

    /*konami code event*/
    document.body.addEventListener('keydown', e => {
        keys.push(e.key);
        if (keys.length > 10) keys.shift();
        if (JSON.stringify(keys) == '["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"]') {
            startSnow();
        }
    });

    /*snow*/
    let fallTime = document.body.offsetHeight * 14; //speed

    function startSnow() {
        let interval = 0;
        while (interval < fallTime) {
            interval += Math.floor(Math.random() * 80); //density
            setTimeout(mkOneFlake, interval);
        }
    }

    function mkOneFlake() {
        const element = document.createElement('div');
        element.classList.add('flake');

        element.style.left = Math.floor(Math.random() * document.body.offsetWidth) + 'px';
        element.style.transform = "translateY(" + document.body.offsetHeight + "px)";

        const flackFallTime = fallTime - Math.floor(Math.random() * document.body.offsetHeight * 3); //speed differential
        const animation = "snowFall" + (Math.floor(Math.random() * 4) + 1); //directions
        element.style.animation = animation + " " + flackFallTime + "ms infinite reverse linear";

        document.body.appendChild(element);
    }

})();