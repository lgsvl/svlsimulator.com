import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React from 'react';

const Input = (props: TextFieldProps) => <TextField {...props} />;
export type InputProps = TextFieldProps;

export default Input;
export { Input };
