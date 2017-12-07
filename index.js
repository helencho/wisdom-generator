let peter = 'https://raw.githubusercontent.com/helencho/wisdom-generator/master/peter.json';
let backgrounds = ''

document.addEventListener('DOMContentLoaded', () => {
    fetch(peter)
        .then((res) => {
            return res.json();
        })
        .then((quoteArray) => {
            let quotediv = document.querySelector('#quote');
            quotediv.innerText = randomQuote(quoteArray);
        })
});


const randomQuote = (instructor) => {
    return instructor[Math.floor(Math.random() * (instructor.length - 1 + 1))];
}

const randomBackground = () => {
    // need a random background json file 
}