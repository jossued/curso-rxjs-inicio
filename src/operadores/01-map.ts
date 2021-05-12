import { range, Observer, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const subs$ = 
    range(1,5)
    .pipe(
        // map recibe y devuelve un valor
        map<number,string>( // tipar el map
            (valor) => {
                return (valor*10).toString();
            }
        )
    );

subs$.subscribe(observer);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
)

keyupCode$.subscribe(code => console.log(code));