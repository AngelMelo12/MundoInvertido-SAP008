const cipher = {
  
  encode: function(offset, texto) {
    let textoCodificado = ""
  
    if(typeof offset != 'number' || typeof texto != 'string' || 
      typeof offset === 'undefined' || typeof texto === 'undefined') {
        
      throw TypeError()
    }

    for (let i = 0 ; i < texto.length ; i++) {
      let codigoAscii = texto.charCodeAt(i)

      if(codigoAscii == 32) {
        textoCodificado += " "
        continue
      }

      let codigoAsciiEoffset = (((codigoAscii + offset) - 65) % 26) + 65
      let resultado = String.fromCharCode(codigoAsciiEoffset)
      textoCodificado += resultado
    }

    return textoCodificado

  },

  decode: function(offset, texto) {
    let textoDecodificado = ""

    if(typeof offset != 'number' || typeof texto != 'string' || 
      typeof offset === 'undefined' || typeof texto === 'undefined') {

      throw TypeError()
    }

    for (let i = 0 ; i < texto.length ; i++) {
      let codigoAscii = texto.charCodeAt(i)

      if(codigoAscii == 32) {
        textoDecodificado += " "
        continue
      }

      let codigoAsciiEoffset = (((codigoAscii - offset) - 90) % 26) + 90
      let resultado = String.fromCharCode(codigoAsciiEoffset)
      textoDecodificado += resultado
    }

    return textoDecodificado

  }
}

export default cipher;
