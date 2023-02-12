import React from 'react'
import "./clientLogo.css"
import tinder from "../../assets/image/tinder.png"
import airbnb from "../../assets/image/airbnb.png"
import microsoft from "../../assets/image/microsoft.png"
import hubspot from "../../assets/image/hubspoot.png"

const ClientLogo = () => {
  return (
    <div className='logo__content flex'>
        <img src={tinder} alt="tinder__logo" />
        <img src={airbnb} alt="airbnb__logo" />
        <img src={microsoft} alt="microsoft__logo" />
        <img src={hubspot} alt="hubspot__logo" />
        <img src={tinder} alt="tinder__logo" />
    </div>
  )
}

export default ClientLogo