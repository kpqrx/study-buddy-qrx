import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './FormField.styles';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';

const FormField = ({ value, onChange, name, id, type = 'text', label, ...rest }) => (
  <StyledContainer {...rest}>
    <Label htmlFor={id}>{label}</Label>
    <Input name={name} id={id} type={type} value={value} onChange={onChange} />
  </StyledContainer>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
