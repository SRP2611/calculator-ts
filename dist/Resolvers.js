"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Resolvers = {
    addition: (args) => {
        let sum = args.a + args.b;
        return sum;
    },
    subtraction: (args) => {
        let sub = args.a - args.b;
        return sub;
    },
    multiplication: (args) => {
        let mul = args.a * args.b;
        return mul;
    },
    division: (args) => {
        const isValidDenominator = args.b === 0 ? true : false;
        if (isValidDenominator)
            throw new Error("argument b should not be zero");
        let div = args.a / args.b;
        return div;
    },
};
exports.default = Resolvers;
