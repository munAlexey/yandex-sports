class Api {
  _checkResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(`Ошибка: ${response.status}`);
    }
  }

  async getAsideInfo(search) {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=d09dec3ef0e843b995d115f1e79b94ee`, {
      method: "GET",
    });
    return this._checkResponse(response);
  }
}

const api = new Api()

export default api;