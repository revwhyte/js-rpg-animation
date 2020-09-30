cores = [
    '#F7F4EA',
    '#DED9E2',
    '#C0B9DD',
    '#80A1D4',
    '#75C9C8',
    '#FFFFFF',
];

// listener de click no botão
document.getElementById('btn').addEventListener('click', animate);

/**
 * animates the dice faces
 * 
 * @return void
 */
function animate() {
    var TIMES = 1000, SPEED = 60, STEP = 30,
        elem = document.getElementById('face'),
        div = document.getElementById('dado'),
        id = setInterval(frame, SPEED);

    /**
     * generates a frame to the whole animation
     * 
     * @return void
     */
    function frame() {
        // gera um numero aleatorio
        let num = roll();

        if(SPEED >= TIMES) {
            clearInterval(id);
        }
        else {
            SPEED += STEP;
            
            elem.src = `img/${num}.png`;
            elem.title = `${num}`;
            div.style.backgroundColor = cores[num-1];
        }
    }
}

/* FUNÇÕES AUXILIARES */

/**
 * Get a random number [1,6]
 * 
 * @return {number} [1,6]
 */
function roll() {
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * writes a string at the console
 * 
 * @param {string} str string
 */
function log(str) {
    console.log(str);
}

/**
 * Get a random boolean value.
 * 
 * @return {boolean} a random true/false
 */
function getRandomBool() {
    return Math.random() >= 0.5;
}
