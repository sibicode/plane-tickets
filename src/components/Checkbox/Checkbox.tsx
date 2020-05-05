import React from 'react';
import { Label, Input, Indicator } from './Checkbox.styled';

type CheckboxProps = {
  value: string;
  text: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  text,
  checked,
  onChange,
}) => {
  return (
    <Label>
      <Input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        value={value}
      />
      <Indicator />
      {text}
    </Label>
  );
};

export default Checkbox;
