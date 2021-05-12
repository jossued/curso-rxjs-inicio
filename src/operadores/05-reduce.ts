import { fromEvent, interval, Observer } from "rxjs";
import { map, reduce, take, tap } from "rxjs/operators";

const numbers = [1, 2, 3, 4, 5];
const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
}

const total = numbers.reduce(totalReducer, 0);
console.log({ total });

interval(1000)
    .pipe(
        take(4), // toma los 4 primeros 0, 1, 2, 3
        reduce(totalReducer, 5) // le suma el take al valor inicial
    )
    .subscribe(
        observer
    )