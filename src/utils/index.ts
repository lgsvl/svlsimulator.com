// Generic utility functions
//

// Ensures that regardless of what is passed in, you get an array back.
const asArray = (val: any | any[]) => {
  if ((val as any) instanceof Array) return val;
  return [val];
};

export { asArray };
