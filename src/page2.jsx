import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page2() {
  const wrapperRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: heroRef.current,
      scrub: true
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full min-h-[200vh]">

      {/* IMAGE (PINNED) */}
      <section
        ref={heroRef}
        className="absolute top-0 left-0 h-screen w-full overflow-hidden z-0"
      >
        <img
          src="/img2.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </section>

      {/* OVERLAY CONTENT (SCROLLS OVER IMAGE) */}
      <section className="relative z-10 min-h-[200vh] px-10 py-32 text-white custom-gradient2  " >
        <div className=" bg- mt-92">
        <h1 className="text-4xl mb-6">Scrolling Content</h1>
        <p className="max-w-xl text-lg">
          This content scrolls directly over the pinned image.
          No empty scroll. No delay.
        </p>

        </div>
      </section>

    </div>
  );
}

export default Page2;
