import { lazy, Suspense } from "react"
import { Switch, Redirect, Route } from "wouter"

const UserList = lazy(() => import("@modules/User/UserList"))
const UserForm = lazy(() => import("@modules/User/UserForm"))

const Routes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        <Route path="/users" component={UserList} />
        <Route path="/userform" component={UserForm} />
        <Redirect href="/users" />
      </Switch>
    </Suspense>
  )
}

export default Routes
