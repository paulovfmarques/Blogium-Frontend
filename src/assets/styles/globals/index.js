import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';
import common from './common';
import rootCustomProps from './root-custom-props';
import normalize from './normalize';

export default createGlobalStyle`
  ${fonts}
  ${common}
  ${rootCustomProps}
  ${normalize}
`;
