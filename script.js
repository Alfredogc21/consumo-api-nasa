//Si es diferente a GET, se debe especificar el método
// fetch(API_URL, {
//     method: 'POST',
// })

// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5

const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15";

// ************ Consumir la API de la NASA con async y await ************
async function listarImagenes() {
    try {
        let fetchResponse = await fetch(API_URL);
        let datosImagenes = await fetchResponse.json();

        console.log(datosImagenes);

        datosImagenes.forEach(element => {
            let card = document.querySelector('[data-ul]');
            let contenido = `
                <li class="card">
                    <img class="card__image" src="${element.url}" alt="imagen">
                    <h3 class="card__title">${element.title}</h3>
                </li>
            `;
            card.innerHTML += contenido;
        });

    } catch (error) {
        console.log(error);
    }
}

listarImagenes();



// ************ Consumir la API de la NASA con .then y .catch ************
// function listarImagenes() {
//     fetch(API_URL)
//         .then(response => response.json()) //Convierte la respuesta de json a objeto
//         .then(datosImagenes => {
//             console.log(datosImagenes);

//             const card = document.querySelector('[data-ul]');

//             datosImagenes.forEach(elemento => {
//                 const contenido = `
//                  <li class="card">
//                     <img class="card__image" src="${elemento.url}" alt="imagen">
//                     <h3 class="card__title">${elemento.title}</h3>
//                 </li>
//                 `;
//                 card.innerHTML += contenido;
//             });
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }

// listarImagenes();




