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


function gerar(){
    final.innerHTML = '';

    for (var i = 0 in etapa)
        if (etapa[i].checked)
        final.innerHTML += '- Qual etapa da consultoria: ' + etapa[i].value + "<br>"

        final.innerHTML += '- Porcentagem de uso: ' + uso.value + '%' + "<br>"

        final.innerHTML += '- Quem participou da consultoria: ' + participantes.value + "<br>"

    for (var i = 0 in horario)
        if (horario[i].checked)
        final.innerHTML += '- Atrasaram para a consultoria: ' + horario[i].value + "<br>"

    for (var i = 0 in atividades)
        if (atividades[i].checked)
        final.innerHTML += '- Realizaram as atividades anteriores: ' + atividades[i].value + "<br>"
    
    for (var i = 0 in duvidas)
        if (duvidas[i].checked)
        final.innerHTML += '- Dúvidas/Dificuldades da etapa anterior: ' +  duvidas[i].value + "<br>"

        for (var i = 0 in participativos)
            if (participativos[i].checked)
            final.innerHTML += '- Participativos: ' + participativos[i].value + "<br>"

    for (var i = 0 in problema)
        if (problema[i].checked)
        final.innerHTML += '- Algum problema: ' + problema[i].value + "<br>"

    for (var i = 0 in nota)
        if (nota[i].checked)
        final.innerHTML += '- Nota para a consultoria: '  + nota[i].value + "<br>"     
    
        final.innerHTML += '- Considerações adicionais: ' + consideracoes.value + "<br>"

    final.style.backgroundColor = "#c7b184f3"    
}



/*
function copiarTexto(){
    let textoCopiado = document.getElementById('final');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0,99999);
    document.execCommand("copy")
}




 let copyText = document.getElementById('respostas');
    let input = document.createElement("input");
    input.id = "inp";
    input.style.whiteSpace="pre-line"
    input.value = copyText.outerText;
    copyText.appendChild(input);

    let copy = document.getElementById('inp');
    copy.select();
    document.execCommand("Copy");
    alert("O texto copiado foi: " + copy.value);   
    copyText.removeChild(input);
    */