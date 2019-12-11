import React, { Component } from 'react';

import './css/style.css';

//Images

import close from './img/svg/close.svg';
import hero from './img/png/hero.png';
import cart from './img/svg/cart.svg';
import arrowdown from './img/svg/arrow-down.svg';
import footer from './img/svg/footer.svg';
import check from './img/svg/check.svg';



export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: true,
      gch1: false,
      gch2: false,
      gch3: false,
      cch1: false,
      cch2: false,
      cch3: false,
      ach1: false,
      ach2: false,
      ach3: false,
      pch1: false,
      pch2: false,
      pch3: false,
      allItems: []
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

  toggleGlasses1 = () => {
    this.setState(prevState => ({
      gch1: !prevState.gch1
    }));
  }
  toggleGlasses2 = () => {
    this.setState(prevState => ({
      gch2: !prevState.gch2
    }));
  }
  toggleGlasses3 = () => {
    this.setState(prevState => ({
      gch3: !prevState.gch3
    }));
  }

  toggleChair1 = () => {
    this.setState(prevState => ({
      cch1: !prevState.cch1
    }));
  }
  toggleChair2 = () => {
    this.setState(prevState => ({
      cch2: !prevState.cch2
    }));
  }
  toggleChair3 = () => {
    this.setState(prevState => ({
      cch3: !prevState.cch3
    }));
  }

  toggleAirpod1 = () => {
    this.setState(prevState => ({
      ach1: !prevState.ach1
    }));
  }
  toggleAirpod2 = () => {
    this.setState(prevState => ({
      ach2: !prevState.ach2
    }));
  }
  toggleAirpod3 = () => {
    this.setState(prevState => ({
      ach3: !prevState.ach3
    }));
  }

  togglePlant1 = () => {
    this.setState(prevState => ({
      pch1: !prevState.pch1
    }));
  }
  togglePlant2 = () => {
    this.setState(prevState => ({
      pch2: !prevState.pch2
    }));
  }
  togglePlant3 = () => {
    this.setState(prevState => ({
      pch3: !prevState.pch3
    }));
  }

  addItem = (whichProduct) => {
    this.setState({
      allItems: [...this.state.allItems, whichProduct]
    })
  }

  removeItem = (whichProduct) => {
    const newItems = this.state.allItems.filter(
      item => item !== whichProduct
    )
    this.setState({
      allItems: [...newItems]
    })
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

    let countStyle = {
      display: this.state.allItems.length > 0 ? "block" : "none"
    }

    let timerStyle = {
      display: this.state.timer ? "flex" : "none"
    }

    let glassesText = this.state.allItems.includes("glasses") ? "Remove from cart" : "Add to cart"
    
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
          <img src={close} alt="" id="close" onClick={() => { this.closeTimer() }} />

        </section>
        <nav id="menu">
          <h1>Lorem Ipsum</h1>
          <a href="">LOREM</a>
          <a href="">IPSUM</a>
          <a href="">EXCEPTEUR</a>
          <a href="">CONSECTETUR</a>
          <a href="">VENIAM</a>
          <span id="cart">
            <div className="count" style={countStyle}>{this.state.allItems.length}</div>
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
                  <span className="checkbox-custom check1" onClick={() => { this.toggleGlasses1() }}>
                    <img className="selected" src={this.state.gch1 ? check : null} />
                  </span>
                  <span className="checkbox-custom check2" onClick={() => { this.toggleGlasses2() }}>
                    <img className="selected" src={this.state.gch2 ? check : null} />
                  </span>
                  <span className="checkbox-custom check3" onClick={() => { this.toggleGlasses3() }}>
                    <img className="selected" src={this.state.gch3 ? check : null} />
                  </span>
                </div>
              </div>
              <button id="button1" onClick={()=>{
                if (this.state.allItems.includes("glasses")) {
                  this.removeItem("glasses")
                }
                else {
                  this.addItem("glasses")
                }
                }}> {glassesText}</button>
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
                  <span className="checkbox-custom check1" onClick={() => { this.toggleChair1() }}>
                    <img className="selected" src={this.state.cch1 ? check : null} />
                  </span>
                  <span className="checkbox-custom check2" onClick={() => { this.toggleChair2() }}>
                    <img className="selected" src={this.state.cch2 ? check : null} />
                  </span>
                  <span className="checkbox-custom check3" onClick={() => { this.toggleChair3() }}>
                    <img className="selected" src={this.state.cch3 ? check : null} />
                  </span>
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
                <span className="checkbox-custom check1" onClick={() => { this.toggleAirpod1() }}>
                    <img className="selected" src={this.state.ach1 ? check : null} />
                  </span>
                  <span className="checkbox-custom check2" onClick={() => { this.toggleAirpod2() }}>
                    <img className="selected" src={this.state.ach2 ? check : null} />
                  </span>
                  <span className="checkbox-custom check3" onClick={() => { this.toggleAirpod3() }}>
                    <img className="selected" src={this.state.ach3 ? check : null} />
                  </span>
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
                <span className="checkbox-custom check1" onClick={() => { this.togglePlant1() }}>
                    <img className="selected" src={this.state.pch1 ? check : null} />
                  </span>
                  <span className="checkbox-custom check2" onClick={() => { this.togglePlant2() }}>
                    <img className="selected" src={this.state.pch2 ? check : null} />
                  </span>
                  <span className="checkbox-custom check3" onClick={() => { this.togglePlant3() }}>
                    <img className="selected" src={this.state.pch3 ? check : null} />
                  </span>
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
