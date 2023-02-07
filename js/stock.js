const productos = []

class Producto {
    constructor (nombre, img, precio, id) {
        this.nombre = nombre
        this.img = img
        this.precio = precio
        this.id = id
    }
}

const iphoneOnce = new Producto ("IPHONE 11", '../img/iphone11.jpg', 19500, 1)
const iphoneDoce = new Producto ("IPHONE 12", '../img/iphone12.jpg', 210000, 2)
const iphoneTrece = new Producto ("IPHONE 13", '../img/iphone13.jpg', 25000, 3)
const iphoneCatorce = new Producto ("IPHONE 14", '../img/iphone14.jpg', 300000, 4)
const templado = new Producto ("TEMPLADO", '../img/templado.jpg', 500, 5)
const applewatch = new Producto ("APPLEWATCH", '../img/applewatch.png', 200000, 6)
const cargador = new Producto ('CARGADOR', '../img/cargador.jpg', 5000, 7)
const cable = new Producto ('CABLE', '../img/cable.jpg', 3000, 8)
const termo = new Producto ('TERMO STANLEY', '../img/termo.jpg', 20000, 9)


productos.push(iphoneOnce, iphoneDoce, iphoneTrece, iphoneCatorce, templado, applewatch, cargador, cable, termo)