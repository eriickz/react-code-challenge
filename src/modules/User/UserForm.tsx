import PageTheme from "@components/layout/PageTheme"
import FormControl from "@global/components/form/FormControl"
import Button from "@components/layout/Button"
import { useLocation, useRoute } from "wouter"
import useUserForm from "./hooks/useUserForm"

const UserForm: React.FC = () => {
  const params = useRoute("/edit-user/:userId")[1]
  const { avatar, register, saveUser, handleSubmit, isUpdateMode, deleteUser } = useUserForm(params?.userId)
  const setLocation = useLocation()[1]

  const pageTitle = `${isUpdateMode ? "Edit" : "New"} User`

  return (
    <div className="bg-main h-screen flex justify-center items-center">
      <div className="bg-white w-[630px] rounded-lg py-8 px-10">
        <PageTheme title={pageTitle} description="Specify user profile details" iconClassName="ml-[530px] mt-[-10px]" />
        <form onSubmit={handleSubmit(saveUser)}>
          <div className="user-form-shadow rounded-md w-full py-6 px-5">
            <div className="flex justify-center mb-6">
              <img className="w-[120px] h-[120px]" src={avatar} />
            </div>
            <div className="flex gap-x-5 mb-3.5">
              <FormControl id="first_name" label="Firstname" placeholder="Eric" type="text" {...register("first_name")} />
              <FormControl id="second_name" label="Lastname" placeholder="Rodriguez Montilla" type="text" {...register("second_name")} />
            </div>
            <FormControl id="email" label="Email" placeholder="Email" type="email" {...register("email")} />
            <div className={`flex ${isUpdateMode ? "justify-between" : "justify-start"} mt-8`}>
              <Button btnType="cancel" onClick={() => setLocation("/users")}>
                Cancel
              </Button>
              <div className="flex">
                {isUpdateMode && (
                  <Button type="button" btnType="delete" onClick={() => deleteUser(params?.userId)}>
                    Delete User
                  </Button>
                )}
                <Button type="submit" btnType="save">
                  Save User
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default UserForm
