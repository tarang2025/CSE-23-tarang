// document.writeIn("hello");

function result(){
// take user input and dispaly in h2 heading
    let inputData=document.getElementById("inputText").value;
  document.getElementById('text').textContent=inputData;
    
// valid age for vote casting!....
if(inputData>=18){
    alert("Valid Data");
}
else{
    alert("not valid");
}
//change color of heading on click
    let changeColor=document.getElementById('text');
    changeColor.style.color="red";


    let bodyColor=document.getElementsByTagName('body')[0];
    bodyColor.style.backgroundColor="blue";
}