import { useState, useEffect } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createUser, getUserById, updateUser, deleteUserById } from "../services"
import { nanoid } from "nanoid"
import { useLocation } from "wouter"
import userFormValidationSchema, { UserValidationSchema } from "../validations/userFormValidation"
import axios, { AxiosError } from "axios"
import User from "../types/UserInterfaces"
import Swal from "sweetalert2"

const useUserForm = (userId?: string) => {
  const [isUpdateMode, setIsUpdateMode] = useState(false)
  const { data: user, error, isLoading } = useQuery(["user", userId], () => getUserById(userId), { enabled: userId !== undefined })

  const queryClient = useQueryClient()
  const setLocation = useLocation()[1]

  const defaultUser: User = {
    first_name: "",
    second_name: "",
    email: "",
    avatar: `https://api.multiavatar.com/${nanoid()}.png`,
  }

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<UserValidationSchema>({
    resolver: zodResolver(userFormValidationSchema),
    defaultValues: defaultUser,
  })

  useEffect(() => {
    if (user) {
      reset(user)
      setIsUpdateMode(true)
    }
  }, [user])

  const submitMutation = useMutation({
    mutationFn: ({ submitFn, user }) => submitFn(user),
    onMutate: async (userData: User) => {
      await queryClient.cancelQueries(["users"])

      const oldUsers = queryClient.getQueryData<User[]>(["users"])

      if (!oldUsers) return { oldUsers: [] }

      if (isUpdateMode) {
        const userFoundIndex = oldUsers.findIndex((oldUser) => oldUser.id === userData.id)

        if (userFoundIndex && userFoundIndex > -1) {
          oldUsers[userFoundIndex] = { ...userData }
        }
      } else {
        userData.id = nanoid()
        queryClient.setQueryData<User[] | undefined>(["users"], [...oldUsers, userData])
      }

      return { oldUsers }
    },
    onSuccess: async () => {
      const { isConfirmed } = await Swal.fire({
        title: "User Saved",
        text: "The user was saved successfully",
        icon: "success",
      })

      if (isConfirmed) {
        setLocation("/users")
      }
    },
    onError: (err, vars, ctx) => {
      if (ctx?.oldUsers) {
        queryClient.setQueryData(["users"], ctx.oldUsers)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
    },
  })

  const deleteUserMutation = useMutation({
    mutationFn: deleteUserById,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
      setLocation("/users")
    },
    onError: (error: AxiosError) => {
      if (axios.isAxiosError(error)) {
        Swal.fire({
          title: "Error!",
          text: `There was an error deleting the user (${error.response?.data}).`,
          icon: "error",
        })
      }
    },
  })

  const saveUser: SubmitHandler<UserValidationSchema> = async (user) => {
    const { isConfirmed } = await Swal.fire({
      title: `${isUpdateMode ? "Edit" : "Create"} User`,
      text: "Are you sure you want to save this user?",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Save",
    })

    if (isConfirmed) {
      const submitFn = isUpdateMode ? updateUser : createUser

      submitMutation.mutate({ submitFn, user })
    }
  }

  return {
    isLoading,
    avatar: getValues("avatar"),
    error,
    register,
    formErrors: errors,
    saveUser,
    handleSubmit,
    isUpdateMode,
    deleteUserMutation,
  }
}

export default useUserForm
