import express from 'express';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';
import store from 'session-file-store';
import dotenv from 'dotenv';
import indexRouter from './routes/index';
import entriesRouter from './routes/entries';
import apiRouter from './routes/api';
import jsxRender from './utils/jsxRendex';

dotenv.config();

const PORT = 3000;
const app = express();
const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: 'test', // Секретное слово для шифрования, может быть любым
  store: new FileStore(),
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');

app.set('views', path.join(__dirname, 'components'));

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(session(sessionConfig));

app.use((req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session.user; // added info about user from DB
  next();
});

app.use('/', indexRouter);
// app.use(authCheck);
app.use('/entries', entriesRouter);
app.use('/api/v1/', apiRouter);

app.listen(PORT, () => {
  console.log('Server start on', PORT);
});
