import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./App.css";
  
import Page2 from "./page2";

// Loader
import Loader from "./loading/Loader";
import useImageLoader from "./useImageLoader";
import TxtAnimation from "./TxtAnimation";
 
gsap.registerPlugin(ScrollTrigger);

const gradients = [
  "linear-gradient(to bottom, #1a1a1a, #000000)",
  "linear-gradient(to bottom, #2c2c2c, #050505)",
  "linear-gradient(to bottom, #111111, #1f1f1f)",
];

function App() {
  const imagesLoaded = useImageLoader();

  useEffect(() => {
    document.body.style.overflow = imagesLoaded ? "auto" : "hidden";
  }, [imagesLoaded]);

  useEffect(() => {
    if (!imagesLoaded) return;

    gsap.to("#loader", {
      opacity: 0,
      duration: 0.8,
      pointerEvents: "none",
    });

    ScrollTrigger.refresh();
  }, [imagesLoaded]);

  const containerRef = useRef(null);
  const firstRef = useRef(null);

  useEffect(() => {
    if (!imagesLoaded) return;

    const gradientTL = gsap.timeline({ repeat: -1 });

    gradients.forEach((grad) => {
      gradientTL
        .to(containerRef.current, {
          background: grad,
          duration: 2.5,
          ease: "power2.inOut",
        })
        .to({}, { duration: 1.5 });
    });

    ScrollTrigger.create({
      trigger: firstRef.current,
      start: "bottom bottom",
      onEnter: () => gradientTL.pause(),
      onLeaveBack: () => gradientTL.play(),
    });

    gsap.to(firstRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: firstRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      gradientTL.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [imagesLoaded]);

  return (
    <>
      {!imagesLoaded && <Loader />}

      <div ref={containerRef} className="relative w-full min-h-screen">

         {/* FIRST SECTION  */}
        <section
          ref={firstRef}
          className="relative h-[90vh] w-full flex z-10"
        >
          <img
            src="/img2.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative z-10 m-32">

            {imagesLoaded && <TxtAnimation />}
          </div>

          <div className="absolute inset-0 custom-gradient z-0" />
        </section>

         {/* SECOND SECTION  */}

        <section className="h-screen"></section>

        <Page2 />

        <div className="w-full h-[200vh] bg-black" />
      </div>
    </>
  );
}

export default App;
