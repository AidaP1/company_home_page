const bookButton = document.getElementById('book-button');

function turnBlack () {
    bookButton.style.backgroundColor = 'black'
}
function turnRed () {
    bookButton.style.backgroundColor = '#9d0a0e'
}


bookButton.addEventListener('mouseenter',turnBlack);
bookButton.addEventListener('mouseleave',turnRed);