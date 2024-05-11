// Ejemplo de código sincrono y asincrono

// Sincrono

//  function cuatro () {
//     console.log("cuatro")
// }

// function tres () {
//     console.log("tres")
//     cuatro()
// }

// function dos () {
//     console.log("dos")
//     tres()
// }

// function uno () {
//     console.log("uno")
//     dos()
// }

// uno()



// Asincrono
function uno (dos) {
    console.log("uno")
    dos()
}

function dos () {
    console.log("dos")
}

setTimeout(() => uno(dos), 5000);
