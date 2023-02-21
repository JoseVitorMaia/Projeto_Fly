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
let iniciais = document.getElementById('etapa1')
let menuGeral = document.getElementById('menuGeral')

let dono = document.getElementById('dono')
let resp = document.getElementById('resp');
let quem = document.getElementById('quem');
let usuario = document.getElementById('usuario');
let empresas = document.getElementById('empresas');
let sistemaContabil = document.getElementById('sistemaContabil')
let jaUsaram = document.getElementById('jaUsaram');
let formas = document.getElementById('formas');
let maioriaRegimes = document.getElementById('maioriaRegimes');
let valor = document.getElementById('valor');


let migracao = document.getElementById('migração')
let valorMigra = document.getElementById('valorMigra')
let referenciaMigra = document.getElementById('referenciaMigra')
let formaContato = document.getElementById('formaContato')
let equipeEngajada = document.getElementById('equipeEngajada')
let dispensaMassa = document.getElementById('dispensaMassa')
let erp = document.getElementById('erp')
let smtp = document.getElementById('smtp')
let regUso = document.getElementById('regUso')
let acesso = document.getElementById('acesso')
let entregas = document.getElementById('entregas')
let robo = document.getElementById('robo')
let gestao = document.getElementById('gestao')
let app = document.getElementById('app')
let apla = document.getElementById('apla')



function etapa1(){
    consideracoes.innerHTML = '';

    iniciais.style.display = "block"
    menuGeral.style.display = "none"
    migracao.style.display = "none"

    consideracoes.style.display = "block"

    botao1.style.display = "inline"
    botao2.style.display = "none"
    botao3.style.display = "none"
}


function demaisEtapas(){
    //consideracoes.innerHTML = '';

    migracao.style.display = "none"
    iniciais.style.display = "none"
    menuGeral.style.display = "block"

    consideracoes.style.display = "block"

    botao1.style.display = "none"
    botao2.style.display = "inline"
    botao3.style.display = "none"
}

function migração(){
    consideracoes.innerHTML = '';

    migracao.style.display = "block"
    iniciais.style.display = "none"
    menuGeral.style.display = "none"

    consideracoes.style.display = "block"

    botao1.style.display = "none"
    botao2.style.display = "none"
    botao3.style.display = "inline"
}

function botaoMigração(){
    consideracoes.innerHTML = '';

    consideracoes.innerHTML += '- Valor do Acessórias: ' + valorMigra.value +  "\n"
    consideracoes.innerHTML += '- Referencia técnica e seu departamento: ' + referenciaMigra.value + "\n"
    consideracoes.innerHTML += '- Melhor forma de contato: ' + formaContato.value + "\n"
    consideracoes.innerHTML += '- Equipe engajada? Quais?: ' + equipeEngajada.value + "\n"
    consideracoes.innerHTML += '- Dispensa em massa: ' + dispensaMassa.value + "\n"
    consideracoes.innerHTML += '- ERP: ' + erp.value + "\n"
    consideracoes.innerHTML += '- SMTP Ativo:' + smtp.value + "\n"
    consideracoes.innerHTML += '- Uso:' + regUso.value + '%' + "\n"
    consideracoes.innerHTML += '- Acesso:' + acesso.value + '%' + "\n"
    consideracoes.innerHTML += '- Entregas: ' + entregas.value + '%' + "\n"
    consideracoes.innerHTML += '- Robô: ' + robo.value + '%' + "\n"
    consideracoes.innerHTML += '- Gestão de Processos:' + gestao.value + "\n"
    consideracoes.innerHTML += '- APP: ' + app.value + "\n"
    consideracoes.innerHTML += '- APLA:' + apla.value + "\n"
    consideracoes.innerHTML += '- Considerações adicionais: '
}

function gerar1(){
    consideracoes.innerHTML = '';

    consideracoes.innerHTML += '- Dono do escritório : ' + dono.value + "\n"
    consideracoes.innerHTML += '- Responsavel Técnico : ' + resp.value + "\n"
    consideracoes.innerHTML += '- Quem participou da consultoria : ' + quem.value + "\n"
    consideracoes.innerHTML += '- Usuários aprox: ' + usuario.value + "\n"
    consideracoes.innerHTML += '- Empresas aprox : ' + empresas.value + "\n"
    consideracoes.innerHTML += '- Sistema Contábil : ' + sistemaContabil.value + "\n"
    consideracoes.innerHTML += '- Ja usaram sistema de gestão : ' + jaUsaram.value + "\n"
    consideracoes.innerHTML += '- Forma de entrega:(se recebem por email wpp ou físico) : ' + formas.value + "\n"
    consideracoes.innerHTML += '- Qual a maioria dos regimes tributários : ' + maioriaRegimes.value + "\n"
    consideracoes.innerHTML += '- Valor da Acessórias mais chamou atenção : ' + valor.value + "\n"
    consideracoes.innerHTML += '- Considerações adicionais: '
}

function gerar(){
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
    
    consideracoes.innerHTML += '- Considerações adicionais: '
 
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