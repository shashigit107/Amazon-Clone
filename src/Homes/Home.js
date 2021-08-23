import React from "react"
import Product from "../Products/Product"
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <img className="home__image"
    
        src="https://www.info4blog.it/wp-content/uploads/2020/11/Immagine-2020-11-09-151907-1024x499.jpg"
         alt="not found" />
      <div className="home__row1">
         <Product
           id="12341"
          title="Eduction technology books..Written by mahershy walmiki,inside this books you will
           learn about eduction system and their techniqe, and very importan for exam poin of view!"
          price={300}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/514jpqsi4eL._SX311_BO1,204,203,200_.jpg"/>
      
          <Product
          id="12342"
          title="HUG PUPPY Bluetooth Wireless Smart Fitness Watch for Boys,Men,Kids,Women Sports Watch Heart Rate, and BP Monitor, Calories Counter"
          price={12000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41vLJNzdSRL.jpg"/>      
      </div>
      <div className="home__row1">
      <Product
          id="12343"
          title="Mi 80 cm (32 inches) HD Ready Android Smart LED TV 4A PRO | L32M5-AL (Black)"
          price={47000}
          rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/71Z%2Bl05eSIS._SL1188_.jpg"/>
         <Product
         id="12344"
          title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
          price={120000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SX679_.jpg"/>
       <Product
          id="12345"
          title="Cloth Clock Women's Crepe Printed Unstitched Salwar Suit Dress Material (Free Size_Black Yellow)"
          price="11,000"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61xucW4CViL._UY741_.jpg"/>
      </div>
      <div className="home__row1">
      <Product
          id="12346"
          title="TANOSHII Fast Car Charger, 30W/5.4A(QC3.0+2.4A) Car Charger Adapter Dual USB Car Charger with LED Voltage for iPhone,redmi, Samsung, Dash Cam and More"
          price={4000}
          rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/61wTtA88FML._SY741_.jpg"/>
         <Product
         id="12347"
          title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
          price={120000}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SX679_.jpg"/>
       <Product
       id="12348"
          title="oraimo Firefly-2S 5.0V/2.4A Dual USB Fast Wall Charger and Micro-USB Cable with Multi-Protection"
          price="11,000"
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/41v82KfCUuL._SX300_SY300_QL70_FMwebp_.jpg"/>
      </div>
      <div className="home__row1">
      <Product
      id="12349"
          title="Whirlpool 7.5 Kg 5 Star Semi-Automatic Top Loading Washing Machine (ACE 7.5 TURBO DRY, Wine Dazzle)"
          price={43000}
          rating={5}
         image="https://images-na.ssl-images-amazon.com/images/I/815T7SwcWfL._SL1500_.jpg"/>
         </div> 

    </div>
  )
}
export default Home;