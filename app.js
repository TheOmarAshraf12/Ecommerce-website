var express = require('express');
var path = require('path');
var logger = require('morgan');
var fs=require('fs');
var alert = require('alert');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
const { json, Router } = require('express');
const { error } = require('console');
const { title } = require('process');
var app = express();
var ProductsName = ["Tennis Racket","The Sun and Her Flowers","Boxing Bag","iPhone 13 Pro","Leaves of Grass","Galaxy S21 Ultra"];
var store = new MongoDBStore({
  uri: 'mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority',
  collection: 'mySessions'
});
app.use(require('express-session')({
  secret: 'This is a secret',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  },
  store: store,
  // Boilerplate options, see:
  // * https://www.npmjs.com/package/express-session#resave
  // * https://www.npmjs.com/package/express-session#saveuninitialized
  resave: true,
  saveUninitialized: true
}));


//mongoose.connect('mongod://localhost:27017/mydb');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"sadkfjksjalfkjlwq24df",resave:false,saveUninitialized:true}));
// view engine setup

var k;
mainn();


async function main(x){
  var {MongoClient}=require('mongodb');
  
  var uri="mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority";
  var client =new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true });
 

  await client.connect();

 // await client.db('firstdb').createCollection("secondcollection");
  /*var user={
            username:"user1",
            password: "Pass1"
  };*/
  console.log(k.length);
  await client.db("firstdb").collection('firstcollection').insertOne(x);
   k=await client.db('firstdb').collection('firstcollection').find().toArray();
  console.log(k.length);
  
  client.close;
}
async function mainn(){
  var {MongoClient}=require('mongodb');
  
  var uri="mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority";
  var client =new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true });
  await client.connect();

 // await client.db('firstdb').createCollection("secondcollection");
  /*var user={
            username:"user1",
            password: "Pass1"
  };*/
 // await client.db("firstdb").collection('firstcollection').insertOne(x);
   k=await client.db('firstdb').collection('firstcollection').find().toArray();
  console.log(k.length);
  
  client.close;
}

var t;
async function mainnn(){
  var {MongoClient}=require('mongodb');
  
  var uri="mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority";
  var client =new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true });
 

  await client.connect();

 // await client.db('firstdb').createCollection("secondcollection");
  /*var user={
            username:"user1",
            password: "Pass1"
  };*/
 // await client.db("firstdb").collection('firstcollection').insertOne(x);
   t=await client.db('firstdb').collection('secondcollection').find().toArray();

  
  client.close;
}











app.set('views',path.join(__dirname,'views'));
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'public')));
//app.use(express.static(path.join(__dirname, 'public')));
//app.get('/',function (req,res){
//  res.render('index',{title:"express"})
//});

app.get('/',function (req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('home');
});

app.get('/pizza',function(req,res){
  res.render('pizzaPage',{ppp:"ASECONDEPAGE"})
});

app.post('/pizza',function(req,res){
  var x=req.body.user;
  var y=req.body.pass;
  console.log(x);
  console.log(y);
});

//app.get('/',function(req,res){
  //res.render('login',{m:"1"});
//});


app.post('/login',function(req,res){
  var x = req.body.username;

  for(let i=0;i<k.length;i++){
    if(req.body.username===k[i].name&&req.body.password===k[i].password)
    {
       alert("user found");
       req.session.user = req.body.username;
       //console.log(req.session.user);
       return res.redirect('home');
    }
  }
    alert("user not found");
    return res.redirect('login');
});


app.post('/iphone',async function(req,res)
{ 
  var {MongoClient}=require('mongodb');
  
  var uri="mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority";
  var client =new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true });
  await client.connect();

 // await client.db('firstdb').createCollection("secondcollection");
  /*var user={
            username:"user1",
            password: "Pass1"
  };*/
 // await client.db("firstdb").collection('firstcollection').insertOne(x);
   k=await client.db('firstdb').collection('firstcollection').find().toArray();
  var isFound = false;
    for (let i = 0; i < k.length; i++) {
      if(k[i].name===req.session.user)
      { 
        var indx=k[i].Cartlist.length;
        for(let j = 0 ; j< k[i].Cartlist.length ; j++ )
        {if(k[i].Cartlist[j]==='iphone')
         {isFound = true;
        alert("Item is Already in the Cart");
      
      }


        }
        if(!isFound)
        { r=k[i].Cartlist;
          r.push('iphone');
          console.log(r);
          await client.db('firstdb').collection('firstcollection').update({name:req.session.user},{$push :{Cartlist:'iphone'}});
        alert("Item  added to the Cart Successfully"); 
        break;
       
        }
      res.redirect('/iphone');
        
      }
    }
    
  
    }



)


