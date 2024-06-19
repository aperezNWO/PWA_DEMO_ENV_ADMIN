export interface FeaturePage
{
    id               : number;
    done             : boolean;
    name             : string;
    description      : string;
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