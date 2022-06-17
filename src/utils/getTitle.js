const getTitle = () => new Date().toString().split('(')[1].split(')')[0];

export default getTitle;
