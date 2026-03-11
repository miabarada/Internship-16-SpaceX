export async function getNextLaunch() {
   const res = await fetch("https://api.spacexdata.com/v4/launches/next")
   if (!res.ok) throw new Error("Failed to fetch details")
   return res.json()
}

export async function getCompanyInfo() {
   const res = await fetch("https://api.spacexdata.com/v4/company")
   if (!res.ok) throw new Error("Failed to fetch details")
   return res.json()
}

export async function getLaunches(
   page: number,
   search: string,
   filter: string
) {
   const query: any = {}

   if (search) {
      query.name = {
         $regex: search,
         $options: "i"
      }
   }

   if (filter === "success") query.success = true
   if (filter === "failed") query.success= false
   if (filter === "upcoming") query.upcoming = true
   const res = await fetch("https://api.spacexdata.com/v4/launches/query", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         query,
         options: {
            page, 
            limit: 10,
         }
      })
   })

   if (!res.ok) throw new Error("Failed to fetch details")
   return res.json()
}

export async function getLaunch(id: string) {
   const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
   if (!res.ok) throw new Error("Failed to fetch details")
   return res.json()
}

export async function getRocket(id: string) {
   const res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
   if (!res.ok) throw new Error("Failed to fetch details")
   return res.json()
}

export async function getShips(
   page: number, 
   search: string
) {
   const query: any = {}

   if (search) 
      query.name = { 
         $regex: search, 
         $options: "i" 
      }

   const res = await fetch("https://api.spacexdata.com/v4/ships/query", {
      method: "POST",
      headers: { 
         "Content-Type": "application/json" 
      },
      body: JSON.stringify({
         query,
         options: { page, limit: 10 }
      })
   })
   
   if (!res.ok) throw new Error("Failed to fetch details")
   return res.json()
}

export async function getShip(id: string) {
   const res = await fetch(`https://api.spacexdata.com/v4/ships/${id}`)
   if (!res.ok) throw new Error("Failed to fetch ship details")
   return res.json()
}