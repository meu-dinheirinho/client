import {
  FormControl,
  InputGroup,
  Select,
  Text,
} from '@chakra-ui/react';

export default function FormSelectInput({
  // set form name to input
  name = '',
  // set placeholder of input text, number, area, etc
  placeholder = '',
  // set value to input
  value = '',
  // set options  list
  options = [],
  // set input size
  size = 'lg',
  // set error to input
  errorMsg,
  // propagate on native blur event
  onBlur,
  // propagate on native change event
  onChange,
  // others props
  ...rest
}) {
  // handle on change input text
  function handleChange(e) {
    // events
    if (onChange) onChange(e);
  }

  // handle on bur from input
  function handleBlur(e) {
    if (onBlur) onBlur(e);
  }

  return (
    <FormControl>
      <InputGroup size={size}>
        <Select
          {...rest}
          placeholder={placeholder}
          size={size}
          name={name}
          value={value}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        >
          {options.map((flag, idx) => (
            <option key={idx} value={flag.value}>{flag.label}</option>
          ))}
        </Select>
      </InputGroup>
      <Text fontSize={'small'} color={'red'}>{errorMsg || null}</Text>
    </FormControl>
  );
}
