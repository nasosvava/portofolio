import {AfterViewInit, Component, OnInit} from '@angular/core';
import {faFacebook, faLinkedin, faGithub, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import {NavigationEnd, Event, Router} from "@angular/router";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


declare var anime: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'my-port';
    public facebookIcon = faFacebook;
    public linkedinIcon = faLinkedin;
    public githubIcon = faGithub;
    public stackoverflowIcont = faStackOverflow;
    public arrowRightIcon = faArrowRight;

    public currentRoute: string;

    constructor(private router: Router) {
        this.currentRoute = "";
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.currentRoute = event.url;
            }
        });
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let textWrapper: any = document.querySelector('.an-2');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
            .add({
                targets: '.an-2 .letter',
                opacity: [0,1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el: any, i: any) => 150 * (i+1)
            }).add({
            targets: '.an-2',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        })
    }

    downloadMyFile(){
        const link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', 'https://drive.google.com/file/d/14LeeN5oB5HNOG_HKTXss1SMA0rT9miJW/view?usp=share_link');
        link.setAttribute('download', `CV_Vavatsikos.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}


