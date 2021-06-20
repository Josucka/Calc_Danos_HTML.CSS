const personagem = document.getElementsByClassName('personagem_elemen')
const instrumento = document.getElementsByClassName('instrumento_elemen')

let dano_instrumento 
let hp_personagem 

for(const personagens  of personagem){
    const nomePersonagem = personagens.getAttribute('data-nome')
    const vidaPersonagem = personagens.getAttribute('data-hp')

    personagens.addEventListener('click', function(){
        if(document.getElementsByClassName('selec_persona').length == 0){
            personagens.classList.add('selec_persona');
            hp_personagem = vidaPersonagem;
            alert(`${nomePersonagem} : ${hp_personagem}`)
        }else{
            personagens.classList.remove('selec_persona')
        }
    })
}

for(const instrumentos of instrumento){
    const nomeInstrumento = instrumentos.getAttribute('data-nome')
    const danoInstrumento = instrumentos.getAttribute('data-dano')

    instrumentos.addEventListener('click', function(){
        if(document.getElementsByClassName('selec_instrumento').length == 0){
            instrumentos.classList.add('selec_instrumento')
            dano_instrumento = danoInstrumento
            alert(`${nomeInstrumento}: ${danoInstrumento}`)
        }else{
            instrumentos.classList.remove('selec_instrumento')
        }
    })
}
const calcular = document.getElementById('Calcular')
calcular.addEventListener('click', function(){
    if(dano_instrumento >= hp_personagem){
        alert(`Dano: ${dano_instrumento}! Você matou o inimigo!`)
    }else{
        alert(`Dano: ${dano_instrumento}! O inimigo sobreviveu...`)
    }
})
