import { useEffect, useRef } from "react";
import gsap from "gsap";

function TxtAnimation() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <>
      
        <h1
          ref={textRef}
          className="text-zinc-300 text-5xl font-bold"
        >
          Rockstar Style Text
        </h1>
      
    </>
  );
}

export default TxtAnimation;
