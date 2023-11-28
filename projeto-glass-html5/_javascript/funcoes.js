function load() {
    var emoji = document.getElementsByClassName('emo')
    for (var i = 0; i < emoji.length; i++) {
        emoji[i].textContent = `\u{1F53C}`;
    }
}

var acao = document.getElementsByClassName('item'); //capta a selecao do menu desejado
for (var i = 0; i < acao.length; i++) {
    acao[i].addEventListener('mouseenter', function() {  // aplica event listener para a variavel da selecao, seguido do comando entre aspas e o aviso de funcao precedido de virgula. (nao esquecer de selecionar a contagem do grupo [i])
        mouse(this, 1) // dentro do bloco coloca o nome exato da funcao e o parametro
    }); // termina com parenteses so no final.
    
    acao[i].addEventListener('mouseout', function() {
        mouse(this, 2) // This deve ser aplicado. é uma palavra-chave que, em um contexto de evento, refere-se ao elemento que desencadeou o evento. 
    })
}

function mouse(elemento, action) {
        if (action === 1) {
            elemento.style.padding = '20px';
            elemento.style.borderRadius = '25px';
            elemento.style.border = '1px black double'
        } else if (action === 2) {
            elemento.style.padding = '15px';
            elemento.style.borderRadius = '0';
            elemento.style.border = '0'
        }
    }

    
function changepic (foto) {
        var oculos = document.getElementById('oculospeq')
        oculos.style.opacity = '1'
        oculos.style.transition = '0.8s'
        oculos.style.width = '145px'
        oculos.style.padding = '5px'
        oculos.style.height = '115px'
        oculos.style.marginTop = '-5px'
        document.getElementById('oculospeq').src = foto;
}

function goback(foto) {
        var oculos = document.getElementById('oculospeq')
        document.getElementById('oculospeq').src = foto
        oculos.style.padding = '0px'
        oculos.style.width = '185px'
        oculos.style.height = '131px'
        oculos.style.opacity = '0.4'
        oculos.style.transition = '1.5s'
}

function shine() {
    var oculos = document.getElementById('oculospeq')
    oculos.style.opacity = '1'
    oculos.style.transition = '1s'
}

function dark() {
    var oculos = document.getElementById('oculospeq')
    oculos.style.opacity = '0.6'
    oculos.style.transition = '1s'
}

function opacit() {
    var opacidade = document.getElementById('framespec')
    opacidade.style.opacity = '1'
}

function see() {
    var opacidade = document.getElementById('framespec')
    opacidade.style.opacity = '0.3'
    var aux = document.getElementById('framespec').src = '../projeto-glass-html5/_textos/google-glass-txt.html'
    aux.style.transition = '2s'
    opacidade.style.transition = '1s'
}

/* video da tv */

function play() {
    var click = document.getElementById('caption')
    var televisao = document.getElementById('filme')
    var opacidade = window.getComputedStyle(televisao).getPropertyValue('opacity');
    if(opacidade == 0.1) {
        televisao.style.opacity = '1';
        televisao.style.transition = '2s'
        click.style.opacity = '0';
    } else if(opacidade == 1) {
        televisao.style.opacity = '0.1';
        televisao.style.transition = '1s'
        click.style.opacity = '1';
    }
}

/* Formularios */ 

var gen = document.getElementById('gen')
var genero = ''

if(gen[0].checked) {
    genero = 'Masculino'
} else if (gen[1].checked) {
    genero = 'Feminino'
}
function check() {
var grupo = document.getElementById('grupo')
var box = document.getElementById('ibox')
    if(box.checked) {
        grupo.style.opacity = '1';
        grupo.style.transition = '0.3s';
    } else {
        grupo.style.opacity = '0';
    }
}

function confirmar() {
    var confirmacao = document.getElementById('confirmacao')
    var radio = document.getElementsByName('urgencia')
    if(radio[0].checked) {
        confirmacao.style.opacity = '1'
        confirmacao.style.transition = '1s'
        confirmacao.innerHTML = 'Opcao 1 selecionada.'
    } else if (radio[1].checked) {
        confirmacao.style.opacity = '1'
        confirmacao.style.transition = '1s'
        confirmacao.innerHTML = 'Opcao 2 selecionada.'
    } else if (radio[2].checked) {
        confirmacao.style.opacity = '1'
        confirmacao.style.transition = '1s'
        confirmacao.innerHTML = 'Opcao 3 selecionada'
    } else if (radio[0] || radio[1] || radio[2] == '') {
        alert('Escolha uma opcao valida!')
    }
}

function clean() {
    var confirmacao = document.getElementById('confirmacao')
    var radio = document.getElementsByName('urgencia')
    if(radio[0].checked) {
        radio[0].checked = ''
        confirmacao.style.transition = '1s'
        confirmacao.style.opacity = '0'
    } else if(radio[1].checked) {
        radio[1].checked = ''
        confirmacao.style.transition = '1s'
        confirmacao.style.opacity = '0'
    } else {
        radio[2].checked = ''
        confirmacao.style.transition = '1s'
        confirmacao.style.opacity = '0'
    }}

   function ajuda() {
    var aux = document.getElementById('interfaceformbotao')
    var cor = window.getComputedStyle(aux).getPropertyValue('background-Color')
    var bot = document.getElementById('botao')
    var circle = document.getElementById('circle')
    var send = document.getElementById('send')
    aux.style.backgroundColor = 'white'
    if (cor === 'hsla(160, 11%, 85%, 0.753)') { 
        aux.style.backgroundColor = 'rgb(255, 255, 255)'
        bot.style.border = '2px, solid, black'
        circle.style.borderColor = 'transparent'
        send.style.color = 'transparent'
        bot.style.boxShadow = '1px, 1px, 15px, 5px, rgb(255, 255, 255)'
        
    } else if (cor === 'rgb(255, 255, 255)') {
        bot.style.border = '1px, solid, white'
        circle.style.borderColor = 'black'
        circle.style.borderTopColor = 'transparent'
        send.style.color = 'black'
        aux.style.backgroundColor = 'hsla(160, 11%, 85%, 0.753)'
        
    }
   }
   function tot() {
    var qtd = parseInt(document.getElementById('iquant').value) || 0;
    var res = qtd * 1500;
    document.getElementById('iprice').value = res;
}
