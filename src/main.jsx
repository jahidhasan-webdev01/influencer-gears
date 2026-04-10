import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import ProductsProvider from './context/ProductsContext'
import Products from './pages/Products/Products'
import CartProvider from './context/CartContext'
import { Toaster } from 'react-hot-toast'
import Layout from './Layout/Layout'
import Cart from './pages/Cart/Cart'
import ProductDetails from './pages/ProductDetails/ProductDetails'


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
      {
        path: "/product/:id",
        Component: ProductDetails
      },
      {
        path: "/cart",
        Component: Cart
      }
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

        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </ProductsProvider>
    </CartProvider>
  </StrictMode>,
)
