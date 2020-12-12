import React, { useMemo } from 'react';
import omit from 'lodash/omit';

/**
 * Use it for styled components if you want to remove some unneeded props.
 * Note: you can remove required props here and ts won't show an error
 * @param Comp{Object} - React component
 * @param omitList{Array<string>} - list of props to omit
 */
export function omitProps<T extends Record<string, unknown>>(Comp: React.ComponentType<T>, omitList: string[]) {
  // Note that there can be a type error if you add into 'omitList' required prop
  return React.forwardRef((props: T, ref) => {
    const newProps = useMemo(() => omit(props, omitList), [props]);
    return <Comp {...(newProps as T)} ref={ref} />;
  });
}
