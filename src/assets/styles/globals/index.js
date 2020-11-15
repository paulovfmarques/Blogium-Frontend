import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import fonts from './fonts';
import common from './common';
import rootCustomProps from './root-custom-props';
import normalize from './normalize';

export default createGlobalStyle`
  ${reset}
  ${fonts}
  ${common}
  ${rootCustomProps}
  ${normalize}
`;
