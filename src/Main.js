import React, { Component } from 'react';

import './css/style.css';

//Images

import close from './img/svg/close.svg';
import hero from './img/png/hero.png';
import cart from './img/svg/cart.svg';
import arrowdown from './img/svg/arrow-down.svg';
import footer from './img/svg/footer.svg';



export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: true
    }
  }

  getTime = () => {
    var start = new Date().getTime();
    let finish = new Date("Jan 1, 2020 00:00:00").getTime();

    var timedifference = finish - start;

    var days = Math.floor(timedifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timedifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timedifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timedifference % (1000 * 60)) / 1000);

    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
    if (timedifference < 0) {
      clearInterval(this.interval);
    }
  }

  closeTimer = () => {
    this.setState({
      timer: false
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
    this.getTime()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let timerStyle = {
      display: this.state.timer ? "flex" : "none"
    }
    return (
      <main>
        <section id="timer-bar" style={timerStyle}>
          <p id="timer-text">Lorem ipsum dolor sit amet, Countdown to 2020</p>
          <div id="timer">
            <span>
              <p className="number days">{this.state.days}</p>
              <p className="time">days</p>
            </span>
            <span>
              <p className="number hours">{this.state.hours}</p>
              <p className="time">hours</p>
            </span>
            <span>
              <p className="number minutes">{this.state.minutes}</p>
              <p className="time">minutes</p>
            </span>
            <span>
              <p className="number seconds">{this.state.seconds}</p>
              <p className="time">seconds</p>
            </span>
          </div>
          <img src={close} alt="" id="close" onClick={() => {this.closeTimer()}} />

        </section>
        <nav id="menu">
          <h1>Lorem Ipsum</h1>
          <a href="">LOREM</a>
          <a href="">IPSUM</a>
          <a href="">EXCEPTEUR</a>
          <a href="">CONSECTETUR</a>
          <a href="">VENIAM</a>
          <span id="cart">
            <div className="count"></div>
            <img id="cart-pic" src={cart} alt="" />
            <img id="arrow-pic" src={arrowdown} alt="" />
          </span>
          <div id="cart-list">
            <div id="item-wrapper">

            </div>
          </div>
        </nav>
        <section id="hero">
          <div id="left">
            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
            <div className="desc-wrapper">
              <p className="hero-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  </p>
              <p className="hero-desc">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
              <p className="hero-desc">nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
            </div>
            <button>Lorem</button>
          </div>
          <img id="hero-man" src={hero} alt="" />
        </section>
        <section id="product-group">
          <div className="product-wrapper">
            <div className="product" id="product1">
            <div id="glasses" className="p-img"></div>
              <div className="product-desc">
                <h1>Lorem ipsum 1</h1>
                <p>Lorem ipsum dolor sit amet, </p>
                <p>consectetur adipiscing elit.</p>
                <div className="checkboxes">
                  <input type="checkbox" name="" id="p11" />
                  <label for="p11"></label>
                  <input type="checkbox" name="" id="p12" />
                  <label for="p12"></label>
                  <input type="checkbox" name="" id="p13" />
                  <label for="p13"></label>
                </div>
              </div>
              <button id="button1">Add to cart</button>
            </div>
          </div>
          <div className="product-wrapper">
            <div className="product" id="product2">
              <div id="chair" className="p-img"></div>
              <div className="product-desc">
                <h1>Lorem ipsum 2</h1>
                <p>Lorem ipsum dolor sit amet, </p>
                <p>consectetur adipiscing elit.</p>
                <div className="checkboxes">
                  <input type="checkbox" name="" id="p21" />
                  <label for="p21"></label>
                  <input type="checkbox" name="" id="p22" />
                  <label for="p22"></label>
                  <input type="checkbox" name="" id="p23" />
                  <label for="p23"></label>
                </div>
              </div>
              <button id="button2">Add to cart</button>
            </div>
          </div>
          <div className="product-wrapper">
            <div className="product" id="product3">
              <div id="airpods" className="p-img"></div>
              <div className="product-desc">
                <h1>Lorem ipsum 3</h1>
                <p>Lorem ipsum dolor sit amet, </p>
                <p>consectetur adipiscing elit.</p>
                <div className="checkboxes">
                  <input type="checkbox" name="" id="p31" />
                  <label for="p31"></label>
                  <input type="checkbox" name="" id="p32" />
                  <label for="p32"></label>
                  <input type="checkbox" name="" id="p33" />
                  <label for="p33"></label>
                </div>
              </div>
              <button id="button3">Add to cart</button>
            </div>
          </div>
          <div className="product-wrapper">
            <div className="product" id="product4">
              <div id="plant" className="p-img"></div>
              <div className="product-desc">
                <h1>Lorem ipsum 4</h1>
                <p>Lorem ipsum dolor sit amet, </p>
                <p>consectetur adipiscing elit.</p>
                <div className="checkboxes">
                  <input type="checkbox" name="" id="p41" />
                  <label for="p41"></label>
                  <input type="checkbox" name="" id="p42" />
                  <label for="p42"></label>
                  <input type="checkbox" name="" id="p43" />
                  <label for="p43"></label>
                </div>
              </div>
              <button id="button4">Add to cart</button>
            </div>
          </div>
        </section>

        <footer>
          <img src={footer} alt="" className="logo" />
          <div className="footerbox">
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="footerbox">
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="footerbox">
            <h2>Lorem Ipsum</h2>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
            <p>Lorem Ipsum</p>
          </div>
        </footer>
      </main>
    )
  }



}
