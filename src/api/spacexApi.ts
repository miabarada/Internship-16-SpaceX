export async function getNextLaunch() {
   const res = await fetch("https://api.spacexdata.com/v4/launches/next")
   return res.json()
}

export async function getCompanyInfo() {
   const res = await fetch("https://api.spacexdata.com/v4/company")
   return res.json()
}