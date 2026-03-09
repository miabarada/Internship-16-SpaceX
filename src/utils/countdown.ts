export function getCountdown(date: string) {
   const now = new Date().getTime()
   const launchDate = new Date(date).getTime()

   const difference = launchDate - now;

   const days = Math.floor(difference / (1000 * 60 * 60 * 24))
   const hours = Math.floor((difference / (1000 * 60 * 60) % 24))
   const minutes = Math.floor((difference / (1000 * 60) % 60))
   const seconds = Math.floor((difference / 1000) % 60)

   return { days, hours, minutes, seconds}
}