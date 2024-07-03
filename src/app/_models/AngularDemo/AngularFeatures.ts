export interface AngularFeatures
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

export interface _AngularFeaturesSearchResult {
	featurePages : AngularFeatures[];
	total        : number;
}