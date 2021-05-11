import { asyncScheduler } from 'rxjs';

// setTimeout
// setInterval

// Timeout
const saludar = () => console.log('Hola');
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

asyncScheduler.schedule(saludar2, 2000, 'Jossue'); // la def de la fn, num ms, objeto

// Interval
const subs = asyncScheduler.schedule(function(state){
    console.log({state});
    this.schedule(state + 1, 1000); // volver a ejecutar luego de un intervalo
}, // funcion
3000, // ms
0   // objeto estado
) 

// setTimeout(
//     () => {
//         subs.unsubscribe();
//     }, 6000
// )

asyncScheduler.schedule(()=>subs.unsubscribe(), 6000);