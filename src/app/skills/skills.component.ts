import {Component, OnInit} from '@angular/core';
import {faFlag, faList} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    listIcon = faList;
    flagIcon = faFlag;

    constructor() {
    }

    ngOnInit(): void {
    }

}
