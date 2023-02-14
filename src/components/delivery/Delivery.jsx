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
        <RiMoneyDollarCircleLine className='icons'/>
        <img src={arrow} alt="" />
        <MdOutlineLocalShipping className='icons'/>
        <img src={arrow} alt="" />
        <GiReceiveMoney className='icons'/>
        </div>
    </div>
  )
}

export default Delivery