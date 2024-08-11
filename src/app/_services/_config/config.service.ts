import { Injectable                 } from '@angular/core';
import { HttpClient                 } from '@angular/common/http';
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
    return this.http.get(p_Path).toPromise()
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
  loadJsonist() {
    return this.http.get('./assets/config/_jsonList.json').toPromise()
      .then((data: any) => {
          //
          _environment.jsonList = data; // Assign loaded data to environment variable
          //
          _environment.jsonList.forEach((element: PageSetting) => {
             //console.log('Loading Page Setting' + element);
            _environment.pageSettingDictionary[element.f_Name] = element;
            _environment.pageSettingDictionary[element.f_Name]._environmentList = [];
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