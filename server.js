const express = require("express");
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const schema = require("./schema");

const server = express();

server.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: schema,
  })
);

server.listen(4000, () => {
  console.log("Escuchando a mi puerto 4000");
});
