var principle=document.getElementById('principle');
var interest=document.getElementById('interest');
var year=document.getElementById('year');
var tprinciple=document.getElementById('t-principle');
var tinterest=document.getElementById('t-interest');
var tyear=document.getElementById('t-year');
var btn=document.getElementById('btn');
var err=document.getElementById('error');
var im=document.getElementById('img');
var calculated=document.getElementById('cal');

btn.addEventListener('click',function(){
im.style.display="block";
calculated.style.display="none";

setTimeout(()=>calculate(),3000)
});

function calculate(){
    console.log('lll',principle);
    if(principle.value=="" || interest.value=='' || year.value==""){
        setTimeout(()=>{ 
            err.style.display="none";
            im.style.display="none";},3000)
            err.style.display="block";
        
    }
    else{
        im.style.display="none"
        calculated.style.display="flex"
            tprinciple.value=parseInt(principle.value)+parseInt(interest.value)
    tinterest.value=parseInt(year.value)+parseInt(interest.value)
    tyear.value=parseInt(principle.value)+parseInt(interest.value)+parseInt(year.value);
    

    }
    
}

