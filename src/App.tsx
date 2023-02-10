import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import Routes from "./routes"
import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20,
      refetchOnWindowFocus: import.meta.env.PROD,
    },
  },
})

const isProduction = import.meta.env.PROD

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <ReactQueryDevtools initialIsOpen={!isProduction} />
    </QueryClientProvider>
  )
}

export default App
