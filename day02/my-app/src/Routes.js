import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/home";
import ProductsList from "./Pages/ProductsList/ProductsList";
import ProductsDetails from "./Pages/ProductDetails/ProductDetails";

const Routes = createBrowserRouter ([
    {
        path : "/",
        element :<Home />
    },
    {
        path : "/products-list",
        element :<ProductsList />
    },
    {
        path : "/product-details/:productid",
        element :<ProductsDetails />
    },
]);

export default Routes;