import { from, Observer, range } from 'rxjs';
import { filter, map, pluck, tap } from 'rxjs/operators';

const observer: Observer<any> = {
    next: valor => console.log({ valor }),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const numeros5$ = range(1, 5)
    .pipe( // tap sirve para debuggear, no transforma
        tap(x => console.log('tap antes', x)),
        map(x => x * 10),
        tap({
            next: valor => console.log('tap despues', valor),
        }),
    )

numeros5$.subscribe(observer);