import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import PageDetail from '../Pages/PageDetail/PageDetail'
import PagePropiedades from '../Pages/PagePropiedades/Propierties'
import PageAboutUs from '../Pages/PageAboutUs/About'
import PageServices from '../Pages/PageServices/Services'
import PageLogin from "../Pages/PageLogin/PageLogin";
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
                path: "/propiedades/:id/:titulo",
                element: <PageDetail />,
            },
            {
                path: "/propiedades",
                element: <PagePropiedades />,
            },
            {
                path: "/sobre-nosotros",
                element: <PageAboutUs />,
            },
            {
                path: "/servicios",
                element: <PageServices />,
            },
            {
                path: "/login",
                element: <PageLogin />,
            },
        ],
    },
], {
    future: {
        v7_skipActionErrorRevalidation: true,
    },
});
