import { addMinutes } from 'date-fns';
import { useEffect, useState } from 'react';

const TIMEZONE_OFFSET = {
  PST: -7 * 60,
  EST: -4 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: 6 * 60,
};

const useClock = (timezone, offset) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
  const [localTimeZone, setLocalTimeZone] = useState('');
  const [utc, setUtc] = useState(null);

  useEffect(() => {
    let utcDate = new Date();
    const loOffset = utcDate.getTimezoneOffset();
    utcDate = addMinutes(utcDate, loOffset);
    setUtc(utcDate);
    setLocalOffset(loOffset);
  }, []);

  useEffect(() => {
    if (utc !== null) {
      if (timezone) {
        offset = TIMEZONE_OFFSET[timezone] ?? offset;
        const newUtc = addMinutes(utc, offset);
        setLocalDate(newUtc);
      } else {
        const newUtc = addMinutes(utc, -localOffset);
        const dateStrArray = newUtc.toUTCString().split(' ');
        setLocalDate(newUtc);
        setLocalTimeZone(dateStrArray[dateStrArray.pop()]);
      }
    }
  }, [utc, timezone, offset]);

  return {
    date: localDate,
    dateUtc: utc,
    offset: offset || -localOffset,
    timezone: timezone || localTimeZone,
  };
};

export default useClock;
