import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Medication {
  id: number;
  name: string;
  activeSubstance: string;
  doseMg: number;
  prescriptionRequired: boolean;
  manufacturer: string;
}

@Injectable({
  providedIn: 'root'
})
export class PharmacyService {

  private readonly apiUrl = 'https://localhost:7083/Medication';

  constructor(private http: HttpClient) { }

  getMedications(): Observable<Medication[]> {
    return this.http.get<Medication[]>(this.apiUrl);
  }
}
