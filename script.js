let texto = document.querySelector("#input");
let mensaje = document.querySelector("#mensaje");

function btnEncriptar(){
    const textEncriptar = encriptar(input.value);
    mensaje.value = textEncriptar;
    mensaje.style.height = "90%";
    texto.value = "";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto-muneco").style.display = "none";
    document.getElementById("copiar").style.display = "inherit";
}

function btnDesencriptar(){
    const textDesencriptar = desencriptar(input.value);
    mensaje.value = textDesencriptar;
    mensaje.style.height = "90%";
    texto.value = "";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("texto-muneco").style.display = "none";
    document.getElementById("copiar").style.display = "inherit";
}

function encriptar(strEncriptado){
    let array = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    strEncriptado = strEncriptado.toLowerCase();

    for (let index = 0; index < array.length; index++) {
        if(strEncriptado.includes(array[index][0])){
            strEncriptado = strEncriptado.replaceAll(array[index][0],array[index][1]);
        }
        
    }
    return strEncriptado;
}

function desencriptar(strDesencriptado){
    let array = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u"]];
    strDesencriptado = strDesencriptado.toLowerCase();

    for (let index = 0; index < array.length; index++) {
        if(strDesencriptado.includes(array[index][0])){
            strDesencriptado = strDesencriptado.replaceAll(array[index][0],array[index][1]);
        }
        
    }
    return strDesencriptado;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("Texto copiado");
}