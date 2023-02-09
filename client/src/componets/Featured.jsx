import React from 'react'
import useFetch from '../hooks/useFetch';
import './Featured.css';

const Featured = () => {

     const { data, loading } = useFetch("/hotels/countByCity?cities=Chennai,Banglore,Kolkata,Mumbai");
    //  console.log(data);
  return (
    <div className='featured'>
        { loading ? "loading please wait a moment":
        <>
        <div className="featuredItem">
            <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/city/600x600/684730.jpg?k=e37b93d88c1fe12e827f10c9d6909a1def7349be2c68df5de885deaa4bc01ee3&o=" alt="" />
            <div className="featureTitle">
                <h1>Chennai</h1>
                <h2>{data[0]} Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/city/600x600/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o=" alt="" />
            <div className="featureTitle">
                <h1>Bangulore</h1>
                <h2>{data[1]} Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" />
            <div className="featureTitle">
                <h1>Kolkata</h1>
                <h2>{data[2]} Properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className='featuredImage' src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" />
            <div className="featureTitle">
                <h1>Mumbai</h1>
                <h2>{data[3]} Properties</h2>
            </div>
        </div>
        </>
        }
        
    </div>
  )
}

export default Featured
