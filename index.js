// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
    //Code here
    var array = str.split(" ");
    var novalista = ""
    for (var i = 0; i < array.length; i++) { 
      var palavra = array[i];
      if (palavra.match(/[^a-zA-Z 0-9]+/)) {
        var novapalavraF = palavra
        } else {
        novapalavra = "";
        for (var l = 1; l < palavra.length; l++) {
          novapalavra += palavra[l]
        } 
        var novapalavraF = novapalavra + palavra[0] + "ay";
        } 
      novalista = novalista + " " + novapalavraF
    } 
    var novalistasemespaco = novalista.trim().toString()
    return novalistasemespaco
  }
  
  console.log(pigIt('Hello world !'))