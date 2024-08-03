import { BaseModel } from "../common/common";

export interface NetCoreConfig extends BaseModel
{
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

