// let x = "purvi";
// alert(x);

// let admin;
// let name;
// name = "phkjfh";

// admin = nam;
// alert( admin ); 

//datatypes
let n = 123;

// let age;
// alert(age); // undefinred

// alert(`result is ${1+2}`)

// alert(typeof "purvi")

// typeof "purvi"


// function myFunction() {
//   let text = " Press a button OK or CANCEL";
//   if (confirm(text) == true) {
//     text = "You pressed OK!";
//   } else {
//     text = "Its Fine..!";
//   }
//   document.getElementById("demo").innerHTML = text;
// }

// alert(Boolean(1)) // true

// let p = 1;
// p = -p;
// alert(p);

// alert(4 ** (1/2 ) ); // root

// alert('Glow' > 'Ytre')

// alert(null == undefined) //true
// ===        //false

// let test = "supercoder" ;

// alert(null ?? test )

// alert(1&&2)

// let user = {
//     name: "purvi" , 
//     year: 2001,
//     isAdmin : true
// };

// for (let key in user){
//         alert(key);
//         alert(user[key] );
// }

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// alert( multiplyNumeric(menu); );



// let wish = {
//   hi()
//   {
//     alert("hello..! ..shashank");
//   }
// }
// wish.hi();
// //constuctor
// function User(name){
//   this.name =  name;
//   this.isAdmin = true;
// }
// let user = new User("purvi");

// alert(user.name);
// alert(user.isAdmin);

//recursion 
//power

// function pow(x,n){
//     return (n==1) ? x : (x * pow(x, n-1) );
// }

// function Cnt(){
//     let c = 0;

//     return function(){
//         return c++;
//     }
// }

// let x = Cnt();

// alert( x() );
// alert( x() );

// let txt = "hello";

// function fun(x){
//     alert( `${txt}`);
// }

///////////////////////////////////////////

// var oh;
// oh = window.outerHeight;
// console.log("outer height:  "+oh);

//////////*** NEW FUNCTION SYNTAX */
// let sum = new Function( 'a', 'b' , 'return a+b ');
// alert( sum(2,4) );


//set - once
//clear - repeatedly

// function greet(name, ex){
//     console.log("hello "+ name +" "+ ex);
// }
// // setTimeout(greet,3000, "purvi" , "takecare");

// setInterval(greet, 2000, "pv", "gm");


//=================================================

// let nam = {
//     fname: "purvi",
//     lname: "vaghela"
// }

// let printname = function(){
//     console.log(this.fname + " " +this.lname);
// }
// printname.call(nam);


//-----------------

// class User{

//     constructor(name){
//         this.name = name;
//     }

//     sayHi(){
//         alert(this.name);
//     }

// }

// let user = new User("purvi");
// user.sayHi();
//=================================

// var person ={
//     nam: 'purvi',
//     age: 20,

//     get getName(){
//         return this.nam.toUpperCase();
//     }
// };

// console.log(person.getName);


//promise

// let p = new Promise((resolve, reject)=>  {
//     console.log("promise is pending");
//     setTimeout( () => {
//         console.log("promise fulfilled");
//         resolve(true)
//     }, 5000)
// })


//--------------------------------------

// try{
//     alert("start...");

//     alert("end..");
// }
// catch(error)
// {
//     alert("catch")
// }
//=============================================================

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://www.w3schools.com/js/js_async.asp',
// ];

// let req = urls.map(url =>fetch(url));

// Promise.all(requests)
//     .then(responses => responses.forEach(
//         response => alert( `${response.url}: ${response.status}`)
//     ));

//AWAIT

// async function f(){

//     let prom = new Promise((resolve, reject) => {
//         setTimeout( () =>resolve("done"), 1000 )
//     });
//     let ans = await promise;

//     alert(result);
// }
/////////////////////////////////////////////////////////////////


// function* numbersGen(){
//     // let i=0;

//     yield 1;
//     yield 2;
//     return 3;

//     // while(true){
//     //     yield i++;
//     // }
// }
// const gen = numbersGen();

// console.log(gen.next() );
// console.log(gen.next() );
// console.log(gen.next() );


// function* gen(){
//     yield 1;
//     yield 2;
// }
// let generator = gen();

// for(let val of generator){
//     alert(value);
// }


// alert(location.href);

// if(confirm("go to google?")){
//     location.href = "https://www.google.com/";
// }

// function count(){

//     for(let i=1;i<=5 ; i++){
//         alert("No: "+ i);
//     }
// }


// color.onclick = function(){
//     this.style.backgroundColor = 'blue';
// };


