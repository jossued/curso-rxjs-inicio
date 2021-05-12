import { range, Observer, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map(event => event.code)
)

const keyupPluck$ = keyup$.pipe(
    pluck('target', 'baseURI') // accede al objeto como un json: "target"."baseURI"
);

const keyupMapTo$ = keyup$.pipe(
    mapTo('tecla presionada') // accede al objeto como un json: "target"."baseURI"
);

keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
keyupMapTo$.subscribe(code => console.log('mapTo', code));