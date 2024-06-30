export interface marketing
{
    id               : number;
    done             : boolean;
    name             : string;
    category         : string;
    description      : string;
    urlPage          : string;
}
//
export interface _MarketingSearchResult {
	_marketing  : marketing[];
	_total      : number;
}