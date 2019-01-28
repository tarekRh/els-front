import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Salaried } from "../models/salaried.model";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SalariedService {
  constructor(private httpClient: HttpClient) {}

  filterSalariesByAttribute(attribute: string): Observable<Array<Salaried>> {
    return this.httpClient.get<Salaried[]>(
      environment.backendurl + "?attribute=" + attribute
    );
  }
}
