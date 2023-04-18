import Button from "@components/layout/Button"
import type { UserItemProps } from "./types/UserInterfaces"
import { useLocation } from "wouter"

const UserItem: React.FC<UserItemProps> = ({ user, deleteUser }) => {
  const setLocation = useLocation()[1]

  return (
    <div title={`user-${user.id}`} className="bg-white rounded-lg w-fit user-item-shadow py-4 px-5">
      <div className="w-full">
        <div className="flex mb-4">
          <div className="w-[60px] h-[60px]">
            <img src={user.avatar} alt="user-avatar" />
          </div>
          <div className="flex flex-col justify-center font-serif ml-2">
            <p className="text-green text-lg font-semibold max-w-[230px]">{`${user.first_name} ${user.second_name}`}</p>
            <p className="mt-[-5px] text-useritem-gray font-normal text-sm">{user.email}</p>
          </div>
        </div>
        <Button btnType="update" onClick={() => setLocation(`/edit-user/${user.id}`)}>
          Update User
        </Button>
        <Button btnType="delete" onClick={() => deleteUser(user.id)}>
          Delete User
        </Button>
      </div>
    </div>
  )
}

export default UserItem
