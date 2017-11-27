import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as helmet from 'helmet';
import * as logger from 'morgan';
import * as cors from 'cors';
import router from './routes/v1';
import config from './config/main';
const app = express();

// init mongoose
mongoose.connect(config.db);

// express middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cookieParser());

// :method :url :status :response-time ms - :res[content-length]
// The :status token will be colored red for server error codes, yellow for client
// error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(logger('dev'));
app.use(helmet());
app.use(cors());

// init server
let server;
if (process.env.NODE_ENV !== config.test_env) {
  server = app.listen(config.port);
  console.log(`Server listening on port ${config.port}`);
} else {
  server = app.listen(config.test_port);
  console.log(`Server listening on port ${config.test_port}`);
}

// router
router(app);

// export
module.exports = server;
