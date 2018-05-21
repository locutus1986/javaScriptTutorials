const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      expressValidator = require('express-validator'),
      mongojs = require('mongojs'),
      db = mongojs('customerapp', ["users"]),
      ObjectId = mongojs.ObjectId,
      app = express();

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//set static path
app.use(express.static(path.join(__dirname, 'public')));


//global vars
app.use((req, res, next) => {
  res.locals.errors = null;
  next();
});

//express validator middleware
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
    let namespace = param.split(".")
    , root = namespace.shift()
    , formParam = root;

  while(namespace.length){
    forParam += '[' + namespace.shift() + ']';
  }
  return {
    param: formParam,
    msg : msg,
    value : value
  };
  }
}));

let users = [];

// routes
app.get('/', (req, res) => {
  db.users.find((err, docs) =>{
    res.render('index', {
      title: 'Customer',
      hello: 'list of names ',
      users: docs
    });
  })
});

app.post('/users/add', (req, res) => {

  req.checkBody('first_name', 'First Name is Required').notEmpty();
  req.checkBody('last_name', 'Last Name is Required').notEmpty();
  req.checkBody('age', 'Age is Required').notEmpty();

  let errors = req.validationErrors();

  if(errors){
    res.render('index', {
      title: 'error',
      hello: 'Something went wrong',
      users: users,
      errors: errors
    });
  }else{
    const newUser = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age
    }
    db.users.insert(newUser, (err, result) => {
      if(err){
        console.log(err);
      }
      res.render('success', {
        data: req.body,
        title: "success",
        hello: "hi"
      });
    });
  }
});

app.delete('/users/delete/:id', (req, res) =>{
  db.users.remove({_id: ObjectId(req.params.id)},
                (err, result) => {
                  if(err){
                    console.log(err);
                  }
                  res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log("server stated on port 3000.....");
})
