const displayOne = document.querySelector('.display_1');
const displayTwo = document.querySelector('.display_2');
const tempResult = document.querySelector('.temp_display');

const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');

const Equalsign = document.querySelector('.equal');
const Allclear = document.querySelector('.all_clear');
const last_clear= document.querySelector('.last_clear');
const dot = document.querySelector('.dot');


let dis1Var = '';
let dis2Var = '';
let lastOperation = '';
let Havedot =false;

number.forEach(num =>{
    num.addEventListener("click" , (e) =>{
        if(e.target.innerText === '.' && !Havedot){
           Havedot = true;
        }else if(e.target.innerText === '.' && Havedot){
            return;
        }
           dis2Var += e.target.innerText ;
           displayTwo.innerText = dis2Var;


    })
});

operation.forEach(operationSign => {
     operationSign.addEventListener('click' ,(e) =>{
         if(!displayTwo) return;

         const operationName = e.target.innerText;
        if(dis1Var && dis2Var && lastOperation){
            mathoperation();
        }else{
            result = parseFloat(dis2Var);

        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
         
     })
});

function clearVar(name = " "){
    dis1Var += dis2Var+ " " + name+ ' ';
    displayOne.innerText = dis1Var;
    displayTwo.innerText = ' ';
    dis2Var = ' ';
    tempResult.innerText = result;
};

function mathoperation(){
  if(lastOperation === "X"){
      result = parseFloat(result) *  parseFloat(dis2Var);
  }else if(lastOperation === "+"){
      result = parseFloat(result) + parseFloat(dis2Var);
  }
  else if(lastOperation === "-"){
    result = parseFloat(result) - parseFloat(dis2Var);
}else if(lastOperation === "/"){
    result = parseFloat(result) / parseFloat(dis2Var);
}
else if(lastOperation === "%"){
    result = parseFloat(result) % parseFloat(dis2Var);
}

};

Equalsign.addEventListener('click', (e) =>{
    if( !dis1Var || !dis2Var) return;
    Havedot= false;
    mathoperation();
    clearVar();
    displayTwo.innerText = result;
    tempResult.innerText = ' ';
    dis2Var = result;
    displayOne.innerText = '';
    dis1Var = '';
})

Allclear.addEventListener('click', (e) =>{
    displayOne.innerText = '0';
    displayTwo.innerText =  '0';
    dis2Var = '';
    dis1Var = '';
    tempResult.innerText = ' 0';
});

last_clear.addEventListener('click', (e)=>{
    displayTwo.innerText =  '';
    dis2Var = '';
})