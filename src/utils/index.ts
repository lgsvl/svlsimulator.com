// Generic utility functions
//

/**
 * Ensures that regardless of what is passed in, you get an array back.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const asArray = (val: any | any[]) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if ((val as any) instanceof Array) return val;
  return [val];
};

/**
 * Limits the value by the low and high constraints
 * @param val The number to clamp
 * @param low The low value (returned will not be less than this)
 * @param hight The high value (returned will not be greater than this)
 * @return Either the value unaltered, the low, or the high.
 */
export const clamp = (val: number, low: number, high: number) => Math.max(low, Math.min(val, high));

/**
 * Clamp between 0 and 1.
 * @param val The value to clamp
 */
export const clamp01 = (val: Parameters<typeof clamp>[0]) => clamp(val, 0, 1);

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
