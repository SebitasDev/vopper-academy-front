import {createRootRoute, createRoute, createRouter, Outlet} from "@tanstack/react-router";
import Home from "../components/pages/Home.tsx";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import Platforms from "../components/pages/Platforms.tsx";
import Categories from "../components/pages/Categories.tsx";

const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet/>
            <TanStackRouterDevtools/>
        </>
    )
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home
});

const platformsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/plataformas',
    component: Platforms
});

const CategoriesRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/categorias',
    component: Categories
})

const notFoundRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '*',
    component: () => (
        <>
            Not found
        </>
    )
});

const routeTree = rootRoute.addChildren([
    homeRoute,
    platformsRoute,
    CategoriesRoute,
    notFoundRoute
]);

export const router = createRouter({
    routeTree
});