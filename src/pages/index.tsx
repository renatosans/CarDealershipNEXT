import Head from 'next/head'
import { carType } from '@/utils/types'
import { useState, useEffect } from 'react'
import Carousel from '@/components/Carousel'
import styles from '@/styles/Home.module.css'
import VehicleList from '@/components/VehicleList'
import toast, { Toaster } from "react-hot-toast"


export default function Home() {
  const [open, setOpen] = useState(false);
  const [cars, setCars] = useState<carType[]>();

  useEffect(() => {
    fetch('api/cars')
    .then(resp => resp.json())
    .then(resultSet => setCars(resultSet))
    .catch(error => console.error(error))
  }, []);

  const toggle = () => {
    setOpen(current => !current);
  }

  const addCar = () => {
    toast.success(`NEW car`);
  }

  const addCustomer = () => {
    toast.success(`NEW customer`);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Car Dealership</title>
        <meta name="description" content="Ride your own car" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster/>
      <Carousel/>
      <div className={styles.actions}>
        <button className={styles.button} onClick={addCar}>Cadastrar veículo</button>
        <button className={styles.button} onClick={addCustomer}>Cadastrar Cliente</button>
      </div>
      <VehicleList items={cars} desc={'Car for sale. Available'} />
    </div>
  )
}
