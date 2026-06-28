let hungry = 100
let happy_1 = 100
let washed = 100
let happy = 100
let sleep = 100
let isMany = true
let gameInterwal


const progres = document.getElementById('progress')
const progres_1 = document.getElementById('progress_1')
const progres_2 = document.getElementById('progress_2')
const progres_3 = document.getElementById('progress_3')

const Feed = document.getElementById('body_element_div_1_3_btn_2')
const Wash = document.getElementById('body_element_div_1_3_btn_2_1')
const Puttosleep = document.getElementById('body_element_div_1_3_btn_1')
const Play = document.getElementById('body_element_div_1_3_btn')

const tamagoji = document.getElementById('body_element_div_1_1_div')
const line = document.getElementById('body_element_div_1_1_p_2')
const btnRestart = document.getElementById('Restart')
const cirkl_header = document.getElementById('body_element_div_1_1_div')

function Udupdeit (){
    progres.style.width = hungry + '%';
    progres_1.style.width = washed + '%';
    progres_2.style.width = sleep + '%';
    progres_3.style.width = happy + '%';

    if(!isMany){
        tamagoji.className = "pet_Offended";
        line.textContent = "Питомец обиделся"
        btnRestart.classList.remove('hidden')
    } else if(hungry < 50 || happy < 50 || sleep < 50 || washed < 50 ) {
        tamagoji.className = "pet_kus";
        line.textContent = "Питомец наченает вас грызть"
    } else {
        tamagoji.className = "pet_normal";
        line.textContent = "Питомец вас любит"
    }
    
    if(!isMany){
        cirkl_header.style.backgroundColor = '#db0b0b';
    } else if(hungry < 50 || happy < 50 || sleep < 50 || washed < 50 ) {
       cirkl_header.style.backgroundColor = '#ffa600';
    } else {
        cirkl_header.style.backgroundColor = 'green'; 
    }

}
function togelButtons(disabled){
    Feed.disabled = disabled
    Wash.disabled = disabled
    Puttosleep.disabled = disabled
    Play.disabled = disabled
}
function gameTick() {
    if(!isMany) return;

    hungry = Math.max(0, hungry -3)
    washed = Math.max(0, washed -4)
    sleep = Math.max(0, sleep -6)
    happy = Math.max(0, happy -5)

    if (hungry === 0 || washed === 0 || sleep === 0 || happy === 0) {
        isMany = false
        clearInterval(gameInterwal)
    }
    Udupdeit();
}
function InitGame() {
    Udupdeit();
    gameInterwal = setInterval(gameTick, 1000)
}

btnRestart.addEventListener('click', () => {
    hungry = 100
    washed = 100
    happy = 100
    sleep = 100
    isMany = true
    btnRestart.classList.add('hidden')
    InitGame()
});

Play.addEventListener('click', () => {
    happy = Math.min(100, happy + 10)
    washed = Math.max(0, washed -5)
});
Wash.addEventListener('click', () => {
    washed = Math.min(100, washed + 10)
    hungry = Math.max(0, hungry -3)
    sleep = Math.max(0, sleep -3)
});

Puttosleep.addEventListener('click', () => {
    sleep = Math.min(100, sleep + 10)
    hungry = Math.max(0, hungry -3)
    happy = Math.max(0, happy -3)
});

Feed.addEventListener('click', () => {
    hungry = Math.min(100, hungry + 10)
    washed = Math.max(0, washed -5)
    happy = Math.max(0, happy -3)
});


InitGame()

