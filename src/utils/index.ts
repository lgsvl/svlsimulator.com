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
