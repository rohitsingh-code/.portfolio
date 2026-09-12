import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { useRef } from "react";

const FONT_WEIGHTS = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 }
}

const renderText = (text: string, className: string, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span key={i} className={className} style={{ 
      fontVariationSettings: `'wght' ${baseWeight}`,
      fontWeight: baseWeight,
      }}>
      {char === " " ? '\u00A0' : char}
    </span>
  ))
}

const setupTextHover = (container: HTMLElement | null , type: keyof typeof FONT_WEIGHTS) => {
  if (!container) return() => {};

  const letters = container.querySelectorAll("span");
  const { min, max, default: base } = FONT_WEIGHTS[type];

  const animateLetter = (letter: HTMLSpanElement, weight: number, duration = 0.25) => {
    return gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `'wght' ${weight}`,
      fontWeight: weight,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    const{left} = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter: any) => {
      const { left: l, width: w } = letter.getBoundingClientRect();
      const distance = Math.abs(mouseX - (l - left + w/2));
      const intensity = Math.exp(-(distance ** 2) / 20000); // changed 200 to 20000 for smoothness

      animateLetter(letter, min + (max - min) * intensity);
    });
  };

  const handleMouseLeave = () => letters.forEach((letter) => animateLetter(letter, base, 0.3));

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  return() => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
};


const Welcome = () => {
  const titleref = useRef(null);
  const subtitleref = useRef(null);

  useGSAP(() => {
    const titleCleanup = setupTextHover(titleref.current, "title");
    const subtitleCleanup = setupTextHover(subtitleref.current, "subtitle");

    return() => {
      subtitleCleanup?.();
      titleCleanup?.();
    };
  },[])

  return <section id="welcome">
    <p ref={subtitleref}>
      {renderText(
        "Hey, I'm Rohit! Welcome to my",
        "text-3xl font-georama",
        100,
      )}
    </p>
    <h1 ref={titleref} className="mt-7">
      {renderText("PortFolio", "text-9xl italic font-georama")}
    </h1>
    
    <div className="small-screen">
      <p>This Portfolio is designed for destop screen only.</p>
    </div>
  </section>;
}

export default Welcome;
