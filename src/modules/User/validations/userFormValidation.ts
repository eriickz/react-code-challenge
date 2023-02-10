import { z } from "zod"

const userFormValidationSchema = z.object({
  id: z.string().optional(),
  first_name: z.string().min(1, { message: "Firstname is required." }),
  second_name: z.string().min(1, { message: "Lastname is requred." }),
  email: z.string().min(1, { message: "Email is required." }).email("Must provide a valid email."),
  avatar: z.string(),
})

export type UserValidationSchema = z.infer<typeof userFormValidationSchema>

export default userFormValidationSchema
