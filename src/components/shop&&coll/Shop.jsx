import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import "./shop.css";
import first from "../../assets/image/coll-1.png";
import second from "../../assets/image/coll-2.png";
import third from "../../assets/image/coll-3.png";
import { AiOutlineHeart, AiFillStar, AiOutlineStar } from "react-icons/ai";

const Shop = () => {
  return (
    <div className="hero">
      <div className="shop"></div>
      <div className="collection">
        <h2>Favorite Collection</h2>
        <div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout
          </p>
          <BsArrowUpRight />
        </div>
        <div className="grid coll__image">

          <div>
            <img src={first} alt="first__image" />
            <div>
              <div>
                <h3>Man Suit Set</h3>
                <span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  (23)
                </span>
              </div>
              <AiOutlineHeart />
            </div>
            <div>
              <h4>100$</h4>
              <h3>-20%</h3>
            </div>
          </div>

          <div>
            <img src={second} alt="first__image" />
            <div>
              <div>
                <h3>Man Suit Set</h3>
                <span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  (23)
                </span>
              </div>
              <AiOutlineHeart />
            </div>
            <div>
              <h4>100$</h4>
              <h3>-20%</h3>
            </div>
          </div>

          <div>
            <img src={third} alt="first__image" />
            <div>
              <div>
                <h3>Man Suit Set</h3>
                <span>
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  (23)
                </span>
              </div>
              <AiOutlineHeart />
            </div>
            <div>
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
