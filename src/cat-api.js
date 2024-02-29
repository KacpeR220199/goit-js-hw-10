import axios from 'axios';

export const giveBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
    'live_crzOtOdOmnbwdkat6rOls50ZDiyxlhNlkDC6W9wQFCzOjlE4fhmpEIFoFnmJdLxn';

  return axios.get('https://api.thecatapi.com/v1/breeds').then(res => res.data);
};
export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data);
};
