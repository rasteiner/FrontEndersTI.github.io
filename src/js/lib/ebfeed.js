var http = require('http'),
    FeedParser = require('feedparser');

var api = 'https://obscure-springs-8959.herokuapp.com/';
var organizer = '6095917801';

function get(callback) {

    var parser = new FeedParser({});

    http.get(api + organizer, function(res) {
        res.pipe(parser);
    });

    parser.on('readable', function() {
        callback(this);
    });
}

module.exports = {
    get: get
};

