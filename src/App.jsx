import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import TV from "./Pages/TV/TV";

function App() {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/tv",
                    element: <TV />,
                },
            ],
        },
    ]);
    return (
        <>
            <RouterProvider router={routes}></RouterProvider>
        </>
    );
}

export default App;
