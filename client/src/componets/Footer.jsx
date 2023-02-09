import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
       <div className="fLists">
            <ul className='fList'>
                <li className='fLIstItem'>Countries</li>
                <li className='fLIstItem'>Regions</li>
                <li className='fLIstItem'>City</li>
                <li className='fLIstItem'>District</li>
                <li className='fLIstItem'>Airports</li>
                <li className='fLIstItem'>Hotels</li>
                <li className='fLIstItem'>Place of Interest</li>
            </ul>
            <ul className='fList'>
                <li className='fLIstItem'>Homes</li>
                <li className='fLIstItem'>Apartments</li>
                <li className='fLIstItem'>Resorts</li>
                <li className='fLIstItem'>Villas</li>
                <li className='fLIstItem'>Hotels</li>
                <li className='fLIstItem'>B&B's</li>
                <li className='fLIstItem'>Guest House</li>
            </ul>
            <ul className='fList'>
                <li className='fLIstItem'>Unique places to stay</li>
                <li className='fLIstItem'>All destinations</li>
                <li className='fLIstItem'>All flight destinations</li>
                <li className='fLIstItem'>Discover</li>
                <li className='fLIstItem'>Reviews</li>
                <li className='fLIstItem'>Discover monthly stays</li>
                <li className='fLIstItem'>Unpacked: Travel articles</li>
            </ul>
            <ul className='fList'>
                <li className='fLIstItem'>Car hire</li>
                <li className='fLIstItem'>Flight finder</li>
                <li className='fLIstItem'>Restaurant reservations</li>
                <li className='fLIstItem'>Booking.com for Travel Agents</li>
            </ul>
            <ul className='fList'>
                <li className='fLIstItem'>Coronavirus (COVID-19) FAQs</li>
                <li className='fLIstItem'>About Booking.com</li>
                <li className='fLIstItem'>Customer Service help</li>
                <li className='fLIstItem'>Partner help</li>
                <li className='fLIstItem'>Careers</li>
                <li className='fLIstItem'>Sustainability</li>
                <li className='fLIstItem'>Press centre</li>
                <li className='fLIstItem'>Travel Communities</li>
                <li className='fLIstItem'>Seasonal and holiday deals</li>
            </ul>
       </div>
       <div className="fText">Copyright @ 2023 bookyourneed.</div>
    </div>
  )
}

export default Footer

