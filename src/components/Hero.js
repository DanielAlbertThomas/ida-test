// src/components/Hero.js
import React from "react";
import styles from "./Hero.css"; 
import { useState } from "react";
// Import the CSS module

// function Hero() {
//   return (
//     <div className={styles.weDesignText}>
//       <div className={styles.heading3}>
//         <div className={styles.weDesign}>
//           <span className={styles.weDesignTxtContainer}>
//             <span>{`We `}</span>
//             <span className={styles.design}>Design</span>
//             <span>{` `}</span>
//           </span>
//         </div>
//       </div>
//       <b className={styles.animateAmaze}>Animate Amaze.</b>
//     </div>
//   );
// }
function Hero(){
  const [cards,setCard]=useState([
      {
          id:1,
          design:"design.png"
      },
      {
          id:2,
          design:"animation.png"
      },
      {
          id:3,
          text:"A Good Design is one that can reflect the business goals that we design and can be conveyed to consumers with the appropriate target."
      }
  ])
  return(
      <div>
          <div className="we">We</div>
          <div className="design_data">Design</div>
          <div className="animate">Animate Amaze</div>
          {/* <img src="anime.png" alt="anime" className="anime"/> */}
          <video class="anime" autoPlay loop controls muted>
              <source src="anime_video.mp4" type="video/mp4"/>
          </video>
          <div className="creative">Creative</div>
          <div className="design">Design</div>
          <div className="outstadning">Outstanding</div>
          <div className="animation">Animation</div>
          {/* <img src="grass.png" alt="grass" className="grass"/> */}
          <video src="grass_video.mp4" alt="grass" className="grass" controls muted />
          <div className="flexbox">
              {cards.map((card)=>(
              <div key={card.id}>
                  <img src={card.design} alt={card.design} className="boxes" />
                  <p className="text">{card.text}</p>
              </div>       
              ))
          }
          </div>
      </div>
  )
}

export default Hero;
