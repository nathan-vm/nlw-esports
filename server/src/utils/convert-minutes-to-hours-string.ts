/**
 * @param hoursString 18:00
 * @returns 1080
 */
export const convertMinutesToHoursString = (minutesAmount: number) => {

  const hours = Math.floor(minutesAmount / 60)
  const minutes = minutesAmount % 60

  const hoursString =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`

  return hoursString
}