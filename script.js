'use strict';

// Task1
document.querySelector('.open').addEventListener('click', () => {
    document.querySelector('.pop-up').style.display = 'block';
});

document.querySelector('.open').addEventListener('click', () => {
    document.querySelector('.pop-up').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.pop-up').style.display = 'none';
});

document.querySelector('.save').addEventListener('click', () => {
    document.querySelector('.pop-up').style.display = 'block';
});

// Task 2
const divs = document.querySelectorAll('.v-row-item .ui-icon-check');
document.querySelector('.out-divs').textContent = `Всего ${divs.length} элемента`;

// Task 3 

divs.forEach((item) => {
    if (item.classList.contains('ui-icon-check') && item.tagName === 'SPAN' && item.dataset.id === "20") {
        item.classList.remove('ui-icon-check');
    }
})


