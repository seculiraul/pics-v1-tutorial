import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID _hJ3wmII_crvlSnj5DXoNtTlM-zqHnSUWfvzTSEKlGc'
    },
})