import client from "../services/HttpClient"

export const getAllCountries = async () => {
    return await client.get('/all').then(res => res.data)
}


export const getCountry = async (name: string) => {
    return await client.get(`/name/${name}`).then(res => res.data)
}

export const getRegion = async (region: string) => {
    return await client.get(`/region/${region}`).then(res => res.data)
}

export const getBorderCountries = async (codes: string) => {
    return await client.get(`/alpha?codes=${codes}`).then(res => res.data)
}