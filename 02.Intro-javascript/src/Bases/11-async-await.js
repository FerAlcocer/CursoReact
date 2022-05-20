

// const getImagenPromesa = () => {
//     // const promesa = new Promise( ( resolve, reject) =>{
//     //     resolve('https://asjdhkajsdhjk.com')
//     // })

//     // return promesa;


// }

// const getImagenPromesa = () => 
//    new Promise( resolve =>
//         resolve('https://asjdhkajsdhjk.com'))


// getImagenPromesa().then( console.log );

const getImagen = async() => {

    try {
        
    const apiKey = 'ynUKNJ5MoTORW6UlwRFAn0OjWbkQrpUh';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const { data } = await resp.json();

    const{ url } = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );


    } catch (error){
        //manejo del error
       console.error(error)
    }
}
getImagen();