import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app';
import Error from './pages/error';
import Home from './pages/home';
import Contact from './pages/contact-form';
import Work from './pages/work';
import Resume from './pages/information';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/work', element: <Work /> },
      { path: '/contact-form', element: <Contact /> },
      { path: '/information', element: <Resume /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);