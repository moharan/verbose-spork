const express = require("express");
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = require("./schema");
const testSchema = require("./types_schema");
const mongoose = require("mongoose");

const server = express();
const port = process.env.PORT || 4000

server.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema
    // schema: testSchema
  })
);

// useCreateIndex:true
mongoose.connect(
  `mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPasword}@sismoguiacluster.9ckofjt.mongodb.net/${process.env.mongoDatabase}?retryWrites=true&w=majority`,
  {useNewUrlParser: true, useUnifiedTopology:true}
).then(() => {
  server.listen({port: port}, () => {
    console.log("Escuchando a mi puerto 4000");
  });
}).catch((e) => {
  console.log(process.env.mongoUserName),
  console.log("Error:::" + e)});




