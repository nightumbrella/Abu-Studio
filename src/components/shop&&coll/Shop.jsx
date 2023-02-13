import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "./shop.css";
import first from "../../assets/image/coll-1.png";
import second from "../../assets/image/coll-2.png";
import third from "../../assets/image/coll-3.png";
import baby from "../../assets/image/baby.png";
import { AiOutlineHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { SiAppstore } from "react-icons/si";

const Shop = () => {
  return (
    <div className="hero">
      <div className="shop top__section flex">
        <div className="shop__inner">
          <h3>Offer This Week</h3>
          <h1>Suit For Baby Kids</h1>
          <button>
            <SiAppstore className="siappstore" />
            Shop Now
          </button>
        </div>
        <div>
          <img src={baby} alt="baby__photo" />
        </div>
        <div></div>
      </div>

      <div className="collection">
        <h2>Favorite Collection</h2>

        <div className="collection__arrow">
          <p>
            It is a long established fact that a reader will be distracted by
            the <br /> readable content of a page when looking at its layout
          </p>
          <BsArrowUpRight className="bsarrowupright" />
        </div>

        <div className="grid coll__image">
          <div className="inner__grid">
            <img src={first} alt="first__image" />
            <div className="inner__grid__title">
              <div>
                <h3>Man Suit Set</h3>
                <span className="start__list">
                  <AiFillStar className="aifillstar"/>
                  <AiFillStar className="aifillstar"/>
                  <AiFillStar className="aifillstar"/>
                  <AiFillStar className="aifillstar"/>
                  <AiOutlineStar className="aifillstar"/>
                  (23)
                </span>
              </div>
              <AiOutlineHeart className="aioutlineheart"/>
            </div>
            <div className="price__section">
              <h4>100$</h4>
              <h3>-20%</h3>
            </div>
          </div>

          <div className="inner__grid">
            <img src={second} alt="first__image" />
            <div className="inner__grid__title">
              <div>
                <h3>Man Suit Set</h3>
                <span className="start__list">
                  <AiFillStar className="aifillstar"/>
                  <AiFillStar className="aifillstar"/>
                  <AiFillStar className="aifillstar"/>
                  <AiFillStar className="aifillstar"/>
                  <AiOutlineStar className="aifillstar"/>
                  (23)
                </span>
              </div>
              <AiOutlineHeart className="aioutlineheart"/>
            </div>
            <div className="price__section">
              <h4>100$</h4>
              <h3>-20%</h3>
            </div>
          </div>

          <div className="inner__grid">
            <img src={third} alt="first__image" />
            <div className="inner__grid__title">
              <div>
                <h3>Man Suit Set</h3>
                <span className="start__list">
                  <AiFillStar className="aifillstar"/>
                  <AiFillStar className="aifillstar"/>
                  <AiFillStar className="aifillstar"/>
                  <AiFillStar className="aifillstar"/>
                  <AiOutlineStar className="aifillstar"/>
                  (23)
                </span>
              </div>
              <AiOutlineHeart className="aioutlineheart"/>
            </div>
            <div className="price__section">
              <h4>100$</h4>
              <h3>-20%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
