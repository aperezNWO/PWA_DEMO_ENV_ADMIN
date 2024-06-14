import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { FeaturePage                                } from '../_models/FeaturePage';

export type _FeaturePageSortColumn    = keyof FeaturePage  | '';
export type _FeaturePageSortDirection = 'asc' | 'desc' | '';