
export type carType = {
    brand: string;
    model: string;
    year: number;
    img: string;
    color: string;
    mileage: number;
    category: string;
    price: number;
}

export type customerType = {
    first_name: string;
    last_name: string;
    birth_date: Date;
    email: string;
    phone: string;
}

export type salespersonType = {
    first_name: string;
    last_name: string;
    commission: number;
}
