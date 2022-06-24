import React from 'react'
import styles from './Home.module.css'

const Home = () => {

  const cardData = [
    {
      name: "In  Stock",
      value: 104
    },
    {
      name: " Sold Items",
      value: 43
    }
    // {
    //   name: "Pending Orders ",
    //   value: 44
    // },
    // {
    //   name: " Total Revenue ",
    //   value: 74860.90
    // }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.top_card}>

        {
          cardData.map((elem) => {
            return (
              <>
                <div key={elem.name} className={styles.card}>
                  <h4> {elem.name}</h4>
                  <h5>{elem.value}</h5>
                </div>
              </>)
          })}
      </div>
      <div className={styles.orders}>

      </div>
    </div>
  )
}

export default Home