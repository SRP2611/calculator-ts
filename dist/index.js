"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_graphql_1 = require("express-graphql");
const Schema_1 = __importDefault(require("./Schema"));
const Resolvers_1 = __importDefault(require("./Resolvers"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use('/', (0, express_graphql_1.graphqlHTTP)({
    schema: Schema_1.default,
    rootValue: Resolvers_1.default,
    graphiql: true
}));
app.listen(4000., () => console.log('GraphQL API server running at http://localhost:4000/'));
