require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8080;

const methodOverride = require('method-override');
const flash = require('connect-flash');
const path = require('path');
const ejsMate = require('ejs-mate');
const nodemailer = require('nodemailer');

// App Configuration
app.use(express.static('aset'));
app.use(express.static(path.join(__dirname, "public")));
app.engine('ejs', ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Routing 

app.get('/', (req, res) => {
  res.redirect('/intelbyte');
});

app.get('/intelbyte', (req, res) => {
  res.render("index.ejs");
});

app.get('/intelbyte/:page', (req, res) => {
  const page = req.params.page;

  const allPage = ['about', 'package', 'contact', 'career', 'portfolio', 'blog', 'App Development', 'Web Development', 'Software Development', 'Digital Marketing', 'Graphic Designing', 'Blockchain Development', 'Game Development'];

  console.log(`Page requested: ${page}`);

  if (allPage.includes(page)) {
    res.render(`${page}.ejs`);
  } else {
    res.status(404).send('Page not found!');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
