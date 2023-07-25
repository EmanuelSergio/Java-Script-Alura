function tocaSom(idElementoAudio ){

    document.querySelector(idElementoAudio).play();


};

document.querySelectorAll('.tecla')

const listaDeTecla = document.querySelectorAll('.tecla');
let contador = 0;


while(contador < listaDeTecla.length){
    
    const instrumento = listaDeTecla[contador].classList[1];
    
    console.log(instrumento);

    listaDeTecla[contador].onclick = function () {
        tocaSom('#som_tecla_pom')
    };

    
    contador++;

    console.log(contador);




}