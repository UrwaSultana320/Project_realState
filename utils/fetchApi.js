import axios from "axios";


export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
   const {data} = await axios.get((url),{
   headers: {
    'X-RapidAPI-Key': '38bd3ec5c5msh0933ba2c6c12e4ep118ddcjsn0c0a18e5f04c',
  }
}
);
return data;

}