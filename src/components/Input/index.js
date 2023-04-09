import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';

export default function FormInput({
  // set form name to input
  name = '',
  // set placeholder of input text, number, area, etc
  placeholder = '',
  // set value to input
  value = '',
  // set input size
  size = 'lg',
  // set error to input
  errorMsg,
  // set sufix element to input
  sufixElement,
  // set prefix element to input
  prefixElement,
  // propagate on native blur event
  onBlur,
  // propagate on native change event
  onChange,
  // propagate on sufix click event
  onSufixClick,
  // propagate on prefix click event
  onPrefixClick,
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
        {prefixElement ? (
          <InputRightElement
            onClick={onSufixClick}
          >
            {prefixElement}
          </InputRightElement>
        ) : null}
        <Input
          {...rest}
          size={size}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e)}
          onBlur={(e) => handleBlur(e)}
        />
        {sufixElement ? (
          <InputRightElement
            onClick={onSufixClick}
          >
            {sufixElement}
          </InputRightElement>
        ) : null}
      </InputGroup>
      <Text fontSize={'small'} color={'red'}>{errorMsg || null}</Text>
    </FormControl>
  );
}
