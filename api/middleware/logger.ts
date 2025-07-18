import { NextFunction, Request, Response } from "express";
import { env } from "process";
import { Log } from "../types/middleware";

function logger(req: Request, res: Response, next: NextFunction) {

    const log: Log = {
        ...req.ray,
        method: req.method,
        path: req.path,
        ip: req.connection.remoteAddress || req.ip as string,
        query: { ...req.query }
    }

    if(req?.body) {

        log.body = { ...req.body };

        // Hide password
        if(log?.body?.password) {
            log.body.password = "****";
        }

        // Hide tokens
        if(log?.body?.token) {
            log.body.token = "****";
        }
        
    }

    if(req?.params) {
        log.params = { ...req.params };
    }

    if(env.DISPLAY_LOGS === 'true') {
        console.log(log);
    }
    
    next();

}

export { logger }