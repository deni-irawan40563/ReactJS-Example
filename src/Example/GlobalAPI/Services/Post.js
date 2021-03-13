import axios from 'axios'
import {defaultPath, externalPath} from './config';

const Post = (root, path, data) => {
  const promise = new Promise((resolve, reject)=>{
      axios.post(`${root ? defaultPath : externalPath}/${path}`, data)
      .then((result) => {
        resolve(result);
      }, (err) => {
        reject(err);
      })
  })
  return promise
}

export default Post;