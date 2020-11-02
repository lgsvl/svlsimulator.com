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
