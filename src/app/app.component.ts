import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flight_management_app_angular';

  constructor(private router: Router) {}

  
navigateToLogin() {
  this.router.navigate(['/login']);
}


navigateToDashboard() {
  this.router.navigate(['/dashboard']);
}

}
