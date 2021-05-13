import { from, fromEvent, interval, Observer, of } from "rxjs"
import { debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, map, pluck, skip, takeUntil, takeWhile } from "rxjs/operators";

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    debounceTime(1000), // espera un segundo antes de emitir lo que escribe el usuario en el input
    pluck('target', 'value'),
    distinctUntilChanged() // para que el valor no se emita multiples veces
)
.subscribe(observer);