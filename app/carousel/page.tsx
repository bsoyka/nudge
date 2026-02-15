"use client";
import React, { useState, useEffect } from "react";
import "../carousel/styles.css"


export default function Carousel(){
    return(
    <div className = "banner">
    <div className="slider" style={{"--quantity": 10} as React.CSSProperties}>
             <div className="item" style={{transform: "rotateY(0deg) translateZ(550px)"}}><img src="/images/image1.png"/></div>
             <div className="item" style={{transform: "rotateY(36deg) translateZ(550px)"}}><img src="/images/image2.png"/></div>
             <div className="item" style={{transform: "rotateY(72deg) translateZ(550px)"}}><img src="/images/image3.png"/></div>
             <div className="item" style={{transform: "rotateY(108deg) translateZ(550px)"}}><img src="/images/image4.png"/></div>
            <div className="item" style={{transform: "rotateY(144deg) translateZ(550px)"}}><img src="/images/image5.png"/></div>
            <div className="item" style={{transform: "rotateY(180deg) translateZ(550px)"}}><img src="/images/image6.png"/></div>
             <div className="item" style={{transform: "rotateY(216deg) translateZ(550px)"}}><img src="/images/image7.png"/></div>
              <div className="item" style={{transform: "rotateY(252deg) translateZ(550px)"}}><img src="/images/image8.png"/></div>
               <div className="item" style={{transform: "rotateY(288deg) translateZ(550px)"}}><img src="/images/image9.png"/></div>
                <div className="item" style={{transform: "rotateY(324deg) translateZ(550px)"}}><img src="/images/image10.png"/></div>
             
             

          
          
          
          
          
          

             
          
          
          
          
          
          
            

        </div>
        </div>


    )

};

