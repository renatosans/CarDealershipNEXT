import Head from 'next/head'
import { carType } from '@/utils/types'
import { useState, useEffect } from 'react'
import Carousel from '@/components/Carousel'
import styles from '@/styles/Home.module.css'
import VehicleList from '../components/VehicleList'
import VehicleForm from '../components/VehicleForm'
import CustomerForm from '../components/CustomerForm'
import Draggable from 'react-draggable'
import toast, { Toaster } from "react-hot-toast"


export default function Home() {
  const [cars, setCars] = useState<carType[]>();

  const [form1Open, setForm1Open] = useState<boolean>(false);
  const [form2Open, setForm2Open] = useState<boolean>(false);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    fetch('api/cars')
    .then(resp => resp.json())
    .then(resultSet => setCars(resultSet))
    .catch(error => console.error(error))
  }

  const addCar = () => {
    setForm1Open(true);
  }

  const addCustomer = () => {
    setForm2Open(true);
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
      <Draggable>
        <div><VehicleForm parentRef={{ setForm1Open, getCars }} opened={form1Open} /></div>
      </Draggable>
      <Draggable>
        <div><CustomerForm parentRef={{ setForm2Open }} opened={form2Open} /></div>
      </Draggable>
      <VehicleList items={cars} desc={'Car for sale. Available'} />
    </div>
  )
}
