import React from 'react'
import Featured from '../componets/Featured';
import FeaturedProperties from '../componets/FeaturedProperties';
import Footer from '../componets/Footer';
import Hearder from '../componets/Hearder';
import MailList from '../componets/MailList';
import Navbar from '../componets/Navbar';
import PropertyList from '../componets/PropertyList';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
       <Navbar />
       <Hearder />
       <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home guests love</h1>
        <FeaturedProperties />
        <MailList />
       <Footer />
       </div>
    </div>
  )
}

export default Home
