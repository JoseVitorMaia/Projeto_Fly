let etapa = document.getElementsByName('etapa')
let uso = document.getElementById('uso')
let participantes = document.getElementById('parcicipantes')
let atividades = document.getElementsByName('atividades')
let duvidas = document.getElementsByName('duvidas')
let participativos = document.getElementsByName('participativos')
let problema = document.getElementsByName('problema')
let nota = document.getElementsByName('nota')
let consideracoes = document.getElementById('consideracoes')


let teste1 = document.getElementById('1')
let teste2 = document.getElementById('2')
let teste3 = document.getElementById('3')
let teste4 = document.getElementById('4')
let teste5 = document.getElementById('5')
let teste6 = document.getElementById('6')
let teste7 = document.getElementById('7')
let teste8 = document.getElementById('8')
let teste9 = document.getElementById('9')

let textoPronto = document.getElementById('textoPronto')


function gerar(){
    for (var i = 0 in etapa)
        if (etapa[i].checked)
            teste1.innerHTML = 'Qual etapa do treinamento: ' + etapa[i].value

    teste2.innerHTML = 'Porcentagem de uso: ' + uso.value + '%'

    teste3.innerHTML = 'Quem participou do treinamento: ' + participantes.value

    for (var i = 0 in atividades)
        if (atividades[i].checked)
            teste4.innerHTML = 'Realizaram as atividades anteriores? ' + atividades[i].value
    
    for (var i = 0 in duvidas)
        if (duvidas[i].checked)
            teste5.innerHTML = 'Dúvidas/Dificuldades da etapa anterior? ' +  duvidas[i].value

        for (var i = 0 in participativos)
            if (participativos[i].checked)
                teste6.innerHTML = 'Participativos? ' + participativos[i].value

    for (var i = 0 in problema)
        if (problema[i].checked)
            teste7.innerHTML = 'Algum problema? ' + problema[i].value

    for (var i = 0 in nota)
        if (nota[i].checked)
            teste8.innerHTML = 'Nota para a consultoria: '  + nota[i].value        
    
    teste9.innerHTML = 'Considerações adicionais: ' + consideracoes.value       
}