import { Injectable                 } from '@angular/core';
import { HttpClient                 } from '@angular/common/http';
import { _environment               } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  constructor(protected http: HttpClient) 
  {

  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadConfig() {
    return this.http.get('./assets/config/_config.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading configuration..." + JSON.stringify(data));
          //
          _environment.externalConfig = data; // Assign loaded data to environment variable
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
          //console.log("loading users..." + JSON.stringify(data));
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
          //console.log("loading routes data..." + JSON.stringify(data));
          //
          _environment.routesList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading routes dada...', error);
      });
  }
   // ONLY HAPPENS ONCE ON APPMODULE LOADING
   loadCppDemoData() {
    return this.http.get('./assets/cppDemo/cpp_Demos.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading cpp demo data ..." + JSON.stringify(data));
          //
          _environment.cppDemoList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading cppDemo data :', error);
      });
   }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadNodeJsConfigData() {
    return this.http.get('./assets/nodejsDemo/nodejs_Config.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading NodeJs config data ..." + JSON.stringify(data));
          //
          _environment.NodeJsConfigList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading NodeJs config data :', error);
      });
    }
   
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadNodeJsDemoData() {
    return this.http.get('./assets/nodejsDemo/nodejs_Demos.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading NodeJs demo data ..." + JSON.stringify(data));
          //
          _environment.NodeJsDemosList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading Nodejs demo data :', error);
      });
    }
   // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadAngularDemoData() {
    return this.http.get('./assets/angularDemo/angular_Demos.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading angular demo data ..." + JSON.stringify(data));
          //
          _environment.AngularDemosList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading configuration:', error);
      });
   }
   // ONLY HAPPENS ONCE ON APPMODULE LOADING
   loadAngularConfigData() {
    return this.http.get('./assets/angularDemo/angular_Config.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading angular config data ..." + JSON.stringify(data));
          //
          _environment.AngularConfigList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading angular configuration data :', error);
      });
  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadAngularCurriculumData() {
  return this.http.get('./assets/angularDemo/angular_Curriculum.json').toPromise()
    .then((data: any) => {
        //
        //console.log("loading angular curriculum data ..." + JSON.stringify(data));
        //
        _environment.AngularCurriculumList = data; // Assign loaded data to environment variable
    })
    .catch(error => {
      console.error('Error loading angular curriculum data:', error);
    });
  }
  // ONLY HAPPENS ONCE ON APPMODULE LOADING
  loadMarketingData() {
    return this.http.get('./assets/marketing/marketing.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading marketing data ..." + JSON.stringify(data));
          //
          _environment.marketingList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading marketing data:', error);
      });
  }
  //
  loadNetCoreDemoData() {
    return this.http.get('./assets/netCoreDemo/netcore_demos.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading net core demo data ..." + JSON.stringify(data));
          //
          _environment.netCoreDemoList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading net core demo data:', error);
      });
  }
  //
  loadNetCoreConfigData() {
    return this.http.get('./assets/netCoreDemo/netcore_config.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading net core demo config data ..." + JSON.stringify(data));
          //
          _environment.netCoreConfigList = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading net core demo  config data:', error);
      });
  }
  //
  loadNetCoreConfigData_base() {
    return this.http.get('./assets/netCoreDemo/netcore_config_base.json').toPromise()
      .then((data: any) => {
          //
          //console.log("loading net core demo config data ..." + JSON.stringify(data));
          //
          _environment.netCoreConfigList_base = data; // Assign loaded data to environment variable
      })
      .catch(error => {
        console.error('Error loading net core demo  config data:', error);
      });
  }
  //
  getConfigValue(key: string) {
    //
    let jsonData : string = JSON.parse(JSON.stringify(_environment.externalConfig))[key];
    //
    console.log(jsonData);
    //
    //console.log('Reading config : ' + key + ', value :' + jsonData)
    //
    return jsonData;
  }
}