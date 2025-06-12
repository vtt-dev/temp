import { NotFoundPage, ROUTE_PATH, useRoutePath } from '@/common';
import { DashboardPage as AdminDashboardPage } from '@/features/admin';
import { LoginPage as AuthLoginPage } from '@/features/auth';
import { AdminLayout, AuthLayout } from '@/layouts';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';

const RouteMiddleware = () => {
  const { isHomeRoute } = useRoutePath();

  if (isHomeRoute) {
    return <Navigate to={ROUTE_PATH.AUTH.LOGIN.PATH()} />;
  }

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME.PATH(),
    element: <RouteMiddleware />,
    children: [
      {
        path: ROUTE_PATH.AUTH.PATH(),
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTE_PATH.AUTH.LOGIN.PATH()} />,
          },
          {
            path: ROUTE_PATH.AUTH.LOGIN.PATH(),
            element: <AuthLoginPage />,
          },
        ],
      },
      {
        path: ROUTE_PATH.ADMIN.PATH(),
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={ROUTE_PATH.ADMIN.DASHBOARD.PATH()} />,
          },
          {
            path: ROUTE_PATH.ADMIN.DASHBOARD.PATH(),
            element: <AdminDashboardPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

const AppRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default AppRouterProvider;
