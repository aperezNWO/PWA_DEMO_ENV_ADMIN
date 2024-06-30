import { Injectable   } from '@angular/core';
import { HttpClient   } from '@angular/common/http';
import { _environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  constructor(protected http: HttpClient) 
  {

  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadConfig() {
    return this.http.get('./assets/config.json').toPromise()
      .then((data: any) => {
          //
          console.log("loading configuration..." + data);
          //
          _environment.externalConfig = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadFeaturesData() {
    return this.http.get('./assets/angular_featuresPagesLists.json').toPromise()
      .then((data: any) => {
          //
          console.log("loading features data ..." + data);
          //
          _environment.featuresPagesList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
   }
   // ONLY HAPPENS ONCE ON APPMODULE LOADING
   loadDevPages() {
    return this.http.get('./assets/angular_devPagesList.json').toPromise()
      .then((data: any) => {
          //
          console.log("loading mainPagesList data ..." + data);
          //
          _environment.devPagesList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadCurriculumData() {
  return this.http.get('./assets/angular_curriculum.json').toPromise()
    .then((data: any) => {
        //
        console.log("loading curriculum data ..." + data);
        //
        _environment.curriculumList = data; // Assign loaded data to environment variable
    })
    .catch(error => {
      console.error('Error loading curriculum:', error);
    });
  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadMarketing() {
    return this.http.get('./assets/marketing.json').toPromise()
      .then((data: any) => {
          //
          console.log("loading marketing data ..." + data);
          //
          _environment.marketingList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading marketing data:', error);
      });
  }
  //
  getConfigValue(key: string) {
    //
    let jsonData : string = JSON.parse(JSON.stringify(_environment.externalConfig))[key];
    //
    console.log(jsonData);
    //
    console.log('Reading config : ' + key + ', value :' + jsonData)
    //
    return jsonData;
  }
}