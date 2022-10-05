const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeBts = document.querySelector('.time-list');
const timer = document.querySelector('.time');
const board = document.querySelector('.board');
const colors = ['#186950', '#a4c3dc', '#799b3e', '#ffb7c8', '#d84a19', '#face8b', '#43c188', '#c62a56', '#7b3e84', '#93b123'];
let time = 0;
let score = 0;

startBtn.addEventListener('click', event => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeBts.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});
