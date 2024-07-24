import axios from 'axios'

const API_URL = "http://localhost:8000"

export async function uploadFile(data){
    try {
      const res = await axios.post(`${API_URL}/uploads`,data)
      return res.data
    } catch (error) {
        console.error(`Error While Calling the Api : ${error.message}`);
    }
}

/*
axios return an object and object has headers
*/