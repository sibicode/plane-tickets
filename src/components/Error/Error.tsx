import React from 'react';
import { Message } from './Error.styled';

const Error: React.FC = () => {
  return (
    <Message>
      Something went wrong... Please reload the page and try again
    </Message>
  );
};

export default Error;
