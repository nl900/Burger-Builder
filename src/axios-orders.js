import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://burger-builder-ef43f.firebaseio.com/'
});

export default instance;