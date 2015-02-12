/* Keyboard controls
 *
 * left arrow	37
 * up arrow	    38
 * right arrow	39
 * down arrow	40
 *
 * */

$(document).ready(function () {
    console.log("Document ready.");
});

var source = 'source.json';

var jqxhr = $.getJSON(source, function (json) {
    var i = 0;

    $(document).keydown(function (e) {
        if (e.which == 37 || e.which == 38) {
            i--;
            console.log(json[i]);
        } else if (e.which == 39 || e.which == 40) {
            i++;
            console.log(json[i]);
        }
    });
})
    .done(function () {
        console.log("Done.");
    })
    .fail(function () {
        console.log("Error.");
    });

