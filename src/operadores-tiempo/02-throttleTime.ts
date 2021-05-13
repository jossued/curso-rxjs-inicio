import { asyncScheduler, from, fromEvent, interval, Observer, of } from "rxjs"
import { debounce, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, map, pluck, skip, takeUntil, takeWhile, throttleTime } from "rxjs/operators";

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const input = document.createElement('input');

document.querySelector('body').append(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(
    throttleTime(400, asyncScheduler, {
        leading: true,
        trailing: true,
    }), // sirve para recomendaciones al usuario por ejemplo el motor de busquedas cuando presionas g
    // emite de a poco c.. coc... coca... coca col... conforme se escribe
    pluck('target', 'value'),
    distinctUntilChanged() // para que el valor no se emita multiples veces
)
.subscribe(observer);