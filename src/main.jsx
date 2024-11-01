import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Route, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { BookStall, Contact, Home, IFCE, Layout } from './components/index.js';
import Members from './components/Members/Members.jsx';
import GalleryOfIFCE from './components/GalleryOfIFCE/GalleryOfIFCE.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <IFCE /> },
      { path: 'contact', element: <Contact /> },
      { path: 'home', element: <Home /> },
      { path: 'board-members', element: <Members /> },
      { path: 'book-stall', element: <BookStall /> },
      { path: 'ifce-gallery', element: <GalleryOfIFCE /> },
      { path: 'blogs', element: <Blogs /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>

  </StrictMode>,
);
