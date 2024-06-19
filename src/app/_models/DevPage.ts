export interface DevPage {
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

export interface _DevPagesSearchResult {
	devPages : DevPage[];
	total    : number;
}