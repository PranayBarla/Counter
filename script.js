

const increaseButtonEl= document.querySelector('.counter__button--increase');
const counterValueEl = document.querySelector('.counter__value');
const decreaseButtonEl= document.querySelector('.counter__button--decrease');
const resetButtonEl = document.querySelector('.counter__reset-button');
const counterTitle = document.querySelector('.counter__title');

increaseButtonEl.addEventListener('click', ()=>{
    
    const cur = counterValueEl.textContent; //hook current_value
    const curAsNum = +cur;// change string to number
    const newVal = curAsNum+1; // increment the number by 1
    counterValueEl.textContent = newVal; //change the counter value
    if(newVal>5){
        counterTitle.textContent = 'Limit Exceeded';
        counterValueEl.textContent = 5;
    }
    console.log(cur);
});

decreaseButtonEl.addEventListener('click',()=>{    
    const cur = counterValueEl.textContent; //hook current_value
    if(cur > 0 ){
        const curAsNum = +cur;// change string to number
        const newVal = curAsNum-1; // decrement the number by 1
        counterValueEl.textContent = newVal; //change the counter value
    }
})

resetButtonEl.addEventListener('click', ()=>{
    const cur = counterValueEl.textContent;
    if(cur>0){
        counterValueEl.textContent = 0;
        counterTitle.textContent = 'Fancy Counter';
        console.log(cur);
    }
});

