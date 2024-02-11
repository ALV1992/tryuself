const name = prompt("Digite seu nome") ?? "Anônimo";

document.querySelector("#title").innerHTML = `Olá ${name}. Seja bem-vindo(a) à nossa página`;

alert("Olá mundo!");