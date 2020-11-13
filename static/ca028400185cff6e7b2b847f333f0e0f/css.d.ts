// https://github.com/frenic/csstype/issues/63
// https://github.com/frenic/csstype/issues/63#issuecomment-623963869
// css.d.ts file
import * as CSS from 'csstype';

declare module 'csstype' {
  interface CustomProperties {
    '--ouija-position-top': number;
    '--ouija-position-left': number;
  }
}
