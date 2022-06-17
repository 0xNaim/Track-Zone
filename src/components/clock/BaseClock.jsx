import styled from 'styled-components';
import useForm from '../../hooks/useForm';
import getOffset from '../../utils/getOffset';
import InputGroup from '../shared/form/InputGroup';
import Button from '../ui/button/Button';

const init = {
  date: '',
  time: '',
  title: '',
};

const BaseClock = () => {
  const { baseClock, handleChange, handleSubmit } = useForm({ init });

  return (
    <Container>
      <H1>
        {baseClock.title} ({getOffset()})
      </H1>
      <H2>{baseClock.time}</H2>
      <H3>{baseClock.date}</H3>

      <form autoComplete='off' onSubmit={handleSubmit}>
        <Div>
          <InputGroup
            type={'text'}
            label={'Title'}
            name={'title'}
            placeholder={'Clock Title'}
            onChange={handleChange}
          />
          <InputGroup
            type={'time'}
            label={'Time'}
            name={'time'}
            placeholder={'Custom Time'}
            onChange={handleChange}
          />
          <InputGroup
            type={'date'}
            label={'Date'}
            name={'date'}
            placeholder={'Custom Date'}
            onChange={handleChange}
          />
        </Div>

        <Button type='submit'>Update Time</Button>
      </form>
    </Container>
  );
};

export default BaseClock;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;
  border: 1px solid #333;
  margin: 2rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const H2 = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;
