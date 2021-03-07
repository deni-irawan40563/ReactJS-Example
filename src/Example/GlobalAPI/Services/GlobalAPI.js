import axios from 'axios'

const defaultPath = 'http://localhost:2000';
const externalPath = 'https://jsonplaceholder.typicode.com';

const Get = (root, path) => {
  const promise = new Promise((resolve, reject)=>{
    axios.get(`${root ? defaultPath : externalPath}/${path}`)
    .then((result)=>{
      resolve(result.data);
    },(err)=>{
      reject(err);
    })
  })
  return promise
}

const getProducts = () => Get(true, 'api/products');
const getUser = () => Get(false, 'users');

const API = {
  getProducts,
  getUser
}

export default API;