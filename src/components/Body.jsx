import {createBrowserRouter} from "react-router-dom";
import Browse from "./Browse.jsx";
import { RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ]);

      return (
    <div>
       <RouterProvider router={appRouter}/>
    </div>
    );

};


export default Body;