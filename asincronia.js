/*function sayHello(n) {
    console.log("Saludo",n);
}

function sayHelloDelay(n) {
    setTimeout(function () {                           //recibe un callback
        console.log("Saludo demorado")
    },500)                                             // el tiempo segundo parametro el ms
    
}

sayHelloDelay(1)
sayHello(1)
sayHello(2)
*/

/*function sumar(acumulado, valor, callback) {
    let total
    setTimeout(function () {
        total = acumulado + valor
        callback(total)
    },100)
   // let total = acumulado + valor
}*/

/*
acumulado = sumar(acumulado, 2)                   //normal|
acumulado = sumar(acumulado, 2)                           |
console.log('El total es ', acumulado)                    |
*/

/*sumar(0, 2, function (acumulado) {                  //callback|
    sumar(acumulado, 5, function (acumulado) {                  |
        console.log(acumulado);                                 |
    })
})*/

let acumulado = 0;

async function sumarPromise(acumulado, valor) {                  // Palabra clave async
  return new Promise(function (resolve, reject) {                  //cada parametro es una funcion en si
    if (valor == 5) return reject("No me gustan los 5");       //reject es la razon que se entrega de porque se rompio la promesa

    const total = acumulado + valor;
    resolve(total);
  });
}
async function main(){
    try {
      let total = await sumarPromise(0,2)
      total = await sumarPromise(total,5)
       console.log(total);
    } catch(error){
        console.log(error);
    }
    
}

//main()

/*main().catch(function (error) {      //una manera de hacer el catch
    console.log(error);
})*/


/*
sumarPromise(acumulado, 2)
  .then(function (total) {
    //then = entonces
    return sumarPromise(total, 5);
  })
  .then(function (total) {
    console.log(total);
  })
  .catch(function (error) {
    console.log(error);
  });
*/

/*fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => console.log(json))*/


      async function getData() {
                   // await --> espera el link
        const data = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const dataJson = await data.json()

        console.log(dataJson.id);
      }

      getData()
