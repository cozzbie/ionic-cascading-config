import * as merge from 'deepmerge';
import { ENVIRONMENT as DEFAULT_ENVIRONMENT } from './environment.default';

export const ENVIRONMENT = merge(DEFAULT_ENVIRONMENT, {
  FOO: 'PRODUCTION FTW :)',
  BAR: [98, 99, 100]
});
