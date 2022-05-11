const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado =encriptar(inputTexto.value)
    mensagem.value =textoEncriptado
    mensagem.style.backgroundImage="none"
 
}
function encriptar(stringEncriptada) {
    let matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada =stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
       
    }
    return stringEncriptada;
}
function btnDesencripitar() {
    const textoDescriptado =desencriptar(inputTexto.value)
    mensagem.value =textoDescriptado
    mensagem.style.backgroundImage="none"
 
}
function desencriptar(stringDesencriptada) {
    let matrizCodigo =[["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada =stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
       
    }
    return stringDesencriptada;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert(textoCopiado.value + " foi copiado!");
}