let bigBottleWater = document.getElementById('bigBottleWater');
let remain = document.querySelector(".rest")
let smallBottles = document.querySelectorAll('.water-bottle');

function bigBottleWater0(){
    remain.classList.toggle('restHide');
    bigBottleWater.className = "water big-0";
    bigBottleWater.innerText = "0%";
}

function bigBottleWater1(){
    remain.classList.remove('restHide');
    bigBottleWater.className = "water big-1";
    bigBottleWater.innerText = "12.5%";
}
function bigBottleWater2(){
    remain.classList.remove('restHide');
    bigBottleWater.className = "water big-2";
    bigBottleWater.innerText = "25%";
}
function bigBottleWater3(){
    remain.classList.remove('restHide');
    bigBottleWater.className = "water big-3";
    bigBottleWater.innerText = "37.5%";
}
function bigBottleWater4(){
    remain.classList.remove('restHide');
    bigBottleWater.className = "water big-4";
    bigBottleWater.innerText = "50%";
}
function bigBottleWater5(){
    remain.classList.remove('restHide');
    bigBottleWater.className = "water big-5";
    bigBottleWater.innerText = "62.5%";
}
function bigBottleWater6(){
    remain.classList.remove('restHide');
    bigBottleWater.className = "water big-6";
    bigBottleWater.innerText = "75%";
}
function bigBottleWater7(){
    remain.classList.remove('restHide');
    bigBottleWater.className = "water big-7";
    bigBottleWater.innerText = "87.5%";
}
function bigBottleWater8(){
    remain.classList.add('restHide');
    bigBottleWater.className = "water big-8";
    
    bigBottleWater.innerText = "100%";
}


function countFullBottles(){
    let count = 0;
    smallBottles.forEach(bottle=>{
        if (bottle.classList.contains('full')){
            count+= 1;
        }
    })
    return count;
}


smallBottles.forEach((bottle, i)=> {
    bottle.onclick = function(){
        if(!smallBottles[i+1]){
            for(let j=0; j< smallBottles.length; j++){
                if (j < i){
                    smallBottles[j].classList.add('full');
                }
            }
            bottle.classList.toggle('full');
        }else
        if(smallBottles[i+1].classList.contains('full')){
            for(let j=0; j< smallBottles.length; j++){
                if (j > i){
                    smallBottles[j].classList.remove('full');
                }
            }
        }else {
            for(let j=0; j< smallBottles.length; j++){
                if (j < i){
                    smallBottles[j].classList.add('full');
                }
            }
            bottle.classList.toggle('full')
        }
        fillBigBottle();
    }
})

function fillBigBottle(){
    switch (countFullBottles()) {
        case 1:
            bigBottleWater1();
            remain.firstElementChild.innerText = "1,75L";
            break;
        case 2:
            bigBottleWater2();
            remain.firstElementChild.innerText = "1,50L";
            break;
        case 3:
            bigBottleWater3();
            remain.firstElementChild.innerText = "1,25L";
            break;
        case 4:
            bigBottleWater4();
            remain.firstElementChild.innerText = "1L";
            break;
        case 5:
            bigBottleWater5();
            remain.firstElementChild.innerText = "0.75L";
            break;
        case 6:
            bigBottleWater6();
            remain.firstElementChild.innerText = "0.50L";
            break;
            case 7:
            bigBottleWater7();
            remain.firstElementChild.innerText = "0.25L";
            break;
        case 8:
            bigBottleWater8();
            remain.firstElementChild.innerText = "0L";
            break;
        default:
            bigBottleWater0()
            remain.firstElementChild.innerText = "2L";
            break;
    }
}
