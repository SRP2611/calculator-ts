import { buildSchema } from 'graphql';

const Query = `"This GraphQL schema has 4 Query options: Addition (a, b), Subtraction (a, b), Multiplication (a, b), Division (a, b)"
                type Query {
                  "Addition returns the result of a + b"
                  addition(a: Float!, b: Float!): Float!
                  "Subtraction returns the result of a - b"
                  subtraction(a: Float!, b: Float!): Float!
                  "Multiplication returns the result of a x b"
                  multiplication(a: Float!, b: Float!): Float!
                  "Division returns the result of a / b, where b should not be zero"
                  division(a: Float!, b: Float!): Float!
                }`;

const Schema = buildSchema(Query)

export default Schema; 