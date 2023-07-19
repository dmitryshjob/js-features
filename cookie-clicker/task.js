const cookie = document.getElementById('cookie');
const clickeCounter = document.getElementById('clicker__counter');

cookie.onclick = () => {
    let click = clickeCounter.textContent++;
    if (click % 2 == 0){
        cookie.width = 150;
    }else {
        cookie.width = 200;
    }
    if (click % 2 == 0){
        cookie.height = 150;
    }else {
        cookie.height = 200;
    }
}

