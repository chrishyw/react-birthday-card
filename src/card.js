import React from "react";

const Card = (props) => {
	let hidden = !props.hidden ? {display: "none"} : {display: "block"};
	return(

		<div className="card" style={hidden} >
		  <div className="back"></div>
		  <div className="front">
		    <div className="cover-shape-large">
		      <div className="shape-diamond"></div>
		      <div className="shape-block"></div>
		    </div>
		    <div className="cover-shape-small">
		      <div className="shape-diamond"></div>
		      <div className="shape-block">
		        <div className="cake">
		          <div className="layer layer-bottom"></div>
		          <div className="layer layer-middle"></div>
		          <div className="layer layer-top"></div>
		          <div className="icing"></div>
		          <div className="drip drip1"></div>
		          <div className="drip drip2"></div>
		          <div className="drip drip3"></div>
		          <div className="candle">
		            <div className="flame"></div>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		  
		  <div className="text-container">
		    <p id="head">臭老爸生日快樂!</p>
		    <p>想說這次剛好在準備Portfolio的時候幫老爸做一個簡單的網路生日卡，這是我花一些時間做的以後我會花多點心思。 我前幾天有夢到我跟全家在鼎泰豐慶祝老爸的生日，希望以後有機會可以和全家
              一起幫你過生日! 我還是一樣很謝謝老爸跟老媽一路來的幫助跟支持。 願老爸事業成功跟身體健康! 生日快樂老爸!</p>
		    <p>臭兒子</p>
		  </div>
		</div>
	);
}

export default Card;