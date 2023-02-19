let horario = document.getElementsByName('horario')
let etapa = document.getElementsByName('etapa')
let uso = document.getElementById('uso')
let participantes = document.getElementById('parcicipantes')
let atividades = document.getElementsByName('atividades')
let duvidas = document.getElementsByName('duvidas')
let participativos = document.getElementsByName('participativos')
let problema = document.getElementsByName('problema')
let nota = document.getElementsByName('nota')
let consideracoes = document.getElementById('consideracoes')
let final = document.getElementById('final')
let copiar = document.getElementById('copiar')


function gerar(){
    consideracoes.style.display = "block"
    consideracoes.innerHTML = '';
    

    for (var i = 0 in etapa)
        if (etapa[i].checked)
        
        consideracoes.innerHTML += '- Qual etapa da consultoria: ' + etapa[i].value + "\n"
        
        
        consideracoes.innerHTML += '- Porcentagem de uso: ' + uso.value + '%' + "\n"

        
        consideracoes.innerHTML += '- Quem participou da consultoria: ' + participantes.value + "\n"

    for (var i = 0 in horario)
        if (horario[i].checked)
        consideracoes.innerHTML += '- Atrasaram para a consultoria: ' + horario[i].value + "\n"

    for (var i = 0 in atividades)
        if (atividades[i].checked)
        consideracoes.innerHTML += '- Realizaram as atividades anteriores: ' + atividades[i].value + "\n"
    
    for (var i = 0 in duvidas)
        if (duvidas[i].checked)
        consideracoes.innerHTML += '- Dúvidas/Dificuldades da etapa anterior: ' +  duvidas[i].value + "\n"

        for (var i = 0 in participativos)
            if (participativos[i].checked)
            consideracoes.innerHTML += '- Participativos: ' + participativos[i].value + "\n"

    for (var i = 0 in problema)
        if (problema[i].checked)
        consideracoes.innerHTML += '- Algum problema: ' + problema[i].value + "\n"

    for (var i = 0 in nota)
        if (nota[i].checked)
        consideracoes.innerHTML += '- Nota para a consultoria: '  + nota[i].value + "\n"
    
    consideracoes.innerHTML += '- Considerações adicionais: ' + "\n"
 
}


function copiarTexto(){
    let textoCopiado = document.getElementById('consideracoes');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0,99999);
    document.execCommand("copy")
}

/*
function copiarTexto (){
    let copyText = document.getElementById('copiar');
    let input = document.createElement("input");
    input.id = "inp";
    input.value = copyText.outerText;
    copyText.appendChild(input);

    let copy = document.getElementById('inp');
    copy.select();
    document.execCommand("Copy");
    alert("O texto copiado foi: " + copy.value);   
    copyText.removeChild(input);
}
*/