import { getClient } from './clients';

export default (alias, ...args) => getClient(alias).query(...args);
