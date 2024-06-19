export interface DevPage {
	id               : number;
	done             : boolean;
	name             : string;
    description      : string;
    framework        : string;
	frameworkVersion : string;
    uixFramework     : string;    
    urlPage          : string;
	urlRepo          : string;
}

export interface _DevPagesSearchResult {
	devPages : DevPage[];
	total    : number;
}