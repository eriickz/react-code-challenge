import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const ComponentWrapper: React.FC<any> = ({ children }) => {
  const queryClient = new QueryClient()
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default ComponentWrapper
