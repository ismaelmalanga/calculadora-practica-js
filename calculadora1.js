//Con esta funcion hacemos que agregue el valor de el boton que toco 
function agreg(valor){
    document.getElementById('pantalla').value += valor
}
function calculo(){//Calculamos la operacion
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
function eliminar(){ //vaciamos la calculadora
    document.getElementById('pantalla').value = ""
}