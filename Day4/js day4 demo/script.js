// var arrNames = ["ahmed","menna"];
// var arrages = [25,36];
// var tbody = document.getElementsByTagName("tbody")[0];
// ///creation///////////
// for (var i = 0; i < arrNames.length; i++) {
//     var tr = document.createElement("tr");//<tr></tr>
//     tr.innerHTML ="<td>"+arrNames[i]+"</td><td>"+ arrages[i]+"</td>"
//    // console.log(tr);
//     tbody.append(tr);//append 
//     // tbody.innerHTML =tr;
    
// }
// var table = document.querySelector("table");
// table.style.display = "inline-block";
// console.log(table);
///////////////select element///////////
// console.log(tbody);
// tbody.innerHTML = "hamada";

 //<tr><td>ahmed</td><td>25</td></tr>


//  var tr = document.createElement("tr");//<tr></tr>
//  tr.innerHTML ="<td>"+arrNames[1]+"</td><td>"+ arrages[1]+"</td>"

 
// var tr = document.createElement("tr");//<tr></tr>
// tr.innerHTML ="<td>"+arrNames[0]+"</td><td>"+ arrages[0]+"</td>"

// var tr = document.createElement("tr");//<tr></tr>
//  tr.innerHTML ="<td>"+arrNames[0]+"</td><td>"+ arrages[0]+"</td>"
 
// var tr = document.createElement("tr");//<tr></tr>
// tr.innerHTML ="<td>"+arrNames[0]+"</td><td>"+ arrages[0]+"</td>"
/////////////////////////////////////////////


// console.log(div);
function test(e){
    console.log(e);

   // console.log(d);
    var div = document.querySelector("div");
    // div.toggleAttribute("class");
   div.style.backgroundColor = "red";
  var oldvalue = div.getAttribute("class");
var c = (oldvalue==="green")? "red" : "green";
   div.setAttribute("class",c);

}

//////////////////second way event////////////
//  var div = document.querySelector("div");
// //  div.onclick = function(){
// //      alert("hello");
// //  }//function body
// div.onclick = test;
//////////////////////////////////////
// var div = document.querySelector("div");
// div.addEventListener("click",function(e){
//     console.log(e);
//     console.log(this);
//  //  alert("hello");

// })//callback function functtion body
//div.addEventListener("click",test);
////////////////////////////////////////
// var btn = document.getElementById("mybtn");
// btn.addEventListener("click",function(){
//    var input= document.querySelector("input");
//    if(input.value!== ""){
//       // console.log(input.value);
//        var div = document.getElementById("mydiv");
//        div.style.backgroundColor = input.value;
//    }
//    else{
//        alert("please enter value");
//    }
//   // input.value = "asdwsfesdf"
// })
// var btn = document.getElementById("mybtn");
// btn.addEventListener("click",function(){
//     alert("hello");
// })
// function test(){
//     var img = document.getElementsByTagName("img")[0];

//     img.setAttribute("src","2.jpg");
// }

// setTimeout(function(){
//         console.log("hello");
// },5000)

// setInterval(function(){
//     console.log("hello");
// },1000)
// var s ; 
// var start = document.getElementById("start");
// var stop = document.getElementById("stop");

// start.addEventListener("click",function(){
//     s = setInterval(function(){
//     console.log("hello");
// },1000)
// })

// stop.addEventListener("click",function(){
//     clearInterval(s);
// })
var newPage;
function printw(){
  print();
}

function openWindow(){
     newPage = open("index2.html");
  }
  function closeWindow(){
      newPage.close();
  }