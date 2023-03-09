import Post from '../../interfaces/Post'
import { httpService } from '../httpService'

const ENDPOINT = 'post'

export const postService = {
  query,
  getById,
  remove,
  save,
  getPostsLength,
}

const postsCash: { [key: string]: Post } = {}

async function query(filterBy = {}) {
  return await httpService.get(ENDPOINT, filterBy)
}
async function getPostsLength(filterBy = {}) {
  return await httpService.get(ENDPOINT + '/length', filterBy)
}

async function getById(id: string) {
  if (postsCash[id]) return postsCash[id]
  else {
    const post = await httpService.get(`${ENDPOINT}/${id}`)
    postsCash[id] = post
    return post
  }
}

async function remove(id: string) {
  return await httpService.delete(`${ENDPOINT}/${id}`)
}

async function save(post: Post) {
  return post._id
    ? await httpService.put(`${ENDPOINT}/${post._id}`, post)
    : await httpService.post(ENDPOINT, post)
}
