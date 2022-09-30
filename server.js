const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const session = require('express-session');
// const noteValue = require('./seeds/historyData.json');

const app = express();
const PORT = process.env.PORT || 3306;

const hbs = exphbs.create({ helpers });

const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// app.post('/api/history', (req, res) => {
//   console.log('noteValue', noteValue);
//   const scribe = newNote(req.body, noteValue);
//   res.json(scribe);
// });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static("images"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

