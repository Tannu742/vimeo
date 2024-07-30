import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../layout";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";

const RouterPaths = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route index Component={Home}/>
            <Route path="*" Component={NotFound} />
        </Route>
    )
)
export default RouterPaths;