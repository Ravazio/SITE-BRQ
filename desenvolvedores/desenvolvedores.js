$(document).ready(function(){
$('body').keyup(function(e){
  const KEY_LEFT  = 37;
  const KEY_RIGHT = 39;
  switch(e.keyCode){
    case KEY_RIGHT : {
      $('#proximo').click(); 
      break;
    }
    case KEY_LEFT : {
      $('#anterior').click();
      break;
    }
  }
});
});