import axios from "axios"

const client = axios.create({
  baseURL: "http://localhost:3000/api/v1",
})

const responseBody = response => response.data

const requests = {
  get: url => client.get(url).then(responseBody),
  post: (url, body) => client.post(url, body).then(responseBody),
}

const peopleClient = {
  list: async () => {
    return await requests.get("/people")
  },
  frequency: async emails => {
    return await requests.post("/frequencies", emails)
  },
}

export default peopleClient
