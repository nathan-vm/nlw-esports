/**
 * @param hoursString 18:00
 * @returns 1080
 */
export const convertHourStringToMinutes = (hoursString: string) => {
  const [hours, minutes] = hoursString.split(':').map(Number)

  const minutesAmount = hours * 60 + minutes

  return minutesAmount
}