import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/l3zcyVXkcjGUjrIu7bKyQzeQ2uFNMtNA',
});
const api = {
  async loadRestaurants() {
    const response = await client.get('/restaurants');
    return response.data;
  },
};

export default api;
