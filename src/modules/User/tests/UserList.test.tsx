import { screen, render, waitFor, renderHook, fireEvent } from "@testing-library/react"
import ComponentWrapper from "@global/utils/testing/ComponentWrapper"
import UserList from "../UserList"

//Hooks
import useUserRetriever from "../hooks/useUserRetriever"

//Types
import type User from "../types/UserInterfaces"

let users: User[] = []
let addUserBtn: HTMLElement

beforeAll(() => {
  render(
    <ComponentWrapper>
      <UserList />
    </ComponentWrapper>
  )
})

describe.skip("Render <UserList />", () => {
  it("Verify page title, description and button", () => {
    screen.getByText("User List")
    screen.getByText("List of users on the platform")
    addUserBtn = screen.getByRole("button", { name: "Add User" })
  })
})

describe.skip("Render list", () => {
  it("Test users query", async () => {
    const { result } = renderHook(() => useUserRetriever(), { wrapper: ComponentWrapper })

    await waitFor(() => expect(result.current.isLoading).toBeFalsy())

    expect(result.current.users!.length >= 0).toBeTruthy()
    users = result.current.users!
  })

  it("Test users rendering", () => {
    users.forEach((user) => () => {
      expect(screen.getByText(user.first_name)).toBeDefined()
      expect(screen.getByText(user.second_name)).toBeDefined()
    })
  })
})

describe.skip("Component redirection", () => {
  it("Redirect to UserForm", () => {
    fireEvent.click(addUserBtn)
    screen.findByText("New User")
  })
})
