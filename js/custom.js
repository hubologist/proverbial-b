var source = 'source.txt';

function readTextFile(file, cb) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                var items = rawFile.responseText.split('+');
                if(cb) cb(items);
            }
        }
    };
    rawFile.send(null);
}

var cb = function(result) {
    document.getElementById('text').innerHTML=(
        '<a href="javascript: readTextFile(source, cb);">'+
        result[Math.floor(Math.random()*result.length)]
        );
};

readTextFile(source, cb);