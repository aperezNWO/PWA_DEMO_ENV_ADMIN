import { Injectable                 } from '@angular/core';
import { HttpClient, HttpHeaders                 } from '@angular/common/http';
import { _environment               } from '../../../environments/environment';
import { PageSetting                } from '../../_models/common/common';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  constructor(protected http: HttpClient) 
  {

  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadJsonData(p_Path: string, array : string[]) {

    const headers = new HttpHeaders({
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    });
  
    const cacheBuster = Date.now(); // Use current timestamp
    p_Path = p_Path + `?cacheBuster=${cacheBuster}&format=json`;
    
    console.log('load json data from ' + p_Path);

    return this.http.get(p_Path,/* { headers } */).toPromise()
      .then((data: any) => {
          //
          data.forEach((element: any) => {
            //
            array.push(element);
          });
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
  }  
  //
  loadJsonist() {
    return this.http.get('./assets/config/_jsonList.json').toPromise()
      .then((data: any) => {
          //
          _environment.jsonList = data; // Assign loaded data to environment variable
          //
          _environment.jsonList.forEach((element: PageSetting) => {
               _environment.pageSettingDictionary[element.f_Name] = element;
          });
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadUsersData() {
    return this.http.get('./assets/config/_UsersInfo.json').toPromise()
      .then((data: any) => {
          //
          ////console.log("loading users..." + JSON.stringify(data));
          //
          _environment.usersList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading users:', error);
      });
  }
  //
  loadPagesInfoData() {
    return this.http.get('./assets/config/_PagesInfo.json').toPromise()
      .then((data: any) => {
          //
          ////console.log("loading routes data..." + JSON.stringify(data));
          //
          _environment.routesList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading routes dada...', error);
      });
  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadConfig() {
    return this.http.get('./assets/config/_config.json').toPromise()
      .then((data: any) => {
          //
          ////console.log("loading configuration..." + JSON.stringify(data));
          //
          _environment.externalConfig = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
  }
  //
  getConfigValue(key: string) {
    //
    let jsonData : string = JSON.parse(JSON.stringify(_environment.externalConfig))[key];
    //
    //console.log(jsonData);
    //
    ////console.log('Reading config : ' + key + ', value :' + jsonData)
    //
    return jsonData;
  }
}