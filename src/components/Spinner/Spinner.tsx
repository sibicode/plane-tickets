import React from 'react';
import { Wrapper } from './Spinner.styled';

const Spinner = () => {
  return (
    <Wrapper>
      <svg viewBox='0 0 50 50'>
        <circle cx='25' cy='25' r='20' fill='none' />
      </svg>
    </Wrapper>
  );
};

export default Spinner;
