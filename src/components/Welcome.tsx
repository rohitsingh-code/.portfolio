import { gsap } from "gsap/gsap-core";
import { useRef } from "react";

// const FONT_WEIGHTS = {
//   {
//     min:100, max
//   }
// }

const renderText = (text: any, className: any, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span key={i} className={className} style={{ fontVariationSettings: `'whgt ${baseWeight}` }}>
      {char === " " ? '\u00A0' : char}
    </span>
  ))
}

// const setupTextHover = (container: any, type: any) => {
//   if (!container) return;

//   const letters = container.querySelectorAll("span");
//   const { min, max, default: base } = FONT_WEIGHTS[type];

//   const animateLetter = (letter, weight, duration = 0.25) => {
//     return gsap.to(letter, {
//       duration,
//       ease: "power2.out",
//       fontVariationSettings: `'whgt ${weight}`,
//     });
//   };

//   const handleMouseMove = (e) => {
//     const{left} = 
//   }
// }

const Welcome = () => {
  const titleref = useRef(null);
  const subtitleref = useRef(null);

  return <section id="welcome">
    <p ref={subtitleref}>
      {renderText(
        "Hey, I'm Rohit! Welcome to my",
        "text-3xl font genorama",
        100,
      )}
    </p>
    <h1 ref={titleref} className="mt-7">
      {renderText("PortFolio", "text-9xl italic font-genorama")}
    </h1>
    
    <div className="small-screen">
      <p>This Portfolio is designed for destop screen only.</p>
    </div>
  </section>;
}

export default Welcome;
