import axios from 'axios';

let baseURL;

const api = '/api/v1';

if (process.env.NODE_ENV === 'production') {
  baseURL = `https://hr-bot-server.herokuapp.com${api}`;
} else {
  baseURL = `http://localhost:3001${api}`;
}

export default axios.create({
  baseURL,
});
