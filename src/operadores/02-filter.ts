import { from, Observer, range } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const numeros10$ = range(10, 20)
    .pipe(
        filter(
            (valor, index) => {
                console.log({ index })
                return valor % 2 === 1 // se manda una condicion y cuando es true pasa
            }
        )
    );

numeros10$.subscribe(observer);

interface Personaje {
    tipo: string;
    nombre: string;
};

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

const obsVillano$ = from(personajes)
    .pipe(
        filter( // filtrar villano <Personaje>
            personaje => {
                return personaje.tipo === 'villano';
            }
        )
    )
    .pipe( // imprimir nombre <Personaje, string>
        pluck('nombre')
    );

obsVillano$.subscribe(observer);