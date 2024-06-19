export interface FeaturePage
{
    id               : number;
    done             : boolean;
    name             : string;
    descripcion      : string;
    framework        : string;
    keywords         : string;
    urlDemo          : string;
    urlRepo          : string;
    urlCurriculum    : string;
}

export interface _FeaturePagesSearchResult {
	featurePages : FeaturePage[];
	total        : number;
}