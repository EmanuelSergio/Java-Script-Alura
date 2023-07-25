function tocaSom(idElementoAudio ){
    document.querySelector(idElementoAudio).play();
};

const listaDeTecla = document.querySelectorAll('.tecla');

for (let index = 0; index < listaDeTecla.length; index++) {
 
    const tecla = listaDeTecla[index]
    const instrumento = tecla.classList[1];
    
    
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    listaDeTecla[index].onclick = function () {
        tocaSom(idAudio)
    };

}