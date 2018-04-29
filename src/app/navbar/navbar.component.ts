import {Component, HostListener} from '@angular/core';
import {ResetHomeService} from '../reset-home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
   constructor( private resetHomeService: ResetHomeService) {
   }

  reset() {
     this.resetHomeService.resetHome();
   }
}
