import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import ProductsProvider from './context/ProductsContext'
import Products from './pages/Products/Products'
import Layout from './Layout/Layout'
import CartProvider from './context/CartContext'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "/products",
        Component: Products
      },
    ]
  },
  {
    path: "*",
    Component: NotFound
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <ProductsProvider>
        <RouterProvider router={router}></RouterProvider>
      </ProductsProvider>
    </CartProvider>
  </StrictMode>,
)
