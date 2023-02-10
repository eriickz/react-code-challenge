import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteUserById, getUsers } from "../services"
import axios, { AxiosError } from "axios"
import Swal from "sweetalert2"

const useUserRetriever = () => {
  const { data: users, isLoading } = useQuery({ queryKey: ["users"], queryFn: getUsers })

  const queryClient = useQueryClient()

  const deleteUserMutation = useMutation({
    mutationFn: deleteUserById,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ["users"] })
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

  return {
    users,
    isLoading,
    deleteUserMutation,
  }
}

export default useUserRetriever
