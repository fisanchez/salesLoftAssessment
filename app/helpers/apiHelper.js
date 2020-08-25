import axios from "axios"

const client = axios.create({
  baseURL: "http://localhost:3000/api/v1",
})

const responseBody = response => response.data

const requests = {
  get: url => client.get(url).then(responseBody),
}

const peopleClient = {
  list: () => {
    return requests.get("/people")
  },
}

export default peopleClient
