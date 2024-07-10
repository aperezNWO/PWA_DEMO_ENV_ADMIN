export interface NodeJsConfig {
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

export interface _NodeJsConfigSearchResult {
	devPages : NodeJsConfig[];
	total    : number;
}