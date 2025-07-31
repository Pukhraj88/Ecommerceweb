import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Herosection } from "./component/Herosection";
import { Aboutus } from "./component/Aboutus";
import { Title } from "./component/Title";
import { ErrorPage } from "./pages/ErrorPage";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import { MyAccount } from "./pages/MyAccount";
import { Dashboard } from "./admin/Dashboard";
import { FoodCart } from "./products/FoodCart";
import { Cart } from "./products/Cart";
import { DynamicPage } from "./products/DynamicPage";
import { DynamicPageApi } from "./products/DynamicPageApi";
import { Services } from "./component/Services";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,

    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Title />
            <Herosection />
            <Aboutus />
            <Services/>
            <FoodCart />
          </>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
       {
        path: "/product",
        element: <FoodCart />,
      },
      {
        path: "/product/:id",
        element: <DynamicPage />,
        loader: DynamicPageApi
      },
       {
        path: "/services",
        element: <Services />,
      },
    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <MyAccount />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
