﻿import {createRootRoute, createRoute, createRouter, Outlet} from "@tanstack/react-router";
import Home from "../components/pages/Home.tsx";
import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import Platforms from "../components/pages/Platforms.tsx";
import PlatformDetail from "../components/pages/PlatformDetail.tsx";
import WatchCourse from "../components/pages/WatchCourse.tsx";

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

const platformById = createRoute({
    getParentRoute: () => rootRoute,
    path: '/plataformas/$id',
    component: PlatformDetail
})

const watchCourse = createRoute({
    getParentRoute: () => rootRoute,
    path: '/cursos/$id',
    component: WatchCourse
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
    platformById,
    watchCourse,
    notFoundRoute
]);

export const router = createRouter({
    routeTree
});