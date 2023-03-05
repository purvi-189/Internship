// window.open("https://www.google.com/");

// window.open( "https://www.google.com/",  'Week 2');


// let param = `scollbars= no , resizable=no, status= no, location= no, toolbar=no , menubar=no, width=0, height=0,
//             left= -1000 , top= -1000`;

// open('/', 'Document', param);


// let newWin = window.open("about:purvi", "hello", "width=500,height=300");

// // newWin.document.write("Hello, purvi!");

// newWin.document.write(
//     "<script> window.opener.document.body.innerHTML = 'Test' </script>"
// );


// let buffer = new ArrayBuffer(16);
// alert(buffer.byteLength);


//============= ENCODER

// alert(new TextEncoder().encode("purvi"));

// function show(input){
//     let file = input.files[0];

//     alert(`File name: ${file.name}`);
//     alert(`last modified: ${file.lastModified}`);

// }

//reading file

// function readFile(input){
//     let file = input.files[0];

//     let read = new FileReader();
//     read.readAsText(file);

//     read.onload = function(){
//         console.log(read.result);
//     };

//     read.onerror= function(){
//         console.log(read.error);
//     }
// }


//ABORT

// let contr = new AbortController();
// setTimeout( () => contr.abort(), 1000);

// try{
//     let resp = await 
// }

// SOCKET

// let socket = new WebSocket("wss://javascript.info/article/websocket/demo/hello");

// socket.onopen = function(e){
//     alert("OPEN connection estab");
//     alert("sending to server");
//     socket.send("my name is purvi");
// };

// socket.onmessage = function(event){
//     alert(`data received from server ${event.data}`);
// }

// socket.onclose = function(event){
//     if(event.wasClean){
//         alert(`CLOSE code=${event.code} reason = ${event.reason}`);
//     }

//     else{
//         alert("connection died");
//     }
// }
// socket.onerror= function(error){
//     alert("ERROR");
// }
//---------------------------

// console.log(document.cookie)  
// document.cookie = "name=purvi12345"
// document.cookie ="name=asdf123456"
// document.cookie = "name2 = 234ghjk"
// console.log(document.cookie)


//LOCAL STORAGE


// let key = prompt("enter key: ")
// let val = prompt("enter value: ")

// localStorage.setItem(key, val)
// console.log(`the value at ${key} is ${localStorage.getItem(key)}`)