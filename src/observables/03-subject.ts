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
            }, 1000
        );

        return () => {
            clearInterval(intervalID);
            console.log('intervalo destruido');
        }
    }
)
/*
    1. Casteo multiple
    2. También es un observer
    3. Next, error y complete
*/

const subject$ = new Subject();

const subsIntervalSubject = intervalo$.subscribe(subject$);

// const subs1 = intervalo$.subscribe ( rnd => console.log('subs1', rnd))
// const subs2 = intervalo$.subscribe ( rnd => console.log('subs2', rnd))

const subs1 = subject$.subscribe ( observer );
const subs2 = subject$.subscribe ( observer );

setTimeout(
    () => {
        subject$.next(10);
        subject$.complete();
        subsIntervalSubject.unsubscribe();
    },
    4000
)