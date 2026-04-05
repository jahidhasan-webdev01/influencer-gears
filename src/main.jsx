import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import ProductsProvider from './context/ProductsContext'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home
  },
  {
    path: "*",
    Component: NotFound
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductsProvider>
      <RouterProvider router={router}></RouterProvider>
    </ProductsProvider>
  </StrictMode>,
)
