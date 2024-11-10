## Installation

You can install this package via npm:

```bash ```
npm install node-mongoose-connection
        or
npm i node-mongoose-connection

## Importing
```js
// Using Node.js `require()`
const {MongooseConnection} = require('node-mongoose-connection');

// Using ES6 imports
import {MongooseConnection} from 'node-mongoose-connection';
```
## Usage 
if you used this package method. you have to given the two paramitter 

#### 1.first paramitter mongoDB host url
#### 2.secound paramitter is your project database name in mongoDB


```js
// Demo.....
const MONGO_URL= 'mongodb://localhost:27017';
const DADABASE_NAME = "my_first_database";
     or
const MONGO_URL= process.env.MONGO_URL;
const DADABASE_NAME = process.env.DADABASE_NAME;

// Demo..... Declear Mehtod
 MongooseConnection(MONGO_URL,DADABASE_NAME);
```

## Or Usage 

```js
const express = require('express');
const {MongooseConnection} = require('node-mongoose-connection');

const app = express();

// Demo.....
const MONGO_URL= 'mongodb://localhost:27017';
const DADABASE_NAME = "my_first_database";
     or
const MONGO_URL= process.env.MONGO_URL;
const DADABASE_NAME = process.env.DADABASE_NAME;


// Demo..... Declear Mehtod
MongooseConnection(MONGO_URL,DADABASE_NAME);


//home server page
app.get('/',(req, res) => {
    res.send("Welcome Everyone!");
});

///localhost port 
const port = process.env.PORT || 5000 ;

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```
## Build
```npm run build ```
