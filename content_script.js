console.log('extension loaded!');

var tweets = document.getElementsByClassName('original-tweet');
console.log(tweets);

var buttonOuter = document.createElement('div');
buttonOuter.className = 'ProfileTweet-action uniqukey'
var buttonOuter2 = document.createElement('div');
buttonOuter2.className = 'IconContainer'

var img = document.createElement('img');
img.src = './img/thumbs-down.png'
img.src = chrome.extension.getURL('./images/thumbs-down.png');

buttonOuter2.appendChild(img);
buttonOuter.appendChild(buttonOuter2);
tweets[0].appendChild(buttonOuter);
