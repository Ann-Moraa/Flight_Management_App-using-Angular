import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(private http: HttpClient) { }

  getFlights(): Observable<any> {
    //return this.http.get<any>('/api/flights');
    const arrivingFlights = [
      { flightNumber: 'AA1234', origin: 'New York (JFK)', arrivalTime: '10:30 AM', status: 'On Time' },
      { flightNumber: 'BA4567', origin: 'London (LHR)', arrivalTime: '11:45 AM', status: 'Delayed' },
      { flightNumber: 'DL7890', origin: 'Los Angeles (LAX)', arrivalTime: '12:15 PM', status: 'On Time' },
    ];
  
    const departingFlights = [
      { flightNumber: 'UA2345', destination: 'San Francisco (SFO)', departureTime: '1:00 PM', status: 'On Time' },
      { flightNumber: 'CX5678', destination: 'Hong Kong (HKG)', departureTime: '1:30 PM', status: 'Delayed' },
      { flightNumber: 'AA9012', destination: 'Miami (MIA)', departureTime: '2:00 PM', status: 'On Time' },
    ];
  
    return of({ arriving: arrivingFlights, departing: departingFlights });
  }
  
  
}
