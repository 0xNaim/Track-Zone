import styled from 'styled-components';
import Label from '../../ui/input/Label';
import TextInput from '../../ui/input/TextInput';

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputGroup = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <TextInput
        type={type}
        name={name}
        id={name}
        placeholder={placeholder ?? ''}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

export default InputGroup;
