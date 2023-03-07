import { httpService } from '../httpService'

const ENDPOINT = 'comment'

export const commentService = {
  query,
  getById,
  remove,
  save,
}

async function query(filterBy = {}) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function getById(id: string) {
  return await httpService.get(`${ENDPOINT}/${id}`)
}

async function remove(comment: any) {
  return await httpService.delete(`${ENDPOINT}/${comment._id}`, comment)
}

async function save(comment: any) {
  return comment._id
    ? await httpService.put(`${ENDPOINT}/${comment._id}`, comment)
    : await httpService.post(ENDPOINT, comment)
}
