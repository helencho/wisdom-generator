let peter = 'https://raw.githubusercontent.com/helencho/wisdom-generator/master/peter.json';
let backgrounds = 'https://raw.githubusercontent.com/helencho/wisdom-generator/master/backgrounds.json';

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
                    quotediv.innerText = random(quoteArray);
                })

        })
});

// randomly chooses an element from an array 
const random = (array) => {
    return array[Math.floor(Math.random() * (array.length))];
}
