//COMIENZO INNERPHONE"

alert ("Bienvenido a InnerPhone")
alert ("En compras superiores a los U$S6000 tenes U$S200 de descuento y en cuotas sin interés")
alert ("Realizamos envíos GRATIS a Cordoba Capital!!!")
alert ("Nuestros Productos: \n1) IPHONE 11 + FUNDA y TEMPLADO U$S710, \n2) IPHONE 12 + FUNDA Y TEMPLADO U$S810, \n3) IPHONE 13 + FUNDA Y TEMPLADO U$S910, \n4) IPHONE 14 + FUNDA Y TEMPLADO U$S1010, \n5)TERMO Y MATE STANLEY U$S100 \n6)SMARTWATCH U$S400")

//Funciones

function carritoTotalDeCompras (producto1=0, producto2=0, producto3=0){
    return producto1 + producto2 + producto3
}
function descuentoTotalDeCompras(producto1=0, producto2=0){
    return producto1 - producto2
}

//Variables

let producto1 = Number(prompt("Primer producto"))
console.log (producto1)
let producto2 = Number(prompt("Segundo producto"))
console.log (producto2)
let producto3 = Number(prompt("Tercer producto"))
console.log (producto3)

let productosFinales = carritoTotalDeCompras(producto1,producto2,producto3)
alert(productosFinales)

//Condicionales

if (productosFinales >= 6000){
   alert("Recibiste U$S200 de descuento")
} 
if (productosFinales <= 5000){
    alert("No recibiste el descuento")
}

//Datos del usuario 

alert("A continuación debe ingresar sus datos para el envío")

let nombre = prompt ("Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
let provincia = prompt ("Ingrese provincia")
let ciudad = prompt ("Ingrese ciudad")
let domicilio = prompt ("Ingrese su domicilio")
let formasDePago = prompt ("Ingresa tu forma de pago \n 1 pago con transferencia o debito \n2 pago con tarjeta de crédito")
let cantidadDeCuotas = prompt("Ingresa la cantidad de cuotas, puedes pagar en 3, 6 y 12 SIN INTERES")

alert ("En los próximos días recibiras tus productos en la puerta de tu hogar")
alert ("Muchas gracias por su compra, vuelva pronto!!!")

//Objetos

class Producto{
    constructor(marca, producto, material, peso, precio){
     this.marca = marca;
     this.producto = producto;
     this.material = material;
     this.peso = peso;
     this.precio = precio;
     this.stock = true;
 }
mostrar(){
    console.log("Este elemento es una " + (this.producto) + " y pesa " + (this.peso));
    console.log("Es de marca " + (this.marca) + " y es de " + (this.material));
    console.log("El precio del elemento " + (this.producto) + " es de " + (this.precio));
    console.log("Hay disponibilidad " + (this.stock))
}
}


let producto4 = new Producto ("Iphone", "celular", "acrilico", "200gr", 1000);
producto4.mostrar(Producto);
let producto5 = new Producto ("stanley", "termo y mate", "acero", "500gr", 100);
producto5.mostrar(Producto);
let producto6 = new Producto ("Apple", "smartwatch", "acero", "100gr", 400);
producto6.mostrar(Producto); 
//Array
const arrayProductos = ["celular", "termo y mate", "smartwatch"]; 

//Agregado de elementos en el array
arrayProductos.push("Fundas")
console.log(arrayProductos.length)
console.log(arrayProductos)
const arrayDePrecios = ["Precio del celular ", 1000, "Precio del termo y mate ", 100, "Precio del smartwach ", 400]
console.log(arrayDePrecios)

//Ordenes de función superior
const tecnologia = [
    {nombre: "Templado", precio: 10},
    {nombre: "PulceraSmartwatch", precio: 20}, 
    {nombre: "Bombillas", precio: 50}, 
    {nombre: "Fundas", precio: 30}
]
const nombres = tecnologia.map ((el) => el.nombre)
console.log(nombres)
const precio = tecnologia.map ((el) => el.precio )
console.log(precio)