import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import axios from "axios"
import Routes from "./routes"

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_API_URL

  const isProduction = import.meta.env.PROD

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 20,
        refetchOnWindowFocus: isProduction,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <ReactQueryDevtools initialIsOpen={!isProduction} />
    </QueryClientProvider>
  )
}

export default App
