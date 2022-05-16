function calculo() {
//const dato1 = document.getElementById("dato1").value 
const operacion = document.getElementById("eleccion").value 

let resultado = null;

if (operacion = 0){
    //ford ka
    resultado = ((2900000*15)/100)-2900000
}else {
    if (operacion = 1){
        //ford fiesta
        resultado = ((3350000*5)/100)-3350000
    }else{
        //ford focus
        resultado = ((3960000*10)/100)-3960000
    }
}
document.getElementById("h_resultado").textContent = `resultado = ${resultado.toFixed(2)}`
}
