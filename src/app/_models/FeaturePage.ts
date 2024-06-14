export interface FeaturePage
{
    id               : number;
    descripcion      : string;
    framework        : string;
    keywords         : string;
    urlDemo          : string;
    urlRepo          : string;
}

export interface _FeaturePagesSearchResult {
	featurePages : FeaturePage[];
	total        : number;
}