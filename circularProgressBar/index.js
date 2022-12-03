let counter = 0;
setInterval(() => {
    const num = document.querySelector('.number');
    const numVal = Number(num.getAttribute('data-value'));
    if (counter !== numVal) {
        counter++;
        num.innerHTML = counter + "%";
    }
}, 20);