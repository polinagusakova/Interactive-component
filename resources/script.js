/*Collecting items from form */
let ratings = document.getElementsByClassName('star');


for (let i = 0; i < ratings.length; i++) {
    
    /* When mouse goes over change color of rates in forms to white*/
    ratings[i].addEventListener('mouseover', () => {
        let cmpSt = getComputedStyle(ratings[i]).backgroundColor;
        if (cmpSt === 'rgb(37, 45, 55)') {
            ratings[i].style.backgroundColor = 'hsl(0, 0%, 100%)';
            ratings[i].style.color = 'hsl(0, 100%, 0%)';
        }
    }); 

    /* When mouse goes out change color of rates in forms back from white*/
    ratings[i].addEventListener('mouseout', () => {
        let cmpSt = getComputedStyle(ratings[i]).backgroundColor;
        if (cmpSt === 'rgb(255, 255, 255)') {
            ratings[i].style.backgroundColor = 'hsl(213, 19%, 18%)';
            ratings[i].style.color = 'hsl(217, 12%, 63%)';
        }
    }); 

    /* When mouse clicked change color of rates to orange and back */
    ratings[i].addEventListener('click', () => {        
        let cmpSt = getComputedStyle(ratings[i]).backgroundColor;
        if (cmpSt === 'rgb(255, 255, 255)') {
            ratings[i].style.backgroundColor = 'hsl(25, 97%, 53%)';
            ratings[i].style.color = 'hsl(216, 12%, 8%)';
        } else {            
            ratings[i].style.backgroundColor = 'hsl(213, 19%, 18%)';
            ratings[i].style.color = 'hsl(217, 12%, 63%)';
        }
    });     
}

let rateForm = document.getElementById("ratings");

/* Event listener to submitting form */
rateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let one = document.getElementById("one");
    let two = document.getElementById("two");
    let three = document.getElementById("three");
    let four = document.getElementById("four");
    let five = document.getElementById("five");

    let checkOne = getComputedStyle(one).backgroundColor;
    let checkTwo = getComputedStyle(two).backgroundColor;
    let checkThree = getComputedStyle(three).backgroundColor;
    let checkFour = getComputedStyle(four).backgroundColor;
    let checkFive = getComputedStyle(five).backgroundColor;

    let alert = document.getElementById('alert');
    let total = document.getElementById('total');

    let container = document.getElementById('container');
    let thank = document.getElementById('thank');
    
    /* Check all items for validation and after change main display */
    if (checkOne === 'rgb(251, 116, 19)' && checkTwo != 'rgb(251, 116, 19)' && checkThree != 'rgb(251, 116, 19)' && checkFour != 'rgb(251, 116, 19)' && checkFive != 'rgb(251, 116, 19)') {
        alert.style.display = 'none';
        container.style.display = 'none';
        thank.style.display = 'flex';
        total.innerHTML = `${one.innerHTML}`;
    } else if (checkOne != 'rgb(251, 116, 19)' && checkTwo === 'rgb(251, 116, 19)' && checkThree != 'rgb(251, 116, 19)' && checkFour != 'rgb(251, 116, 19)' && checkFive != 'rgb(251, 116, 19)') {
        alert.style.display = 'none';
        container.style.display = 'none';
        thank.style.display = 'flex';
        total.innerHTML = `${two.innerHTML}`;
    } else if (checkOne != 'rgb(251, 116, 19)' && checkTwo != 'rgb(251, 116, 19)' && checkThree === 'rgb(251, 116, 19)' && checkFour != 'rgb(251, 116, 19)' && checkFive != 'rgb(251, 116, 19)')  {
        alert.style.display = 'none';
        container.style.display = 'none';
        thank.style.display = 'flex';
        total.innerHTML = `${three.innerHTML}`;
    } else if ((checkOne != 'rgb(251, 116, 19)' && checkTwo != 'rgb(251, 116, 19)' && checkThree != 'rgb(251, 116, 19)' && checkFour === 'rgb(251, 116, 19)' && checkFive != 'rgb(251, 116, 19)') ) {
        alert.style.display = 'none';
        container.style.display = 'none';
        thank.style.display = 'flex';
        total.innerHTML = `${four.innerHTML}`;
    } else if (checkOne != 'rgb(251, 116, 19)' && checkTwo != 'rgb(251, 116, 19)' && checkThree != 'rgb(251, 116, 19)' && checkFour != 'rgb(251, 116, 19)' && checkFive === 'rgb(251, 116, 19)')  {
        alert.style.display = 'none';
        container.style.display = 'none';
        thank.style.display = 'flex';
        total.innerHTML = `${five.innerHTML}`;
    } else {
        alert.style.display = 'block'; /* Create alert to choosing only one rate */
    } 
    
})
