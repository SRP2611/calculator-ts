import { graphqlHTTP } from 'express-graphql';
import Schema from "./Schema";
import Resolvers from "./Resolvers";
import express from "express";


const app = express();
app.use('/', graphqlHTTP({
  schema: Schema,
  rootValue: Resolvers,
  graphiql: true
}));

app.listen(4000., () => console.log('GraphQL API server running at http://localhost:4000/'));

