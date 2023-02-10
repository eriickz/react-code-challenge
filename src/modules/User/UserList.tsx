import PageTheme from "@components/layout/PageTheme"
import UserItem from "./UserItem"
import type User from "./types/UserInterfaces"
import useUserRetriever from "./hooks/useUserRetriever"
import useLocation from "wouter/use-location"

const UserList: React.FC = () => {
  const { users, deleteUserMutation } = useUserRetriever()
  const setLocation = useLocation()[1]

  return (
    <div className="bg-main h-screen py-44 px-14 overflow-y-scroll">
      <div className="bg-white w-full min-h-full rounded-lg py-8 px-10">
        <div className="flex flex-col">
          <PageTheme
            title="User List"
            description="List of users on the platform"
            showNewButton={true}
            onButtonClick={() => setLocation("/new-user")}
          />
          <div className="flex gap-10 flex-wrap">
            {users?.map((user: User) => (
              <UserItem key={user.id} user={user} deleteUserMutation={deleteUserMutation} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserList
