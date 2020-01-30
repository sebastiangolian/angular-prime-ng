import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'angular-prime-ng';
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'Home', routerLink: 'home'},
            {label: 'Form', routerLink: 'page-form'},
            {label: 'Table', routerLink: 'page-table'}
        ];
    }
}
