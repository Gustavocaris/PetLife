var elementosDuvidas = document.querySelectorAll('.duvida') 

elementosDuvidas.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

//function nome(argumento) {
   // conteúdo da função
//}