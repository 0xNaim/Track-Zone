const getLocalTime = () => {
  const date = new Date();
  let hours = date.getHours();
  let miniutes = date.getMinutes();
  let seconds = date.getSeconds();

  let session = 'AM';

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    session = 'PM';
  }

  hours = hours < 10 ? '0' + hours : hours;
  miniutes = miniutes < 10 ? '0' + miniutes : miniutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return `${hours} : ${miniutes} : ${seconds}  ${session}`;
};

export default getLocalTime;
