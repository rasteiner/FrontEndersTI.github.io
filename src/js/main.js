var fetch = require('./lib/ebfeed').get;
var crel = require('crel');


var container = document.getElementById('events');

fetch(function(stream) {
  var item;

  while(item = stream.read()) {
    crel(container,
      crel('div',
        crel('a', { href: item.link, target: '_blank' }, item.title)
      )
    );
  }
});
