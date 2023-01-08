import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

API.interceptors.request.use((req) => {
  let localStorageProfile = localStorage.getItem('profile')
  if (localStorageProfile) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorageProfile).token
    }`
  }

  return req
})

export const fetchPost = (id) => API.get(`/posts/${id}`)
export const fetchPosts = (page) => API.get(`/posts?page=${page}`)
export const fetchPostsBySearch = (searchQuery) =>
  API.get(
    `/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${
      searchQuery.tags
    }`
  )
export const createPost = (newPost) => API.post('/posts', newPost)
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost)
export const deletePost = (id) => API.delete(`/posts/${id}`)
export const likePost = (id) => API.patch(`/posts/${id}/likePost`)
export const comment = (value, id) =>
  API.post(`/posts/${id}/commentPost`, { value })

export const signIn = (formData) => API.post('/users/signin', formData)
export const signUp = (formData) => API.post('/users/signup', formData)