app.post('/galaxy',async function(req,res)
{ 
  var {MongoClient}=require('mongodb');
  
  var uri="mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority";
  var client =new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true });
  await client.connect();

 // await client.db('firstdb').createCollection("secondcollection");
  /*var user={
            username:"user1",
            password: "Pass1"
  };*/
 // await client.db("firstdb").collection('firstcollection').insertOne(x);
   k=await client.db('firstdb').collection('firstcollection').find().toArray();
  var isFound = false;
    for (let i = 0; i < k.length; i++) {
      if(k[i].name===req.session.user)
      { 
        var indx=k[i].Cartlist.length;
        for(let j = 0 ; j< k[i].Cartlist.length ; j++ )
        {if(k[i].Cartlist[j]==='galaxy')
         {isFound = true;
        alert("Item is Already in the Cart");
      }


        }
        if(!isFound)
        { r=k[i].Cartlist;
          r.push('galaxy');
          console.log(r);
          await client.db('firstdb').collection('firstcollection').update({name:req.session.user},{$push :{Cartlist:'galaxy'}});
        alert("Item  added to the Cart Successfully"); 
        break;
       
        }
      res.redirect('/galaxy');
        
      }
    }
    
  
    }



)

app.post('/leaves',async function(req,res)
{ 
  var {MongoClient}=require('mongodb');
  
  var uri="mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority";
  var client =new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true });
  await client.connect();

 // await client.db('firstdb').createCollection("secondcollection");
  /*var user={
            username:"user1",
            password: "Pass1"
  };*/
 // await client.db("firstdb").collection('firstcollection').insertOne(x);
   k=await client.db('firstdb').collection('firstcollection').find().toArray();
  var isFound = false;
    for (let i = 0; i < k.length; i++) {
      if(k[i].name===req.session.user)
      { 
        var indx=k[i].Cartlist.length;
        for(let j = 0 ; j< k[i].Cartlist.length ; j++ )
        {if(k[i].Cartlist[j]==='leaves')
         {isFound = true;
        alert("Item is Already in the Cart");
      }


        }
        if(!isFound)
        { r=k[i].Cartlist;
          r.push('leaves');
          console.log(r);
          await client.db('firstdb').collection('firstcollection').update({name:req.session.user},{$push :{Cartlist:'leaves'}});
        alert("Item  added to the Cart Successfully"); 
        break;
       
        }
      res.redirect('/leaves');
        
      }
    }
    
  
    }



)

app.post('/sun',async function(req,res)
{ 
  var {MongoClient}=require('mongodb');
  
  var uri="mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority";
  var client =new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true });
  await client.connect();

 // await client.db('firstdb').createCollection("secondcollection");
  /*var user={
            username:"user1",
            password: "Pass1"
  };*/
 // await client.db("firstdb").collection('firstcollection').insertOne(x);
   k=await client.db('firstdb').collection('firstcollection').find().toArray();
  var isFound = false;
    for (let i = 0; i < k.length; i++) {
      if(k[i].name===req.session.user)
      { 
        var indx=k[i].Cartlist.length;
        for(let j = 0 ; j< k[i].Cartlist.length ; j++ )
        {if(k[i].Cartlist[j]==='sun')
         {isFound = true;
        alert("Item is Already in the Cart");
      }


        }
        if(!isFound)
        { r=k[i].Cartlist;
          r.push('sun');
          console.log(r);
          await client.db('firstdb').collection('firstcollection').update({name:req.session.user},{$push :{Cartlist:'sun'}});
        alert("Item  added to the Cart Successfully"); 
        break;
       
        }
      res.redirect('/sun');
        
      }
    }
    
  
    }



)

app.post('/boxing',async function(req,res)
{ 
  var {MongoClient}=require('mongodb');
  
  var uri="mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority";
  var client =new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true });
  await client.connect();

 // await client.db('firstdb').createCollection("secondcollection");
  /*var user={
            username:"user1",
            password: "Pass1"
  };*/
 // await client.db("firstdb").collection('firstcollection').insertOne(x);
   k=await client.db('firstdb').collection('firstcollection').find().toArray();
  var isFound = false;
    for (let i = 0; i < k.length; i++) {
      if(k[i].name===req.session.user)
      { 
        var indx=k[i].Cartlist.length;
        for(let j = 0 ; j< k[i].Cartlist.length ; j++ )
        {if(k[i].Cartlist[j]==='boxing')
         {isFound = true;
        alert("Item is Already in the Cart");
      }


        }
        if(!isFound)
        { r=k[i].Cartlist;
          r.push('boxing');
          console.log(r);
          await client.db('firstdb').collection('firstcollection').update({name:req.session.user},{$push :{Cartlist:'boxing'}});
        alert("Item  added to the Cart Successfully"); 
        break;
       
        }
      res.redirect('/boxing');
        
      }
    }
    
  
    }



)

