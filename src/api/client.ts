import axios from 'axios';

// define the api
const client = axios.create({
  baseURL: 'https://kays-mart.herokuapp.com',
});


export default client;
