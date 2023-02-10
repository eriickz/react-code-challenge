import axios from "axios"
import type User from "./types/UserInterfaces"

export async function getUsers(): Promise<User[]> {
  const response = await axios.get("/users")
  return response?.data
}

export async function getUserById(userId?: string): Promise<User> {
  const res = await axios.get(`/users/${userId}`)
  return res?.data
}

export async function deleteUserById(userId?: string): Promise<User> {
  const res = await axios.delete(`/users/${userId}`)
  return res?.data
}

export async function updateUser(user: User): Promise<User> {
  const res = await axios.put(`/users/${user.id}`, { ...user })
  return res?.data
}

export async function createUser(user: User): Promise<User> {
  const res = await axios.post("/users", { ...user })
  return res?.data
}
