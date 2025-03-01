import {createRootRoute, createRoute, createRouter, Outlet} from "@tanstack/react-router";
import Home from "../components/pages/Home.tsx";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import Platforms from "../components/pages/Platforms.tsx";

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
    notFoundRoute
]);

export const router = createRouter({
    routeTree
});