export interface netCoreDemo
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
}

export interface _NetCoreDemoSearchResult {
    netcoreDemoPages : netCoreDemo[];
    total            : number;
}   

