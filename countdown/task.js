
const timer = function(){
    const output = document.getElementById('timer');
    output.textContent -= 1;
    if (output.textContent == 0){
        alert('Вы выйграли');
        clearInterval(inerval)

    }
}
const inerval = setInterval(timer, 1000);