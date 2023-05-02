let buttonAdd = document.querySelector('.btn-add');
let buttonReset = document.querySelector('.btn-reset');
let counterText = document.querySelector('.counter');

let counter = 0;


buttonAdd.addEventListener('click', function() {
    counter = counter + 1;
    
    counterText.innerText = counter;
});


buttonReset.addEventListener('click', function() {
    counter = 0;
    
    counterText.innerText = counter;
им });

