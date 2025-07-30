let display = document.querySelector('#display')
let buttons = Array.from(document.getElementsByClassName('button'))

buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText=''
                break;
            case '←':
                if(display.innerText){
                    display.innerText=display.innerText.slice(0,-1)
                }       
                break;
            case '=':
                try{
                    display.innerText=eval(display.innerText)
                }catch{
                    display.innerText='ERROR!'
                }
                break;
            default:
                display.innerText += e.target.innerText
        }
    })
})

document.addEventListener('keydown', (e) => {
  let key = e.key;

  switch (key) {
    case 'Enter':
      try {
        display.innerText = eval(display.innerText);
      } catch {
        display.innerText = 'ERROR!';
      }
      break;
    case 'Backspace':
      if (display.innerText) {
        display.innerText = display.innerText.slice(0, -1);
      }
      break;
    case 'Escape':
      display.innerText = '';
      break;
    default:
      if (/[\d\+\-\*\/\.]/.test(key)) {
        display.innerText += key;
      }
  }
});

    


