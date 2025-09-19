// // Lexical Scoping and Closure

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <button id="orange">Orange</button>
//     <button id="green">Green</button> 
// </body>
// <script>
// //    function init() {
// //    let name = "Mozilla"; 
// //   function displayName() { 
// //     console.log(name); 
// //   }
// //   displayName();
// // }

// // function ps(){
// //     let username="hfhd"
// //     console.log(secret);
    
// //     function inner(){
// //         let secret="fdfsfs"
// //         console.log(username); 
// //     }
// //     function innerTwo(){
// //         console.log(username);
// //         console.log(secret);
         
// //     }
// //     inner()
// //     innerTwo()
// // }
// // ps()
// // console.log(username);

// // init();

// // document.getElementById('orange').onclick=function(){
// //     document.body.style.backgroundColor='orange'
// // }
// // document.getElementById('green').onclick=function(){
// //     document.body.style.backgroundColor='green'

// // }
// function clickHandler(color){

//     return function() {document.body.style.backgroundColor=`${color}` }
// }
// document.getElementById('orange').onclick=clickHandler("orange")
// document.getElementById('green').onclick=clickHandler("green")
// </script>
// // </html>