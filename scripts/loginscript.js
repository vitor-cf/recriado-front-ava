function validarCPF(){
let cpf = document.querySelector('.CPF').value;
  cpf = cpf.replace(/\D/g, '');
  console.log(cpf);
  if(cpf.length !== 11){
    return false;
  }
  if(/^(\d)\1{10}$/.test(cpf)){
    return false;
  }
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(9))) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpf.charAt(10))) {
    return false;
  }
  return true;
}


function validarPass(){
  const pass = document.getElementById('password').value
  console.log(pass);
  if(pass.length <3 || pass.length > 15){
    return false;
  }
  return true;
}
function redirecionar(){
  window.location.href = "pages/home.html";
}

const erroImg = document.querySelector('.erro')
function emitirErro(){
  if(!validarPass() || !validarCPF() ){
    erroImg.style.display = "flex";
  }else{
    redirecionar();
  }
}