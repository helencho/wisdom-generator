let peter = 'https://raw.githubusercontent.com/helencho/wisdom-generator/master/peter.json';
let backgrounds = 'https://raw.githubusercontent.com/helencho/wisdom-generator/master/backgrounds.json';
let text
document.addEventListener('DOMContentLoaded', () => {
    let quotediv = document.querySelector('#quote');
    let body = document.querySelector('body');
    fetch(peter)
        .then((res) => {
            return res.json();
        }).then((quoteArray) => {
            fetch(backgrounds)
                .then((res) => {
                    return res.json();
                }).then((bgArray) => {
                    let bg = random(bgArray);
                    body.style.backgroundImage = `url(${bg})`;
                    body.style.backgroundSize = 'cover';
                    body.style.height = '100vh';
                    body.style.backgroundRepeat = 'no-repeat';
                    text = random(quoteArray)
                })
        })
});

// randomly chooses an element from an array 
const random = (array) => {
    return array[Math.floor(Math.random() * (array.length))];
}


var $ = function(id) {
    return document.getElementById(id);
  };
  var inc = 0;
  var out = 0;
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
  var timer;
  
  var anim = function() {
    inc++;
    if (inc % 7 === 0 && out < text.length) {
      $('anim').appendChild(document.createTextNode(text[out]));
      out++;

    }
  };
  timer = setInterval(anim, 4);
  $('anim').innerHTML = '';
  
  function reload() {
    window.location.href = window.location.href;
  }

document.addEventListener("click", () => reload());




// We'll miss you Peter -David, Helen, Michelle
