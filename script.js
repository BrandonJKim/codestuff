const button = document.getElementById('colorBtn');
const title = document.getElementById('main-title');

button.addEventListener('click', () => {
    title.style.color = 'blue';
    alert('The color has changed!');
});
