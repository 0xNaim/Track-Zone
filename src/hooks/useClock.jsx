import { addMinutes } from 'date-fns';
import { useEffect, useState } from 'react';

const TIMEZONE_OFFSET = {
  PST: -7 * 60,
  EST: -4 * 60,
  EDT: -4 * 60,
  BST: 1 * 60,
  MST: 6 * 60,
};

const useClock = (timezone, offset = 0) => {
  const [localDate, setLocalDate] = useState(null);
  const [localOffset, setLocalOffset] = useState(0);
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
        setLocalDate(newUtc);
        // TODO: find timezone
      }
    }
  }, [utc]);

  return {
    date: localDate,
    dateUtc: utc,
    offset,
    timezone,
    localOffset,
  };
};

export default useClock;
