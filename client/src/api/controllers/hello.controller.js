import { baseUrl } from '../axios.config.js';

const sayHello = async () => {
    const response = await baseUrl.get('/');
    console.log(response);
    return response.data;
}

export { sayHello };
