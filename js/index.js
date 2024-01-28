/*let nombreUsuario = prompt(`Ingrese su nombre`)

nombreUsuario== ``|| nombreUsuario==null? nombreUsuario=`Usuario`: null

nombreUsuario= nombreUsuario.trim()

function saludar(){
    console.log(`Hola ${nombreUsuario}`)
}

saludar();*/


function suma(n1, n2){
    console.log(n1+n2)
}

suma(10,5);



/*function saludar(nombre = `Usuario`){
    console.log(`Hola ${nombre} `)
}

saludar();*/



function resta(n1, n2){
    return n1-n2;
}

const resultado1 = resta (30,10)

console.log(resultado1)



//Funciones flecha

/*const sumar=(n1,n2)=>console.log(n1+n2);

sumar (20,30);*/

//Calculadora

/*const sumar=(n1,n2)=>console.log(n1+n2);
const restar=(n1,n2)=>console.log(n1-n2);
const multiplicar=(n1,n2)=>console.log(n1*n2);
const dividir=(n1,n2)=>console.log(n1/n2);

const calculadora= (n1, operacion, n2)=>{
    return operacion(n1,n2)
}

let resultado2 = calculadora(10, multiplicar, 5);*/



//Closures

let contador=0

const incrementar=()=>{
    contador+=1;
    console.log(contador)
}

incrementar();
incrementar();
incrementar();
incrementar();


//Tarea

// Crear una calculadora que imprima resultados por consola amigables como "El resulado es ..."

//Crear una función que salude a los usuarios.

//Crear una función que reciba un objeto como parámetro e imprima datos de forma amigable acerca del objeto (por ejemplo datos de un usuario)



//Calculadora

const sumar=(n1,n2)=>console.log(`El resultado es ${n1+n2}`);
const restar=(n1,n2)=>console.log(`El resultado es ${n1-n2}`);
const multiplicar=(n1,n2)=>console.log(`El resultado es ${n1*n2}`);
const dividir=(n1,n2)=>console.log(`El resultado es ${n1/n2}`);

const calculadora= (n1, operacion, n2)=>{
    return operacion(n1,n2)
}

let resultado = calculadora(20,dividir, 5);


//Función saludar

const saludar=(nombre = `Usuario`)=>console.log(`Hola ${nombre}. Bienvenido.`);
saludar()


//Función con objeto como parámetro

const persona=(nombre = `Juan`, apellido = `Perez`)=>console.log(nombre,apellido);
persona()