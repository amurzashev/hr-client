import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = 'prod url';
} else {
  baseURL = 'http://localhost:3001/api/v1/';
}

export default axios.create({
  baseURL,
});
