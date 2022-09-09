//   Feliz Primavera ! 

//   TP: Funciones de orden superior en JavaScript - 09/09/2022

//   Dado el siguiente array, resolver utilizando funciones de orden superior:

const setUps = [
    {processor: "i7 11700K", ram: "Fury 32GB", gpu: "RTX 3070 Ti", storage: 2, storageType: "SSD", monitor: 144, price: 2199},
    {processor: "ryzen 9 5900X", ram: "Fury 32GB", gpu: "Radeon RX 6500", storage: 4, storageType: "SSD", monitor: 144, price: 2499},
    {processor: "ryzen 7 5700G", ram: "HyperX 16GB", gpu: "Radeon RX 6500", storage: 2, storageType: "SSD", monitor: 60, price: 1599},
    {processor: "i5 10400F", ram: "HyperX 16GB", gpu: "RTX 2060", storage: 1, storageType: "SSD", monitor: 60, price: 1499},
    {processor: "i9 12900", ram: "Fury 8GB", gpu: "RTX 2060", storage: 4, storageType: "HDD", monitor: 60, price: 999},
    {processor: "ryzen 5 5600X", ram: "HyperX 8GB", gpu: "Radeon PRO W6400", storage: 4, storageType: "HDD", monitor: 60, price: 949}
];

// 1) Filtrar aquellos setUps que posean mas de 8GB de memoria RAM.
const resultado = setUps.filter( (setUps) => setUps.ram != "Fury 8GB" && setUps.ram != "HyperX 8GB")
console.log("filter () method: ", resultado)


// 2) Aplicar el 15% de descuento en el precio del setUp correspondiente al "processor: ryzen 9 5900X" y mostrar el nuevo "price".
const nuevoArray = setUps.map( (value) => {
    if(value.processor === "ryzen 9 5900X"){
        value.price = value.price - value.price * 0.15
        console.log(value)
    }
})



// 3) Ordenar de mayor a menor los setUps en funcion de su capacidad de almacenamiento o "storage".
const ordenar = setUps.sort( (firstElement, secondElement) => secondElement.storage - firstElement.storage);
console.log("sort() method: ", ordenar);


// 4) Mostrar por consola solo el valor de la frecuencia de "monitor" de todos los setUps.
setUps.forEach(hzs => {
    console.log(hzs.monitor)
});

console.log("-------------------------------------------------")

// 5) Venta al por mayor. Calcular el total de todos los precios o "price" multiplicados por 5.
setUps.forEach(hzs => {
    console.log(hzs.price * 5)
});


// 6) Encontrar el setUp cuya "gpu" sea "Radeon RX 6600".
const encontrarGPU = setUps.find( (element) => element.gpu === "Radeon RX 6600");
console.log("find() method: ", encontrarGPU);


// 7) Agregar una nueva propiedad a todos los setUps definida como: "stock: 10".
const mapSetup = setUps.map( (valor) => {
    return{
        processor: valor.processor,
        ram: valor.ram,
        gpu: valor.gpu,
        storage: valor.storage,
        storageType: valor.storageType,
        monitor: valor.monitor,
        price: valor.price,
        stock: 10
    }
});
console.log("map() method: ", mapSetup);

// 8) Filtrar los nuevos setUps del punto 7 cuyo precio sea mayor que 1500 y restar en 2 unidades el stock del setUp cuya gpu sea "RTX 3070 Ti".
const filtroPrecio = setUps.filter( (element) => element.price >= 1500);
console.log("filter() method: ", filtroPrecio);
