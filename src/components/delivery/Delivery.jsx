import React from 'react'
import {RiMoneyDollarCircleLine} from "react-icons/ri"
import {MdOutlineLocalShipping} from "react-icons/md"
import {GiReceiveMoney} from "react-icons/gi"
import "./deliviry.css"
import arrow from "../../assets/image/Arrow 2.png"

const Delivery = () => {
  return (
    <div className='delivery'>
        <h1>Our Delivery Process</h1>
        <div className='process grid'>
            <div>
        <RiMoneyDollarCircleLine className='icons'/>
    <h3>Money Back</h3>
            </div>
        <img src={arrow} alt="" />
        <div>
        <MdOutlineLocalShipping className='icons'/>
    <h3>Free Shipping</h3>
        </div>
        <img src={arrow} alt="" />
        <div>
        <GiReceiveMoney className='icons'/>
    <h3>Cash on Delivery</h3>
        </div>
        </div>
    </div>
  )
}

export default Delivery