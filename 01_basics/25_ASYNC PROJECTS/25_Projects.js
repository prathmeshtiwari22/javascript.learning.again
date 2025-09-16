/*
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${e.key===" " ? 'Space':e.key}</td>
      <td>${e.keyCode}</td> 
      <td>${e.code}</td>
    </tr>
    
  </table>
    </div>
  `;
});

// Generate a Random color
const randomColor = function(){
    const hex= "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}
let intervalb
let changec = function(){
    if(!intervalb){
         intervalb=setInterval(changebg,1000)
    }
   function changebg(){
     document.body.style.backgroundColor=randomColor()
   }
}
let stopc=function(){
    clearInterval(intervalb);
    intervalb=null
};

document.querySelector('#start').addEventListener('click',changec);
document.querySelector('#stop').addEventListener('click',stopc)
*/