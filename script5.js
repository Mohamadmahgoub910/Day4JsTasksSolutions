// history.back;
// history.forward;
// history.length;
// history.go(-2);
// objectlocation
// location
// set 
//document.cookie ="fname=mohamad;age=25"
// function test (){
//     return function (){
//         console.log("hello");
//     }
// }
// var x = test();
// x();


// function addCounter(){
//     var counter = 0;
//     return function(){
//         counter++;
//         return counter;
//     }
// }
// var x = addCounter();
// console.log(x()); // 1
// console.log(x()); // 2
// console.log(x()); // 3

// var y = addCounter();
// console.log(y());  //4

// Advanced JS 
// var person = {
//     name:"mohamad",
//     age : 25,
//     Print:function(){
//         console.log(this.name , this.age);
//     }
// }
// console.log(person.age);
// person.age=30;
// person.Print();
// // deep copy
// var p2 = {};
// p2.name = person.name;
// p2.age =person.age;
// p2.Print = person.Print;
// ///////////////////////////////
// storing data in server side 
// Link API 
// //////////////////////////////
// ajax call/request
// var xhr = new XMLHttpRequest();
// // console.log(xhr);
// var userarr;
// xhr.open("get","http://jsonplaceholder.typicode.com/users");
// xhr.send();
// xhr.addEventListener("readystatechange",function(){
//     if (xhr.readyState===4){
//         if (xhr.status==200){
//             // console.log(xhr.response);
//             var userarr =JSON.parse(xhr.response);
//             // console.log(userarr[3].name);
//             var table = document.getElementById("mytable");
//             for(var i=0; i<userarr.length ;i++){
//             var tr =document.createElement("tr");
//             tr.innerHTML="<td>" + userarr[i].id +"</td><td>"+userarr[i].name+"</td>";
//             }
//         }
        
//     }
// });

// var xhr = new XMLHttpRequest();

// xhr.open("get", "https://jsonplaceholder.typicode.com/users");
// xhr.send();
// xhr.addEventListener("readystatechange", function () {

//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {

//         var usersarr = JSON.parse(xhr.response)//json object
//             var table = document.getElementById("mytable");
//             for (var i = 0; i < usersarr.length; i++) {

//                 var tr = document.createElement("tr");
//                 tr.innerHTML = "<td>" + usersarr[i].id + "</td><td>" + usersarr[i].name + "</td>";
//                 table.append(tr);
//             }
//             // console.log(usersarr);
//         }
//     }
// })

var xhr = new XMLHttpRequest();

xhr.open("get", "http://jsonplaceholder.typicode.com/posts");
xhr.send();
xhr.addEventListener("readystatechange", function () {

    if (xhr.readyState === 4) {
        if (xhr.status === 200) {

            var usersarr = JSON.parse(xhr.response);
            var table = document.getElementById("tbody");
            for (var i = 0; i < usersarr.length; i++) {
                var tr = document.createElement("tr");
                tr.innerHTML = "<td>" + usersarr[i].id + "</td><td>" + usersarr[i].title + "</td>";
                table.append(tr);
            }
        }
    }
});

// 