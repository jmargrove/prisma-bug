import { prisma } from "./generated/prisma-client"


const load = async () => {
    const user = await prisma.createUser({ name: "Jimbo" })
    console.log(user)
}

load()