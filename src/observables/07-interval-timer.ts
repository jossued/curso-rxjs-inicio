import { interval, timer} from 'rxjs';

const observer = {
    next: (val) => {console.log(val)},
    error: (error) => {console.error(error)},
    complete: () => {console.log('complete')},
}

const hoyEn5 = new Date(); // ahora
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

const interval$ = interval(1000); // emite cada cierto tiempo
const timer$ = timer(2000); // en un intervalo y se completa
const timer2$ = timer(2000, 1000); // crear un interval que inicia a los 2s 
const timerEn5$ = timer(hoyEn5); // emite un valor en 5s

console.log('inicio');
interval$.subscribe(observer); // 0 a infinito
timer$.subscribe(observer); // 0 a complete
timer2$.subscribe(observer); // 0 a infinito
timerEn5$.subscribe(observer); // 0 despues de 5 (como una alerta)
console.log('fin'); // el interval es asíncrono

