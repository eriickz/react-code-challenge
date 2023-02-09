import PageTheme from "@components/layout/PageTheme"
import UserItem from "@components/user/UserItem"

const UserList: React.FC = () => {
  return (
    <div className="bg-main h-screen py-44 px-14">
      <div className="bg-white w-full h-full rounded-lg py-8 px-10">
        <div className="flex flex-col">
          <PageTheme title="UserList" description="List of users on the platform" />
          <UserItem />
        </div>
      </div>
    </div>
  )
}

export default UserList
