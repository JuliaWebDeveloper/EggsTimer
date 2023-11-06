gsap.to(".eggOne",{rotation: 360, duration:6, repeat:-1, ease: "none"})  
gsap.to(".eggTwo",{rotation: 360, duration:6, repeat:-1, ease: "none"})  
gsap.to(".eggThree",{rotation: 360, duration:6, repeat:-1, ease: "none"})    


const typeOne = document.querySelector(".typeOne"); //Определение "Всмятку"
const eggOne = document.querySelector(".eggOne"); //Определение "Всмятку" - картинка

const typeTwo = document.querySelector(".typeTwo"); //Определение "В мешочек"
const eggTwo = document.querySelector(".eggTwo"); //Определение "В мешочек" - картинка

const typeThree = document.querySelector(".typeThree"); //Определение "Вкрутую"
const eggThree = document.querySelector(".eggThree"); //Определение "Вкрутую" - картинка

//Задаем Объект с информацией по времени варки
function Countdown (minutes, seconds) {
    this.minutes=minutes;
    this.seconds=seconds;
    }
let one = new Countdown("5","40");
let two = new Countdown("6","50");
let three = new Countdown("11","30");


const button = document.querySelector("#btn"); //Определяем кнопку "Старт"
let countdown = document.querySelector("#timer");  //Определяем "Таймер"
let i; //Переменная для определения общего кол-ва секунд варки

//Задаем переменную и функцию остановки таймера
let timerId;

function stopTimer() {
    clearTimeout(timerId);
    document.querySelector("#player").pause(); //Музыка на паузе
}   



// При выборе "ВСМЯТКУ":
// элемент становится зеленым, шрифт белым, появляется картинка, появляется таймер со временем. 
// Остальные элементы - белые
typeOne.addEventListener("click", showOne);

function showOne() {
    typeOne.style.background="green";
    typeOne.style.color="white";
    typeTwo.style.background="white";
    typeTwo.style.color="black";
    typeThree.style.background="white";
    typeThree.style.color="black";
    
    eggOne.style.display="block";
    eggTwo.style.display="none";
    eggThree.style.display="none";

    countdown.textContent= `${one.minutes}:${one.seconds}`; //Отражение значения таймера
    i =  Number(`${one.minutes}`)*60 +Number(`${one.seconds}`); //Общее кол-во секунд варки
    stopTimer();
}  

// При выборе "В мешочек":
// элемент становится зеленым, шрифт белым, появляется картинка, появляется таймер со временем. 
// Остальные элементы - белые
typeTwo.addEventListener("click", showTwo);

function showTwo() {
    typeOne.style.background="white";
    typeOne.style.color="black";
    typeTwo.style.background="green";
    typeTwo.style.color="white";
    typeThree.style.background="white";
    typeThree.style.color="black";

    eggOne.style.display="none";
    eggTwo.style.display="block";
    eggThree.style.display="none";

    countdown.textContent = `${two.minutes}:${two.seconds}`; //Отражение значения таймера
    i =  Number(`${two.minutes}`)*60 +Number(`${two.seconds}`); //Общее кол-во секунд варки
    stopTimer();
} 

// При выборе "Вкрутую":
// элемент становится зеленым, шрифт белым, появляется картинка, появляется таймер со временем. 
// Остальные элементы - белые
typeThree.addEventListener("click", showThree);

function showThree() {
    typeOne.style.background="white";
    typeOne.style.color="black";
    typeTwo.style.background="white";
    typeTwo.style.color="black";
    typeThree.style.background="green";
    typeThree.style.color="white";

    eggOne.style.display="none";
    eggTwo.style.display="none";
    eggThree.style.display="block";

    countdown.textContent= `${three.minutes}:${three.seconds}`; //Отражение значения таймера
    i =  Number(`${three.minutes}`)*60 +Number(`${three.seconds}`); //Общее кол-во секунд варки
    stopTimer();
}   

/////////Запуск таймера/////////


//При нажатии "Старт" запускается таймер

button.addEventListener("click", calculateTime);
function calculateTime() {
    document.querySelector("#player").play();//Запускается музыка
    timerId = setTimeout(calculateTime, 1000);
    //При невыборе типа варки
    if (i == undefined) {
        Swal.fire(
            'Выберите тип варки'
          )
        stopTimer();
        countdown.textContent =``;
    }
    //В остальных случаях
    else if (i !== undefined) {  
      
    let minutes = Math.floor(i/60); //перевод в минуты
    let seconds = i%60; //остаток секунд
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    countdown.textContent = `${minutes}:${seconds}`;
    i--;
    if (i < 0) {
        stopTimer();
        i = 0;
    }  
    }
}


