import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arrivingFlights: any[] = [];

  departingFlights: any[] = [];

  constructor(private flightsService: FlightsService, private router: Router, public authService: AuthService) { }

  ngOnInit() {
    this.flightsService.getFlights().subscribe(response => {
      this.arrivingFlights = response.arriving;
      this.departingFlights = response.departing;
    });
  }


  navigateToLogin(): void {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
    }
    this.router.navigate(['/login']);
  }
  
  

}
