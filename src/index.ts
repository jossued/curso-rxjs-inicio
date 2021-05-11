
const nombre = 'Jossué';
console.log(nombre);

import {Observable} from 'rxjs';

// const obs$ = Observable.create();
const obs$ = new Observable<string>(
    subs => {
        subs.next('Hola');
        subs.complete(); // manda que no se va a emitir nada
        subs.next('Hola 2');
    }
);

obs$.subscribe(
    console.log
)



