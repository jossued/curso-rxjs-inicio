import {Observable, Observer, Subject, Subscriber} from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(
    subs => {
        const intervalID = setInterval(
            () => {
                subs.next( Math.random() )
            }, 3000
        );

        return () => clearInterval(intervalID);
    }
)
/*
    1. Casteo multiple
    2. También es un observer
    3. Next, error y complete
*/

const subject$ = new Subject();

intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe ( rnd => console.log('subs1', rnd))
// const subs2 = intervalo$.subscribe ( rnd => console.log('subs2', rnd))

const subs1 = subject$.subscribe ( rnd => console.log('subs1', rnd))
const subs2 = subject$.subscribe ( rnd => console.log('subs2', rnd))