const startTimes = new Date().getTime()
const durationTimes = 1000 * 60 * 60 * 24 * 3
const expiresTimes = startTimes + durationTimes

export function isSession(endTimes: number) : boolean {
  if (startTimes > endTimes) {
    return true
  }
  return false
}

export function getExpiresTimes() : number {
  return expiresTimes
}
