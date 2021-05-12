import { from, fromEvent, interval, Observer, of } from "rxjs";
import { map, reduce, scan, take, tap } from "rxjs/operators";

const numeros$ = of(1, 2, 3, 4, 5);
const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

numeros$
    .pipe(
        tap(console.log),
        take(3) // toma 3 emisiones y haec un complete
    )
    .subscribe(observer);