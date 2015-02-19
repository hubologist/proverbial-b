/* Keyboard controls
 *
 * left arrow	37
 * up arrow	    38
 * right arrow	39
 * down arrow	40
 *
 * */


// Helper functions
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

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

function reset($elem) {
    $elem.before($elem.clone(true));
    var $newElem = $elem.prev();
    $elem.remove();
    return $newElem;
}

function animate($this, animation) {
    $this.removeClass(animation);
    $this = reset($this);
    $this.addClass(animation);
    $this.html(json[seed[i]]);
}

// Globals :( I know
var source = 'source.json';

// Hello there
$(document).ready(function () {
    console.log("Document ready.");
});

//AJAX request
$.getJSON(source, function (json) {
    var i = 0;
    var seed = [];

    // Building seed
    for (i = 0; i < json.length; i++) {
        seed[i] = i;
    }

    // Randomizing seed
    seed = shuffle(seed);

    // Initial proverb
    $("#proverb").html(json[seed[i - 1]]);


    $(document).keydown(function (e) {
        var $this = $("#proverb");
        var animation = "";

        if (e.which == 37 || e.which == 38) {
            i--;
            if (i < 0) {
                i = seed.length - 1;
            }
            animation = "fadeIn animated";
            $this.removeClass();
            $this = reset($this);
            $this.addClass(animation);
            $this.html(json[seed[i]]);

        } else if (e.which == 39 || e.which == 40) {
            i++;
            if (i > seed.length - 1) {
                i = 0;
            }
            animation = "fadeIn animated";
            $this.removeClass();
            $this = reset($this);
            $this.addClass(animation);
            $this.html(json[seed[i]]);
        }
    });
})
.done(function () {
    // On completion
    console.log("Done.");
})
.fail(function () {
    // On failure
    console.log("Error.");
});

