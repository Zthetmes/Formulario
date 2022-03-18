

const nameInput = document.getElementById("name");

nameInput.addEventListener("focus", nameFocus);
nameInput.addEventListener("blur", nameBlur);


function nameFocus() {
  let nameIcon = document.getElementById("marcador1");
  nameIcon.classList.add("far","fa-address-card");
  fondoLoco.classList.remove("fondoNormal")
  fondoLoco.classList.add("fondoMarcador1");
}
function nameBlur(){
  let nameIcon = document.getElementById("marcador1");
  nameIcon.classList.remove("far","fa-address-card");
  fondoLoco.classList.remove("fondoMarcador1");
  fondoLoco.classList.add("fondoNormal");
}


const emailInput = document.getElementById("email");

emailInput.addEventListener("focus", emailFocus);
emailInput.addEventListener("blur", emailBlur);


function emailFocus() {
  let emailIcon = document.getElementById("marcador2");
  emailIcon.classList.add("fal","fa-at");
  fondoLoco.classList.remove("fondoNormal")
  fondoLoco.classList.add("fondoMarcador2");
}
function emailBlur(){
  let emailIcon = document.getElementById("marcador2");
  emailIcon.classList.remove("fal","fa-at");
  fondoLoco.classList.remove("fondoMarcador2");
  fondoLoco.classList.add("fondoNormal");
}


const mapInput = document.getElementById("dropdown");


mapInput.addEventListener("focus", mapFocus);
mapInput.addEventListener("blur", mapBlur);


function mapFocus() {
  let mapIcon = document.getElementById("marcador3");
  mapIcon.classList.add("fal","fa-map-marker-alt");
  fondoLoco.classList.remove("fondoNormal")
  fondoLoco.classList.add("fondoMarcador3");
}
function mapBlur(){
  let mapIcon = document.getElementById("marcador3");
  mapIcon.classList.remove("fal","fa-map-marker-alt");
  fondoLoco.classList.remove("fondoMarcador3");
  fondoLoco.classList.add("fondoNormal");
}


const numberInput = document.getElementById("number");

numberInput.addEventListener("focus", numberFocus);
numberInput.addEventListener("blur", numberBlur);

function numberFocus() {
  let numberIcon = document.getElementById("marcador4");
  numberIcon.classList.add("fal","fa-phone-alt");
  fondoLoco.classList.remove("fondoNormal")
  fondoLoco.classList.add("fondoMarcador4");
}
function numberBlur(){
  let numberIcon = document.getElementById("marcador4");
  numberIcon.classList.remove("fal","fa-phone-alt");
  fondoLoco.classList.remove("fondoMarcador4");
  fondoLoco.classList.add("fondoNormal");
}

const textareaInput = document.getElementById("floatingTextarea2");


textareaInput.addEventListener("focus", textareaFocus);
textareaInput.addEventListener("blur", textareaBlur);

function textareaFocus() {
  let textareaIcon = document.getElementById("marcador5");
  textareaIcon.classList.add("fal","fa-comment-alt-edit");
  fondoLoco.classList.remove("fondoNormal")
  fondoLoco.classList.add("fondoMarcador5");
}
function textareaBlur(){
  let textareaIcon = document.getElementById("marcador5");
  textareaIcon.classList.remove("fal","fa-comment-alt-edit");
  fondoLoco.classList.remove("fondoMarcador5");
  fondoLoco.classList.add("fondoNormal");
}






var nameValid = false
var emailValid = false
var telValid = false
var comValid = false

const nameRegExp  = new RegExp( /^[a-zA-ZÀ-ÿ\s]{1,40}$/ )
const emailRegExp = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
const telRegExp = new RegExp(/^\d{8,14}$/)





const fondoLoco = document.getElementById("asociado")




function limpiarName(){
  errorName.innerHTML ="";
}
function limpiarEmail(){
  errorEmail.innerHTML ="";
}
function limpiarTel(){
  errorTel.innerHTML ="";
}
function limpiarCom(){
  errorCom.innerHTML ="";
}


  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("survey-form").addEventListener('submit', validarFormulario);
  document.getElementById("name").addEventListener("focus", limpiarName);
  document.getElementById("email").addEventListener("focus", limpiarEmail);
  document.getElementById("number").addEventListener("focus", limpiarTel);
  document.getElementById("floatingTextarea2").addEventListener("focus", limpiarCom);
});



function validarFormulario(evento) {
  evento.preventDefault();

  valUno();
  valDos();
  valTres();
  valCuatro();
  var msgenvio = document.getElementById("envioExitoso");
  if(nameValid & emailValid & telValid & comValid){
    msgenvio.innerHTML = "Envio exitoso. Gracias por contactarnos.";
    funcion_reiniciar();
  }
}

 function valUno(){
  var usuario = document.getElementById('name').value;
  var errorName = document.getElementById("errorName");

  document.getElementById("errorName").innerHTML = "";
  if(usuario.length == "") {

    errorName.innerHTML = "Escriba su nombre";
    return;
  }
  if(nameRegExp.test(usuario) == false){
    errorName.innerHTML = "Este campo solo puede contener letras";

  }
  else{
    nameValid = true;
    console.log('Esta todo mas que bien hasta aca')
  }
 }
  /*email*/
  function valDos(){
  var email = document.getElementById('email').value;
  var errorEmail = document.getElementById("errorEmail");
  document.getElementById("errorEmail").innerHTML = "";
  if(email.length == "") {

    errorEmail.innerHTML = "Escriba su email";
    return;
    }
  if(emailRegExp.test(email) == false){
    errorEmail.innerHTML = "Escriba un email valido";

  }
  else{
    emailValid = true;
    console.log('Esta todo mas que bien hasta aca el email')
  }
  }
  
  function valTres(){
   var telefono = document.getElementById('number').value;
   var errorTel = document.getElementById("errorNumber");
  document.getElementById("errorNumber").innerHTML = "";
  if(telefono.length < 8) {

    errorNumber.innerHTML = "Escriba su teléfono de 8 dígitos o más";
    return;
    }
  if(telRegExp.test(telefono) == false){
    errorNumber.innerHTML = "Este campo solo puede contener números";

  }
  else{
    telValid = true;
    console.log('Esta todo mas que bien hasta aca el tel')
  }
  }
  function valCuatro(){
    var comentarios = document.getElementById('floatingTextarea2').value;
    var errorCom = document.getElementById("errorCom");
   document.getElementById("errorCom").innerHTML = "";
   if(comentarios.length == "") {

     errorCom.innerHTML = "Escriba un comentario";
     return;
     }

   else{
     comValid = true;
     console.log('todo valido')
   }
   }
   function funcion_reiniciar(){
    document.getElementById("survey-form").reset();
    }
    
