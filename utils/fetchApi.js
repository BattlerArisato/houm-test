import axios from 'axios';

export const baseURL = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'e8c6cf58admshcae1cc7852f6c07p18354djsn9b5b81d38389'
          }
    });
    return data;
}