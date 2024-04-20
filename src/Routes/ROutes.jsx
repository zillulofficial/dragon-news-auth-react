import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root/Root";
import Home from "../layout/Home/Home";
import Login from "../layout/Login/Login";
import Register from "../layout/Register/Register";
import News from "../layout/Home/News";
import PrivateRoutes from "./PrivateRoutes";

const Router = createBrowserRouter([
        {
          path: "/",
          element: <Root></Root>,
          children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/news.json')
            },
            {
              path: "/news/:id",
              element: <PrivateRoutes><News></News></PrivateRoutes>
            },
            {
              path: "/login",
              element: <Login></Login>
            },
            {
              path: "/register",
              element: <Register></Register>
            }
          ]
        },
])

export default Router;