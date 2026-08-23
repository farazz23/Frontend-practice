const apiClient = {
  baseURL: "https://api.example.com",

  request(method, endpoint, body) {
    console.log({
      url: `${this.baseURL}${endpoint}`,
      method,
      body
    });
  }
};

const postRequest = apiClient.request.bind(apiClient,
  "POST",
  "/users",
  {
    name: "Damon"
  }
)
postRequest()