import cipher from './cipher.js';

function cifrar() {
    let texto = document.getElementById("texto1").value.toUpperCase()
    let offset = parseInt(document.getElementById("offset").value)
    let resposta = document.getElementById("respostaCifrada")
    
    resposta.innerText = "Sua frase cifrada é: " + cipher.encode(offset, texto)
}

function decifrar() {
    let texto = document.getElementById("texto2").value.toUpperCase()
    let offset = parseInt(document.getElementById("offset").value)
    let resposta = document.getElementById("respostaDecifrada")
   
    resposta.innerText = "Sua frase decifrada é: " + cipher.decode(offset, texto)
}

document.getElementById("botaoCifrar").addEventListener('click', cifrar)
document.getElementById("botaoDecifrar").addEventListener('click', decifrar)