/* Keyboard controls
 *
 * left arrow	37
 * up arrow	    38
 * right arrow	39
 * down arrow	40
 *
 * */

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

$(document).ready(function () {
    console.log("Document ready.");
});

var source = 'source.json';

$.getJSON(source, function (json) {
    var i = 0;
    var seed = [];

    for (i = 0; i < json.length; i++) {
        seed[i] = i;
    }

    seed = shuffle(seed);

    $("#proverb").html(json[seed[i-1]]);

    $(document).keydown(function (e) {
        if (e.which == 37 || e.which == 38) {
            i--;
            if (i < 0) {
                i = seed.length - 1;
            }
            $("#proverb").html(json[seed[i]]);
            $("#proverb").removeClass().addClass("fadeInUp animated");
        } else if (e.which == 39 || e.which == 40) {
            i++;
            if (i > seed.length - 1) {
                i = 0;
            }
            $("#proverb").html(json[seed[i]]);
            $("#proverb").removeClass().addClass("fadeInDown animated");
        }
    });
})
    .done(function () {
        console.log("Done.");
    })
    .fail(function () {
        console.log("Error.");
    });

