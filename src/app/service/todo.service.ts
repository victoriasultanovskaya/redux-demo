import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {IAppState} from '../store';
import {NgRedux} from 'ng2-redux';

@Injectable()
export class TodoService {
    private readonly url = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http: Http, private ngRedux: NgRedux<IAppState>) {
    }

    loadTodos() {
        this.ngRedux.dispatch({type: 'FETCH_TODOS_REQUEST'});
        this.http.get(this.url).subscribe(todos => {
            this.ngRedux.dispatch({type: 'FETCH_TODOS_SECCESS'});
        }, err => {  });
    }

    addTodo(todo) {
        return this.http.post(this.url, todo);
    }

}
