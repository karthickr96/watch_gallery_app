import React from 'react';
import NewArrivals from '../NewArrivals/newArrivalls';
import PopularItems from '../Popular-items/popularItems';
import popularItems from '../../localStorage/popularItems.json';
import logo from '../../images/logo.png.webp'
import newArrivals from '../../localStorage/newArrivals.json'
import { BsBoxSeam } from "react-icons/bs";
// import { CiUnlock } from 'react-icons/ci';
// import { FiRefreshCcw } from "react-icons/fi"
import './home.css'
export default function Home (){

    return(
        <div className="container">
            <div className="adv-board">
                <div className="adv-content">
                    <div className="adv-left">
                        <h1 className='adv-heading'>Select your new perfect style</h1>
                        <p className='adv-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officiis magni dolor ex quae at recusandae omnis dolorem iusto, quidem architecto eligendi, provident, esse sapiente dicta. Enim quam atque quas</p>
                        <button className='shop-btn'>Shop Now</button>
                    </div>
                    <div className="adv-right">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="watch-img" />
                    </div>
                </div>
            </div>
            <section className="new-arrivals-part">
                <div className='new-arrivals-content'>
                <h2 className='new-arrivals-title'>New Arrivals</h2>
                <div className="img-container">
                { newArrivals.map((value)=>{
                    return(
                        <NewArrivals key={value.id} new={value}/>
                        )
                })
                }
                </div>
                </div>
            </section>
            <section className="popular-items">
                <div className="popular-items-contents">
                    <div className="popular-items-heading">
                        <h1 className='popular-items-title'>Popular Items</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, incidunt magnam? Magni aspernatur, consequatur ad ex animi sit nesciunt iure omnis dolorum quae! Facere accusantium temporibus culpa id odit amet.</p>
                    </div>

                <div className="popular-item-product">
                    { popularItems.map((value)=>{
                            return(
                                <PopularItems key={value.id} new={value}/>
                            )
                        })
                    }

                    {/* <div className="popular-item-image">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp" alt="" />
                        <h2>Thermo Ball Gloves</h2>
                        <p>$123</p>
                    </div>
                    <div className="popular-item-image">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp" alt="" />
                        <h2>Thermo Ball Gloves</h2>
                        <p>$124</p>
                    </div>
                    <div className="popular-item-image">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp" alt="" />
                        <h2>Thermo Ball Gloves</h2>
                        <p>$125</p>
                    </div>
                    <div className="popular-item-image">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp" alt="" />
                        <h2>Thermo Ball Gloves</h2>
                        <p>$126</p>
                    </div>
                    <div className="popular-item-image">
                        <img src="https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png.webp" alt="" />
                        <h2>Thermo Ball Gloves</h2>
                        <p>$123</p>
                    </div> */}
                </div>

                </div>
            </section>
            <section className="footer">
                <div className="footer-top-section">
                    <div className="footer-red">
                        <div className="footer-contents">
                            <div className="footer-items">
                                <BsBoxSeam size="50"/>
                                <h1 className='head-title'>Free Shipping Method</h1>
                                <p className='para-title'>Lorem ipsum dolor sit amet consectetur, repudiandae?</p>
                            </div>
                            <div className="footer-items">
                                <BsBoxSeam size="50"/>
                                <h1 className='para-title'>Free Shipping Method</h1>
                                <p className='para-title'>Lorem ipsum dolor sit amet consectetur, repudiandae?</p>
                            </div>
                            <div className="footer-items">
                                <BsBoxSeam size="50"/>
                                <h1 className='title'>Free Shipping Method</h1>
                                <p className='para-title'>Lorem ipsum dolor sit amet consectetur, repudiandae?</p>
                            </div>Home
                        </div>
                    </div>
                </div>    
                <div className="footer-bottom-section">
                    <div className="footer-main">
                    <div className="footer-bottom">
                        <div className="content-one">
                            <img src={logo} alt="img-logo" />
                            <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium, consequatur rem illo error libero.</p>
                        </div>
                        <div className="quick-links">
                            <ul className="quick-link-items">
                                <li>About</li>
                                <li>Offer&Discounts</li>
                                <li>Get Coupons</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="quick-links">
                            <ul className="quick-link-items">
                                <li>About</li>
                                <li>Offer&Discounts</li>
                                <li>Get Coupons</li>
                                <li>Contact us</li>
                            </ul>
                        </div>
                        <div className="quick-links">
                            <ul className="quick-link-items">
                                <li>About</li>
                                <li>Offer&Discounts</li>
                                <li>Get Coupons</li>
                                <li>Contact us</li>
                            </ul>
                        </div>


                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}