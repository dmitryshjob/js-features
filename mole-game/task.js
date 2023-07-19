let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

for (let click = 1; click < 10; click++) {

    getHole = index => document.getElementById(`hole${index}`);

    let hole = getHole(click);

    hole.onclick = () => {
        if (hole.className.includes("hole_has-mole") == true){
            dead.textContent++;
            if (dead.textContent >= 10){
                alert('Победа');
                stopGame();
            }  
        } else {
            lost.textContent++;
            if (lost.textContent >= 5){
                alert('Проигрыш');
                stopGame();
            }
        } 
    }

}

stopGame = () => {
    dead.textContent = 0;
    lost.textContent = 0;
}