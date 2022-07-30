const cipher = {
  
  encode: function(offset, texto){
    let textoCodificado = ""
    for (let i = 0 ; i< texto.length ; i++) {
      let codigoAscii = texto.charCodeAt(i)
      let codigoAsciiEoffset = (((codigoAscii + offset) -65) % 26) + 65
      let resultado = String.fromCharCode(codigoAsciiEoffset)
      textoCodificado += resultado
    }

    return textoCodificado

  },

  decode: function(offset, texto){
    let textoDecodificado = ""
    for (let i = 0 ; i< texto.length ; i++) {
      let codigoAscii = texto.charCodeAt(i)
      let codigoAsciiEoffset = (((codigoAscii - offset) -90) % 26) + 90
      let resultado = String.fromCharCode(codigoAsciiEoffset)
      textoDecodificado += resultado
    
  }

  return textoDecodificado

  }
}

export default cipher;

