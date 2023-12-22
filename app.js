const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

const dburi = 'mongodb+srv://ahmed:1234@cluster0.adsvxgo.mongodb.net/note-tuts?retryWrites=true&w=majority';

// register view engine
app.set('view engine', 'ejs');

mongoose.connect(dburi)
  .then((result) => {
    console.log("Connected to db")
  })
  .catch((err) => {
    console.log("failed to connect to database, ", err);
  })
// listen for requests
app.listen(2000);

app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// mongoose & mongo tests
app.get('/add-blog', (req, res) => {
  let a = 2;
  a += 2;
  const blog = new Blog({
    title: `Ahmeds blog ${a}`,
    snippet: 'about my blog',
    body: 'more abput my blog'
  })

  blog.save()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('657976c35bdde7e5c921bfb4')
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
});

// app.set('views', 'myviews');

app.get('/', (req, res) => {
  res.redirect('/blogs/create');
});


app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

app.get('/blogs', (req, res) => {
  Blog.find().sort({ createdAt: 1 })
    .then(result => {
      res.render('index', { blogs: result, title: 'Blog page' });
    })
    .catch(err => {
      console.log(err);
    });
});

app.post('/blogs', (req, res) => {
  const blog = new Blog(req.body);

  blog.save()
    .then(result => {
      res.redirect('/blogs');
    })
    .catch(err => {
      console.log(err);
    });
});
app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
    });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
