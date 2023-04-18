import { screen, render, fireEvent, renderHook, waitFor, RenderResult } from "@testing-library/react"
import ComponentWrapper from "@global/utils/testing/ComponentWrapper"
import UserItem from "../UserItem"
import type User from "../types/UserInterfaces"
import useUserRetriever from "../hooks/useUserRetriever"

let user: User | null = null

beforeAll(() => {
  window.scrollTo = jest.fn()
})

afterAll(() => {
  jest.clearAllMocks()
})

afterEach(() => {
  jest.resetAllMocks()
})

beforeEach(async () => {
  const { result } = renderHook(() => useUserRetriever(), { wrapper: ComponentWrapper })

  await waitFor(() => expect(result.current.isLoading).toBeFalsy())
  const { users } = result.current

  user = users![0]
})

describe("Render <UserItem />", () => {
  let component: RenderResult

  it("Render with props", async () => {
    const deleteUserMock = jest.fn((userId?: string) => null)

    component = render(
      <ComponentWrapper>
        <UserItem user={user!} deleteUser={deleteUserMock} />
      </ComponentWrapper>
    )

    const image = component.getByRole("img") as HTMLImageElement

    component.getByText(`${user!.first_name} ${user!.second_name}`)
    component.getByText(user!.email)
    expect(image.src).toContain(user!.avatar)
  })

  it("Test user deletion", async () => {
    const { result } = renderHook(() => useUserRetriever(), { wrapper: ComponentWrapper })

    await waitFor(() => expect(result.current.isLoading).toBeFalsy())

    const { deleteUser } = result.current

    component = render(<UserItem user={user!} deleteUser={deleteUser} />)

    const deleteBtn = component.getByRole("button", { name: "Delete User" })

    fireEvent.click(deleteBtn)

    //Sweetalert confirmation
    fireEvent.click(screen.getByRole("button", { name: "Delete" }))

    await waitFor(() => expect(result.current.users?.length).toBe(0))
  })
})
