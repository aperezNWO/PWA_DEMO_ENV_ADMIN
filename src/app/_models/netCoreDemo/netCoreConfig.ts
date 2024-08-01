export interface NetCoreConfig
{
    id               : number;
    done             : boolean;
    name             : string;
    description      : string;
    framework        : string;
    keywords         : string;
    urlDemo          : string;
    urlRepo          : string;
    urlBackend       : string;
    urlHosting       : string;
    userName         : string;
    password         : string;
}

export interface _NetCorConfigSearchResult {
    netcoreConfigPages : NetCoreConfig[];
    total              : number;
}   

