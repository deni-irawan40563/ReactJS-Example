import axios from 'axios'
import {defaultPath, externalPath} from './config';

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

export default Get;