import axios from 'axios'
import {defaultPath, externalPath} from './config';

const Update = (root, path, data) => {
  const promise = new Promise((resolve, reject)=>{
      axios.put(`${root ? defaultPath : externalPath}/${path}`, data)
      .then((result) => {
        resolve(result);
      }, (err) => {
        reject(err);
      })
  })
  return promise
}

export default Update;