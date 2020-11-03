// Generic utility functions
//

// Ensures that regardless of what is passed in, you get an array back.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const asArray = (val: any | any[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((val as any) instanceof Array) return val;
  return [val];
};

export { asArray };
