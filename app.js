var amount=document.getElementById('amount');
var type=document.getElementById('type');
var type2=document.getElementById('type2');
var button=document.getElementById('calc');


button.addEventListener('click',calculate);

function calculate(currencies,result,apple,empty){
     currencies=['usd','sterling pound','euro','j yen','sRand']
     if(type.value=='usd' && type2.value=='sterling pound'){
          result=(amount.value)/50
     }
     else if(type.value=='usd' && type2.value=='euro') {
          result=(amount.value)/20
     }
     else if(type.value=='usd' && type2.value=='j yen') {
          result=(amount.value)/12
     }
     else if(type.value=='usd' && type2.value=='sRand') {
          result=(amount.value)/7
     }
     else if(type.value=='sterling pound' && type2.value=='usd') {
          result=(amount.value)*50
     }
     else if(type.value=='sterling pound' && type2.value=='euro') {
          result=(amount.value)*10
     }
     else if(type.value=='sterling pound' && type2.value=='j yen') {
          result=(amount.value)*15
     }
     else if(type.value=='sterling pound' && type2.value=='sRand') {
          result=(amount.value)*50
     }
     else if(type.value=='euro' && type2.value=='usd') {
          result=(amount.value)*20
     }
     else if(type.value=='euro' && type2.value=='sterling pound') {
          result=(amount.value)*5
     }
     else if(type.value=='euro' && type2.value=='j yen') {
          result=(amount.value)*23
     }
     else if(type.value=='euro' && type2.value=='sRand') {
          result=(amount.value)*33
     }

     if(amount.value=='' && type.value=='' && type2.value=='' ){

          empty='Please key in some values ! ! !'
     }else{
          apple=`You have ${result} ${type2.value}`;
     }
document.querySelector('.result').innerHTML=apple
     
    
}






