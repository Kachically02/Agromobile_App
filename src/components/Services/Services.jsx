import React from "react";
import Leverageimg from "../../images/leverageimg.svg";
import orderimg1 from "../../images/orderimage1.svg";
import orderimg2 from "../../images/orderimg2.svg";
import orderimg3 from "../../images/orderimg3.svg";
import Fruits from "../../images/fruits.svg";
import Delivery from "../../images/deliveryimg.svg";
import Locals1 from "../../images/locals1.svg";
import Locals2 from "../../images/locals2.svg";
import Locals3 from "../../images/locals3.svg";
import Tips from "../../images/Tipsimg.svg";
import "./Services.css";

function Services() {
  return (
    <div>
      <div className="services">
        <div className="section-one">
          <img src={Leverageimg} alt="" />
          <h4>
            Leveraging Artificial Intelligence (AI) to enhance <br />
            user experience and streamline operations
          </h4>
        </div>

        <div className="section-two">
          <h3>Reliable Farm Produce Delivery, Right to Your Doorstep</h3>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="card">
                  <img src={orderimg1} alt="" />
                  <div className="text">
                    <h5>Place your order</h5>
                    <p>
                      Browse AgroMobile's extensive selection of <br /> fresh
                      foodstuffs and easily place your order <br /> online.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <img src={orderimg2} alt="" />
                  <div className="text">
                    <h5>Order processing</h5>
                    <p>
                      Our team swiftly processes your order,
                      <br /> ensuring quality and freshness for every item
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <img src={orderimg3} alt="" />
                  <div className="text">
                    <h5>Doorstep delivery</h5>
                    <p>
                      Enjoy prompt delivery of your selected <br /> foodstuffs
                      right to your doorstep, hassle-free
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-three">
          <h3>What We Promise?</h3>
          <img src={Fruits} alt="" />
          <h5>Fresh, Convenience and Quality in every order</h5>
        </div>

        <div className="section-four">
          <h3>Skip The Delivery Fees</h3>
          <img src={Delivery} alt="" />
          <h5>
            Our new customers will be getting free delivery on us for a month,
            including some good discounts <br /> on every fresh produce they buy
          </h5>
          <a href="#">Sign Up</a>
        </div>

        <div className="section-five">
          <h3>Where The Locals Dine Best</h3>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="card">
                  <img src={Locals1} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <img src={Locals2} alt="" />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card">
                  <img src={Locals3} alt="" />
                </div>
              </div>
              <h5>
                We take pride in partnering with numerous local farms and
                artisans who supply us with an amazing <br /> variety of food
                throughout the year
              </h5>
            </div>
          </div>
        </div>

        <div className="section-six">
          <h3>Nutrition Tips</h3>
          <img src={Tips} alt="" />
          <h5>
            Our Nutrition Tips offer expert advice to help you make informed
            food choices, enjoy balanced <br/> meals, and boost your well-being.
            Discover delicious recipes and wellness tips for a healthier
            lifestyle <br/> with every bite.
          </h5>
          <button>Back to Top</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
