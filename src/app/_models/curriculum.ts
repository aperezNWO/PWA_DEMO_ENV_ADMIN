export interface curriculum
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
//
export interface _CurriculumSearchResult {
	_curriculum : curriculum[];
	_total      : number;
}