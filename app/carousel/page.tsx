"use client";
import React, { useState, useEffect } from "react";
import "../carousel/styles.css"


export default function Carousel(){
    return(
    <div className = "banner">
    <div className="slider" style={{"--quantity": 10} as React.CSSProperties}>
            <div 
                className="item"  style={{"--position": 1} as React.CSSProperties}><img src="/images/image1.png"/>
            </div>
             <div 
                className="item"  style={{"--position": 2} as React.CSSProperties}><img src="/images/image2.png"/>
            </div>
             <div 
                className="item"  style={{"--position": 3} as React.CSSProperties}><img src="/images/image3.png"/>
            </div>
             <div 
                className="item"  style={{"--position": 4} as React.CSSProperties}><img src="/images/image4.png"/>
            </div>
             <div 
                className="item"  style={{"--position": 5} as React.CSSProperties}><img src="/images/image5.png"/>
            </div>
             <div 
                className="item"  style={{"--position": 6} as React.CSSProperties}><img src="/images/image6.png"/>
            </div>
             <div 
                className="item"  style={{"--position": 7} as React.CSSProperties}><img src="/images/image7.png"/>
            </div>
             <div 
                className="item"  style={{"--position": 8} as React.CSSProperties}><img src="/images/image8.png"/>
            </div>
             <div 
                className="item"  style={{"--position": 9} as React.CSSProperties}><img src="/images/image9.png"/>
            </div>
             <div 
                className="item"  style={{"--position": 10} as React.CSSProperties}><img src="/images/image10.png"/>
            </div>

          
          
          
          
          
          

             
          
          
          
          
          
          
            

        </div>
        </div>


    )

};

