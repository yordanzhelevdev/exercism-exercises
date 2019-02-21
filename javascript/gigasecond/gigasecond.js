export const gigasecond = (date) => { 
    const dateMs = date.getTime() / 1000;
    const gigasecond = Math.pow(10, 9);
    const timeInMs = dateMs + gigasecond;
    const moment = new Date(timeInMs * 1000);
    return moment;
};
