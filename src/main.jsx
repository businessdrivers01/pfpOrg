import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, Route, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { BoardMembers, BookStall, Contact, Home, IFCE, Layout } from './components/index.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <IFCE /> },
      { path: 'contact', element: <Contact /> },
      { path: 'home', element: <Home /> },
      { path: 'board-members', element: <BoardMembers /> },
      { path: 'book-stall', element: <BookStall /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>

  </StrictMode>,
);
