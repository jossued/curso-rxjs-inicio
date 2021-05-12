import { of, Observer, fromEvent } from "rxjs";
import { tap, take, first, map } from "rxjs/operators";

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const click$ = fromEvent<MouseEvent>(document, 'click');

click$
    .pipe(
        tap(() => console.log('tap')),
        map(
            ({clientX, clientY}) => ({clientX, clientY})
        ),
        first(
            (event) => {
                return event.clientY >= 150;
            }
        ) // toma el primero que cumpla
    )
    .subscribe(observer);