export interface AngularConfig {
	id               : number;
	done             : boolean;
	name             : string;
    description      : string;
    framework        : string;
	FrameworkUrl     : string;
	frameworkVersion : string;
    uixFramework     : string; 
	uixFrameworkUrl  : string;     
    urlPage          : string;
	urlRepo          : string;

}

export interface _AngularConfigSearchResult {
	devPages : AngularConfig[];
	total    : number;
}