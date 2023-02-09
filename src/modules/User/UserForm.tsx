import PageTheme from "@components/layout/PageTheme"
import Upload from "@components/form/Upload"
import FormControl from "@global/components/form/FormControl"
import Button from "@components/layout/Button"
const UserForm: React.FC = () => {
  return (
    <div className="bg-main h-screen flex justify-center items-center">
      <div className="bg-white w-[630px] rounded-lg py-8 px-10">
        <PageTheme title="New User" description="Add user to the platform" iconClassName="ml-[530px] mt-[-10px]" />
        <form>
          <div className="user-form-shadow rounded-md w-full py-6 px-5">
            <Upload />
            <div className="flex gap-x-5 mb-3.5">
              <FormControl id="firstname" label="Firstname" placeholder="Eric" type="text" />
              <FormControl id="lastname" label="Lastname" placeholder="Rodriguez Montilla" type="text" />
            </div>
            <FormControl id="email" label="Email" placeholder="Email" type="email" />
            <div className="flex justify-between mt-8">
              <Button type="cancel">Cancel</Button>
              <div className="flex">
                <Button type="save">Save</Button>
                <Button type="delete">Delete</Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserForm
