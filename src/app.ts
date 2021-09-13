import express from 'express';
import cors from 'cors';
import { requestLoggerMiddleware, timeRequest } from './requestlogger.middleware'


const app: express.Application = express();

//middleware 
app.use(express.json()); //for json request 
app.use(express.urlencoded({extended:true})); //for post request 
app.use(cors());
app.use(express.static(__dirname + '/public'));
app.use(requestLoggerMiddleware);
app.use(timeRequest);


//home 
app.get('/', (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    resp.render('index');
});

export { app };

