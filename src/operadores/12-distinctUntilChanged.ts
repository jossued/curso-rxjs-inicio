import { from, fromEvent, interval, Observer, of } from "rxjs"
import { distinct, distinctUntilChanged, map, skip, takeUntil, takeWhile } from "rxjs/operators";

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const numeros$ = of(1, 1, 1, 3, 3, 2, 2, 4, 4, 5, 3, 1);

numeros$.pipe(
    distinctUntilChanged() // verifica repetidos sucesivos
).subscribe(observer);

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
        distinctUntilChanged((ant, act) => ant.nombre === act.nombre) // usa el condicional en objetos
    )
    .subscribe(observer);