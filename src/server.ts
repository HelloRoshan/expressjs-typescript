import * as express from 'express';
import { Application, Request, Response } from 'express';
import  { myRouter } from './router';
import * as bodyParser from 'body-parser';

const app: Application = express();

app.use(bodyParser.json({ limit: '50mb', type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello TS');
});

app.use('/todos', myRouter)

app.listen(5000, () => {
    console.log('Server Express with Typescript is running on port 5000');
});