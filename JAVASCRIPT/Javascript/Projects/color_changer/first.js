const buttons= document.querySelectorAll('.button');
const body= document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        console.log(e.target,'e');
      if(e.target.id === 'grey'){
        body.style.backgroundColor= e.target.id
      }
      if(e.target.id === 'black'){
        body.style.backgroundColor= e.target.id
      }
      if(e.target.id === 'white'){
        body.style.backgroundColor= e.target.id
      }
      if(e.target.id === 'yellow'){
        body.style.backgroundColor= e.target.id
      }
      if(e.target.id === 'red'){
        body.style.backgroundColor= e.target.id
      }


    })
})