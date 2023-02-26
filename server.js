const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// configure the session
const sess = {
  secret: "secret", // used to sign the session ID cookie
  cookie: {}, // cookie options
  resave: false, // forces the session to be saved back to the store, even if it hasn't been modified
  saveUninitialized: true, // forces a session that is "uninitialized" to be saved to the store
  store: new SequelizeStore({
    db: sequelize // use Sequelize to store session data
  })
};

app.use(session(sess)); // attach the session to the app

// configure Handlebars as the view engine
const hbs = exphbs.create({
  helpers: {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(require('./controllers/')); // import and use the routes

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false }); // sync the database and start the app
});