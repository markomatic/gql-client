import getClient from './client';

export default (...args) => getClient().mutate(...args);
