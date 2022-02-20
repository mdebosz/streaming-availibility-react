import styled from 'styled-components';
import React from 'react';

import { Triangle } from "react-loader-spinner";



const StyledLoader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
`;

export const Loader: React.FC = () => {
  return <StyledLoader>
    <Triangle height={80} width={80}></Triangle>
  </StyledLoader>
}

