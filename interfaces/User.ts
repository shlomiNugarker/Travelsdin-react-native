export default interface User {
  _id: string
  username: string
  profession: string
  fullname: string
  isAdmin: boolean
  age: number
  lastSeenActivity: 1672923098921
  createdAt: 1659507323661
  connections: { userId: string; fullname: string }[]
  requests: { userId: string; fullname: string }[]
  following: { userId: string; fullname: string }[]
  followers: { userId: string; fullname: string }[]
  gender: string
  phone: string
  birthDate: string
  email: string
  bg: string
  imgUrl: string
  position: {
    lat: number
    lng: number
  }
  lastSeenMsgs: number
}
