const express = require('express');
const graphqlHTTP = require('express-graphql').graphqlHTTP;

const server = express();

server.use('graphql', graphqlHTTP({
  graphiql: true
}))

server.listen(4000, () => {
  console.log('Escuchando a mi puerto 4000');
});
