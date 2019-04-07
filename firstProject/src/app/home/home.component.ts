import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../srrvices/logger.service";
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private logService: LoggerService) { }

  ngOnInit() {
  }

  logToService() {
   this.logToService.logger(msg: 'home')

  }

}
