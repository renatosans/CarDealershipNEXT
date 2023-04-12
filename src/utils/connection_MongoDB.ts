import { PrismaClient } from '@prisma/client';


const host       = 'localhost'
const port       = 27017
const database   = 'car_dealership'
const direct     = true
const setDirect  = 'directConnection=true'


// DATABASE_URL="mongodb://localhost:27017/car_dealership?directConnection=true"
let url = `mongodb://${host}:${port}/${database}`;
if (direct) {
    url = url + `?${setDirect}`;
}

const prisma = new PrismaClient({datasources: { db: { url: url } } })

export { prisma }
