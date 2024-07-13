//
export type _SortDirection = 'asc' | 'desc' | '';
//
export const pagerotate: { [key: string]: _SortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export const compare = (v1: string | number | boolean, v2: string | number | boolean) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
