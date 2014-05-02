
var url = 'https://cors-anywhere.herokuapp.com/http://www.moonfruit.com/sitecount.json';

var onDataReturned = function (data) {
	counter.setValue(data.count.replace(/,/g, ''));
	setTimeout(pollCounter, 5000);
}

var pollCounter = function () {
	$.get(url, onDataReturned);
}

pollCounter();