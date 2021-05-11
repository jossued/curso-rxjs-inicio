
const nombre = 'Jossué app';
console.log(nombre);

import {Observable, Observer} from 'rxjs';

// const obs$ = Observable.create();
const obs$ = new Observable<string>(
    subs => {
        subs.next('Hola');
        subs.complete(); // manda que no se va a emitir nada
        subs.next('Hola 2');
    }
);

// obs$.subscribe(
//     console.log
// )

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

obs$.subscribe(
    valor => console.log('next:', valor),
    error => console.error('error:', error),
    () => console.info('completado'),
)

obs$.subscribe(observer);


