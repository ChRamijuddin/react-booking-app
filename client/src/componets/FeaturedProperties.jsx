import React from 'react'
import useFetch from '../hooks/useFetch';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
    const { data, loading } = useFetch("/hotels?featured=true&limit=4");
    // console.log(data)
    return (
        <div className='fp'>
            {loading ? "loading": 
            <>
            {data.map((item)=>{
                return(
                    <div className='fpItem' key={item._id}>
                    <img src={item.photos[0]} alt="" className='fpImage' />
                    <span className='fpName'>{item.name}</span>
                    <span className='fpCity'>{item.city}</span>
                    <span className='fpPrice'>Starting from ${item.cheapestPrice}</span>
                    {item.rating && 
                       <div className="fpRating">
                       <button>{item.rating}</button>
                       <span>Excellent</span>
                   </div>
                    }
                    
                </div>
                )
            })}
                
            </>
            }
           
            {/* <div className='fpItem'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/421852968.webp?k=f3889222c82f4a8e3783dddb5f1cc04d6140eeb2d5cb8297817a15aacfe4d191&o=&s=1" alt="" className='fpImage' />
                <span className='fpName'>6 Continents Apartments</span>
                <span className='fpCity'>Banglore</span>
                <span className='fpPrice'>Starting from $550</span>
                <div className="fpRating">
                    <button>8.1</button>
                    <span>Fabulous</span>
                </div>
            </div>
            <div className='fpItem'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className='fpImage' />
                <span className='fpName'>7Seasons Apartments</span>
                <span className='fpCity'>Mumbai</span>
                <span className='fpPrice'>Starting from $110</span>
                <div className="fpRating">
                    <button>8.0</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className='fpItem'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className='fpImage' />
                <span className='fpName'>Aparthotel Stare Miasto</span>
                <span className='fpCity'>Kolkata</span>
                <span className='fpPrice'>Starting from $356</span>
                <div className="fpRating">
                    <button>8.7</button>
                    <span>Very Good</span>
                </div>
            </div> */}
        </div>
    )
}

export default FeaturedProperties
