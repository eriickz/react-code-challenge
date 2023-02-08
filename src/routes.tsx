import { lazy, Suspense } from "react"
import { Switch, Redirect, Route } from "wouter"

const UserList = lazy(() => import("@modules/User/UserList"))

const Routes = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        <Route path="/users" component={UserList} />
        <Redirect href="/users" />
      </Switch>
    </Suspense>
  )
}

export default Routes
