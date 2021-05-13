import { fromEvent, Observer } from "rxjs"
import { map, takeWhile } from "rxjs/operators";

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    map(
        ({x, y}) => ({x, y})
    ),
    takeWhile(
        ({y}) => y <= 150, // emite mientras se cumpla la condición
        true //emite el que completa el observable
    )
)
.subscribe(observer);