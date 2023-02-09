import Button from "@components/layout/Button"

const UserItem = () => {
  return (
    <div className="bg-white rounded-lg w-fit user-item-shadow py-4 px-5">
      <div className="w-full">
        <div className="flex mb-4">
          <div className="w-[60px] h-[60px]">
            <img src="https://api.multiavatar.com/9.png" />
          </div>
          <div className="flex flex-col justify-center font-serif ml-2">
            <p className="text-green text-base font-semibold">Eric Rodriguez Montilla</p>
            <p className="mt-[-4px] text-useritem-gray font-normal text-sm">ericrodmon@gmail.com</p>
          </div>
        </div>
        <Button type="update">Update User</Button>
        <Button type="delete">Delete User</Button>
      </div>
    </div>
  )
}

export default UserItem
