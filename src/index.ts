import { Observer, of } from "rxjs";
import { ajax, AjaxError } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";

const url = 'https://api.github.com/users1?per_page=5';
const observer: Observer<any> = {
    next: valor => console.log({valor}),
    error: error => console.error({error}),
    complete: () => console.info('completado')
}

ajax(url)
.pipe(
    map(r => r.response),
    catchError(
        (err: AjaxError) => {
            console.warn('error en:', err.message);
            return of({});
        }
    )
)
.subscribe(observer);