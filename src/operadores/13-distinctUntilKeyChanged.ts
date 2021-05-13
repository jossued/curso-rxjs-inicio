import { from, fromEvent, interval, Observer, of } from "rxjs"
import { distinct, distinctUntilChanged, distinctUntilKeyChanged, map, skip, takeUntil, takeWhile } from "rxjs/operators";

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'a'
    },
    {
        nombre: 'Yo'
    },
    {
        nombre: 'Yo'
    },
    {
        nombre: 'Tu'
    },
    {
        nombre: 'a'
    },
    {
        nombre: 'Octopus'
    },
    {
        nombre: 'Zero'
    },
];

from(personajes)
    .pipe(
        distinctUntilKeyChanged('nombre') // key del objeto
    )
    .subscribe(observer);