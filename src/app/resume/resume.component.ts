import { Component, OnInit } from '@angular/core';
import {faBriefcase, faBuildingColumns} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  public briefcaceIcon = faBriefcase;
  public universityIcon = faBuildingColumns;



  constructor() { }

  ngOnInit(): void {
  }
}
