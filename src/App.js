import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import React, { Component } from 'react';
import "./App.css";
import anime from "animejs";
import picture from "./S__42827780.jpg";
import omg from "./omg.jpg";
import BirthdayCard from "./card";

class App extends Component {

  constructor(){
    super();
    this.state = {
      answer: false,
      value: "",
      incorrect: false
    }
  }


  btn1Clicked = () => {
    if(this.state.value.toUpperCase() === "BL"){
      this.setState({
        answer: true
      });
      anime({
        targets: '.polymorph',
        points: [
            { value: '215, 110 0, 110 0, 0 47.7, 0 67, 76' },
            { value: '215, 110 0, 110 0, 0 0, 0 67, 76' }
        ],
        easing: 'easeOutQuad',
        duration: 1200,
        loop: false
      });

      anime({
          targets: '#blip',
          opacity: 1,
          duration: 500,
          translateY: 150
      })
    }
    else{
      this.setState({
        incorrect: true
      });
      setInterval(()=>{
        this.setState({
          incorrect: false
        });
      }, 1000);
    }
    
  }

  handleChange = (e) => {
    this.setState({value: e.target.value});
  }

  render() {


    var TxtRotate = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function() {
        that.tick();
      }, delta);
    };

    window.onload = function() {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };

    let div_style = this.state.answer ? {backgroundImage: `url(${picture})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"} : {backgroundImage: "none"};
    let hidden = this.state.answer ? {display: "none"} : {display: "block"};
    let input_classes = this.state.incorrect ? ["form-control", "invalid"] : ["form-control"];

    return (
      <div className="App" style={div_style}>
        <img id="omg" src={omg} style={hidden} title="BL" alt="BL" />
        <h2 style={hidden} id="question">請問這位喜歡看的東西是什麼?</h2>
        <small style={hidden} id="small">我只是想確認我沒有寄錯信 :P (答案可從游標指到圖找)</small>
        <input onChange={this.handleChange} id="input_field" name="answer" style={hidden} className={input_classes.join(" ")} placeholder="請填寫" />
        <button id="cta" style={hidden} onClick={this.btn1Clicked}>打開信</button>

        <svg viewBox="0 0 215 110">
            <polygon className="polymorph" points="215,110 0,110 0,0 49.3,0 215,0" />
        </svg>

        <div id="blip">
            
        </div>

        <BirthdayCard hidden={this.state.answer} />

        <h1 style={{position: "absolute", left: "5%", bottom: "10%"}}>Built by
          <span
             className="txt-rotate"
             data-period="2000"
             data-rotate='[ " Christopher Wang.", " 王皓宇", " 多多", " 弟弟" ]'></span>
        </h1>
      </div>
    );
  }
}

export default App;
