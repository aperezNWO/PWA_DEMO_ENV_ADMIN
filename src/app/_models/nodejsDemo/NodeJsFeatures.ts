export interface NodeJsFeatures
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

export interface _NodeJsFeaturesSearchResult {
    featurePages : NodeJsFeatures[];
    total        : number;
}   

