import ky from 'ky';
import { getEnvConfig } from './config/app-config';

const apiUrl = getEnvConfig().API_URL;

export const api = ky.extend({
  prefixUrl: apiUrl,
  retry: 0,
});