app.post('/tennis',async function(req,res)
{ 
  var {MongoClient}=require('mongodb');
  
  var uri="mongodb+srv://admin:admin@cluster0.4nmsb.mongodb.net/firstdb?retryWrites=true&w=majority";
  var client =new MongoClient(uri,{useNewUrlParser: true,useUnifiedTopology: true });
  await client.connect();

 // await client.db('firstdb').createCollection("secondcollection");
  /*var user={
            username:"user1",
            password: "Pass1"
  };*/
 // await client.db("firstdb").collection('firstcollection').insertOne(x);
   k=await client.db('firstdb').collection('firstcollection').find().toArray();
  var isFound = false;
    for (let i = 0; i < k.length; i++) {
      if(k[i].name===req.session.user)
      { 
        var indx=k[i].Cartlist.length;
        for(let j = 0 ; j< k[i].Cartlist.length ; j++ )
        {if(k[i].Cartlist[j]==='tennis')
         {isFound = true;
        alert("Item is Already in the Cart");
      }


        }
        if(!isFound)
        { r=k[i].Cartlist;
          r.push('tennis');
          console.log(r);
          await client.db('firstdb').collection('firstcollection').update({name:req.session.user},{$push :{Cartlist:'tennis'}});
        alert("Item  added to the Cart Successfully"); 
        break;
       
        }
      res.redirect('/tennis');
        
      }
    }
    
  
    }



)

app.get('/cart' ,function(req,res) {
  if(!req.session.user)
  {res.redirect('/');}
  else
  {  
      var CartList;
        for (let i = 0; i < k.length; i++) {
          if(k[i].name===req.session.user)
          { 
            CartList = k[i].Cartlist;
          break;
              
    
    
            }

          }
         
        
  if(!CartList)
  res.render('cart',{CartList1:[""]});
  else
  res.render('cart',{CartList1:CartList});


}
})




app.get('/books',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('books');
});

app.get('/boxing',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('boxing');
});
app.get('/cart',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('cart');
});
app.get('/galaxy',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('galaxy');
});
app.get('/home',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('home');
});
app.get('/index',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('index');
});
app.get('/iphone',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('iphone');
});
app.get('/leaves',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('leaves');
});
app.get('/login',function(req,res){
  res.render('login');
});
app.get('/phones',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('phones');
}); 
app.get('/registration',function(req,res){
  res.render('registration')
});

app.get('/searchresults',function(req,res){
  
  res.render('searchresults')
});
app.get('/sports',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('sports')
});

app.get('/sun',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('sun')
});

app.get('/tennis',function(req,res){
  if(!req.session.user)
  { 
    res.redirect('/login');}
  else  
  res.render('tennis')
});
//whenever you render add variable which called title and call it "express",-->optional thing ,we passed value from back end to front end 

//whenever you get request for home page excute this function 

//app.get('/users', function(req,res){
 // res.render('users');
//}
//req carry data from user whenever he post data for example 



var x= { name:"Ali" , age:27 , username:"ali92", password:"abc123"}
//console.log(x);
var y=JSON.stringify(x);

fs.writeFileSync("users.json",y);

var data=fs.readFileSync("users.json");
var z=JSON.parse(data);

//console.log(z);

app.post('/registration',function(req,res){

  var username=req.body.username;
  var password=req.body.password;
  var x ={name: req.body.username,password: req.body.password,Cartlist:[]};
  var f=false;
  for(let i=0;i<k.length;i++){
    if(req.body.username===k[i].name) 
    {
       f=true;
       alert("username exists please choose another one");
       return res.redirect('registration');
    }
    
  }
  if(f==false){
    main(x).catch(console.error);
    
  }
  req.session.user = req.body.username;
  return res.redirect('home');
  //main(data).catch(console.error);
  //var db=mongoose.Collection;
  //db.collection('users').insertOne(data,(err,collection)=>{
   // if(err)
    //  throw err;
    //console.log("record inserted successfully");

  });
  
  //return res.redirect('index');
//});
app.post('/search' ,function(req,res) {
  var keyword = req.body.Search;
  if(!keyword)
  {res.render('searchresults',{Products: ProductsName});}
  else
  {
  var tmp1 = String(keyword).toLowerCase();
  var result = [];
  var substringflage = false;
  for(var index = 0 ; index < ProductsName.length ; index ++)
  { var tmp2 = ProductsName[index].toLowerCase();
  for(var j = 0 ; j < tmp2.length;j++)
  { 
    if(tmp2.charAt(j)===tmp1.charAt(0))
    { 
  
      for(var i = 0 ; i< tmp1.length;i++ )
      {
        if(tmp1.charAt(i)===tmp2.charAt(j+i))
        {
          substringflage = true;
        }
        else
        {substringflage = false;
          
        }
      }
    }
  if(substringflage === true)
  {
    substringflage = false;
    result[result.length]=ProductsName[index];
        break;
  
  }
  }
  
  substringflage = false;
  
  }
 
  if(!result.length) 
  result[0]="";
      res.render('searchresults',{Products:result});   }
});

if(process.env.PORT){
  app.listen(process.env.PORT,function(){console.log('Server started')});
}
else{
  app.listen(3000, function(){console.log(' Server started on port 3000')})
}

/*



main().catch(console.error);



*/
