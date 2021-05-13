import { from, fromEvent, interval, Observer, of } from "rxjs"
import { distinct, map, skip, takeUntil, takeWhile } from "rxjs/operators";

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const numeros$ = of(1,1,1,3,3,2,2,4,4,5,3,1);

numeros$.pipe(
    distinct() // hace un === y no emite repetidos
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
    distinct(p => p.nombre) // el distinct por si solo no comprueba objetos, hay que poner el valor
)
.subscribe(observer);