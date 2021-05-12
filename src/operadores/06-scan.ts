import { from, fromEvent, interval, Observer } from "rxjs";
import { map, reduce, scan, take, tap } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];
const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce
from(numeros)
    .pipe(
        reduce(totalAcumulador, 0) // una sola emision 15
    )
    .subscribe(observer)

// Scan
from(numeros)
    .pipe(
        scan(totalAcumulador, 0) // emite cada suma 1 3 6 10 15
    )
    .subscribe(observer)

// Redux

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {
        id: 'jsd',
        autenticado: false,
        token: null,
    },
    {
        id: 'jsd',
        autenticado: true,
        token: 'asd',
    },
    {
        id: 'jsd',
        autenticado: true,
        token: 'asd12345',
    },
]

const state$ = from(user)
    .pipe(
        scan<Usuario>(
            (acc, cur) => {
                return { ...acc, ...cur } // retorna el mismo objeto cambiando su estado
            }, { edad: 33 }
        ),
    );

const ids$ = state$.pipe(
    map(state => state.autenticado)
)

ids$.subscribe(observer)