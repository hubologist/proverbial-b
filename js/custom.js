/* Keyboard controls
 * left arrow	37
 * up arrow	    38
 * right arrow	39
 * down arrow	40
 *
 * */

$(document).ready(function () {
    console.log("Ready.");

});

$(document).keypress(function (e) {
    if (e.which == 13) {
        alert('You pressed enter!');
    }
});

var source = 'source.json';

var jqxhr = $.getJSON("example.json", function () {
    console.log("success");
})
    .done(function () {
        console.log("second success");
    })
    .fail(function () {
        console.log("error");
    })
    .always(function () {
        console.log("complete");
    });

// Perform other work here ...

// Set another completion function for the request above
jqxhr.complete(function () {
    console.log("second complete");
});