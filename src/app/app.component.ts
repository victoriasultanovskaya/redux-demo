import {Component} from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import {IAppState} from './store';
import {INCREMENT} from './actions';
import {Map} from 'immutable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Redux';
    @select(s => s.get('counter')) count; //state.get('counter')

    constructor(private ngRedux: NgRedux<Map<string, any>>) {
    }

    increment() {
        // this.counter++;
        this.ngRedux.dispatch({type: INCREMENT});
    }
}
