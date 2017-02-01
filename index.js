exports.printMsg = function() {
    var message = '';

    var rng = Math.random();
    if (0 <= rng && rng < 0.33) {
        message = 'o hi';
    } else if (0.33 <= rng && rng < 0.66) {
        message = 'i need a HUGE favor';
    } else {
        message = 'can you do me a HUGE favor';
    }

    console.log(message);
}
