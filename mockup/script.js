var arr = []

function addChat() {
    var keysend = event.keyCode;
    var inputvalue = document.getElementById("inputchat").value;
    
    
    if (keysend == 13 && inputvalue != "") {
        arr.push(inputvalue);
        var addArr = arr;

        addArr = addArr.map(function(e) {
            return '<div class="arrow_box">' + e + '</div>'})
//        alert("array items are " + addArr);
        for (var i in addArr) {

}
        
// for each item in addArr create a styled div with the message

//        var newmessage = document.createElement("div");
//        var messagetext = document.createTextNode(addArr[i]);
//        newmessage.appendChild(messagetext);
        var div = document.getElementById("newchat");
        div.innerHTML = div.innerHTML + (addArr[i])
//        var styling = document.getElementById("newchat");
//        styling.className += " arrow_box";    
//    document.getElementById("inputchat").value = "";
        document.getElementById("myform").reset();    
         
    } 
    

}

var div = document.getElementById('divID');

div.innerHTML = div.innerHTML + 'Extra stuff';