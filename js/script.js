
function getPin(){
    const pin=Math.round(Math.random()*10000);
    const pinstring =pin+ ''
    if(pinstring.length==4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin() {
    const pin =getPin();
    document.getElementById('display-pin').value=pin
}
document.getElementById('key-pad').addEventListener('click',function(event){
    const number =event.target.innerText;
    const calcInput =document.getElementById('calc-input');
    if(isNaN(number)){
        if(number=='C'){
            calcInput.value=''
        }
    }
   else{
   
    const previousCale = calcInput.value
    const newcale =previousCale+number
    calcInput.value=newcale;
   }
})

function notifiPin(){
 const pin = document.getElementById('display-pin').value;
 const calc =document.getElementById('calc-input').value;
 const successMsg=document.getElementById('notify-success');
 const errorMsg=document.getElementById('notify-fail');
 if(pin==calc){
    
    successMsg.style.display='block'
    errorMsg.style.display='none'
 }
 else{
    
    errorMsg.style.display='block'
    successMsg.style.display='none'
 }
}