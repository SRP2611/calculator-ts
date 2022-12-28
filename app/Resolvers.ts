const Resolvers = {
    addition: (args: any): number => {
      let sum: number = args.a + args.b;

      return sum;
    },
    subtraction: (args: any): number => {
      let sub: number = args.a - args.b;
      
      return sub;
    },
    multiplication: (args: any): number => {
      let mul: number = args.a * args.b;
      
      return mul;
    },
    division: (args: any): number => {
      const isValidDenominator = args.b === 0 ? true : false
      if(isValidDenominator)
        throw new Error("argument b should not be zero");
      
      let div: number = args.a / args.b;
      
      return div;
    },
};

export default Resolvers;