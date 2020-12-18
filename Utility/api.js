import ApiConf from '../config/apis'

let authToken = ''

export function setToken(token) {
    authToken = token
}

class Api {
    async get(url) {
        console.log('GET ' + url)
        const data = await
            (await fetch(`${ApiConf.baseUrl}/${url}`, {
                headers: {
                    Authorization: authToken,
                }
            })).json()
        console.log(url,data)
        return data
    }

    async post(url, params = {}) {
        console.log('POST ' + url, params)
        const data = await
            (await fetch(`${ApiConf.baseUrl}/${url}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authToken,
                },
                body: JSON.stringify(params),
                method: 'POST'
            })).json()
        console.log(url, data)
        return data
    }

}

const api = new Api()
export default api
