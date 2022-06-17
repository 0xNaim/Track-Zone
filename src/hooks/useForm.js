import { useEffect, useState } from 'react';
import { getLocalDate, getLocalTime, getTitle } from '../utils';

const useForm = ({ init }) => {
  const [baseClock, setBaseClock] = useState(init);

  useEffect(() => {
    const interval = setInterval(() => {
      setBaseClock({
        date: getLocalDate(),
        time: getLocalTime(),
        title: getTitle(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [baseClock]);

  const handleChange = (e) => {
    const { name: key, value } = e.target;
    console.log(key, value);

    setBaseClock((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    baseClock,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
