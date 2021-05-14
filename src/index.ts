import { fromEvent, Observable, Observer, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from "rxjs/operators";
import { Item } from "./interfaces/github-item.interface";
import { GithubUsersResp } from "./interfaces/github-users.interface";

const observer: Observer<any> = {
    next: valor => console.log({ valor }),
    error: error => console.error({ error }),
    complete: () => console.info('completado')
}

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

// Helpers
const mostrarUsuarios = (usuarios: Item[]) => {
    for (const usuario of usuarios) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'ver';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login);
        li.append(anchor);

        orderList.append(li);
    }
}

input$
    .pipe(
        debounceTime<KeyboardEvent>(500),
        pluck<KeyboardEvent, string>('target', 'value'),
        map<string, Observable<GithubUsersResp>>(value => ajax.getJSON(
            `https://api.github.com/search/users?q=${value}`)
        ),
        mergeAll<GithubUsersResp>(),
        pluck<GithubUsersResp, Item[]>('items')
    )
    .subscribe(mostrarUsuarios);