import { useMemo } from 'react';
import { useTranslation } from 'react-i18next'; // UseTranslationResponse
import { asArray } from '../utils'; // UseTranslationResponse
import english from '../../locales/en/translation.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MapFunctionType = (element: any, index?: number, array?: any[]) => unknown;

interface TranslationMapArgs {
  translationString: string;
  mapFn: MapFunctionType;
}

const useTrans = () => {
  const { i18n, t } = useTranslation();

  // When not english, add English resources to use for string translation fallback
  if (i18n.language !== 'en') {
    i18n.addResourceBundle('en', 'translation', english);
  }

  // `tMap` ensures that a translation string will be returned as an array with 1 or more elements.
  // This allows you to stamp out multiple components dynamically, rather than manually.
  const tMap = useMemo(() => (str: string, mapFn: MapFunctionType): unknown[] => asArray(t(str)).map(mapFn), [t]);

  return { t, tMap };

  // DEV NOTE: Retaining this just in case we need to augment the output of the standard `t` function. -BS
  //
  // const fancyT = (str) => {
  //   const trans = t(str);
  //   if (typeof trans === 'string') return trans;
  //   return trans as string[];
  // }
  // return {t: fancyT};
};

export default useTrans;
export { useTrans as useTranslation, asArray };
