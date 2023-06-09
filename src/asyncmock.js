const productos = [
    { nombre: "ShortBoard Egg 5.7", descripcion: "Pro JT. Medida 5'7''. Modelo disponible desde 5' a 6'",precio: 160000, stock: 5, id: "1", img: "../img/short_5-7.png", idCat: "2" },
    { nombre: "ShortBoard Square 5.8", descripcion: "Pro RM. Medida 5'8'' - Square Round Tail. Modelo disponible desde 5' a 6'", precio: 175000, stock: 5, id: "2", img: "../img/short_5-8.png", idCat: "2" },
    { nombre: "ShortBoard Swallow 6.2", descripcion: "6'2'' Swallow tail. Medida 6'2'' x 20'' x 2 1/2''. Modelo disponible desde 5'7'' a 6'8''", precio: 190000, stock: 5, id: "3", img: "../img/short_6-2.png", idCat: "2" },
    { nombre: "ShortBoard Egg 6.4", descripcion: "6'4'' Round tail. Medida 6'4'' x 22'' x 2 3/4''", precio: 170000, stock: 5, id: "4", img: "../img/short_6-4.png", idCat: "2" },
    { nombre: "LongBoard 7.6", descripcion: "Long DN. Medidas 7'6'' x 23'' x 3''. Modelo disponible desde 6'8'' a 10'", precio: 200000, stock: 5, id: "5", img: "../img/long_7-6.png", idCat: "3" },
    { nombre: "LongBoard 9.4", descripcion: "Long ST II. Medidas 9'4'' x 23 1/2'' x 3''. Modelo disponible desde 6'8'' a 10''", precio: 220000, stock: 5, id: "6", img: "../img/long_9-4.png", idCat: "3" },
    { nombre: "LongBoard 9.10", descripcion: "Long Nouse Rider ST. Medidas 9'10'' x 23'' x 3''. Modelo disponible desde 6'8'' a 10''", precio: 225000, stock: 5, id: "7", img: "../img/long_9-10.png", idCat: "3" },
    { nombre: "LongBoard 9", descripcion: "Long Pro. Medidas 9' x 23'' x 3''. Modelo disponible desde 6'8'' a 10''", precio: 215000, stock: 5, id: "8", img: "../img/long_9.png", idCat: "3" },
    { nombre: "HybridBoard RetroFish 5.4", descripcion: "Huevo Dolo. Medida 5'4''. Modelo disponible desde 5' a 7'", precio: 240000, stock: 5, id: "9", img: "../img/retro_5-4.png", idCat: "4" },
    { nombre: "HybridBoard Retro 5.7", descripcion: "Mini 5'7''. Medidas 5'7'' x 21 7/8'' x 2 5/8''. Modelo disponible desde 5' a 7'", precio: 250000, stock: 5, id: "10", img: "../img/retro_5-7.png", idCat: "4" },
    { nombre: "HybridBoard Channeled 5", descripcion: "Mini Simmons. Medida 5'. Modelo disponible desde 5' a 7'", precio: 265000, stock: 5, id: "11", img: "../img/retro_5.png", idCat: "4" },
    { nombre: "HybridBoard Retro Egg 6", descripcion: "HCPP. Medida 6'. Modelo disponible desde 6' a 6'10''", precio: 260000, stock: 5, id: "12", img: "../img/retro_6.png", idCat: "4" }


]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}