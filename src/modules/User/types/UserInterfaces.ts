export default interface User {
  createdAt?: string
  first_name: string
  avatar: string
  second_name: string
  email: string
  id?: string
}

export interface UserItemProps {
  user: User
  deleteUser: (userId?: string) => void
}

export interface UserFormParams {
  userId?: string
}
