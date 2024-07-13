export interface NodeJsConfig {
	id               : number;
	done             : boolean;
	name             : string;
    description      : string;
    framework        : string;
	FrameworkUrl     : string;
	frameworkVersion : string;
    urlDemo          : string; 
	urlRepo          : string;
	urlBackend       : string;     
    urlEndPoint      : string;
}

export interface _NodeJsConfigSearchResult {
	NodeJsPageList : NodeJsConfig[];
	total          : number;
}