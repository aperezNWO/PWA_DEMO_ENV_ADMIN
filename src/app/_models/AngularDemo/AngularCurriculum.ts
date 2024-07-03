export interface AngularCurriculum
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
//
export interface _AngularCurriculumSearchResult {
	_curriculum : AngularCurriculum[];
	_total      : number;
}