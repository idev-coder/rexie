import express, { Express } from "express";
import {setupReactViews} from "./engine";

export {
    Application,
    application,
    Request,
    Response,
    RequestHandler,
    RequestParamHandler,
    RouterOptions,
    Router,
    raw,
    request,
    response,
    json,
    query,
    text,
    urlencoded,
    Handler,
    Errback,
    ErrorRequestHandler,
    IRoute,
    IRouter,
    IRouterHandler,
    IRouterMatcher,
    static,
    Send,
    Locals,
    CookieOptions,
    NextFunction,
    MediaType
} from 'express';

export interface Rexie extends Express { }


export const rexie = express
export const setViews = setupReactViews

export default rexie


