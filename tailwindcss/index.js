const html = document.documentElement;

const lightBtn = document.getElementById('lightBtn');
const darkBtn = document.getElementById('darkBtn');

lightBtn.addEventListener('click', () => {
    html.classList.remove('dark');
});

darkBtn.addEventListener('click', () => {
    html.classList.add('dark');
});