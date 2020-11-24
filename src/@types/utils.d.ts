/**
 * Merges two types, with common keys getting their definition exclusively from the frist.
 *
 * Useful for when you merge two components.
 * Composes a union of the two components, and drops any key from the second that exists in the first.
 */
export type Merge<A, B> = Omit<B, keyof A> & A;

/**
 * The function type used by an Array.map method.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type MapFunction<T = any, R = unknown> = (element: T, index: number, array: T[]) => R;

/**
 * FixedLengthArray only allows a finite set of element in your array
 *
 * Example:
 * // Array containing 3 strings
 * let foo : FixedLengthArray<[string, string, string]>
 *
 * From:
 * https://stackoverflow.com/questions/41139763/how-to-declare-a-fixed-length-array-in-typescript
 * https://stackoverflow.com/a/59906630/388092
 */
// type ArrayLengthMutationKeys = 'splice' | 'push' | 'pop' | 'shift' | 'unshift' | number;
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// type ArrayItems<T extends Array<any>> = T extends Array<infer TItems> ? TItems : never;
// // eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type FixedLengthArray<T extends any[]> = Pick<T, Exclude<keyof T, ArrayLengthMutationKeys>> & {
//   [Symbol.iterator]: () => IterableIterator<ArrayItems<T>>;
// };
