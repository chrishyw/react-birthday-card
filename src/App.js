import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import React, { Component } from 'react';
import "./App.css";
import anime from "animejs";
import picture from "./S__42827780.jpg"
import omg from "./omg.jpg"

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

    let div_style = this.state.answer ? {backgroundImage: `url(${picture})`, backgroundRepeat: "no-repeat", backgroundSize: "cover"} : {backgroundImage: "none"};
    let hidden = this.state.answer ? {display: "none"} : {display: "block"};
    let input_classes = this.state.incorrect ? ["form-control", "invalid"] : ["form-control"];

    return (
      <div className="App" style={div_style}>
        <img id="omg" src={omg} style={hidden} title="BL" />
        <h2 style={hidden} id="question">請問這位喜歡看的東西是什麼?</h2>
        <small style={hidden} id="small">我只是想確認我沒有寄錯信 :P (答案可從游標指到圖找)</small>
        <input onChange={this.handleChange} id="input_field" name="answer" style={hidden} className={input_classes.join(" ")} placeholder="請填寫" />
        <button id="cta" style={hidden} onClick={this.btn1Clicked}>打開信</button>

        <svg viewBox="0 0 215 110">
            <polygon className="polymorph" points="215,110 0,110 0,0 49.3,0 215,0" />
        </svg>

        <div id="blip">
            <div id="card_msg">
              <h1>臭老爸:</h1>
              <p>Isn't it cool? Here's a little more text to know that what AnimeJS can do to your webpage.</p>

              <p style={{position: "absolute", bottom: "-10px", right: "2px"}}>臭兒子</p>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
