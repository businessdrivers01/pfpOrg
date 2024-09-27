import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { BoardMembers, BookStall, Contact, Home, IFCE, Layout } from './components/index.js'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path='' element={<IFCE />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/board-members' element={<BoardMembers />} />
        <Route path='/book-stall' element={<BookStall />} />
      </Route>
    </>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
