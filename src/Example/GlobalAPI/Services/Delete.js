import axios from 'axios'
import {defaultPath, externalPath} from './config';

const Delete = (root, path, id) => {
  const promise = new Promise((resolve, reject)=>{
      axios.delete(`${root ? defaultPath : externalPath}/${path}/${id}`)
      .then((result) => {
        resolve(result);
      }, (err) => {
        reject(err);
      })
  })
  return promise
}

export default Delete;