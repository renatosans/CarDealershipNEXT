import { prisma } from '@/utils/connection'
import type { NextApiRequest, NextApiResponse } from 'next'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	switch (req.method) {
		case "POST": {
			return saveCustomer(req, res);
		}
		case "GET": {
			return getCustomers(req, res);
		}
	}
}

const saveCustomer = async (req: NextApiRequest, res: NextApiResponse) => {
    prisma.customer.create({ data: req.body })
    .then((result) => res.send(result))
	.catch((error) => res.status(500).send("Error: " + error.message))
}

const getCustomers = async (req: NextApiRequest, res: NextApiResponse) => {
    prisma.customer.findMany()
    .then((customers) => res.send(customers))
    .catch((error) => res.status(500).send("Error: " + error.message))
}
