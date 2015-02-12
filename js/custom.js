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

$(document).keypress(function (e) {
    if (e.which == 13) {
        alert('You pressed enter!');
    }
});

var source = 'source.json';

var jqxhr = $.getJSON(source, function (json) {
    var i = 4;
    console.log(json[i]);
})
    .done(function () {
        console.log("Done.");
    })
    .fail(function () {
        console.log("Error.");
    });