import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import PageDetail from '../Pages/PageDetail/PageDetail'
import PagePropiedades from "./PagePropiedades/PagePropiedades";
import PageLogin from "./PageLogin/PageLogin";
import ErrorPage from "../Components/PageNotFound/ErrorPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/inmobiliario/:id/:inmobiliario",
                element: <PageDetail />,
            },
            {
                path: "/propiedades",
                element: <PagePropiedades />,
            },
            {
                path: "/login",
                element: <PageLogin />,
            },
        ],
    },
]);
