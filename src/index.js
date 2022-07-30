import cipher from './cipher.js';

function cifrar() {
    let texto = document.getElementById("texto1").value.toUpperCase()
    let offset =parseInt(document.getElementById("offset").value)
    let resposta = document.getElementById("respostaCifrada")
    let textoCodificado = ""

    for (let i = 0 ; i< texto.length ; i++) {
        let codigoAscii = texto.charCodeAt(i)
        let codigoAsciiEoffset = (((codigoAscii + offset) -65) % 26) + 65
        let resultado = String.fromCharCode(codigoAsciiEoffset)
        textoCodificado += resultado
    }


    resposta.innerText = "Sua frase cifrada é: " + textoCodificado 
   
}

function decifrar() {
    let texto = document.getElementById("texto2").value.toUpperCase()
    let offset = document.getElementById("offset").value
    let resposta = document.getElementById("respostaDecifrada")
    let textoDecodificado = ""

    for (let i = 0 ; i< texto.length ; i++) {
        let codigoAscii = texto.charCodeAt(i)
        let codigoAsciiEoffset = (((codigoAscii - offset) -90) % 26) + 90
        let resultado = String.fromCharCode(codigoAsciiEoffset)
        textoDecodificado += resultado
    }

    resposta.innerText = "Sua frase decifrada é: " + textoDecodificado 
    
}

document.getElementById("botaoCifrar").addEventListener('click', cifrar)
document.getElementById("botaoDecifrar").addEventListener('click', decifrar)

