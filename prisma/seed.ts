import { prisma } from '@/utils/connection'
import { allCars, allCustomers, allSalesperson } from '@/utils/seedData'


// run the command on terminal to populate data
// >  prisma db seed
async function main() {

    await prisma.cars_for_sale.createMany({ data: allCars })
    await prisma.customer.createMany({ data: allCustomers })
    await prisma.salesperson.createMany({ data: allSalesperson })
}

main()
.catch(async (e) => {
    console.error(e);
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect();
})
