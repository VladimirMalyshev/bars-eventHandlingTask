
document.querySelectorAll('.button').forEach(it => it.addEventListener('click', (event) => {
    console.log(it.textContent);
}));

document.getElementById('colorButton').addEventListener('click', () => {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

document.getElementById('itemList').addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        console.log(event.target.textContent);
    }
});

const secretCode = 'сессия';
let inputSequence = '';

document.addEventListener('keydown', (event) => {
    inputSequence += event.key;
    if (inputSequence.length > secretCode.length) {
        inputSequence = inputSequence.slice(-secretCode.length);
    }
    if (inputSequence === secretCode) {
        document.getElementById('secretMessage').classList.remove('hidden');
    }
});