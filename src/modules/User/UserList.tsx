import PageTheme from "@components/layout/PageTheme"
import UserItem from "@components/user/UserItem"
const UserList: React.FC = () => {
  return (
    <div className="bg-main h-screen py-44 px-14 overflow-y-scroll">
      <div className="bg-white w-full min-h-full rounded-lg py-8 px-10">
        <div className="flex flex-col">
          <PageTheme title="User List" description="List of users on the platform" />
          <div className="flex gap-10 flex-wrap">
            <UserItem />
            <UserItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserList
