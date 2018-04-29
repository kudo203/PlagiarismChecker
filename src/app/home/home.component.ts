import {Component, HostBinding, OnInit} from '@angular/core';
import {ResetHomeService} from '../reset-home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
   title = 'Welcome';
   constructor(private resetHomeService:  ResetHomeService) {
   }

   ngOnInit() {
     this.resetHomeService.change.subscribe( () => {
       this.reset();
     });
   }

   reset() {
     this.title = 'Welcome To Plagiarism Checker';
   }
}
