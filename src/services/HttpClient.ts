import axios, { AxiosInstance } from 'axios'

class HttpClient {
    instance: AxiosInstance;
    baseURL: string
    constructor() {
        this.baseURL = "https://restcountries.com/v2"
        this.instance = axios.create({
            baseURL: this.baseURL
        })
    }

    public get(endpoint: string, config = {}) {
        return this.instance.get(endpoint, config)
    }

    public post(endpoint: string, data: object, config = {}) {
        return this.instance.post(endpoint, data, config)
    }
}

const client = new HttpClient();
export default client;