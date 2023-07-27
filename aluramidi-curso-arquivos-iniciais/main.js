function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio);

   if(elemento && elemento.localName === 'audio'){
            elemento.play();
   }else{
    alert('elemento nao encontrado');
       console.log('n achado');
   }

}

const listaDeTecla = document.querySelectorAll('.tecla');

for (let index = 0; index < listaDeTecla.length; index++) {
 
    const tecla = listaDeTecla[index]
    const instrumento = tecla.classList[1];
    
    
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio)
    };

    

    tecla.onkeydown = function(evento){

        console.log(evento.code === 'Space' || evento.code === 'Enter');

      if(evento.code === 'Space' || evento.code === 'Enter'){
          tecla.classList.add('ativa');
      }
    }
        
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }


}