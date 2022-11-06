import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '03dfc06140msh6db8f91fc80d970p153d7fjsnbe6c82b71e41',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })

    return data
}