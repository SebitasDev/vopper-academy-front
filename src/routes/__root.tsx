import {createRootRoute, createRoute, createRouter, Outlet} from "@tanstack/react-router";
import Home from "../components/pages/Home.tsx";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";

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
    notFoundRoute
]);

export const router = createRouter({
    routeTree
});