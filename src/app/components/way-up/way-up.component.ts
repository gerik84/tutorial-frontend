import {Component,  ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core'

@Component({
    selector: 'way-up',
    templateUrl: './way-up.html',
    styleUrls: ['./way-up.scss'],
    host: {'(window:scroll)': 'fixedNavbar()'}
})

export class WayUpComponent implements OnInit, AfterViewInit {

    constructor() {

    }

    ngAfterViewInit(): void {
        this.fixedNavbar();

    }
    ngOnInit(): void {
    }

    @ViewChild('wayUp')
    wayUp: ElementRef;

    fixedNavbar(force:boolean = false): void {
        // var top = this.wayUp.nativeElement.offsetTop;
        // var scrollTop = document.documentElement.scrollTop;
        // var height = document.documentElement.offsetHeight;
        // let el = document.getElementsByClassName('container')[0];
        // let s = el.getClientRects()[0];
        // console.log(s.width);
        // // alert(top);
        // // alert(height);
        // // if (!force && scrollTop > top + this.height) {
        // //     alert()
        // //     return;
        // // }
        // console.log(scrollTop);
        // let t = scrollTop;
        // console.log(t);
        // console.error(this.wayUp.nativeElement.style['top'] = t + "px");
        // this.wayUp.nativeElement.style.offsetTop =  height;
        // alert(this.wayUp.nativeElement.offsetTop);
        // this.fixClass = scrollTop >= top ? 'fixed-top' : '';



    }

}