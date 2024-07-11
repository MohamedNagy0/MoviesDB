import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import TV from "./Pages/TV/TV";
import { Provider } from "react-redux";
import { myStore } from "./app/store";
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
            <Provider store={myStore}>
                <RouterProvider router={routes}></RouterProvider>
            </Provider>
        </>
    );
}

export default App;
