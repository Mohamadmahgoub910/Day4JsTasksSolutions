var myDate = new Date();
myDate.setMonth(myDate.getMonth() + 1);
var input = document.getElementById("cc");
var inpu2 = document.getElementById("dc");
var inpu3 = document.getElementById("delc");

var namec = document.getElementById("namec");

input.addEventListener("click",function(){
    document.cookie = "myCookie=" + namec + ";expires=" + myDate;
        alert(document.cookie);
        console.log(namec.value);
});


inpu2.addEventListener("click",function(){
    var newCookie = document.cookie;
    var cookieParts = newCookie.split("=");
    var cookieName = cookieParts[0];
    var cookieValue = cookieParts[1];
    alert(document.cookie);
    window.alert(cookieName);
    window.alert(cookieValue);
});

inpu3.addEventListener("click",function(){
    alert (document.cookie);      
    var y = (confirm("Delete cookie?")) ? "delete" : "keep";
    if (y=="delete") 
    {
        document.cookie = "myCookie=;expires=01-01-2021";
        message="after deleting, your cookie looks like this:";
        message+=document.cookie;
        alert(message);
    }
    else
    {
        message="after keeping ,your cookie looks like this:";
        message+=document.cookie;
        alert(message);
    }
});