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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getObjFromPath = (obj: Record<string, any>, path: string): any => {
  const pathParts = path.split('.');

  let val = obj;
  for (const i in pathParts) {
    const p = pathParts[i];
    if (typeof val === 'object' && p in val) {
      val = val[p];
    } else {
      const message = `Attempted to get a path ("${path}") that does exist in object provided to 'getObjFromPath'`;
      // throw new TypeError(message);
      console.error(message, obj);
      return path;
    }
  }
  return val;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setObjFromPath = (obj: Record<string, any>, path: string, value: any) => {
  const pathParts = path.split('.');
  const { ...freshObj } = obj;
  let subObj = freshObj;
  let i;
  for (i = 0; i < pathParts.length - 1; i++) {
    if (typeof subObj === 'object' && pathParts[i] in subObj) {
      subObj = subObj[pathParts[i]];
    } else {
      const message = `Attempted to set a path ("${path}") that does exist in object provided to 'setObjFromPath'`;
      // throw new TypeError(message);
      console.error(message, obj);
      return path;
    }
  }
  subObj[pathParts[i]] = value;
  return freshObj;
};
