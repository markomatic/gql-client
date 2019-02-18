import getClient from './client';

export default (...args) => getClient().query(...args);
