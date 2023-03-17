
import { carType, customerType, salespersonType } from './types'


export const allCars: carType[] = [
    {
      brand: "Hyundai",
      model: "i30",
      year: 2016,
      img: "/img/cars/hyundai_i30.png",
      // description: "1.8 MPI 16V GASOLINA 4P AUTOMATICO",
      // category: "hatch",
      color: "Azul",
      price: 81040
    },
    {
      brand: "Honda",
      model: "fit",
      year: 2019,
      img: "/img/cars/honda_fit.png",
      // description: "1.5 LX 16V FLEX 4P AUTOMÁTICO",
      // category: "hatch",
      color: "Vermelho",
      price: 76035
    },
    {
      brand: "Toyota",
      model: "yaris",
      year: 2019,
      img: "/img/cars/toyota_yaris.png",
      // description: "1.3 16V XL Multidrive",
      // category: "hatch",
      color: "Branco",
      price: 84056
    },
    {
      brand: "Volkswagen",
      model: "golf",
      year: 2017,
      img: "/img/cars/volkswagen_golf.png",
      // description: "1.4 Tsi Highline Flex Aut.5p",
      // category: "hatch",
      color: "Branco",
      price: 79011
    }
  ]

  export const allCustomers: customerType[] = [
    {
      first_name: "Herbert",  
      last_name: "Olga",
      birth_date: new Date("1982-11-10"),
      email:  "herbertolga@gmail.com.ca",
      phone: "99727701"
    },
    {
        first_name: "Isabela",
        last_name: "Cristina",
        birth_date: new Date("1997-05-05"),
        email: "isabela@gmail.com",
        phone: "99700522"
    },
    {
        first_name: "Caio",
        last_name: "Batista",
        birth_date: new Date("1990-10-06"),
        email: "caio_batista@hotmail.com",
        phone: "99700113"
    }
  ]
