const botón1 =  document.getElementById("btnsumar");
botón1.addEventListener("click", sumar);

function sumar(){
    const varnumero1 = Number(document.getElementById("num1").value);
    const varnumero2 = Number(document.getElementById("num2").value);

    const varresultado = varnumero1 * varnumero2 * varnumero1 * varnumero2;
    const imprimirresultado =document.getElementById("divresultado");
    imprimirresultado.innerText = varresultado;
}

const botón2 =  document.getElementById("btnrestar");
botón2.addEventListener("click", restar);

function restar(){
    const varnumero1 = Number(document.getElementById("num5").value);
    const varnumero2 = Number(document.getElementById("num6").value);

    const varresultado = varnumero1 * varnumero2;
    const imprimirresultado =document.getElementById("divresultado1");
    imprimirresultado.innerText = varresultado;
}
const botón3 =  document.getElementById("btndescuento");
botón3.addEventListener("click", descuento);
function descuento() {
    const precio = Number(document.getElementById("num10").value);
    const mensaje =document.getElementById("Resultado");
    var descuento= 0;
    var total= 0;
    if(precio >=1000){
        descuento = (precio * 30) /100;   
        total = precio - descuento ;
        mensaje.innerText = total;
    } 
    else if(precio <=500 ){
        descuento = (precio * 10) /100;   
        total = descuento - total;
        mensaje.innerText = total;
    }   
}

const boton4 = document.getElementById("btnimpar");
boton4.addEventListener("click", numeros);

function numeros(){

    if (document.getElementById("num20").value % 2 == 0){
        ResultadoI.innerText = "Es un numero par";
    }
    else {
        ResultadoI.innerText = "Es un numero impar";
    }
    //alert("La Division es: " + varresultado);
    mensaje.innerText = ResultadoI;
}
const boton5 = document.getElementById("mostrarn");
boton5 = addEventListener("click", mostrar);

function mostrar(){
    const listas = document.getElementById("listado");
    listas.innerText = " ";
    for (let x=100;x>0; x=x-1){
        //alert("Numero" + x)
        //console.log(x);

        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item mt-1");
        li.innerText = x;
        listas.appendChild(li);
        

    }
    
}



