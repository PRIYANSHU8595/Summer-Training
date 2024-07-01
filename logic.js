window.addEventListener('load',bindEvent);
function bindEvent(){
  var buttons = document.getElementsByTagName('button');
for(let i=0;i<buttons.length;i++){
  var CurrentButton = buttons[i];
   CurrentButton.addEventListener('click',PrintXorO); // Event binding 
}
}
// maintain a  Counter to check if count goes >4 then clickgame over cond
var flag =true;
let count =0;
function PrintXorO(){
  if (this.innerText.trim().length==0){
 var buttonValue = flag?"X":"0";  
 this.innerText = buttonValue;   
 flag=!flag; 
 count++;
 if (count>=5){ 
  if (gameover()) {
   // console.log("HELLO WINNER");  
  // alert("HELLO WINNER");
  document.getElementById('output').innerText='Game Over';
   reset();
}
   if (count==9) reset();
 }
  }
  function gameover(){
         if (b1.innerText === b2.innerText && b1.innerText === b3.innerText) return true;
    else if (b4.innerText === b5.innerText && b4.innerText === b6.innerText) return true;
    else if (b7.innerText === b8.innerText && b7.innerText === b9.innerText) return true;
    else if (b1.innerText === b4.innerText && b1.innerText === b7.innerText) return true;
    else if (b2.innerText === b5.innerText && b2.innerText === b8.innerText) return true;
    else if (b3.innerText === b6.innerText && b3.innerText === b9.innerText) return true;
    else if (b1.innerText === b5.innerText && b1.innerText === b9.innerText) return true;
    else if (b3.innerText === b5.innerText && b3.innerText === b7.innerText) return true;
    else return false;
}
}
function reset() {
    var buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
}
