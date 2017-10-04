import {Component, Renderer2, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core'
// import {style, animate, transition, state, trigger} from '@angular/animations'

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['navbar.component.scss']
    // host: {'(window:scroll)': 'fixedNavbar($event)'}
})

export class NavbarComponent implements AfterViewInit {

    @ViewChild('myIdentifier')
    myIdentifier: ElementRef;
    private height:number = 0;
    fixClass:string;
    cap:boolean  = false;

    constructor(private renderer: Renderer2, private elRef:ElementRef) {}

    ngAfterViewInit(): void {
        this.renderer.listen('window', 'scroll', (evt) => { this.fixedNavbar(); });
        this.height = this.myIdentifier.nativeElement.offsetHeight;
        this.fixedNavbar(true)
    }

    fixedNavbar(force:boolean = false): void {
        var top = this.elRef.nativeElement.offsetTop;
        var scrollTop = document.documentElement.scrollTop;
        // if (!force && scrollTop > top + this.height) {
        //     alert()
        //     return;
        // }
        this.cap =  scrollTop >= top;
        this.fixClass = scrollTop >= top ? 'fixed-top' : '';

    }

    openNav(): void {
        var el = document.getElementById('navbarSupportedContent');
        el.style.display = el.style.display == 'block' ? 'none' : 'block';
    }


}