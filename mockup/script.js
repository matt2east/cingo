var arr = [];
var currentTime = new Date();
var cls = document.getElementsByClassName('time');



function addChat() {
    var keysend = event.keyCode;
    var inputvalue = document.getElementById("inputchat").value;
    
    
    if (keysend == 13 && inputvalue != "") {
        arr.push(inputvalue);
        var addArr = arr;
        addArr = addArr.map(function(e) {
            return '<div class="arrow_box">' + e + '<div class="time"></div></div>'})
        for (var i in addArr) {
            
        }
        

        var div = document.getElementById("newchat");
        div.innerHTML = div.innerHTML + (addArr[i])
      for (var i = 0; i < cls.length; i++) 
    cls[i].innerHTML= (currentTime);
        document.getElementById("myform").reset(); 
        
     
         
    } 
    

}



for (var i = 0; i < cls.length; i++) 
    cls[i].innerHTML= (currentTime);

