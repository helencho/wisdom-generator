let peter = 'https://raw.githubusercontent.com/helencho/wisdom-generator/master/peter.json';
let backgrounds = 'https://raw.githubusercontent.com/helencho/wisdom-generator/master/backgrounds.json';
let text;

document.addEventListener('DOMContentLoaded', () => {
    let quotediv = document.querySelector('#quote');
    let body = document.querySelector('body');

    const getWisdom = () => {

        fetch(backgrounds)
            .then((res) => {
                return res.json();
            }).then((bgArray) => {
                let bg = random(bgArray);
                body.style.backgroundImage = `url(${bg})`;
                body.style.backgroundSize = 'cover';
                body.style.height = '100vh';
                body.style.backgroundRepeat = 'no-repeat';

                fetch(peter)
                    .then((res) => {
                        return res.json();
                    }).then((quoteArray) => {
                        text = random(quoteArray)
                    })
            });
    }

    // document.addEventListener("click", () => {
    //     getWisdom(); 
    // })

    getWisdom();

    // document.addEventListener("click", () => {
    //     getWisdom();
    //     console.log(text)
    // });
    
    document.addEventListener("click", () => reload());

});

// randomly chooses an element from an array 
const random = (array) => {
    return array[Math.floor(Math.random() * (array.length))];
}

var inc = 0;
var out = 0;
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
var timer;

var anim = function () {
    inc++;
    if (inc % 7 === 0 && out < text.length) {
        document.getElementById('anim').appendChild(document.createTextNode(text[out]));
        out++;
    }
};

timer = setInterval(anim, 4);
document.getElementById('anim').innerHTML = '';

function reload() {
    window.location.href = window.location.href;
}



// We'll miss you Peter -David, Helen, Michelle
