import axios from 'axios';

const API_KEY = '9a1e2d6dd602ad8bb95e5a8b0745fc0b';

const instance = axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': API_KEY
  }
});



export const getGeoCode = (latitude,longtude) => {
  return instance.get('/geocode?lat='+latitude+'&lon='+longtude);
};

export const getLocations = (query) => {
  return instance.get('/locations?query='+query);
};


export const getReviews = (id) => {
  return instance.get('/reviews?res_id='+id+'&count=10');
}; 