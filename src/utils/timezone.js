import { TIMEZONE_OFFSET } from '../constants/timezone';

const getOffset = (start = -11.5, end = 12) => {
  const offsets = [];
  for (let i = start; i <= end; i += 0.5) {
    offsets.push(i);
  }
  return offsets;
};

const getTimezone = () => {
  return ['UTC', 'GMT', ...Object.keys(TIMEZONE_OFFSET)];
};

export { getOffset, getTimezone };
