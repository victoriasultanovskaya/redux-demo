import {Component} from '@angular/core';
import {NgRedux, select} from 'ng2-redux';
import {IAppState} from './store';
import {INCREMENT} from './actions';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Redux';
    @select('counter') count;
    @select(['messaging', 'newMessages']) newMessages;
    @select( (s: IAppState) => { s.messaging.newMessages } ) newMwssagesCount;

    constructor(private ngRedux: NgRedux<IAppState>) {
    }

    increment() {
        // this.counter++;
        this.ngRedux.dispatch({type: INCREMENT});
    }
}
