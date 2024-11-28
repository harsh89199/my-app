import http from '../Http';
import {Item} from '../types/Item';
import { fetchAuthSession } from 'aws-amplify/auth';

const getAll = async() => {
    try {
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        return http.get<Array<Item>>("/items", {
            headers:{
                Authorization:idToken?.toString()
            }
        });
      } catch (err) {
        console.log(err);
      }

    

}

const get = async(id: string) => {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    return http.get<Item>(`/items/${id}`, {
        headers:{
            Authorization:idToken?.toString()
        }
    });
  } catch (err) {
    console.log(err);
  }
}

const remove = async(id:string) => {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    return http.delete<Item>(`/items/${id}`, {
        headers:{
            Authorization:idToken?.toString()
        }
    });
  } catch (err) {
    console.log(err);
  }
    
}




const put = async(data: Item) => {
  try {
    const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
    return http.put<Item>(`/items/${data}`, {
        headers:{
            Authorization:idToken?.toString()
        }
    });
  } catch (err) {
    console.log(err);
  }
}

const ItemService = {

    getAll,
    get,
    remove,
    put
}

export default ItemService;
