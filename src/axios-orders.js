import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://firebaseio.com/'
});

export default instance;