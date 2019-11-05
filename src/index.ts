import { Prisma } from '../generated/prisma-client'

const endpoint = `http://localhost:4466`

export const prisma = new Prisma({
    endpoint
})


const main = async () => {
    const [user] = await prisma.users()
    if (user) {
        const node = await prisma.node({ id: user.id })
        console.log(node)
    }
}

main()