import { fromEvent, interval, Observer } from "rxjs"
import { map, skip, takeUntil, takeWhile } from "rxjs/operators";

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const boton = document.createElement('button');
boton.innerHTML = 'Detener timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
const clickBtn$ = fromEvent(boton, 'click')
    .pipe(
        skip(1)
    );

counter$
    .pipe(
        takeUntil(clickBtn$) //hasta que este observable emita su primer valor
    )
    .subscribe(
        observer
    )