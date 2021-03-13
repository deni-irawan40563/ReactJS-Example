import Get from './Get'
import Post from './Post'
import Delete from './Delete'
import Update from './Update'

//Create
const postProducts = (data) => Post(true, 'api/products', data);

//Read
const getProducts = () => Get(true, 'api/products');
const getUser = () => Get(false, 'users');

//Update
const updateData = (id, data) => Update(true, `api/products/${id}`, data)

//Delete
const deleteData = (id) => Delete(true, 'api/products', id)

const API = {
  postProducts,
  getProducts,
  getUser,
  deleteData,
  updateData
}

export default API;