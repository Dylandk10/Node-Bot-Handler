import express from 'express';

const requestLoggerMiddleware = (req:express.Request, resp: express.Response, next: express.NextFunction) => {
    console.log(`[MIDDLEWARE LOG]${req.method} ${req.originalUrl}`);
    next();
};

const timeRequest = (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    let date: Date = new Date();
    console.log(date);
    next();

};

export { requestLoggerMiddleware };
export{ timeRequest }