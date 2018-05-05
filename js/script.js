

// ---FUNÇÃO DE TRANSIÇÃO ENTRE SEÇÕES A PARTIR DO MUNU HORIZONTAL---
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// ---FIM---

// ---FUNÇÃO DO BOTÃO ADICIONAR / REMOVER DOS CARDS DO CALENDÁRIO---

$('button').on("click", function(){
  $(this).toggleClass('active');
});

// ---FIM---

// document.querySelectorAll('.nivel');
// header.querySelectorAll('.nivel');

// ---FILTRO---

var dias = $('.diaCard:not(.vazio)');

var filtrosAtivos = {};


/**
 * Filtrar todos os tipos de coisa (bairro, hora, modalidade, etc)
 * @param {string} tipo
 */
   var diasAtivos = $('.diaCard:not(.dia-inativo)');
function filtrar(tipo, valorSelecionado) {
  // Coloca o filtro que a gente está usando, 
  // com o valor que o usuário selecionou
  filtrosAtivos[tipo] = valorSelecionado;

  // // Esconde todo mundo
 $(dias).removeClass('dia-inativo');
 diasAtivos = $('.diaCard:not(.dia-inativo)');

  // A passa por cada dia 
  for (var i = 0; i < diasAtivos.length; i++) {
    var dia = diasAtivos[i];
    var texto;

    // Ve se o filtro de bairro ta ativo
    if (filtrosAtivos.bairro) {
      texto = $('.bairro', dia).text(); // === innerText
      // Se o bairro for igual ao filtro
      if(texto != filtrosAtivos.bairro) {
        $(dia).addClass('dia-inativo');
      }
    }


    // Ve se o filtro de nivel ta ativo
    if (filtrosAtivos.nivel) {
      texto = $('.nivel', dia).text(); // === innerText
      // Se o nivel for igual ao filtro
      if(texto != filtrosAtivos.nivel) {
        $(dia).addClass('dia-inativo');
      }
    }

    // Ve se o filtro de modalidade ta ativo
    if (filtrosAtivos.modalidade) {
      texto = $('.modalidade', dia).text(); // === innerText
      // Se o nivel for igual ao filtro
      if(texto != filtrosAtivos.modalidade) {
        $(dia).addClass('dia-inativo');
      }
    }

     // Ve se o filtro de periodo ta ativo
    if (filtrosAtivos.periodo) {
      texto = $('.periodo', dia).attr("value"); // === atributo value
      // console.log(texto);
      // Se o nivel for igual ao filtro
      if(texto != filtrosAtivos.periodo) {
        $(dia).addClass('dia-inativo');
      }
    }



  } // end for
    diasAtivos = $('.diaCard:not(.dia-inativo)');
  console.log(diasAtivos);


} // end function

$('#bairro').change(function() {
  filtrar('bairro', this.value);
});

$('#periodo').change(function() {
  filtrar('periodo', this.value);
});


$('#nivel').change(function() {
  filtrar('nivel', this.value);
});

$('#modalidade').change(function() {
  filtrar('modalidade', this.value);
});




 /*
  O for em uma array
  for (var i = niveis.length - 1; i >= 0; i--) {
    var nivel = niveis[i];
  }
   pode ser feito também com o forEach: 
  niveis.forEach(function(nivel) {

  })
  */

  // ---FIM FILTRO---

// MODAL ADD AULA
var modal = $('#modalAddAula');

$('.botaoMaisEMenos').click(function() {
  // $(this).parent().parent()
  var diaCard = $(this).closest('.diaCard');

  var dia = $('.dia', diaCard).text(); // .text() === .innerText
  var hora = $('.hora', diaCard).text();
  var bairro = $('.bairro', diaCard).text();
  var modalidade = $('.modalidade', diaCard).text();
  var nivel = $('.nivel', diaCard).text();


  $('.dia span', modal).text(dia);
  $('.hora span', modal).text(hora);
  $('.bairro span', modal).text(bairro);
  $('.modalidade span', modal).text(modalidade);
  $('.nivel span', modal).text(nivel);
})

// MODAL FIM ADD AULA

// FORM LOGAR
  var formulario = document.querySelector(".formLogar");
  var inputEmail = document.querySelector("#inputEmail");
  var inputSenha = document.querySelector("#inputSenha");

  function ficarVemelho () {
    inputEmail.classList.add("formErrado");
    inputSenha.classList.add("formErrado");
  }

  function mostrarErro() {
    
    if (inputSenha.value == "" || inputEmail.value == "") {

        ficarVemelho();
        return true;
    }

    return false;
  }

  formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    // event.stopPropagation();
    if(mostrarErro()) {
      return;
    } else {
      formulario.submit();
      $('#modalLogar').modal('hide')
    }
  })

// FIM FORM LOGAR

// // FORM CADASTRAR
  var formularioCadastrar = document.querySelector(".modalCadastrar");
  var nome = document.querySelector("#inputNome");
  var email = document.querySelector("#inputEmailCadastro");
  var senha = document.querySelector("#inputSenhaCadastro");
  var confirmarSenha = document.querySelector("#inputConfirmarSenha");
  var cpf = document.querySelector("#inputCPF");
  var nascimento = document.querySelector("#nascimento");
  var cep = document.querySelector("#cep");
  var endereco = document.querySelector("#endereco");
  var numero = document.querySelector("#numero");
  var estado = document.querySelector("#estado");
  var cidade = document.querySelector("#cidade");



  function ficarVemelhoCadastro () {
    nome.classList.add("formErrado");
    email.classList.add("formErrado");
    senha.classList.add("formErrado");
    nascimento.classList.add("formErrado");
    confirmarSenha.classList.add("formErrado");
    cpf.classList.add("formErrado");
    cep.classList.add("formErrado");
    endereco.classList.add("formErrado");
    numero.classList.add("formErrado");
    estado.classList.add("formErrado");
    cidade.classList.add("formErrado");

  }

  function mostrarErroCadastro() {
    if (nome.value == "" || email.value == "" || senha.value =="" || confirmarSenha.value == "" || cpf.value == "" || cep.value == "" || endereco.value == "" || numero.value == "" || cidade.value == "" || estado.value == "") {

        ficarVemelhoCadastro();
        return true;
    }

    return false;
  }

  formularioCadastrar.addEventListener("submit", function(event) {
    event.preventDefault();

    // event.stopPropagation();
    if(mostrarErroCadastro()) {
      return;
    } else {
      formularioCadastrar.submit();
      $('#modalCadastrar').modal('hide')
    }
  })

// FIM FORM CADASTRAR

// FORM CONTATO
  var formularioContato = document.querySelector(".formularioContato");
  var nomeContato =  document.querySelector(".formularioContato input.nome");
  var emailContato =  document.querySelector(".formularioContato input.email");
  var mensagemContato = document.querySelector(".formularioContato textarea.mensagem")
  
  function ficarVemelhoContato() {
    nomeContato.classList.add("formErrado");
    emailContato.classList.add("formErrado");
    mensagemContato.classList.add("formErrado");
  }

  function mostrarErroContato() {
    
    if (nomeContato.value == "" || emailContato.value == "" || mensagemContato.value == "") {

        ficarVemelhoContato();
        return true;
    }

    return false;
  }

  formularioContato.addEventListener("submit", function(event) {
    event.preventDefault();

    // event.stopPropagation();
    if(mostrarErroContato()) {
      return;
    }

    nomeContato.value = "";
    emailContato.value = "";
    mensagemContato.value = "";

  })


 // FIM FORM CONTATO 
