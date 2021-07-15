import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AppSettingsService } from './appsettings.service';
import { Guitar } from './guitar-models';

@Injectable({
  providedIn: 'root'
})
export class GuitarsService {

  constructor(private http: HttpClient, private appSettings: AppSettingsService) { }

  getAll(): Observable<Guitar[]> {
    return this.appSettings.getSettings()
      .pipe(
        mergeMap(settings => this.http.get<Guitar[]>(settings.allGuitarsUrl))
    );
  }
}
