let pass = document.querySelector('h2 span');
let range = document.querySelector('.range');
let btn = document.getElementById('btn');
let container = document.getElementById('container');
let passDiv = document.getElementById('pass');
let div = document.getElementById('pass-container');
let checkNumbers = document.getElementById('nums');
let checksSymobls = document.getElementById('syms');
let copyBtn = document.getElementById('copy');
let copied = document.querySelector('.copied')

pass.innerHTML = range.value
range.oninput = function(){
    pass.innerHTML = range.value
}

btn.addEventListener('click',()=>{
    let arr = "azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN"
    let count = range.value ;
    let empty = "";
    div.style.display = 'flex';

    if (checkNumbers.checked) {
      arr += "1234567890";
      }

      if (checksSymobls.checked) {
        arr += "$%*!?@#&£ù";
        }
    
    for(let i = 0 ; i < count ; i++){
      
          empty += arr[Math.floor(Math.random()* arr.length)];
        
          }
      
    passDiv.innerHTML = empty
});

function copyText() {
  navigator.clipboard.writeText(passDiv.innerText).then(function() {
    
    copied.style.display = 'block';
    setInterval(() => {
      copied.style.display = 'none';
      
    }, 2500);
  }, function(err) {
    alert("فشل النسخ");
  });
}

