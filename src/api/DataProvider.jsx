import React, { useMemo, createContext, useContext } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Axios from 'axios'

const queryClient = new QueryClient()

const AxiosContext = createContext({})
export const useAxios = () => useContext(AxiosContext)

const DataProvider = ({ children }) => {
  const axios = useMemo(() => {
    const axios = Axios.create({
      headers: {
        'Content-Type': 'application/json'
      }
    })

    axios.interceptors.request.use((config) => {
      // Read token for anywhere, in this case directly from localStorage
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    })

    return axios
  }, [])

  return (
    <AxiosContext.Provider value={axios}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </AxiosContext.Provider>
  )
}

export default DataProvider
