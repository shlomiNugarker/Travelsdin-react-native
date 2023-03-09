export default interface Post {
  _id?: string
  userId: string
  title: string
  body: string
  style: null
  reactions: {
    userId: string
    fullname: string
    reaction: string
  }[]
  createdAt: number
  imgBodyUrl: string
  shares: []
  comments: []
  position: {
    lat: number
    lng: number
  }
  videoBodyUrl: string
  fullname: string
  link: string
}
