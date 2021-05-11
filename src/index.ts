import {Observable, Observer, Subscriber} from 'rxjs';

const observer: Observer<any> = {
    next: valor => console.log(valor),
    error: error => console.error(error),
    complete: () => console.info('completado')
}

const intervalo$ = new Observable<number>(
    // se crea un contador 1 2 3... 
    subscriber => {
        let i = 0;
        
        const intervalo = setInterval (
            () => {
                i ++;
                subscriber.next(i);
            }, 1000
        );

        return () => {
            clearInterval(intervalo);
            console.log('Intervalo destruido');
        }
    }
)

const subscription = intervalo$.subscribe( num => console.log('Num:', num));
const subscription2 = intervalo$.subscribe( num => console.log('Num:', num));

setTimeout(
    () => {
        subscription.unsubscribe()
        subscription2.unsubscribe()
    }, 3000 
)