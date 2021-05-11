import {of} from 'rxjs';

// const obs$ = of<number> (...[1,2,3,4,5,6], 2, 3);
const obs$ = of ([1,2], {a:1}, ()=>{}, true, Promise.resolve(true));
// el of convierte cualquier secuencia de valores en un observable

console.log('inicio del obs$');
obs$.subscribe(
    next => console.log('next', next),
    console.error,
    ()=> console.log('completado')    
);
console.log('fin del obs$');
