import { of, from, Observer } from 'rxjs';

// of toma argumentos de una secuencia
// from crea a partir de un array, promise, iterable, observable

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

// const source$ = from([1,2,3]); // 1, 2, 3
// const source2$ = of(...[1,2,3]); // 1, 2, 3
// source$.subscribe(observer);

// peticion ajax
const source$ = from(fetch('https://api.github.com/users/jossued')); //

source$.subscribe(async (resp) => {
    const dataRespuesta = await resp.json();
    console.log(dataRespuesta);
});

// Iteradores
const miGenerador = function*() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

from(miIterable).subscribe(observer);