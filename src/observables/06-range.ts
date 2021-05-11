import {range, Observer, asyncScheduler} from 'rxjs';

const src1$ = range(-1,5);
const src2$ = range(5);
const src3$ = range(1,5, asyncScheduler);

console.log('inicio');
src1$.subscribe(console.log); // -1..3
src2$.subscribe(console.log); // 0..4
src3$.subscribe(console.log); // asíncrono 1..5
console.log('fin');
