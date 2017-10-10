import {Component, Input, ElementRef, ViewChild, ContentChild, OnInit} from "@angular/core";
import {Http} from "@angular/http";


@Component({
    selector: 'icon',
    templateUrl: './svg-icon.html',
    styleUrls: ['./svg-icon.scss']
})

export class SvgIconComponent implements OnInit {

    @ViewChild("icon_container")
    container: ElementRef;

    ngOnInit(): void {
        this.http.get("http://localhost:4200/assets/images/eye.svg").toPromise().then(msg => {
            console.log(msg);
            this.view = msg.text();
            this.container.nativeElement.insertAdjacentHTML('beforeend', this.view);
        });

    }

    constructor(private elRef:ElementRef, private  http: Http) {}

    view: string;

    @Input()
    path: string;

    over() {
        this.container.nativeElement.querySelector('path').set
        console.error(this.container.nativeElement.querySelector('path').focus());

    }

}