const addMinutes = (time: string, minutes: number): Date => {
  const date = new Date(time);
  return new Date(date.getTime() + minutes * 60000);
};

const timeToLocalString = (time: string | Date): string => {
  const date = new Date(time);

  return date.toLocaleTimeString('ru-RU').slice(0, -3);
};

export const departureAndArrivalTime = (
  startDate: string,
  duration: number
): string => {
  const startTime = timeToLocalString(startDate);
  const endTime = timeToLocalString(addMinutes(startDate, duration));

  return `${startTime} – ${endTime}`;
};

export const minutesToHours = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const restMinutes = minutes % 60;

  return `${hours}ч ${restMinutes}м`;
};
