let minus = window.document.querySelector('.minus');
minus.addEventListener('click', (event) => {
    let current_elt = window.document.querySelector('#score');
    let current_num = parseInt(current_elt.textContent);
    current_elt.textContent = Math.max(-100, current_num - 1);

});

let plus = window.document.querySelector('.plus');
plus.addEventListener('click', (event) => {
    let current_elt = window.document.querySelector('#score');
    let current_num = parseInt(current_elt.textContent);
    current_elt.textContent = Math.min(100, current_num + 1);
});
