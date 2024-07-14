export interface NodeJsConfig {
	id               : number;
	done             : boolean;
	name             : string;
    description      : string;
    framework        : string;
    urlDemo          : string; 
	urlRepo          : string;
	urlBackend       : string;     
    urlEndPoint      : string;
}

export interface _NodeJsConfigSearchResult {
	NodeJsConfigPageList : NodeJsConfig[];
	total                : number;
}