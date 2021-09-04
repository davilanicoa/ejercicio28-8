//Consigna: A partir de los ejemplos mostrados la primera clase, y en función del tipo de simulador que hayas elegido, deberás:
//Crear al menos un objeto para controlar el funcionamiento de tu simulador.
//Incorporarle sus propiedades y su constructor.
//Invocar a ese objeto en algún momento donde el usuario realice alguna acción.
//Utilizar sus métodos.
//Incorporar al menos un Array en tu proyecto.
//Utilizar algunos de los métodos o propiedades vistos en la clase.


let cerveza = 150

let cantidad = Number(prompt("Cuantas birras queres?"))

function datos(cant){

    console.log((cant*cerveza));
}

datos(cantidad)

//ARRAYS

class Comida {
    constructor(nombre, disponible, cantidad, variedades) {
        this.nombre = nombre
        this.disponible = disponible
        this.cantidad = cantidad
        this. variedades = variedades

    }
    
    preguntar (){
        console.log("Que queres comer?")

    }

}

const comidaMinutas = {
    nombre: "Carnes",
    disponible: true,
    cantidad: 1,
    variedades:["Entraña", "Vacio", 
    "Chorizo", "Morcilla", "Asado"]
}

const comidaHamburguesas = {
    nombre: "Hamburguesas",
    disponible: true,
    cantidad: 2,
    variedades:["Con cheddar y panceta",
            "Con lechuga y tomate",
            "Con aros de cebolla",
            "Con huevo, jamon y queso"]
}

const comidaPizzas = {
    nombre: "Pizzas",
    disponible: true,
    cantidad: 1,
    variedades: ["Muzzarella", "Muzzarella con Jamon",
                "Napolitana", "Cancha", "Fugazzetta",
                "Calabresa", "Salsa Blanca"]
}

const comidaPostres = {
    nombre: "Postres",
    disponible: true,
    cantidad: 1,
    variedades: ["Flan", "Flan con crema y dulce",
                "Budin de pan", "Ensalada de frutas",
                "Helado", "Tiramisu"]
}

console.log (comidaPostres);

const comidas = ["Hamburguesas", "Pizzas", "Minutas", "Postres"];

console.log (comidas.length);
console.log (comidas[1]);
comidas.push("Parrilla", "Vegetariana");
console.log (comidas.length);

const comida1 = new Comida("Carnes", true, 1, "Vacio")
const comida2 = new Comida("Hamburguesas", true, 2, "Con cheddar y panceta")
const comida3 = new Comida("Pizzas", true, 1, "Cancha")
const comida4 = new Comida("Postres", true, 1, "Flan")

comidas.push(comida1)
comidas.push(comida2)
comidas.push(comida3)
comidas.push(comida4)


console.log(comidas);

//
//
//
//
let selector2 = document.getElementById("QUE SE VEA ACA");

comidas.forEach(e => {
    /*selector2.innerHTML += `
    <div class="card w-75"> 
    <div class="card-body">
    <h5 class="card-title">${e.titulo}</h5>
    <p class="card-text">${e.categoria}</p>
    <a href="#" class="btn btn-primary">${e.precio}</a>
    </div>
</div> `*/

    let div1 = document.createElement("div")

    let p1 = document.createElement("p") 
    p1.textContent = e.nombre
    let p2 = document.createElement("p")
    p2.textContent = e.cantidad
    p2.setAttribute("class", "colorAzul")
    let p3 = document.createElement("p")
    p3.textContent = e.variedades

    div1.appendChild(p1)
    div1.appendChild(p2)
    div1.appendChild(p3)

    selector2.appendChild(div1)
});

let alerta = function(){
    alert("La idea es ir viendo como hacer la pagina")

}

let alerta2 = function(e){
    alert("Este EVENTO es de tipo: " + e.type)

}

let boton = document.getElementById("boton");
boton.addEventListener("click", alerta)
boton.addEventListener("click", alerta2)


let formulario = document.getElementsByName("formulario")[0],
    elementos = formulario.elements;

let validarNombre = function(e){

    if(formulario.nombre.value == 0) {
        alert("Por favor completa tu pedido");
        e.preventDefault()

    }   
}

let validar = function(e){

    validarNombre(e);
    validarPago(e);
    validarCheckbox(e);
};


let validarCheckbox = function(e){
    if(formulario.chequeado.checked == false) {
        alert("¿Chequeste tu pedido?")
        e.preventDefault()

    }

}
let validarPago = function(e){
    if(formulario.pago[0].checked == true || formulario.pago[1].checked == true) {
        
    } else {

        alert("Eliga una forma de pago, por favor")
        e.preventDefault();
    
    } 

};



formulario.addEventListener("submit", validar)


