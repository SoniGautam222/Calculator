let val="";
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((buttons)=>{
    buttons.addEventListener('click', (e)=>{
        if(e.target.innerText == '='){
            val=eval(val);
            console.log(val);
            document.getElementsByClassName('display')[0].innerText=val;
        }
        else if(e.target.innerText=='AC'){
            val="";
            document.getElementsByClassName('display')[0].innerText=val;
        }
        else if(e.target.innerText=='+/-'){
            val="+";
            document.getElementsByClassName('display')[0].innerText=val;
        }
    
        else if(e.target.innerText=='%'){
            val=val/100;
            document.getElementsByClassName('display')[0].innerText=val;
        }
        else{
            console.log(e.target);
            val=val+e.target.innerText;
            document.getElementsByClassName('display')[0].innerText=val;
        }

      
    })
});

