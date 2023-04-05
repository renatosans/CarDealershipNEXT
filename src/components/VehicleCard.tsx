import Image from 'next/image'
import { carType } from '../utils/types'
import styles from '../styles/CarDetails.module.scss'


type props = {
    car: carType;
    currency: string;  
}

const VehicleCard = ({car, currency}: props) => {
    const getInfo = (car: carType) => {
        return `${car.brand} ${car.model} ${car.year}`;
    }
    
    return (
      <div className={styles.container}>
        <Image src={car.img} alt={getInfo(car)} width={250} height={250} />
        <h1 className={styles.title}>{getInfo(car)}</h1>
        <span className={styles.price}>{currency} {car.price} </span>
        <p className={styles.desc}>{car.color}</p>
        <p className={styles.desc}>{car.category}</p>
      </div>
    )
}

export default VehicleCard