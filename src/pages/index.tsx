import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';
import { Carousel } from '../components/Carousel';


export default function Home({ data }) {
  const [cars, setCars] = useState<CarProps[]>(data);

  return (
    <>
      <Head>
        <title>Car Dealership</title>
      </Head>

      <main>
        <section className={styles.banner}>
          <Carousel />
        </section>

        <section className={styles.hero}>
          <h1>Veículos em estoque</h1>
          <div className={styles.grid}>{
              // cars.map(car => <CarsCardSmall key={car.id} car={car} />)
          }
          </div>

          <Link href="/inventory">
            <a>
              <button>Ver todos os veículos</button>
            </a>
          </Link>
        </section>
      </main>
    </>
  )
}

/*
export const getStaticProps: GetStaticProps = async ctx => {
  
  const serverSideApi = getServerSideApi(ctx);

  const data = await serverSideApi
    .get(`/api/cars/4`)
    .then(response => response.data);

  return {
    props: {
      data
    },
    revalidate: 60 * 5 // 5 minutes in seconds
  }
}
*/
