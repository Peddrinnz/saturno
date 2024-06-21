import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/_layout';
import { App } from '@/App';
import { SignIn } from '@/auth/SignIn';
import { SignOut } from '@/auth/SignOut';
import { Auth } from '@/auth';
import { Dashboard } from '@/app/index';
import { Home } from '@/app/home';
import { Users } from '@/app/users';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      }]
  },
  {
    path: "auth",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <SignIn />
      },
      {
        path: "logout",
        element: <SignOut />
      }
    ]
  },
  {
    path: '/app',
    element: <Dashboard />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'users',
        element: <Users />
      }
    ]
  }
]);