import { NextFunction, Request, Response } from "express";

type MiddlewareFn = (req: Request, res: Response, next: NextFunction) => void;

interface Log {
    id: string;
    timestamp: number;
    method: string;
    path: string;
    ip: string;
    body?: any;
    params?: any;
    query?: any;
}

export type {
    MiddlewareFn,
    Log
}