import axios from 'axios'

//BASE_URL https://sleepy-ocean-20338.herokuapp.com//anecdotes
const baseUrl = process.env.BASE_URL || 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const modify = async (id, modifiedBlog) => {
  await axios.put(`${baseUrl}/${id}`, modifiedBlog)
}

const toExport = {
  getAll,
  createNew,
  modify
}

export default toExport