import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppSettings } from './appsettings-models';

const SETTINGS_LOCATION = "assets/appsettings.json";

@Injectable({
    providedIn: 'root'
  })
export class AppSettingsService {
    constructor(private http: HttpClient) {
    }
    
    getSettings(): Observable<AppSettings> {
        return this.http.get<AppSettings>(SETTINGS_LOCATION);
    }
}
