const config = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
}

const handleResponse = async (reponse) => {
  const body = await reponse.json()

  return body
}

class Client {
  static async get(url, params = {}) {
    const urlWithParams = this.encodeUrl(url, params)
    const response = await fetch(urlWithParams, {
      ...config,
      method: 'GET',
    })
    return handleResponse(response)
  }

  static async post(url, body, options) {
    const response = await fetch(url, {
      ...config,
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    })
    return handleResponse(response)
  }

  static encodeUrl(url, params = {}) {
    const uri = new URL(url)
    uri.search = new URLSearchParams(params)

    return uri.toString()
  }
}

export default Client
