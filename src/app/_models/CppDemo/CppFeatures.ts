export interface CppFeatures
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

export interface _CppFeaturesSearchResult {
    featurePages : CppFeatures[];
    total        : number;
}   

