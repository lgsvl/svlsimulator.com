import Container, { ContainerProps } from '@material-ui/core/Container';
import { withTheme } from '@material-ui/core/styles';
import React from 'react';
import addSpacing from 'src/utils/addSpacing';
import styled from 'styled-components';

const Center = addSpacing(
  withTheme(styled(Container)`
    text-align: center;
  `) as React.FC<ContainerProps>
);

export default Center;
export { Center };
