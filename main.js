let nomeUsuario = "";
let elemento = document.querySelector("#nome-usuário");

while(nomeUsuario == ""){
    nomeUsuario = prompt("Qual o seu nome?");
}

if(nomeUsuario == null){
    elemento.textContent = "Seja muito bem-vindo";
}else{
    elemento.textContent = nomeUsuario
}

